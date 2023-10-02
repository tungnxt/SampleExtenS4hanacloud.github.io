import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerBank } from './BusinessPartnerBank';
export declare class BusinessPartnerBankRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusinessPartnerBank<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, bankIdentification: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BusinessPartnerBank<T>, T>;
    getAll(): GetAllRequestBuilder<BusinessPartnerBank<T>, T>;
    create(entity: BusinessPartnerBank<T>): CreateRequestBuilder<BusinessPartnerBank<T>, T>;
    update(entity: BusinessPartnerBank<T>): UpdateRequestBuilder<BusinessPartnerBank<T>, T>;
    delete(businessPartner: string, bankIdentification: string): DeleteRequestBuilder<BusinessPartnerBank<T>, T>;
    delete(entity: BusinessPartnerBank<T>): DeleteRequestBuilder<BusinessPartnerBank<T>, T>;
}
