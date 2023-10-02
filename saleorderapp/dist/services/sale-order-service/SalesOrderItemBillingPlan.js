"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemBillingPlan = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemBillingPlan extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemBillingPlan = SalesOrderItemBillingPlan;
SalesOrderItemBillingPlan._entityName = 'A_SalesOrderItemBillingPlan';
SalesOrderItemBillingPlan._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItemBillingPlan._keys = ['SalesOrder', 'SalesOrderItem', 'BillingPlan'];
//# sourceMappingURL=SalesOrderItemBillingPlan.js.map