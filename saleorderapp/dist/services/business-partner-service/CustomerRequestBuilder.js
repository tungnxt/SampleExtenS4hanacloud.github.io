"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class CustomerRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.CustomerRequestBuilder = CustomerRequestBuilder;
//# sourceMappingURL=CustomerRequestBuilder.js.map