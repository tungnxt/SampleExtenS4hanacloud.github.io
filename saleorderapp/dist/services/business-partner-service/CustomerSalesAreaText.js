"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSalesAreaText = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerSalesAreaText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerSalesAreaText = CustomerSalesAreaText;
CustomerSalesAreaText._entityName = 'A_CustomerSalesAreaText';
CustomerSalesAreaText._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerSalesAreaText._keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division',
    'Language',
    'LongTextID'
];
//# sourceMappingURL=CustomerSalesAreaText.js.map