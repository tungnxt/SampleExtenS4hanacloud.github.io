"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderRelatedObjectRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderRelatedObject_1 = require("./SalesOrderRelatedObject");
class SalesOrderRelatedObjectRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, sdDocRelatedObjectSequenceNmbr) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    delete(salesOrderOrEntity, sdDocRelatedObjectSequenceNmbr) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderRelatedObject_1.SalesOrderRelatedObject
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SDDocRelatedObjectSequenceNmbr: sdDocRelatedObjectSequenceNmbr
            });
    }
}
exports.SalesOrderRelatedObjectRequestBuilder = SalesOrderRelatedObjectRequestBuilder;
//# sourceMappingURL=SalesOrderRelatedObjectRequestBuilder.js.map