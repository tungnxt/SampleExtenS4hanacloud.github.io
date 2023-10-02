"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustSalesPartnerFunc = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustSalesPartnerFunc extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustSalesPartnerFunc = CustSalesPartnerFunc;
CustSalesPartnerFunc._entityName = 'A_CustSalesPartnerFunc';
CustSalesPartnerFunc._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustSalesPartnerFunc._keys = [
    'Customer',
    'SalesOrganization',
    'DistributionChannel',
    'Division',
    'PartnerCounter',
    'PartnerFunction'
];
//# sourceMappingURL=CustSalesPartnerFunc.js.map