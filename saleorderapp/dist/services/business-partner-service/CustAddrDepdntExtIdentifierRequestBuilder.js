"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustAddrDepdntExtIdentifierRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const CustAddrDepdntExtIdentifier_1 = require("./CustAddrDepdntExtIdentifier");
class CustAddrDepdntExtIdentifierRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(customer, addressId) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            Customer: customer,
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
    delete(customerOrEntity, addressId) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, customerOrEntity instanceof CustAddrDepdntExtIdentifier_1.CustAddrDepdntExtIdentifier
            ? customerOrEntity
            : {
                Customer: customerOrEntity,
                AddressID: addressId
            });
    }
}
exports.CustAddrDepdntExtIdentifierRequestBuilder = CustAddrDepdntExtIdentifierRequestBuilder;
//# sourceMappingURL=CustAddrDepdntExtIdentifierRequestBuilder.js.map