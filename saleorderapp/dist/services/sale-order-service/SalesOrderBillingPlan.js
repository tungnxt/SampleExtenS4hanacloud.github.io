"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlan = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderBillingPlan extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderBillingPlan = SalesOrderBillingPlan;
SalesOrderBillingPlan._entityName = 'A_SalesOrderBillingPlan';
SalesOrderBillingPlan._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderBillingPlan._keys = ['SalesOrder', 'BillingPlan'];
//# sourceMappingURL=SalesOrderBillingPlan.js.map