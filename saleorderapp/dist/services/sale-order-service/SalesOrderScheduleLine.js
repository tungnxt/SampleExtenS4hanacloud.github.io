"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderScheduleLine = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderScheduleLine extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderScheduleLine = SalesOrderScheduleLine;
SalesOrderScheduleLine._entityName = 'A_SalesOrderScheduleLine';
SalesOrderScheduleLine._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderScheduleLine._keys = ['SalesOrder', 'SalesOrderItem', 'ScheduleLine'];
//# sourceMappingURL=SalesOrderScheduleLine.js.map