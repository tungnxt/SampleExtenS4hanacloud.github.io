"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartner = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemPartner extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemPartner = SalesOrderItemPartner;
SalesOrderItemPartner._entityName = 'A_SalesOrderItemPartner';
SalesOrderItemPartner._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItemPartner._keys = ['SalesOrder', 'SalesOrderItem', 'PartnerFunction'];
//# sourceMappingURL=SalesOrderItemPartner.js.map