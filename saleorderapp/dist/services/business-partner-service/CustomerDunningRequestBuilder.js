"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerDunningRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustomerDunning_1 = require("./CustomerDunning");
class CustomerDunningRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, companyCode, dunningArea) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            CompanyCode: companyCode,
            DunningArea: dunningArea
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
    delete(customerOrEntity, companyCode, dunningArea) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustomerDunning_1.CustomerDunning
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                CompanyCode: companyCode,
                DunningArea: dunningArea
            });
    }
}
exports.CustomerDunningRequestBuilder = CustomerDunningRequestBuilder;
//# sourceMappingURL=CustomerDunningRequestBuilder.js.map