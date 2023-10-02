"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerUnloadingPoint = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerUnloadingPoint extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.CustomerUnloadingPoint = CustomerUnloadingPoint;
CustomerUnloadingPoint._entityName = 'A_CustomerUnloadingPoint';
CustomerUnloadingPoint._defaultBasePath = '/sap/opu/odata/sap/API_BUSINESS_PARTNER';
CustomerUnloadingPoint._keys = ['Customer', 'UnloadingPointName'];
//# sourceMappingURL=CustomerUnloadingPoint.js.map