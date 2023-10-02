import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderItemBillingPlanApi } from './SalesOrderItemBillingPlanApi';
import { SlsOrderItemBillingPlanItem, SlsOrderItemBillingPlanItemType } from './SlsOrderItemBillingPlanItem';
import { SalesOrder, SalesOrderType } from './SalesOrder';
import { SalesOrderItem, SalesOrderItemType } from './SalesOrderItem';
export declare class SalesOrderItemBillingPlan<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderItemBillingPlanType<T> {
    readonly _entityApi: SalesOrderItemBillingPlanApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    billingPlan: DeserializedType<T, 'Edm.String'>;
    billingPlanIsInHeader?: DeserializedType<T, 'Edm.Boolean'> | null;
    billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
    referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
    toBillingPlanItem: SlsOrderItemBillingPlanItem<T>[];
    toSalesOrder?: SalesOrder<T> | null;
    toSalesOrderItem?: SalesOrderItem<T> | null;
    constructor(_entityApi: SalesOrderItemBillingPlanApi<T>);
}
export interface SalesOrderItemBillingPlanType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    salesOrderItem: DeserializedType<T, 'Edm.String'>;
    billingPlan: DeserializedType<T, 'Edm.String'>;
    billingPlanIsInHeader?: DeserializedType<T, 'Edm.Boolean'> | null;
    billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
    referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
    toBillingPlanItem: SlsOrderItemBillingPlanItemType<T>[];
    toSalesOrder?: SalesOrderType<T> | null;
    toSalesOrderItem?: SalesOrderItemType<T> | null;
}
