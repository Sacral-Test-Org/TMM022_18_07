package com.example.tmm022_fmb.service;

import com.example.tmm022_fmb.repository.LineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class LineService {

    @Autowired
    private LineRepository lineRepository;

    /**
     * Fetch the list of Line IDs from the repository.
     * 
     * @return List of Line IDs.
     */
    public List<String> getLineIdList() {
        return lineRepository.getLineIdList();
    }

    /**
     * Validate Line ID and Line Description against the database.
     * 
     * @param lineId The Line ID to validate.
     * @param lineDesc The Line Description to validate.
     * @return Validation result and error message if validation fails.
     */
    public boolean validateLineId(String lineId, String lineDesc) {
        return lineRepository.validateLineId(lineId, lineDesc);
    }
}
