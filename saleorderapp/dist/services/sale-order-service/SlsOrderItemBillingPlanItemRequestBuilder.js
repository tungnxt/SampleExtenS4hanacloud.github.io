"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrderItemBillingPlanItemRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SlsOrderItemBillingPlanItem_1 = require("./SlsOrderItemBillingPlanItem");
class SlsOrderItemBillingPlanItemRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, billingPlan, billingPlanItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            BillingPlan: billingPlan,
            BillingPlanItem: billingPlanItem
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem, billingPlan, billingPlanItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SlsOrderItemBillingPlanItem_1.SlsOrderItemBillingPlanItem
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                BillingPlan: billingPlan,
                BillingPlanItem: billingPlanItem
            });
    }
}
exports.SlsOrderItemBillingPlanItemRequestBuilder = SlsOrderItemBillingPlanItemRequestBuilder;
//# sourceMappingURL=SlsOrderItemBillingPlanItemRequestBuilder.js.map