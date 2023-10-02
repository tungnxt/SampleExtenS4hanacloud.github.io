"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerContactRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerContact_1 = require("./BusinessPartnerContact");
class BusinessPartnerContactRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(relationshipNumber, businessPartnerCompany, businessPartnerPerson, validityEndDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            RelationshipNumber: relationshipNumber,
            BusinessPartnerCompany: businessPartnerCompany,
            BusinessPartnerPerson: businessPartnerPerson,
            ValidityEndDate: validityEndDate
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
    delete(relationshipNumberOrEntity, businessPartnerCompany, businessPartnerPerson, validityEndDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, relationshipNumberOrEntity instanceof BusinessPartnerContact_1.BusinessPartnerContact
            ? relationshipNumberOrEntity
            : {
                RelationshipNumber: relationshipNumberOrEntity,
                BusinessPartnerCompany: businessPartnerCompany,
                BusinessPartnerPerson: businessPartnerPerson,
                ValidityEndDate: validityEndDate
            });
    }
}
exports.BusinessPartnerContactRequestBuilder = BusinessPartnerContactRequestBuilder;
//# sourceMappingURL=BusinessPartnerContactRequestBuilder.js.map