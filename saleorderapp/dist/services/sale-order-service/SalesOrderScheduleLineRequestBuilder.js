"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderScheduleLineRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SalesOrderScheduleLine_1 = require("./SalesOrderScheduleLine");
class SalesOrderScheduleLineRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, scheduleLine) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            ScheduleLine: scheduleLine
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
    delete(salesOrderOrEntity, salesOrderItem, scheduleLine) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, salesOrderOrEntity instanceof SalesOrderScheduleLine_1.SalesOrderScheduleLine
            ? salesOrderOrEntity
            : {
                SalesOrder: salesOrderOrEntity,
                SalesOrderItem: salesOrderItem,
                ScheduleLine: scheduleLine
            });
    }
}
exports.SalesOrderScheduleLineRequestBuilder = SalesOrderScheduleLineRequestBuilder;
//# sourceMappingURL=SalesOrderScheduleLineRequestBuilder.js.map