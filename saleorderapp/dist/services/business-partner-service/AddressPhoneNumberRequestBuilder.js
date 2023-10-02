"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressPhoneNumberRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AddressPhoneNumber_1 = require("./AddressPhoneNumber");
class AddressPhoneNumberRequestBuilder extends odata_v2_1.RequestBuilder {
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
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, addressIdOrEntity instanceof AddressPhoneNumber_1.AddressPhoneNumber
            ? addressIdOrEntity
            : {
                AddressID: addressIdOrEntity,
                Person: person,
                OrdinalNumber: ordinalNumber
            });
    }
}
exports.AddressPhoneNumberRequestBuilder = AddressPhoneNumberRequestBuilder;
//# sourceMappingURL=AddressPhoneNumberRequestBuilder.js.map