import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { AddressFaxNumber } from './AddressFaxNumber';
export declare class AddressFaxNumberRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<AddressFaxNumber<T>, T> {
    getByKey(addressId: DeserializedType<T, 'Edm.String'>, person: DeserializedType<T, 'Edm.String'>, ordinalNumber: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<AddressFaxNumber<T>, T>;
    getAll(): GetAllRequestBuilder<AddressFaxNumber<T>, T>;
    create(entity: AddressFaxNumber<T>): CreateRequestBuilder<AddressFaxNumber<T>, T>;
    update(entity: AddressFaxNumber<T>): UpdateRequestBuilder<AddressFaxNumber<T>, T>;
    delete(addressId: string, person: string, ordinalNumber: string): DeleteRequestBuilder<AddressFaxNumber<T>, T>;
    delete(entity: AddressFaxNumber<T>): DeleteRequestBuilder<AddressFaxNumber<T>, T>;
}
