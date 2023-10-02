import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { AddressEmailAddress } from './AddressEmailAddress';
export declare class AddressEmailAddressRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<AddressEmailAddress<T>, T> {
    getByKey(addressId: DeserializedType<T, 'Edm.String'>, person: DeserializedType<T, 'Edm.String'>, ordinalNumber: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<AddressEmailAddress<T>, T>;
    getAll(): GetAllRequestBuilder<AddressEmailAddress<T>, T>;
    create(entity: AddressEmailAddress<T>): CreateRequestBuilder<AddressEmailAddress<T>, T>;
    update(entity: AddressEmailAddress<T>): UpdateRequestBuilder<AddressEmailAddress<T>, T>;
    delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilder<AddressEmailAddress<T>, T>;
    delete(entity: AddressEmailAddress<T>): DeleteRequestBuilder<AddressEmailAddress<T>, T>;
}
