import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { CustSalesPartnerFunc } from './CustSalesPartnerFunc';
export declare class CustSalesPartnerFuncRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<CustSalesPartnerFunc<T>, T> {
    getByKey(customer: DeserializedType<T, 'Edm.String'>, salesOrganization: DeserializedType<T, 'Edm.String'>, distributionChannel: DeserializedType<T, 'Edm.String'>, division: DeserializedType<T, 'Edm.String'>, partnerCounter: DeserializedType<T, 'Edm.String'>, partnerFunction: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<CustSalesPartnerFunc<T>, T>;
    getAll(): GetAllRequestBuilder<CustSalesPartnerFunc<T>, T>;
    create(entity: CustSalesPartnerFunc<T>): CreateRequestBuilder<CustSalesPartnerFunc<T>, T>;
    update(entity: CustSalesPartnerFunc<T>): UpdateRequestBuilder<CustSalesPartnerFunc<T>, T>;
    delete(customer: string, salesOrganization: string, distributionChannel: string, division: string, partnerCounter: string, partnerFunction: string): DeleteRequestBuilder<CustSalesPartnerFunc<T>, T>;
    delete(entity: CustSalesPartnerFunc<T>): DeleteRequestBuilder<CustSalesPartnerFunc<T>, T>;
}
