"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supplier = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Supplier extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Supplier = Supplier;
Supplier._entityName = 'A_Supplier';
Supplier._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
Supplier._keys = ['Supplier'];
//# sourceMappingURL=Supplier.js.map