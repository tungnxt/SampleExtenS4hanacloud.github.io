"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrderItemBillingPlanItem = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SlsOrderItemBillingPlanItem extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SlsOrderItemBillingPlanItem = SlsOrderItemBillingPlanItem;
SlsOrderItemBillingPlanItem._entityName = 'A_SlsOrderItemBillingPlanItem';
SlsOrderItemBillingPlanItem._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SlsOrderItemBillingPlanItem._keys = [
    'SalesOrder',
    'SalesOrderItem',
    'BillingPlan',
    'BillingPlanItem'
];
//# sourceMappingURL=SlsOrderItemBillingPlanItem.js.map