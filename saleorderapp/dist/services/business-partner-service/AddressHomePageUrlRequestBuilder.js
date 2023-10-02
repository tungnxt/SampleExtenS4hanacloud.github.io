"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressHomePageUrlRequestBuilder = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
const AddressHomePageUrl_1 = require("./AddressHomePageUrl");
class AddressHomePageUrlRequestBuilder extends odata_v2_1.RequestBuilder {
    getByKey(addressId, person, ordinalNumber, validityStartDate, isDefaultUrlAddress) {
        return new odata_v2_1.GetByKeyRequestBuilder(this.entityApi, {
            AddressID: addressId,
            Person: person,
            OrdinalNumber: ordinalNumber,
            ValidityStartDate: validityStartDate,
            IsDefaultURLAddress: isDefaultUrlAddress
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
    delete(addressIdOrEntity, person, ordinalNumber, validityStartDate, isDefaultUrlAddress) {
        return new odata_v2_1.DeleteRequestBuilder(this.entityApi, addressIdOrEntity instanceof AddressHomePageUrl_1.AddressHomePageUrl
            ? addressIdOrEntity
            : {
                AddressID: addressIdOrEntity,
                Person: person,
                OrdinalNumber: ordinalNumber,
                ValidityStartDate: validityStartDate,
                IsDefaultURLAddress: isDefaultUrlAddress
            });
    }
}
exports.AddressHomePageUrlRequestBuilder = AddressHomePageUrlRequestBuilder;
//# sourceMappingURL=AddressHomePageUrlRequestBuilder.js.map