"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderBillingPlanRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderBillingPlanRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, billingPlan) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
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
exports.SalesOrderBillingPlanRequestBuilder = SalesOrderBillingPlanRequestBuilder;
//# sourceMappingURL=SalesOrderBillingPlanRequestBuilder.js.map