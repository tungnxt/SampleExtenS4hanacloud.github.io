"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierWithHoldingTax = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierWithHoldingTax extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SupplierWithHoldingTax = SupplierWithHoldingTax;
SupplierWithHoldingTax._entityName = 'A_SupplierWithHoldingTax';
SupplierWithHoldingTax._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
SupplierWithHoldingTax._keys = ['Supplier', 'CompanyCode', 'WithholdingTaxType'];
//# sourceMappingURL=SupplierWithHoldingTax.js.map