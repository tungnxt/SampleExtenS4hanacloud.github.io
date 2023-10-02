import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SupplierPurchasingOrgText } from './SupplierPurchasingOrgText';
export declare class SupplierPurchasingOrgTextRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SupplierPurchasingOrgText<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>, purchasingOrganization: DeserializedType<T, 'Edm.String'>, language: DeserializedType<T, 'Edm.String'>, longTextId: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SupplierPurchasingOrgText<T>, T>;
    getAll(): GetAllRequestBuilder<SupplierPurchasingOrgText<T>, T>;
    create(entity: SupplierPurchasingOrgText<T>): CreateRequestBuilder<SupplierPurchasingOrgText<T>, T>;
    update(entity: SupplierPurchasingOrgText<T>): UpdateRequestBuilder<SupplierPurchasingOrgText<T>, T>;
    delete(supplier: string, purchasingOrganization: string, language: string, longTextId: string): DeleteRequestBuilder<SupplierPurchasingOrgText<T>, T>;
    delete(entity: SupplierPurchasingOrgText<T>): DeleteRequestBuilder<SupplierPurchasingOrgText<T>, T>;
}
