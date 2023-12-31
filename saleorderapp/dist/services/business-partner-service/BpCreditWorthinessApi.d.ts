import { BpCreditWorthiness } from './BpCreditWorthiness';
import { BpCreditWorthinessRequestBuilder } from './BpCreditWorthinessRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class BpCreditWorthinessApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<BpCreditWorthiness<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): BpCreditWorthinessApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof BpCreditWorthiness;
    requestBuilder(): BpCreditWorthinessRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<BpCreditWorthiness<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<BpCreditWorthiness<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof BpCreditWorthiness, DeSerializersT>;
    private _schema?;
    get schema(): {
        BUSINESS_PARTNER: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BUS_PART_CREDIT_STANDING: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_CREDIT_STANDING_STATUS: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREDIT_RATING_AGENCY: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_CREDIT_STANDING_COMMENT: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_CREDIT_STANDING_DATE: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BP_CREDIT_STANDING_RATING: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_LEGAL_PROCEEDING_STATUS: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_LGL_PROCEEDING_INITIATION_DATE: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BUSINESS_PARTNER_IS_UNDER_OATH: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        BUSINESS_PARTNER_OATH_DATE: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BUSINESS_PARTNER_IS_BANKRUPT: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        BUSINESS_PARTNER_BANKRUPTCY_DATE: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BP_FORECLOSURE_IS_INITIATED: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        BP_FORECLOSURE_DATE: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        BP_CRDT_WRTHNSS_ACCESS_CHK_IS_ACTIVE: OrderableEdmTypeField<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<BpCreditWorthiness<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
