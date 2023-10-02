import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SupplierDunning } from './SupplierDunning';
export declare class SupplierDunningRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SupplierDunning<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>, dunningArea: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SupplierDunning<T>, T>;
    getAll(): GetAllRequestBuilder<SupplierDunning<T>, T>;
    create(entity: SupplierDunning<T>): CreateRequestBuilder<SupplierDunning<T>, T>;
    update(entity: SupplierDunning<T>): UpdateRequestBuilder<SupplierDunning<T>, T>;
    delete(supplier: string, companyCode: string, dunningArea: string): DeleteRequestBuilder<SupplierDunning<T>, T>;
    delete(entity: SupplierDunning<T>): DeleteRequestBuilder<SupplierDunning<T>, T>;
}
