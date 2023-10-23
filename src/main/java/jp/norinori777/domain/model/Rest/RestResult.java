package jp.norinori777.domain.model.Rest;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.MessageSource;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RestResult {

	private int result;
	private Map<String, String>errors;
	
	// public RestResult(int result, BindingResult bindingResult, Locale locale){
	// 	this.result = result;
	// 	if(bindingResult.hasErrors()) {
	// 		Map<String, String> errors = new HashMap<>();
	// 		List<FieldError> fieldErrors = bindingResult.getFieldErrors();
	// 		for (FieldError error : fieldErrors) {
	// 			String message = messageSource.getMessage(error, locale);
	// 			errors.put(error.getField(), message);
	// 		}
	// 		this.errors = errors;
	// 	}
	// }
	public RestResult(int result){
		this.result = result;
		this.errors = null;
	}
}
