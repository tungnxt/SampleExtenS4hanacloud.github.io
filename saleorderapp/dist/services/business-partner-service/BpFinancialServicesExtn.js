"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFinancialServicesExtn = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpFinancialServicesExtn extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpFinancialServicesExtn = BpFinancialServicesExtn;
BpFinancialServicesExtn._entityName = 'A_BPFinancialServicesExtn';
BpFinancialServicesExtn._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpFinancialServicesExtn._keys = ['BusinessPartner'];
//# sourceMappingURL=BpFinancialServicesExtn.js.map