import { SalesOrderItemBillingPlan } from './SalesOrderItemBillingPlan';
import { SalesOrderItemBillingPlanRequestBuilder } from './SalesOrderItemBillingPlanRequestBuilder';
import { SlsOrderItemBillingPlanItemApi } from './SlsOrderItemBillingPlanItemApi';
import { SalesOrderApi } from './SalesOrderApi';
import { SalesOrderItemApi } from './SalesOrderItemApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderItemBillingPlanApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderItemBillingPlan<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderItemBillingPlanApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SlsOrderItemBillingPlanItemApi<DeSerializersT>,
        SalesOrderApi<DeSerializersT>,
        SalesOrderItemApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SalesOrderItemBillingPlan;
    requestBuilder(): SalesOrderItemBillingPlanRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderItemBillingPlan<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderItemBillingPlan<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderItemBillingPlan, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        SALES_ORDER_ITEM: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN_IS_IN_HEADER: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        BILLING_PLAN_START_DATE: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_START_DATE_RULE: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REFERENCE_BILLING_PLAN: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_CATEGORY: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_TYPE: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_END_DATE: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_END_DATE_RULE: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_SEARCH_TERM: OrderableEdmTypeField<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_BILLING_PLAN_ITEM: Link<SalesOrderItemBillingPlan<DeSerializersT>, DeSerializersT, SlsOrderItemBillingPlanItemApi<DeSerializersT>>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderItemBillingPlan<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        TO_SALES_ORDER_ITEM: OneToOneLink<SalesOrderItemBillingPlan<DeSerializersT>, DeSerializersT, SalesOrderItemApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderItemBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
