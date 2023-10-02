import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpIntlAddressVersion } from './BpIntlAddressVersion';
export declare class BpIntlAddressVersionRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpIntlAddressVersion<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>, addressRepresentationCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BpIntlAddressVersion<T>, T>;
    getAll(): GetAllRequestBuilder<BpIntlAddressVersion<T>, T>;
    create(entity: BpIntlAddressVersion<T>): CreateRequestBuilder<BpIntlAddressVersion<T>, T>;
    update(entity: BpIntlAddressVersion<T>): UpdateRequestBuilder<BpIntlAddressVersion<T>, T>;
    delete(businessPartner: string, addressId: string, addressRepresentationCode: string): DeleteRequestBuilder<BpIntlAddressVersion<T>, T>;
    delete(entity: BpIntlAddressVersion<T>): DeleteRequestBuilder<BpIntlAddressVersion<T>, T>;
}
