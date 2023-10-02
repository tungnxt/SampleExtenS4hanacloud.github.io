import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SupplierCompany } from './SupplierCompany';
export declare class SupplierCompanyRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SupplierCompany<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>, companyCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SupplierCompany<T>, T>;
    getAll(): GetAllRequestBuilder<SupplierCompany<T>, T>;
    create(entity: SupplierCompany<T>): CreateRequestBuilder<SupplierCompany<T>, T>;
    update(entity: SupplierCompany<T>): UpdateRequestBuilder<SupplierCompany<T>, T>;
}
