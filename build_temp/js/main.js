(function () {
'use strict';

var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var _global = createCommonjsModule(function (module) {
// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef
});



var _global$2 = Object.freeze({
	default: _global,
	__moduleExports: _global
});

var hasOwnProperty = {}.hasOwnProperty;
var _has = function(it, key){
  return hasOwnProperty.call(it, key);
};



var _has$2 = Object.freeze({
	default: _has,
	__moduleExports: _has
});

var _fails = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};



var _fails$2 = Object.freeze({
	default: _fails,
	__moduleExports: _fails
});

var require$$1 = ( _fails$2 && _fails ) || _fails$2;

var _descriptors = !require$$1(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});



var _descriptors$2 = Object.freeze({
	default: _descriptors,
	__moduleExports: _descriptors
});

var _core = createCommonjsModule(function (module) {
var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
});

var _core_1 = _core.version;


var _core$2 = Object.freeze({
	default: _core,
	__moduleExports: _core,
	version: _core_1
});

var _isObject = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};



var _isObject$2 = Object.freeze({
	default: _isObject,
	__moduleExports: _isObject
});

var isObject = ( _isObject$2 && _isObject ) || _isObject$2;

var _anObject = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};



var _anObject$2 = Object.freeze({
	default: _anObject,
	__moduleExports: _anObject
});

var global$1 = ( _global$2 && _global ) || _global$2;

var document$1 = global$1.document;
var is = isObject(document$1) && isObject(document$1.createElement);
var _domCreate = function(it){
  return is ? document$1.createElement(it) : {};
};



var _domCreate$2 = Object.freeze({
	default: _domCreate,
	__moduleExports: _domCreate
});

var require$$1$1 = ( _descriptors$2 && _descriptors ) || _descriptors$2;

var cel = ( _domCreate$2 && _domCreate ) || _domCreate$2;

var _ie8DomDefine = !require$$1$1 && !require$$1(function(){
  return Object.defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
});



var _ie8DomDefine$2 = Object.freeze({
	default: _ie8DomDefine,
	__moduleExports: _ie8DomDefine
});

var _toPrimitive = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};



var _toPrimitive$2 = Object.freeze({
	default: _toPrimitive,
	__moduleExports: _toPrimitive
});

var anObject = ( _anObject$2 && _anObject ) || _anObject$2;

var IE8_DOM_DEFINE = ( _ie8DomDefine$2 && _ie8DomDefine ) || _ie8DomDefine$2;

var toPrimitive = ( _toPrimitive$2 && _toPrimitive ) || _toPrimitive$2;

var dP$1             = Object.defineProperty;

var f$1 = require$$1$1 ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP$1(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

var _objectDp = {
	f: f$1
};



var _objectDp$2 = Object.freeze({
	default: _objectDp,
	__moduleExports: _objectDp,
	f: f$1
});

var _propertyDesc = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};



var _propertyDesc$2 = Object.freeze({
	default: _propertyDesc,
	__moduleExports: _propertyDesc
});

var $defineProperty$1 = ( _objectDp$2 && _objectDp ) || _objectDp$2;

var createDesc = ( _propertyDesc$2 && _propertyDesc ) || _propertyDesc$2;

var _hide = require$$1$1 ? function(object, key, value){
  return $defineProperty$1.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};



var _hide$2 = Object.freeze({
	default: _hide,
	__moduleExports: _hide
});

var id = 0;
var px = Math.random();
var _uid = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};



var _uid$2 = Object.freeze({
	default: _uid,
	__moduleExports: _uid
});

var hide = ( _hide$2 && _hide ) || _hide$2;

var has = ( _has$2 && _has ) || _has$2;

var require$$26 = ( _uid$2 && _uid ) || _uid$2;

var require$$1$2 = ( _core$2 && _core ) || _core$2;

var _redefine = createCommonjsModule(function (module) {
var SRC       = require$$26('src')
  , TO_STRING = 'toString'
  , $toString = Function[TO_STRING]
  , TPL       = ('' + $toString).split(TO_STRING);

require$$1$2.inspectSource = function(it){
  return $toString.call(it);
};

(module.exports = function(O, key, val, safe){
  var isFunction = typeof val == 'function';
  if(isFunction)has(val, 'name') || hide(val, 'name', key);
  if(O[key] === val)return;
  if(isFunction)has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if(O === global$1){
    O[key] = val;
  } else {
    if(!safe){
      delete O[key];
      hide(O, key, val);
    } else {
      if(O[key])O[key] = val;
      else hide(O, key, val);
    }
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString(){
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});
});



var _redefine$2 = Object.freeze({
	default: _redefine,
	__moduleExports: _redefine
});

var _aFunction = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};



var _aFunction$2 = Object.freeze({
	default: _aFunction,
	__moduleExports: _aFunction
});

var aFunction = ( _aFunction$2 && _aFunction ) || _aFunction$2;

var _ctx = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};



var _ctx$2 = Object.freeze({
	default: _ctx,
	__moduleExports: _ctx
});

var redefine = ( _redefine$2 && _redefine ) || _redefine$2;

var require$$7 = ( _ctx$2 && _ctx ) || _ctx$2;

var PROTOTYPE$1 = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , target    = IS_GLOBAL ? global$1 : IS_STATIC ? global$1[name] || (global$1[name] = {}) : (global$1[name] || {})[PROTOTYPE$1]
    , exports   = IS_GLOBAL ? require$$1$2 : require$$1$2[name] || (require$$1$2[name] = {})
    , expProto  = exports[PROTOTYPE$1] || (exports[PROTOTYPE$1] = {})
    , key, own, out, exp;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? require$$7(out, global$1) : IS_PROTO && typeof out == 'function' ? require$$7(Function.call, out) : out;
    // extend global
    if(target)redefine(target, key, out, type & $export.U);
    // export
    if(exports[key] != out)hide(exports, key, exp);
    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
  }
};
global$1.core = require$$1$2;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
var _export = $export;



var _export$2 = Object.freeze({
	default: _export,
	__moduleExports: _export
});

var _meta = createCommonjsModule(function (module) {
var META     = require$$26('meta')
  , setDesc  = $defineProperty$1.f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !require$$1(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};
});

var _meta_1 = _meta.KEY;
var _meta_2 = _meta.NEED;
var _meta_3 = _meta.fastKey;
var _meta_4 = _meta.getWeak;
var _meta_5 = _meta.onFreeze;


var _meta$2 = Object.freeze({
	default: _meta,
	__moduleExports: _meta,
	KEY: _meta_1,
	NEED: _meta_2,
	fastKey: _meta_3,
	getWeak: _meta_4,
	onFreeze: _meta_5
});

var SHARED = '__core-js_shared__';
var store  = global$1[SHARED] || (global$1[SHARED] = {});
var _shared = function(key){
  return store[key] || (store[key] = {});
};



var _shared$2 = Object.freeze({
	default: _shared,
	__moduleExports: _shared
});

var require$$0 = ( _shared$2 && _shared ) || _shared$2;

var _wks = createCommonjsModule(function (module) {
var store      = require$$0('wks')
  , Symbol     = global$1.Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : require$$26)('Symbol.' + name));
};

$exports.store = store;
});



var _wks$2 = Object.freeze({
	default: _wks,
	__moduleExports: _wks
});

var wks = ( _wks$2 && _wks ) || _wks$2;

var def = $defineProperty$1.f;
var TAG = wks('toStringTag');

var _setToStringTag = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};



var _setToStringTag$2 = Object.freeze({
	default: _setToStringTag,
	__moduleExports: _setToStringTag
});

var f$2 = wks;

var _wksExt = {
	f: f$2
};



var _wksExt$2 = Object.freeze({
	default: _wksExt,
	__moduleExports: _wksExt,
	f: f$2
});

var _library = false;



var _library$2 = Object.freeze({
	default: _library,
	__moduleExports: _library
});

var require$$0$1 = ( _library$2 && _library ) || _library$2;

var wksExt = ( _wksExt$2 && _wksExt ) || _wksExt$2;

var defineProperty = $defineProperty$1.f;
var _wksDefine = function(name){
  var $Symbol = require$$1$2.Symbol || (require$$1$2.Symbol = require$$0$1 ? {} : global$1.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};



var _wksDefine$2 = Object.freeze({
	default: _wksDefine,
	__moduleExports: _wksDefine
});

var toString = {}.toString;

var _cof = function(it){
  return toString.call(it).slice(8, -1);
};



var _cof$2 = Object.freeze({
	default: _cof,
	__moduleExports: _cof
});

var require$$2 = ( _cof$2 && _cof ) || _cof$2;

var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return require$$2(it) == 'String' ? it.split('') : Object(it);
};



var _iobject$2 = Object.freeze({
	default: _iobject,
	__moduleExports: _iobject
});

// 7.2.1 RequireObjectCoercible(argument)
var _defined = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};



var _defined$2 = Object.freeze({
	default: _defined,
	__moduleExports: _defined
});

var IObject = ( _iobject$2 && _iobject ) || _iobject$2;

var defined = ( _defined$2 && _defined ) || _defined$2;

var _toIobject = function(it){
  return IObject(defined(it));
};



var _toIobject$2 = Object.freeze({
	default: _toIobject,
	__moduleExports: _toIobject
});

// 7.1.4 ToInteger
var ceil  = Math.ceil;
var floor = Math.floor;
var _toInteger = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};



var _toInteger$2 = Object.freeze({
	default: _toInteger,
	__moduleExports: _toInteger
});

var require$$12 = ( _toInteger$2 && _toInteger ) || _toInteger$2;

var min       = Math.min;
var _toLength = function(it){
  return it > 0 ? min(require$$12(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};



var _toLength$2 = Object.freeze({
	default: _toLength,
	__moduleExports: _toLength
});

var max       = Math.max;
var min$1       = Math.min;
var _toIndex = function(index, length){
  index = require$$12(index);
  return index < 0 ? max(index + length, 0) : min$1(index, length);
};



var _toIndex$2 = Object.freeze({
	default: _toIndex,
	__moduleExports: _toIndex
});

var toIObject = ( _toIobject$2 && _toIobject ) || _toIobject$2;

var toLength = ( _toLength$2 && _toLength ) || _toLength$2;

var require$$14 = ( _toIndex$2 && _toIndex ) || _toIndex$2;

var _arrayIncludes = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = require$$14(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};



var _arrayIncludes$2 = Object.freeze({
	default: _arrayIncludes,
	__moduleExports: _arrayIncludes
});

var shared = require$$0('keys');
var _sharedKey = function(key){
  return shared[key] || (shared[key] = require$$26(key));
};



var _sharedKey$2 = Object.freeze({
	default: _sharedKey,
	__moduleExports: _sharedKey
});

var require$$0$2 = ( _arrayIncludes$2 && _arrayIncludes ) || _arrayIncludes$2;

var require$$0$3 = ( _sharedKey$2 && _sharedKey ) || _sharedKey$2;

var arrayIndexOf = require$$0$2(false);
var IE_PROTO     = require$$0$3('IE_PROTO');

var _objectKeysInternal = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};



var _objectKeysInternal$2 = Object.freeze({
	default: _objectKeysInternal,
	__moduleExports: _objectKeysInternal
});

// IE 8- don't enum bug keys
var _enumBugKeys = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');



var _enumBugKeys$2 = Object.freeze({
	default: _enumBugKeys,
	__moduleExports: _enumBugKeys
});

var $keys = ( _objectKeysInternal$2 && _objectKeysInternal ) || _objectKeysInternal$2;

var require$$0$4 = ( _enumBugKeys$2 && _enumBugKeys ) || _enumBugKeys$2;

var _objectKeys = Object.keys || function keys(O){
  return $keys(O, require$$0$4);
};



var _objectKeys$2 = Object.freeze({
	default: _objectKeys,
	__moduleExports: _objectKeys
});

var getKeys = ( _objectKeys$2 && _objectKeys ) || _objectKeys$2;

var _keyof = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};



var _keyof$2 = Object.freeze({
	default: _keyof,
	__moduleExports: _keyof
});

var f$3 = Object.getOwnPropertySymbols;

var _objectGops = {
	f: f$3
};



var _objectGops$2 = Object.freeze({
	default: _objectGops,
	__moduleExports: _objectGops,
	f: f$3
});

var f$4 = {}.propertyIsEnumerable;

var _objectPie = {
	f: f$4
};



var _objectPie$2 = Object.freeze({
	default: _objectPie,
	__moduleExports: _objectPie,
	f: f$4
});

var gOPS = ( _objectGops$2 && _objectGops ) || _objectGops$2;

var require$$0$5 = ( _objectPie$2 && _objectPie ) || _objectPie$2;

var _enumKeys = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = require$$0$5.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};



var _enumKeys$2 = Object.freeze({
	default: _enumKeys,
	__moduleExports: _enumKeys
});

var _isArray = Array.isArray || function isArray(arg){
  return require$$2(arg) == 'Array';
};



var _isArray$2 = Object.freeze({
	default: _isArray,
	__moduleExports: _isArray
});

var _objectDps = require$$1$1 ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)$defineProperty$1.f(O, P = keys[i++], Properties[P]);
  return O;
};



var _objectDps$2 = Object.freeze({
	default: _objectDps,
	__moduleExports: _objectDps
});

var _html = global$1.document && document.documentElement;



var _html$2 = Object.freeze({
	default: _html,
	__moduleExports: _html
});

var require$$1$3 = ( _objectDps$2 && _objectDps ) || _objectDps$2;

var html = ( _html$2 && _html ) || _html$2;

var IE_PROTO$1    = require$$0$3('IE_PROTO');
var Empty       = function(){ /* empty */ };
var PROTOTYPE$2   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = cel('iframe')
    , i      = require$$0$4.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  html.appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE$2][require$$0$4[i]];
  return createDict();
};

var _objectCreate = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE$2] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE$2] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO$1] = O;
  } else result = createDict();
  return Properties === undefined ? result : require$$1$3(result, Properties);
};



var _objectCreate$2 = Object.freeze({
	default: _objectCreate,
	__moduleExports: _objectCreate
});

var hiddenKeys = require$$0$4.concat('length', 'prototype');

var f$6 = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

var _objectGopn = {
	f: f$6
};



var _objectGopn$2 = Object.freeze({
	default: _objectGopn,
	__moduleExports: _objectGopn,
	f: f$6
});

var gOPN$2 = ( _objectGopn$2 && _objectGopn ) || _objectGopn$2;

var gOPN$1      = gOPN$2.f;
var toString$1  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN$1(it);
  } catch(e){
    return windowNames.slice();
  }
};

var f$5 = function getOwnPropertyNames(it){
  return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(toIObject(it));
};

var _objectGopnExt = {
	f: f$5
};



var _objectGopnExt$2 = Object.freeze({
	default: _objectGopnExt,
	__moduleExports: _objectGopnExt,
	f: f$5
});

var gOPD$1           = Object.getOwnPropertyDescriptor;

var f$7 = require$$1$1 ? gOPD$1 : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD$1(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!require$$0$5.f.call(O, P), O[P]);
};

var _objectGopd = {
	f: f$7
};



var _objectGopd$2 = Object.freeze({
	default: _objectGopd,
	__moduleExports: _objectGopd,
	f: f$7
});

var $export$1 = ( _export$2 && _export ) || _export$2;

var require$$0$6 = ( _meta$2 && _meta ) || _meta$2;

var setToStringTag = ( _setToStringTag$2 && _setToStringTag ) || _setToStringTag$2;

var require$$0$7 = ( _wksDefine$2 && _wksDefine ) || _wksDefine$2;

var keyOf = ( _keyof$2 && _keyof ) || _keyof$2;

var enumKeys = ( _enumKeys$2 && _enumKeys ) || _enumKeys$2;

var isArray = ( _isArray$2 && _isArray ) || _isArray$2;

var create = ( _objectCreate$2 && _objectCreate ) || _objectCreate$2;

var require$$1$4 = ( _objectGopnExt$2 && _objectGopnExt ) || _objectGopnExt$2;

var require$$0$8 = ( _objectGopd$2 && _objectGopd ) || _objectGopd$2;

