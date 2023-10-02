"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFiscalYearInformation = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpFiscalYearInformation extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpFiscalYearInformation = BpFiscalYearInformation;
BpFiscalYearInformation._entityName = 'A_BPFiscalYearInformation';
BpFiscalYearInformation._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpFiscalYearInformation._keys = ['BusinessPartner', 'BusinessPartnerFiscalYear'];
//# sourceMappingURL=BpFiscalYearInformation.js.map