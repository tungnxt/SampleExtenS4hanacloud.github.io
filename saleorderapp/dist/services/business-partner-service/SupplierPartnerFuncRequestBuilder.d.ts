import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SupplierPartnerFunc } from './SupplierPartnerFunc';
export declare class SupplierPartnerFuncRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SupplierPartnerFunc<T>, T> {
    getByKey(supplier: DeserializedType<T, 'Edm.String'>, purchasingOrganization: DeserializedType<T, 'Edm.String'>, supplierSubrange: DeserializedType<T, 'Edm.String'>, plant: DeserializedType<T, 'Edm.String'>, partnerFunction: DeserializedType<T, 'Edm.String'>, partnerCounter: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SupplierPartnerFunc<T>, T>;
    getAll(): GetAllRequestBuilder<SupplierPartnerFunc<T>, T>;
    create(entity: SupplierPartnerFunc<T>): CreateRequestBuilder<SupplierPartnerFunc<T>, T>;
    update(entity: SupplierPartnerFunc<T>): UpdateRequestBuilder<SupplierPartnerFunc<T>, T>;
    delete(supplier: string, purchasingOrganization: string, supplierSubrange: string, plant: string, partnerFunction: string, partnerCounter: string): DeleteRequestBuilder<SupplierPartnerFunc<T>, T>;
    delete(entity: SupplierPartnerFunc<T>): DeleteRequestBuilder<SupplierPartnerFunc<T>, T>;
}
