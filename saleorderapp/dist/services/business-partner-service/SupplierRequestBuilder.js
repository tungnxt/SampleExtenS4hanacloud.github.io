"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(supplier) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Supplier: supplier
        });
    }
    getAll() {
        return new odata_v2_1.GetAllRequestBuilder(this.entityApi);
    }
    update(entity) {
        return new odata_v2_1.UpdateRequestBuilder(this.entityApi, entity);
    }
}
exports.SupplierRequestBuilder = SupplierRequestBuilder;
//# sourceMappingURL=SupplierRequestBuilder.js.map