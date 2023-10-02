"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSalesAreaRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerSalesAreaRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, salesOrganization, distributionChannel, division) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            SalesOrganization: salesOrganization,
            DistributionChannel: distributionChannel,
            Division: division
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
exports.CustomerSalesAreaRequestBuilder = CustomerSalesAreaRequestBuilder;
//# sourceMappingURL=CustomerSalesAreaRequestBuilder.js.map