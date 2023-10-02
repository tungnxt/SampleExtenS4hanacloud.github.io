"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressFaxNumber = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressFaxNumber extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.AddressFaxNumber = AddressFaxNumber;
AddressFaxNumber._entityName = 'A_AddressFaxNumber';
AddressFaxNumber._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
AddressFaxNumber._keys = ['AddressID', 'Person', 'OrdinalNumber'];
//# sourceMappingURL=AddressFaxNumber.js.map