"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderSubsqntProcFlow = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderSubsqntProcFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderSubsqntProcFlow = SalesOrderSubsqntProcFlow;
SalesOrderSubsqntProcFlow._entityName = 'A_SalesOrderSubsqntProcFlow';
SalesOrderSubsqntProcFlow._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderSubsqntProcFlow._keys = ['SalesOrder', 'DocRelationshipUUID'];
//# sourceMappingURL=SalesOrderSubsqntProcFlow.js.map