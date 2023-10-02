"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpCreditWorthinessRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpCreditWorthinessRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, { BusinessPartner: businessPartner });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    create(entity) {
        return new odata_v2_1.CreateRequestBuilder(this.entityApi, entity);
    }
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.BpCreditWorthinessRequestBuilder = BpCreditWorthinessRequestBuilder;
//# sourceMappingURL=BpCreditWorthinessRequestBuilder.js.map