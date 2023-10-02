"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPrElementRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderHeaderPrElement_1 = require("./SalesOrderHeaderPrElement");
class SalesOrderHeaderPrElementRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
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
    delete(salesOrderOrEntity, pricingProcedureStep, pricingProcedureCounter) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderHeaderPrElement_1.SalesOrderHeaderPrElement
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                PricingProcedureStep: pricingProcedureStep,
                PricingProcedureCounter: pricingProcedureCounter
            });
    }
}
exports.SalesOrderHeaderPrElementRequestBuilder = SalesOrderHeaderPrElementRequestBuilder;
//# sourceMappingURL=SalesOrderHeaderPrElementRequestBuilder.js.map