"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpDataControllerRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpDataControllerRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, dataController, purposeForPersonalData) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            DataController: dataController,
            PurposeForPersonalData: purposeForPersonalData
        });
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
exports.BpDataControllerRequestBuilder = BpDataControllerRequestBuilder;
//# sourceMappingURL=BpDataControllerRequestBuilder.js.map