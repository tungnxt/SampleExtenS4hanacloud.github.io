import { SalesOrderBillingPlan } from './SalesOrderBillingPlan';
import { SalesOrderBillingPlanRequestBuilder } from './SalesOrderBillingPlanRequestBuilder';
import { SalesOrderBillingPlanItemApi } from './SalesOrderBillingPlanItemApi';
import { SalesOrderApi } from './SalesOrderApi';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField, Link, OneToOneLink } from '@sap-cloud-sdk/odata-v2';
export declare class SalesOrderBillingPlanApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): SalesOrderBillingPlanApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: [
        SalesOrderBillingPlanItemApi<DeSerializersT>,
        SalesOrderApi<DeSerializersT>
    ]): this;
    entityConstructor: typeof SalesOrderBillingPlan;
    requestBuilder(): SalesOrderBillingPlanRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof SalesOrderBillingPlan, DeSerializersT>;
    private _schema?;
    get schema(): {
        SALES_ORDER: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BILLING_PLAN_START_DATE: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_START_DATE_RULE: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        REFERENCE_BILLING_PLAN: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_CATEGORY: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_TYPE: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_END_DATE: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BILLING_PLAN_END_DATE_RULE: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BILLING_PLAN_SEARCH_TERM: OrderableEdmTypeField<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        TO_BILLING_PLAN_ITEM: Link<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT, SalesOrderBillingPlanItemApi<DeSerializersT>>;
        TO_SALES_ORDER: OneToOneLink<SalesOrderBillingPlan<DeSerializersT>, DeSerializersT, SalesOrderApi<DeSerializersT>>;
        ALL_FIELDS: AllFields<SalesOrderBillingPlan<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
