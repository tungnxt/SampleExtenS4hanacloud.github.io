import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BusinessPartnerRole } from './BusinessPartnerRole';
export declare class BusinessPartnerRoleRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BusinessPartnerRole<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>, businessPartnerRole: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BusinessPartnerRole<T>, T>;
    getAll(): GetAllRequestBuilder<BusinessPartnerRole<T>, T>;
    create(entity: BusinessPartnerRole<T>): CreateRequestBuilder<BusinessPartnerRole<T>, T>;
    update(entity: BusinessPartnerRole<T>): UpdateRequestBuilder<BusinessPartnerRole<T>, T>;
}
