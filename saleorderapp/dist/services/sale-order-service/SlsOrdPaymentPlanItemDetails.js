"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SlsOrdPaymentPlanItemDetails = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SlsOrdPaymentPlanItemDetails extends odata_v2_1.Entity {
    constructor(_entityApi) {
        super(_entityApi);
        this._entityApi = _entityApi;
    }
}
exports.SlsOrdPaymentPlanItemDetails = SlsOrdPaymentPlanItemDetails;
SlsOrdPaymentPlanItemDetails._entityName = 'A_SlsOrdPaymentPlanItemDetails';
SlsOrdPaymentPlanItemDetails._defaultBasePath = '/sap/opu/odata/sap/API_SALES_ORDER_SRV';
SlsOrdPaymentPlanItemDetails._keys = ['SalesOrder', 'PaymentPlanItem'];
//# sourceMappingURL=SlsOrdPaymentPlanItemDetails.js.map