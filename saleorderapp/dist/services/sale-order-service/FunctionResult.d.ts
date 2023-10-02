import { ComplexTypeField, ConstructorOrField, DeSerializers, DefaultDeSerializers, DeserializedType, Entity, FieldOptions, OrderableEdmTypeField, PropertyMetadata } from '@sap-cloud-sdk/odata-v2';
export interface FunctionResult<DeSerializersT extends DeSerializers = DefaultDeSerializers> {
    boolean: DeserializedType<DeSerializersT, 'Edm.Boolean'>;
}
export declare class FunctionResultField<EntityT extends Entity, DeSerializersT extends DeSerializers = DefaultDeSerializers, NullableT extends boolean = false, SelectableT extends boolean = false> extends ComplexTypeField<EntityT, DeSerializersT, FunctionResult, NullableT, SelectableT> {
    private _fieldBuilder;
    boolean: OrderableEdmTypeField<EntityT, DeSerializersT, 'Edm.Boolean', false, false>;
    constructor(fieldName: string, fieldOf: ConstructorOrField<EntityT>, deSerializers: DeSerializersT, fieldOptions?: FieldOptions<NullableT, SelectableT>);
}
export declare namespace FunctionResult {
    const _propertyMetadata: PropertyMetadata<FunctionResult>[];
}
