"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpFiscalYearInformationRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BpFiscalYearInformation_1 = require("./BpFiscalYearInformation");
class BpFiscalYearInformationRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, businessPartnerFiscalYear) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            BusinessPartnerFiscalYear: businessPartnerFiscalYear
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
    delete(businessPartnerOrEntity, businessPartnerFiscalYear) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BpFiscalYearInformation_1.BpFiscalYearInformation
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                BusinessPartnerFiscalYear: businessPartnerFiscalYear
            });
    }
}
exports.BpFiscalYearInformationRequestBuilder = BpFiscalYearInformationRequestBuilder;
//# sourceMappingURL=BpFiscalYearInformationRequestBuilder.js.map