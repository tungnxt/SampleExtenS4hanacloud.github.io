"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressHomePageUrl = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class AddressHomePageUrl extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.AddressHomePageUrl = AddressHomePageUrl;
AddressHomePageUrl._entityName = 'A_AddressHomePageURL';
AddressHomePageUrl._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
AddressHomePageUrl._keys = [
    'AddressID',
    'Person',
    'OrdinalNumber',
    'ValidityStartDate',
    'IsDefaultURLAddress'
];
//# sourceMappingURL=AddressHomePageUrl.js.map