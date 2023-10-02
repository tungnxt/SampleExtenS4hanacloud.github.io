"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaIdentificationRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BuPaIdentification_1 = require("./BuPaIdentification");
class BuPaIdentificationRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, bpIdentificationType, bpIdentificationNumber) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            BPIdentificationType: bpIdentificationType,
            BPIdentificationNumber: bpIdentificationNumber
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
    delete(businessPartnerOrEntity, bpIdentificationType, bpIdentificationNumber) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BuPaIdentification_1.BuPaIdentification
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                BPIdentificationType: bpIdentificationType,
                BPIdentificationNumber: bpIdentificationNumber
            });
    }
}
exports.BuPaIdentificationRequestBuilder = BuPaIdentificationRequestBuilder;
//# sourceMappingURL=BuPaIdentificationRequestBuilder.js.map