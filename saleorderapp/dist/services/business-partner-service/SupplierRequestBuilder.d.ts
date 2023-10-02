import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { Supplier } from './Supplier';
export declare class SupplierRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<Supplier<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<Supplier<T>, T>;
    getAll(): GetAllRequestBuilder<Supplier<T>, T>;
    update(entity: Supplier<T>): UpdateRequestBuilder<Supplier<T>, T>;
}
