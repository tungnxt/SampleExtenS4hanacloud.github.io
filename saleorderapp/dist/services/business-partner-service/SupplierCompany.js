"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCompany = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierCompany extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SupplierCompany = SupplierCompany;
SupplierCompany._entityName = 'A_SupplierCompany';
SupplierCompany._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
SupplierCompany._keys = ['Supplier', 'CompanyCode'];
//# sourceMappingURL=SupplierCompany.js.map