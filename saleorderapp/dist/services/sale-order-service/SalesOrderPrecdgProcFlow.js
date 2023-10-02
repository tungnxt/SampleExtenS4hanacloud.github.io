"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderPrecdgProcFlow = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderPrecdgProcFlow extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderPrecdgProcFlow = SalesOrderPrecdgProcFlow;
SalesOrderPrecdgProcFlow._entityName = 'A_SalesOrderPrecdgProcFlow';
SalesOrderPrecdgProcFlow._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderPrecdgProcFlow._keys = ['SalesOrder', 'DocRelationshipUUID'];
//# sourceMappingURL=SalesOrderPrecdgProcFlow.js.map