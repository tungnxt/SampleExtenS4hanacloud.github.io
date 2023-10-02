import { Moment } from 'moment';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerRating } from './BusinessPartnerRating';
export declare class BusinessPartnerRatingRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusinessPartnerRating<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, businessPartnerRatingProcedure: DeserializedType<T, 'Edm.String'>, bpRatingValidityEndDate: DeserializedType<T, 'Edm.DateTime'>): GetByKeyRequestBuilder<BusinessPartnerRating<T>, T>;
    getAll(): GetAllRequestBuilder<BusinessPartnerRating<T>, T>;
    create(entity: BusinessPartnerRating<T>): CreateRequestBuilder<BusinessPartnerRating<T>, T>;
    update(entity: BusinessPartnerRating<T>): UpdateRequestBuilder<BusinessPartnerRating<T>, T>;
    delete(businessPartner: string, businessPartnerRatingProcedure: string, bpRatingValidityEndDate: Moment): DeleteRequestBuilder<BusinessPartnerRating<T>, T>;
    delete(entity: BusinessPartnerRating<T>): DeleteRequestBuilder<BusinessPartnerRating<T>, T>;
}
