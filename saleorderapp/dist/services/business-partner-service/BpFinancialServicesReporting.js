"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesReporting = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpFinancialServicesReporting extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpFinancialServicesReporting = BpFinancialServicesReporting;
BpFinancialServicesReporting._entityName = 'A_BPFinancialServicesReporting';
BpFinancialServicesReporting._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpFinancialServicesReporting._keys = ['BusinessPartner'];
//# sourceMappingURL=BpFinancialServicesReporting.js.map