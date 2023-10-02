"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpIntlAddressVersionRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BpIntlAddressVersion_1 = require("./BpIntlAddressVersion");
class BpIntlAddressVersionRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, addressId, addressRepresentationCode) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            AddressID: addressId,
            AddressRepresentationCode: addressRepresentationCode
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
    delete(businessPartnerOrEntity, addressId, addressRepresentationCode) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BpIntlAddressVersion_1.BpIntlAddressVersion
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                AddressID: addressId,
                AddressRepresentationCode: addressRepresentationCode
            });
    }
}
exports.BpIntlAddressVersionRequestBuilder = BpIntlAddressVersionRequestBuilder;
//# sourceMappingURL=BpIntlAddressVersionRequestBuilder.js.map