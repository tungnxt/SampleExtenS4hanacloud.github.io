"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierCompanyRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierCompanyRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(supplier, companyCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Supplier: supplier,
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
exports.SupplierCompanyRequestBuilder = SupplierCompanyRequestBuilder;
//# sourceMappingURL=SupplierCompanyRequestBuilder.js.map