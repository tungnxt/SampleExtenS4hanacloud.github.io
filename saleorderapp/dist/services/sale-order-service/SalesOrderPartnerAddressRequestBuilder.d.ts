import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderPartnerAddress } from './SalesOrderPartnerAddress';
export declare class SalesOrderPartnerAddressRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderPartnerAddress<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, partnerFunction: DeserializedType<T, 'Edm.String'>, addressRepresentationCode: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<SalesOrderPartnerAddress<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderPartnerAddress<T>, T>;
    update(entity: SalesOrderPartnerAddress<T>): UpdateRequestBuilder<SalesOrderPartnerAddress<T>, T>;
}
