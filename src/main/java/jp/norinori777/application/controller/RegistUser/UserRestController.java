package jp.norinori777.application.controller.RegistUser;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.norinori777.domain.ListUsers.service.ListUserService;
import jp.norinori777.domain.RegistUser.RegistUser;
import jp.norinori777.domain.RegistUser.service.RegistUserService;
import jp.norinori777.domain.Rest.RestResult;
import jp.norinori777.domain.user.model.User;
import jp.norinori777.domain.user.model.UserAccountCredential;
import jp.norinori777.form.RegistUserForm;
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
	private ModelMapper modelMapper;
		
	@Autowired
	private MessageSource messageSource;
	
	@PostMapping("add")	
	public RestResult RegistUser(Model model, @ModelAttribute @Validated RegistUserForm form, BindingResult bindingResult) {
		if(bindingResult.hasErrors()) {
			Map<String, String> errors = new HashMap<>();
			
			for(FieldError error: bindingResult.getFieldErrors()) {
				String message = messageSource.getMessage(error, null);
				errors.put(error.getField(), message);
			}
			return new RestResult(90, errors);
		}
		log.info(form.toString());
		RegistUser registUser = modelMapper.map(form, RegistUser.class);
		log.info(registUser.toString());
		registUserService.addUser(registUser);
		
		return new RestResult(0, null);
	}
	
	@GetMapping("list")	
	public List<User> ListUsers() {
		        UserAccountCredential user =(UserAccountCredential) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		log.info(user.getUsername());
		log.info(user.getPassword());
		List<User> users = listUserService.getUsers();
		return users;
	}
	
}