import { CustAddrDepdntExtIdentifier } from './CustAddrDepdntExtIdentifier';
import { CustAddrDepdntExtIdentifierRequestBuilder } from './CustAddrDepdntExtIdentifierRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class CustAddrDepdntExtIdentifierApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<CustAddrDepdntExtIdentifier<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): CustAddrDepdntExtIdentifierApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof CustAddrDepdntExtIdentifier;
    requestBuilder(): CustAddrDepdntExtIdentifierRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<CustAddrDepdntExtIdentifier<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<CustAddrDepdntExtIdentifier<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof CustAddrDepdntExtIdentifier, DeSerializersT>;
    private _schema?;
    get schema(): {
        CUSTOMER: OrderableEdmTypeField<CustAddrDepdntExtIdentifier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        ADDRESS_ID: OrderableEdmTypeField<CustAddrDepdntExtIdentifier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        CUSTOMER_EXTERNAL_REF_ID: OrderableEdmTypeField<CustAddrDepdntExtIdentifier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        ALL_FIELDS: AllFields<CustAddrDepdntExtIdentifier<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