var META           = require$$0$6.KEY;
var gOPD           = require$$0$8.f;
var dP             = $defineProperty$1.f;
var gOPN           = require$$1$4.f;
var $Symbol        = global$1.Symbol;
var $JSON          = global$1.JSON;
var _stringify     = $JSON && $JSON.stringify;
var PROTOTYPE      = 'prototype';
var HIDDEN         = wks('_hidden');
var TO_PRIMITIVE   = wks('toPrimitive');
var isEnum         = {}.propertyIsEnumerable;
var SymbolRegistry = require$$0('symbol-registry');
var AllSymbols     = require$$0('symbols');
var OPSymbols      = require$$0('op-symbols');
var ObjectProto    = Object[PROTOTYPE];
var USE_NATIVE     = typeof $Symbol == 'function';
var QObject        = global$1.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = require$$1$1 && require$$1(function(){
  return create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create$$1(it, P){
  return P === undefined ? create(it) : $defineProperties(create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = require$$26(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(require$$1$1 && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  require$$0$8.f = $getOwnPropertyDescriptor;
  $defineProperty$1.f   = $defineProperty;
  gOPN$2.f = require$$1$4.f = $getOwnPropertyNames;
  require$$0$5.f  = $propertyIsEnumerable;
  gOPS.f = $getOwnPropertySymbols;

  if(require$$1$1 && !require$$0$1){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  };
}

$export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = getKeys(wks.store), i = 0; symbols.length > i; )require$$0$7(symbols[i++]);

$export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export$1($export$1.S + $export$1.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export$1($export$1.S + $export$1.F * (!USE_NATIVE || require$$1(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || hide($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global$1.JSON, 'JSON', true);

$export$1($export$1.S, 'Object', {create: create});

$export$1($export$1.S + $export$1.F * !require$$1$1, 'Object', {defineProperty: $defineProperty$1.f});

$export$1($export$1.S + $export$1.F * !require$$1$1, 'Object', {defineProperties: require$$1$3});

var _objectSap = function(KEY, exec){
  var fn  = (require$$1$2.Object || {})[KEY] || Object[KEY]
    , exp = {};
  exp[KEY] = exec(fn);
  $export$1($export$1.S + $export$1.F * require$$1(function(){ fn(1); }), 'Object', exp);
};



var _objectSap$2 = Object.freeze({
	default: _objectSap,
	__moduleExports: _objectSap
});

var require$$0$9 = ( _objectSap$2 && _objectSap ) || _objectSap$2;

var $getOwnPropertyDescriptor$1 = require$$0$8.f;

require$$0$9('getOwnPropertyDescriptor', function(){
  return function getOwnPropertyDescriptor(it, key){
    return $getOwnPropertyDescriptor$1(toIObject(it), key);
  };
});

var _toObject = function(it){
  return Object(defined(it));
};



var _toObject$2 = Object.freeze({
	default: _toObject,
	__moduleExports: _toObject
});

var toObject = ( _toObject$2 && _toObject ) || _toObject$2;

var IE_PROTO$2    = require$$0$3('IE_PROTO');
var ObjectProto$1 = Object.prototype;

var _objectGpo = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO$2))return O[IE_PROTO$2];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto$1 : null;
};



var _objectGpo$2 = Object.freeze({
	default: _objectGpo,
	__moduleExports: _objectGpo
});

var getPrototypeOf = ( _objectGpo$2 && _objectGpo ) || _objectGpo$2;

require$$0$9('getPrototypeOf', function(){
  return function getPrototypeOf$$1(it){
    return getPrototypeOf(toObject(it));
  };
});

require$$0$9('keys', function(){
  return function keys(it){
    return getKeys(toObject(it));
  };
});

require$$0$9('getOwnPropertyNames', function(){
  return require$$1$4.f;
});

var meta     = require$$0$6.onFreeze;

require$$0$9('freeze', function($freeze){
  return function freeze(it){
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});

var meta$1     = require$$0$6.onFreeze;

require$$0$9('seal', function($seal){
  return function seal(it){
    return $seal && isObject(it) ? $seal(meta$1(it)) : it;
  };
});

var meta$2     = require$$0$6.onFreeze;

require$$0$9('preventExtensions', function($preventExtensions){
  return function preventExtensions(it){
    return $preventExtensions && isObject(it) ? $preventExtensions(meta$2(it)) : it;
  };
});

require$$0$9('isFrozen', function($isFrozen){
  return function isFrozen(it){
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});

require$$0$9('isSealed', function($isSealed){
  return function isSealed(it){
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});

require$$0$9('isExtensible', function($isExtensible){
  return function isExtensible(it){
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});

var $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
var _objectAssign = !$assign || require$$1(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = require$$0$5.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;



var _objectAssign$2 = Object.freeze({
	default: _objectAssign,
	__moduleExports: _objectAssign
});

var assign = ( _objectAssign$2 && _objectAssign ) || _objectAssign$2;

$export$1($export$1.S + $export$1.F, 'Object', {assign: assign});

// 7.2.9 SameValue(x, y)
var _sameValue = Object.is || function is(x, y){
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};



var _sameValue$2 = Object.freeze({
	default: _sameValue,
	__moduleExports: _sameValue
});

var require$$17 = ( _sameValue$2 && _sameValue ) || _sameValue$2;

$export$1($export$1.S, 'Object', {is: require$$17});

var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
var _setProto = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = require$$7(Function.call, require$$0$8.f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};



var _setProto$2 = Object.freeze({
	default: _setProto,
	__moduleExports: _setProto
});

var setProto = ( _setProto$2 && _setProto ) || _setProto$2;

$export$1($export$1.S, 'Object', {setPrototypeOf: setProto.set});

var TAG$1 = wks('toStringTag');
var ARG = require$$2(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

var _classof = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG$1)) == 'string' ? T
    // builtinTag case
    : ARG ? require$$2(O)
    // ES3 arguments fallback
    : (B = require$$2(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};



var _classof$2 = Object.freeze({
	default: _classof,
	__moduleExports: _classof
});

var classof = ( _classof$2 && _classof ) || _classof$2;

var test    = {};
test[wks('toStringTag')] = 'z';
if(test + '' != '[object z]'){
  redefine(Object.prototype, 'toString', function toString(){
    return '[object ' + classof(this) + ']';
  }, true);
}

// fast apply, http://jsperf.lnkit.com/fast-apply/5
var _invoke = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};



var _invoke$2 = Object.freeze({
	default: _invoke,
	__moduleExports: _invoke
});

var invoke = ( _invoke$2 && _invoke ) || _invoke$2;

var arraySlice = [].slice;
var factories  = {};

var construct = function(F, len, args){
  if(!(len in factories)){
    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

var _bind = Function.bind || function bind(that /*, args... */){
  var fn       = aFunction(this)
    , partArgs = arraySlice.call(arguments, 1);
  var bound = function(/* args... */){
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if(isObject(fn.prototype))bound.prototype = fn.prototype;
  return bound;
};



var _bind$2 = Object.freeze({
	default: _bind,
	__moduleExports: _bind
});

var bind = ( _bind$2 && _bind ) || _bind$2;

$export$1($export$1.P, 'Function', {bind: bind});

var dP$2         = $defineProperty$1.f;
var FProto     = Function.prototype;
var nameRE     = /^\s*function ([^ (]*)/;
var NAME       = 'name';

var isExtensible = Object.isExtensible || function(){
  return true;
};

// 19.2.4.2 name
NAME in FProto || require$$1$1 && dP$2(FProto, NAME, {
  configurable: true,
  get: function(){
    try {
      var that = this
        , name = ('' + that).match(nameRE)[1];
      has(that, NAME) || !isExtensible(that) || dP$2(that, NAME, createDesc(5, name));
      return name;
    } catch(e){
      return '';
    }
  }
});

var HAS_INSTANCE   = wks('hasInstance');
var FunctionProto  = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if(!(HAS_INSTANCE in FunctionProto))$defineProperty$1.f(FunctionProto, HAS_INSTANCE, {value: function(O){
  if(typeof this != 'function' || !isObject(O))return false;
  if(!isObject(this.prototype))return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while(O = getPrototypeOf(O))if(this.prototype === O)return true;
  return false;
}});

var _stringWs = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';



var _stringWs$2 = Object.freeze({
	default: _stringWs,
	__moduleExports: _stringWs
});

var require$$2$1 = ( _stringWs$2 && _stringWs ) || _stringWs$2;

var space   = '[' + require$$2$1 + ']';
var non     = '\u200b\u0085';
var ltrim   = RegExp('^' + space + space + '*');
var rtrim   = RegExp(space + space + '*$');

var exporter = function(KEY, exec, ALIAS){
  var exp   = {};
  var FORCE = require$$1(function(){
    return !!require$$2$1[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : require$$2$1[KEY];
  if(ALIAS)exp[ALIAS] = fn;
  $export$1($export$1.P + $export$1.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function(string, TYPE){
  string = String(defined(string));
  if(TYPE & 1)string = string.replace(ltrim, '');
  if(TYPE & 2)string = string.replace(rtrim, '');
  return string;
};

var _stringTrim = exporter;



var _stringTrim$2 = Object.freeze({
	default: _stringTrim,
	__moduleExports: _stringTrim
});

var require$$0$10 = ( _stringTrim$2 && _stringTrim ) || _stringTrim$2;

var $parseInt = global$1.parseInt;
var $trim     = require$$0$10.trim;
var hex       = /^[\-+]?0[xX]/;

var _parseInt = $parseInt(require$$2$1 + '08') !== 8 || $parseInt(require$$2$1 + '0x16') !== 22 ? function parseInt(str, radix){
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;



var _parseInt$2 = Object.freeze({
	default: _parseInt,
	__moduleExports: _parseInt
});

var $parseInt$1 = ( _parseInt$2 && _parseInt ) || _parseInt$2;

$export$1($export$1.G + $export$1.F * (parseInt != $parseInt$1), {parseInt: $parseInt$1});

var $parseFloat = global$1.parseFloat;
var $trim$1       = require$$0$10.trim;

var _parseFloat = 1 / $parseFloat(require$$2$1 + '-0') !== -Infinity ? function parseFloat(str){
  var string = $trim$1(String(str), 3)
    , result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;



var _parseFloat$2 = Object.freeze({
	default: _parseFloat,
	__moduleExports: _parseFloat
});

var $parseFloat$1 = ( _parseFloat$2 && _parseFloat ) || _parseFloat$2;

$export$1($export$1.G + $export$1.F * (parseFloat != $parseFloat$1), {parseFloat: $parseFloat$1});

var setPrototypeOf = setProto.set;
var _inheritIfRequired = function(that, target, C){
  var P, S = target.constructor;
  if(S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf){
    setPrototypeOf(that, P);
  } return that;
};



var _inheritIfRequired$2 = Object.freeze({
	default: _inheritIfRequired,
	__moduleExports: _inheritIfRequired
});

var inheritIfRequired = ( _inheritIfRequired$2 && _inheritIfRequired ) || _inheritIfRequired$2;

var gOPN$3              = gOPN$2.f;
var gOPD$2              = require$$0$8.f;
var dP$3                = $defineProperty$1.f;
var $trim$2             = require$$0$10.trim;
var NUMBER            = 'Number';
var $Number           = global$1[NUMBER];
var Base              = $Number;
var proto             = $Number.prototype;
var BROKEN_COF        = require$$2(create(proto)) == NUMBER;
var TRIM              = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function(argument){
  var it = toPrimitive(argument, false);
  if(typeof it == 'string' && it.length > 2){
    it = TRIM ? it.trim() : $trim$2(it, 3);
    var first = it.charCodeAt(0)
      , third, radix, maxCode;
    if(first === 43 || first === 45){
      third = it.charCodeAt(2);
      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if(first === 48){
      switch(it.charCodeAt(1)){
        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default : return +it;
      }
      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if(code < 48 || code > maxCode)return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
  $Number = function Number(value){
    var it = arguments.length < 1 ? 0 : value
      , that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? require$$1(function(){ proto.valueOf.call(that); }) : require$$2(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for(var keys = require$$1$1 ? gOPN$3(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++){
    if(has(Base, key = keys[j]) && !has($Number, key)){
      dP$3($Number, key, gOPD$2(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  redefine(global$1, NUMBER, $Number);
}

var _aNumberValue = function(it, msg){
  if(typeof it != 'number' && require$$2(it) != 'Number')throw TypeError(msg);
  return +it;
};



var _aNumberValue$2 = Object.freeze({
	default: _aNumberValue,
	__moduleExports: _aNumberValue
});

var _stringRepeat = function repeat(count){
  var str = String(defined(this))
    , res = ''
    , n   = require$$12(count);
  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
  return res;
};



var _stringRepeat$2 = Object.freeze({
	default: _stringRepeat,
	__moduleExports: _stringRepeat
});

var aNumberValue = ( _aNumberValue$2 && _aNumberValue ) || _aNumberValue$2;

var repeat = ( _stringRepeat$2 && _stringRepeat ) || _stringRepeat$2;

var $toFixed     = 1..toFixed;
var floor$1        = Math.floor;
var data         = [0, 0, 0, 0, 0, 0];
var ERROR        = 'Number.toFixed: incorrect invocation!';
var ZERO         = '0';

var multiply = function(n, c){
  var i  = -1
    , c2 = c;
  while(++i < 6){
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor$1(c2 / 1e7);
  }
};
var divide = function(n){
  var i = 6
    , c = 0;
  while(--i >= 0){
    c += data[i];
    data[i] = floor$1(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function(){
  var i = 6
    , s = '';
  while(--i >= 0){
    if(s !== '' || i === 0 || data[i] !== 0){
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function(x, n, acc){
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function(x){
  var n  = 0
    , x2 = x;
  while(x2 >= 4096){
    n += 12;
    x2 /= 4096;
  }
  while(x2 >= 2){
    n  += 1;
    x2 /= 2;
  } return n;
};

$export$1($export$1.P + $export$1.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128..toFixed(0) !== '1000000000000000128'
) || !require$$1(function(){
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits){
    var x = aNumberValue(this, ERROR)
      , f = require$$12(fractionDigits)
      , s = ''
      , m = ZERO
      , e, z, j, k;
    if(f < 0 || f > 20)throw RangeError(ERROR);
    if(x != x)return 'NaN';
    if(x <= -1e21 || x >= 1e21)return String(x);
    if(x < 0){
      s = '-';
      x = -x;
    }
    if(x > 1e-21){
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if(e > 0){
        multiply(0, z);
        j = f;
        while(j >= 7){
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while(j >= 23){
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if(f > 0){
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});

var $toPrecision = 1..toPrecision;

$export$1($export$1.P + $export$1.F * (require$$1(function(){
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !require$$1(function(){
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision){
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision); 
  }
});

$export$1($export$1.S, 'Number', {EPSILON: Math.pow(2, -52)});

var _isFinite = global$1.isFinite;

$export$1($export$1.S, 'Number', {
  isFinite: function isFinite(it){
    return typeof it == 'number' && _isFinite(it);
  }
});

var floor$2    = Math.floor;
var _isInteger = function isInteger(it){
  return !isObject(it) && isFinite(it) && floor$2(it) === it;
};



var _isInteger$2 = Object.freeze({
	default: _isInteger,
	__moduleExports: _isInteger
});

var isInteger = ( _isInteger$2 && _isInteger ) || _isInteger$2;

$export$1($export$1.S, 'Number', {isInteger: isInteger});

$export$1($export$1.S, 'Number', {
  isNaN: function isNaN(number){
    return number != number;
  }
});

var abs       = Math.abs;

$export$1($export$1.S, 'Number', {
  isSafeInteger: function isSafeInteger(number){
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});

$export$1($export$1.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

$export$1($export$1.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

$export$1($export$1.S + $export$1.F * (Number.parseFloat != $parseFloat$1), 'Number', {parseFloat: $parseFloat$1});

$export$1($export$1.S + $export$1.F * (Number.parseInt != $parseInt$1), 'Number', {parseInt: $parseInt$1});

// 20.2.2.20 Math.log1p(x)
var _mathLog1p = Math.log1p || function log1p(x){
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};



var _mathLog1p$2 = Object.freeze({
	default: _mathLog1p,
	__moduleExports: _mathLog1p
});

var require$$0$11 = ( _mathLog1p$2 && _mathLog1p ) || _mathLog1p$2;

var sqrt    = Math.sqrt;
var $acosh  = Math.acosh;

$export$1($export$1.S + $export$1.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN 
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x){
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : require$$0$11(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});

var $asinh  = Math.asinh;

function asinh(x){
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0 
$export$1($export$1.S + $export$1.F * !($asinh && 1 / $asinh(0) > 0), 'Math', {asinh: asinh});

var $atanh  = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0 
$export$1($export$1.S + $export$1.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x){
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});

// 20.2.2.28 Math.sign(x)
var _mathSign = Math.sign || function sign(x){
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};



var _mathSign$2 = Object.freeze({
	default: _mathSign,
	__moduleExports: _mathSign
});

var require$$0$12 = ( _mathSign$2 && _mathSign ) || _mathSign$2;

$export$1($export$1.S, 'Math', {
  cbrt: function cbrt(x){
    return require$$0$12(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});

$export$1($export$1.S, 'Math', {
  clz32: function clz32(x){
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});

var exp     = Math.exp;

$export$1($export$1.S, 'Math', {
  cosh: function cosh(x){
    return (exp(x = +x) + exp(-x)) / 2;
  }
});

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
var _mathExpm1 = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x){
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;



var _mathExpm1$2 = Object.freeze({
	default: _mathExpm1,
	__moduleExports: _mathExpm1
});

var expm1 = ( _mathExpm1$2 && _mathExpm1 ) || _mathExpm1$2;

$export$1($export$1.S + $export$1.F * (expm1 != Math.expm1), 'Math', {expm1: expm1});

var pow$1       = Math.pow;
var EPSILON   = pow$1(2, -52);
var EPSILON32 = pow$1(2, -23);
var MAX32     = pow$1(2, 127) * (2 - EPSILON32);
var MIN32     = pow$1(2, -126);

var roundTiesToEven = function(n){
  return n + 1 / EPSILON - 1 / EPSILON;
};


$export$1($export$1.S, 'Math', {
  fround: function fround(x){
    var $abs  = Math.abs(x)
      , $sign = require$$0$12(x)
      , a, result;
    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
    a = (1 + EPSILON32 / EPSILON) * $abs;
    result = a - (a - $abs);
    if(result > MAX32 || result != result)return $sign * Infinity;
    return $sign * result;
  }
});

var abs$1     = Math.abs;

$export$1($export$1.S, 'Math', {
  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
    var sum  = 0
      , i    = 0
      , aLen = arguments.length
      , larg = 0
      , arg, div;
    while(i < aLen){
      arg = abs$1(arguments[i++]);
      if(larg < arg){
        div  = larg / arg;
        sum  = sum * div * div + 1;
        larg = arg;
      } else if(arg > 0){
        div  = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});

var $imul   = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export$1($export$1.S + $export$1.F * require$$1(function(){
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y){
    var UINT16 = 0xffff
      , xn = +x
      , yn = +y
      , xl = UINT16 & xn
      , yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});

$export$1($export$1.S, 'Math', {
  log10: function log10(x){
    return Math.log(x) / Math.LN10;
  }
});

$export$1($export$1.S, 'Math', {log1p: require$$0$11});

$export$1($export$1.S, 'Math', {
  log2: function log2(x){
    return Math.log(x) / Math.LN2;
  }
});

$export$1($export$1.S, 'Math', {sign: require$$0$12});

var exp$1     = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export$1($export$1.S + $export$1.F * require$$1(function(){
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x){
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp$1(x - 1) - exp$1(-x - 1)) * (Math.E / 2);
  }
});

var exp$2     = Math.exp;

$export$1($export$1.S, 'Math', {
  tanh: function tanh(x){
    var a = expm1(x = +x)
      , b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp$2(x) + exp$2(-x));
  }
});

$export$1($export$1.S, 'Math', {
  trunc: function trunc(it){
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});

var fromCharCode   = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export$1($export$1.S + $export$1.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
    var res  = []
      , aLen = arguments.length
      , i    = 0
      , code;
    while(aLen > i){
      code = +arguments[i++];
      if(require$$14(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});

$export$1($export$1.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite){
    var tpl  = toIObject(callSite.raw)
      , len  = toLength(tpl.length)
      , aLen = arguments.length
      , res  = []
      , i    = 0;
    while(len > i){
      res.push(String(tpl[i++]));
      if(i < aLen)res.push(String(arguments[i]));
    } return res.join('');
  }
});

require$$0$10('trim', function($trim){
  return function trim(){
    return $trim(this, 3);
  };
});

var _stringAt = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = require$$12(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};



var _stringAt$2 = Object.freeze({
	default: _stringAt,
	__moduleExports: _stringAt
});

var _iterators = {};



var _iterators$2 = Object.freeze({
	default: _iterators,
	__moduleExports: _iterators
});

var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
hide(IteratorPrototype, wks('iterator'), function(){ return this; });

var _iterCreate = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: createDesc(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};



var _iterCreate$2 = Object.freeze({
	default: _iterCreate,
	__moduleExports: _iterCreate
});

var Iterators = ( _iterators$2 && _iterators ) || _iterators$2;

var require$$0$13 = ( _iterCreate$2 && _iterCreate ) || _iterCreate$2;

var ITERATOR       = wks('iterator');
var BUGGY          = !([].keys && 'next' in [].keys());
var FF_ITERATOR    = '@@iterator';
var KEYS           = 'keys';
var VALUES         = 'values';

var returnThis = function(){ return this; };

var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  require$$0$13(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!require$$0$1 && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!require$$0$1 || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export$1($export$1.P + $export$1.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};



var _iterDefine$2 = Object.freeze({
	default: _iterDefine,
	__moduleExports: _iterDefine
});

var require$$0$14 = ( _stringAt$2 && _stringAt ) || _stringAt$2;

var $iterDefine = ( _iterDefine$2 && _iterDefine ) || _iterDefine$2;

var $at  = require$$0$14(true);

// 21.1.3.27 String.prototype[@@iterator]()
$iterDefine(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

var $at$1     = require$$0$14(false);
$export$1($export$1.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos){
    return $at$1(this, pos);
  }
});

var MATCH    = wks('match');
var _isRegexp = function(it){
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : require$$2(it) == 'RegExp');
};



var _isRegexp$2 = Object.freeze({
	default: _isRegexp,
	__moduleExports: _isRegexp
});

var isRegExp = ( _isRegexp$2 && _isRegexp ) || _isRegexp$2;

var _stringContext = function(that, searchString, NAME){
  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};



var _stringContext$2 = Object.freeze({
	default: _stringContext,
	__moduleExports: _stringContext
});

var MATCH$1 = wks('match');
var _failsIsRegexp = function(KEY){
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch(e){
    try {
      re[MATCH$1] = false;
      return !'/./'[KEY](re);
    } catch(f){ /* empty */ }
  } return true;
};



var _failsIsRegexp$2 = Object.freeze({
	default: _failsIsRegexp,
	__moduleExports: _failsIsRegexp
});

var context = ( _stringContext$2 && _stringContext ) || _stringContext$2;

var require$$0$15 = ( _failsIsRegexp$2 && _failsIsRegexp ) || _failsIsRegexp$2;

var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export$1($export$1.P + $export$1.F * require$$0$15(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /*, endPosition = @length */){
    var that = context(this, searchString, ENDS_WITH)
      , endPosition = arguments.length > 1 ? arguments[1] : undefined
      , len    = toLength(that.length)
      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
      , search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});

var INCLUDES = 'includes';

$export$1($export$1.P + $export$1.F * require$$0$15(INCLUDES), 'String', {
  includes: function includes(searchString /*, position = 0 */){
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});

$export$1($export$1.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: repeat
});

var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export$1($export$1.P + $export$1.F * require$$0$15(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /*, position = 0 */){
    var that   = context(this, searchString, STARTS_WITH)
      , index  = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length))
      , search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});

var quot    = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function(string, tag, attribute, value) {
  var S  = String(defined(string))
    , p1 = '<' + tag;
  if(attribute !== '')p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
var _stringHtml = function(NAME, exec){
  var O = {};
  O[NAME] = exec(createHTML);
  $export$1($export$1.P + $export$1.F * require$$1(function(){
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};



var _stringHtml$2 = Object.freeze({
	default: _stringHtml,
	__moduleExports: _stringHtml
});

var require$$0$16 = ( _stringHtml$2 && _stringHtml ) || _stringHtml$2;

require$$0$16('anchor', function(createHTML){
  return function anchor(name){
    return createHTML(this, 'a', 'name', name);
  }
});

require$$0$16('big', function(createHTML){
  return function big(){
    return createHTML(this, 'big', '', '');
  }
});

require$$0$16('blink', function(createHTML){
  return function blink(){
    return createHTML(this, 'blink', '', '');
  }
});

require$$0$16('bold', function(createHTML){
  return function bold(){
    return createHTML(this, 'b', '', '');
  }
});

require$$0$16('fixed', function(createHTML){
  return function fixed(){
    return createHTML(this, 'tt', '', '');
  }
});

require$$0$16('fontcolor', function(createHTML){
  return function fontcolor(color){
    return createHTML(this, 'font', 'color', color);
  }
});

require$$0$16('fontsize', function(createHTML){
  return function fontsize(size){
    return createHTML(this, 'font', 'size', size);
  }
});

require$$0$16('italics', function(createHTML){
  return function italics(){
    return createHTML(this, 'i', '', '');
  }
});

require$$0$16('link', function(createHTML){
  return function link(url){
    return createHTML(this, 'a', 'href', url);
  }
});

require$$0$16('small', function(createHTML){
  return function small(){
    return createHTML(this, 'small', '', '');
  }
});

require$$0$16('strike', function(createHTML){
  return function strike(){
    return createHTML(this, 'strike', '', '');
  }
});

require$$0$16('sub', function(createHTML){
  return function sub(){
    return createHTML(this, 'sub', '', '');
  }
});

require$$0$16('sup', function(createHTML){
  return function sup(){
    return createHTML(this, 'sup', '', '');
  }
});

$export$1($export$1.S, 'Date', {now: function(){ return new Date().getTime(); }});

$export$1($export$1.P + $export$1.F * require$$1(function(){
  return new Date(NaN).toJSON() !== null || Date.prototype.toJSON.call({toISOString: function(){ return 1; }}) !== 1;
}), 'Date', {
  toJSON: function toJSON(key){
    var O  = toObject(this)
      , pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});

var getTime = Date.prototype.getTime;

var lz = function(num){
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
$export$1($export$1.P + $export$1.F * (require$$1(function(){
  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
}) || !require$$1(function(){
  new Date(NaN).toISOString();
})), 'Date', {
  toISOString: function toISOString(){
    if(!isFinite(getTime.call(this)))throw RangeError('Invalid time value');
    var d = this
      , y = d.getUTCFullYear()
      , m = d.getUTCMilliseconds()
      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
  }
});

var DateProto    = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING    = 'toString';
var $toString    = DateProto[TO_STRING];
var getTime$1      = DateProto.getTime;
if(new Date(NaN) + '' != INVALID_DATE){
  redefine(DateProto, TO_STRING, function toString(){
    var value = getTime$1.call(this);
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

var NUMBER$1      = 'number';

var _dateToPrimitive = function(hint){
  if(hint !== 'string' && hint !== NUMBER$1 && hint !== 'default')throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER$1);
};



var _dateToPrimitive$2 = Object.freeze({
	default: _dateToPrimitive,
	__moduleExports: _dateToPrimitive
});

var require$$2$2 = ( _dateToPrimitive$2 && _dateToPrimitive ) || _dateToPrimitive$2;

var TO_PRIMITIVE$1 = wks('toPrimitive');
var proto$1        = Date.prototype;

if(!(TO_PRIMITIVE$1 in proto$1))hide(proto$1, TO_PRIMITIVE$1, require$$2$2);

$export$1($export$1.S, 'Array', {isArray: isArray});

var _iterCall = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};



var _iterCall$2 = Object.freeze({
	default: _iterCall,
	__moduleExports: _iterCall
});

var ITERATOR$1   = wks('iterator');
var ArrayProto = Array.prototype;

var _isArrayIter = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR$1] === it);
};



var _isArrayIter$2 = Object.freeze({
	default: _isArrayIter,
	__moduleExports: _isArrayIter
});

var _createProperty = function(object, index, value){
  if(index in object)$defineProperty$1.f(object, index, createDesc(0, value));
  else object[index] = value;
};



var _createProperty$2 = Object.freeze({
	default: _createProperty,
	__moduleExports: _createProperty
});

var ITERATOR$2  = wks('iterator');
var core_getIteratorMethod = require$$1$2.getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR$2]
    || it['@@iterator']
    || Iterators[classof(it)];
};



var core_getIteratorMethod$2 = Object.freeze({
	default: core_getIteratorMethod,
	__moduleExports: core_getIteratorMethod
});

var ITERATOR$3     = wks('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR$3]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

var _iterDetect = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR$3]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR$3] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};



var _iterDetect$2 = Object.freeze({
	default: _iterDetect,
	__moduleExports: _iterDetect
});

var call = ( _iterCall$2 && _iterCall ) || _iterCall$2;

var require$$21 = ( _isArrayIter$2 && _isArrayIter ) || _isArrayIter$2;

var createProperty = ( _createProperty$2 && _createProperty ) || _createProperty$2;

var require$$25 = ( core_getIteratorMethod$2 && core_getIteratorMethod ) || core_getIteratorMethod$2;

var require$$33 = ( _iterDetect$2 && _iterDetect ) || _iterDetect$2;

$export$1($export$1.S + $export$1.F * !require$$33(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = require$$25(O)
      , length, result, step, iterator;
    if(mapping)mapfn = require$$7(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && require$$21(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});

$export$1($export$1.S + $export$1.F * require$$1(function(){
  function F(){}
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */){
    var index  = 0
      , aLen   = arguments.length
      , result = new (typeof this == 'function' ? this : Array)(aLen);
    while(aLen > index)createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});

var _strictMethod = function(method, arg){
  return !!method && require$$1(function(){
    arg ? method.call(null, function(){}, 1) : method.call(null);
  });
};



var _strictMethod$2 = Object.freeze({
	default: _strictMethod,
	__moduleExports: _strictMethod
});

var require$$0$17 = ( _strictMethod$2 && _strictMethod ) || _strictMethod$2;

var arrayJoin = [].join;

// fallback for not array-like strings
$export$1($export$1.P + $export$1.F * (IObject != Object || !require$$0$17(arrayJoin)), 'Array', {
  join: function join(separator){
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});

var arraySlice$1 = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export$1($export$1.P + $export$1.F * require$$1(function(){
  if(html)arraySlice$1.call(html);
}), 'Array', {
  slice: function slice(begin, end){
    var len   = toLength(this.length)
      , klass = require$$2(this);
    end = end === undefined ? len : end;
    if(klass == 'Array')return arraySlice$1.call(this, begin, end);
    var start  = require$$14(begin, len)
      , upTo   = require$$14(end, len)
      , size   = toLength(upTo - start)
      , cloned = Array(size)
      , i      = 0;
    for(; i < size; i++)cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});

var $sort     = [].sort;
var test$1      = [1, 2, 3];

$export$1($export$1.P + $export$1.F * (require$$1(function(){
  // IE8-
  test$1.sort(undefined);
}) || !require$$1(function(){
  // V8 bug
  test$1.sort(null);
  // Old WebKit
}) || !require$$0$17($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn){
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});

var SPECIES  = wks('species');

var _arraySpeciesConstructor = function(original){
  var C;
  if(isArray(original)){
    C = original.constructor;
    // cross-realm fallback
    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
    if(isObject(C)){
      C = C[SPECIES];
      if(C === null)C = undefined;
    }
  } return C === undefined ? Array : C;
};



var _arraySpeciesConstructor$2 = Object.freeze({
	default: _arraySpeciesConstructor,
	__moduleExports: _arraySpeciesConstructor
});

var speciesConstructor = ( _arraySpeciesConstructor$2 && _arraySpeciesConstructor ) || _arraySpeciesConstructor$2;

var _arraySpeciesCreate = function(original, length){
  return new (speciesConstructor(original))(length);
};



var _arraySpeciesCreate$2 = Object.freeze({
	default: _arraySpeciesCreate,
	__moduleExports: _arraySpeciesCreate
});

var asc = ( _arraySpeciesCreate$2 && _arraySpeciesCreate ) || _arraySpeciesCreate$2;

var _arrayMethods = function(TYPE, $create){
  var IS_MAP        = TYPE == 1
    , IS_FILTER     = TYPE == 2
    , IS_SOME       = TYPE == 3
    , IS_EVERY      = TYPE == 4
    , IS_FIND_INDEX = TYPE == 6
    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX
    , create        = $create || asc;
  return function($this, callbackfn, that){
    var O      = toObject($this)
      , self   = IObject(O)
      , f      = require$$7(callbackfn, that, 3)
      , length = toLength(self.length)
      , index  = 0
      , result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined
      , val, res;
    for(;length > index; index++)if(NO_HOLES || index in self){
      val = self[index];
      res = f(val, index, O);
      if(TYPE){
        if(IS_MAP)result[index] = res;            // map
        else if(res)switch(TYPE){
          case 3: return true;                    // some
          case 5: return val;                     // find
          case 6: return index;                   // findIndex
          case 2: result.push(val);               // filter
        } else if(IS_EVERY)return false;          // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};



var _arrayMethods$2 = Object.freeze({
	default: _arrayMethods,
	__moduleExports: _arrayMethods
});

var require$$28 = ( _arrayMethods$2 && _arrayMethods ) || _arrayMethods$2;

var $forEach = require$$28(0);
var STRICT   = require$$0$17([].forEach, true);

$export$1($export$1.P + $export$1.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */){
    return $forEach(this, callbackfn, arguments[1]);
  }
});

var $map    = require$$28(1);

$export$1($export$1.P + $export$1.F * !require$$0$17([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */){
    return $map(this, callbackfn, arguments[1]);
  }
});

var $filter = require$$28(2);

$export$1($export$1.P + $export$1.F * !require$$0$17([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */){
    return $filter(this, callbackfn, arguments[1]);
  }
});

var $some   = require$$28(3);

$export$1($export$1.P + $export$1.F * !require$$0$17([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */){
    return $some(this, callbackfn, arguments[1]);
  }
});

var $every  = require$$28(4);

$export$1($export$1.P + $export$1.F * !require$$0$17([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */){
    return $every(this, callbackfn, arguments[1]);
  }
});

var _arrayReduce = function(that, callbackfn, aLen, memo, isRight){
  aFunction(callbackfn);
  var O      = toObject(that)
    , self   = IObject(O)
    , length = toLength(O.length)
    , index  = isRight ? length - 1 : 0
    , i      = isRight ? -1 : 1;
  if(aLen < 2)for(;;){
    if(index in self){
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if(isRight ? index < 0 : length <= index){
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for(;isRight ? index >= 0 : length > index; index += i)if(index in self){
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};



var _arrayReduce$2 = Object.freeze({
	default: _arrayReduce,
	__moduleExports: _arrayReduce
});

var $reduce = ( _arrayReduce$2 && _arrayReduce ) || _arrayReduce$2;

$export$1($export$1.P + $export$1.F * !require$$0$17([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});

$export$1($export$1.P + $export$1.F * !require$$0$17([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */){
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});

var $indexOf      = require$$0$2(false);
var $native       = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export$1($export$1.P + $export$1.F * (NEGATIVE_ZERO || !require$$0$17($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /*, fromIndex = 0 */){
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});

var $native$1       = [].lastIndexOf;
var NEGATIVE_ZERO$1 = !!$native$1 && 1 / [1].lastIndexOf(1, -0) < 0;

$export$1($export$1.P + $export$1.F * (NEGATIVE_ZERO$1 || !require$$0$17($native$1)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /*, fromIndex = @[*-1] */){
    // convert -0 to +0
    if(NEGATIVE_ZERO$1)return $native$1.apply(this, arguments) || 0;
    var O      = toIObject(this)
      , length = toLength(O.length)
      , index  = length - 1;
    if(arguments.length > 1)index = Math.min(index, require$$12(arguments[1]));
    if(index < 0)index = length + index;
    for(;index >= 0; index--)if(index in O)if(O[index] === searchElement)return index || 0;
    return -1;
  }
});

var _arrayCopyWithin = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
  var O     = toObject(this)
    , len   = toLength(O.length)
    , to    = require$$14(target, len)
    , from  = require$$14(start, len)
    , end   = arguments.length > 2 ? arguments[2] : undefined
    , count = Math.min((end === undefined ? len : require$$14(end, len)) - from, len - to)
    , inc   = 1;
  if(from < to && to < from + count){
    inc  = -1;
    from += count - 1;
    to   += count - 1;
  }
  while(count-- > 0){
    if(from in O)O[to] = O[from];
    else delete O[to];
    to   += inc;
    from += inc;
  } return O;
};



var _arrayCopyWithin$2 = Object.freeze({
	default: _arrayCopyWithin,
	__moduleExports: _arrayCopyWithin
});

var UNSCOPABLES = wks('unscopables');
var ArrayProto$1  = Array.prototype;
if(ArrayProto$1[UNSCOPABLES] == undefined)hide(ArrayProto$1, UNSCOPABLES, {});
var _addToUnscopables = function(key){
  ArrayProto$1[UNSCOPABLES][key] = true;
};



var _addToUnscopables$2 = Object.freeze({
	default: _addToUnscopables,
	__moduleExports: _addToUnscopables
});

var require$$36 = ( _arrayCopyWithin$2 && _arrayCopyWithin ) || _arrayCopyWithin$2;

var require$$1$5 = ( _addToUnscopables$2 && _addToUnscopables ) || _addToUnscopables$2;

$export$1($export$1.P, 'Array', {copyWithin: require$$36});

require$$1$5('copyWithin');

var _arrayFill = function fill(value /*, start = 0, end = @length */){
  var O      = toObject(this)
    , length = toLength(O.length)
    , aLen   = arguments.length
    , index  = require$$14(aLen > 1 ? arguments[1] : undefined, length)
    , end    = aLen > 2 ? arguments[2] : undefined
    , endPos = end === undefined ? length : require$$14(end, length);
  while(endPos > index)O[index++] = value;
  return O;
};



var _arrayFill$2 = Object.freeze({
	default: _arrayFill,
	__moduleExports: _arrayFill
});

var require$$35 = ( _arrayFill$2 && _arrayFill ) || _arrayFill$2;

$export$1($export$1.P, 'Array', {fill: require$$35});

require$$1$5('fill');

var $find   = require$$28(5);
var KEY     = 'find';
var forced  = true;
// Shouldn't skip holes
if(KEY in [])Array(1)[KEY](function(){ forced = false; });
$export$1($export$1.P + $export$1.F * forced, 'Array', {
  find: function find(callbackfn/*, that = undefined */){
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require$$1$5(KEY);

var $find$1   = require$$28(6);
var KEY$1     = 'findIndex';
var forced$1  = true;
// Shouldn't skip holes
if(KEY$1 in [])Array(1)[KEY$1](function(){ forced$1 = false; });
$export$1($export$1.P + $export$1.F * forced$1, 'Array', {
  findIndex: function findIndex(callbackfn/*, that = undefined */){
    return $find$1(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
require$$1$5(KEY$1);

var SPECIES$1     = wks('species');

var _setSpecies = function(KEY){
  var C = global$1[KEY];
  if(require$$1$1 && C && !C[SPECIES$1])$defineProperty$1.f(C, SPECIES$1, {
    configurable: true,
    get: function(){ return this; }
  });
};



var _setSpecies$2 = Object.freeze({
	default: _setSpecies,
	__moduleExports: _setSpecies
});

var require$$2$3 = ( _setSpecies$2 && _setSpecies ) || _setSpecies$2;

require$$2$3('Array');

var _iterStep = function(done, value){
  return {value: value, done: !!done};
};



var _iterStep$2 = Object.freeze({
	default: _iterStep,
	__moduleExports: _iterStep
});

var step = ( _iterStep$2 && _iterStep ) || _iterStep$2;

var es6_array_iterator = $iterDefine(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

require$$1$5('keys');
require$$1$5('values');
require$$1$5('entries');



var es6_array_iterator$2 = Object.freeze({
	default: es6_array_iterator,
	__moduleExports: es6_array_iterator
});

var _flags = function(){
  var that   = anObject(this)
    , result = '';
  if(that.global)     result += 'g';
  if(that.ignoreCase) result += 'i';
  if(that.multiline)  result += 'm';
  if(that.unicode)    result += 'u';
  if(that.sticky)     result += 'y';
  return result;
};



var _flags$2 = Object.freeze({
	default: _flags,
	__moduleExports: _flags
});

var getFlags = ( _flags$2 && _flags ) || _flags$2;

var dP$4                = $defineProperty$1.f;
var gOPN$4              = gOPN$2.f;
var $RegExp           = global$1.RegExp;
var Base$1              = $RegExp;
var proto$2             = $RegExp.prototype;
var re1               = /a/g;
var re2               = /a/g;
var CORRECT_NEW       = new $RegExp(re1) !== re1;

if(require$$1$1 && (!CORRECT_NEW || require$$1(function(){
  re2[wks('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))){
  $RegExp = function RegExp(p, f){
    var tiRE = this instanceof $RegExp
      , piRE = isRegExp(p)
      , fiU  = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base$1(piRE && !fiU ? p.source : p, f)
        : Base$1((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? getFlags.call(p) : f)
      , tiRE ? this : proto$2, $RegExp);
  };
  var proxy = function(key){
    key in $RegExp || dP$4($RegExp, key, {
      configurable: true,
      get: function(){ return Base$1[key]; },
      set: function(it){ Base$1[key] = it; }
    });
  };
  for(var keys$1 = gOPN$4(Base$1), i$1 = 0; keys$1.length > i$1; )proxy(keys$1[i$1++]);
  proto$2.constructor = $RegExp;
  $RegExp.prototype = proto$2;
  redefine(global$1, 'RegExp', $RegExp);
}

require$$2$3('RegExp');

if(require$$1$1 && /./g.flags != 'g')$defineProperty$1.f(RegExp.prototype, 'flags', {
  configurable: true,
  get: getFlags
});

var TO_STRING$1   = 'toString';
var $toString$1   = /./[TO_STRING$1];

var define$1 = function(fn){
  redefine(RegExp.prototype, TO_STRING$1, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if(require$$1(function(){ return $toString$1.call({source: 'a', flags: 'b'}) != '/a/b'; })){
  define$1(function toString(){
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !require$$1$1 && R instanceof RegExp ? getFlags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if($toString$1.name != TO_STRING$1){
  define$1(function toString(){
    return $toString$1.call(this);
  });
}

var _fixReWks = function(KEY, length, exec){
  var SYMBOL   = wks(KEY)
    , fns      = exec(defined, SYMBOL, ''[KEY])
    , strfn    = fns[0]
    , rxfn     = fns[1];
  if(require$$1(function(){
    var O = {};
    O[SYMBOL] = function(){ return 7; };
    return ''[KEY](O) != 7;
  })){
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function(string, arg){ return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function(string){ return rxfn.call(string, this); }
    );
  }
};



var _fixReWks$2 = Object.freeze({
	default: _fixReWks,
	__moduleExports: _fixReWks
});

var require$$0$18 = ( _fixReWks$2 && _fixReWks ) || _fixReWks$2;

require$$0$18('match', 1, function(defined, MATCH, $match){
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});

require$$0$18('replace', 2, function(defined, REPLACE, $replace){
  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
  return [function replace(searchValue, replaceValue){
    'use strict';
    var O  = defined(this)
      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
    return fn !== undefined
      ? fn.call(searchValue, O, replaceValue)
      : $replace.call(String(O), searchValue, replaceValue);
  }, $replace];
});

require$$0$18('search', 1, function(defined, SEARCH, $search){
  // 21.1.3.15 String.prototype.search(regexp)
  return [function search(regexp){
    'use strict';
    var O  = defined(this)
      , fn = regexp == undefined ? undefined : regexp[SEARCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
  }, $search];
});

require$$0$18('split', 2, function(defined, SPLIT, $split){
  'use strict';
  var isRegExp$$1   = isRegExp
    , _split     = $split
    , $push      = [].push
    , $SPLIT     = 'split'
    , LENGTH     = 'length'
    , LAST_INDEX = 'lastIndex';
  if(
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ){
    var NPCG = /()??/.exec('')[1] === undefined; // nonparticipating capturing group
    // based on es5-shim implementation, need to rework it
    $split = function(separator, limit){
      var string = String(this);
      if(separator === undefined && limit === 0)return [];
      // If `separator` is not a regex, use native split
      if(!isRegExp$$1(separator))return _split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var separator2, match, lastIndex, lastLength, i;
      // Doesn't need flags gy, but they don't hurt
      if(!NPCG)separator2 = new RegExp('^' + separatorCopy.source + '$(?!\\s)', flags);
      while(match = separatorCopy.exec(string)){
        // `separatorCopy.lastIndex` is not reliable cross-browser
        lastIndex = match.index + match[0][LENGTH];
        if(lastIndex > lastLastIndex){
          output.push(string.slice(lastLastIndex, match.index));
          // Fix browsers whose `exec` methods don't consistently return `undefined` for NPCG
          if(!NPCG && match[LENGTH] > 1)match[0].replace(separator2, function(){
            for(i = 1; i < arguments[LENGTH] - 2; i++)if(arguments[i] === undefined)match[i] = undefined;
          });
          if(match[LENGTH] > 1 && match.index < string[LENGTH])$push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if(output[LENGTH] >= splitLimit)break;
        }
        if(separatorCopy[LAST_INDEX] === match.index)separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if(lastLastIndex === string[LENGTH]){
        if(lastLength || !separatorCopy.test(''))output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if('0'[$SPLIT](undefined, 0)[LENGTH]){
    $split = function(separator, limit){
      return separator === undefined && limit === 0 ? [] : _split.call(this, separator, limit);
    };
  }
  // 21.1.3.17 String.prototype.split(separator, limit)
  return [function split(separator, limit){
    var O  = defined(this)
      , fn = separator == undefined ? undefined : separator[SPLIT];
    return fn !== undefined ? fn.call(separator, O, limit) : $split.call(String(O), separator, limit);
  }, $split];
});

var _anInstance = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};



var _anInstance$2 = Object.freeze({
	default: _anInstance,
	__moduleExports: _anInstance
});

var _forOf = createCommonjsModule(function (module) {
var BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : require$$25(iterable)
    , f      = require$$7(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(require$$21(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;
});



var _forOf$2 = Object.freeze({
	default: _forOf,
	__moduleExports: _forOf
});

var SPECIES$2   = wks('species');
var _speciesConstructor = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES$2]) == undefined ? D : aFunction(S);
};



var _speciesConstructor$2 = Object.freeze({
	default: _speciesConstructor,
	__moduleExports: _speciesConstructor
});

var process$1            = global$1.process;
var setTask            = global$1.setImmediate;
var clearTask          = global$1.clearImmediate;
var MessageChannel     = global$1.MessageChannel;
var counter            = 0;
var queue              = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer;
var channel;
var port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(require$$2(process$1) == 'process'){
    defer = function(id){
      process$1.nextTick(require$$7(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = require$$7(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global$1.addEventListener && typeof postMessage == 'function' && !global$1.importScripts){
    defer = function(id){
      global$1.postMessage(id + '', '*');
    };
    global$1.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(require$$7(run, id, 1), 0);
    };
  }
}
var _task = {
  set:   setTask,
  clear: clearTask
};



var _task$2 = Object.freeze({
	default: _task,
	__moduleExports: _task
});

var $task = ( _task$2 && _task ) || _task$2;

var macrotask = $task.set;
var Observer  = global$1.MutationObserver || global$1.WebKitMutationObserver;
var process$2   = global$1.process;
var Promise$1   = global$1.Promise;
var isNode$1    = require$$2(process$2) == 'process';

var _microtask = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode$1 && (parent = process$2.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode$1){
    notify = function(){
      process$2.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise$1 && Promise$1.resolve){
    var promise = Promise$1.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global$1, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};



var _microtask$2 = Object.freeze({
	default: _microtask,
	__moduleExports: _microtask
});

var _redefineAll = function(target, src, safe){
  for(var key in src)redefine(target, key, src[key], safe);
  return target;
};



var _redefineAll$2 = Object.freeze({
	default: _redefineAll,
	__moduleExports: _redefineAll
});

var anInstance = ( _anInstance$2 && _anInstance ) || _anInstance$2;

var forOf = ( _forOf$2 && _forOf ) || _forOf$2;

var require$$30 = ( _speciesConstructor$2 && _speciesConstructor ) || _speciesConstructor$2;

var require$$0$19 = ( _microtask$2 && _microtask ) || _microtask$2;

var redefineAll = ( _redefineAll$2 && _redefineAll ) || _redefineAll$2;

var task               = $task.set;
var microtask          = require$$0$19();
var PROMISE            = 'Promise';
var TypeError$1          = global$1.TypeError;
var process            = global$1.process;
var $Promise           = global$1[PROMISE];
var process            = global$1.process;
var isNode             = classof(process) == 'process';
var empty              = function(){ /* empty */ };
var Internal;
var GenericPromiseCapability;
var Wrapper;

var USE_NATIVE$1 = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[wks('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError$1('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError$1('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global$1, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global$1.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global$1.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global$1, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global$1.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError$1("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, require$$7($resolve, wrapper, 1), require$$7($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE$1){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(require$$7($resolve, this, 1), require$$7($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = redefineAll($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(require$$30(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = require$$7($resolve, promise, 1);
    this.reject  = require$$7($reject, promise, 1);
  };
}

$export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE$1, {Promise: $Promise});
setToStringTag($Promise, PROMISE);
require$$2$3(PROMISE);
Wrapper = require$$1$2[PROMISE];

// statics
$export$1($export$1.S + $export$1.F * !USE_NATIVE$1, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export$1($export$1.S + $export$1.F * (require$$0$1 || !USE_NATIVE$1), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export$1($export$1.S + $export$1.F * !(USE_NATIVE$1 && require$$33(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

var dP$5          = $defineProperty$1.f;
var fastKey     = require$$0$6.fastKey;
var SIZE        = require$$1$1 ? '_s' : 'size';

var getEntry = function(that, key){
  // fast case
  var index = fastKey(key), entry;
  if(index !== 'F')return that._i[index];
  // frozen object case
  for(entry = that._f; entry; entry = entry.n){
    if(entry.k == key)return entry;
  }
};

var _collectionStrong = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear(){
        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
          entry.r = true;
          if(entry.p)entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function(key){
        var that  = this
          , entry = getEntry(that, key);
        if(entry){
          var next = entry.n
            , prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if(prev)prev.n = next;
          if(next)next.p = prev;
          if(that._f == entry)that._f = next;
          if(that._l == entry)that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /*, that = undefined */){
        anInstance(this, C, 'forEach');
        var f = require$$7(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
          , entry;
        while(entry = entry ? entry.n : this._f){
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while(entry && entry.r)entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key){
        return !!getEntry(this, key);
      }
    });
    if(require$$1$1)dP$5(C.prototype, 'size', {
      get: function(){
        return defined(this[SIZE]);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var entry = getEntry(that, key)
      , prev, index;
    // change existing entry
    if(entry){
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if(!that._f)that._f = entry;
      if(prev)prev.n = entry;
      that[SIZE]++;
      // add to index
      if(index !== 'F')that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function(C, NAME, IS_MAP){
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function(iterated, kind){
      this._t = iterated;  // target
      this._k = kind;      // kind
      this._l = undefined; // previous
    }, function(){
      var that  = this
        , kind  = that._k
        , entry = that._l;
      // revert to the last existing entry
      while(entry && entry.r)entry = entry.p;
      // get next entry
      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if(kind == 'keys'  )return step(0, entry.k);
      if(kind == 'values')return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    require$$2$3(NAME);
  }
};



var _collectionStrong$2 = Object.freeze({
	default: _collectionStrong,
	__moduleExports: _collectionStrong
});

var _collection = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
  var Base  = global$1[NAME]
    , C     = Base
    , ADDER = IS_MAP ? 'set' : 'add'
    , proto = C && C.prototype
    , O     = {};
  var fixMethod = function(KEY){
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a){
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a){
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !require$$1(function(){
    new C().entries().next();
  }))){
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    require$$0$6.NEED = true;
  } else {
    var instance             = new C
      // early implementations not supports chaining
      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
      , THROWS_ON_PRIMITIVES = require$$1(function(){ instance.has(1); })
      // most early implementations doesn't supports iterables, most modern - not close it correctly
      , ACCEPT_ITERABLES     = require$$33(function(iter){ new C(iter); }) // eslint-disable-line no-new
      // for early implementations -0 and +0 not the same
      , BUGGY_ZERO = !IS_WEAK && require$$1(function(){
        // V8 ~ Chromium 42- fails only with 5+ elements
        var $instance = new C()
          , index     = 5;
        while(index--)$instance[ADDER](index, index);
        return !$instance.has(-0);
      });
    if(!ACCEPT_ITERABLES){ 
      C = wrapper(function(target, iterable){
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base, target, C);
        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
    // weak collections should not contains .clear method
    if(IS_WEAK && proto.clear)delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export$1($export$1.G + $export$1.W + $export$1.F * (C != Base), O);

  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);

  return C;
};



var _collection$2 = Object.freeze({
	default: _collection,
	__moduleExports: _collection
});

var strong = ( _collectionStrong$2 && _collectionStrong ) || _collectionStrong$2;

var require$$0$20 = ( _collection$2 && _collection ) || _collection$2;

var es6_map = require$$0$20('Map', function(get){
  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key){
    var entry = strong.getEntry(this, key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value){
    return strong.def(this, key === 0 ? 0 : key, value);
  }
}, strong, true);



var es6_map$2 = Object.freeze({
	default: es6_map,
	__moduleExports: es6_map
});

var es6_set = require$$0$20('Set', function(get){
  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value){
    return strong.def(this, value = value === 0 ? 0 : value, value);
  }
}, strong);



var es6_set$2 = Object.freeze({
	default: es6_set,
	__moduleExports: es6_set
});

var getWeak           = require$$0$6.getWeak;
var arrayFind         = require$$28(5);
var arrayFindIndex    = require$$28(6);
var id$1                = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function(that){
  return that._l || (that._l = new UncaughtFrozenStore);
};
var UncaughtFrozenStore = function(){
  this.a = [];
};
var findUncaughtFrozen = function(store, key){
  return arrayFind(store.a, function(it){
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function(key){
    var entry = findUncaughtFrozen(this, key);
    if(entry)return entry[1];
  },
  has: function(key){
    return !!findUncaughtFrozen(this, key);
  },
  set: function(key, value){
    var entry = findUncaughtFrozen(this, key);
    if(entry)entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function(key){
    var index = arrayFindIndex(this.a, function(it){
      return it[0] === key;
    });
    if(~index)this.a.splice(index, 1);
    return !!~index;
  }
};

var _collectionWeak = {
  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
    var C = wrapper(function(that, iterable){
      anInstance(that, C, NAME, '_i');
      that._i = id$1++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this)['delete'](key);
        return data && has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has$$1(key){
        if(!isObject(key))return false;
        var data = getWeak(key);
        if(data === true)return uncaughtFrozenStore(this).has(key);
        return data && has(data, this._i);
      }
    });
    return C;
  },
  def: function(that, key, value){
    var data = getWeak(anObject(key), true);
    if(data === true)uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};



var _collectionWeak$2 = Object.freeze({
	default: _collectionWeak,
	__moduleExports: _collectionWeak
});

var weak = ( _collectionWeak$2 && _collectionWeak ) || _collectionWeak$2;

var es6_weakMap = createCommonjsModule(function (module) {
'use strict';
var each         = require$$28(0)
  , getWeak      = require$$0$6.getWeak
  , isExtensible = Object.isExtensible
  , uncaughtFrozenStore = weak.ufstore
  , tmp          = {}
  , InternalMap;

var wrapper = function(get){
  return function WeakMap(){
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key){
    if(isObject(key)){
      var data = getWeak(key);
      if(data === true)return uncaughtFrozenStore(this).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value){
    return weak.def(this, key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = require$$0$20('WeakMap', wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
  InternalMap = weak.getConstructor(wrapper);
  assign(InternalMap.prototype, methods);
  require$$0$6.NEED = true;
  each(['delete', 'has', 'get', 'set'], function(key){
    var proto  = $WeakMap.prototype
      , method = proto[key];
    redefine(proto, key, function(a, b){
      // store frozen objects on internal weakmap shim
      if(isObject(a) && !isExtensible(a)){
        if(!this._f)this._f = new InternalMap;
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}
});



var es6_weakMap$2 = Object.freeze({
	default: es6_weakMap,
	__moduleExports: es6_weakMap
});

require$$0$20('WeakSet', function(get){
  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value){
    return weak.def(this, value, true);
  }
}, weak, false, true);

var TYPED  = require$$26('typed_array');
var VIEW$1   = require$$26('view');
var ABV    = !!(global$1.ArrayBuffer && global$1.DataView);
var CONSTR = ABV;
var i$2 = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while(i$2 < l){
  if(Typed = global$1[TypedArrayConstructors[i$2++]]){
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW$1, true);
  } else CONSTR = false;
}

var _typed = {
  ABV:    ABV,
  CONSTR: CONSTR,
  TYPED:  TYPED,
  VIEW:   VIEW$1
};



var _typed$2 = Object.freeze({
	default: _typed,
	__moduleExports: _typed
});

var require$$5 = ( _typed$2 && _typed ) || _typed$2;

var _typedBuffer = createCommonjsModule(function (module, exports) {
'use strict';
var gOPN           = gOPN$2.f
  , dP             = $defineProperty$1.f
  , ARRAY_BUFFER   = 'ArrayBuffer'
  , DATA_VIEW      = 'DataView'
  , PROTOTYPE      = 'prototype'
  , WRONG_LENGTH   = 'Wrong length!'
  , WRONG_INDEX    = 'Wrong index!'
  , $ArrayBuffer   = global$1[ARRAY_BUFFER]
  , $DataView      = global$1[DATA_VIEW]
  , Math           = global$1.Math
  , RangeError     = global$1.RangeError
  , Infinity       = global$1.Infinity
  , BaseBuffer     = $ArrayBuffer
  , abs            = Math.abs
  , pow            = Math.pow
  , floor          = Math.floor
  , log            = Math.log
  , LN2            = Math.LN2
  , BUFFER         = 'buffer'
  , BYTE_LENGTH    = 'byteLength'
  , BYTE_OFFSET    = 'byteOffset'
  , $BUFFER        = require$$1$1 ? '_b' : BUFFER
  , $LENGTH        = require$$1$1 ? '_l' : BYTE_LENGTH
  , $OFFSET        = require$$1$1 ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
var packIEEE754 = function(value, mLen, nBytes){
  var buffer = Array(nBytes)
    , eLen   = nBytes * 8 - mLen - 1
    , eMax   = (1 << eLen) - 1
    , eBias  = eMax >> 1
    , rt     = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0
    , i      = 0
    , s      = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0
    , e, m, c;
  value = abs(value);
  if(value != value || value === Infinity){
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if(value * (c = pow(2, -e)) < 1){
      e--;
      c *= 2;
    }
    if(e + eBias >= 1){
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if(value * c >= 2){
      e++;
      c /= 2;
    }
    if(e + eBias >= eMax){
      m = 0;
      e = eMax;
    } else if(e + eBias >= 1){
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for(; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for(; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
};
var unpackIEEE754 = function(buffer, mLen, nBytes){
  var eLen  = nBytes * 8 - mLen - 1
    , eMax  = (1 << eLen) - 1
    , eBias = eMax >> 1
    , nBits = eLen - 7
    , i     = nBytes - 1
    , s     = buffer[i--]
    , e     = s & 127
    , m;
  s >>= 7;
  for(; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for(; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if(e === 0){
    e = 1 - eBias;
  } else if(e === eMax){
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
};

var unpackI32 = function(bytes){
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
};
var packI8 = function(it){
  return [it & 0xff];
};
var packI16 = function(it){
  return [it & 0xff, it >> 8 & 0xff];
};
var packI32 = function(it){
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
};
var packF64 = function(it){
  return packIEEE754(it, 52, 8);
};
var packF32 = function(it){
  return packIEEE754(it, 23, 4);
};

var addGetter = function(C, key, internal){
  dP(C[PROTOTYPE], key, {get: function(){ return this[internal]; }});
};

var get = function(view, bytes, index, isLittleEndian){
  var numIndex = +index
    , intIndex = require$$12(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
};
var set = function(view, bytes, index, conversion, value, isLittleEndian){
  var numIndex = +index
    , intIndex = require$$12(numIndex);
  if(numIndex != intIndex || intIndex < 0 || intIndex + bytes > view[$LENGTH])throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b
    , start = intIndex + view[$OFFSET]
    , pack  = conversion(+value);
  for(var i = 0; i < bytes; i++)store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
};

var validateArrayBufferArguments = function(that, length){
  anInstance(that, $ArrayBuffer, ARRAY_BUFFER);
  var numberLength = +length
    , byteLength   = toLength(numberLength);
  if(numberLength != byteLength)throw RangeError(WRONG_LENGTH);
  return byteLength;
};

if(!require$$5.ABV){
  $ArrayBuffer = function ArrayBuffer(length){
    var byteLength = validateArrayBufferArguments(this, length);
    this._b       = require$$35.call(Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength){
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH]
      , offset       = require$$12(byteOffset);
    if(offset < 0 || offset > bufferLength)throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if(offset + byteLength > bufferLength)throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if(require$$1$1){
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset){
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset){
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /*, littleEndian */){
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /*, littleEndian */){
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /*, littleEndian */){
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value){
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /*, littleEndian */){
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /*, littleEndian */){
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /*, littleEndian */){
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if(!require$$1(function(){
    new $ArrayBuffer;     // eslint-disable-line no-new
  }) || !require$$1(function(){
    new $ArrayBuffer(.5); // eslint-disable-line no-new
  })){
    $ArrayBuffer = function ArrayBuffer(length){
      return new BaseBuffer(validateArrayBufferArguments(this, length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for(var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j; ){
      if(!((key = keys[j++]) in $ArrayBuffer))hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if(!require$$0$1)ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2))
    , $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if(view.getInt8(0) || !view.getInt8(1))redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value){
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], require$$5.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;
});



var _typedBuffer$2 = Object.freeze({
	default: _typedBuffer,
	__moduleExports: _typedBuffer
});

var require$$6 = ( _typedBuffer$2 && _typedBuffer ) || _typedBuffer$2;

var ArrayBuffer$1  = global$1.ArrayBuffer;
var $ArrayBuffer = require$$6.ArrayBuffer;
var $DataView    = require$$6.DataView;
var $isView      = require$$5.ABV && ArrayBuffer$1.isView;
var $slice       = $ArrayBuffer.prototype.slice;
var VIEW         = require$$5.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export$1($export$1.G + $export$1.W + $export$1.F * (ArrayBuffer$1 !== $ArrayBuffer), {ArrayBuffer: $ArrayBuffer});

$export$1($export$1.S + $export$1.F * !require$$5.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it){
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export$1($export$1.P + $export$1.U + $export$1.F * require$$1(function(){
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end){
    if($slice !== undefined && end === undefined)return $slice.call(anObject(this), start); // FF fix
    var len    = anObject(this).byteLength
      , first  = require$$14(start, len)
      , final  = require$$14(end === undefined ? len : end, len)
      , result = new (require$$30(this, $ArrayBuffer))(toLength(final - first))
      , viewS  = new $DataView(this)
      , viewT  = new $DataView(result)
      , index  = 0;
    while(first < final){
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

require$$2$3(ARRAY_BUFFER);

$export$1($export$1.G + $export$1.W + $export$1.F * !require$$5.ABV, {
  DataView: require$$6.DataView
});

var $iterators = ( es6_array_iterator$2 && es6_array_iterator ) || es6_array_iterator$2;

var _typedArray = createCommonjsModule(function (module) {
'use strict';
if(require$$1$1){
  var LIBRARY             = require$$0$1
    , global              = global$1
    , fails               = require$$1
    , $export             = $export$1
    , $typed              = require$$5
    , $buffer             = require$$6
    , ctx                 = require$$7
    , anInstance$$1          = anInstance
    , propertyDesc        = createDesc
    , hide$$1                = hide
    , redefineAll$$1         = redefineAll
    , toInteger           = require$$12
    , toLength$$1            = toLength
    , toIndex             = require$$14
    , toPrimitive$$1         = toPrimitive
    , has$$1                 = has
    , same                = require$$17
    , classof$$1             = classof
    , isObject$$1            = isObject
    , toObject$$1            = toObject
    , isArrayIter         = require$$21
    , create$$1              = create
    , getPrototypeOf$$1      = getPrototypeOf
    , gOPN                = gOPN$2.f
    , getIterFn           = require$$25
    , uid                 = require$$26
    , wks$$1                 = wks
    , createArrayMethod   = require$$28
    , createArrayIncludes = require$$0$2
    , speciesConstructor  = require$$30
    , ArrayIterators      = $iterators
    , Iterators$$1           = Iterators
    , $iterDetect         = require$$33
    , setSpecies          = require$$2$3
    , arrayFill           = require$$35
    , arrayCopyWithin     = require$$36
    , $DP                 = $defineProperty$1
    , $GOPD               = require$$0$8
    , dP                  = $DP.f
    , gOPD                = $GOPD.f
    , RangeError          = global.RangeError
    , TypeError           = global.TypeError
    , Uint8Array          = global.Uint8Array
    , ARRAY_BUFFER        = 'ArrayBuffer'
    , SHARED_BUFFER       = 'Shared' + ARRAY_BUFFER
    , BYTES_PER_ELEMENT   = 'BYTES_PER_ELEMENT'
    , PROTOTYPE           = 'prototype'
    , ArrayProto          = Array[PROTOTYPE]
    , $ArrayBuffer        = $buffer.ArrayBuffer
    , $DataView           = $buffer.DataView
    , arrayForEach        = createArrayMethod(0)
    , arrayFilter         = createArrayMethod(2)
    , arraySome           = createArrayMethod(3)
    , arrayEvery          = createArrayMethod(4)
    , arrayFind           = createArrayMethod(5)
    , arrayFindIndex      = createArrayMethod(6)
    , arrayIncludes       = createArrayIncludes(true)
    , arrayIndexOf        = createArrayIncludes(false)
    , arrayValues         = ArrayIterators.values
    , arrayKeys           = ArrayIterators.keys
    , arrayEntries        = ArrayIterators.entries
    , arrayLastIndexOf    = ArrayProto.lastIndexOf
    , arrayReduce         = ArrayProto.reduce
    , arrayReduceRight    = ArrayProto.reduceRight
    , arrayJoin           = ArrayProto.join
    , arraySort           = ArrayProto.sort
    , arraySlice          = ArrayProto.slice
    , arrayToString       = ArrayProto.toString
    , arrayToLocaleString = ArrayProto.toLocaleString
    , ITERATOR            = wks$$1('iterator')
    , TAG                 = wks$$1('toStringTag')
    , TYPED_CONSTRUCTOR   = uid('typed_constructor')
    , DEF_CONSTRUCTOR     = uid('def_constructor')
    , ALL_CONSTRUCTORS    = $typed.CONSTR
    , TYPED_ARRAY         = $typed.TYPED
    , VIEW                = $typed.VIEW
    , WRONG_LENGTH        = 'Wrong length!';

  var $map = createArrayMethod(1, function(O, length){
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function(){
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function(){
    new Uint8Array(1).set({});
  });

  var strictToLength = function(it, SAME){
    if(it === undefined)throw TypeError(WRONG_LENGTH);
    var number = +it
      , length = toLength$$1(it);
    if(SAME && !same(number, length))throw RangeError(WRONG_LENGTH);
    return length;
  };

  var toOffset = function(it, BYTES){
    var offset = toInteger(it);
    if(offset < 0 || offset % BYTES)throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function(it){
    if(isObject$$1(it) && TYPED_ARRAY in it)return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function(C, length){
    if(!(isObject$$1(C) && TYPED_CONSTRUCTOR in C)){
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function(O, list){
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function(C, list){
    var index  = 0
      , length = list.length
      , result = allocate(C, length);
    while(length > index)result[index] = list[index++];
    return result;
  };

  var addGetter = function(it, key, internal){
    dP(it, key, {get: function(){ return this._d[internal]; }});
  };

  var $from = function from(source /*, mapfn, thisArg */){
    var O       = toObject$$1(source)
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , iterFn  = getIterFn(O)
      , i, length, values, result, step, iterator;
    if(iterFn != undefined && !isArrayIter(iterFn)){
      for(iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++){
        values.push(step.value);
      } O = values;
    }
    if(mapping && aLen > 2)mapfn = ctx(mapfn, arguments[2], 2);
    for(i = 0, length = toLength$$1(O.length), result = allocate(this, length); length > i; i++){
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/*...items*/){
    var index  = 0
      , length = arguments.length
      , result = allocate(this, length);
    while(length > index)result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function(){ arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString(){
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /*, end */){
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /*, thisArg */){
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /*, start, end */){ // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /*, thisArg */){
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /*, thisArg */){
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /*, thisArg */){
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /*, thisArg */){
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /*, fromIndex */){
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /*, fromIndex */){
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator){ // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /*, fromIndex */){ // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /*, thisArg */){
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /*, initialValue */){ // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse(){
      var that   = this
        , length = validate(that).length
        , middle = Math.floor(length / 2)
        , index  = 0
        , value;
      while(index < middle){
        value         = that[index];
        that[index++] = that[--length];
        that[length]  = value;
      } return that;
    },
    some: function some(callbackfn /*, thisArg */){
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn){
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end){
      var O      = validate(this)
        , length = O.length
        , $begin = toIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength$$1((end === undefined ? length : toIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end){
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /*, offset */){
    validate(this);
    var offset = toOffset(arguments[1], 1)
      , length = this.length
      , src    = toObject$$1(arrayLike)
      , len    = toLength$$1(src.length)
      , index  = 0;
    if(len + offset > length)throw RangeError(WRONG_LENGTH);
    while(index < len)this[offset + index] = src[index++];
  };

  var $iterators$$1 = {
    entries: function entries(){
      return arrayEntries.call(validate(this));
    },
    keys: function keys(){
      return arrayKeys.call(validate(this));
    },
    values: function values(){
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function(target, key){
    return isObject$$1(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key){
    return isTAIndex(target, key = toPrimitive$$1(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc){
    if(isTAIndex(target, key = toPrimitive$$1(key, true))
      && isObject$$1(desc)
      && has$$1(desc, 'value')
      && !has$$1(desc, 'get')
      && !has$$1(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has$$1(desc, 'writable') || desc.writable)
      && (!has$$1(desc, 'enumerable') || desc.enumerable)
    ){
      target[key] = desc.value;
      return target;
    } else return dP(target, key, desc);
  };

  if(!ALL_CONSTRUCTORS){
    $GOPD.f = $getDesc;
    $DP.f   = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty:           $setDesc
  });

  if(fails(function(){ arrayToString.call({}); })){
    arrayToString = arrayToLocaleString = function toString(){
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll$$1({}, proto);
  redefineAll$$1($TypedArrayPrototype$, $iterators$$1);
  hide$$1($TypedArrayPrototype$, ITERATOR, $iterators$$1.values);
  redefineAll$$1($TypedArrayPrototype$, {
    slice:          $slice,
    set:            $set,
    constructor:    function(){ /* noop */ },
    toString:       arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function(){ return this[TYPED_ARRAY]; }
  });

  module.exports = function(KEY, BYTES, wrapper, CLAMPED){
    CLAMPED = !!CLAMPED;
    var NAME       = KEY + (CLAMPED ? 'Clamped' : '') + 'Array'
      , ISNT_UINT8 = NAME != 'Uint8Array'
      , GETTER     = 'get' + KEY
      , SETTER     = 'set' + KEY
      , TypedArray = global[NAME]
      , Base       = TypedArray || {}
      , TAC        = TypedArray && getPrototypeOf$$1(TypedArray)
      , FORCED     = !TypedArray || !$typed.ABV
      , O          = {}
      , TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function(that, index){
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function(that, index, value){
      var data = that._d;
      if(CLAMPED)value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function(that, index){
      dP(that, index, {
        get: function(){
          return getter(this, index);
        },
        set: function(value){
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if(FORCED){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance$$1(that, TypedArray, NAME, '_d');
        var index  = 0
          , offset = 0
          , buffer, byteLength, length, klass;
        if(!isObject$$1(data)){
          length     = strictToLength(data, true);
          byteLength = length * BYTES;
          buffer     = new $ArrayBuffer(byteLength);
        } else if(data instanceof $ArrayBuffer || (klass = classof$$1(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if($length === undefined){
            if($len % BYTES)throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if(byteLength < 0)throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength$$1($length) * BYTES;
            if(byteLength + offset > $len)throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if(TYPED_ARRAY in data){
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide$$1(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while(index < length)addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create$$1($TypedArrayPrototype$);
      hide$$1(TypedArrayPrototype, 'constructor', TypedArray);
    } else if(!$iterDetect(function(iter){
      // V8 works with iterators, but fails in many other cases
      // https://code.google.com/p/v8/issues/detail?id=4552
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)){
      TypedArray = wrapper(function(that, data, $offset, $length){
        anInstance$$1(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if(!isObject$$1(data))return new Base(strictToLength(data, ISNT_UINT8));
        if(data instanceof $ArrayBuffer || (klass = classof$$1(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER){
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if(TYPED_ARRAY in data)return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function(key){
        if(!(key in TypedArray))hide$$1(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if(!LIBRARY)TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator   = TypedArrayPrototype[ITERATOR]
      , CORRECT_ITER_NAME = !!$nativeIterator && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined)
      , $iterator         = $iterators$$1.values;
    hide$$1(TypedArray, TYPED_CONSTRUCTOR, true);
    hide$$1(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide$$1(TypedArrayPrototype, VIEW, true);
    hide$$1(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if(CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)){
      dP(TypedArrayPrototype, TAG, {
        get: function(){ return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES,
      from: $from,
      of: $of
    });

    if(!(BYTES_PER_ELEMENT in TypedArrayPrototype))hide$$1(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, {set: $set});

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators$$1);

    $export($export.P + $export.F * (TypedArrayPrototype.toString != arrayToString), NAME, {toString: arrayToString});

    $export($export.P + $export.F * fails(function(){
      new TypedArray(1).slice();
    }), NAME, {slice: $slice});

    $export($export.P + $export.F * (fails(function(){
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString()
    }) || !fails(function(){
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, {toLocaleString: $toLocaleString});

    Iterators$$1[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if(!LIBRARY && !CORRECT_ITER_NAME)hide$$1(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function(){ /* empty */ };
});



var _typedArray$2 = Object.freeze({
	default: _typedArray,
	__moduleExports: _typedArray
});

var require$$0$21 = ( _typedArray$2 && _typedArray ) || _typedArray$2;

require$$0$21('Int8', 1, function(init){
  return function Int8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$21('Uint8', 1, function(init){
  return function Uint8Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$21('Uint8', 1, function(init){
  return function Uint8ClampedArray(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
}, true);

require$$0$21('Int16', 2, function(init){
  return function Int16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$21('Uint16', 2, function(init){
  return function Uint16Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$21('Int32', 4, function(init){
  return function Int32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$21('Uint32', 4, function(init){
  return function Uint32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$21('Float32', 4, function(init){
  return function Float32Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

require$$0$21('Float64', 8, function(init){
  return function Float64Array(data, byteOffset, length){
    return init(this, data, byteOffset, length);
  };
});

var rApply    = (global$1.Reflect || {}).apply;
var fApply    = Function.apply;
// MS Edge argumentsList argument is optional
$export$1($export$1.S + $export$1.F * !require$$1(function(){
  rApply(function(){});
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList){
    var T = aFunction(target)
      , L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});

var rConstruct = (global$1.Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = require$$1(function(){
  function F(){}
  return !(rConstruct(function(){}, [], F) instanceof F);
});
var ARGS_BUG = !require$$1(function(){
  rConstruct(function(){});
});

$export$1($export$1.S + $export$1.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /*, newTarget*/){
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if(ARGS_BUG && !NEW_TARGET_BUG)return rConstruct(Target, args, newTarget);
    if(Target == newTarget){
      // w/o altered newTarget, optimization for 0-4 arguments
      switch(args.length){
        case 0: return new Target;
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args));
    }
    // with altered newTarget, not support built-in constructors
    var proto    = newTarget.prototype
      , instance = create(isObject(proto) ? proto : Object.prototype)
      , result   = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

$export$1($export$1.S + $export$1.F * require$$1(function(){
  Reflect.defineProperty($defineProperty$1.f({}, 1, {value: 1}), 1, {value: 2});
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes){
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      $defineProperty$1.f(target, propertyKey, attributes);
      return true;
    } catch(e){
      return false;
    }
  }
});

var gOPD$3     = require$$0$8.f;

$export$1($export$1.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey){
    var desc = gOPD$3(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});

var Enumerate = function(iterated){
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = []       // keys
    , key;
  for(key in iterated)keys.push(key);
};
require$$0$13(Enumerate, 'Object', function(){
  var that = this
    , keys = that._k
    , key;
  do {
    if(that._i >= keys.length)return {value: undefined, done: true};
  } while(!((key = keys[that._i++]) in that._t));
  return {value: key, done: false};
});

$export$1($export$1.S, 'Reflect', {
  enumerate: function enumerate(target){
    return new Enumerate(target);
  }
});

function get(target, propertyKey/*, receiver*/){
  var receiver = arguments.length < 3 ? target : arguments[2]
    , desc, proto;
  if(anObject(target) === receiver)return target[propertyKey];
  if(desc = require$$0$8.f(target, propertyKey))return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if(isObject(proto = getPrototypeOf(target)))return get(proto, propertyKey, receiver);
}

$export$1($export$1.S, 'Reflect', {get: get});

$export$1($export$1.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
    return require$$0$8.f(anObject(target), propertyKey);
  }
});

$export$1($export$1.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf$$1(target){
    return getPrototypeOf(anObject(target));
  }
});

$export$1($export$1.S, 'Reflect', {
  has: function has(target, propertyKey){
    return propertyKey in target;
  }
});

var $isExtensible = Object.isExtensible;

$export$1($export$1.S, 'Reflect', {
  isExtensible: function isExtensible(target){
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});

var Reflect$1  = global$1.Reflect;
var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it){
  var keys       = gOPN$2.f(anObject(it))
    , getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};



var _ownKeys$2 = Object.freeze({
	default: _ownKeys,
	__moduleExports: _ownKeys
});

var ownKeys = ( _ownKeys$2 && _ownKeys ) || _ownKeys$2;

$export$1($export$1.S, 'Reflect', {ownKeys: ownKeys});

var $preventExtensions = Object.preventExtensions;

$export$1($export$1.S, 'Reflect', {
  preventExtensions: function preventExtensions(target){
    anObject(target);
    try {
      if($preventExtensions)$preventExtensions(target);
      return true;
    } catch(e){
      return false;
    }
  }
});

function set(target, propertyKey, V/*, receiver*/){
  var receiver = arguments.length < 4 ? target : arguments[3]
    , ownDesc  = require$$0$8.f(anObject(target), propertyKey)
    , existingDescriptor, proto;
  if(!ownDesc){
    if(isObject(proto = getPrototypeOf(target))){
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if(has(ownDesc, 'value')){
    if(ownDesc.writable === false || !isObject(receiver))return false;
    existingDescriptor = require$$0$8.f(receiver, propertyKey) || createDesc(0);
    existingDescriptor.value = V;
    $defineProperty$1.f(receiver, propertyKey, existingDescriptor);
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export$1($export$1.S, 'Reflect', {set: set});

if(setProto)$export$1($export$1.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto){
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch(e){
      return false;
    }
  }
});

var $includes = require$$0$2(true);

$export$1($export$1.P, 'Array', {
  includes: function includes(el /*, fromIndex = 0 */){
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

require$$1$5('includes');

var $at$2     = require$$0$14(true);

$export$1($export$1.P, 'String', {
  at: function at(pos){
    return $at$2(this, pos);
  }
});

var _stringPad = function(that, maxLength, fillString, left){
  var S            = String(defined(that))
    , stringLength = S.length
    , fillStr      = fillString === undefined ? ' ' : String(fillString)
    , intMaxLength = toLength(maxLength);
  if(intMaxLength <= stringLength || fillStr == '')return S;
  var fillLen = intMaxLength - stringLength
    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};



var _stringPad$2 = Object.freeze({
	default: _stringPad,
	__moduleExports: _stringPad
});

var $pad = ( _stringPad$2 && _stringPad ) || _stringPad$2;

$export$1($export$1.P, 'String', {
  padStart: function padStart(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});

$export$1($export$1.P, 'String', {
  padEnd: function padEnd(maxLength /*, fillString = ' ' */){
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});

require$$0$10('trimLeft', function($trim){
  return function trimLeft(){
    return $trim(this, 1);
  };
}, 'trimStart');

require$$0$10('trimRight', function($trim){
  return function trimRight(){
    return $trim(this, 2);
  };
}, 'trimEnd');

var RegExpProto = RegExp.prototype;

var $RegExpStringIterator = function(regexp, string){
  this._r = regexp;
  this._s = string;
};

require$$0$13($RegExpStringIterator, 'RegExp String', function next(){
  var match = this._r.exec(this._s);
  return {value: match, done: match === null};
});

$export$1($export$1.P, 'String', {
  matchAll: function matchAll(regexp){
    defined(this);
    if(!isRegExp(regexp))throw TypeError(regexp + ' is not a regexp!');
    var S     = String(this)
      , flags = 'flags' in RegExpProto ? String(regexp.flags) : getFlags.call(regexp)
      , rx    = new RegExp(regexp.source, ~flags.indexOf('g') ? flags : 'g' + flags);
    rx.lastIndex = toLength(regexp.lastIndex);
    return new $RegExpStringIterator(rx, S);
  }
});

require$$0$7('asyncIterator');

require$$0$7('observable');

$export$1($export$1.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
    var O       = toIObject(object)
      , getDesc = require$$0$8.f
      , keys    = ownKeys(O)
      , result  = {}
      , i       = 0
      , key;
    while(keys.length > i)createProperty(result, key = keys[i++], getDesc(O, key));
    return result;
  }
});

var isEnum$1    = require$$0$5.f;
var _objectToArray = function(isEntries){
  return function(it){
    var O      = toIObject(it)
      , keys   = getKeys(O)
      , length = keys.length
      , i      = 0
      , result = []
      , key;
    while(length > i)if(isEnum$1.call(O, key = keys[i++])){
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};



var _objectToArray$2 = Object.freeze({
	default: _objectToArray,
	__moduleExports: _objectToArray
});

var require$$0$22 = ( _objectToArray$2 && _objectToArray ) || _objectToArray$2;

var $values = require$$0$22(false);

$export$1($export$1.S, 'Object', {
  values: function values(it){
    return $values(it);
  }
});

var $entries = require$$0$22(true);

$export$1($export$1.S, 'Object', {
  entries: function entries(it){
    return $entries(it);
  }
});

var _objectForcedPam = require$$0$1|| !require$$1(function(){
  var K = Math.random();
  // In FF throws only define methods
  __defineSetter__.call(null, K, function(){ /* empty */});
  delete global$1[K];
});



var _objectForcedPam$2 = Object.freeze({
	default: _objectForcedPam,
	__moduleExports: _objectForcedPam
});

var require$$2$4 = ( _objectForcedPam$2 && _objectForcedPam ) || _objectForcedPam$2;

require$$1$1 && $export$1($export$1.P + require$$2$4, 'Object', {
  __defineGetter__: function __defineGetter__(P, getter){
    $defineProperty$1.f(toObject(this), P, {get: aFunction(getter), enumerable: true, configurable: true});
  }
});

require$$1$1 && $export$1($export$1.P + require$$2$4, 'Object', {
  __defineSetter__: function __defineSetter__(P, setter){
    $defineProperty$1.f(toObject(this), P, {set: aFunction(setter), enumerable: true, configurable: true});
  }
});

var getOwnPropertyDescriptor = require$$0$8.f;

// B.2.2.4 Object.prototype.__lookupGetter__(P)
require$$1$1 && $export$1($export$1.P + require$$2$4, 'Object', {
  __lookupGetter__: function __lookupGetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor(O, K))return D.get;
    } while(O = getPrototypeOf(O));
  }
});

var getOwnPropertyDescriptor$1 = require$$0$8.f;

// B.2.2.5 Object.prototype.__lookupSetter__(P)
require$$1$1 && $export$1($export$1.P + require$$2$4, 'Object', {
  __lookupSetter__: function __lookupSetter__(P){
    var O = toObject(this)
      , K = toPrimitive(P, true)
      , D;
    do {
      if(D = getOwnPropertyDescriptor$1(O, K))return D.set;
    } while(O = getPrototypeOf(O));
  }
});

var _arrayFromIterable = function(iter, ITERATOR){
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};



var _arrayFromIterable$2 = Object.freeze({
	default: _arrayFromIterable,
	__moduleExports: _arrayFromIterable
});

var from = ( _arrayFromIterable$2 && _arrayFromIterable ) || _arrayFromIterable$2;

var _collectionToJson = function(NAME){
  return function toJSON(){
    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};



var _collectionToJson$2 = Object.freeze({
	default: _collectionToJson,
	__moduleExports: _collectionToJson
});

var require$$0$23 = ( _collectionToJson$2 && _collectionToJson ) || _collectionToJson$2;

$export$1($export$1.P + $export$1.R, 'Map', {toJSON: require$$0$23('Map')});

$export$1($export$1.P + $export$1.R, 'Set', {toJSON: require$$0$23('Set')});

$export$1($export$1.S, 'System', {global: global$1});

$export$1($export$1.S, 'Error', {
  isError: function isError(it){
    return require$$2(it) === 'Error';
  }
});

$export$1($export$1.S, 'Math', {
  iaddh: function iaddh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 + (y1 >>> 0) + (($x0 & $y0 | ($x0 | $y0) & ~($x0 + $y0 >>> 0)) >>> 31) | 0;
  }
});

$export$1($export$1.S, 'Math', {
  isubh: function isubh(x0, x1, y0, y1){
    var $x0 = x0 >>> 0
      , $x1 = x1 >>> 0
      , $y0 = y0 >>> 0;
    return $x1 - (y1 >>> 0) - ((~$x0 & $y0 | ~($x0 ^ $y0) & $x0 - $y0 >>> 0) >>> 31) | 0;
  }
});

$export$1($export$1.S, 'Math', {
  imulh: function imulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >> 16
      , v1 = $v >> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >> 16);
  }
});

$export$1($export$1.S, 'Math', {
  umulh: function umulh(u, v){
    var UINT16 = 0xffff
      , $u = +u
      , $v = +v
      , u0 = $u & UINT16
      , v0 = $v & UINT16
      , u1 = $u >>> 16
      , v1 = $v >>> 16
      , t  = (u1 * v0 >>> 0) + (u0 * v0 >>> 16);
    return u1 * v1 + (t >>> 16) + ((u0 * v1 >>> 0) + (t & UINT16) >>> 16);
  }
});

var Map = ( es6_map$2 && es6_map ) || es6_map$2;

var require$$1$6 = ( es6_weakMap$2 && es6_weakMap ) || es6_weakMap$2;

var shared$1  = require$$0('metadata');
var store$1   = shared$1.store || (shared$1.store = new (require$$1$6));

var getOrCreateMetadataMap = function(target, targetKey, create){
  var targetMetadata = store$1.get(target);
  if(!targetMetadata){
    if(!create)return undefined;
    store$1.set(target, targetMetadata = new Map);
  }
  var keyMetadata = targetMetadata.get(targetKey);
  if(!keyMetadata){
    if(!create)return undefined;
    targetMetadata.set(targetKey, keyMetadata = new Map);
  } return keyMetadata;
};
var ordinaryHasOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? false : metadataMap.has(MetadataKey);
};
var ordinaryGetOwnMetadata = function(MetadataKey, O, P){
  var metadataMap = getOrCreateMetadataMap(O, P, false);
  return metadataMap === undefined ? undefined : metadataMap.get(MetadataKey);
};
var ordinaryDefineOwnMetadata$1 = function(MetadataKey, MetadataValue, O, P){
  getOrCreateMetadataMap(O, P, true).set(MetadataKey, MetadataValue);
};
var ordinaryOwnMetadataKeys = function(target, targetKey){
  var metadataMap = getOrCreateMetadataMap(target, targetKey, false)
    , keys        = [];
  if(metadataMap)metadataMap.forEach(function(_, key){ keys.push(key); });
  return keys;
};
var toMetaKey$1 = function(it){
  return it === undefined || typeof it == 'symbol' ? it : String(it);
};
var exp$3 = function(O){
  $export$1($export$1.S, 'Reflect', O);
};

var _metadata = {
  store: store$1,
  map: getOrCreateMetadataMap,
  has: ordinaryHasOwnMetadata,
  get: ordinaryGetOwnMetadata,
  set: ordinaryDefineOwnMetadata$1,
  keys: ordinaryOwnMetadataKeys,
  key: toMetaKey$1,
  exp: exp$3
};



var _metadata$2 = Object.freeze({
	default: _metadata,
	__moduleExports: _metadata
});

var metadata = ( _metadata$2 && _metadata ) || _metadata$2;

var toMetaKey                 = metadata.key;
var ordinaryDefineOwnMetadata = metadata.set;

metadata.exp({defineMetadata: function defineMetadata(metadataKey, metadataValue, target, targetKey){
  ordinaryDefineOwnMetadata(metadataKey, metadataValue, anObject(target), toMetaKey(targetKey));
}});

var toMetaKey$2              = metadata.key;
var getOrCreateMetadataMap$1 = metadata.map;
var store$2                  = metadata.store;

metadata.exp({deleteMetadata: function deleteMetadata(metadataKey, target /*, targetKey */){
  var targetKey   = arguments.length < 3 ? undefined : toMetaKey$2(arguments[2])
    , metadataMap = getOrCreateMetadataMap$1(anObject(target), targetKey, false);
  if(metadataMap === undefined || !metadataMap['delete'](metadataKey))return false;
  if(metadataMap.size)return true;
  var targetMetadata = store$2.get(target);
  targetMetadata['delete'](targetKey);
  return !!targetMetadata.size || store$2['delete'](target);
}});

var ordinaryHasOwnMetadata$1 = metadata.has;
var ordinaryGetOwnMetadata$1 = metadata.get;
var toMetaKey$3              = metadata.key;

var ordinaryGetMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata$1(MetadataKey, O, P);
  if(hasOwn)return ordinaryGetOwnMetadata$1(MetadataKey, O, P);
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryGetMetadata(MetadataKey, parent, P) : undefined;
};

metadata.exp({getMetadata: function getMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey$3(arguments[2]));
}});

var Set = ( es6_set$2 && es6_set ) || es6_set$2;

var ordinaryOwnMetadataKeys$1 = metadata.keys;
var toMetaKey$4               = metadata.key;

var ordinaryMetadataKeys = function(O, P){
  var oKeys  = ordinaryOwnMetadataKeys$1(O, P)
    , parent = getPrototypeOf(O);
  if(parent === null)return oKeys;
  var pKeys  = ordinaryMetadataKeys(parent, P);
  return pKeys.length ? oKeys.length ? from(new Set(oKeys.concat(pKeys))) : pKeys : oKeys;
};

metadata.exp({getMetadataKeys: function getMetadataKeys(target /*, targetKey */){
  return ordinaryMetadataKeys(anObject(target), arguments.length < 2 ? undefined : toMetaKey$4(arguments[1]));
}});

var ordinaryGetOwnMetadata$2 = metadata.get;
var toMetaKey$5              = metadata.key;

metadata.exp({getOwnMetadata: function getOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryGetOwnMetadata$2(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey$5(arguments[2]));
}});

var ordinaryOwnMetadataKeys$2 = metadata.keys;
var toMetaKey$6               = metadata.key;

metadata.exp({getOwnMetadataKeys: function getOwnMetadataKeys(target /*, targetKey */){
  return ordinaryOwnMetadataKeys$2(anObject(target), arguments.length < 2 ? undefined : toMetaKey$6(arguments[1]));
}});

var ordinaryHasOwnMetadata$2 = metadata.has;
var toMetaKey$7              = metadata.key;

var ordinaryHasMetadata = function(MetadataKey, O, P){
  var hasOwn = ordinaryHasOwnMetadata$2(MetadataKey, O, P);
  if(hasOwn)return true;
  var parent = getPrototypeOf(O);
  return parent !== null ? ordinaryHasMetadata(MetadataKey, parent, P) : false;
};

metadata.exp({hasMetadata: function hasMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasMetadata(metadataKey, anObject(target), arguments.length < 3 ? undefined : toMetaKey$7(arguments[2]));
}});

var ordinaryHasOwnMetadata$3 = metadata.has;
var toMetaKey$8              = metadata.key;

metadata.exp({hasOwnMetadata: function hasOwnMetadata(metadataKey, target /*, targetKey */){
  return ordinaryHasOwnMetadata$3(metadataKey, anObject(target)
    , arguments.length < 3 ? undefined : toMetaKey$8(arguments[2]));
}});

var toMetaKey$9                 = metadata.key;
var ordinaryDefineOwnMetadata$2 = metadata.set;

metadata.exp({metadata: function metadata$$1(metadataKey, metadataValue){
  return function decorator(target, targetKey){
    ordinaryDefineOwnMetadata$2(
      metadataKey, metadataValue,
      (targetKey !== undefined ? anObject : aFunction)(target),
      toMetaKey$9(targetKey)
    );
  };
}});

var microtask$1 = require$$0$19();
var process$3   = global$1.process;
var isNode$2    = require$$2(process$3) == 'process';

$export$1($export$1.G, {
  asap: function asap(fn){
    var domain = isNode$2 && process$3.domain;
    microtask$1(domain ? domain.bind(fn) : fn);
  }
});

var microtask$2   = require$$0$19();
var OBSERVABLE  = wks('observable');
var RETURN      = forOf.RETURN;

var getMethod = function(fn){
  return fn == null ? undefined : aFunction(fn);
};

var cleanupSubscription = function(subscription){
  var cleanup = subscription._c;
  if(cleanup){
    subscription._c = undefined;
    cleanup();
  }
};

var subscriptionClosed = function(subscription){
  return subscription._o === undefined;
};

var closeSubscription = function(subscription){
  if(!subscriptionClosed(subscription)){
    subscription._o = undefined;
    cleanupSubscription(subscription);
  }
};

var Subscription = function(observer, subscriber){
  anObject(observer);
  this._c = undefined;
  this._o = observer;
  observer = new SubscriptionObserver(this);
  try {
    var cleanup      = subscriber(observer)
      , subscription = cleanup;
    if(cleanup != null){
      if(typeof cleanup.unsubscribe === 'function')cleanup = function(){ subscription.unsubscribe(); };
      else aFunction(cleanup);
      this._c = cleanup;
    }
  } catch(e){
    observer.error(e);
    return;
  } if(subscriptionClosed(this))cleanupSubscription(this);
};

Subscription.prototype = redefineAll({}, {
  unsubscribe: function unsubscribe(){ closeSubscription(this); }
});

var SubscriptionObserver = function(subscription){
  this._s = subscription;
};

SubscriptionObserver.prototype = redefineAll({}, {
  next: function next(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      try {
        var m = getMethod(observer.next);
        if(m)return m.call(observer, value);
      } catch(e){
        try {
          closeSubscription(subscription);
        } finally {
          throw e;
        }
      }
    }
  },
  error: function error(value){
    var subscription = this._s;
    if(subscriptionClosed(subscription))throw value;
    var observer = subscription._o;
    subscription._o = undefined;
    try {
      var m = getMethod(observer.error);
      if(!m)throw value;
      value = m.call(observer, value);
    } catch(e){
      try {
        cleanupSubscription(subscription);
      } finally {
        throw e;
      }
    } cleanupSubscription(subscription);
    return value;
  },
  complete: function complete(value){
    var subscription = this._s;
    if(!subscriptionClosed(subscription)){
      var observer = subscription._o;
      subscription._o = undefined;
      try {
        var m = getMethod(observer.complete);
        value = m ? m.call(observer, value) : undefined;
      } catch(e){
        try {
          cleanupSubscription(subscription);
        } finally {
          throw e;
        }
      } cleanupSubscription(subscription);
      return value;
    }
  }
});

var $Observable = function Observable(subscriber){
  anInstance(this, $Observable, 'Observable', '_f')._f = aFunction(subscriber);
};

redefineAll($Observable.prototype, {
  subscribe: function subscribe(observer){
    return new Subscription(observer, this._f);
  },
  forEach: function forEach(fn){
    var that = this;
    return new (require$$1$2.Promise || global$1.Promise)(function(resolve, reject){
      aFunction(fn);
      var subscription = that.subscribe({
        next : function(value){
          try {
            return fn(value);
          } catch(e){
            reject(e);
            subscription.unsubscribe();
          }
        },
        error: reject,
        complete: resolve
      });
    });
  }
});

redefineAll($Observable, {
  from: function from(x){
    var C = typeof this === 'function' ? this : $Observable;
    var method = getMethod(anObject(x)[OBSERVABLE]);
    if(method){
      var observable = anObject(method.call(x));
      return observable.constructor === C ? observable : new C(function(observer){
        return observable.subscribe(observer);
      });
    }
    return new C(function(observer){
      var done = false;
      microtask$2(function(){
        if(!done){
          try {
            if(forOf(x, false, function(it){
              observer.next(it);
              if(done)return RETURN;
            }) === RETURN)return;
          } catch(e){
            if(done)throw e;
            observer.error(e);
            return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  },
  of: function of(){
    for(var i = 0, l = arguments.length, items = Array(l); i < l;)items[i] = arguments[i++];
    return new (typeof this === 'function' ? this : $Observable)(function(observer){
      var done = false;
      microtask$2(function(){
        if(!done){
          for(var i = 0; i < items.length; ++i){
            observer.next(items[i]);
            if(done)return;
          } observer.complete();
        }
      });
      return function(){ done = true; };
    });
  }
});

hide($Observable.prototype, OBSERVABLE, function(){ return this; });

$export$1($export$1.G, {Observable: $Observable});

require$$2$3('Observable');

var _path = global$1;



var _path$2 = Object.freeze({
	default: _path,
	__moduleExports: _path
});

var path = ( _path$2 && _path ) || _path$2;

var _partial = function(/* ...pargs */){
  var fn     = aFunction(this)
    , length = arguments.length
    , pargs  = Array(length)
    , i      = 0
    , _      = path._
    , holder = false;
  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
  return function(/* ...args */){
    var that = this
      , aLen = arguments.length
      , j = 0, k = 0, args;
    if(!holder && !aLen)return invoke(fn, pargs, that);
    args = pargs.slice();
    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = arguments[k++];
    while(aLen > k)args.push(arguments[k++]);
    return invoke(fn, args, that);
  };
};



var _partial$2 = Object.freeze({
	default: _partial,
	__moduleExports: _partial
});

var partial = ( _partial$2 && _partial ) || _partial$2;

var navigator  = global$1.navigator;
var MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
var wrap$1 = function(set){
  return MSIE ? function(fn, time /*, ...args */){
    return set(invoke(
      partial,
      [].slice.call(arguments, 2),
      typeof fn == 'function' ? fn : Function(fn)
    ), time);
  } : set;
};
$export$1($export$1.G + $export$1.B + $export$1.F * MSIE, {
  setTimeout:  wrap$1(global$1.setTimeout),
  setInterval: wrap$1(global$1.setInterval)
});

$export$1($export$1.G + $export$1.B, {
  setImmediate:   $task.set,
  clearImmediate: $task.clear
});

var ITERATOR$4      = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues   = Iterators.Array;

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i$3 = 0; i$3 < 5; i$3++){
  var NAME$1       = collections[i$3]
    , Collection = global$1[NAME$1]
    , proto$3      = Collection && Collection.prototype
    , key$1;
  if(proto$3){
    if(!proto$3[ITERATOR$4])hide(proto$3, ITERATOR$4, ArrayValues);
    if(!proto$3[TO_STRING_TAG])hide(proto$3, TO_STRING_TAG, NAME$1);
    Iterators[NAME$1] = ArrayValues;
    for(key$1 in $iterators)if(!proto$3[key$1])redefine(proto$3, key$1, $iterators[key$1], true);
  }
}

var runtime = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = 'object' === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof global.process === "object" && global.process.domain) {
      invoke = global.process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof commonjsGlobal === "object" ? commonjsGlobal :
  typeof window === "object" ? window :
  typeof self === "object" ? self : commonjsGlobal
);
});

var _replacer = function(regExp, replace){
  var replacer = replace === Object(replace) ? function(part){
    return replace[part];
  } : replace;
  return function(it){
    return String(it).replace(regExp, replacer);
  };
};



var _replacer$2 = Object.freeze({
	default: _replacer,
	__moduleExports: _replacer
});

var require$$0$24 = ( _replacer$2 && _replacer ) || _replacer$2;

var $re     = require$$0$24(/[\\^$*+?.()|[\]{}]/g, '\\$&');

$export$1($export$1.S, 'RegExp', {escape: function escape(it){ return $re(it); }});

if (commonjsGlobal._babelPolyfill) {
  throw new Error("only one instance of babel-polyfill is allowed");
}
commonjsGlobal._babelPolyfill = true;

var DEFINE_PROPERTY = "defineProperty";
function define(O, key, value) {
  O[key] || Object[DEFINE_PROPERTY](O, key, {
    writable: true,
    configurable: true,
    value: value
  });
}

define(String.prototype, "padLeft", "".padStart);
define(String.prototype, "padRight", "".padEnd);

"pop,reverse,shift,keys,values,entries,indexOf,every,some,forEach,map,filter,find,findIndex,includes,join,slice,concat,push,splice,unshift,sort,lastIndexOf,reduce,reduceRight,copyWithin,fill".split(",").forEach(function (key) {
  [][key] && define(Array, key, Function.call.bind([][key]));
});

(function(self) {
  'use strict';

  if (self.fetch) {
    return
  }

  var support = {
    searchParams: 'URLSearchParams' in self,
    iterable: 'Symbol' in self && 'iterator' in Symbol,
    blob: 'FileReader' in self && 'Blob' in self && (function() {
      try {
        new Blob();
        return true
      } catch(e) {
        return false
      }
    })(),
    formData: 'FormData' in self,
    arrayBuffer: 'ArrayBuffer' in self
  };

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isDataView = function(obj) {
      return obj && DataView.prototype.isPrototypeOf(obj)
    };

    var isArrayBufferView = ArrayBuffer.isView || function(obj) {
      return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
    };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
      throw new TypeError('Invalid character in header field name')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue+','+value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) { items.push(name); });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) { items.push(value); });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) { items.push([name, value]); });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        throw new Error('unsupported BodyInit type')
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          return consumed(this) || Promise.resolve(this._bodyArrayBuffer)
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return (methods.indexOf(upcased) > -1) ? upcased : method
  }

  function Request(input, options) {
    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'omit';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);
  }

  Request.prototype.clone = function() {
    return new Request(this, { body: this._bodyInit })
  };

  function decode(body) {
    var form = new FormData();
    body.trim().split('&').forEach(function(bytes) {
      if (bytes) {
        var split = bytes.split('=');
        var name = split.shift().replace(/\+/g, ' ');
        var value = split.join('=').replace(/\+/g, ' ');
        form.append(decodeURIComponent(name), decodeURIComponent(value));
      }
    });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    rawHeaders.split(/\r?\n/).forEach(function(line) {
      var parts = line.split(':');
      var key = parts.shift().trim();
      if (key) {
        var value = parts.join(':').trim();
        headers.append(key, value);
      }
    });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = 'status' in options ? options.status : 200;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = 'statusText' in options ? options.statusText : 'OK';
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;

  self.fetch = function(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);
      var xhr = new XMLHttpRequest();

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        resolve(new Response(body, options));
      };

      xhr.onerror = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.ontimeout = function() {
        reject(new TypeError('Network request failed'));
      };

      xhr.open(request.method, request.url, true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      }

      if ('responseType' in xhr && support.blob) {
        xhr.responseType = 'blob';
      }

      request.headers.forEach(function(value, name) {
        xhr.setRequestHeader(name, value);
      });

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  };
  self.fetch.polyfill = true;
})(typeof self !== 'undefined' ? self : undefined);

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty$1 = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var get$1 = function get(object, property, receiver) {
  if (object === null) object = Function.prototype;
  var desc = Object.getOwnPropertyDescriptor(object, property);

  if (desc === undefined) {
    var parent = Object.getPrototypeOf(object);

    if (parent === null) {
      return undefined;
    } else {
      return get(parent, property, receiver);
    }
  } else if ("value" in desc) {
    return desc.value;
  } else {
    var getter = desc.get;

    if (getter === undefined) {
      return undefined;
    }

    return getter.call(receiver);
  }
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var AbstractView = function () {
  function AbstractView() {
    classCallCheck(this, AbstractView);
  }

  createClass(AbstractView, [{
    key: "render",
    value: function render() {
      return this.createElement(this.template);
    }
  }, {
    key: "bind",
    value: function bind() {}
  }, {
    key: "create",
    value: function create() {
      this._element = this.render();
      this.bind();
    }
  }, {
    key: "createElement",
    value: function createElement(template) {
      var outer = document.createElement("template");
      outer.innerHTML = template;
      return outer.content;
    }
  }, {
    key: "show",
    value: function show() {
      var mainScreen = document.querySelector(".main");
      mainScreen.innerHTML = "";
      mainScreen.appendChild(this.element);
    }
  }, {
    key: "template",
    get: function get$$1() {
      throw new Error("View should be defined");
    }
  }, {
    key: "element",
    get: function get$$1() {
      if (!this._element) {
        this.create();
      }

      return this._element;
    }
  }]);
  return AbstractView;
}();

function deepCopy(object) {
  return JSON.parse(JSON.stringify(object));
}

var BaseAdapter = function () {
  function BaseAdapter() {
    classCallCheck(this, BaseAdapter);

    if (new.target === BaseAdapter) {
      throw new Error();
    }
  }

  createClass(BaseAdapter, [{
    key: 'preprocess',
    value: function preprocess(data) {
      return data;
    }
  }, {
    key: 'toServer',
    value: function toServer(data) {
      return data;
    }
  }]);
  return BaseAdapter;
}();

var defaultAdapter = new (function (_BaseAdapter) {
  inherits(_class, _BaseAdapter);

  function _class() {
    classCallCheck(this, _class);
    return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  return _class;
}(BaseAdapter))();

var BaseModel = function () {
  function BaseModel() {
    classCallCheck(this, BaseModel);
  }

  createClass(BaseModel, [{
    key: 'load',
    value: function load() {
      var adapter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultAdapter;

      return fetch(this.urlRead).then(function (resp) {
        return resp.json();
      }).then(adapter.preprocess);
    }
  }, {
    key: 'send',
    value: function send(data) {
      var adapter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultAdapter;

      var requestSettings = {
        body: adapter.toServer(data),
        headers: {
          'Content-Type': 'application/json'
        },
        method: 'POST'
      };

      return fetch(this.urlWrite, requestSettings).then(this.onUpload);
    }
  }, {
    key: 'urlRead',
    get: function get$$1() {
      throw new Error('Abstract method. Define the URL for model.');
    }
  }, {
    key: 'urlWrite',
    get: function get$$1() {
      throw new Error('Abstract method. Define the URL for model.');
    }
  }]);
  return BaseModel;
}();

var gameModelAdapter = new (function (_BaseAdapter) {
  inherits(_class, _BaseAdapter);

  function _class() {
    classCallCheck(this, _class);
    return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));
  }

  createClass(_class, [{
    key: 'preprocess',
    value: function preprocess(data) {
      return data.map(function (item) {
        switch (item.type) {
          case 'artist':
            return { type: 1, data: { file: item.src }, answers: gameModelAdapter.proceedArtistAnswers(item.answers) };
          case 'genre':
            return { type: 2, data: item.question, answers: gameModelAdapter.proceedGenreAnswers(item.answers, item.genre) };
        }

        return {};
      });
    }
  }, {
    key: 'toServer',
    value: function toServer(data) {
      return JSON.stringify(data);
    }
  }, {
    key: 'proceedArtistAnswers',
    value: function proceedArtistAnswers(answers) {
      return answers.map(function (item) {
        return { valid: item.isCorrect, artistName: item.title, image: item.image.url };
      });
    }
  }, {
    key: 'proceedGenreAnswers',
    value: function proceedGenreAnswers(answers, correctGenre) {
      return answers.map(function (item) {
        return { valid: item.genre === correctGenre ? true : false, file: item.src };
      });
    }
  }]);
  return _class;
}(BaseAdapter))();

var GameModel = function (_BaseModel) {
  inherits(GameModel, _BaseModel);
  createClass(GameModel, [{
    key: 'urlRead',
    get: function get$$1() {
      return 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/questions';
    }
  }, {
    key: 'correctAnswers',
    get: function get$$1() {
      return this.state.questions.reduce(function (sum, question) {
        return sum + (question.isUserAnswerCorrect ? 1 : 0);
      }, 0);
    }
  }, {
    key: 'gameTime',
    get: function get$$1() {
      return this.initState.time - this.state.time;
    }
  }, {
    key: 'timeLeft',
    set: function set$$1(value) {
      this.state.time = value;

      if (!this.state.time) {
        this.onFinishGame();
      }
    },
    get: function get$$1() {
      return this.state.time;
    }
  }, {
    key: 'lifes',
    get: function get$$1() {
      return this.state.life;
    }
  }, {
    key: 'currentQuestion',
    get: function get$$1() {
      return this.state.questions[this.state.currentIndex];
    }
  }, {
    key: 'stats',
    get: function get$$1() {
      var stats = {};
      stats.answers = this.correctAnswers;
      stats.time = this.gameTime;

      return stats;
    }
  }, {
    key: 'isFail',
    get: function get$$1() {
      return !this.timeLeft || !this.lifes;
    }
  }]);

  function GameModel() {
    classCallCheck(this, GameModel);

    var _this2 = possibleConstructorReturn(this, (GameModel.__proto__ || Object.getPrototypeOf(GameModel)).call(this));

    _this2.QuestionType = {
      ARTIST: 1,
      GENRE: 2
    };

    _this2.questions = [];
    _this2.initState = Object.freeze({
      'time': 120,
      'life': 3,
      'currentIndex': 0,
      'questions': deepCopy(_this2.questions)
    });
    _this2.state = Object.assign({}, _this2.initState);
    return _this2;
  }

  createClass(GameModel, [{
    key: 'resetGame',
    value: function resetGame() {
      this.state = Object.assign({}, this.initState, { questions: deepCopy(this.questions) });
    }
  }, {
    key: 'answer',
    value: function answer() {
      for (var _len = arguments.length, selectedIndexes = Array(_len), _key = 0; _key < _len; _key++) {
        selectedIndexes[_key] = arguments[_key];
      }

      this.proceedCurrentAnswer(selectedIndexes);

      if (this.currentQuestion.isUserAnswerCorrect) {
        this.nextQuestion();
      } else {
        this.state.life = Math.max(0, this.state.life - 1);

        if (this.state.life < 1) {
          this.onFinishGame();
        } else {
          this.nextQuestion();
        }
      }
    }
  }, {
    key: 'nextQuestion',
    value: function nextQuestion() {
      this.state.currentIndex++;

      if (this.state.currentIndex >= this.state.questions.length) {
        this.onFinishGame();
      } else {
        this.onNextQuestion();
      }
    }
  }, {
    key: 'proceedCurrentAnswer',
    value: function proceedCurrentAnswer(answerIndexes) {
      var answers = this.currentQuestion.answers;
      answerIndexes.forEach(function (item) {
        answers[item].isUserAnswer = true;
      });

      var correct = answers.findIndex(function (item, i) {
        return item.valid && !item.isUserAnswer || !item.valid && item.isUserAnswer;
      }) < 0;
      this.currentQuestion.isUserAnswerCorrect = correct;
      return correct;
    }
  }, {
    key: 'onFinishGame',
    value: function onFinishGame() {}
  }, {
    key: 'onNextQuestion',
    value: function onNextQuestion() {}
  }, {
    key: 'load',
    value: function load() {
      return get$1(GameModel.prototype.__proto__ || Object.getPrototypeOf(GameModel.prototype), 'load', this).call(this, gameModelAdapter);
    }
  }]);
  return GameModel;
}(BaseModel);

var model = new GameModel();

var USERNAME = '451989';
var SERVER_URL = 'https://intensive-ecmascript-server-btfgudlkpi.now.sh/guess-melody/stats/' + USERNAME;

var gameInfo = Object.freeze({
  'gameName': '\u0423\u0433\u0430\u0434\u0430\u0439 \u041C\u0435\u043B\u043E\u0434\u0438\u044E',
  'rules': '\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u043F\u0440\u043E\u0441\u0442\u044B&nbsp;\u2014 \u0437\u0430&nbsp;' + Math.round(model.initState.time / 60) + ' \u043C\u0438\u043D\u0443\u0442\u044B \u0434\u0430\u0442\u044C\n  \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u044B\u0445 \u043E\u0442\u0432\u0435\u0442\u043E\u0432.<br>\n  \u0423\u0434\u0430\u0447\u0438!'
});

var WelcomeView = function (_AbstractView) {
  inherits(WelcomeView, _AbstractView);

  function WelcomeView() {
    classCallCheck(this, WelcomeView);
    return possibleConstructorReturn(this, (WelcomeView.__proto__ || Object.getPrototypeOf(WelcomeView)).apply(this, arguments));
  }

  createClass(WelcomeView, [{
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var button = this.element.querySelector('.main-play');
      button.onclick = function () {
        _this2.onStartClick();
      };
    }
  }, {
    key: 'onStartClick',
    value: function onStartClick() {}
  }, {
    key: 'template',
    get: function get$$1() {
      return '<section class="main main--welcome">\n      <section class="logo" title="' + gameInfo.gameName + '"><h1>' + gameInfo.gameName + '</h1></section>\n      <button class="main-play">\u041D\u0430\u0447\u0430\u0442\u044C \u0438\u0433\u0440\u0443</button>\n      <h2 class="title main-title">\u041F\u0440\u0430\u0432\u0438\u043B\u0430 \u0438\u0433\u0440\u044B</h2>\n      <p class="text main-text">\n        ' + gameInfo.rules + '      \n      </p>\n    </section>';
    }
  }]);
  return WelcomeView;
}(AbstractView);

var WelcomePresenter = function () {
  function WelcomePresenter() {
    classCallCheck(this, WelcomePresenter);

    this.view = new WelcomeView();
  }

  createClass(WelcomePresenter, [{
    key: 'init',
    value: function init() {
      this.view.create();
      this.view.show();
      this.view.onStartClick = function () {
        location.hash = application.ControllerId.GAME;
      };

      application.destroyTimerView();
    }
  }]);
  return WelcomePresenter;
}();

var welcome = new WelcomePresenter();

var GameGenreView = function (_AbstractView) {
  inherits(GameGenreView, _AbstractView);

  function GameGenreView(question) {
    classCallCheck(this, GameGenreView);

    var _this = possibleConstructorReturn(this, (GameGenreView.__proto__ || Object.getPrototypeOf(GameGenreView)).call(this));

    _this._question = question;
    return _this;
  }

  createClass(GameGenreView, [{
    key: 'createSong',
    value: function createSong(index, answer) {
      return '<div class="genre-answer">\n      <div class="player-wrapper"></div>\n        <input type="checkbox" name="answer" value="answer-1" id="a-' + index + '">\n        <label class="genre-answer-check" for="a-' + index + '"></label>\n      </div>';
    }
  }, {
    key: 'onAnswer',
    value: function onAnswer() {}
  }, {
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var screenDom = this.element;

      this.answers = Array.prototype.slice.call(screenDom.querySelectorAll('.genre-answer'), 0);
      this.answerButton = screenDom.querySelector('.genre-answer-send');

      var playerWrappers = Array.prototype.slice.call(screenDom.querySelectorAll('.player-wrapper'), 0);

      playerWrappers.forEach(function (item, i) {
        item.addEventListener('click', function (event) {
          event.preventDefault();

          if (_this2.currentAudio) {
            _this2.currentAudio.pause();
          }

          _this2.currentAudio = Array.prototype.slice.call(item.querySelectorAll('audio'))[0];
        });

        window.initializePlayer(item, Array.prototype.slice.call(_this2._question.answers, 0)[i].file, false, true);
      });

      this.answers.forEach(function (item) {
        var checkbox = item.querySelector('input');

        checkbox.addEventListener('click', function () {
          _this2.answerClickHandler();
        });
      });

      this.answerButton.disabled = true;

      this.answerButton.onclick = function (event) {
        event.preventDefault();

        var answerIndexes = [];
        Array.prototype.slice.call(_this2.answers, 0).forEach(function (item, i, array) {
          if (_this2.answers[i].querySelector('input').checked) {
            answerIndexes.push(i);
          }
        });

        _this2.onAnswer.apply(_this2, answerIndexes);
      };
    }
  }, {
    key: 'answerClickHandler',
    value: function answerClickHandler() {
      this.answerButton.disabled = false;
    }
  }, {
    key: 'template',
    get: function get$$1() {
      var _this3 = this;

      return '<section class="main main--level main--level-genre">\n    <div class="main-wrap">\n      <h2 class="title">' + this._question.data.toLowerCase() + '</h2>\n      <form class="genre">\n        ' + Array.prototype.slice.call(this._question.answers, 0).map(function (answer, index) {
        return _this3.createSong(index, answer);
      }) + '\n        <button class="genre-answer-send" type="submit">\u041E\u0442\u0432\u0435\u0442\u0438\u0442\u044C</button>\n      </form>\n    </div>\n  </section>';
    }
  }]);
  return GameGenreView;
}(AbstractView);

var GameArtistView = function (_AbstractView) {
  inherits(GameArtistView, _AbstractView);

  function GameArtistView(question) {
    classCallCheck(this, GameArtistView);

    var _this = possibleConstructorReturn(this, (GameArtistView.__proto__ || Object.getPrototypeOf(GameArtistView)).call(this));

    _this._question = question;
    return _this;
  }

  createClass(GameArtistView, [{
    key: 'createAnswer',
    value: function createAnswer(index, answer) {
      return '<div class="main-answer-wrapper">\n      <input class="main-answer-r" type="radio" id="answer-' + index + '" name="answer" value="' + index + '" />\n      <label class="main-answer" for="answer-1">\n        <img class="main-answer-preview" src="' + answer.image + '">\n        ' + answer.artistName + '\n      </label> \n    </div>';
    }
  }, {
    key: 'onAnswer',
    value: function onAnswer() {}
  }, {
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var screenDom = this.element;
      var answers = Array.prototype.slice.call(screenDom.querySelectorAll('.main-answer-wrapper'), 0);
      var player = screenDom.querySelector('.player-wrapper');

      var artistSong = this._question.data;
      window.initializePlayer(player, artistSong.file, true, true);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = answers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var answer = _step.value;

          answer.addEventListener('click', function (event) {
            event.preventDefault();

            var wrapperElement = event.currentTarget;
            var index = wrapperElement.querySelector('.main-answer-r').value;
            _this2.onAnswer(index);
          });
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: 'template',
    get: function get$$1() {
      var _this3 = this;

      return '<section class="main main--level main--level-artist">\n      <div class="main-wrap">\n        <div class="main-timer"></div>\n  \n        <h2 class="title main-title">\u041A\u0442\u043E \u0438\u0441\u043F\u043E\u043B\u043D\u044F\u0435\u0442 \u044D\u0442\u0443 \u043F\u0435\u0441\u043D\u044E?</h2>\n        <div class="player-wrapper"></div>\n        <form class="main-list">\n          ' + Array.prototype.slice.call(this._question.answers, 0).map(function (answer, index) {
        return _this3.createAnswer(index, answer);
      }) + '\n        </form>\n      </div>\n    </section>';
    }
  }]);
  return GameArtistView;
}(AbstractView);

var GamePresenter = function () {
  function GamePresenter(model$$1) {
    classCallCheck(this, GamePresenter);

    this._model = model$$1;
  }

  createClass(GamePresenter, [{
    key: 'init',
    value: function init() {
      var _this = this;

      switch (this._model.currentQuestion.type) {
        case this._model.QuestionType.ARTIST:
          this.view = new GameArtistView(this._model.currentQuestion);
          break;
        case this._model.QuestionType.GENRE:
          this.view = new GameGenreView(this._model.currentQuestion);
          break;
      }

      this.view.create();
      this.view.show();
      this.view.onAnswer = function () {
        var _model;

        return (_model = _this._model).answer.apply(_model, arguments);
      };

      this._model.onNextQuestion = function () {
        application.showGame();
      };

      this._model.onFinishGame = function () {
        if (_this._model.isFail) {
          location.hash = application.ControllerId.RESULT;
        } else {
          location.hash = application.ControllerId.RESULT + '=' + JSON.stringify(_this._model._stats);
        }

        _this.destroy();
      };

      if (this._model.state.currentIndex === 0) {
        application.initTimerView(this._model.timeLeft);

        this.timer = setInterval(function () {
          return _this.updateTimer();
        }, 1000);
      }
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      clearInterval(this.timer);
      this._model.resetGame();
    }
  }, {
    key: 'updateTimer',
    value: function updateTimer() {
      this._model.timeLeft--;
    }
  }]);
  return GamePresenter;
}();

var game = new GamePresenter(model);

var ResultFailView = function (_AbstractView) {
  inherits(ResultFailView, _AbstractView);

  function ResultFailView(stats) {
    classCallCheck(this, ResultFailView);

    var _this = possibleConstructorReturn(this, (ResultFailView.__proto__ || Object.getPrototypeOf(ResultFailView)).call(this));

    _this._stats = stats;
    return _this;
  }

  createClass(ResultFailView, [{
    key: 'onRestartClick',
    value: function onRestartClick() {}
  }, {
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var screenDom = this.element;

      var button = screenDom.querySelector('.main-replay');
      button.onclick = function () {
        _this2.onRestartClick();
      };

      return screenDom;
    }
  }, {
    key: 'getTimeString',
    value: function getTimeString() {
      var time = this._stats.time;

      var mins = Math.floor(time / 60);
      var secs = time - mins * 60;

      if (mins) {
        return mins + ' \u043C\u0438\u043D\u0443\u0442\u044B ' + secs + ' \u0441\u0435\u043A\u0443\u043D\u0434\u044B';
      } else {
        return secs + ' \u0441\u0435\u043A\u0443\u043D\u0434\u044B';
      }
    }
  }, {
    key: 'template',
    get: function get$$1() {
      return '<section class="main main--result">\n        <section class="logo" title="' + gameInfo.gameName + '"><h1>' + gameInfo.gameName + '</h1></section>\n        <h2 class="title">\u0412\u044B \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u0435\u043B\u043E\u043C\u0430\u043D!</h2>\n        <div class="main-stat">\u0417\u0430&nbsp;' + this.getTimeString() + '<br>\u0432\u044B&nbsp;\u043E\u0442\u0433\u0430\u0434\u0430\u043B\u0438 ' + this._stats.answers + '&nbsp;\u043C\u0435\u043B\u043E\u0434\u0438\u0438</div>\n        <span class="main-comparison">\u042D\u0442\u043E&nbsp;\u043B\u0443\u0447\u0448\u0435 \u0447\u0435\u043C \u0443&nbsp;' + this._stats.percentHighscore + '&nbsp;\u0438\u0433\u0440\u043E\u043A\u043E\u0432</span>\n        <span role="button" tabindex="0" class="main-replay">\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437</span>\n      </section>';
    }
  }]);
  return ResultFailView;
}(AbstractView);

var ResultFailView$1 = function (_AbstractView) {
  inherits(ResultFailView, _AbstractView);

  function ResultFailView() {
    classCallCheck(this, ResultFailView);
    return possibleConstructorReturn(this, (ResultFailView.__proto__ || Object.getPrototypeOf(ResultFailView)).apply(this, arguments));
  }

  createClass(ResultFailView, [{
    key: 'onRestartClick',
    value: function onRestartClick() {}
  }, {
    key: 'bind',
    value: function bind() {
      var _this2 = this;

      var screenDom = this.element;

      var button = screenDom.querySelector('.main-replay');
      button.onclick = function () {
        _this2.onRestartClick();
      };

      return screenDom;
    }
  }, {
    key: 'template',
    get: function get$$1() {
      return '<section class="main main--result">\n      <section class="logo" title="' + gameInfo.gameName + '"><h1>' + gameInfo.gameName + '</h1></section>\n        <h2 class="title">\u0412\u044B \u043F\u0440\u043E\u0438\u0433\u0440\u0430\u043B\u0438</h2>\n        <div class="main-stat">\u041D\u0438\u0447\u0435\u0433\u043E, \u0432\u0430\u043C \u043F\u043E\u0432\u0435\u0437\u0435\u0442 \u0432 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u0439 \u0440\u0430\u0437</div>\n        <span role="button" tabindex="0" class="main-replay">\u0421\u044B\u0433\u0440\u0430\u0442\u044C \u0435\u0449\u0451 \u0440\u0430\u0437</span>\n      </section>';
    }
  }]);
  return ResultFailView;
}(AbstractView);

var resultAdapter = new (function (_BaseAdapter) {
  inherits(_class, _BaseAdapter);

  function _class() {
    classCallCheck(this, _class);
    return possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));
  }

  createClass(_class, [{
    key: 'preprocess',
    value: function preprocess(data) {
      if (!data) {
        return [];
      }

      data.forEach(function (item, index) {
        if (!item.hasOwnProperty('answers') || !item.hasOwnProperty('time')) {
          data.splice(index, 1);
        }
      });
      return data;
    }
  }, {
    key: 'toServer',
    value: function toServer(data) {
      return JSON.stringify(data);
    }
  }]);
  return _class;
}(BaseAdapter))();

var ResultModel = function (_BaseModel) {
  inherits(ResultModel, _BaseModel);

  function ResultModel() {
    classCallCheck(this, ResultModel);

    var _this2 = possibleConstructorReturn(this, (ResultModel.__proto__ || Object.getPrototypeOf(ResultModel)).call(this));

    _this2._stats = [];
    return _this2;
  }

  createClass(ResultModel, [{
    key: 'send',
    value: function send(data) {
      get$1(ResultModel.prototype.__proto__ || Object.getPrototypeOf(ResultModel.prototype), 'send', this).call(this, data, resultAdapter);
    }
  }, {
    key: 'load',
    value: function load() {
      return get$1(ResultModel.prototype.__proto__ || Object.getPrototypeOf(ResultModel.prototype), 'load', this).call(this, resultAdapter);
    }
  }, {
    key: 'urlRead',
    get: function get$$1() {
      return SERVER_URL;
    }
  }, {
    key: 'urlWrite',
    get: function get$$1() {
      return SERVER_URL;
    }
  }]);
  return ResultModel;
}(BaseModel);

var resultModel = new ResultModel();

var ResultPresenter = function () {
  function ResultPresenter() {
    classCallCheck(this, ResultPresenter);
  }

  createClass(ResultPresenter, [{
    key: 'init',
    value: function init(userStat) {
      if (userStat) {
        resultModel.send(userStat);
        this.view = new ResultFailView(Object.assign({}, userStat, { percentHighscore: this.getPercentHighscore(userStat) }));
      } else {
        this.view = new ResultFailView$1();
      }

      this.view.create();
      this.view.show();

      this.view.onRestartClick = function () {
        location.hash = application.ControllerId.WELCOME;
      };

      application.destroyTimerView();
    }
  }, {
    key: 'getPercentHighscore',
    value: function getPercentHighscore(userStat) {
      userStat.isPlayerResult = true;

      var serverStats = resultModel._stats;
      serverStats.push(userStat);

      serverStats.sort(function (a, b) {
        return b.answers - a.answers || a.time - b.time;
      });

      var playerIndex = serverStats.findIndex(function (item) {
        if (item.isPlayerResult) {
          item.isPlayerResult = false;
          return true;
        }

        return false;
      });

      var result = 100 - playerIndex / serverStats.length * 100;
      return Math.floor(result) + '%';
    }
  }]);
  return ResultPresenter;
}();

var result = new ResultPresenter();

var screenTemplate = function screenTemplate() {
  return "\n  <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"timer\" viewBox=\"0 0 780 780\">\n    <circle\n    cx=\"390\" cy=\"390\" r=\"370\"\n    class=\"timer-line\"\n    style=\"filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center\"></circle>\n  \n    <div class=\"timer-value\" xmlns=\"http://www.w3.org/1999/xhtml\">\n    <span class=\"timer-value-mins\"></span><!--\n      --><span class=\"timer-value-dots\">:</span><!--\n    --><span class=\"timer-value-secs\"></span>\n    </div>\n  </svg>";
};

function getElement() {
  var outer = document.createElement("template");
  outer.innerHTML = screenTemplate();
  return outer.content;
}

var Application = function () {
  function Application() {
    var _this = this;

    classCallCheck(this, Application);

    this.ControllerId = {
      WELCOME: '',
      GAME: 'game',
      RESULT: 'result'
    };

    window.onhashchange = function () {
      _this.initLocation();
    };

    var preloaderRemove = this.showWelcome;

    model.load().then(function (data) {
      return _this.setup(data);
    }).then(function () {
      return resultModel.load();
    }).catch(function () {
      return [];
    }).then(function (stats) {
      resultModel._stats = stats;
    }).then(function () {
      return new Promise(function (resolve, reject) {
        // utils.preloadAudio(model.questions, resolve, reject);
        resolve();
      });
    }).then(function () {
      preloaderRemove();
      _this.initLocation();
    }).catch(window.console.error);
  }

  createClass(Application, [{
    key: 'setup',
    value: function setup(questions) {
      var _routes;

      model.questions = questions;

      this._routes = (_routes = {}, defineProperty$1(_routes, this.ControllerId.WELCOME, welcome), defineProperty$1(_routes, this.ControllerId.GAME, game), defineProperty$1(_routes, this.ControllerId.RESULT, result), _routes);
    }
  }, {
    key: 'init',
    value: function init() {}
  }, {
    key: 'initTimerView',
    value: function initTimerView(time) {
      var appDiv = document.querySelector('.timer');
      appDiv.appendChild(getElement());

      this.timerStopFunction = window.initializeCountdown(time);
    }
  }, {
    key: 'destroyTimerView',
    value: function destroyTimerView() {
      var appDiv = document.querySelector('.timer');
      appDiv.innerHTML = '';

      if (this.timerStopFunction) {
        this.timerStopFunction();
      }
    }
  }, {
    key: 'showWelcome',
    value: function showWelcome() {
      welcome.init();
    }
  }, {
    key: 'showGame',
    value: function showGame() {
      game.init();
    }
  }, {
    key: 'initLocation',
    value: function initLocation() {
      var params = this.getJSONHashString(location.hash);

      this.changeController(this.getRawHashString(location.hash), params);
    }
  }, {
    key: 'getRawHashString',
    value: function getRawHashString(hash) {
      var returnString = hash.replace('#', '');

      var index = hash.indexOf('=');
      if (index > 0) {
        returnString = returnString.substr(0, index - 1);
      }

      return returnString;
    }
  }, {
    key: 'getJSONHashString',
    value: function getJSONHashString(hash) {
      var returnString = hash.replace('#', '');
      var index = hash.indexOf('=');

      if (index > 0) {
        returnString = returnString.substr(index);
      }

      try {
        return JSON.parse(returnString);
      } catch (error) {
        return null;
      }
    }
  }, {
    key: 'changeController',
    value: function changeController() {
      var route = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var params = arguments[1];

      var controller = this._routes[route];
      game.destroy();

      if (controller) {
        controller.init(params);
      } else {
        this.showWelcome();
      }
    }
  }]);
  return Application;
}();

var application = new Application();

application.init();

}());

//# sourceMappingURL=main.js.map
