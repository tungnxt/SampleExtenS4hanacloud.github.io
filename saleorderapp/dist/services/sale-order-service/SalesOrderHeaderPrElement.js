"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SalesOrderHeaderPrElement = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SalesOrderHeaderPrElement extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SalesOrderHeaderPrElement = SalesOrderHeaderPrElement;
SalesOrderHeaderPrElement._entityName = 'A_SalesOrderHeaderPrElement';
SalesOrderHeaderPrElement._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SalesOrderHeaderPrElement._keys = [
    'SalesOrder',
    'PricingProcedureStep',
    'PricingProcedureCounter'
];
//# sourceMappingURL=SalesOrderHeaderPrElement.js.map