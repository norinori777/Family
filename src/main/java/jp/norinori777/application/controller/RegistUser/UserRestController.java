package jp.norinori777.application.controller.RegistUser;

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
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.norinori777.application.controller.RegistUser.Model.RegistUser;
import jp.norinori777.application.controller.RegistUser.Model.RegistUserForm;
import jp.norinori777.application.service.User.ListUserService;
import jp.norinori777.application.service.User.RegistUserService;
import jp.norinori777.application.service.User.UserService;
import jp.norinori777.domain.model.Null.NullData;
import jp.norinori777.domain.model.Rest.RestResult;
import jp.norinori777.domain.model.User.User;
import jp.norinori777.domain.model.User.UserAccountCredential;
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
	public ResponseEntity<RestResult<RegistUser>> RegistUser(Model model, @ModelAttribute @Validated RegistUserForm form, BindingResult bindingResult, Locale locale) {
		if(bindingResult.hasErrors()) {
			Map<String, String> errors = getErrorMessages(bindingResult, locale);
			ResponseEntity<RestResult<RegistUser>> responseEntity = new ResponseEntity<>(new RestResult<RegistUser>(90, errors), HttpStatus.BAD_REQUEST);
			return responseEntity;
		}
		log.info(form.toString());
		RegistUser registUser = modelMapper.map(form, RegistUser.class);
		log.info(registUser.toString());
		try {
			registUserService.addUser(registUser);
		} catch(Exception e) {
			log.error(e.getMessage(), e);
			ResponseEntity<RestResult<RegistUser>> responseEntity = new ResponseEntity<>(new RestResult<RegistUser>(99, null), HttpStatus.INTERNAL_SERVER_ERROR);
			return responseEntity;
		}
		
		ResponseEntity<RestResult<RegistUser>> responseEntity = new ResponseEntity<>(new RestResult<RegistUser>(0, registUser, null), HttpStatus.OK);
		return responseEntity;
	}

	@PutMapping("update")
	// @ResponseStatus(HttpStatus.NO_CONTENT)
	public ResponseEntity<RestResult<NullData>> UpdateUser(Model model, @ModelAttribute @Validated UserEdit form, BindingResult bindingResult, Locale locale) {
		if(bindingResult.hasErrors()) {
			Map<String, String> errors = getErrorMessages(bindingResult, locale);
			ResponseEntity<RestResult<NullData>> responseEntity = new ResponseEntity<>(new RestResult<NullData>(90, errors), HttpStatus.BAD_REQUEST);
			return responseEntity;
			// return new RestResult(90, errors);
		}
		log.info(form.toString());
		User editUserData = modelMapper.map(form, User.class);
		log.info(editUserData.toString());
		try {
			userService.updateUser(editUserData, form.getBeforeEmailAddress(), form.getVersion());
		}catch(OptimisticLockingFailureException e){
			ResponseEntity<RestResult<NullData>> responseEntity = new ResponseEntity<>(new RestResult<NullData>(91), HttpStatus.CONFLICT);
			return responseEntity;
		}
		ResponseEntity<RestResult<NullData>> responseEntity = new ResponseEntity<>(new RestResult<NullData>(0, null), HttpStatus.OK);
		return responseEntity;
	}
	
	@GetMapping("list")	
	public List<User> ListUsers() {
		UserAccountCredential user =(UserAccountCredential) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		log.info(user.getUsername());
		log.info(user.getPassword());
		List<User> users = listUserService.getUsers();
		return users;
	}

	@GetMapping("id")	
	public Integer getUserId() {
		UserAccountCredential accountCredential =(UserAccountCredential) SecurityContextHolder.getContext().getAuthentication().getPrincipal();

		User user = userService.getUser(accountCredential.getEmailAddress());
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