"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressEmailAddress = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressEmailAddress extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.AddressEmailAddress = AddressEmailAddress;
AddressEmailAddress._entityName = 'A_AddressEmailAddress';
AddressEmailAddress._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
AddressEmailAddress._keys = ['AddressID', 'Person', 'OrdinalNumber'];
//# sourceMappingURL=AddressEmailAddress.js.map