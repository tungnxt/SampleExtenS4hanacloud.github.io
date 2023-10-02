import { DefaultDeSerializers, DeSerializers, GetAllRequestBuilder, GetByKeyRequestBuilder, DeserializedType, RequestBuilder } from '@sap-cloud-sdk/odata-v2';
import { SalesOrderItmPrecdgProcFlow } from './SalesOrderItmPrecdgProcFlow';
export declare class SalesOrderItmPrecdgProcFlowRequestBuilder<T extends DeSerializers = DefaultDeSerializers> extends RequestBuilder<SalesOrderItmPrecdgProcFlow<T>, T> {
    getByKey(salesOrder: DeserializedType<T, 'Edm.String'>, salesOrderItem: DeserializedType<T, 'Edm.String'>, docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>): GetByKeyRequestBuilder<SalesOrderItmPrecdgProcFlow<T>, T>;
    getAll(): GetAllRequestBuilder<SalesOrderItmPrecdgProcFlow<T>, T>;
}
