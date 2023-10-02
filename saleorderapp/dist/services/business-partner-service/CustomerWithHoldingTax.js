"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWithHoldingTax = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerWithHoldingTax extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerWithHoldingTax = CustomerWithHoldingTax;
CustomerWithHoldingTax._entityName = 'A_CustomerWithHoldingTax';
CustomerWithHoldingTax._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerWithHoldingTax._keys = ['Customer', 'CompanyCode', 'WithholdingTaxType'];
//# sourceMappingURL=CustomerWithHoldingTax.js.map