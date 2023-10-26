package jp.norinori777.application.controller.User;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.dao.OptimisticLockingFailureException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.norinori777.application.controller.User.Model.RegistUser;
import jp.norinori777.application.controller.User.Model.RegistUserForm;
import jp.norinori777.application.service.User.ListUserService;
import jp.norinori777.application.service.User.RegistUserService;
import jp.norinori777.application.service.User.UserService;
import jp.norinori777.domain.model.Null.NullData;
import jp.norinori777.domain.model.Rest.RestResponse;
import jp.norinori777.domain.model.Rest.RestResult;
import jp.norinori777.domain.model.User.User;
import jp.norinori777.domain.model.User.UserAccountCredential;
import jp.norinori777.form.User.UserDelete;
import jp.norinori777.form.User.UserEdit;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/user")
@Slf4j
public class UserRestController {
	@Autowired
	private RegistUserService registUserService;
	
	@Autowired
	private ListUserService listUserService;

	@Autowired
	private UserService userService;
	
	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private MessageSource messageSource;
	
	@PostMapping("add")	
	public ResponseEntity<RestResult<NullData>> RegistUser(Model model, @ModelAttribute @Validated RegistUserForm form, BindingResult bindingResult, Locale locale) {
		if(bindingResult.hasErrors()) {
			Map<String, String> errors = getErrorMessages(bindingResult, locale);
			RestResponse<NullData> response = new RestResponse<NullData>(93, errors, null, HttpStatus.BAD_REQUEST);
			return response.createRestResponse();
		}
		log.info(form.toString());
		RegistUser registUser = modelMapper.map(form, RegistUser.class);
		log.info(registUser.toString());
		try {
			registUserService.addUser(registUser);
		} catch(Exception e) {
			log.error(e.getMessage(), e);
			RestResponse<NullData> response = new RestResponse<NullData>(99, null, null, HttpStatus.INTERNAL_SERVER_ERROR);

			return response.createRestResponse();
		}
		
		ResponseEntity<RestResult<NullData>> responseEntity = new ResponseEntity<>(new RestResult<NullData>(0, null, null), HttpStatus.OK);
		return responseEntity;
	}

	@PutMapping("update")
	// @ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<RestResult<NullData>> UpdateUser(Model model, @ModelAttribute @Validated UserEdit form, BindingResult bindingResult, Locale locale) {
		if(bindingResult.hasErrors()) {
			Map<String, String> errors = getErrorMessages(bindingResult, locale);
			RestResponse<NullData> restResponse = new RestResponse<NullData>(90, errors, null, HttpStatus.BAD_REQUEST);
			
			return restResponse.createRestResponse();
		}
		log.info(form.toString());
		User editUserData = modelMapper.map(form, User.class);
		log.info(editUserData.toString());
		try {
			userService.updateUser(editUserData, form.getBeforeEmailAddress(), form.getVersion());
		}catch(OptimisticLockingFailureException e){
			RestResponse<NullData> restResponse = new RestResponse<NullData>(91, null, null, HttpStatus.CONFLICT);
			
			return restResponse.createRestResponse();
		}
		RestResponse<NullData> restResponse = new RestResponse<NullData>(0, null, null, HttpStatus.OK);
		return restResponse.createRestResponse();
	}
	
	@GetMapping("list")	
	public ResponseEntity<RestResult<List<User>>> ListUsers() {
		UserAccountCredential user =(UserAccountCredential) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		log.info(user.getUsername());
		log.info(user.getPassword());
		List<User> users = listUserService.getUsers();
		RestResponse<List<User>> restResponse = new RestResponse<List<User>>(0, null, users, HttpStatus.OK);
		return restResponse.createRestResponse();
	}

	@DeleteMapping("delete")
	public ResponseEntity<RestResult<NullData>> deleteUser(@ModelAttribute @Validated UserDelete form, BindingResult bindingResult, Locale locale) {
		try{
			User deleteUserData = modelMapper.map(form, User.class);
			userService.deleteUser(deleteUserData.getEmailAddress());

		}catch(RuntimeException e){
			log.error(e.getMessage(), e);
			RestResponse<NullData> restResponse = new RestResponse<NullData>(94, null, null, HttpStatus.NOT_FOUND);
			return restResponse.createRestResponse();
		}catch(Exception e){
			log.error(e.getMessage(), e);
			RestResponse<NullData> response = new RestResponse<NullData>(99, null, null, HttpStatus.INTERNAL_SERVER_ERROR);
			return response.createRestResponse();
		}
		RestResponse<NullData> response = new RestResponse<NullData>(0, null, null, HttpStatus.OK);
		return response.createRestResponse();
	}

	@GetMapping("id")	
	public Integer getUserId() {
		User user;
		UserAccountCredential accountCredential =(UserAccountCredential) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		try{
			user = userService.getUser(accountCredential.getEmailAddress());
		} catch (Exception e) {
			log.error(e.getMessage(), e);
			return null;
		}
		return user.getUserId();
	}

	private Map<String, String> getErrorMessages(BindingResult bindingResult, Locale locale){
		Map<String, String> errors = new HashMap<>();
		List<FieldError> fieldErrors = bindingResult.getFieldErrors();
		for (FieldError error : fieldErrors) {
			String message = messageSource.getMessage(error, locale);
			errors.put(error.getField(), message);
		}
		return errors;
	}
}