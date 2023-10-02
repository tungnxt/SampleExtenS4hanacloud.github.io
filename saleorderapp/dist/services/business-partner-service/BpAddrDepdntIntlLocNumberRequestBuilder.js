"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BpAddrDepdntIntlLocNumberRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BpAddrDepdntIntlLocNumber_1 = require("./BpAddrDepdntIntlLocNumber");
class BpAddrDepdntIntlLocNumberRequestBuilder extends odata_v2_1.RequestBuilder {
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
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BpAddrDepdntIntlLocNumber_1.BpAddrDepdntIntlLocNumber
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                AddressID: addressId
            });
    }
}
exports.BpAddrDepdntIntlLocNumberRequestBuilder = BpAddrDepdntIntlLocNumberRequestBuilder;
//# sourceMappingURL=BpAddrDepdntIntlLocNumberRequestBuilder.js.map