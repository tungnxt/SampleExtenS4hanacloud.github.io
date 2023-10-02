"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierPartnerFuncRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const SupplierPartnerFunc_1 = require("./SupplierPartnerFunc");
class SupplierPartnerFuncRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(supplier, purchasingOrganization, supplierSubrange, plant, partnerFunction, partnerCounter) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Supplier: supplier,
            PurchasingOrganization: purchasingOrganization,
            SupplierSubrange: supplierSubrange,
            Plant: plant,
            PartnerFunction: partnerFunction,
            PartnerCounter: partnerCounter
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
    delete(supplierOrEntity, purchasingOrganization, supplierSubrange, plant, partnerFunction, partnerCounter) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, supplierOrEntity instanceof SupplierPartnerFunc_1.SupplierPartnerFunc
            ? supplierOrEntity
            : {
                Supplier: supplierOrEntity,
                PurchasingOrganization: purchasingOrganization,
                SupplierSubrange: supplierSubrange,
                Plant: plant,
                PartnerFunction: partnerFunction,
                PartnerCounter: partnerCounter
            });
    }
}
exports.SupplierPartnerFuncRequestBuilder = SupplierPartnerFuncRequestBuilder;
//# sourceMappingURL=SupplierPartnerFuncRequestBuilder.js.map