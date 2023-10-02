"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressEmailAddressRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AddressEmailAddress_1 = require("./AddressEmailAddress");
class AddressEmailAddressRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(addressId, person, ordinalNumber) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            AddressID: addressId,
            Person: person,
            OrdinalNumber: ordinalNumber
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
    delete(addressIdOrEntity, person, ordinalNumber) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, addressIdOrEntity instanceof AddressEmailAddress_1.AddressEmailAddress
            ? addressIdOrEntity
            : {
                AddressID: addressIdOrEntity,
                Person: person,
                OrdinalNumber: ordinalNumber
            });
    }
}
exports.AddressEmailAddressRequestBuilder = AddressEmailAddressRequestBuilder;
//# sourceMappingURL=AddressEmailAddressRequestBuilder.js.map