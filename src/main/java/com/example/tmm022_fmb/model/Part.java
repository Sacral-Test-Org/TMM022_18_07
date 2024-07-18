package com.example.tmm022_fmb.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Column;

@Entity
@Table(name = "PART")
public class Part {

    @Id
    @Column(name = "PART_ID")
    private Long partId;

    @Column(name = "UNIT_ID")
    private Long unitId;

    @Column(name = "GROUP_ID")
    private Long groupId;

    @Column(name = "LINE_ID")
    private Long lineId;

    @Column(name = "PARTNO")
    private String partNo;

    @Column(name = "PART_DESC")
    private String partDesc;

    @Column(name = "PART_STATUS")
    private String partStatus;

    // Getters and Setters

    public Long getPartId() {
        return partId;
    }

    public void setPartId(Long partId) {
        this.partId = partId;
    }

    public Long getUnitId() {
        return unitId;
    }

    public void setUnitId(Long unitId) {
        this.unitId = unitId;
    }

    public Long getGroupId() {
        return groupId;
    }

    public void setGroupId(Long groupId) {
        this.groupId = groupId;
    }

    public Long getLineId() {
        return lineId;
    }

    public void setLineId(Long lineId) {
        this.lineId = lineId;
    }

    public String getPartNo() {
        return partNo;
    }

    public void setPartNo(String partNo) {
        this.partNo = partNo;
    }

    public String getPartDesc() {
        return partDesc;
    }

    public void setPartDesc(String partDesc) {
        this.partDesc = partDesc;
    }

    public String getPartStatus() {
        return partStatus;
    }

    public void setPartStatus(String partStatus) {
        this.partStatus = partStatus;
    }
}
