"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemPartnerRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItemPartner_1 = require("./SalesOrderItemPartner");
class SalesOrderItemPartnerRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, partnerFunction) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            PartnerFunction: partnerFunction
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
    delete(salesOrderOrEntity, salesOrderItem, partnerFunction) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItemPartner_1.SalesOrderItemPartner
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                PartnerFunction: partnerFunction
            });
    }
}
exports.SalesOrderItemPartnerRequestBuilder = SalesOrderItemPartnerRequestBuilder;
//# sourceMappingURL=SalesOrderItemPartnerRequestBuilder.js.map