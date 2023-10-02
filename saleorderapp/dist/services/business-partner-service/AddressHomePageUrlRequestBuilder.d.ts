import { Moment } from 'moment';
import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { AddressHomePageUrl } from './AddressHomePageUrl';
export declare class AddressHomePageUrlRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<AddressHomePageUrl<T>, T> {
    getByKey(addressId: DeserializedType<T, 'Edm.String'>, person: DeserializedType<T, 'Edm.String'>, ordinalNumber: DeserializedType<T, 'Edm.String'>, validityStartDate: DeserializedType<T, 'Edm.DateTime'>, isDefaultUrlAddress: DeserializedType<T, 'Edm.Boolean'>): GetByKeyRequestBuilder<AddressHomePageUrl<T>, T>;
    getAll(): GetAllRequestBuilder<AddressHomePageUrl<T>, T>;
    create(entity: AddressHomePageUrl<T>): CreateRequestBuilder<AddressHomePageUrl<T>, T>;
    update(entity: AddressHomePageUrl<T>): UpdateRequestBuilder<AddressHomePageUrl<T>, T>;
    delete(addressId: string, person: string, ordinalNumber: string, validityStartDate: Moment, isDefaultUrlAddress: boolean): DeleteRequestBuilder<AddressHomePageUrl<T>, T>;
    delete(entity: AddressHomePageUrl<T>): DeleteRequestBuilder<AddressHomePageUrl<T>, T>;
}
