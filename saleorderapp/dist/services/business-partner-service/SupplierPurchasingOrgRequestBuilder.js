"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrgRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class SupplierPurchasingOrgRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(supplier, purchasingOrganization) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Supplier: supplier,
            PurchasingOrganization: purchasingOrganization
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
exports.SupplierPurchasingOrgRequestBuilder = SupplierPurchasingOrgRequestBuilder;
//# sourceMappingURL=SupplierPurchasingOrgRequestBuilder.js.map