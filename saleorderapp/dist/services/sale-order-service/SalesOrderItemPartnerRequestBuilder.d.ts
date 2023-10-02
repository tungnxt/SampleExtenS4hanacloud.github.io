import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemPartner } from './SalesOrderItemPartner';
export declare class SalesOrderItemPartnerRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItemPartner<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, partnerFunction: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderItemPartner<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItemPartner<T>, T>;
    create(entity: SalesOrderItemPartner<T>): CreateRequestBuilder<SalesOrderItemPartner<T>, T>;
    update(entity: SalesOrderItemPartner<T>): UpdateRequestBuilder<SalesOrderItemPartner<T>, T>;
    delete(salesOrder: string, salesOrderItem: string, partnerFunction: string): DeleteRequestBuilder<SalesOrderItemPartner<T>, T>;
    delete(entity: SalesOrderItemPartner<T>): DeleteRequestBuilder<SalesOrderItemPartner<T>, T>;
}
