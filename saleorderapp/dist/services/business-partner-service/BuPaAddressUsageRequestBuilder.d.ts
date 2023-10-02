import { Moment } from 'moment';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BuPaAddressUsage } from './BuPaAddressUsage';
export declare class BuPaAddressUsageRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BuPaAddressUsage<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, validityEndDate: DeserializedType<T, 'Edm.DateTimeOffset'>, addressUsage: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BuPaAddressUsage<T>, T>;
    getAll(): GetAllRequestBuilder<BuPaAddressUsage<T>, T>;
    create(entity: BuPaAddressUsage<T>): CreateRequestBuilder<BuPaAddressUsage<T>, T>;
    update(entity: BuPaAddressUsage<T>): UpdateRequestBuilder<BuPaAddressUsage<T>, T>;
    delete(businessPartner: string, validityEndDate: Moment, addressUsage: string, addressId: string): DeleteRequestBuilder<BuPaAddressUsage<T>, T>;
    delete(entity: BuPaAddressUsage<T>): DeleteRequestBuilder<BuPaAddressUsage<T>, T>;
}
