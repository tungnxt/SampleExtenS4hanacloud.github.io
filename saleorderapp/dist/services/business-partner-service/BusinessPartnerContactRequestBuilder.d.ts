import { Moment } from 'moment';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerContact } from './BusinessPartnerContact';
export declare class BusinessPartnerContactRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusinessPartnerContact<T>, T> {
    getByKey(relationshipNumber: DeserializedType<T, 'Edm.String'>, businessPartnerCompany: DeserializedType<T, 'Edm.String'>, businessPartnerPerson: DeserializedType<T, 'Edm.String'>, validityEndDate: DeserializedType<T, 'Edm.DateTime'>): GetByKeyRequestBuilder<BusinessPartnerContact<T>, T>;
    getAll(): GetAllRequestBuilder<BusinessPartnerContact<T>, T>;
    create(entity: BusinessPartnerContact<T>): CreateRequestBuilder<BusinessPartnerContact<T>, T>;
    update(entity: BusinessPartnerContact<T>): UpdateRequestBuilder<BusinessPartnerContact<T>, T>;
    delete(relationshipNumber: string, businessPartnerCompany: string, businessPartnerPerson: string, validityEndDate: Moment): DeleteRequestBuilder<BusinessPartnerContact<T>, T>;
    delete(entity: BusinessPartnerContact<T>): DeleteRequestBuilder<BusinessPartnerContact<T>, T>;
}
