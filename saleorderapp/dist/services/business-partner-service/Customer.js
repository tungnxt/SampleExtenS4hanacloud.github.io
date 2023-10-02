"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class Customer extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.Customer = Customer;
Customer._entityName = 'A_Customer';
Customer._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
Customer._keys = ['Customer'];
//# sourceMappingURL=Customer.js.map