"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemRelatedObjectRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItemRelatedObject_1 = require("./SalesOrderItemRelatedObject");
class SalesOrderItemRelatedObjectRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, sdDocRelatedObjectSequenceNmbr) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, salesOrderItem, sdDocRelatedObjectSequenceNmbr) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItemRelatedObject_1.SalesOrderItemRelatedObject
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
            });
    }
}
exports.SalesOrderItemRelatedObjectRequestBuilder = SalesOrderItemRelatedObjectRequestBuilder;
//# sourceMappingURL=SalesOrderItemRelatedObjectRequestBuilder.js.map