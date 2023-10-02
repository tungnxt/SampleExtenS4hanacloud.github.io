"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderSubsqntProcFlowRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderSubsqntProcFlowRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(salesOrder, docRelationshipUuid) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            SalesOrder: salesOrder,
            DocRelationshipUUID: docRelationshipUuid
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
}
exports.SalesOrderSubsqntProcFlowRequestBuilder = SalesOrderSubsqntProcFlowRequestBuilder;
//# sourceMappingURL=SalesOrderSubsqntProcFlowRequestBuilder.js.map