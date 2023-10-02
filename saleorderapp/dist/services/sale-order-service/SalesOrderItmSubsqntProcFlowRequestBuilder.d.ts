import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItmSubsqntProcFlow } from './SalesOrderItmSubsqntProcFlow';
export declare class SalesOrderItmSubsqntProcFlowRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItmSubsqntProcFlow<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>): GetByKeyRequestBuilder<SalesOrderItmSubsqntProcFlow<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItmSubsqntProcFlow<T>, T>;
}
