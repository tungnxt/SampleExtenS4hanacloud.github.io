import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { BpFinancialServicesExtn } from './BpFinancialServicesExtn';
export declare class BpFinancialServicesExtnRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<BpFinancialServicesExtn<T>, T> {
    getByKey(businessPartner: DeserializedType<T, 'Edm.String'>): GetByKeyRequestBuilder<BpFinancialServicesExtn<T>, T>;
    getAll(): GetAllRequestBuilder<BpFinancialServicesExtn<T>, T>;
    create(entity: BpFinancialServicesExtn<T>): CreateRequestBuilder<BpFinancialServicesExtn<T>, T>;
    update(entity: BpFinancialServicesExtn<T>): UpdateRequestBuilder<BpFinancialServicesExtn<T>, T>;
}
