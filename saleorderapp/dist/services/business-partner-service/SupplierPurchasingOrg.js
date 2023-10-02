"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrg = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPurchasingOrg extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SupplierPurchasingOrg = SupplierPurchasingOrg;
SupplierPurchasingOrg._entityName = 'A_SupplierPurchasingOrg';
SupplierPurchasingOrg._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
SupplierPurchasingOrg._keys = ['Supplier', 'PurchasingOrganization'];
//# sourceMappingURL=SupplierPurchasingOrg.js.map