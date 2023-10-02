"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerTaxGrouping = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerTaxGrouping extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerTaxGrouping = CustomerTaxGrouping;
CustomerTaxGrouping._entityName = 'A_CustomerTaxGrouping';
CustomerTaxGrouping._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerTaxGrouping._keys = ['Customer', 'CustomerTaxGroupingCode'];
//# sourceMappingURL=CustomerTaxGrouping.js.map