"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerCompanyRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerCompanyRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, companyCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            CompanyCode: companyCode
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
exports.CustomerCompanyRequestBuilder = CustomerCompanyRequestBuilder;
//# sourceMappingURL=CustomerCompanyRequestBuilder.js.map