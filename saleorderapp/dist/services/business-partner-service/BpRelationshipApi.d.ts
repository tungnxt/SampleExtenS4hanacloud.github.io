import { BpRelationship } from './BpRelationship';
import { BpRelationshipRequestBuilder } from './BpRelationshipRequestBuilder';
import { CustomField, DefaultDeSerializers, DeSerializers, AllFields, EntityBuilderType, EntityApi, FieldBuilder, OrderableEdmTypeField } from '@sap-cloud-sdk/odata-v2';
export declare class BpRelationshipApi<DeSerializersT extends DeSerializers = DefaultDeSerializers> implements EntityApi<BpRelationship<DeSerializersT>, DeSerializersT> {
    deSerializers: DeSerializersT;
    private constructor();
    static _privateFactory<DeSerializersT extends DeSerializers = DefaultDeSerializers>(deSerializers?: DeSerializersT): BpRelationshipApi<DeSerializersT>;
    private navigationPropertyFields;
    _addNavigationProperties(linkedApis: []): this;
    entityConstructor: typeof BpRelationship;
    requestBuilder(): BpRelationshipRequestBuilder<DeSerializersT>;
    entityBuilder(): EntityBuilderType<BpRelationship<DeSerializersT>, DeSerializersT>;
    customField<NullableT extends boolean = false>(fieldName: string, isNullable?: NullableT): CustomField<BpRelationship<DeSerializersT>, DeSerializersT, NullableT>;
    private _fieldBuilder?;
    get fieldBuilder(): FieldBuilder<typeof BpRelationship, DeSerializersT>;
    private _schema?;
    get schema(): {
        RELATIONSHIP_NUMBER: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BUSINESS_PARTNER_1: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        BUSINESS_PARTNER_2: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", false, true>;
        VALIDITY_END_DATE: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", false, true>;
        VALIDITY_START_DATE: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        IS_STANDARD_RELATIONSHIP: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Boolean", true, true>;
        RELATIONSHIP_CATEGORY: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        BP_RELATIONSHIP_TYPE: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATED_BY_USER: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        CREATION_DATE: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        CREATION_TIME: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        LAST_CHANGED_BY_USER: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.String", true, true>;
        LAST_CHANGE_DATE: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.DateTime", true, true>;
        LAST_CHANGE_TIME: OrderableEdmTypeField<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>, DeSerializersT, "Edm.Time", true, true>;
        ALL_FIELDS: AllFields<BpRelationship<DeSerializers<any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any, any>>>;
    };
}
