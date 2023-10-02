"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpCreditWorthiness = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpCreditWorthiness extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpCreditWorthiness = BpCreditWorthiness;
BpCreditWorthiness._entityName = 'A_BPCreditWorthiness';
BpCreditWorthiness._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpCreditWorthiness._keys = ['BusinessPartner'];
//# sourceMappingURL=BpCreditWorthiness.js.map