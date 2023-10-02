import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderHeaderPartner } from './SalesOrderHeaderPartner';
export declare class SalesOrderHeaderPartnerRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderHeaderPartner<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, partnerFunction: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderHeaderPartner<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderHeaderPartner<T>, T>;
    create(entity: SalesOrderHeaderPartner<T>): CreateRequestBuilder<SalesOrderHeaderPartner<T>, T>;
    update(entity: SalesOrderHeaderPartner<T>): UpdateRequestBuilder<SalesOrderHeaderPartner<T>, T>;
    delete(salesOrder: string, partnerFunction: string): DeleteRequestBuilder<SalesOrderHeaderPartner<T>, T>;
    delete(entity: SalesOrderHeaderPartner<T>): DeleteRequestBuilder<SalesOrderHeaderPartner<T>, T>;
}
