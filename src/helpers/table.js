/*eslint no-console: ["error", { allow: ["warn", "error", "log"] }] */
//var format = require('string-template');

export const CommonConfig = {
  isShowError: true, //true - Включено отображение ошибок. false - Выключено
  isShowLog: true //true - Включено отображение ошибок. false - Выключено
};

export const ShowError = function(prefix, msg, JSONdata) {
  if (!CommonConfig.isShowError) {
    return;
  }
  var errorMsg = `[${prefix}]: ${msg}`;
  errorMsg += ` ${JSON.stringify(JSONdata)}`;
  console.error(errorMsg);
};

export const ShowLog = function(prefix, msg, objectData) {
  if (!CommonConfig.isShowError) {
    return;
  }
  console.log(`[${prefix}]: ${msg}`);
  if (objectData) {
    console.log(objectData);
  }
};

class ColumnParameter {
  constructor(name, type, def, required, custom) {
    this.name = name;
    this.type = this.$setType(type);
    this.def = def;
    this.required = required;
    this.custom = custom;
    this.$errors = [];
  }

  set value(newValue) {
    if (this.$validate(newValue)) {
      if (this.name === 'Display') {
        newValue = this.$htmlEncode(newValue);
      }
      this.custom && this.custom[newValue]
        ? (this.$value = this.custom[newValue])
        : (this.$value = newValue);
    } else {
      this.$value = this.defaultValue;
    }
  }

  get value() {
    return this.$value;
  }

  get defaultValue() {
    if (this.custom) {
      return this.custom[this.def];
    }
    return this.def;
  }

  get errors() {
    return this.$errors.join('; ');
  }

  $validate(value) {
    this.$errors = [];
    if (this.required && !value) {
      this.$errors.push(`'${this.name}' is required`);
    }
    if (value) {
      if (this.type !== 'any' && this.$getType(value) !== this.type) {
        this.$errors.push(
          `'${this.name}' must be type of '${this.type}', '${this.$getType(
            value
          )}' given`
        );
      }
      if (
        this.custom &&
        !this.custom[value] && Object.values(this.custom).indexOf(value) === -1
      ) {
        this.$errors.push(
          `'${this.name}' must be only: ${Object.keys(this.custom)
            .map(el => `'${el}'`)
            .join(' or ')}! Given: ${value}.`
        );
      }
    }
    if (this.$errors.length || !value) {
      return false;
    }
    return true;
  }

  $getType(value) {
    var regex = /^\[object (\S+?)\]$/;
    var matches = Object.prototype.toString.call(value).match(regex) || [];
    return (matches[1] || 'undefined').toLowerCase();
  }

  $setType(type) {
    if (typeof type === 'function') {
      return type.name.toLowerCase();
    }
    return type.toLowerCase();
  }

  $htmlEncode(value) {
    if (!value) {
      return '';
    }

    return value
      .replace(/&/g, '&amp;')
      .replace(/'/g, '&#039;')
      .replace(/"/g, '&quot;')
      .replace(/>/g, '&gt;')
      .replace(/</g, '&lt;');
  }
}

const columnParameters = [
  new ColumnParameter('Name', 'any', 'n/a', true),
  new ColumnParameter('Display', String, 'n/a', true),
  new ColumnParameter('Type', String, 'value', false),
  new ColumnParameter('Index', Number, 0, false),
  new ColumnParameter('Width', Number, 100, false),
  new ColumnParameter('IconMap', Array, [], false),
  new ColumnParameter('Sort', String, 'none', false, {
    desc: 'desc',
    none: 'none',
    asc: 'asc'
  }),
  new ColumnParameter('ColAlign', String, 'Left', false, {
    Left: 'align-left',
    Right: 'align-right',
    Center: 'align-center'
  }),
  new ColumnParameter('DataAlign', String, false, false, {
    left: 'align-left',
    right: 'align-right',
    center: 'align-center'
  }),
  new ColumnParameter('Component', String, 'default', false, {
    default: 'v-def-cell',
    JText: 'v-def-cell',
    icon: 'v-icon-cell',
    URL: 'v-url-cell'
  })
];

export const ColumnData = function(column) {
  var errPrefix = 'ColumnData';
  //Custom parameter
  var columnParamNames = columnParameters.map(col => col.name);

  Object.keys(column).forEach(key => {
    if (column.hasOwnProperty(key) && columnParamNames.indexOf(key) === -1) {
      this[key] = column[key];
    }
  });

  this.__proto__.changeColumnParameter = function(colParName, colValue) {
    let parameter = columnParameters.find(parameter => {
      return parameter.name.toLowerCase() === colParName.toLowerCase();
    });
    if (parameter && parameter instanceof ColumnParameter) {
      parameter.value = colValue;
      this[parameter.name] = parameter.value;
      if (parameter.errors) {
        ShowError(errPrefix, parameter.errors, column[parameter.name]);
      }
    }
  };

  columnParameters.forEach(parameter => {
    parameter.value = column[parameter.name];
    this[parameter.name] = parameter.value;
    if (parameter.errors) {
      ShowError(errPrefix, parameter.errors, column[parameter.name]);
    }
  });
};

export const TableConfig = {
  GridPadding: 20,
  ColPadding: 5
};
