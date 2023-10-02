"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCompanyTextRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustomerCompanyText_1 = require("./CustomerCompanyText");
class CustomerCompanyTextRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, companyCode, language, longTextId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            CompanyCode: companyCode,
            Language: language,
            LongTextID: longTextId
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
    delete(customerOrEntity, companyCode, language, longTextId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustomerCompanyText_1.CustomerCompanyText
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                CompanyCode: companyCode,
                Language: language,
                LongTextID: longTextId
            });
    }
}
exports.CustomerCompanyTextRequestBuilder = CustomerCompanyTextRequestBuilder;
//# sourceMappingURL=CustomerCompanyTextRequestBuilder.js.map