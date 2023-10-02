"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPurchasingOrgTextRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SupplierPurchasingOrgText_1 = require("./SupplierPurchasingOrgText");
class SupplierPurchasingOrgTextRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(supplier, purchasingOrganization, language, longTextId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Supplier: supplier,
            PurchasingOrganization: purchasingOrganization,
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
    delete(supplierOrEntity, purchasingOrganization, language, longTextId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, supplierOrEntity instanceof SupplierPurchasingOrgText_1.SupplierPurchasingOrgText
            ? supplierOrEntity
            : {
                Supplier: supplierOrEntity,
                PurchasingOrganization: purchasingOrganization,
                Language: language,
                LongTextID: longTextId
            });
    }
}
exports.SupplierPurchasingOrgTextRequestBuilder = SupplierPurchasingOrgTextRequestBuilder;
//# sourceMappingURL=SupplierPurchasingOrgTextRequestBuilder.js.map