import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SupplierCompanyText } from './SupplierCompanyText';
export declare class SupplierCompanyTextRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SupplierCompanyText<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>, language: DeserializedType<T, 'Edm.String'>, longTextId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SupplierCompanyText<T>, T>;
    getAll(): GetAllRequestBuilder<SupplierCompanyText<T>, T>;
    create(entity: SupplierCompanyText<T>): CreateRequestBuilder<SupplierCompanyText<T>, T>;
    update(entity: SupplierCompanyText<T>): UpdateRequestBuilder<SupplierCompanyText<T>, T>;
    delete(supplier: string, companyCode: string, language: string, longTextId: string): DeleteRequestBuilder<SupplierCompanyText<T>, T>;
    delete(entity: SupplierCompanyText<T>): DeleteRequestBuilder<SupplierCompanyText<T>, T>;
}
