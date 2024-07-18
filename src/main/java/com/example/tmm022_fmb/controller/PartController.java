package com.example.tmm022_fmb.controller;

import com.example.tmm022_fmb.service.PartService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/parts")
public class PartController {

    @Autowired
    private PartService partService;

    @PostMapping("/validateAndUpdatePartDescription")
    public ResponseEntity<?> validateAndUpdatePartDescription(@RequestParam String partDescription) {
        boolean isValid = partService.validateAndUpdatePartDescription(partDescription);
        if (isValid) {
            return ResponseEntity.ok("Part description updated successfully.");
        } else {
            return ResponseEntity.badRequest().body("Invalid part description.");
        }
    }

    @PostMapping("/validateNextItem")
    public ResponseEntity<?> validateNextItem(@RequestParam String currentItem) {
        boolean isValid = partService.validateNextItem(currentItem);
        if (isValid) {
            return ResponseEntity.ok("Next item validated successfully.");
        } else {
            return ResponseEntity.badRequest().body("Invalid item.");
        }
    }

    @PostMapping("/validatePartStatus")
    public ResponseEntity<?> validatePartStatus(@RequestParam String partStatus) {
        boolean isValid = partService.validatePartStatus(partStatus);
        if (isValid) {
            return ResponseEntity.ok("Part status is valid.");
        } else {
            return ResponseEntity.badRequest().body("Invalid part status.");
        }
    }

    @PostMapping("/validateRequiredFields")
    public ResponseEntity<?> validateRequiredFields(@RequestBody Map<String, Object> fields) {
        boolean isValid = partService.validateRequiredFields(fields);
        if (isValid) {
            return ResponseEntity.ok("All required fields are valid.");
        } else {
            return ResponseEntity.badRequest().body("Some required fields are invalid.");
        }
    }

    @PostMapping("/validateUnitIdAndName")
    public ResponseEntity<?> validateUnitIdAndName(@RequestParam String unitId, @RequestParam String unitName, @RequestParam String globalParam) {
        boolean isValid = partService.validateUnitIdAndName(unitId, unitName, globalParam);
        if (isValid) {
            return ResponseEntity.ok("Unit ID and Name are valid.");
        } else {
            return ResponseEntity.badRequest().body("Invalid Unit ID or Name.");
        }
    }

    @GetMapping("/lineIds")
    public ResponseEntity<?> getLineIdList() {
        return ResponseEntity.ok(partService.getLineIdList());
    }

    @PostMapping("/validateLineId")
    public ResponseEntity<?> validateLineId(@RequestParam String lineId, @RequestParam String lineDesc) {
        boolean isValid = partService.validateLineId(lineId, lineDesc);
        if (isValid) {
            return ResponseEntity.ok("Line ID and Description are valid.");
        } else {
            return ResponseEntity.badRequest().body("Invalid Line ID or Description.");
        }
    }

    @PostMapping("/checkPartExists")
    public ResponseEntity<?> checkPartExists(@RequestParam String unitId, @RequestParam String groupId, @RequestParam String lineId, @RequestParam String partNo) {
        boolean exists = partService.checkPartExists(unitId, groupId, lineId, partNo);
        return ResponseEntity.ok(exists);
    }

    @PostMapping("/savePart")
    public ResponseEntity<?> savePart(@RequestParam String unitId, @RequestParam String groupId, @RequestParam String lineId, @RequestParam String partNo, @RequestParam String partDesc, @RequestParam String partStatus) {
        partService.savePart(unitId, groupId, lineId, partNo, partDesc, partStatus);
        return ResponseEntity.ok("Part saved successfully.");
    }

    @PutMapping("/updatePart")
    public ResponseEntity<?> updatePart(@RequestParam String unitId, @RequestParam String groupId, @RequestParam String lineId, @RequestParam String partNo, @RequestParam String partDesc, @RequestParam String partStatus, @RequestParam Long partId) {
        partService.updatePart(unitId, groupId, lineId, partNo, partDesc, partStatus, partId);
        return ResponseEntity.ok("Part updated successfully.");
    }
}
