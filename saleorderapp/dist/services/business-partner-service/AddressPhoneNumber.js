"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressPhoneNumber = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressPhoneNumber extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.AddressPhoneNumber = AddressPhoneNumber;
AddressPhoneNumber._entityName = 'A_AddressPhoneNumber';
AddressPhoneNumber._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
AddressPhoneNumber._keys = ['AddressID', 'Person', 'OrdinalNumber'];
//# sourceMappingURL=AddressPhoneNumber.js.map