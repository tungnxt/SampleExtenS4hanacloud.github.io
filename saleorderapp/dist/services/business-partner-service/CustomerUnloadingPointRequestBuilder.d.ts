import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustomerUnloadingPoint } from './CustomerUnloadingPoint';
export declare class CustomerUnloadingPointRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustomerUnloadingPoint<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, unloadingPointName: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustomerUnloadingPoint<T>, T>;
    getAll(): GetAllRequestBuilder<CustomerUnloadingPoint<T>, T>;
    create(entity: CustomerUnloadingPoint<T>): CreateRequestBuilder<CustomerUnloadingPoint<T>, T>;
    update(entity: CustomerUnloadingPoint<T>): UpdateRequestBuilder<CustomerUnloadingPoint<T>, T>;
    delete(customer: string, unloadingPointName: string): DeleteRequestBuilder<CustomerUnloadingPoint<T>, T>;
    delete(entity: CustomerUnloadingPoint<T>): DeleteRequestBuilder<CustomerUnloadingPoint<T>, T>;
}
