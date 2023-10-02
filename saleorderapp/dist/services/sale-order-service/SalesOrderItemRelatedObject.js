"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderItemRelatedObject = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderItemRelatedObject extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderItemRelatedObject = SalesOrderItemRelatedObject;
SalesOrderItemRelatedObject._entityName = 'A_SalesOrderItemRelatedObject';
SalesOrderItemRelatedObject._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderItemRelatedObject._keys = [
    'SalesOrder',
    'SalesOrderItem',
    'SDDocRelatedObjectSequenceNmbr'
];
//# sourceMappingURL=SalesOrderItemRelatedObject.js.map