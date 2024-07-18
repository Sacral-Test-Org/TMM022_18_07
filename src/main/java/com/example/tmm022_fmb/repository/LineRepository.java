package com.example.tmm022_fmb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface LineRepository extends JpaRepository<Line, Long> {

    @Query("SELECT l.id FROM Line l")
    List<Long> getLineIdList();

    @Query("SELECT CASE WHEN COUNT(l) > 0 THEN TRUE ELSE FALSE END FROM Line l WHERE l.id = :lineId AND l.description = :lineDesc")
    boolean validateLineId(Long lineId, String lineDesc);
}
