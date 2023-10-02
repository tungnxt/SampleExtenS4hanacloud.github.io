"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerText = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerText extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerText = CustomerText;
CustomerText._entityName = 'A_CustomerText';
CustomerText._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerText._keys = ['Customer', 'Language', 'LongTextID'];
//# sourceMappingURL=CustomerText.js.map