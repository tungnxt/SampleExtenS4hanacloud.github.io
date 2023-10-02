import { Entity, DefaultDeSerializers, DeSerializers, DeserializedType } from '@sap-cloud-sdk/odata-v2';
import type { SalesOrderBillingPlanApi } from './SalesOrderBillingPlanApi';
import { SalesOrderBillingPlanItem, SalesOrderBillingPlanItemType } from './SalesOrderBillingPlanItem';
import { SalesOrder, SalesOrderType } from './SalesOrder';
export declare class SalesOrderBillingPlan<T extends DeSerializers = DefaultDeSerializers> extends Entity implements SalesOrderBillingPlanType<T> {
    readonly _entityApi: SalesOrderBillingPlanApi<T>;
    static _entityName: string;
    static _defaultBasePath: string;
    static _keys: string[];
    salesOrder: DeserializedType<T, 'Edm.String'>;
    billingPlan: DeserializedType<T, 'Edm.String'>;
    billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
    referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
    toBillingPlanItem: SalesOrderBillingPlanItem<T>[];
    toSalesOrder?: SalesOrder<T> | null;
    constructor(_entityApi: SalesOrderBillingPlanApi<T>);
}
export interface SalesOrderBillingPlanType<T extends DeSerializers = DefaultDeSerializers> {
    salesOrder: DeserializedType<T, 'Edm.String'>;
    billingPlan: DeserializedType<T, 'Edm.String'>;
    billingPlanStartDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    billingPlanStartDateRule?: DeserializedType<T, 'Edm.String'> | null;
    referenceBillingPlan?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanCategory?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanType?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanEndDate?: DeserializedType<T, 'Edm.DateTime'> | null;
    billingPlanEndDateRule?: DeserializedType<T, 'Edm.String'> | null;
    billingPlanSearchTerm?: DeserializedType<T, 'Edm.String'> | null;
    toBillingPlanItem: SalesOrderBillingPlanItemType<T>[];
    toSalesOrder?: SalesOrderType<T> | null;
}
