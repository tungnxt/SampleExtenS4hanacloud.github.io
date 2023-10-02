import { Moment } from 'moment';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpRelationship } from './BpRelationship';
export declare class BpRelationshipRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpRelationship<T>, T> {
    getByKey(relationshipNumber: DeserializedType<T, 'Edm.String'>, businessPartner1: DeserializedType<T, 'Edm.String'>, businessPartner2: DeserializedType<T, 'Edm.String'>, validityEndDate: DeserializedType<T, 'Edm.DateTime'>): GetByKeyRequestBuilder<BpRelationship<T>, T>;
    getAll(): GetAllRequestBuilder<BpRelationship<T>, T>;
    create(entity: BpRelationship<T>): CreateRequestBuilder<BpRelationship<T>, T>;
    update(entity: BpRelationship<T>): UpdateRequestBuilder<BpRelationship<T>, T>;
    delete(relationshipNumber: string, businessPartner1: string, businessPartner2: string, validityEndDate: Moment): DeleteRequestBuilder<BpRelationship<T>, T>;
    delete(entity: BpRelationship<T>): DeleteRequestBuilder<BpRelationship<T>, T>;
}
