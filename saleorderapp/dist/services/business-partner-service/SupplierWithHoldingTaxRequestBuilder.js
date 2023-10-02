"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierWithHoldingTaxRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SupplierWithHoldingTax_1 = require("./SupplierWithHoldingTax");
class SupplierWithHoldingTaxRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(supplier, companyCode, withholdingTaxType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Supplier: supplier,
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
    delete(supplierOrEntity, companyCode, withholdingTaxType) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, supplierOrEntity instanceof SupplierWithHoldingTax_1.SupplierWithHoldingTax
            ? supplierOrEntity
            : {
                Supplier: supplierOrEntity,
                CompanyCode: companyCode,
                WithholdingTaxType: withholdingTaxType
            });
    }
}
exports.SupplierWithHoldingTaxRequestBuilder = SupplierWithHoldingTaxRequestBuilder;
//# sourceMappingURL=SupplierWithHoldingTaxRequestBuilder.js.map