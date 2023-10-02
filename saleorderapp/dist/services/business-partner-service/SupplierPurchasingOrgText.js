"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrgText = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPurchasingOrgText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SupplierPurchasingOrgText = SupplierPurchasingOrgText;
SupplierPurchasingOrgText._entityName = 'A_SupplierPurchasingOrgText';
SupplierPurchasingOrgText._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
SupplierPurchasingOrgText._keys = [
    'Supplier',
    'PurchasingOrganization',
    'Language',
    'LongTextID'
];
//# sourceMappingURL=SupplierPurchasingOrgText.js.map