package jp.norinori777.application.controller.RegistUser;

import java.util.List;
import java.util.Locale;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.norinori777.application.controller.RegistUser.Model.RegistUser;
import jp.norinori777.application.controller.RegistUser.Model.RegistUserForm;
import jp.norinori777.application.controller.Rest.Model.RestResult;
import jp.norinori777.domain.model.User.ListUserService;
import jp.norinori777.domain.model.User.RegistUserService;
import jp.norinori777.domain.model.User.User;
import jp.norinori777.domain.model.User.UserAccountCredential;
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
	
	@PostMapping("add")	
	public RestResult RegistUser(Model model, @ModelAttribute @Validated RegistUserForm form, BindingResult bindingResult, Locale locale) {
		if(bindingResult.hasErrors()) {
			return new RestResult(90, bindingResult, locale);
		}
		log.info(form.toString());
		RegistUser registUser = modelMapper.map(form, RegistUser.class);
		log.info(registUser.toString());
		registUserService.addUser(registUser);
		
		return new RestResult(0, bindingResult, locale);
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