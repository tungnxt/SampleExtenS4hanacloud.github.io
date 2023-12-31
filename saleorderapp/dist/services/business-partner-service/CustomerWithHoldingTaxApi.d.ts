import { CustomerWithHoldingTax } from './CustomerWithHoldingTax';
import { CustomerWithHoldingTaxRequestBuilder } from './CustomerWithHoldingTaxRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class CustomerWithHoldingTaxApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustomerWithHoldingTax<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): CustomerWithHoldingTaxApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof CustomerWithHoldingTax;
    requestBuilder(): CustomerWithHoldingTaxRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustomerWithHoldingTax<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustomerWithHoldingTax<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustomerWithHoldingTax, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        COMPANY_CODE: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        WITHHOLDING_TAX_TYPE: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        WITHHOLDING_TAX_CODE: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        WITHHOLDING_TAX_AGENT: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        OBLIGATION_DATE_BEGIN: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        OBLIGATION_DATE_END: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        WITHHOLDING_TAX_NUMBER: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        WITHHOLDING_TAX_CERTIFICATE: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        WITHHOLDING_TAX_EXMPT_PERCENT: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Decimal", true, true>;
        EXEMPTION_DATE_BEGIN: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        EXEMPTION_DATE_END: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        EXEMPTION_REASON: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        AUTHORIZATION_GROUP: OrderableEdmTypeField<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<CustomerWithHoldingTax<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
