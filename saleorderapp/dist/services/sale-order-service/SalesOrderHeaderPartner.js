"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPartner = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderHeaderPartner extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderHeaderPartner = SalesOrderHeaderPartner;
SalesOrderHeaderPartner._entityName = 'A_SalesOrderHeaderPartner';
SalesOrderHeaderPartner._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderHeaderPartner._keys = ['SalesOrder', 'PartnerFunction'];
//# sourceMappingURL=SalesOrderHeaderPartner.js.map