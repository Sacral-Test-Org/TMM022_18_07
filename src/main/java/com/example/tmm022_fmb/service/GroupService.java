package com.example.tmm022_fmb.service;

import com.example.tmm022_fmb.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class GroupService {

    @Autowired
    private GroupRepository groupRepository;

    /**
     * Fetch the 'GROUP_LOV' list of values from the database.
     * 
     * @return List of values for GROUP_LOV
     */
    public List<Map<String, Object>> fetchGroupLOV() {
        return groupRepository.fetchGroupLOV();
    }

    /**
     * Fetch the 'EDIT_GROUP_LOV' list of values from the database.
     * 
     * @return List of values for EDIT_GROUP_LOV
     */
    public List<Map<String, Object>> fetchEditGroupLOV() {
        return groupRepository.fetchEditGroupLOV();
    }

    /**
     * Validate Group ID and Group Name against the database.
     * 
     * @param groupId The ID of the group to validate
     * @param groupName The name of the group to validate
     * @param globalParam The global parameter to determine validation logic
     * @param unitId The unit ID for validation
     * @return true if the group ID and name are valid, false otherwise
     */
    public boolean validateGroupID(String groupId, String groupName, int globalParam, String unitId) {
        if (globalParam == 0) {
            return groupRepository.validateGroupIDForGlobalParam0(groupId, groupName, unitId);
        } else if (globalParam == 1) {
            return groupRepository.validateGroupIDForGlobalParam1(groupId, groupName, unitId);
        }
        return false;
    }
}
