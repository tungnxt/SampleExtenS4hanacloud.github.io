"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSalesAreaTax = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerSalesAreaTax extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerSalesAreaTax = CustomerSalesAreaTax;
CustomerSalesAreaTax._entityName = 'A_CustomerSalesAreaTax';
CustomerSalesAreaTax._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerSalesAreaTax._keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division',
    'DepartureCountry',
    'CustomerTaxCategory'
];
//# sourceMappingURL=CustomerSalesAreaTax.js.map