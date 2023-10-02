"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustUnldgPtAddrDepdntInfo = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustUnldgPtAddrDepdntInfo extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustUnldgPtAddrDepdntInfo = CustUnldgPtAddrDepdntInfo;
CustUnldgPtAddrDepdntInfo._entityName = 'A_CustUnldgPtAddrDepdntInfo';
CustUnldgPtAddrDepdntInfo._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustUnldgPtAddrDepdntInfo._keys = ['Customer', 'AddressID', 'UnloadingPointName'];
//# sourceMappingURL=CustUnldgPtAddrDepdntInfo.js.map