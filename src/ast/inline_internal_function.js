yate.AST.inline_internal_function = {};

yate.AST.inline_internal_function._init = function(name, type, argTypes) {
    this.Name = name;
    this._type = type;
    this._argTypes = argTypes || [];
    this.Type = yate.AST.function_type.INTERNAL;
};

// FIXME: Не место этому здесь.
yate.AST.internalFunctions = {
    'true': yate.AST.make('inline_internal_function', 'true', yate.types.BOOLEAN),
    'false': yate.AST.make('inline_internal_function', 'false', yate.types.BOOLEAN),
    'name': yate.AST.make('inline_internal_function', 'name', yate.types.SCALAR),
    'position': yate.AST.make('inline_internal_function', 'position', yate.types.SCALAR),
    'count': yate.AST.make('inline_internal_function', 'count', yate.types.SCALAR),
    'slice': yate.AST.make('inline_internal_function', 'slice', yate.types.SCALAR, [ yate.types.SCALAR, yate.types.SCALAR, yate.types.SCALAR ])
};

