"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpContactToAddressRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpContactToAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(relationshipNumber, businessPartnerCompany, businessPartnerPerson, validityEndDate, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            RelationshipNumber: relationshipNumber,
            BusinessPartnerCompany: businessPartnerCompany,
            BusinessPartnerPerson: businessPartnerPerson,
            ValidityEndDate: validityEndDate,
            AddressID: addressId
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
exports.BpContactToAddressRequestBuilder = BpContactToAddressRequestBuilder;
//# sourceMappingURL=BpContactToAddressRequestBuilder.js.map