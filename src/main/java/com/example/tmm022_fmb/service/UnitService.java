package com.example.tmm022_fmb.service;

import com.example.tmm022_fmb.repository.UnitRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UnitService {

    @Autowired
    private UnitRepository unitRepository;

    /**
     * Validates the Unit ID and Unit Name based on the global parameter.
     *
     * @param unitId the Unit ID to validate
     * @param unitName the Unit Name to validate
     * @param globalParam the global parameter to determine the validation logic
     * @return true if the Unit ID and Unit Name are valid, false otherwise
     */
    public boolean validateUnitIdAndName(String unitId, String unitName, String globalParam) {
        if ("PARAM1".equals(globalParam)) {
            return unitRepository.findByUnitIdAndUnitName(unitId, unitName) != null;
        } else if ("PARAM2".equals(globalParam)) {
            return unitRepository.findByUnitIdAndUnitNameInBothTables(unitId, unitName) != null;
        }
        return false;
    }
}
