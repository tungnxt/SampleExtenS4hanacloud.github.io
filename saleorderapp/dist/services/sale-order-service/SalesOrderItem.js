"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItem = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItem = SalesOrderItem;
SalesOrderItem._entityName = 'A_SalesOrderItem';
SalesOrderItem._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItem._keys = ['SalesOrder', 'SalesOrderItem'];
//# sourceMappingURL=SalesOrderItem.js.map