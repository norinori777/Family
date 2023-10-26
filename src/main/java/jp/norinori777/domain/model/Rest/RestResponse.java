package jp.norinori777.domain.model.Rest;

import java.util.Map;

import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;

public class RestResponse<T>{
    private int code;
    private Map<String,String> error;
    private T data;
    private HttpStatusCode status;


    public RestResponse(int code, Map<String,String> error, T data, HttpStatusCode status){
        this.code = code;
        this.error = error;
        this.data = data;
        this.status = status;
    }
    

    public ResponseEntity<RestResult<T>> createRestResponse(){
        if(error == null && data == null){
            return new ResponseEntity<>(new RestResult<T>(code), status);
        }
        if(error == null && data != null){
            return new ResponseEntity<>(new RestResult<T>(code, data), status);
        }
        if(error != null && data == null){
            return new ResponseEntity<>(new RestResult<T>(code, error), status);
        }
        if(error != null && data != null){
            return new ResponseEntity<>(new RestResult<T>(code, data, error), status);
        }
        return null;
    }
}