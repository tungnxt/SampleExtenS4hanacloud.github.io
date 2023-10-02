"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItmPrecdgProcFlow = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItmPrecdgProcFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItmPrecdgProcFlow = SalesOrderItmPrecdgProcFlow;
SalesOrderItmPrecdgProcFlow._entityName = 'A_SalesOrderItmPrecdgProcFlow';
SalesOrderItmPrecdgProcFlow._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItmPrecdgProcFlow._keys = ['SalesOrder', 'SalesOrderItem', 'DocRelationshipUUID'];
//# sourceMappingURL=SalesOrderItmPrecdgProcFlow.js.map