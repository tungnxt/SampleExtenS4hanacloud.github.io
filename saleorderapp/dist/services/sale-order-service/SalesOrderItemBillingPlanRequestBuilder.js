"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemBillingPlanRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemBillingPlanRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, billingPlan) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            BillingPlan: billingPlan
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SalesOrderItemBillingPlanRequestBuilder = SalesOrderItemBillingPlanRequestBuilder;
//# sourceMappingURL=SalesOrderItemBillingPlanRequestBuilder.js.map