"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusPartAddrDepdntTaxNmbrRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const BusPartAddrDepdntTaxNmbr_1 = require("./BusPartAddrDepdntTaxNmbr");
class BusPartAddrDepdntTaxNmbrRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(businessPartner, addressId, bpTaxType) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            BusinessPartner: businessPartner,
            AddressID: addressId,
            BPTaxType: bpTaxType
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
    delete(businessPartnerOrEntity, addressId, bpTaxType) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, businessPartnerOrEntity instanceof BusPartAddrDepdntTaxNmbr_1.BusPartAddrDepdntTaxNmbr
            ? businessPartnerOrEntity
            : {
                BusinessPartner: businessPartnerOrEntity,
                AddressID: addressId,
                BPTaxType: bpTaxType
            });
    }
}
exports.BusPartAddrDepdntTaxNmbrRequestBuilder = BusPartAddrDepdntTaxNmbrRequestBuilder;
//# sourceMappingURL=BusPartAddrDepdntTaxNmbrRequestBuilder.js.map