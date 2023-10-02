"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrder extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrder = SalesOrder;
SalesOrder._entityName = 'A_SalesOrder';
SalesOrder._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrder._keys = ['SalesOrder'];
//# sourceMappingURL=SalesOrder.js.map