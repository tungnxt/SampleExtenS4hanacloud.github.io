"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerBank = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BusinessPartnerBank extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BusinessPartnerBank = BusinessPartnerBank;
BusinessPartnerBank._entityName = 'A_BusinessPartnerBank';
BusinessPartnerBank._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BusinessPartnerBank._keys = ['BusinessPartner', 'BankIdentification'];
//# sourceMappingURL=BusinessPartnerBank.js.map