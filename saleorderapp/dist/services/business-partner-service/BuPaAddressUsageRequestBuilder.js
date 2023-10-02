"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BuPaAddressUsageRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BuPaAddressUsage_1 = require("./BuPaAddressUsage");
class BuPaAddressUsageRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, validityEndDate, addressUsage, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            ValidityEndDate: validityEndDate,
            AddressUsage: addressUsage,
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
    delete(businessPartnerOrEntity, validityEndDate, addressUsage, addressId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BuPaAddressUsage_1.BuPaAddressUsage
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                ValidityEndDate: validityEndDate,
                AddressUsage: addressUsage,
                AddressID: addressId
            });
    }
}
exports.BuPaAddressUsageRequestBuilder = BuPaAddressUsageRequestBuilder;
//# sourceMappingURL=BuPaAddressUsageRequestBuilder.js.map