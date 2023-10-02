"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaIndustryRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BuPaIndustry_1 = require("./BuPaIndustry");
class BuPaIndustryRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(industrySector, industrySystemType, businessPartner) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            IndustrySector: industrySector,
            IndustrySystemType: industrySystemType,
            BusinessPartner: businessPartner
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
    delete(industrySectorOrEntity, industrySystemType, businessPartner) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, industrySectorOrEntity instanceof BuPaIndustry_1.BuPaIndustry
            ? industrySectorOrEntity
            : {
                IndustrySector: industrySectorOrEntity,
                IndustrySystemType: industrySystemType,
                BusinessPartner: businessPartner
            });
    }
}
exports.BuPaIndustryRequestBuilder = BuPaIndustryRequestBuilder;
//# sourceMappingURL=BuPaIndustryRequestBuilder.js.map