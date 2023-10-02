"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCompanyText = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierCompanyText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SupplierCompanyText = SupplierCompanyText;
SupplierCompanyText._entityName = 'A_SupplierCompanyText';
SupplierCompanyText._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
SupplierCompanyText._keys = ['Supplier', 'CompanyCode', 'Language', 'LongTextID'];
//# sourceMappingURL=SupplierCompanyText.js.map