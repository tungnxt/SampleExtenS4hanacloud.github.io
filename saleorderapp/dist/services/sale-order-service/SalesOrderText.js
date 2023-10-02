"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderText = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderText = SalesOrderText;
SalesOrderText._entityName = 'A_SalesOrderText';
SalesOrderText._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderText._keys = ['SalesOrder', 'Language', 'LongTextID'];
//# sourceMappingURL=SalesOrderText.js.map