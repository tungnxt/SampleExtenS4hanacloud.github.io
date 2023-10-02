"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItmSubsqntProcFlow = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItmSubsqntProcFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItmSubsqntProcFlow = SalesOrderItmSubsqntProcFlow;
SalesOrderItmSubsqntProcFlow._entityName = 'A_SalesOrderItmSubsqntProcFlow';
SalesOrderItmSubsqntProcFlow._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItmSubsqntProcFlow._keys = ['SalesOrder', 'SalesOrderItem', 'DocRelationshipUUID'];
//# sourceMappingURL=SalesOrderItmSubsqntProcFlow.js.map