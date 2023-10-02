"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderTextRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderText_1 = require("./SalesOrderText");
class SalesOrderTextRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, language, longTextId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
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
    delete(salesOrderOrEntity, language, longTextId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderText_1.SalesOrderText
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                Language: language,
                LongTextID: longTextId
            });
    }
}
exports.SalesOrderTextRequestBuilder = SalesOrderTextRequestBuilder;
//# sourceMappingURL=SalesOrderTextRequestBuilder.js.map