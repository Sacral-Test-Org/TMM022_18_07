package com.example.tmm022_fmb.repository;

import com.example.tmm022_fmb.model.Part;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PartRepository extends JpaRepository<Part, Long> {

    // Method to find a Part entity by its description
    Part findByDescription(String description);

    // Method to find a Part entity by its ID
    Part findById(Long id);

    // Method to validate Unit ID and Unit Name
    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN TRUE ELSE FALSE END FROM Part p WHERE p.unitId = :unitId AND p.unitName = :unitName")
    boolean findByUnitIdAndUnitName(@Param("unitId") Long unitId, @Param("unitName") String unitName);

    // Method to validate Unit ID and Unit Name in both tables
    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN TRUE ELSE FALSE END FROM Part p WHERE p.unitId = :unitId AND p.unitName = :unitName")
    boolean findByUnitIdAndUnitNameInBothTables(@Param("unitId") Long unitId, @Param("unitName") String unitName);

    // Method to fetch the list of Line IDs from the database
    @Query("SELECT DISTINCT p.lineId FROM Part p")
    List<Long> getLineIdList();

    // Method to validate Line ID and Line Description against the database
    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN TRUE ELSE FALSE END FROM Part p WHERE p.lineId = :lineId AND p.lineDesc = :lineDesc")
    boolean validateLineId(@Param("lineId") Long lineId, @Param("lineDesc") String lineDesc);

    // Method to check if a part with the given UNIT_ID, GROUP_ID, LINE_ID, and PARTNO exists in the database
    @Query("SELECT CASE WHEN COUNT(p) > 0 THEN TRUE ELSE FALSE END FROM Part p WHERE p.unitId = :unitId AND p.groupId = :groupId AND p.lineId = :lineId AND p.partNo = :partNo")
    boolean existsByUnitIdAndGroupIdAndLineIdAndPartNo(@Param("unitId") Long unitId, @Param("groupId") Long groupId, @Param("lineId") Long lineId, @Param("partNo") String partNo);

    // Method to save the part entity to the database
    @Override
    Part save(Part part);
}
