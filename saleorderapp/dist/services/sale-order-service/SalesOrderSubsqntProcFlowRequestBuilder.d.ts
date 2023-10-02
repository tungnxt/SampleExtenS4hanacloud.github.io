import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderSubsqntProcFlow } from './SalesOrderSubsqntProcFlow';
export declare class SalesOrderSubsqntProcFlowRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderSubsqntProcFlow<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>): GetByKeyRequestBuilder<SalesOrderSubsqntProcFlow<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderSubsqntProcFlow<T>, T>;
}
