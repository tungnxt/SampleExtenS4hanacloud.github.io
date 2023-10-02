"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartnerAddress = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemPartnerAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemPartnerAddress = SalesOrderItemPartnerAddress;
SalesOrderItemPartnerAddress._entityName = 'A_SalesOrderItemPartnerAddress';
SalesOrderItemPartnerAddress._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItemPartnerAddress._keys = [
    'SalesOrder',
    'SalesOrderItem',
    'PartnerFunction',
    'AddressRepresentationCode'
];
//# sourceMappingURL=SalesOrderItemPartnerAddress.js.map