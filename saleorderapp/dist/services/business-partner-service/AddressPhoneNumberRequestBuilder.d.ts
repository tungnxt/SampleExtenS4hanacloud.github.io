import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { AddressPhoneNumber } from './AddressPhoneNumber';
export declare class AddressPhoneNumberRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<AddressPhoneNumber<T>, T> {
    getByKey(addressId: DeserializedType<T, 'Edm.String'>, person: DeserializedType<T, 'Edm.String'>, ordinalNumber: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<AddressPhoneNumber<T>, T>;
    getAll(): GetAllRequestBuilder<AddressPhoneNumber<T>, T>;
    create(entity: AddressPhoneNumber<T>): CreateRequestBuilder<AddressPhoneNumber<T>, T>;
    update(entity: AddressPhoneNumber<T>): UpdateRequestBuilder<AddressPhoneNumber<T>, T>;
    delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilder<AddressPhoneNumber<T>, T>;
    delete(entity: AddressPhoneNumber<T>): DeleteRequestBuilder<AddressPhoneNumber<T>, T>;
}
