"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrdPaymentPlanItemDetailsRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SlsOrdPaymentPlanItemDetails_1 = require("./SlsOrdPaymentPlanItemDetails");
class SlsOrdPaymentPlanItemDetailsRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, paymentPlanItem) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            PaymentPlanItem: paymentPlanItem
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
    delete(salesOrderOrEntity, paymentPlanItem) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SlsOrdPaymentPlanItemDetails_1.SlsOrdPaymentPlanItemDetails
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                PaymentPlanItem: paymentPlanItem
            });
    }
}
exports.SlsOrdPaymentPlanItemDetailsRequestBuilder = SlsOrdPaymentPlanItemDetailsRequestBuilder;
//# sourceMappingURL=SlsOrdPaymentPlanItemDetailsRequestBuilder.js.map