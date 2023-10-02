"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressFaxNumberRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AddressFaxNumber_1 = require("./AddressFaxNumber");
class AddressFaxNumberRequestBuilder extends odata_v2_1.RequestBuilder {
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
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, addressIdOrEntity instanceof AddressFaxNumber_1.AddressFaxNumber
            ? addressIdOrEntity
            : {
                AddressID: addressIdOrEntity,
                Person: person,
                OrdinalNumber: ordinalNumber
            });
    }
}
exports.AddressFaxNumberRequestBuilder = AddressFaxNumberRequestBuilder;
//# sourceMappingURL=AddressFaxNumberRequestBuilder.js.map