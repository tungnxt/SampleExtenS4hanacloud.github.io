"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPartnerFunc = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPartnerFunc extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SupplierPartnerFunc = SupplierPartnerFunc;
SupplierPartnerFunc._entityName = 'A_SupplierPartnerFunc';
SupplierPartnerFunc._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
SupplierPartnerFunc._keys = [
    'Supplier',
    'PurchasingOrganization',
    'SupplierSubrange',
    'Plant',
    'PartnerFunction',
    'PartnerCounter'
];
//# sourceMappingURL=SupplierPartnerFunc.js.map