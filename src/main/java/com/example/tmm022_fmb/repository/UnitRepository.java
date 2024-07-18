package com.example.tmm022_fmb.repository;

import com.example.tmm022_fmb.entity.Unit;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UnitRepository extends JpaRepository<Unit, Long> {

    @Query("SELECT u FROM Unit u WHERE u.unitId = :unitId AND u.unitName = :unitName")
    Unit findByUnitIdAndUnitName(@Param("unitId") String unitId, @Param("unitName") String unitName);

    @Query("SELECT u FROM Unit u WHERE u.unitId = :unitId AND u.unitName = :unitName " +
           "UNION " +
           "SELECT u FROM AnotherTable u WHERE u.unitId = :unitId AND u.unitName = :unitName")
    List<Unit> findByUnitIdAndUnitNameInBothTables(@Param("unitId") String unitId, @Param("unitName") String unitName);
}