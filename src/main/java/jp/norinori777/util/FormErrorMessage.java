package jp.norinori777.util;

import java.util.HashMap;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import org.springframework.context.MessageSource;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;

public class FormErrorMessage {
    final BindingResult bindingResult;
    final Locale locale;
    final MessageSource messageSource;

    public FormErrorMessage(MessageSource messageSource, BindingResult bindingResult, Locale locale) {
        this.messageSource = messageSource;
        this.bindingResult = bindingResult;
        this.locale = locale;
    }

    public Map<String, String> getErrorMessages() {
        Map<String, String> errors = new HashMap<>();
        List<FieldError> fieldErrors = this.bindingResult.getFieldErrors();
        for (FieldError error : fieldErrors) {
            String message = this.messageSource.getMessage(error, this.locale);
            errors.put(error.getField(), message);
        }
        return errors;
    }
}