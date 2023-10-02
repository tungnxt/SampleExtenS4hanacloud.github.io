"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDunning = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerDunning extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerDunning = CustomerDunning;
CustomerDunning._entityName = 'A_CustomerDunning';
CustomerDunning._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerDunning._keys = ['Customer', 'CompanyCode', 'DunningArea'];
//# sourceMappingURL=CustomerDunning.js.map