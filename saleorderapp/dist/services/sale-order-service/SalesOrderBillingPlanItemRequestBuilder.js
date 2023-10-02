"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlanItemRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderBillingPlanItem_1 = require("./SalesOrderBillingPlanItem");
class SalesOrderBillingPlanItemRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, billingPlan, billingPlanItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
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
    delete(salesOrderOrEntity, billingPlan, billingPlanItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderBillingPlanItem_1.SalesOrderBillingPlanItem
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                BillingPlan: billingPlan,
                BillingPlanItem: billingPlanItem
            });
    }
}
exports.SalesOrderBillingPlanItemRequestBuilder = SalesOrderBillingPlanItemRequestBuilder;
//# sourceMappingURL=SalesOrderBillingPlanItemRequestBuilder.js.map