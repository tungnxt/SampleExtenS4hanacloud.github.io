import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SupplierPurchasingOrg } from './SupplierPurchasingOrg';
export declare class SupplierPurchasingOrgRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SupplierPurchasingOrg<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>, purchasingOrganization: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SupplierPurchasingOrg<T>, T>;
    getAll(): GetAllRequestBuilder<SupplierPurchasingOrg<T>, T>;
    create(entity: SupplierPurchasingOrg<T>): CreateRequestBuilder<SupplierPurchasingOrg<T>, T>;
    update(entity: SupplierPurchasingOrg<T>): UpdateRequestBuilder<SupplierPurchasingOrg<T>, T>;
}
