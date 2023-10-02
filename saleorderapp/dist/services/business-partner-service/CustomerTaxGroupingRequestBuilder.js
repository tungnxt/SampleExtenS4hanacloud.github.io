"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerTaxGroupingRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustomerTaxGrouping_1 = require("./CustomerTaxGrouping");
class CustomerTaxGroupingRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, customerTaxGroupingCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            CustomerTaxGroupingCode: customerTaxGroupingCode
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
    delete(customerOrEntity, customerTaxGroupingCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustomerTaxGrouping_1.CustomerTaxGrouping
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                CustomerTaxGroupingCode: customerTaxGroupingCode
            });
    }
}
exports.CustomerTaxGroupingRequestBuilder = CustomerTaxGroupingRequestBuilder;
//# sourceMappingURL=CustomerTaxGroupingRequestBuilder.js.map