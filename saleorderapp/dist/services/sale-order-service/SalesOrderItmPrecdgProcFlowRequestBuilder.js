"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItmPrecdgProcFlowRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItmPrecdgProcFlowRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, salesOrderItem, docRelationshipUuid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            SalesOrderItem: salesOrderItem,
            DocRelationshipUUID: docRelationshipUuid
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.SalesOrderItmPrecdgProcFlowRequestBuilder = SalesOrderItmPrecdgProcFlowRequestBuilder;
//# sourceMappingURL=SalesOrderItmPrecdgProcFlowRequestBuilder.js.map