"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustAddrDepdntExtIdentifier = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustAddrDepdntExtIdentifier extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustAddrDepdntExtIdentifier = CustAddrDepdntExtIdentifier;
CustAddrDepdntExtIdentifier._entityName = 'A_CustAddrDepdntExtIdentifier';
CustAddrDepdntExtIdentifier._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustAddrDepdntExtIdentifier._keys = ['Customer', 'AddressID'];
//# sourceMappingURL=CustAddrDepdntExtIdentifier.js.map