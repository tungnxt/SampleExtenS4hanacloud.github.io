"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierText = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SupplierText = SupplierText;
SupplierText._entityName = 'A_SupplierText';
SupplierText._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
SupplierText._keys = ['Supplier', 'Language', 'LongTextID'];
//# sourceMappingURL=SupplierText.js.map