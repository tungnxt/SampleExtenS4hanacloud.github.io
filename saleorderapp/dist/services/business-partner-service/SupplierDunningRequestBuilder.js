"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierDunningRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SupplierDunning_1 = require("./SupplierDunning");
class SupplierDunningRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(supplier, companyCode, dunningArea) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Supplier: supplier,
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
    delete(supplierOrEntity, companyCode, dunningArea) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, supplierOrEntity instanceof SupplierDunning_1.SupplierDunning
            ? supplierOrEntity
            : {
                Supplier: supplierOrEntity,
                CompanyCode: companyCode,
                DunningArea: dunningArea
            });
    }
}
exports.SupplierDunningRequestBuilder = SupplierDunningRequestBuilder;
//# sourceMappingURL=SupplierDunningRequestBuilder.js.map