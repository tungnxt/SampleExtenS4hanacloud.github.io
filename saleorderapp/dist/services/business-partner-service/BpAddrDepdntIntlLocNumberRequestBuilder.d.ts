import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpAddrDepdntIntlLocNumber } from './BpAddrDepdntIntlLocNumber';
export declare class BpAddrDepdntIntlLocNumberRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpAddrDepdntIntlLocNumber<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, addressId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BpAddrDepdntIntlLocNumber<T>, T>;
    getAll(): GetAllRequestBuilder<BpAddrDepdntIntlLocNumber<T>, T>;
    create(entity: BpAddrDepdntIntlLocNumber<T>): CreateRequestBuilder<BpAddrDepdntIntlLocNumber<T>, T>;
    update(entity: BpAddrDepdntIntlLocNumber<T>): UpdateRequestBuilder<BpAddrDepdntIntlLocNumber<T>, T>;
    delete(businessPartner: string, addressId: string): DeleteRequestBuilder<BpAddrDepdntIntlLocNumber<T>, T>;
    delete(entity: BpAddrDepdntIntlLocNumber<T>): DeleteRequestBuilder<BpAddrDepdntIntlLocNumber<T>, T>;
}
