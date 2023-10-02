"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerBankRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerBank_1 = require("./BusinessPartnerBank");
class BusinessPartnerBankRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, bankIdentification) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            BankIdentification: bankIdentification
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
    delete(businessPartnerOrEntity, bankIdentification) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerBank_1.BusinessPartnerBank
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                BankIdentification: bankIdentification
            });
    }
}
exports.BusinessPartnerBankRequestBuilder = BusinessPartnerBankRequestBuilder;
//# sourceMappingURL=BusinessPartnerBankRequestBuilder.js.map