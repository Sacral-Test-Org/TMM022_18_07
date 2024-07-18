package com.example.tmm022_fmb.service;

import com.example.tmm022_fmb.repository.PartRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@Service
public class PartService {

    @Autowired
    private PartRepository partRepository;

    public String validateAndUpdatePartDescription(String partDescription) {
        // Validate the part description
        if (partDescription == null || partDescription.isEmpty()) {
            return "Part description cannot be null or empty";
        }

        // Update the part description
        // Assuming partRepository has a method to find by description
        if (partRepository.findByDescription(partDescription) != null) {
            return "Part description already exists";
        }

        // Business logic to update the part description
        // ...

        return "Part description validated and updated successfully";
    }

    public String validateNextItem(String currentItem) {
        // Validate the necessary fields when navigating to the next item
        if (currentItem == null || currentItem.isEmpty()) {
            return "Current item cannot be null or empty";
        }

        // Assuming partRepository has a method to find by ID
        if (partRepository.findById(currentItem) == null) {
            return "Current item does not exist";
        }

        // Business logic for validation
        // ...

        return "Next item validated successfully";
    }

    public String validatePartStatus(String partStatus) {
        // Check if PART_STATUS is null or invalid
        if (partStatus == null || partStatus.isEmpty()) {
            return "Part status cannot be null or empty";
        }

        // Additional validation logic
        // ...

        return "Part status validated successfully";
    }

    public List<String> validateRequiredFields(Map<String, Object> fields) {
        // Iterate through all fields and check if any are null or invalid
        List<String> errorMessages = new ArrayList<>();
        for (Map.Entry<String, Object> entry : fields.entrySet()) {
            if (entry.getValue() == null || entry.getValue().toString().isEmpty()) {
                errorMessages.add(entry.getKey() + " cannot be null or empty");
            }
        }

        return errorMessages;
    }

    public String validateUnitIdAndName(String unitId, String unitName, String globalParameter) {
        // Validate Unit ID and Unit Name based on the global parameter
        if (unitId == null || unitId.isEmpty() || unitName == null || unitName.isEmpty()) {
            return "Unit ID and Unit Name cannot be null or empty";
        }

        // Assuming UnitRepository has methods to find by Unit ID and Unit Name
        if (globalParameter.equals("0")) {
            if (partRepository.findByUnitIdAndUnitName(unitId, unitName) == null) {
                return "Unit ID and Unit Name do not match";
            }
        } else {
            if (partRepository.findByUnitIdAndUnitNameInBothTables(unitId, unitName) == null) {
                return "Unit ID and Unit Name do not match in both tables";
            }
        }

        return "Unit ID and Unit Name validated successfully";
    }

    public List<String> getLineIdList() {
        // Fetch the list of Line IDs from the repository
        return partRepository.getLineIdList();
    }

    public String validateLineId(String lineId) {
        // Validate Line ID and Line Description against the database
        if (lineId == null || lineId.isEmpty()) {
            return "Line ID cannot be null or empty";
        }

        // Assuming partRepository has a method to validate Line ID
        if (!partRepository.validateLineId(lineId)) {
            return "Line ID is invalid";
        }

        return "Line ID validated successfully";
    }

    public boolean checkPartExists(String unitId, String groupId, String lineId, String partNo) {
        // Check if a part with the given UNIT_ID, GROUP_ID, LINE_ID, and PARTNO exists
        return partRepository.existsByUnitIdAndGroupIdAndLineIdAndPartNo(unitId, groupId, lineId, partNo);
    }

    public String savePart(String unitId, String groupId, String lineId, String partNo, String partDesc, String partStatus) {
        // Save a new part with the given details
        // Assuming partRepository has a save method
        partRepository.save(new Part(unitId, groupId, lineId, partNo, partDesc, partStatus));
        return "Part saved successfully";
    }

    public String updatePart(String unitId, String groupId, String lineId, String partNo, String partDesc, String partStatus, String partId) {
        // Update the part with the given details
        // Assuming partRepository has a save method
        Part part = new Part(unitId, groupId, lineId, partNo, partDesc, partStatus);
        part.setId(partId);
        partRepository.save(part);
        return "Part updated successfully";
    }
}
