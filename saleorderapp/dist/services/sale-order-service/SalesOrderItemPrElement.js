"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPrElement = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemPrElement extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemPrElement = SalesOrderItemPrElement;
SalesOrderItemPrElement._entityName = 'A_SalesOrderItemPrElement';
SalesOrderItemPrElement._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItemPrElement._keys = [
    'SalesOrder',
    'SalesOrderItem',
    'PricingProcedureStep',
    'PricingProcedureCounter'
];
//# sourceMappingURL=SalesOrderItemPrElement.js.map