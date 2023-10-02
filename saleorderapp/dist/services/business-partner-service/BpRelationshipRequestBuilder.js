"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpRelationshipRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BpRelationship_1 = require("./BpRelationship");
class BpRelationshipRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(relationshipNumber, businessPartner1, businessPartner2, validityEndDate) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            RelationshipNumber: relationshipNumber,
            BusinessPartner1: businessPartner1,
            BusinessPartner2: businessPartner2,
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
    delete(relationshipNumberOrEntity, businessPartner1, businessPartner2, validityEndDate) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, relationshipNumberOrEntity instanceof BpRelationship_1.BpRelationship
            ? relationshipNumberOrEntity
            : {
                RelationshipNumber: relationshipNumberOrEntity,
                BusinessPartner1: businessPartner1,
                BusinessPartner2: businessPartner2,
                ValidityEndDate: validityEndDate
            });
    }
}
exports.BpRelationshipRequestBuilder = BpRelationshipRequestBuilder;
//# sourceMappingURL=BpRelationshipRequestBuilder.js.map