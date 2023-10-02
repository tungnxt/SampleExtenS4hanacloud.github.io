"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPrElementRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItemPrElement_1 = require("./SalesOrderItemPrElement");
class SalesOrderItemPrElementRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            PricingProcedureStep: pricingProcedureStep,
            PricingProcedureCounter: pricingProcedureCounter
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
    delete(salesOrderOrEntity, salesOrderItem, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItemPrElement_1.SalesOrderItemPrElement
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                PricingProcedureStep: pricingProcedureStep,
                PricingProcedureCounter: pricingProcedureCounter
            });
    }
}
exports.SalesOrderItemPrElementRequestBuilder = SalesOrderItemPrElementRequestBuilder;
//# sourceMappingURL=SalesOrderItemPrElementRequestBuilder.js.map