package com.example.tmm022_fmb.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.example.tmm022_fmb.model.Group;

import java.util.List;

@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {

    @Query("SELECT g FROM Group g WHERE g.status = 'O' AND g.section = :unitId ORDER BY g.id ASC")
    List<Group> fetchGroupLOV(@Param("unitId") String unitId);

    @Query("SELECT g FROM Group g JOIN Part p ON g.id = p.groupId WHERE p.unitId = :unitId ORDER BY g.id ASC")
    List<Group> fetchEditGroupLOV(@Param("unitId") String unitId);

    @Query("SELECT CASE WHEN COUNT(g) > 0 THEN true ELSE false END " +
           "FROM Group g " +
           "WHERE g.status = 'O' AND g.section = :unitId AND g.id = :groupId AND g.name = :groupName")
    boolean validateGroupIDForGlobalParam0(@Param("unitId") String unitId, 
                                           @Param("groupId") Long groupId, 
                                           @Param("groupName") String groupName);

    @Query("SELECT CASE WHEN COUNT(g) > 0 THEN true ELSE false END " +
           "FROM Group g JOIN Part p ON g.id = p.groupId " +
           "WHERE p.unitId = :unitId AND g.id = :groupId AND g.name = :groupName")
    boolean validateGroupIDForGlobalParam1(@Param("unitId") String unitId, 
                                           @Param("groupId") Long groupId, 
                                           @Param("groupName") String groupName);
}
