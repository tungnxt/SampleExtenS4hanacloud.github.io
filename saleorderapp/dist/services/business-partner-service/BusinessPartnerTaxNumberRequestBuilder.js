"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerTaxNumberRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerTaxNumber_1 = require("./BusinessPartnerTaxNumber");
class BusinessPartnerTaxNumberRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, bpTaxType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            BPTaxType: bpTaxType
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
    delete(businessPartnerOrEntity, bpTaxType) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerTaxNumber_1.BusinessPartnerTaxNumber
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                BPTaxType: bpTaxType
            });
    }
}
exports.BusinessPartnerTaxNumberRequestBuilder = BusinessPartnerTaxNumberRequestBuilder;
//# sourceMappingURL=BusinessPartnerTaxNumberRequestBuilder.js.map