"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSlsAreaAddrDepdntTaxInfo = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustSlsAreaAddrDepdntTaxInfo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustSlsAreaAddrDepdntTaxInfo = CustSlsAreaAddrDepdntTaxInfo;
CustSlsAreaAddrDepdntTaxInfo._entityName = 'A_CustSlsAreaAddrDepdntTaxInfo';
CustSlsAreaAddrDepdntTaxInfo._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustSlsAreaAddrDepdntTaxInfo._keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division',
    'AddressID',
    'DepartureCountry',
    'CustomerTaxCategory'
];
//# sourceMappingURL=CustSlsAreaAddrDepdntTaxInfo.js.map