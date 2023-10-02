"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerRatingRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerRating_1 = require("./BusinessPartnerRating");
class BusinessPartnerRatingRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, businessPartnerRatingProcedure, bpRatingValidityEndDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            BusinessPartnerRatingProcedure: businessPartnerRatingProcedure,
            BPRatingValidityEndDate: bpRatingValidityEndDate
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
    delete(businessPartnerOrEntity, businessPartnerRatingProcedure, bpRatingValidityEndDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerRating_1.BusinessPartnerRating
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                BusinessPartnerRatingProcedure: businessPartnerRatingProcedure,
                BPRatingValidityEndDate: bpRatingValidityEndDate
            });
    }
}
exports.BusinessPartnerRatingRequestBuilder = BusinessPartnerRatingRequestBuilder;
//# sourceMappingURL=BusinessPartnerRatingRequestBuilder.js.map