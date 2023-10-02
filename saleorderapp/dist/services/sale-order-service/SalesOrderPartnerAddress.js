"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPartnerAddress = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderPartnerAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderPartnerAddress = SalesOrderPartnerAddress;
SalesOrderPartnerAddress._entityName = 'A_SalesOrderPartnerAddress';
SalesOrderPartnerAddress._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderPartnerAddress._keys = ['SalesOrder', 'PartnerFunction', 'AddressRepresentationCode'];
//# sourceMappingURL=SalesOrderPartnerAddress.js.map