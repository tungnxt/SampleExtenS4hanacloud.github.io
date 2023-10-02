"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemText = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemText = SalesOrderItemText;
SalesOrderItemText._entityName = 'A_SalesOrderItemText';
SalesOrderItemText._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItemText._keys = ['SalesOrder', 'SalesOrderItem', 'Language', 'LongTextID'];
//# sourceMappingURL=SalesOrderItemText.js.map