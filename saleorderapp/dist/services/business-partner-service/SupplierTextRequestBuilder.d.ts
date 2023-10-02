import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SupplierText } from './SupplierText';
export declare class SupplierTextRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SupplierText<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>, language: DeserializedType<T, 'Edm.String'>, longTextId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SupplierText<T>, T>;
    getAll(): GetAllRequestBuilder<SupplierText<T>, T>;
    create(entity: SupplierText<T>): CreateRequestBuilder<SupplierText<T>, T>;
    update(entity: SupplierText<T>): UpdateRequestBuilder<SupplierText<T>, T>;
    delete(supplier: string, language: string, longTextId: string): DeleteRequestBuilder<SupplierText<T>, T>;
    delete(entity: SupplierText<T>): DeleteRequestBuilder<SupplierText<T>, T>;
}
