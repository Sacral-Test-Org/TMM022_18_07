package com.example.tmm022_fmb.controller;

import com.example.tmm022_fmb.service.UnitService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/unit")
public class UnitController {

    @Autowired
    private UnitService unitService;

    @GetMapping("/validate")
    public ResponseEntity<String> validateUnitIdAndName(
            @RequestParam("unitId") String unitId,
            @RequestParam("unitName") String unitName,
            @RequestParam("globalParam") String globalParam) {
        
        boolean isValid = unitService.validateUnitIdAndName(unitId, unitName, globalParam);
        
        if (isValid) {
            return ResponseEntity.ok("Unit ID and Unit Name are valid.");
        } else {
            return ResponseEntity.badRequest().body("Invalid Unit ID or Unit Name.");
        }
    }
}
