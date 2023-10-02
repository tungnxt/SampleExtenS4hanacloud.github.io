"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerAddressRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusinessPartnerAddress_1 = require("./BusinessPartnerAddress");
class BusinessPartnerAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            AddressID: addressId
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
    delete(businessPartnerOrEntity, addressId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusinessPartnerAddress_1.BusinessPartnerAddress
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                AddressID: addressId
            });
    }
}
exports.BusinessPartnerAddressRequestBuilder = BusinessPartnerAddressRequestBuilder;
//# sourceMappingURL=BusinessPartnerAddressRequestBuilder.js.map