"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpContactToFuncAndDeptRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class BpContactToFuncAndDeptRequestBuilder extends odata_v2_1.RequestBuilder {
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
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.BpContactToFuncAndDeptRequestBuilder = BpContactToFuncAndDeptRequestBuilder;
//# sourceMappingURL=BpContactToFuncAndDeptRequestBuilder.js.map