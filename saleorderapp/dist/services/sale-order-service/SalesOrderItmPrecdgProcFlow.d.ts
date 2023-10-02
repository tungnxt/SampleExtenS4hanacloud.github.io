import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderItmPrecdgProcFlowApi } from './SalesOrderItmPrecdgProcFlowApi';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
export declare class SalesOrderItmPrecdgProcFlow<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderItmPrecdgProcFlowType<T> {
    readonly _entityApi: SalesOrderItmPrecdgProcFlowApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
    precedingDocument?: DeserializedType<T, 'Edm.String'> | null;
    precedingDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
    precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
    processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
    relatedProcFlowDocStsFieldName?: DeserializedType<T, 'Edm.String'> | null;
    sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
    accountingTransferStatus?: DeserializedType<T, 'Edm.String'> | null;
    prelimBillingDocumentStatus?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    creationTime?: DeserializedType<T, 'Edm.Time'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    toSalesOrder?: SalesOrder<T> | null;
    toSalesOrderItem?: SalesOrderItem<T> | null;
    constructor(_entityApi: SalesOrderItmPrecdgProcFlowApi<T>);
}
export interface SalesOrderItmPrecdgProcFlowType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    docRelationshipUuid: DeserializedType<T, 'Edm.Guid'>;
    precedingDocument?: DeserializedType<T, 'Edm.String'> | null;
    precedingDocumentItem?: DeserializedType<T, 'Edm.String'> | null;
    precedingDocumentCategory?: DeserializedType<T, 'Edm.String'> | null;
    processFlowLevel?: DeserializedType<T, 'Edm.String'> | null;
    relatedProcFlowDocStsFieldName?: DeserializedType<T, 'Edm.String'> | null;
    sdProcessStatus?: DeserializedType<T, 'Edm.String'> | null;
    accountingTransferStatus?: DeserializedType<T, 'Edm.String'> | null;
    prelimBillingDocumentStatus?: DeserializedType<T, 'Edm.String'> | null;
    creationDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    creationTime?: DeserializedType<T, 'Edm.Time'> | null;
    lastChangeDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    toSalesOrder?: SalesOrderType<T> | null;
    toSalesOrderItem?: SalesOrderItemType<T> | null;
}
