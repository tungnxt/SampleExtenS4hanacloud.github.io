"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCompanyText = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerCompanyText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerCompanyText = CustomerCompanyText;
CustomerCompanyText._entityName = 'A_CustomerCompanyText';
CustomerCompanyText._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerCompanyText._keys = ['Customer', 'CompanyCode', 'Language', 'LongTextID'];
//# sourceMappingURL=CustomerCompanyText.js.map