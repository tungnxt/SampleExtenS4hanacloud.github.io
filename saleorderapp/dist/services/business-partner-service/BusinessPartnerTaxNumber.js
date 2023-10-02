"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerTaxNumber = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerTaxNumber extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartnerTaxNumber = BusinessPartnerTaxNumber;
BusinessPartnerTaxNumber._entityName = 'A_BusinessPartnerTaxNumber';
BusinessPartnerTaxNumber._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusinessPartnerTaxNumber._keys = ['BusinessPartner', 'BPTaxType'];
//# sourceMappingURL=BusinessPartnerTaxNumber.js.map