"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerWithHoldingTaxRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustomerWithHoldingTax_1 = require("./CustomerWithHoldingTax");
class CustomerWithHoldingTaxRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, companyCode, withholdingTaxType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            CompanyCode: companyCode,
            WithholdingTaxType: withholdingTaxType
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
    delete(customerOrEntity, companyCode, withholdingTaxType) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustomerWithHoldingTax_1.CustomerWithHoldingTax
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                CompanyCode: companyCode,
                WithholdingTaxType: withholdingTaxType
            });
    }
}
exports.CustomerWithHoldingTaxRequestBuilder = CustomerWithHoldingTaxRequestBuilder;
//# sourceMappingURL=CustomerWithHoldingTaxRequestBuilder.js.map