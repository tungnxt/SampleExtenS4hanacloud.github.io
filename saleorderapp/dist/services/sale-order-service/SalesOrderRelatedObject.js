"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderRelatedObject = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderRelatedObject extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderRelatedObject = SalesOrderRelatedObject;
SalesOrderRelatedObject._entityName = 'A_SalesOrderRelatedObject';
SalesOrderRelatedObject._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderRelatedObject._keys = ['SalesOrder', 'SDDocRelatedObjectSequenceNmbr'];
//# sourceMappingURL=SalesOrderRelatedObject.js.map