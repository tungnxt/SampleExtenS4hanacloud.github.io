"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlanItem = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderBillingPlanItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderBillingPlanItem = SalesOrderBillingPlanItem;
SalesOrderBillingPlanItem._entityName = 'A_SalesOrderBillingPlanItem';
SalesOrderBillingPlanItem._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderBillingPlanItem._keys = ['SalesOrder', 'BillingPlan', 'BillingPlanItem'];
//# sourceMappingURL=SalesOrderBillingPlanItem.js.map