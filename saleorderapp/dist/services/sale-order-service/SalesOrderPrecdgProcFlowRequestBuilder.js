"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPrecdgProcFlowRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderPrecdgProcFlowRequestBuilder extends odata_v2_1.RequestBuilder {
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
exports.SalesOrderPrecdgProcFlowRequestBuilder = SalesOrderPrecdgProcFlowRequestBuilder;
//# sourceMappingURL=SalesOrderPrecdgProcFlowRequestBuilder.js.map