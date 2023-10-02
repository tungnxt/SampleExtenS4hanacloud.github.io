"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntInfo = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustSlsAreaAddrDepdntInfo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustSlsAreaAddrDepdntInfo = CustSlsAreaAddrDepdntInfo;
CustSlsAreaAddrDepdntInfo._entityName = 'A_CustSlsAreaAddrDepdntInfo';
CustSlsAreaAddrDepdntInfo._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustSlsAreaAddrDepdntInfo._keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division',
    'AddressID'
];
//# sourceMappingURL=CustSlsAreaAddrDepdntInfo.js.map