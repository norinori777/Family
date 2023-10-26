package jp.norinori777.domain.model.Rest;

import java.util.Map;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class RestResult<T> {

	private int result;
	private T data;
	private Map<String, String>errors;
	
	public RestResult(int result){
		this.result = result;
		this.data = null;
		this.errors = null;
	}
	public RestResult(int result, Map<String, String> errors){
		this.result = result;
		this.data = null;
		this.errors = errors;
	}
	public RestResult(int result, T data){
		this.result = result;
		this.data = data;
		this.errors = null;
	}	
}
