import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderSubsqntProcFlowApi } from './SalesOrderSubsqntProcFlowApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
export declare class SalesOrderSubsqntProcFlow<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderSubsqntProcFlowType<T> {
    readonly _entityApi: SalesOrderSubsqntProcFlowApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
    subsequentDocument?: DeserializedType<T, 'Edm.String'> | null;
    subsequentDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
    processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
    overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    creationTime?: DeserializedType<T, 'Edm.Time'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    toSalesOrder?: SalesOrder<T> | null;
    constructor(_entityApi: SalesOrderSubsqntProcFlowApi<T>);
}
export interface SalesOrderSubsqntProcFlowType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
    subsequentDocument?: DeserializedType<T, 'Edm.String'> | null;
    subsequentDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
    processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
    overallSdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    creationTime?: DeserializedType<T, 'Edm.Time'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    toSalesOrder?: SalesOrderType<T> | null;
}
