"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FunctionResult = exports.FunctionResultField = void 0;
const odata_v2_1 = require("@sap-cloud-sdk/odata-v2");
class FunctionResultField extends odata_v2_1.ComplexTypeField {
    constructor(fieldName, fieldOf, deSerializers, fieldOptions) {
        super(fieldName, fieldOf, deSerializers, FunctionResult, fieldOptions);
        this._fieldBuilder = new odata_v2_1.FieldBuilder(this, this.deSerializers);
        this.boolean = this._fieldBuilder.buildEdmTypeField('Boolean', 'Edm.Boolean', false);
    }
}
exports.FunctionResultField = FunctionResultField;
var FunctionResult;
(function (FunctionResult) {
    FunctionResult._propertyMetadata = [
        {
            originalName: 'Boolean',
            name: 'boolean',
            type: 'Edm.Boolean',
            isCollection: false
        }
    ];
})(FunctionResult || (exports.FunctionResult = FunctionResult = {}));
//# sourceMappingURL=FunctionResult.js.map