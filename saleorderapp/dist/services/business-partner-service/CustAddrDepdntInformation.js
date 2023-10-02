"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustAddrDepdntInformation = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustAddrDepdntInformation extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustAddrDepdntInformation = CustAddrDepdntInformation;
CustAddrDepdntInformation._entityName = 'A_CustAddrDepdntInformation';
CustAddrDepdntInformation._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustAddrDepdntInformation._keys = ['Customer', 'AddressID'];
//# sourceMappingURL=CustAddrDepdntInformation.js.map