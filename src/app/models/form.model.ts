export class FormModel {
  sysdate: Date;
  screenName: string;
  mode: string = 'View Mode';
  unitId: string;
  unitName: string;
  groupId: string;
  groupName: string;
  lineId: string;
  lineDesc: string;
  partId: string;
  partNo: string;
  partDesc: string;
  partStatus: string = 'Inactive';

  constructor(
    sysdate: Date,
    screenName: string,
    unitId: string,
    unitName: string,
    groupId: string,
    groupName: string,
    lineId: string,
    lineDesc: string,
    partId: string,
    partNo: string,
    partDesc: string
  ) {
    this.sysdate = sysdate;
    this.screenName = screenName;
    this.unitId = unitId;
    this.unitName = unitName;
    this.groupId = groupId;
    this.groupName = groupName;
    this.lineId = lineId;
    this.lineDesc = lineDesc;
    this.partId = partId;
    this.partNo = partNo;
    this.partDesc = partDesc;
  }
}
