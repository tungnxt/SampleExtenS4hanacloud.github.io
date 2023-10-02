"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemTextRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderItemText_1 = require("./SalesOrderItemText");
class SalesOrderItemTextRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, language, longTextId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            Language: language,
            LongTextID: longTextId
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
    delete(salesOrderOrEntity, salesOrderItem, language, longTextId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderItemText_1.SalesOrderItemText
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                Language: language,
                LongTextID: longTextId
            });
    }
}
exports.SalesOrderItemTextRequestBuilder = SalesOrderItemTextRequestBuilder;
//# sourceMappingURL=SalesOrderItemTextRequestBuilder.js.map