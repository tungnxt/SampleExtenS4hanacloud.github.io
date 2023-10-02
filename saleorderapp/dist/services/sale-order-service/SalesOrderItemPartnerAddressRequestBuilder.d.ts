import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItemPartnerAddress } from './SalesOrderItemPartnerAddress';
export declare class SalesOrderItemPartnerAddressRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItemPartnerAddress<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, partnerFunction: DeserializedType<T, 'Edm.String'>, addressRepresentationCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderItemPartnerAddress<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItemPartnerAddress<T>, T>;
    update(entity: SalesOrderItemPartnerAddress<T>): UpdateRequestBuilder<SalesOrderItemPartnerAddress<T>, T>;
}
