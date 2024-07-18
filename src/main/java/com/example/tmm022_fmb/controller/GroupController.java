package com.example.tmm022_fmb.controller;

import com.example.tmm022_fmb.service.GroupService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/groups")
public class GroupController {

    @Autowired
    private GroupService groupService;

    @GetMapping("/lov")
    public ResponseEntity<?> getGroupLOV() {
        try {
            return ResponseEntity.ok(groupService.fetchGroupLOV());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching Group LOV");
        }
    }

    @GetMapping("/edit-lov")
    public ResponseEntity<?> getEditGroupLOV() {
        try {
            return ResponseEntity.ok(groupService.fetchEditGroupLOV());
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error fetching Edit Group LOV");
        }
    }

    @GetMapping("/validate/{groupId}/{groupName}")
    public ResponseEntity<?> validateGroupID(@PathVariable String groupId, @PathVariable String groupName) {
        try {
            boolean isValid = groupService.validateGroupID(groupId, groupName);
            return ResponseEntity.ok(isValid);
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error validating Group ID");
        }
    }
}
