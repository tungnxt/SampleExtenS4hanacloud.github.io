"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSalesArea = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerSalesArea extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerSalesArea = CustomerSalesArea;
CustomerSalesArea._entityName = 'A_CustomerSalesArea';
CustomerSalesArea._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerSalesArea._keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division'
];
//# sourceMappingURL=CustomerSalesArea.js.map