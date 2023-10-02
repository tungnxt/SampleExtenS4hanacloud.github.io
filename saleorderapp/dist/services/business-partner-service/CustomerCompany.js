"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCompany = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerCompany extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerCompany = CustomerCompany;
CustomerCompany._entityName = 'A_CustomerCompany';
CustomerCompany._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerCompany._keys = ['Customer', 'CompanyCode'];
//# sourceMappingURL=CustomerCompany.js.map