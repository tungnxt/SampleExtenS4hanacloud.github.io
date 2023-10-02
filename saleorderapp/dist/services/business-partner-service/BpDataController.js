"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpDataController = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpDataController extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.BpDataController = BpDataController;
BpDataController._entityName = 'A_BPDataController';
BpDataController._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
BpDataController._keys = [
    'BusinessPartner',
    'DataController',
    'PurposeForPersonalData'
];
//# sourceMappingURL=BpDataController.js.map