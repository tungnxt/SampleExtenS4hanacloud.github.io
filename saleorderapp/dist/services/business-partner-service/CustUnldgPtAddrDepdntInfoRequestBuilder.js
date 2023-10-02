"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustUnldgPtAddrDepdntInfoRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustUnldgPtAddrDepdntInfo_1 = require("./CustUnldgPtAddrDepdntInfo");
class CustUnldgPtAddrDepdntInfoRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, addressId, unloadingPointName) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
            AddressID: addressId,
            UnloadingPointName: unloadingPointName
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
    delete(customerOrEntity, addressId, unloadingPointName) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustUnldgPtAddrDepdntInfo_1.CustUnldgPtAddrDepdntInfo
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                AddressID: addressId,
                UnloadingPointName: unloadingPointName
            });
    }
}
exports.CustUnldgPtAddrDepdntInfoRequestBuilder = CustUnldgPtAddrDepdntInfoRequestBuilder;
//# sourceMappingURL=CustUnldgPtAddrDepdntInfoRequestBuilder.js.map