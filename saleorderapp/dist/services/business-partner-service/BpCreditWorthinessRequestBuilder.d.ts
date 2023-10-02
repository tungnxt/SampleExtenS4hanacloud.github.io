import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpCreditWorthiness } from './BpCreditWorthiness';
export declare class BpCreditWorthinessRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpCreditWorthiness<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BpCreditWorthiness<T>, T>;
    getAll(): GetAllRequestBuilder<BpCreditWorthiness<T>, T>;
    create(entity: BpCreditWorthiness<T>): CreateRequestBuilder<BpCreditWorthiness<T>, T>;
    update(entity: BpCreditWorthiness<T>): UpdateRequestBuilder<BpCreditWorthiness<T>, T>;
}
