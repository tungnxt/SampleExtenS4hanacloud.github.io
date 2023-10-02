"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierDunning = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierDunning extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SupplierDunning = SupplierDunning;
SupplierDunning._entityName = 'A_SupplierDunning';
SupplierDunning._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
SupplierDunning._keys = ['Supplier', 'CompanyCode', 'DunningArea'];
//# sourceMappingURL=SupplierDunning.js.map