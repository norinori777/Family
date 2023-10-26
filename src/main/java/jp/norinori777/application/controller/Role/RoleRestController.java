package jp.norinori777.application.controller.Role;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import jp.norinori777.application.service.Role.ListMasterRoleService;
import jp.norinori777.domain.model.Rest.RestResponse;
import jp.norinori777.domain.model.Rest.RestResult;
import jp.norinori777.domain.model.Role.MasterRole;
import lombok.extern.slf4j.Slf4j;

@RestController
@RequestMapping("/roll")
@Slf4j
public class RoleRestController {
    @Autowired
    private ListMasterRoleService listMasterRollService;

    @GetMapping("list")
    public ResponseEntity<RestResult<List<MasterRole>>> MasterRoleList() {
        List<MasterRole> masterRoles;
        try {
            masterRoles = listMasterRollService.getMasterRoles();
        } catch(Exception e) {
            log.error(e.getMessage(), e);
            RestResponse<List<MasterRole>> restResponse = new RestResponse<List<MasterRole>>(99, null, null, HttpStatus.INTERNAL_SERVER_ERROR);
			return restResponse.createRestResponse();
        }
        RestResponse<List<MasterRole>> restResponse = new RestResponse<List<MasterRole>>(0, null, masterRoles, HttpStatus.OK);
        return restResponse.createRestResponse();
    }
}