(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[7],{

/***/ "./assets/lib/bootstrap-select.js":
/*!****************************************!*\
  !*** ./assets/lib/bootstrap-select.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.concat */ "./node_modules/core-js/modules/es.array.concat.js");

__webpack_require__(/*! core-js/modules/es.array.every */ "./node_modules/core-js/modules/es.array.every.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.last-index-of */ "./node_modules/core-js/modules/es.array.last-index-of.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.number.constructor */ "./node_modules/core-js/modules/es.number.constructor.js");

__webpack_require__(/*! core-js/modules/es.object.define-getter */ "./node_modules/core-js/modules/es.object.define-getter.js");

__webpack_require__(/*! core-js/modules/es.object.define-property */ "./node_modules/core-js/modules/es.object.define-property.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/es.string.starts-with */ "./node_modules/core-js/modules/es.string.starts-with.js");

__webpack_require__(/*! core-js/modules/es.string.trim */ "./node_modules/core-js/modules/es.string.trim.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * Bootstrap-select v1.13.18 (https://developer.snapappointments.com/bootstrap-select)
 *
 * Copyright 2012-2020 SnapAppointments, LLC
 * Licensed under MIT (https://github.com/snapappointments/bootstrap-select/blob/master/LICENSE)
 */
(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;

  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return factory(a0);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (jQuery) {
  (function ($) {
    'use strict';

    var DISALLOWED_ATTRIBUTES = ['sanitize', 'whiteList', 'sanitizeFn'];
    var uriAttrs = ['background', 'cite', 'href', 'itemtype', 'longdesc', 'poster', 'src', 'xlink:href'];
    var ARIA_ATTRIBUTE_PATTERN = /^aria-[\w-]*$/i;
    var DefaultWhitelist = {
      // Global attributes allowed on any supplied element below.
      '*': ['class', 'dir', 'id', 'lang', 'role', 'tabindex', 'style', ARIA_ATTRIBUTE_PATTERN],
      a: ['target', 'href', 'title', 'rel'],
      area: [],
      b: [],
      br: [],
      col: [],
      code: [],
      div: [],
      em: [],
      hr: [],
      h1: [],
      h2: [],
      h3: [],
      h4: [],
      h5: [],
      h6: [],
      i: [],
      img: ['src', 'alt', 'title', 'width', 'height'],
      li: [],
      ol: [],
      p: [],
      pre: [],
      s: [],
      small: [],
      span: [],
      sub: [],
      sup: [],
      strong: [],
      u: [],
      ul: []
    };
    /**
     * A pattern that recognizes a commonly useful subset of URLs that are safe.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

    var SAFE_URL_PATTERN = /^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi;
    /**
     * A pattern that matches safe data URLs. Only matches image, video and audio types.
     *
     * Shoutout to Angular 7 https://github.com/angular/angular/blob/7.2.4/packages/core/src/sanitization/url_sanitizer.ts
     */

    var DATA_URL_PATTERN = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;

    function allowedAttribute(attr, allowedAttributeList) {
      var attrName = attr.nodeName.toLowerCase();

      if ($.inArray(attrName, allowedAttributeList) !== -1) {
        if ($.inArray(attrName, uriAttrs) !== -1) {
          return Boolean(attr.nodeValue.match(SAFE_URL_PATTERN) || attr.nodeValue.match(DATA_URL_PATTERN));
        }

        return true;
      }

      var regExp = $(allowedAttributeList).filter(function (index, value) {
        return value instanceof RegExp;
      }); // Check if a regular expression validates the attribute.

      for (var i = 0, l = regExp.length; i < l; i++) {
        if (attrName.match(regExp[i])) {
          return true;
        }
      }

      return false;
    }

    function sanitizeHtml(unsafeElements, whiteList, sanitizeFn) {
      if (sanitizeFn && typeof sanitizeFn === 'function') {
        return sanitizeFn(unsafeElements);
      }

      var whitelistKeys = Object.keys(whiteList);

      for (var i = 0, len = unsafeElements.length; i < len; i++) {
        var elements = unsafeElements[i].querySelectorAll('*');

        for (var j = 0, len2 = elements.length; j < len2; j++) {
          var el = elements[j];
          var elName = el.nodeName.toLowerCase();

          if (whitelistKeys.indexOf(elName) === -1) {
            el.parentNode.removeChild(el);
            continue;
          }

          var attributeList = [].slice.call(el.attributes);
          var whitelistedAttributes = [].concat(whiteList['*'] || [], whiteList[elName] || []);

          for (var k = 0, len3 = attributeList.length; k < len3; k++) {
            var attr = attributeList[k];

            if (!allowedAttribute(attr, whitelistedAttributes)) {
              el.removeAttribute(attr.nodeName);
            }
          }
        }
      }
    } // Polyfill for browsers with no classList support
    // Remove in v2


    if (!('classList' in document.createElement('_'))) {
      (function (view) {
        if (!('Element' in view)) return;

        var classListProp = 'classList',
            protoProp = 'prototype',
            elemCtrProto = view.Element[protoProp],
            objCtr = Object,
            classListGetter = function classListGetter() {
          var $elem = $(this);
          return {
            add: function add(classes) {
              classes = Array.prototype.slice.call(arguments).join(' ');
              return $elem.addClass(classes);
            },
            remove: function remove(classes) {
              classes = Array.prototype.slice.call(arguments).join(' ');
              return $elem.removeClass(classes);
            },
            toggle: function toggle(classes, force) {
              return $elem.toggleClass(classes, force);
            },
            contains: function contains(classes) {
              return $elem.hasClass(classes);
            }
          };
        };

        if (objCtr.defineProperty) {
          var classListPropDesc = {
            get: classListGetter,
            enumerable: true,
            configurable: true
          };

          try {
            objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
          } catch (ex) {
            // IE 8 doesn't support enumerable:true
            // adding undefined to fight this issue https://github.com/eligrey/classList.js/issues/36
            // modernie IE8-MSW7 machine has IE8 8.0.6001.18702 and is affected
            if (ex.number === undefined || ex.number === -0x7FF5EC54) {
              classListPropDesc.enumerable = false;
              objCtr.defineProperty(elemCtrProto, classListProp, classListPropDesc);
            }
          }
        } else if (objCtr[protoProp].__defineGetter__) {
          elemCtrProto.__defineGetter__(classListProp, classListGetter);
        }
      })(window);
    }

    var testElement = document.createElement('_');
    testElement.classList.add('c1', 'c2');

    if (!testElement.classList.contains('c2')) {
      var _add = DOMTokenList.prototype.add,
          _remove = DOMTokenList.prototype.remove;

      DOMTokenList.prototype.add = function () {
        Array.prototype.forEach.call(arguments, _add.bind(this));
      };

      DOMTokenList.prototype.remove = function () {
        Array.prototype.forEach.call(arguments, _remove.bind(this));
      };
    }

    testElement.classList.toggle('c3', false); // Polyfill for IE 10 and Firefox <24, where classList.toggle does not
    // support the second argument.

    if (testElement.classList.contains('c3')) {
      var _toggle = DOMTokenList.prototype.toggle;

      DOMTokenList.prototype.toggle = function (token, force) {
        if (1 in arguments && !this.contains(token) === !force) {
          return force;
        } else {
          return _toggle.call(this, token);
        }
      };
    }

    testElement = null; // shallow array comparison

    function isEqual(array1, array2) {
      return array1.length === array2.length && array1.every(function (element, index) {
        return element === array2[index];
      });
    }

    ; // <editor-fold desc="Shims">

    if (!String.prototype.startsWith) {
      (function () {
        'use strict'; // needed to support `apply`/`call` with `undefined`/`null`

        var defineProperty = function () {
          // IE 8 only supports `Object.defineProperty` on DOM elements
          try {
            var object = {};
            var $defineProperty = Object.defineProperty;
            var result = $defineProperty(object, object, object) && $defineProperty;
          } catch (error) {}

          return result;
        }();

        var toString = {}.toString;

        var startsWith = function startsWith(search) {
          if (this == null) {
            throw new TypeError();
          }

          var string = String(this);

          if (search && toString.call(search) == '[object RegExp]') {
            throw new TypeError();
          }

          var stringLength = string.length;
          var searchString = String(search);
          var searchLength = searchString.length;
          var position = arguments.length > 1 ? arguments[1] : undefined; // `ToInteger`

          var pos = position ? Number(position) : 0;

          if (pos != pos) {
            // better `isNaN`
            pos = 0;
          }

          var start = Math.min(Math.max(pos, 0), stringLength); // Avoid the `indexOf` call if no match is possible

          if (searchLength + start > stringLength) {
            return false;
          }

          var index = -1;

          while (++index < searchLength) {
            if (string.charCodeAt(start + index) != searchString.charCodeAt(index)) {
              return false;
            }
          }

          return true;
        };

        if (defineProperty) {
          defineProperty(String.prototype, 'startsWith', {
            'value': startsWith,
            'configurable': true,
            'writable': true
          });
        } else {
          String.prototype.startsWith = startsWith;
        }
      })();
    }

    if (!Object.keys) {
      Object.keys = function (o, // object
      k, // key
      r // result array
      ) {
        // initialize object and result
        r = []; // iterate over object keys

        for (k in o) {
          // fill result array with non-prototypical keys
          r.hasOwnProperty.call(o, k) && r.push(k);
        } // return result


        return r;
      };
    }

    if (HTMLSelectElement && !HTMLSelectElement.prototype.hasOwnProperty('selectedOptions')) {
      Object.defineProperty(HTMLSelectElement.prototype, 'selectedOptions', {
        get: function get() {
          return this.querySelectorAll(':checked');
        }
      });
    }

    function getSelectedOptions(select, ignoreDisabled) {
      var selectedOptions = select.selectedOptions,
          options = [],
          opt;

      if (ignoreDisabled) {
        for (var i = 0, len = selectedOptions.length; i < len; i++) {
          opt = selectedOptions[i];

          if (!(opt.disabled || opt.parentNode.tagName === 'OPTGROUP' && opt.parentNode.disabled)) {
            options.push(opt);
          }
        }

        return options;
      }

      return selectedOptions;
    } // much faster than $.val()


    function getSelectValues(select, selectedOptions) {
      var value = [],
          options = selectedOptions || select.selectedOptions,
          opt;

      for (var i = 0, len = options.length; i < len; i++) {
        opt = options[i];

        if (!(opt.disabled || opt.parentNode.tagName === 'OPTGROUP' && opt.parentNode.disabled)) {
          value.push(opt.value);
        }
      }

      if (!select.multiple) {
        return !value.length ? null : value[0];
      }

      return value;
    } // set data-selected on select element if the value has been programmatically selected
    // prior to initialization of bootstrap-select
    // * consider removing or replacing an alternative method *


    var valHooks = {
      useDefault: false,
      _set: $.valHooks.select.set
    };

    $.valHooks.select.set = function (elem, value) {
      if (value && !valHooks.useDefault) $(elem).data('selected', true);
      return valHooks._set.apply(this, arguments);
    };

    var changedArguments = null;

    var EventIsSupported = function () {
      try {
        new Event('change');
        return true;
      } catch (e) {
        return false;
      }
    }();

    $.fn.triggerNative = function (eventName) {
      var el = this[0],
          event;

      if (el.dispatchEvent) {
        // for modern browsers & IE9+
        if (EventIsSupported) {
          // For modern browsers
          event = new Event(eventName, {
            bubbles: true
          });
        } else {
          // For IE since it doesn't support Event constructor
          event = document.createEvent('Event');
          event.initEvent(eventName, true, false);
        }

        el.dispatchEvent(event);
      } else if (el.fireEvent) {
        // for IE8
        event = document.createEventObject();
        event.eventType = eventName;
        el.fireEvent('on' + eventName, event);
      } else {
        // fall back to jQuery.trigger
        this.trigger(eventName);
      }
    }; // </editor-fold>


    function stringSearch(li, searchString, method, normalize) {
      var stringTypes = ['display', 'subtext', 'tokens'],
          searchSuccess = false;

      for (var i = 0; i < stringTypes.length; i++) {
        var stringType = stringTypes[i],
            string = li[stringType];

        if (string) {
          string = string.toString(); // Strip HTML tags. This isn't perfect, but it's much faster than any other method

          if (stringType === 'display') {
            string = string.replace(/<[^>]+>/g, '');
          }

          if (normalize) string = normalizeToBase(string);
          string = string.toUpperCase();

          if (method === 'contains') {
            searchSuccess = string.indexOf(searchString) >= 0;
          } else {
            searchSuccess = string.startsWith(searchString);
          }

          if (searchSuccess) break;
        }
      }

      return searchSuccess;
    }

    function toInteger(value) {
      return parseInt(value, 10) || 0;
    } // Borrowed from Lodash (_.deburr)

    /** Used to map Latin Unicode letters to basic Latin letters. */


    var deburredLetters = {
      // Latin-1 Supplement block.
      '\xc0': 'A',
      '\xc1': 'A',
      '\xc2': 'A',
      '\xc3': 'A',
      '\xc4': 'A',
      '\xc5': 'A',
      '\xe0': 'a',
      '\xe1': 'a',
      '\xe2': 'a',
      '\xe3': 'a',
      '\xe4': 'a',
      '\xe5': 'a',
      '\xc7': 'C',
      '\xe7': 'c',
      '\xd0': 'D',
      '\xf0': 'd',
      '\xc8': 'E',
      '\xc9': 'E',
      '\xca': 'E',
      '\xcb': 'E',
      '\xe8': 'e',
      '\xe9': 'e',
      '\xea': 'e',
      '\xeb': 'e',
      '\xcc': 'I',
      '\xcd': 'I',
      '\xce': 'I',
      '\xcf': 'I',
      '\xec': 'i',
      '\xed': 'i',
      '\xee': 'i',
      '\xef': 'i',
      '\xd1': 'N',
      '\xf1': 'n',
      '\xd2': 'O',
      '\xd3': 'O',
      '\xd4': 'O',
      '\xd5': 'O',
      '\xd6': 'O',
      '\xd8': 'O',
      '\xf2': 'o',
      '\xf3': 'o',
      '\xf4': 'o',
      '\xf5': 'o',
      '\xf6': 'o',
      '\xf8': 'o',
      '\xd9': 'U',
      '\xda': 'U',
      '\xdb': 'U',
      '\xdc': 'U',
      '\xf9': 'u',
      '\xfa': 'u',
      '\xfb': 'u',
      '\xfc': 'u',
      '\xdd': 'Y',
      '\xfd': 'y',
      '\xff': 'y',
      '\xc6': 'Ae',
      '\xe6': 'ae',
      '\xde': 'Th',
      '\xfe': 'th',
      '\xdf': 'ss',
      // Latin Extended-A block.
      "\u0100": 'A',
      "\u0102": 'A',
      "\u0104": 'A',
      "\u0101": 'a',
      "\u0103": 'a',
      "\u0105": 'a',
      "\u0106": 'C',
      "\u0108": 'C',
      "\u010A": 'C',
      "\u010C": 'C',
      "\u0107": 'c',
      "\u0109": 'c',
      "\u010B": 'c',
      "\u010D": 'c',
      "\u010E": 'D',
      "\u0110": 'D',
      "\u010F": 'd',
      "\u0111": 'd',
      "\u0112": 'E',
      "\u0114": 'E',
      "\u0116": 'E',
      "\u0118": 'E',
      "\u011A": 'E',
      "\u0113": 'e',
      "\u0115": 'e',
      "\u0117": 'e',
      "\u0119": 'e',
      "\u011B": 'e',
      "\u011C": 'G',
      "\u011E": 'G',
      "\u0120": 'G',
      "\u0122": 'G',
      "\u011D": 'g',
      "\u011F": 'g',
      "\u0121": 'g',
      "\u0123": 'g',
      "\u0124": 'H',
      "\u0126": 'H',
      "\u0125": 'h',
      "\u0127": 'h',
      "\u0128": 'I',
      "\u012A": 'I',
      "\u012C": 'I',
      "\u012E": 'I',
      "\u0130": 'I',
      "\u0129": 'i',
      "\u012B": 'i',
      "\u012D": 'i',
      "\u012F": 'i',
      "\u0131": 'i',
      "\u0134": 'J',
      "\u0135": 'j',
      "\u0136": 'K',
      "\u0137": 'k',
      "\u0138": 'k',
      "\u0139": 'L',
      "\u013B": 'L',
      "\u013D": 'L',
      "\u013F": 'L',
      "\u0141": 'L',
      "\u013A": 'l',
      "\u013C": 'l',
      "\u013E": 'l',
      "\u0140": 'l',
      "\u0142": 'l',
      "\u0143": 'N',
      "\u0145": 'N',
      "\u0147": 'N',
      "\u014A": 'N',
      "\u0144": 'n',
      "\u0146": 'n',
      "\u0148": 'n',
      "\u014B": 'n',
      "\u014C": 'O',
      "\u014E": 'O',
      "\u0150": 'O',
      "\u014D": 'o',
      "\u014F": 'o',
      "\u0151": 'o',
      "\u0154": 'R',
      "\u0156": 'R',
      "\u0158": 'R',
      "\u0155": 'r',
      "\u0157": 'r',
      "\u0159": 'r',
      "\u015A": 'S',
      "\u015C": 'S',
      "\u015E": 'S',
      "\u0160": 'S',
      "\u015B": 's',
      "\u015D": 's',
      "\u015F": 's',
      "\u0161": 's',
      "\u0162": 'T',
      "\u0164": 'T',
      "\u0166": 'T',
      "\u0163": 't',
      "\u0165": 't',
      "\u0167": 't',
      "\u0168": 'U',
      "\u016A": 'U',
      "\u016C": 'U',
      "\u016E": 'U',
      "\u0170": 'U',
      "\u0172": 'U',
      "\u0169": 'u',
      "\u016B": 'u',
      "\u016D": 'u',
      "\u016F": 'u',
      "\u0171": 'u',
      "\u0173": 'u',
      "\u0174": 'W',
      "\u0175": 'w',
      "\u0176": 'Y',
      "\u0177": 'y',
      "\u0178": 'Y',
      "\u0179": 'Z',
      "\u017B": 'Z',
      "\u017D": 'Z',
      "\u017A": 'z',
      "\u017C": 'z',
      "\u017E": 'z',
      "\u0132": 'IJ',
      "\u0133": 'ij',
      "\u0152": 'Oe',
      "\u0153": 'oe',
      "\u0149": "'n",
      "\u017F": 's'
    };
    /** Used to match Latin Unicode letters (excluding mathematical operators). */

    var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;
    /** Used to compose unicode character classes. */

    var rsComboMarksRange = "\\u0300-\\u036f",
        reComboHalfMarksRange = "\\ufe20-\\ufe2f",
        rsComboSymbolsRange = "\\u20d0-\\u20ff",
        rsComboMarksExtendedRange = "\\u1ab0-\\u1aff",
        rsComboMarksSupplementRange = "\\u1dc0-\\u1dff",
        rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange + rsComboMarksExtendedRange + rsComboMarksSupplementRange;
    /** Used to compose unicode capture groups. */

    var rsCombo = '[' + rsComboRange + ']';
    /**
     * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
     * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
     */

    var reComboMark = RegExp(rsCombo, 'g');

    function deburrLetter(key) {
      return deburredLetters[key];
    }

    ;

    function normalizeToBase(string) {
      string = string.toString();
      return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
    } // List of HTML entities for escaping.


    var escapeMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      '`': '&#x60;'
    }; // Functions for escaping and unescaping strings to/from HTML interpolation.

    var createEscaper = function createEscaper(map) {
      var escaper = function escaper(match) {
        return map[match];
      }; // Regexes for identifying a key that needs to be escaped.


      var source = '(?:' + Object.keys(map).join('|') + ')';
      var testRegexp = RegExp(source);
      var replaceRegexp = RegExp(source, 'g');
      return function (string) {
        string = string == null ? '' : '' + string;
        return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
      };
    };

    var htmlEscape = createEscaper(escapeMap);
    /**
     * ------------------------------------------------------------------------
     * Constants
     * ------------------------------------------------------------------------
     */

    var keyCodeMap = {
      32: ' ',
      48: '0',
      49: '1',
      50: '2',
      51: '3',
      52: '4',
      53: '5',
      54: '6',
      55: '7',
      56: '8',
      57: '9',
      59: ';',
      65: 'A',
      66: 'B',
      67: 'C',
      68: 'D',
      69: 'E',
      70: 'F',
      71: 'G',
      72: 'H',
      73: 'I',
      74: 'J',
      75: 'K',
      76: 'L',
      77: 'M',
      78: 'N',
      79: 'O',
      80: 'P',
      81: 'Q',
      82: 'R',
      83: 'S',
      84: 'T',
      85: 'U',
      86: 'V',
      87: 'W',
      88: 'X',
      89: 'Y',
      90: 'Z',
      96: '0',
      97: '1',
      98: '2',
      99: '3',
      100: '4',
      101: '5',
      102: '6',
      103: '7',
      104: '8',
      105: '9'
    };
    var keyCodes = {
      ESCAPE: 27,
      // KeyboardEvent.which value for Escape (Esc) key
      ENTER: 13,
      // KeyboardEvent.which value for Enter key
      SPACE: 32,
      // KeyboardEvent.which value for space key
      TAB: 9,
      // KeyboardEvent.which value for tab key
      ARROW_UP: 38,
      // KeyboardEvent.which value for up arrow key
      ARROW_DOWN: 40 // KeyboardEvent.which value for down arrow key

    };
    var version = {
      success: false,
      major: '3'
    };

    try {
      version.full = ($.fn.dropdown.Constructor.VERSION || '').split(' ')[0].split('.');
      version.major = version.full[0];
      version.success = true;
    } catch (err) {// do nothing
    }

    var selectId = 0;
    var EVENT_KEY = '.bs.select';
    var classNames = {
      DISABLED: 'disabled',
      DIVIDER: 'divider',
      SHOW: 'open',
      DROPUP: 'dropup',
      MENU: 'dropdown-menu',
      MENURIGHT: 'dropdown-menu-right',
      MENULEFT: 'dropdown-menu-left',
      // to-do: replace with more advanced template/customization options
      BUTTONCLASS: 'btn-default',
      POPOVERHEADER: 'popover-title',
      ICONBASE: 'glyphicon',
      TICKICON: 'glyphicon-ok'
    };
    var Selector = {
      MENU: '.' + classNames.MENU
    };
    var elementTemplates = {
      div: document.createElement('div'),
      span: document.createElement('span'),
      i: document.createElement('i'),
      subtext: document.createElement('small'),
      a: document.createElement('a'),
      li: document.createElement('li'),
      whitespace: document.createTextNode("\xA0"),
      fragment: document.createDocumentFragment()
    };
    elementTemplates.noResults = elementTemplates.li.cloneNode(false);
    elementTemplates.noResults.className = 'no-results';
    elementTemplates.a.setAttribute('role', 'option');
    elementTemplates.a.className = 'dropdown-item';
    elementTemplates.subtext.className = 'text-muted';
    elementTemplates.text = elementTemplates.span.cloneNode(false);
    elementTemplates.text.className = 'text';
    elementTemplates.checkMark = elementTemplates.span.cloneNode(false);
    var REGEXP_ARROW = new RegExp(keyCodes.ARROW_UP + '|' + keyCodes.ARROW_DOWN);
    var REGEXP_TAB_OR_ESCAPE = new RegExp('^' + keyCodes.TAB + '$|' + keyCodes.ESCAPE);
    var generateOption = {
      li: function li(content, classes, optgroup) {
        var li = elementTemplates.li.cloneNode(false);

        if (content) {
          if (content.nodeType === 1 || content.nodeType === 11) {
            li.appendChild(content);
          } else {
            li.innerHTML = content;
          }
        }

        if (typeof classes !== 'undefined' && classes !== '') li.className = classes;
        if (typeof optgroup !== 'undefined' && optgroup !== null) li.classList.add('optgroup-' + optgroup);
        return li;
      },
      a: function a(text, classes, inline) {
        var a = elementTemplates.a.cloneNode(true);

        if (text) {
          if (text.nodeType === 11) {
            a.appendChild(text);
          } else {
            a.insertAdjacentHTML('beforeend', text);
          }
        }

        if (typeof classes !== 'undefined' && classes !== '') a.classList.add.apply(a.classList, classes.split(/\s+/));
        if (inline) a.setAttribute('style', inline);
        return a;
      },
      text: function text(options, useFragment) {
        var textElement = elementTemplates.text.cloneNode(false),
            subtextElement,
            iconElement;

        if (options.content) {
          textElement.innerHTML = options.content;
        } else {
          textElement.textContent = options.text;

          if (options.icon) {
            var whitespace = elementTemplates.whitespace.cloneNode(false); // need to use <i> for icons in the button to prevent a breaking change
            // note: switch to span in next major release

            iconElement = (useFragment === true ? elementTemplates.i : elementTemplates.span).cloneNode(false);
            iconElement.className = this.options.iconBase + ' ' + options.icon;
            elementTemplates.fragment.appendChild(iconElement);
            elementTemplates.fragment.appendChild(whitespace);
          }

          if (options.subtext) {
            subtextElement = elementTemplates.subtext.cloneNode(false);
            subtextElement.textContent = options.subtext;
            textElement.appendChild(subtextElement);
          }
        }

        if (useFragment === true) {
          while (textElement.childNodes.length > 0) {
            elementTemplates.fragment.appendChild(textElement.childNodes[0]);
          }
        } else {
          elementTemplates.fragment.appendChild(textElement);
        }

        return elementTemplates.fragment;
      },
      label: function label(options) {
        var textElement = elementTemplates.text.cloneNode(false),
            subtextElement,
            iconElement;
        textElement.innerHTML = options.display;

        if (options.icon) {
          var whitespace = elementTemplates.whitespace.cloneNode(false);
          iconElement = elementTemplates.span.cloneNode(false);
          iconElement.className = this.options.iconBase + ' ' + options.icon;
          elementTemplates.fragment.appendChild(iconElement);
          elementTemplates.fragment.appendChild(whitespace);
        }

        if (options.subtext) {
          subtextElement = elementTemplates.subtext.cloneNode(false);
          subtextElement.textContent = options.subtext;
          textElement.appendChild(subtextElement);
        }

        elementTemplates.fragment.appendChild(textElement);
        return elementTemplates.fragment;
      }
    };

    function showNoResults(searchMatch, searchValue) {
      if (!searchMatch.length) {
        elementTemplates.noResults.innerHTML = this.options.noneResultsText.replace('{0}', '"' + htmlEscape(searchValue) + '"');
        this.$menuInner[0].firstChild.appendChild(elementTemplates.noResults);
      }
    }

    var Selectpicker = function Selectpicker(element, options) {
      var that = this; // bootstrap-select has been initialized - revert valHooks.select.set back to its original function

      if (!valHooks.useDefault) {
        $.valHooks.select.set = valHooks._set;
        valHooks.useDefault = true;
      }

      this.$element = $(element);
      this.$newElement = null;
      this.$button = null;
      this.$menu = null;
      this.options = options;
      this.selectpicker = {
        main: {},
        search: {},
        current: {},
        // current changes if a search is in progress
        view: {},
        isSearching: false,
        keydown: {
          keyHistory: '',
          resetKeyHistory: {
            start: function start() {
              return setTimeout(function () {
                that.selectpicker.keydown.keyHistory = '';
              }, 800);
            }
          }
        }
      };
      this.sizeInfo = {}; // If we have no title yet, try to pull it from the html title attribute (jQuery doesnt' pick it up as it's not a
      // data-attribute)

      if (this.options.title === null) {
        this.options.title = this.$element.attr('title');
      } // Format window padding


      var winPad = this.options.windowPadding;

      if (typeof winPad === 'number') {
        this.options.windowPadding = [winPad, winPad, winPad, winPad];
      } // Expose public methods


      this.val = Selectpicker.prototype.val;
      this.render = Selectpicker.prototype.render;
      this.refresh = Selectpicker.prototype.refresh;
      this.setStyle = Selectpicker.prototype.setStyle;
      this.selectAll = Selectpicker.prototype.selectAll;
      this.deselectAll = Selectpicker.prototype.deselectAll;
      this.destroy = Selectpicker.prototype.destroy;
      this.remove = Selectpicker.prototype.remove;
      this.show = Selectpicker.prototype.show;
      this.hide = Selectpicker.prototype.hide;
      this.init();
    };

    Selectpicker.VERSION = '1.13.18'; // part of this is duplicated in i18n/defaults-en_US.js. Make sure to update both.

    Selectpicker.DEFAULTS = {
      noneSelectedText: 'Nothing selected',
      noneResultsText: 'Ajouter le modèle {0}',
      countSelectedText: function countSelectedText(numSelected, numTotal) {
        return numSelected == 1 ? '{0} item selected' : '{0} items selected';
      },
      maxOptionsText: function maxOptionsText(numAll, numGroup) {
        return [numAll == 1 ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)', numGroup == 1 ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'];
      },
      selectAllText: 'Select All',
      deselectAllText: 'Deselect All',
      doneButton: false,
      doneButtonText: 'Close',
      multipleSeparator: ', ',
      styleBase: 'btn',
      style: classNames.BUTTONCLASS,
      size: 'auto',
      title: null,
      selectedTextFormat: 'values',
      width: false,
      container: false,
      hideDisabled: false,
      showSubtext: false,
      showIcon: true,
      showContent: true,
      dropupAuto: true,
      header: false,
      liveSearch: false,
      liveSearchPlaceholder: null,
      liveSearchNormalize: false,
      liveSearchStyle: 'contains',
      actionsBox: false,
      iconBase: classNames.ICONBASE,
      tickIcon: classNames.TICKICON,
      showTick: false,
      template: {
        caret: '<span class="caret"></span>'
      },
      maxOptions: false,
      mobile: false,
      selectOnTab: false,
      dropdownAlignRight: false,
      windowPadding: 0,
      virtualScroll: 600,
      display: false,
      sanitize: true,
      sanitizeFn: null,
      whiteList: DefaultWhitelist
    };
    Selectpicker.prototype = {
      constructor: Selectpicker,
      init: function init() {
        var that = this,
            id = this.$element.attr('id'),
            element = this.$element[0],
            form = element.form;
        selectId++;
        this.selectId = 'bs-select-' + selectId;
        element.classList.add('bs-select-hidden');
        this.multiple = this.$element.prop('multiple');
        this.autofocus = this.$element.prop('autofocus');

        if (element.classList.contains('show-tick')) {
          this.options.showTick = true;
        }

        this.$newElement = this.createDropdown();
        this.buildData();
        this.$element.after(this.$newElement).prependTo(this.$newElement); // ensure select is associated with form element if it got unlinked after moving it inside newElement

        if (form && element.form === null) {
          if (!form.id) form.id = 'form-' + this.selectId;
          element.setAttribute('form', form.id);
        }

        this.$button = this.$newElement.children('button');
        this.$menu = this.$newElement.children(Selector.MENU);
        this.$menuInner = this.$menu.children('.inner');
        this.$searchbox = this.$menu.find('input');
        element.classList.remove('bs-select-hidden');
        if (this.options.dropdownAlignRight === true) this.$menu[0].classList.add(classNames.MENURIGHT);

        if (typeof id !== 'undefined') {
          this.$button.attr('data-id', id);
        }

        this.checkDisabled();
        this.clickListener();

        if (this.options.liveSearch) {
          this.liveSearchListener();
          this.focusedParent = this.$searchbox[0];
        } else {
          this.focusedParent = this.$menuInner[0];
        }

        this.setStyle();
        this.render();
        this.setWidth();

        if (this.options.container) {
          this.selectPosition();
        } else {
          this.$element.on('hide' + EVENT_KEY, function () {
            if (that.isVirtual()) {
              // empty menu on close
              var menuInner = that.$menuInner[0],
                  emptyMenu = menuInner.firstChild.cloneNode(false); // replace the existing UL with an empty one - this is faster than $.empty() or innerHTML = ''

              menuInner.replaceChild(emptyMenu, menuInner.firstChild);
              menuInner.scrollTop = 0;
            }
          });
        }

        this.$menu.data('this', this);
        this.$newElement.data('this', this);
        if (this.options.mobile) this.mobile();
        this.$newElement.on({
          'hide.bs.dropdown': function hideBsDropdown(e) {
            that.$element.trigger('hide' + EVENT_KEY, e);
          },
          'hidden.bs.dropdown': function hiddenBsDropdown(e) {
            that.$element.trigger('hidden' + EVENT_KEY, e);
          },
          'show.bs.dropdown': function showBsDropdown(e) {
            that.$element.trigger('show' + EVENT_KEY, e);
          },
          'shown.bs.dropdown': function shownBsDropdown(e) {
            that.$element.trigger('shown' + EVENT_KEY, e);
          }
        });

        if (element.hasAttribute('required')) {
          this.$element.on('invalid' + EVENT_KEY, function () {
            that.$button[0].classList.add('bs-invalid');
            that.$element.on('shown' + EVENT_KEY + '.invalid', function () {
              that.$element.val(that.$element.val()) // set the value to hide the validation message in Chrome when menu is opened
              .off('shown' + EVENT_KEY + '.invalid');
            }).on('rendered' + EVENT_KEY, function () {
              // if select is no longer invalid, remove the bs-invalid class
              if (this.validity.valid) that.$button[0].classList.remove('bs-invalid');
              that.$element.off('rendered' + EVENT_KEY);
            });
            that.$button.on('blur' + EVENT_KEY, function () {
              that.$element.trigger('focus').trigger('blur');
              that.$button.off('blur' + EVENT_KEY);
            });
          });
        }

        setTimeout(function () {
          that.buildList();
          that.$element.trigger('loaded' + EVENT_KEY);
        });
      },
      createDropdown: function createDropdown() {
        // Options
        // If we are multiple or showTick option is set, then add the show-tick class
        var showTick = this.multiple || this.options.showTick ? ' show-tick' : '',
            multiselectable = this.multiple ? ' aria-multiselectable="true"' : '',
            inputGroup = '',
            autofocus = this.autofocus ? ' autofocus' : '';

        if (version.major < 4 && this.$element.parent().hasClass('input-group')) {
          inputGroup = ' input-group-btn';
        } // Elements


        var drop,
            header = '',
            searchbox = '',
            actionsbox = '',
            donebutton = '';

        if (this.options.header) {
          header = '<div class="' + classNames.POPOVERHEADER + '">' + '<button type="button" class="close" aria-hidden="true">&times;</button>' + this.options.header + '</div>';
        }

        if (this.options.liveSearch) {
          searchbox = '<div class="bs-searchbox">' + '<input type="search" class="form-control" autocomplete="off"' + (this.options.liveSearchPlaceholder === null ? '' : ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"') + ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list">' + '</div>';
        }

        if (this.multiple && this.options.actionsBox) {
          actionsbox = '<div class="bs-actionsbox">' + '<div class="btn-group btn-group-sm btn-block">' + '<button type="button" class="actions-btn bs-select-all btn ' + classNames.BUTTONCLASS + '">' + this.options.selectAllText + '</button>' + '<button type="button" class="actions-btn bs-deselect-all btn ' + classNames.BUTTONCLASS + '">' + this.options.deselectAllText + '</button>' + '</div>' + '</div>';
        }

        if (this.multiple && this.options.doneButton) {
          donebutton = '<div class="bs-donebutton">' + '<div class="btn-group btn-block">' + '<button type="button" class="btn btn-sm ' + classNames.BUTTONCLASS + '">' + this.options.doneButtonText + '</button>' + '</div>' + '</div>';
        }

        drop = '<div class="dropdown bootstrap-select' + showTick + inputGroup + '">' + '<button type="button" tabindex="-1" class="' + this.options.styleBase + ' dropdown-toggle" ' + (this.options.display === 'static' ? 'data-display="static"' : '') + 'data-toggle="dropdown"' + autofocus + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false">' + '<div class="filter-option">' + '<div class="filter-option-inner">' + '<div class="filter-option-inner-inner"></div>' + '</div> ' + '</div>' + (version.major === '4' ? '' : '<span class="bs-caret">' + this.options.template.caret + '</span>') + '</button>' + '<div class="' + classNames.MENU + ' ' + (version.major === '4' ? '' : classNames.SHOW) + '">' + header + searchbox + actionsbox + '<div class="inner ' + classNames.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + multiselectable + '>' + '<ul class="' + classNames.MENU + ' inner ' + (version.major === '4' ? classNames.SHOW : '') + '" role="presentation">' + '</ul>' + '</div>' + donebutton + '</div>' + '</div>';
        return $(drop);
      },
      setPositionData: function setPositionData() {
        this.selectpicker.view.canHighlight = [];
        this.selectpicker.view.size = 0;
        this.selectpicker.view.firstHighlightIndex = false;

        for (var i = 0; i < this.selectpicker.current.data.length; i++) {
          var li = this.selectpicker.current.data[i],
              canHighlight = true;

          if (li.type === 'divider') {
            canHighlight = false;
            li.height = this.sizeInfo.dividerHeight;
          } else if (li.type === 'optgroup-label') {
            canHighlight = false;
            li.height = this.sizeInfo.dropdownHeaderHeight;
          } else {
            li.height = this.sizeInfo.liHeight;
          }

          if (li.disabled) canHighlight = false;
          this.selectpicker.view.canHighlight.push(canHighlight);

          if (canHighlight) {
            this.selectpicker.view.size++;
            li.posinset = this.selectpicker.view.size;
            if (this.selectpicker.view.firstHighlightIndex === false) this.selectpicker.view.firstHighlightIndex = i;
          }

          li.position = (i === 0 ? 0 : this.selectpicker.current.data[i - 1].position) + li.height;
        }
      },
      isVirtual: function isVirtual() {
        return this.options.virtualScroll !== false && this.selectpicker.main.elements.length >= this.options.virtualScroll || this.options.virtualScroll === true;
      },
      createView: function createView(isSearching, setSize, refresh) {
        var that = this,
            scrollTop = 0,
            active = [],
            selected,
            prevActive;
        this.selectpicker.isSearching = isSearching;
        this.selectpicker.current = isSearching ? this.selectpicker.search : this.selectpicker.main;
        this.setPositionData();

        if (setSize) {
          if (refresh) {
            scrollTop = this.$menuInner[0].scrollTop;
          } else if (!that.multiple) {
            var element = that.$element[0],
                selectedIndex = (element.options[element.selectedIndex] || {}).liIndex;

            if (typeof selectedIndex === 'number' && that.options.size !== false) {
              var selectedData = that.selectpicker.main.data[selectedIndex],
                  position = selectedData && selectedData.position;

              if (position) {
                scrollTop = position - (that.sizeInfo.menuInnerHeight + that.sizeInfo.liHeight) / 2;
              }
            }
          }
        }

        scroll(scrollTop, true);
        this.$menuInner.off('scroll.createView').on('scroll.createView', function (e, updateValue) {
          if (!that.noScroll) scroll(this.scrollTop, updateValue);
          that.noScroll = false;
        });

        function scroll(scrollTop, init) {
          var size = that.selectpicker.current.elements.length,
              chunks = [],
              chunkSize,
              chunkCount,
              firstChunk,
              lastChunk,
              currentChunk,
              prevPositions,
              positionIsDifferent,
              previousElements,
              menuIsDifferent = true,
              isVirtual = that.isVirtual();
          that.selectpicker.view.scrollTop = scrollTop;
          chunkSize = Math.ceil(that.sizeInfo.menuInnerHeight / that.sizeInfo.liHeight * 1.5); // number of options in a chunk

          chunkCount = Math.round(size / chunkSize) || 1; // number of chunks

          for (var i = 0; i < chunkCount; i++) {
            var endOfChunk = (i + 1) * chunkSize;

            if (i === chunkCount - 1) {
              endOfChunk = size;
            }

            chunks[i] = [i * chunkSize + (!i ? 0 : 1), endOfChunk];
            if (!size) break;

            if (currentChunk === undefined && scrollTop - 1 <= that.selectpicker.current.data[endOfChunk - 1].position - that.sizeInfo.menuInnerHeight) {
              currentChunk = i;
            }
          }

          if (currentChunk === undefined) currentChunk = 0;
          prevPositions = [that.selectpicker.view.position0, that.selectpicker.view.position1]; // always display previous, current, and next chunks

          firstChunk = Math.max(0, currentChunk - 1);
          lastChunk = Math.min(chunkCount - 1, currentChunk + 1);
          that.selectpicker.view.position0 = isVirtual === false ? 0 : Math.max(0, chunks[firstChunk][0]) || 0;
          that.selectpicker.view.position1 = isVirtual === false ? size : Math.min(size, chunks[lastChunk][1]) || 0;
          positionIsDifferent = prevPositions[0] !== that.selectpicker.view.position0 || prevPositions[1] !== that.selectpicker.view.position1;

          if (that.activeIndex !== undefined) {
            prevActive = that.selectpicker.main.elements[that.prevActiveIndex];
            active = that.selectpicker.main.elements[that.activeIndex];
            selected = that.selectpicker.main.elements[that.selectedIndex];

            if (init) {
              if (that.activeIndex !== that.selectedIndex) {
                that.defocusItem(active);
              }

              that.activeIndex = undefined;
            }

            if (that.activeIndex && that.activeIndex !== that.selectedIndex) {
              that.defocusItem(selected);
            }
          }

          if (that.prevActiveIndex !== undefined && that.prevActiveIndex !== that.activeIndex && that.prevActiveIndex !== that.selectedIndex) {
            that.defocusItem(prevActive);
          }

          if (init || positionIsDifferent) {
            previousElements = that.selectpicker.view.visibleElements ? that.selectpicker.view.visibleElements.slice() : [];

            if (isVirtual === false) {
              that.selectpicker.view.visibleElements = that.selectpicker.current.elements;
            } else {
              that.selectpicker.view.visibleElements = that.selectpicker.current.elements.slice(that.selectpicker.view.position0, that.selectpicker.view.position1);
            }

            that.setOptionStatus(); // if searching, check to make sure the list has actually been updated before updating DOM
            // this prevents unnecessary repaints

            if (isSearching || isVirtual === false && init) menuIsDifferent = !isEqual(previousElements, that.selectpicker.view.visibleElements); // if virtual scroll is disabled and not searching,
            // menu should never need to be updated more than once

            if ((init || isVirtual === true) && menuIsDifferent) {
              var menuInner = that.$menuInner[0],
                  menuFragment = document.createDocumentFragment(),
                  emptyMenu = menuInner.firstChild.cloneNode(false),
                  marginTop,
                  marginBottom,
                  elements = that.selectpicker.view.visibleElements,
                  toSanitize = []; // replace the existing UL with an empty one - this is faster than $.empty()

              menuInner.replaceChild(emptyMenu, menuInner.firstChild);

              for (var i = 0, visibleElementsLen = elements.length; i < visibleElementsLen; i++) {
                var element = elements[i],
                    elText,
                    elementData;

                if (that.options.sanitize) {
                  elText = element.lastChild;

                  if (elText) {
                    elementData = that.selectpicker.current.data[i + that.selectpicker.view.position0];

                    if (elementData && elementData.content && !elementData.sanitized) {
                      toSanitize.push(elText);
                      elementData.sanitized = true;
                    }
                  }
                }

                menuFragment.appendChild(element);
              }

              if (that.options.sanitize && toSanitize.length) {
                sanitizeHtml(toSanitize, that.options.whiteList, that.options.sanitizeFn);
              }

              if (isVirtual === true) {
                marginTop = that.selectpicker.view.position0 === 0 ? 0 : that.selectpicker.current.data[that.selectpicker.view.position0 - 1].position;
                marginBottom = that.selectpicker.view.position1 > size - 1 ? 0 : that.selectpicker.current.data[size - 1].position - that.selectpicker.current.data[that.selectpicker.view.position1 - 1].position;
                menuInner.firstChild.style.marginTop = marginTop + 'px';
                menuInner.firstChild.style.marginBottom = marginBottom + 'px';
              } else {
                menuInner.firstChild.style.marginTop = 0;
                menuInner.firstChild.style.marginBottom = 0;
              }

              menuInner.firstChild.appendChild(menuFragment); // if an option is encountered that is wider than the current menu width, update the menu width accordingly
              // switch to ResizeObserver with increased browser support

              if (isVirtual === true && that.sizeInfo.hasScrollBar) {
                var menuInnerInnerWidth = menuInner.firstChild.offsetWidth;

                if (init && menuInnerInnerWidth < that.sizeInfo.menuInnerInnerWidth && that.sizeInfo.totalMenuWidth > that.sizeInfo.selectWidth) {
                  menuInner.firstChild.style.minWidth = that.sizeInfo.menuInnerInnerWidth + 'px';
                } else if (menuInnerInnerWidth > that.sizeInfo.menuInnerInnerWidth) {
                  // set to 0 to get actual width of menu
                  that.$menu[0].style.minWidth = 0;
                  var actualMenuWidth = menuInner.firstChild.offsetWidth;

                  if (actualMenuWidth > that.sizeInfo.menuInnerInnerWidth) {
                    that.sizeInfo.menuInnerInnerWidth = actualMenuWidth;
                    menuInner.firstChild.style.minWidth = that.sizeInfo.menuInnerInnerWidth + 'px';
                  } // reset to default CSS styling


                  that.$menu[0].style.minWidth = '';
                }
              }
            }
          }

          that.prevActiveIndex = that.activeIndex;

          if (!that.options.liveSearch) {
            that.$menuInner.trigger('focus');
          } else if (isSearching && init) {
            var index = 0,
                newActive;

            if (!that.selectpicker.view.canHighlight[index]) {
              index = 1 + that.selectpicker.view.canHighlight.slice(1).indexOf(true);
            }

            newActive = that.selectpicker.view.visibleElements[index];
            that.defocusItem(that.selectpicker.view.currentActive);
            that.activeIndex = (that.selectpicker.current.data[index] || {}).index;
            that.focusItem(newActive);
          }
        }

        $(window).off('resize' + EVENT_KEY + '.' + this.selectId + '.createView').on('resize' + EVENT_KEY + '.' + this.selectId + '.createView', function () {
          var isActive = that.$newElement.hasClass(classNames.SHOW);
          if (isActive) scroll(that.$menuInner[0].scrollTop);
        });
      },
      focusItem: function focusItem(li, liData, noStyle) {
        if (li) {
          liData = liData || this.selectpicker.main.data[this.activeIndex];
          var a = li.firstChild;

          if (a) {
            a.setAttribute('aria-setsize', this.selectpicker.view.size);
            a.setAttribute('aria-posinset', liData.posinset);

            if (noStyle !== true) {
              this.focusedParent.setAttribute('aria-activedescendant', a.id);
              li.classList.add('active');
              a.classList.add('active');
            }
          }
        }
      },
      defocusItem: function defocusItem(li) {
        if (li) {
          li.classList.remove('active');
          if (li.firstChild) li.firstChild.classList.remove('active');
        }
      },
      setPlaceholder: function setPlaceholder() {
        var that = this,
            updateIndex = false;

        if (this.options.title && !this.multiple) {
          if (!this.selectpicker.view.titleOption) this.selectpicker.view.titleOption = document.createElement('option'); // this option doesn't create a new <li> element, but does add a new option at the start,
          // so startIndex should increase to prevent having to check every option for the bs-title-option class

          updateIndex = true;
          var element = this.$element[0],
              selectTitleOption = false,
              titleNotAppended = !this.selectpicker.view.titleOption.parentNode,
              selectedIndex = element.selectedIndex,
              selectedOption = element.options[selectedIndex],
              navigation = window.performance && window.performance.getEntriesByType('navigation'),
              // Safari doesn't support getEntriesByType('navigation') - fall back to performance.navigation
          isNotBackForward = navigation && navigation.length ? navigation[0].type !== 'back_forward' : window.performance.navigation.type !== 2;

          if (titleNotAppended) {
            // Use native JS to prepend option (faster)
            this.selectpicker.view.titleOption.className = 'bs-title-option';
            this.selectpicker.view.titleOption.value = ''; // Check if selected or data-selected attribute is already set on an option. If not, select the titleOption option.
            // the selected item may have been changed by user or programmatically before the bootstrap select plugin runs,
            // if so, the select will have the data-selected attribute

            selectTitleOption = !selectedOption || selectedIndex === 0 && selectedOption.defaultSelected === false && this.$element.data('selected') === undefined;
          }

          if (titleNotAppended || this.selectpicker.view.titleOption.index !== 0) {
            element.insertBefore(this.selectpicker.view.titleOption, element.firstChild);
          } // Set selected *after* appending to select,
          // otherwise the option doesn't get selected in IE
          // set using selectedIndex, as setting the selected attr to true here doesn't work in IE11


          if (selectTitleOption && isNotBackForward) {
            element.selectedIndex = 0;
          } else if (document.readyState !== 'complete') {
            // if navigation type is back_forward, there's a chance the select will have its value set by BFCache
            // wait for that value to be set, then run render again
            window.addEventListener('pageshow', function () {
              if (that.selectpicker.view.displayedValue !== element.value) that.render();
            });
          }
        }

        return updateIndex;
      },
      buildData: function buildData() {
        var optionSelector = ':not([hidden]):not([data-hidden="true"])',
            mainData = [],
            optID = 0,
            startIndex = this.setPlaceholder() ? 1 : 0; // append the titleOption if necessary and skip the first option in the loop

        if (this.options.hideDisabled) optionSelector += ':not(:disabled)';
        var selectOptions = this.$element[0].querySelectorAll('select > *' + optionSelector);

        function addDivider(config) {
          var previousData = mainData[mainData.length - 1]; // ensure optgroup doesn't create back-to-back dividers

          if (previousData && previousData.type === 'divider' && (previousData.optID || config.optID)) {
            return;
          }

          config = config || {};
          config.type = 'divider';
          mainData.push(config);
        }

        function addOption(option, config) {
          config = config || {};
          config.divider = option.getAttribute('data-divider') === 'true';

          if (config.divider) {
            addDivider({
              optID: config.optID
            });
          } else {
            var liIndex = mainData.length,
                cssText = option.style.cssText,
                inlineStyle = cssText ? htmlEscape(cssText) : '',
                optionClass = (option.className || '') + (config.optgroupClass || '');
            if (config.optID) optionClass = 'opt ' + optionClass;
            config.optionClass = optionClass.trim();
            config.inlineStyle = inlineStyle;
            config.text = option.textContent;
            config.content = option.getAttribute('data-content');
            config.tokens = option.getAttribute('data-tokens');
            config.subtext = option.getAttribute('data-subtext');
            config.icon = option.getAttribute('data-icon');
            option.liIndex = liIndex;
            config.display = config.content || config.text;
            config.type = 'option';
            config.index = liIndex;
            config.option = option;
            config.selected = !!option.selected;
            config.disabled = config.disabled || !!option.disabled;
            mainData.push(config);
          }
        }

        function addOptgroup(index, selectOptions) {
          var optgroup = selectOptions[index],
              // skip placeholder option
          previous = index - 1 < startIndex ? false : selectOptions[index - 1],
              next = selectOptions[index + 1],
              options = optgroup.querySelectorAll('option' + optionSelector);
          if (!options.length) return;
          var config = {
            display: htmlEscape(optgroup.label),
            subtext: optgroup.getAttribute('data-subtext'),
            icon: optgroup.getAttribute('data-icon'),
            type: 'optgroup-label',
            optgroupClass: ' ' + (optgroup.className || '')
          },
              headerIndex,
              lastIndex;
          optID++;

          if (previous) {
            addDivider({
              optID: optID
            });
          }

          config.optID = optID;
          mainData.push(config);

          for (var j = 0, len = options.length; j < len; j++) {
            var option = options[j];

            if (j === 0) {
              headerIndex = mainData.length - 1;
              lastIndex = headerIndex + len;
            }

            addOption(option, {
              headerIndex: headerIndex,
              lastIndex: lastIndex,
              optID: config.optID,
              optgroupClass: config.optgroupClass,
              disabled: optgroup.disabled
            });
          }

          if (next) {
            addDivider({
              optID: optID
            });
          }
        }

        for (var len = selectOptions.length, i = startIndex; i < len; i++) {
          var item = selectOptions[i];

          if (item.tagName !== 'OPTGROUP') {
            addOption(item, {});
          } else {
            addOptgroup(i, selectOptions);
          }
        }

        this.selectpicker.main.data = this.selectpicker.current.data = mainData;
      },
      buildList: function buildList() {
        var that = this,
            selectData = this.selectpicker.main.data,
            mainElements = [],
            widestOptionLength = 0;

        if ((that.options.showTick || that.multiple) && !elementTemplates.checkMark.parentNode) {
          elementTemplates.checkMark.className = this.options.iconBase + ' ' + that.options.tickIcon + ' check-mark';
          elementTemplates.a.appendChild(elementTemplates.checkMark);
        }

        function buildElement(item) {
          var liElement,
              combinedLength = 0;

          switch (item.type) {
            case 'divider':
              liElement = generateOption.li(false, classNames.DIVIDER, item.optID ? item.optID + 'div' : undefined);
              break;

            case 'option':
              liElement = generateOption.li(generateOption.a(generateOption.text.call(that, item), item.optionClass, item.inlineStyle), '', item.optID);

              if (liElement.firstChild) {
                liElement.firstChild.id = that.selectId + '-' + item.index;
              }

              break;

            case 'optgroup-label':
              liElement = generateOption.li(generateOption.label.call(that, item), 'dropdown-header' + item.optgroupClass, item.optID);
              break;
          }

          item.element = liElement;
          mainElements.push(liElement); // count the number of characters in the option - not perfect, but should work in most cases

          if (item.display) combinedLength += item.display.length;
          if (item.subtext) combinedLength += item.subtext.length; // if there is an icon, ensure this option's width is checked

          if (item.icon) combinedLength += 1;

          if (combinedLength > widestOptionLength) {
            widestOptionLength = combinedLength; // guess which option is the widest
            // use this when calculating menu width
            // not perfect, but it's fast, and the width will be updating accordingly when scrolling

            that.selectpicker.view.widestOption = mainElements[mainElements.length - 1];
          }
        }

        for (var len = selectData.length, i = 0; i < len; i++) {
          var item = selectData[i];
          buildElement(item);
        }

        this.selectpicker.main.elements = this.selectpicker.current.elements = mainElements;
      },
      findLis: function findLis() {
        return this.$menuInner.find('.inner > li');
      },
      render: function render() {
        var that = this,
            element = this.$element[0],
            // ensure titleOption is appended and selected (if necessary) before getting selectedOptions
        placeholderSelected = this.setPlaceholder() && element.selectedIndex === 0,
            selectedOptions = getSelectedOptions(element, this.options.hideDisabled),
            selectedCount = selectedOptions.length,
            button = this.$button[0],
            buttonInner = button.querySelector('.filter-option-inner-inner'),
            multipleSeparator = document.createTextNode(this.options.multipleSeparator),
            titleFragment = elementTemplates.fragment.cloneNode(false),
            showCount,
            countMax,
            hasContent = false;
        button.classList.toggle('bs-placeholder', that.multiple ? !selectedCount : !getSelectValues(element, selectedOptions));

        if (!that.multiple && selectedOptions.length === 1) {
          that.selectpicker.view.displayedValue = getSelectValues(element, selectedOptions);
        }

        if (this.options.selectedTextFormat === 'static') {
          titleFragment = generateOption.text.call(this, {
            text: this.options.title
          }, true);
        } else {
          showCount = this.multiple && this.options.selectedTextFormat.indexOf('count') !== -1 && selectedCount > 1; // determine if the number of selected options will be shown (showCount === true)

          if (showCount) {
            countMax = this.options.selectedTextFormat.split('>');
            showCount = countMax.length > 1 && selectedCount > countMax[1] || countMax.length === 1 && selectedCount >= 2;
          } // only loop through all selected options if the count won't be shown


          if (showCount === false) {
            if (!placeholderSelected) {
              for (var selectedIndex = 0; selectedIndex < selectedCount; selectedIndex++) {
                if (selectedIndex < 50) {
                  var option = selectedOptions[selectedIndex],
                      thisData = this.selectpicker.main.data[option.liIndex],
                      titleOptions = {};

                  if (this.multiple && selectedIndex > 0) {
                    titleFragment.appendChild(multipleSeparator.cloneNode(false));
                  }

                  if (option.title) {
                    titleOptions.text = option.title;
                  } else if (thisData) {
                    if (thisData.content && that.options.showContent) {
                      titleOptions.content = thisData.content.toString();
                      hasContent = true;
                    } else {
                      if (that.options.showIcon) {
                        titleOptions.icon = thisData.icon;
                      }

                      if (that.options.showSubtext && !that.multiple && thisData.subtext) titleOptions.subtext = ' ' + thisData.subtext;
                      titleOptions.text = option.textContent.trim();
                    }
                  }

                  titleFragment.appendChild(generateOption.text.call(this, titleOptions, true));
                } else {
                  break;
                }
              } // add ellipsis


              if (selectedCount > 49) {
                titleFragment.appendChild(document.createTextNode('...'));
              }
            }
          } else {
            var optionSelector = ':not([hidden]):not([data-hidden="true"]):not([data-divider="true"])';
            if (this.options.hideDisabled) optionSelector += ':not(:disabled)'; // If this is a multiselect, and selectedTextFormat is count, then show 1 of 2 selected, etc.

            var totalCount = this.$element[0].querySelectorAll('select > option' + optionSelector + ', optgroup' + optionSelector + ' option' + optionSelector).length,
                tr8nText = typeof this.options.countSelectedText === 'function' ? this.options.countSelectedText(selectedCount, totalCount) : this.options.countSelectedText;
            titleFragment = generateOption.text.call(this, {
              text: tr8nText.replace('{0}', selectedCount.toString()).replace('{1}', totalCount.toString())
            }, true);
          }
        }

        if (this.options.title == undefined) {
          // use .attr to ensure undefined is returned if title attribute is not set
          this.options.title = this.$element.attr('title');
        } // If the select doesn't have a title, then use the default, or if nothing is set at all, use noneSelectedText


        if (!titleFragment.childNodes.length) {
          titleFragment = generateOption.text.call(this, {
            text: typeof this.options.title !== 'undefined' ? this.options.title : this.options.noneSelectedText
          }, true);
        } // strip all HTML tags and trim the result, then unescape any escaped tags


        button.title = titleFragment.textContent.replace(/<[^>]*>?/g, '').trim();

        if (this.options.sanitize && hasContent) {
          sanitizeHtml([titleFragment], that.options.whiteList, that.options.sanitizeFn);
        }

        buttonInner.innerHTML = '';
        buttonInner.appendChild(titleFragment);

        if (version.major < 4 && this.$newElement[0].classList.contains('bs3-has-addon')) {
          var filterExpand = button.querySelector('.filter-expand'),
              clone = buttonInner.cloneNode(true);
          clone.className = 'filter-expand';

          if (filterExpand) {
            button.replaceChild(clone, filterExpand);
          } else {
            button.appendChild(clone);
          }
        }

        this.$element.trigger('rendered' + EVENT_KEY);
      },

      /**
       * @param [style]
       * @param [status]
       */
      setStyle: function setStyle(newStyle, status) {
        var button = this.$button[0],
            newElement = this.$newElement[0],
            style = this.options.style.trim(),
            buttonClass;

        if (this.$element.attr('class')) {
          this.$newElement.addClass(this.$element.attr('class').replace(/selectpicker|mobile-device|bs-select-hidden|validate\[.*\]/gi, ''));
        }

        if (version.major < 4) {
          newElement.classList.add('bs3');

          if (newElement.parentNode.classList && newElement.parentNode.classList.contains('input-group') && (newElement.previousElementSibling || newElement.nextElementSibling) && (newElement.previousElementSibling || newElement.nextElementSibling).classList.contains('input-group-addon')) {
            newElement.classList.add('bs3-has-addon');
          }
        }

        if (newStyle) {
          buttonClass = newStyle.trim();
        } else {
          buttonClass = style;
        }

        if (status == 'add') {
          if (buttonClass) button.classList.add.apply(button.classList, buttonClass.split(' '));
        } else if (status == 'remove') {
          if (buttonClass) button.classList.remove.apply(button.classList, buttonClass.split(' '));
        } else {
          if (style) button.classList.remove.apply(button.classList, style.split(' '));
          if (buttonClass) button.classList.add.apply(button.classList, buttonClass.split(' '));
        }
      },
      liHeight: function liHeight(refresh) {
        if (!refresh && (this.options.size === false || Object.keys(this.sizeInfo).length)) return;
        var newElement = elementTemplates.div.cloneNode(false),
            menu = elementTemplates.div.cloneNode(false),
            menuInner = elementTemplates.div.cloneNode(false),
            menuInnerInner = document.createElement('ul'),
            divider = elementTemplates.li.cloneNode(false),
            dropdownHeader = elementTemplates.li.cloneNode(false),
            li,
            a = elementTemplates.a.cloneNode(false),
            text = elementTemplates.span.cloneNode(false),
            header = this.options.header && this.$menu.find('.' + classNames.POPOVERHEADER).length > 0 ? this.$menu.find('.' + classNames.POPOVERHEADER)[0].cloneNode(true) : null,
            search = this.options.liveSearch ? elementTemplates.div.cloneNode(false) : null,
            actions = this.options.actionsBox && this.multiple && this.$menu.find('.bs-actionsbox').length > 0 ? this.$menu.find('.bs-actionsbox')[0].cloneNode(true) : null,
            doneButton = this.options.doneButton && this.multiple && this.$menu.find('.bs-donebutton').length > 0 ? this.$menu.find('.bs-donebutton')[0].cloneNode(true) : null,
            firstOption = this.$element.find('option')[0];
        this.sizeInfo.selectWidth = this.$newElement[0].offsetWidth;
        text.className = 'text';
        a.className = 'dropdown-item ' + (firstOption ? firstOption.className : '');
        newElement.className = this.$menu[0].parentNode.className + ' ' + classNames.SHOW;
        newElement.style.width = 0; // ensure button width doesn't affect natural width of menu when calculating

        if (this.options.width === 'auto') menu.style.minWidth = 0;
        menu.className = classNames.MENU + ' ' + classNames.SHOW;
        menuInner.className = 'inner ' + classNames.SHOW;
        menuInnerInner.className = classNames.MENU + ' inner ' + (version.major === '4' ? classNames.SHOW : '');
        divider.className = classNames.DIVIDER;
        dropdownHeader.className = 'dropdown-header';
        text.appendChild(document.createTextNode("\u200B"));

        if (this.selectpicker.current.data.length) {
          for (var i = 0; i < this.selectpicker.current.data.length; i++) {
            var data = this.selectpicker.current.data[i];

            if (data.type === 'option') {
              li = data.element;
              break;
            }
          }
        } else {
          li = elementTemplates.li.cloneNode(false);
          a.appendChild(text);
          li.appendChild(a);
        }

        dropdownHeader.appendChild(text.cloneNode(true));

        if (this.selectpicker.view.widestOption) {
          menuInnerInner.appendChild(this.selectpicker.view.widestOption.cloneNode(true));
        }

        menuInnerInner.appendChild(li);
        menuInnerInner.appendChild(divider);
        menuInnerInner.appendChild(dropdownHeader);
        if (header) menu.appendChild(header);

        if (search) {
          var input = document.createElement('input');
          search.className = 'bs-searchbox';
          input.className = 'form-control';
          search.appendChild(input);
          menu.appendChild(search);
        }

        if (actions) menu.appendChild(actions);
        menuInner.appendChild(menuInnerInner);
        menu.appendChild(menuInner);
        if (doneButton) menu.appendChild(doneButton);
        newElement.appendChild(menu);
        document.body.appendChild(newElement);
        var liHeight = li.offsetHeight,
            dropdownHeaderHeight = dropdownHeader ? dropdownHeader.offsetHeight : 0,
            headerHeight = header ? header.offsetHeight : 0,
            searchHeight = search ? search.offsetHeight : 0,
            actionsHeight = actions ? actions.offsetHeight : 0,
            doneButtonHeight = doneButton ? doneButton.offsetHeight : 0,
            dividerHeight = $(divider).outerHeight(true),
            // fall back to jQuery if getComputedStyle is not supported
        menuStyle = window.getComputedStyle ? window.getComputedStyle(menu) : false,
            menuWidth = menu.offsetWidth,
            $menu = menuStyle ? null : $(menu),
            menuPadding = {
          vert: toInteger(menuStyle ? menuStyle.paddingTop : $menu.css('paddingTop')) + toInteger(menuStyle ? menuStyle.paddingBottom : $menu.css('paddingBottom')) + toInteger(menuStyle ? menuStyle.borderTopWidth : $menu.css('borderTopWidth')) + toInteger(menuStyle ? menuStyle.borderBottomWidth : $menu.css('borderBottomWidth')),
          horiz: toInteger(menuStyle ? menuStyle.paddingLeft : $menu.css('paddingLeft')) + toInteger(menuStyle ? menuStyle.paddingRight : $menu.css('paddingRight')) + toInteger(menuStyle ? menuStyle.borderLeftWidth : $menu.css('borderLeftWidth')) + toInteger(menuStyle ? menuStyle.borderRightWidth : $menu.css('borderRightWidth'))
        },
            menuExtras = {
          vert: menuPadding.vert + toInteger(menuStyle ? menuStyle.marginTop : $menu.css('marginTop')) + toInteger(menuStyle ? menuStyle.marginBottom : $menu.css('marginBottom')) + 2,
          horiz: menuPadding.horiz + toInteger(menuStyle ? menuStyle.marginLeft : $menu.css('marginLeft')) + toInteger(menuStyle ? menuStyle.marginRight : $menu.css('marginRight')) + 2
        },
            scrollBarWidth;
        menuInner.style.overflowY = 'scroll';
        scrollBarWidth = menu.offsetWidth - menuWidth;
        document.body.removeChild(newElement);
        this.sizeInfo.liHeight = liHeight;
        this.sizeInfo.dropdownHeaderHeight = dropdownHeaderHeight;
        this.sizeInfo.headerHeight = headerHeight;
        this.sizeInfo.searchHeight = searchHeight;
        this.sizeInfo.actionsHeight = actionsHeight;
        this.sizeInfo.doneButtonHeight = doneButtonHeight;
        this.sizeInfo.dividerHeight = dividerHeight;
        this.sizeInfo.menuPadding = menuPadding;
        this.sizeInfo.menuExtras = menuExtras;
        this.sizeInfo.menuWidth = menuWidth;
        this.sizeInfo.menuInnerInnerWidth = menuWidth - menuPadding.horiz;
        this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth;
        this.sizeInfo.scrollBarWidth = scrollBarWidth;
        this.sizeInfo.selectHeight = this.$newElement[0].offsetHeight;
        this.setPositionData();
      },
      getSelectPosition: function getSelectPosition() {
        var that = this,
            $window = $(window),
            pos = that.$newElement.offset(),
            $container = $(that.options.container),
            containerPos;

        if (that.options.container && $container.length && !$container.is('body')) {
          containerPos = $container.offset();
          containerPos.top += parseInt($container.css('borderTopWidth'));
          containerPos.left += parseInt($container.css('borderLeftWidth'));
        } else {
          containerPos = {
            top: 0,
            left: 0
          };
        }

        var winPad = that.options.windowPadding;
        this.sizeInfo.selectOffsetTop = pos.top - containerPos.top - $window.scrollTop();
        this.sizeInfo.selectOffsetBot = $window.height() - this.sizeInfo.selectOffsetTop - this.sizeInfo.selectHeight - containerPos.top - winPad[2];
        this.sizeInfo.selectOffsetLeft = pos.left - containerPos.left - $window.scrollLeft();
        this.sizeInfo.selectOffsetRight = $window.width() - this.sizeInfo.selectOffsetLeft - this.sizeInfo.selectWidth - containerPos.left - winPad[1];
        this.sizeInfo.selectOffsetTop -= winPad[0];
        this.sizeInfo.selectOffsetLeft -= winPad[3];
      },
      setMenuSize: function setMenuSize(isAuto) {
        this.getSelectPosition();

        var selectWidth = this.sizeInfo.selectWidth,
            liHeight = this.sizeInfo.liHeight,
            headerHeight = this.sizeInfo.headerHeight,
            searchHeight = this.sizeInfo.searchHeight,
            actionsHeight = this.sizeInfo.actionsHeight,
            doneButtonHeight = this.sizeInfo.doneButtonHeight,
            divHeight = this.sizeInfo.dividerHeight,
            menuPadding = this.sizeInfo.menuPadding,
            menuInnerHeight,
            menuHeight,
            divLength = 0,
            minHeight,
            _minHeight,
            maxHeight,
            menuInnerMinHeight,
            estimate,
            isDropup;

        if (this.options.dropupAuto) {
          // Get the estimated height of the menu without scrollbars.
          // This is useful for smaller menus, where there might be plenty of room
          // below the button without setting dropup, but we can't know
          // the exact height of the menu until createView is called later
          estimate = liHeight * this.selectpicker.current.elements.length + menuPadding.vert;
          isDropup = this.sizeInfo.selectOffsetTop - this.sizeInfo.selectOffsetBot > this.sizeInfo.menuExtras.vert && estimate + this.sizeInfo.menuExtras.vert + 50 > this.sizeInfo.selectOffsetBot; // ensure dropup doesn't change while searching (so menu doesn't bounce back and forth)

          if (this.selectpicker.isSearching === true) {
            isDropup = this.selectpicker.dropup;
          }

          this.$newElement.toggleClass(classNames.DROPUP, isDropup);
          this.selectpicker.dropup = isDropup;
        }

        if (this.options.size === 'auto') {
          _minHeight = this.selectpicker.current.elements.length > 3 ? this.sizeInfo.liHeight * 3 + this.sizeInfo.menuExtras.vert - 2 : 0;
          menuHeight = this.sizeInfo.selectOffsetBot - this.sizeInfo.menuExtras.vert;
          minHeight = _minHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight;
          menuInnerMinHeight = Math.max(_minHeight - menuPadding.vert, 0);

          if (this.$newElement.hasClass(classNames.DROPUP)) {
            menuHeight = this.sizeInfo.selectOffsetTop - this.sizeInfo.menuExtras.vert;
          }

          maxHeight = menuHeight;
          menuInnerHeight = menuHeight - headerHeight - searchHeight - actionsHeight - doneButtonHeight - menuPadding.vert;
        } else if (this.options.size && this.options.size != 'auto' && this.selectpicker.current.elements.length > this.options.size) {
          for (var i = 0; i < this.options.size; i++) {
            if (this.selectpicker.current.data[i].type === 'divider') divLength++;
          }

          menuHeight = liHeight * this.options.size + divLength * divHeight + menuPadding.vert;
          menuInnerHeight = menuHeight - menuPadding.vert;
          maxHeight = menuHeight + headerHeight + searchHeight + actionsHeight + doneButtonHeight;
          minHeight = menuInnerMinHeight = '';
        }

        this.$menu.css({
          'max-height': maxHeight + 'px',
          'overflow': 'hidden',
          'min-height': minHeight + 'px'
        });
        this.$menuInner.css({
          'max-height': menuInnerHeight + 'px',
          'overflow-y': 'auto',
          'min-height': menuInnerMinHeight + 'px'
        }); // ensure menuInnerHeight is always a positive number to prevent issues calculating chunkSize in createView

        this.sizeInfo.menuInnerHeight = Math.max(menuInnerHeight, 1);

        if (this.selectpicker.current.data.length && this.selectpicker.current.data[this.selectpicker.current.data.length - 1].position > this.sizeInfo.menuInnerHeight) {
          this.sizeInfo.hasScrollBar = true;
          this.sizeInfo.totalMenuWidth = this.sizeInfo.menuWidth + this.sizeInfo.scrollBarWidth;
        }

        if (this.options.dropdownAlignRight === 'auto') {
          this.$menu.toggleClass(classNames.MENURIGHT, this.sizeInfo.selectOffsetLeft > this.sizeInfo.selectOffsetRight && this.sizeInfo.selectOffsetRight < this.sizeInfo.totalMenuWidth - selectWidth);
        }

        if (this.dropdown && this.dropdown._popper) this.dropdown._popper.update();
      },
      setSize: function setSize(refresh) {
        this.liHeight(refresh);
        if (this.options.header) this.$menu.css('padding-top', 0);

        if (this.options.size !== false) {
          var that = this,
              $window = $(window);
          this.setMenuSize();

          if (this.options.liveSearch) {
            this.$searchbox.off('input.setMenuSize propertychange.setMenuSize').on('input.setMenuSize propertychange.setMenuSize', function () {
              return that.setMenuSize();
            });
          }

          if (this.options.size === 'auto') {
            $window.off('resize' + EVENT_KEY + '.' + this.selectId + '.setMenuSize' + ' scroll' + EVENT_KEY + '.' + this.selectId + '.setMenuSize').on('resize' + EVENT_KEY + '.' + this.selectId + '.setMenuSize' + ' scroll' + EVENT_KEY + '.' + this.selectId + '.setMenuSize', function () {
              return that.setMenuSize();
            });
          } else if (this.options.size && this.options.size != 'auto' && this.selectpicker.current.elements.length > this.options.size) {
            $window.off('resize' + EVENT_KEY + '.' + this.selectId + '.setMenuSize' + ' scroll' + EVENT_KEY + '.' + this.selectId + '.setMenuSize');
          }
        }

        this.createView(false, true, refresh);
      },
      setWidth: function setWidth() {
        var that = this;

        if (this.options.width === 'auto') {
          requestAnimationFrame(function () {
            that.$menu.css('min-width', '0');
            that.$element.on('loaded' + EVENT_KEY, function () {
              that.liHeight();
              that.setMenuSize(); // Get correct width if element is hidden

              var $selectClone = that.$newElement.clone().appendTo('body'),
                  btnWidth = $selectClone.css('width', 'auto').children('button').outerWidth();
              $selectClone.remove(); // Set width to whatever's larger, button title or longest option

              that.sizeInfo.selectWidth = Math.max(that.sizeInfo.totalMenuWidth, btnWidth);
              that.$newElement.css('width', that.sizeInfo.selectWidth + 'px');
            });
          });
        } else if (this.options.width === 'fit') {
          // Remove inline min-width so width can be changed from 'auto'
          this.$menu.css('min-width', '');
          this.$newElement.css('width', '').addClass('fit-width');
        } else if (this.options.width) {
          // Remove inline min-width so width can be changed from 'auto'
          this.$menu.css('min-width', '');
          this.$newElement.css('width', this.options.width);
        } else {
          // Remove inline min-width/width so width can be changed
          this.$menu.css('min-width', '');
          this.$newElement.css('width', '');
        } // Remove fit-width class if width is changed programmatically


        if (this.$newElement.hasClass('fit-width') && this.options.width !== 'fit') {
          this.$newElement[0].classList.remove('fit-width');
        }
      },
      selectPosition: function selectPosition() {
        this.$bsContainer = $('<div class="bs-container" />');

        var that = this,
            $container = $(this.options.container),
            pos,
            containerPos,
            actualHeight,
            getPlacement = function getPlacement($element) {
          var containerPosition = {},
              // fall back to dropdown's default display setting if display is not manually set
          display = that.options.display || ( // Bootstrap 3 doesn't have $.fn.dropdown.Constructor.Default
          $.fn.dropdown.Constructor.Default ? $.fn.dropdown.Constructor.Default.display : false);
          that.$bsContainer.addClass($element.attr('class').replace(/form-control|fit-width/gi, '')).toggleClass(classNames.DROPUP, $element.hasClass(classNames.DROPUP));
          pos = $element.offset();

          if (!$container.is('body')) {
            containerPos = $container.offset();
            containerPos.top += parseInt($container.css('borderTopWidth')) - $container.scrollTop();
            containerPos.left += parseInt($container.css('borderLeftWidth')) - $container.scrollLeft();
          } else {
            containerPos = {
              top: 0,
              left: 0
            };
          }

          actualHeight = $element.hasClass(classNames.DROPUP) ? 0 : $element[0].offsetHeight; // Bootstrap 4+ uses Popper for menu positioning

          if (version.major < 4 || display === 'static') {
            containerPosition.top = pos.top - containerPos.top + actualHeight;
            containerPosition.left = pos.left - containerPos.left;
          }

          containerPosition.width = $element[0].offsetWidth;
          that.$bsContainer.css(containerPosition);
        };

        this.$button.on('click.bs.dropdown.data-api', function () {
          if (that.isDisabled()) {
            return;
          }

          getPlacement(that.$newElement);
          that.$bsContainer.appendTo(that.options.container).toggleClass(classNames.SHOW, !that.$button.hasClass(classNames.SHOW)).append(that.$menu);
        });
        $(window).off('resize' + EVENT_KEY + '.' + this.selectId + ' scroll' + EVENT_KEY + '.' + this.selectId).on('resize' + EVENT_KEY + '.' + this.selectId + ' scroll' + EVENT_KEY + '.' + this.selectId, function () {
          var isActive = that.$newElement.hasClass(classNames.SHOW);
          if (isActive) getPlacement(that.$newElement);
        });
        this.$element.on('hide' + EVENT_KEY, function () {
          that.$menu.data('height', that.$menu.height());
          that.$bsContainer.detach();
        });
      },
      setOptionStatus: function setOptionStatus(selectedOnly) {
        var that = this;
        that.noScroll = false;

        if (that.selectpicker.view.visibleElements && that.selectpicker.view.visibleElements.length) {
          for (var i = 0; i < that.selectpicker.view.visibleElements.length; i++) {
            var liData = that.selectpicker.current.data[i + that.selectpicker.view.position0],
                option = liData.option;

            if (option) {
              if (selectedOnly !== true) {
                that.setDisabled(liData.index, liData.disabled);
              }

              that.setSelected(liData.index, option.selected);
            }
          }
        }
      },

      /**
       * @param {number} index - the index of the option that is being changed
       * @param {boolean} selected - true if the option is being selected, false if being deselected
       */
      setSelected: function setSelected(index, selected) {
        var li = this.selectpicker.main.elements[index],
            liData = this.selectpicker.main.data[index],
            activeIndexIsSet = this.activeIndex !== undefined,
            thisIsActive = this.activeIndex === index,
            prevActive,
            a,
            // if current option is already active
        // OR
        // if the current option is being selected, it's NOT multiple, and
        // activeIndex is undefined:
        //  - when the menu is first being opened, OR
        //  - after a search has been performed, OR
        //  - when retainActive is false when selecting a new option (i.e. index of the newly selected option is not the same as the current activeIndex)
        keepActive = thisIsActive || selected && !this.multiple && !activeIndexIsSet;
        liData.selected = selected;
        a = li.firstChild;

        if (selected) {
          this.selectedIndex = index;
        }

        li.classList.toggle('selected', selected);

        if (keepActive) {
          this.focusItem(li, liData);
          this.selectpicker.view.currentActive = li;
          this.activeIndex = index;
        } else {
          this.defocusItem(li);
        }

        if (a) {
          a.classList.toggle('selected', selected);

          if (selected) {
            a.setAttribute('aria-selected', true);
          } else {
            if (this.multiple) {
              a.setAttribute('aria-selected', false);
            } else {
              a.removeAttribute('aria-selected');
            }
          }
        }

        if (!keepActive && !activeIndexIsSet && selected && this.prevActiveIndex !== undefined) {
          prevActive = this.selectpicker.main.elements[this.prevActiveIndex];
          this.defocusItem(prevActive);
        }
      },

      /**
       * @param {number} index - the index of the option that is being disabled
       * @param {boolean} disabled - true if the option is being disabled, false if being enabled
       */
      setDisabled: function setDisabled(index, disabled) {
        var li = this.selectpicker.main.elements[index],
            a;
        this.selectpicker.main.data[index].disabled = disabled;
        a = li.firstChild;
        li.classList.toggle(classNames.DISABLED, disabled);

        if (a) {
          if (version.major === '4') a.classList.toggle(classNames.DISABLED, disabled);

          if (disabled) {
            a.setAttribute('aria-disabled', disabled);
            a.setAttribute('tabindex', -1);
          } else {
            a.removeAttribute('aria-disabled');
            a.setAttribute('tabindex', 0);
          }
        }
      },
      isDisabled: function isDisabled() {
        return this.$element[0].disabled;
      },
      checkDisabled: function checkDisabled() {
        if (this.isDisabled()) {
          this.$newElement[0].classList.add(classNames.DISABLED);
          this.$button.addClass(classNames.DISABLED).attr('aria-disabled', true);
        } else {
          if (this.$button[0].classList.contains(classNames.DISABLED)) {
            this.$newElement[0].classList.remove(classNames.DISABLED);
            this.$button.removeClass(classNames.DISABLED).attr('aria-disabled', false);
          }
        }
      },
      clickListener: function clickListener() {
        var that = this,
            $document = $(document);
        $document.data('spaceSelect', false);
        this.$button.on('keyup', function (e) {
          if (/(32)/.test(e.keyCode.toString(10)) && $document.data('spaceSelect')) {
            e.preventDefault();
            $document.data('spaceSelect', false);
          }
        });
        this.$newElement.on('show.bs.dropdown', function () {
          if (version.major > 3 && !that.dropdown) {
            that.dropdown = that.$button.data('bs.dropdown');
            that.dropdown._menu = that.$menu[0];
          }
        });
        this.$button.on('click.bs.dropdown.data-api', function () {
          if (!that.$newElement.hasClass(classNames.SHOW)) {
            that.setSize();
          }
        });

        function setFocus() {
          if (that.options.liveSearch) {
            that.$searchbox.trigger('focus');
          } else {
            that.$menuInner.trigger('focus');
          }
        }

        function checkPopperExists() {
          if (that.dropdown && that.dropdown._popper && that.dropdown._popper.state.isCreated) {
            setFocus();
          } else {
            requestAnimationFrame(checkPopperExists);
          }
        }

        this.$element.on('shown' + EVENT_KEY, function () {
          if (that.$menuInner[0].scrollTop !== that.selectpicker.view.scrollTop) {
            that.$menuInner[0].scrollTop = that.selectpicker.view.scrollTop;
          }

          if (version.major > 3) {
            requestAnimationFrame(checkPopperExists);
          } else {
            setFocus();
          }
        }); // ensure posinset and setsize are correct before selecting an option via a click

        this.$menuInner.on('mouseenter', 'li a', function (e) {
          var hoverLi = this.parentElement,
              position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0,
              index = Array.prototype.indexOf.call(hoverLi.parentElement.children, hoverLi),
              hoverData = that.selectpicker.current.data[index + position0];
          that.focusItem(hoverLi, hoverData, true);
        });
        this.$menuInner.on('click', 'li a', function (e, retainActive) {
          var $this = $(this),
              element = that.$element[0],
              position0 = that.isVirtual() ? that.selectpicker.view.position0 : 0,
              clickedData = that.selectpicker.current.data[$this.parent().index() + position0],
              clickedIndex = clickedData.index,
              prevValue = getSelectValues(element),
              prevIndex = element.selectedIndex,
              prevOption = element.options[prevIndex],
              triggerChange = true; // Don't close on multi choice menu

          if (that.multiple && that.options.maxOptions !== 1) {
            e.stopPropagation();
          }

          e.preventDefault(); // Don't run if the select is disabled

          if (!that.isDisabled() && !$this.parent().hasClass(classNames.DISABLED)) {
            var option = clickedData.option,
                $option = $(option),
                state = option.selected,
                $optgroup = $option.parent('optgroup'),
                $optgroupOptions = $optgroup.find('option'),
                maxOptions = that.options.maxOptions,
                maxOptionsGrp = $optgroup.data('maxOptions') || false;
            if (clickedIndex === that.activeIndex) retainActive = true;

            if (!retainActive) {
              that.prevActiveIndex = that.activeIndex;
              that.activeIndex = undefined;
            }

            if (!that.multiple) {
              // Deselect all others if not multi select box
              if (prevOption) prevOption.selected = false;
              option.selected = true;
              that.setSelected(clickedIndex, true);
            } else {
              // Toggle the one we have chosen if we are multi select.
              option.selected = !state;
              that.setSelected(clickedIndex, !state);
              that.focusedParent.focus();

              if (maxOptions !== false || maxOptionsGrp !== false) {
                var maxReached = maxOptions < getSelectedOptions(element).length,
                    maxReachedGrp = maxOptionsGrp < $optgroup.find('option:selected').length;

                if (maxOptions && maxReached || maxOptionsGrp && maxReachedGrp) {
                  if (maxOptions && maxOptions == 1) {
                    element.selectedIndex = -1;
                    option.selected = true;
                    that.setOptionStatus(true);
                  } else if (maxOptionsGrp && maxOptionsGrp == 1) {
                    for (var i = 0; i < $optgroupOptions.length; i++) {
                      var _option = $optgroupOptions[i];
                      _option.selected = false;
                      that.setSelected(_option.liIndex, false);
                    }

                    option.selected = true;
                    that.setSelected(clickedIndex, true);
                  } else {
                    var maxOptionsText = typeof that.options.maxOptionsText === 'string' ? [that.options.maxOptionsText, that.options.maxOptionsText] : that.options.maxOptionsText,
                        maxOptionsArr = typeof maxOptionsText === 'function' ? maxOptionsText(maxOptions, maxOptionsGrp) : maxOptionsText,
                        maxTxt = maxOptionsArr[0].replace('{n}', maxOptions),
                        maxTxtGrp = maxOptionsArr[1].replace('{n}', maxOptionsGrp),
                        $notify = $('<div class="notify"></div>'); // If {var} is set in array, replace it

                    /** @deprecated */

                    if (maxOptionsArr[2]) {
                      maxTxt = maxTxt.replace('{var}', maxOptionsArr[2][maxOptions > 1 ? 0 : 1]);
                      maxTxtGrp = maxTxtGrp.replace('{var}', maxOptionsArr[2][maxOptionsGrp > 1 ? 0 : 1]);
                    }

                    option.selected = false;
                    that.$menu.append($notify);

                    if (maxOptions && maxReached) {
                      $notify.append($('<div>' + maxTxt + '</div>'));
                      triggerChange = false;
                      that.$element.trigger('maxReached' + EVENT_KEY);
                    }

                    if (maxOptionsGrp && maxReachedGrp) {
                      $notify.append($('<div>' + maxTxtGrp + '</div>'));
                      triggerChange = false;
                      that.$element.trigger('maxReachedGrp' + EVENT_KEY);
                    }

                    setTimeout(function () {
                      that.setSelected(clickedIndex, false);
                    }, 10);
                    $notify[0].classList.add('fadeOut');
                    setTimeout(function () {
                      $notify.remove();
                    }, 1050);
                  }
                }
              }
            }

            if (!that.multiple || that.multiple && that.options.maxOptions === 1) {
              that.$button.trigger('focus');
            } else if (that.options.liveSearch) {
              that.$searchbox.trigger('focus');
            } // Trigger select 'change'


            if (triggerChange) {
              if (that.multiple || prevIndex !== element.selectedIndex) {
                // $option.prop('selected') is current option state (selected/unselected). prevValue is the value of the select prior to being changed.
                changedArguments = [option.index, $option.prop('selected'), prevValue];
                that.$element.triggerNative('change');
              }
            }
          }
        });
        this.$menu.on('click', 'li.' + classNames.DISABLED + ' a, .' + classNames.POPOVERHEADER + ', .' + classNames.POPOVERHEADER + ' :not(.close)', function (e) {
          if (e.currentTarget == this) {
            e.preventDefault();
            e.stopPropagation();

            if (that.options.liveSearch && !$(e.target).hasClass('close')) {
              that.$searchbox.trigger('focus');
            } else {
              that.$button.trigger('focus');
            }
          }
        });
        this.$menuInner.on('click', '.divider, .dropdown-header', function (e) {
          e.preventDefault();
          e.stopPropagation();

          if (that.options.liveSearch) {
            that.$searchbox.trigger('focus');
          } else {
            that.$button.trigger('focus');
          }
        });
        this.$menu.on('click', '.' + classNames.POPOVERHEADER + ' .close', function () {
          that.$button.trigger('click');
        });
        this.$searchbox.on('click', function (e) {
          e.stopPropagation();
        });
        this.$menu.on('click', '.actions-btn', function (e) {
          if (that.options.liveSearch) {
            that.$searchbox.trigger('focus');
          } else {
            that.$button.trigger('focus');
          }

          e.preventDefault();
          e.stopPropagation();

          if ($(this).hasClass('bs-select-all')) {
            that.selectAll();
          } else {
            that.deselectAll();
          }
        });
        this.$button.on('focus' + EVENT_KEY, function (e) {
          var tabindex = that.$element[0].getAttribute('tabindex'); // only change when button is actually focused

          if (tabindex !== undefined && e.originalEvent && e.originalEvent.isTrusted) {
            // apply select element's tabindex to ensure correct order is followed when tabbing to the next element
            this.setAttribute('tabindex', tabindex); // set element's tabindex to -1 to allow for reverse tabbing

            that.$element[0].setAttribute('tabindex', -1);
            that.selectpicker.view.tabindex = tabindex;
          }
        }).on('blur' + EVENT_KEY, function (e) {
          // revert everything to original tabindex
          if (that.selectpicker.view.tabindex !== undefined && e.originalEvent && e.originalEvent.isTrusted) {
            that.$element[0].setAttribute('tabindex', that.selectpicker.view.tabindex);
            this.setAttribute('tabindex', -1);
            that.selectpicker.view.tabindex = undefined;
          }
        });
        this.$element.on('change' + EVENT_KEY, function () {
          that.render();
          that.$element.trigger('changed' + EVENT_KEY, changedArguments);
          changedArguments = null;
        }).on('focus' + EVENT_KEY, function () {
          if (!that.options.mobile) that.$button[0].focus();
        });
      },
      liveSearchListener: function liveSearchListener() {
        var that = this;
        this.$button.on('click.bs.dropdown.data-api', function () {
          if (!!that.$searchbox.val()) {
            that.$searchbox.val('');
            that.selectpicker.search.previousValue = undefined;
          }
        });
        this.$searchbox.on('click.bs.dropdown.data-api focus.bs.dropdown.data-api touchend.bs.dropdown.data-api', function (e) {
          e.stopPropagation();
        });
        this.$searchbox.on('input propertychange', function () {
          var searchValue = that.$searchbox[0].value;
          that.selectpicker.search.elements = [];
          that.selectpicker.search.data = [];

          if (searchValue) {
            var i,
                searchMatch = [],
                q = searchValue.toUpperCase(),
                cache = {},
                cacheArr = [],
                searchStyle = that._searchStyle(),
                normalizeSearch = that.options.liveSearchNormalize;

            if (normalizeSearch) q = normalizeToBase(q);

            for (var i = 0; i < that.selectpicker.main.data.length; i++) {
              var li = that.selectpicker.main.data[i];

              if (!cache[i]) {
                cache[i] = stringSearch(li, q, searchStyle, normalizeSearch);
              }

              if (cache[i] && li.headerIndex !== undefined && cacheArr.indexOf(li.headerIndex) === -1) {
                if (li.headerIndex > 0) {
                  cache[li.headerIndex - 1] = true;
                  cacheArr.push(li.headerIndex - 1);
                }

                cache[li.headerIndex] = true;
                cacheArr.push(li.headerIndex);
                cache[li.lastIndex + 1] = true;
              }

              if (cache[i] && li.type !== 'optgroup-label') cacheArr.push(i);
            }

            for (var i = 0, cacheLen = cacheArr.length; i < cacheLen; i++) {
              var index = cacheArr[i],
                  prevIndex = cacheArr[i - 1],
                  li = that.selectpicker.main.data[index],
                  liPrev = that.selectpicker.main.data[prevIndex];

              if (li.type !== 'divider' || li.type === 'divider' && liPrev && liPrev.type !== 'divider' && cacheLen - 1 !== i) {
                that.selectpicker.search.data.push(li);
                searchMatch.push(that.selectpicker.main.elements[index]);
              }
            }

            that.activeIndex = undefined;
            that.noScroll = true;
            that.$menuInner.scrollTop(0);
            that.selectpicker.search.elements = searchMatch;
            that.createView(true);
            showNoResults.call(that, searchMatch, searchValue);
          } else if (that.selectpicker.search.previousValue) {
            // for IE11 (#2402)
            that.$menuInner.scrollTop(0);
            that.createView(false);
          }

          that.selectpicker.search.previousValue = searchValue;
        });
      },
      _searchStyle: function _searchStyle() {
        return this.options.liveSearchStyle || 'contains';
      },
      val: function val(value) {
        var element = this.$element[0];

        if (typeof value !== 'undefined') {
          var prevValue = getSelectValues(element);
          changedArguments = [null, null, prevValue];
          this.$element.val(value).trigger('changed' + EVENT_KEY, changedArguments);

          if (this.$newElement.hasClass(classNames.SHOW)) {
            if (this.multiple) {
              this.setOptionStatus(true);
            } else {
              var liSelectedIndex = (element.options[element.selectedIndex] || {}).liIndex;

              if (typeof liSelectedIndex === 'number') {
                this.setSelected(this.selectedIndex, false);
                this.setSelected(liSelectedIndex, true);
              }
            }
          }

          this.render();
          changedArguments = null;
          return this.$element;
        } else {
          return this.$element.val();
        }
      },
      changeAll: function changeAll(status) {
        if (!this.multiple) return;
        if (typeof status === 'undefined') status = true;
        var element = this.$element[0],
            previousSelected = 0,
            currentSelected = 0,
            prevValue = getSelectValues(element);
        element.classList.add('bs-select-hidden');

        for (var i = 0, data = this.selectpicker.current.data, len = data.length; i < len; i++) {
          var liData = data[i],
              option = liData.option;

          if (option && !liData.disabled && liData.type !== 'divider') {
            if (liData.selected) previousSelected++;
            option.selected = status;
            if (status === true) currentSelected++;
          }
        }

        element.classList.remove('bs-select-hidden');
        if (previousSelected === currentSelected) return;
        this.setOptionStatus();
        changedArguments = [null, null, prevValue];
        this.$element.triggerNative('change');
      },
      selectAll: function selectAll() {
        return this.changeAll(true);
      },
      deselectAll: function deselectAll() {
        return this.changeAll(false);
      },
      toggle: function toggle(e) {
        e = e || window.event;
        if (e) e.stopPropagation();
        this.$button.trigger('click.bs.dropdown.data-api');
      },
      keydown: function keydown(e) {
        var $this = $(this),
            isToggle = $this.hasClass('dropdown-toggle'),
            $parent = isToggle ? $this.closest('.dropdown') : $this.closest(Selector.MENU),
            that = $parent.data('this'),
            $items = that.findLis(),
            index,
            isActive,
            liActive,
            activeLi,
            offset,
            updateScroll = false,
            downOnTab = e.which === keyCodes.TAB && !isToggle && !that.options.selectOnTab,
            isArrowKey = REGEXP_ARROW.test(e.which) || downOnTab,
            scrollTop = that.$menuInner[0].scrollTop,
            isVirtual = that.isVirtual(),
            position0 = isVirtual === true ? that.selectpicker.view.position0 : 0; // do nothing if a function key is pressed

        if (e.which >= 112 && e.which <= 123) return;
        isActive = that.$newElement.hasClass(classNames.SHOW);

        if (!isActive && (isArrowKey || e.which >= 48 && e.which <= 57 || e.which >= 96 && e.which <= 105 || e.which >= 65 && e.which <= 90)) {
          that.$button.trigger('click.bs.dropdown.data-api');

          if (that.options.liveSearch) {
            that.$searchbox.trigger('focus');
            return;
          }
        }

        if (e.which === keyCodes.ESCAPE && isActive) {
          e.preventDefault();
          that.$button.trigger('click.bs.dropdown.data-api').trigger('focus');
        }

        if (isArrowKey) {
          // if up or down
          if (!$items.length) return;
          liActive = that.selectpicker.main.elements[that.activeIndex];
          index = liActive ? Array.prototype.indexOf.call(liActive.parentElement.children, liActive) : -1;

          if (index !== -1) {
            that.defocusItem(liActive);
          }

          if (e.which === keyCodes.ARROW_UP) {
            // up
            if (index !== -1) index--;
            if (index + position0 < 0) index += $items.length;

            if (!that.selectpicker.view.canHighlight[index + position0]) {
              index = that.selectpicker.view.canHighlight.slice(0, index + position0).lastIndexOf(true) - position0;
              if (index === -1) index = $items.length - 1;
            }
          } else if (e.which === keyCodes.ARROW_DOWN || downOnTab) {
            // down
            index++;
            if (index + position0 >= that.selectpicker.view.canHighlight.length) index = that.selectpicker.view.firstHighlightIndex;

            if (!that.selectpicker.view.canHighlight[index + position0]) {
              index = index + 1 + that.selectpicker.view.canHighlight.slice(index + position0 + 1).indexOf(true);
            }
          }

          e.preventDefault();
          var liActiveIndex = position0 + index;

          if (e.which === keyCodes.ARROW_UP) {
            // up
            // scroll to bottom and highlight last option
            if (position0 === 0 && index === $items.length - 1) {
              that.$menuInner[0].scrollTop = that.$menuInner[0].scrollHeight;
              liActiveIndex = that.selectpicker.current.elements.length - 1;
            } else {
              activeLi = that.selectpicker.current.data[liActiveIndex];
              offset = activeLi.position - activeLi.height;
              updateScroll = offset < scrollTop;
            }
          } else if (e.which === keyCodes.ARROW_DOWN || downOnTab) {
            // down
            // scroll to top and highlight first option
            if (index === that.selectpicker.view.firstHighlightIndex) {
              that.$menuInner[0].scrollTop = 0;
              liActiveIndex = that.selectpicker.view.firstHighlightIndex;
            } else {
              activeLi = that.selectpicker.current.data[liActiveIndex];
              offset = activeLi.position - that.sizeInfo.menuInnerHeight;
              updateScroll = offset > scrollTop;
            }
          }

          liActive = that.selectpicker.current.elements[liActiveIndex];
          that.activeIndex = that.selectpicker.current.data[liActiveIndex].index;
          that.focusItem(liActive);
          that.selectpicker.view.currentActive = liActive;
          if (updateScroll) that.$menuInner[0].scrollTop = offset;

          if (that.options.liveSearch) {
            that.$searchbox.trigger('focus');
          } else {
            $this.trigger('focus');
          }
        } else if (!$this.is('input') && !REGEXP_TAB_OR_ESCAPE.test(e.which) || e.which === keyCodes.SPACE && that.selectpicker.keydown.keyHistory) {
          var searchMatch,
              matches = [],
              keyHistory;
          e.preventDefault();
          that.selectpicker.keydown.keyHistory += keyCodeMap[e.which];
          if (that.selectpicker.keydown.resetKeyHistory.cancel) clearTimeout(that.selectpicker.keydown.resetKeyHistory.cancel);
          that.selectpicker.keydown.resetKeyHistory.cancel = that.selectpicker.keydown.resetKeyHistory.start();
          keyHistory = that.selectpicker.keydown.keyHistory; // if all letters are the same, set keyHistory to just the first character when searching

          if (/^(.)\1+$/.test(keyHistory)) {
            keyHistory = keyHistory.charAt(0);
          } // find matches


          for (var i = 0; i < that.selectpicker.current.data.length; i++) {
            var li = that.selectpicker.current.data[i],
                hasMatch;
            hasMatch = stringSearch(li, keyHistory, 'startsWith', true);

            if (hasMatch && that.selectpicker.view.canHighlight[i]) {
              matches.push(li.index);
            }
          }

          if (matches.length) {
            var matchIndex = 0;
            $items.removeClass('active').find('a').removeClass('active'); // either only one key has been pressed or they are all the same key

            if (keyHistory.length === 1) {
              matchIndex = matches.indexOf(that.activeIndex);

              if (matchIndex === -1 || matchIndex === matches.length - 1) {
                matchIndex = 0;
              } else {
                matchIndex++;
              }
            }

            searchMatch = matches[matchIndex];
            activeLi = that.selectpicker.main.data[searchMatch];

            if (scrollTop - activeLi.position > 0) {
              offset = activeLi.position - activeLi.height;
              updateScroll = true;
            } else {
              offset = activeLi.position - that.sizeInfo.menuInnerHeight; // if the option is already visible at the current scroll position, just keep it the same

              updateScroll = activeLi.position > scrollTop + that.sizeInfo.menuInnerHeight;
            }

            liActive = that.selectpicker.main.elements[searchMatch];
            that.activeIndex = matches[matchIndex];
            that.focusItem(liActive);
            if (liActive) liActive.firstChild.focus();
            if (updateScroll) that.$menuInner[0].scrollTop = offset;
            $this.trigger('focus');
          }
        } // Select focused option if "Enter", "Spacebar" or "Tab" (when selectOnTab is true) are pressed inside the menu.


        if (isActive && (e.which === keyCodes.SPACE && !that.selectpicker.keydown.keyHistory || e.which === keyCodes.ENTER || e.which === keyCodes.TAB && that.options.selectOnTab)) {
          if (e.which !== keyCodes.SPACE) e.preventDefault();

          if (!that.options.liveSearch || e.which !== keyCodes.SPACE) {
            that.$menuInner.find('.active a').trigger('click', true); // retain active class

            $this.trigger('focus');

            if (!that.options.liveSearch) {
              // Prevent screen from scrolling if the user hits the spacebar
              e.preventDefault(); // Fixes spacebar selection of dropdown items in FF & IE

              $(document).data('spaceSelect', true);
            }
          }
        }
      },
      mobile: function mobile() {
        // ensure mobile is set to true if mobile function is called after init
        this.options.mobile = true;
        this.$element[0].classList.add('mobile-device');
      },
      refresh: function refresh() {
        // update options if data attributes have been changed
        var config = $.extend({}, this.options, this.$element.data());
        this.options = config;
        this.checkDisabled();
        this.buildData();
        this.setStyle();
        this.render();
        this.buildList();
        this.setWidth();
        this.setSize(true);
        this.$element.trigger('refreshed' + EVENT_KEY);
      },
      hide: function hide() {
        this.$newElement.hide();
      },
      show: function show() {
        this.$newElement.show();
      },
      remove: function remove() {
        this.$newElement.remove();
        this.$element.remove();
      },
      destroy: function destroy() {
        this.$newElement.before(this.$element).remove();

        if (this.$bsContainer) {
          this.$bsContainer.remove();
        } else {
          this.$menu.remove();
        }

        if (this.selectpicker.view.titleOption && this.selectpicker.view.titleOption.parentNode) {
          this.selectpicker.view.titleOption.parentNode.removeChild(this.selectpicker.view.titleOption);
        }

        this.$element.off(EVENT_KEY).removeData('selectpicker').removeClass('bs-select-hidden selectpicker');
        $(window).off(EVENT_KEY + '.' + this.selectId);
      }
    }; // SELECTPICKER PLUGIN DEFINITION
    // ==============================

    function Plugin(option) {
      // get the args of the outer function..
      var args = arguments; // The arguments of the function are explicitly re-defined from the argument list, because the shift causes them
      // to get lost/corrupted in android 2.3 and IE9 #715 #775

      var _option = option;
      [].shift.apply(args); // if the version was not set successfully

      if (!version.success) {
        // try to retreive it again
        try {
          version.full = ($.fn.dropdown.Constructor.VERSION || '').split(' ')[0].split('.');
        } catch (err) {
          // fall back to use BootstrapVersion if set
          if (Selectpicker.BootstrapVersion) {
            version.full = Selectpicker.BootstrapVersion.split(' ')[0].split('.');
          } else {
            version.full = [version.major, '0', '0'];
            console.warn('There was an issue retrieving Bootstrap\'s version. ' + 'Ensure Bootstrap is being loaded before bootstrap-select and there is no namespace collision. ' + 'If loading Bootstrap asynchronously, the version may need to be manually specified via $.fn.selectpicker.Constructor.BootstrapVersion.', err);
          }
        }

        version.major = version.full[0];
        version.success = true;
      }

      if (version.major === '4') {
        // some defaults need to be changed if using Bootstrap 4
        // check to see if they have already been manually changed before forcing them to update
        var toUpdate = [];
        if (Selectpicker.DEFAULTS.style === classNames.BUTTONCLASS) toUpdate.push({
          name: 'style',
          className: 'BUTTONCLASS'
        });
        if (Selectpicker.DEFAULTS.iconBase === classNames.ICONBASE) toUpdate.push({
          name: 'iconBase',
          className: 'ICONBASE'
        });
        if (Selectpicker.DEFAULTS.tickIcon === classNames.TICKICON) toUpdate.push({
          name: 'tickIcon',
          className: 'TICKICON'
        });
        classNames.DIVIDER = 'dropdown-divider';
        classNames.SHOW = 'show';
        classNames.BUTTONCLASS = 'btn-light';
        classNames.POPOVERHEADER = 'popover-header';
        classNames.ICONBASE = '';
        classNames.TICKICON = 'bs-ok-default';

        for (var i = 0; i < toUpdate.length; i++) {
          var option = toUpdate[i];
          Selectpicker.DEFAULTS[option.name] = classNames[option.className];
        }
      }

      var value;
      var chain = this.each(function () {
        var $this = $(this);

        if ($this.is('select')) {
          var data = $this.data('selectpicker'),
              options = _typeof(_option) == 'object' && _option;

          if (!data) {
            var dataAttributes = $this.data();

            for (var dataAttr in dataAttributes) {
              if (Object.prototype.hasOwnProperty.call(dataAttributes, dataAttr) && $.inArray(dataAttr, DISALLOWED_ATTRIBUTES) !== -1) {
                delete dataAttributes[dataAttr];
              }
            }

            var config = $.extend({}, Selectpicker.DEFAULTS, $.fn.selectpicker.defaults || {}, dataAttributes, options);
            config.template = $.extend({}, Selectpicker.DEFAULTS.template, $.fn.selectpicker.defaults ? $.fn.selectpicker.defaults.template : {}, dataAttributes.template, options.template);
            $this.data('selectpicker', data = new Selectpicker(this, config));
          } else if (options) {
            for (var i in options) {
              if (Object.prototype.hasOwnProperty.call(options, i)) {
                data.options[i] = options[i];
              }
            }
          }

          if (typeof _option == 'string') {
            if (data[_option] instanceof Function) {
              value = data[_option].apply(data, args);
            } else {
              value = data.options[_option];
            }
          }
        }
      });

      if (typeof value !== 'undefined') {
        // noinspection JSUnusedAssignment
        return value;
      } else {
        return chain;
      }
    }

    var old = $.fn.selectpicker;
    $.fn.selectpicker = Plugin;
    $.fn.selectpicker.Constructor = Selectpicker; // SELECTPICKER NO CONFLICT
    // ========================

    $.fn.selectpicker.noConflict = function () {
      $.fn.selectpicker = old;
      return this;
    }; // get Bootstrap's keydown event handler for either Bootstrap 4 or Bootstrap 3


    function keydownHandler() {
      if ($.fn.dropdown) {
        // wait to define until function is called in case Bootstrap isn't loaded yet
        var bootstrapKeydown = $.fn.dropdown.Constructor._dataApiKeydownHandler || $.fn.dropdown.Constructor.prototype.keydown;
        return bootstrapKeydown.apply(this, arguments);
      }
    }

    $(document).off('keydown.bs.dropdown.data-api').on('keydown.bs.dropdown.data-api', ':not(.bootstrap-select) > [data-toggle="dropdown"]', keydownHandler).on('keydown.bs.dropdown.data-api', ':not(.bootstrap-select) > .dropdown-menu', keydownHandler).on('keydown' + EVENT_KEY, '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', Selectpicker.prototype.keydown).on('focusin.modal', '.bootstrap-select [data-toggle="dropdown"], .bootstrap-select [role="listbox"], .bootstrap-select .bs-searchbox input', function (e) {
      e.stopPropagation();
    }); // SELECTPICKER DATA-API
    // =====================

    $(window).on('load' + EVENT_KEY + '.data-api', function () {
      $('.selectpicker').each(function () {
        var $selectpicker = $(this);
        Plugin.call($selectpicker, $selectpicker.data());
      });
    });
  })(jQuery);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vanMvYm9vdHN0cmFwLXNlbGVjdC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLEdBQUMsVUFBUyxDQUFULEVBQWE7QUFDWjs7QUFFQSxRQUFJLHFCQUFxQixHQUFHLGFBQWEsV0FBYixFQUEwQixZQUExQixDQUE1QjtBQUVBLFFBQUksUUFBUSxHQUFHLENBQ2IsWUFEYSxFQUViLE1BRmEsRUFHYixNQUhhLEVBSWIsVUFKYSxFQUtiLFVBTGEsRUFNYixRQU5hLEVBT2IsS0FQYSxFQVFiLFlBUmEsQ0FBZjtBQVdBLFFBQUksc0JBQXNCLEdBQUcsZ0JBQTdCO0FBRUEsUUFBSSxnQkFBZ0IsR0FBRztBQUNyQjtBQUNBLFdBQUssVUFBVSxLQUFWLEVBQWlCLElBQWpCLEVBQXVCLE1BQXZCLEVBQStCLE1BQS9CLEVBQXVDLFVBQXZDLEVBQW1ELE9BQW5ELEVBQTRELHNCQUE1RCxDQUZnQjtBQUdyQixPQUFDLEVBQUUsV0FBVyxNQUFYLEVBQW1CLE9BQW5CLEVBQTRCLEtBQTVCLENBSGtCO0FBSXJCLFVBQUksRUFBRSxFQUplO0FBS3JCLE9BQUMsRUFBRSxFQUxrQjtBQU1yQixRQUFFLEVBQUUsRUFOaUI7QUFPckIsU0FBRyxFQUFFLEVBUGdCO0FBUXJCLFVBQUksRUFBRSxFQVJlO0FBU3JCLFNBQUcsRUFBRSxFQVRnQjtBQVVyQixRQUFFLEVBQUUsRUFWaUI7QUFXckIsUUFBRSxFQUFFLEVBWGlCO0FBWXJCLFFBQUUsRUFBRSxFQVppQjtBQWFyQixRQUFFLEVBQUUsRUFiaUI7QUFjckIsUUFBRSxFQUFFLEVBZGlCO0FBZXJCLFFBQUUsRUFBRSxFQWZpQjtBQWdCckIsUUFBRSxFQUFFLEVBaEJpQjtBQWlCckIsUUFBRSxFQUFFLEVBakJpQjtBQWtC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U0FBYSxTQUFiLEdBQXdCLFdBQW5DLEVBQW1DO0FBQ25DLFFBQU0sZUFBTixFQUFtQixJQUFuQixDQUFtQixZQUFlO0FBQzVCLFlBQUMsdUJBQUQ7QUFDQTtBQUNILE9BSEg7S0FEQTtHQS9vR0EsRSxNQUFBIiwiZmlsZSI6IjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gKCQpIHtcclxuICAndXNlIHN0cmljdCc7XHJcblxyXG4gIHZhciBESVNBTExPV0VEX0FUVFJJQlVURVMgPSBbJ3Nhbml0aXplJywgJ3doaXRlTGlzdCcsICdzYW5pdGl6ZUZuJ107XHJcblxyXG4gIHZhciB1cmlBdHRycyA9IFtcclxuICAgICdiYWNrZ3JvdW5kJyxcclxuICAgICdjaXRlJyxcclxuICAgICdocmVmJyxcclxuICAgICdpdGVtdHlwZScsXHJcbiAgICAnbG9uZ2Rlc2MnLFxyXG4gICAgJ3Bvc3RlcicsXHJcbiAgICAnc3JjJyxcclxuICAgICd4bGluazpocmVmJ1xyXG4gIF07XHJcblxyXG4gIHZhciBBUklBX0FUVFJJQlVURV9QQVRURVJOID0gL15hcmlhLVtcXHctXSokL2k7XHJcblxyXG4gIHZhciBEZWZhdWx0V2hpdGVsaXN0ID0ge1xyXG4gICAgLy8gR2xvYmFsIGF0dHJpYnV0ZXMgYWxsb3dlZCBvbiBhbnkgc3VwcGxpZWQgZWxlbWVudCBiZWxvdy5cclxuICAgICcqJzogWydjbGFzcycsICdkaXInLCAnaWQnLCAnbGFuZycsICdyb2xlJywgJ3RhYmluZGV4JywgJ3N0eWxlJywgQVJJQV9BVFRSSUJVVEVfUEFUVEVSTl0sXHJcbiAgICBhOiBbJ3RhcmdldCcsICdocmVmJywgJ3RpdGxlJywgJ3JlbCddLFxyXG4gICAgYXJlYTogW10sXHJcbiAgICBiOiBbXSxcclxuICAgIGJyOiBbXSxcclxuICAgIGNvbDogW10sXHJcbiAgICBjb2RlOiBbXSxcclxuICAgIGRpdjogW10sXHJcbiAgICBlbTogW10sXHJcbiAgICBocjogW10sXHJcbiAgICBoMTogW10sXHJcbiAgICBoMjogW10sXHJcbiAgICBoMzogW10sXHJcbiAgICBoNDogW10sXHJcbiAgICBoNTogW10sXHJcbiAgICBoNjogW10sXHJcbiAgICBpOiBbXSxcclxuICAgIGltZzogWydzcmMnLCAnYWx0JywgJ3RpdGxlJywgJ3dpZHRoJywgJ2hlaWdodCddLFxyXG4gICAgbGk6IFtdLFxyXG4gICAgb2w6IFtdLFxyXG4gICAgcDogW10sXHJcbiAgICBwcmU6IFtdLFxyXG4gICAgczogW10sXHJcbiAgICBzbWFsbDogW10sXHJcbiAgICBzcGFuOiBbXSxcclxuICAgIHN1YjogW10sXHJcbiAgICBzdXA6IFtdLFxyXG4gICAgc3Ryb25nOiBbXSxcclxuICAgIHU6IFtdLFxyXG4gICAgdWw6IFtdXHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBIHBhdHRlcm4gdGhhdCByZWNvZ25pemVzIGEgY29tbW9ubHkgdXNlZnVsIHN1YnNldCBvZiBVUkxzIHRoYXQgYXJlIHNhZmUuXHJcbiAgICpcclxuICAgKiBTaG91dG91dCB0byBBbmd1bGFyIDcgaHR0cHM6Ly9naXRodWIuY29tL2FuZ3VsYXIvYW5ndWxhci9ibG9iLzcuMi40L3BhY2thZ2VzL2NvcmUvc3JjL3Nhbml0aXphdGlvbi91cmxfc2FuaXRpemVyLnRzXHJcbiAgICovXHJcbiAgdmFyIFNBRkVfVVJMX1BBVFRFUk4gPSAvXig/Oig/Omh0dHBzP3xtYWlsdG98ZnRwfHRlbHxmaWxlKTp8W14mOi8/I10qKD86Wy8/I118JCkpL2dpO1xyXG5cclxuICAvKipcclxuICAgKiBBIHBhdHRlcm4gdGhhdCBtYXRjaGVzIHNhZmUgZGF0YSBVUkxzLiBPbmx5IG1hdGNoZXMgaW1hZ2UsIHZpZGVvIGFuZCBhdWRpbyB0eXBlcy5cclxuICAgKlxyXG4gICAqIFNob3V0b3V0IHRvIEFuZ3VsYXIgNyBodHRwczovL2dpdGh1Yi5jb20vYW5ndWxhci9hbmd1bGFyL2Jsb2IvNy4yLjQvcGFja2FnZXMvY29yZS9zcmMvc2FuaXRpemF0aW9uL3VybF9zYW5pdGl6ZXIudHNcclxuICAgKi9cclxuICB2YXIgREFUQV9VUkxfUEFUVEVSTiA9IC9eZGF0YTooPzppbWFnZVxcLyg/OmJtcHxnaWZ8anBlZ3xqcGd8cG5nfHRpZmZ8d2VicCl8dmlkZW9cXC8oPzptcGVnfG1wNHxvZ2d8d2VibSl8YXVkaW9cXC8oPzptcDN8b2dhfG9nZ3xvcHVzKSk7YmFzZTY0LFthLXowLTkrL10rPSokL2k7XHJcblxyXG4gIGZ1bmN0aW9uIGFsbG93ZWRBdHRyaWJ1dGUgKGF0dHIsIGFsbG93ZWRBdHRyaWJ1dGVMaXN0KSB7XHJcbiAgICB2YXIgYXR0ck5hbWUgPSBhdHRyLm5vZGVOYW1lLnRvTG93ZXJDYXNlKClcclxuXHJcbiAgICBpZiAoJC5pbkFycmF5KGF0dHJOYW1lLCBhbGxvd2VkQXR0cmlidXRlTGlzdCkgIT09IC0xKSB7XHJcbiAgICAgIGlmICgkLmluQXJyYXkoYXR0ck5hbWUsIHVyaUF0dHJzKSAhPT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gQm9vbGVhbihhdHRyLm5vZGVWYWx1ZS5tYXRjaChTQUZFX1VSTF9QQVRURVJOKSB8fCBhdHRyLm5vZGVWYWx1ZS5tYXRjaChEQVRBX1VSTF9QQVRURVJOKSlcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRydWVcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVnRXhwID0gJChhbGxvd2VkQXR0cmlidXRlTGlzdCkuZmlsdGVyKGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgUmVnRXhwXHJcbiAgICB9KVxyXG5cclxuICAgIC8vIENoZWNrIGlmIGEgcmVndWxhciBleHByZXNzaW9uIHZhbGlkYXRlcyB0aGUgYXR0cmlidXRlLlxyXG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSByZWdFeHAubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgIGlmIChhdHRyTmFtZS5tYXRjaChyZWdFeHBbaV0pKSB7XHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZVxyXG4gIH1cclxuXHJcbiAgZnVuY3Rpb24gc2FuaXRpemVIdG1sICh1bnNhZmVFbGVtZW50cywgd2hpdGVMaXN0LCBzYW5pdGl6ZUZuKSB7XHJcbiAgICBpZiAoc2FuaXRpemVGbiAmJiB0eXBlb2Ygc2FuaXRpemVGbiA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICByZXR1cm4gc2FuaXRpemVGbih1bnNhZmVFbGVtZW50cyk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFyIHdoaXRlbGlzdEtleXMgPSBPYmplY3Qua2V5cyh3aGl0ZUxpc3QpO1xyXG5cclxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB1bnNhZmVFbGVtZW50cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICB2YXIgZWxlbWVudHMgPSB1bnNhZmVFbGVtZW50c1tpXS5xdWVyeVNlbGVjdG9yQWxsKCcqJyk7XHJcblxyXG4gICAgICBmb3IgKHZhciBqID0gMCwgbGVuMiA9IGVsZW1lbnRzLmxlbmd0aDsgaiA8IGxlbjI7IGorKykge1xyXG4gICAgICAgIHZhciBlbCA9IGVsZW1lbnRzW2pdO1xyXG4gICAgICAgIHZhciBlbE5hbWUgPSBlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICBpZiAod2hpdGVsaXN0S2V5cy5pbmRleE9mKGVsTmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICBlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsKTtcclxuXHJcbiAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBhdHRyaWJ1dGVMaXN0ID0gW10uc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKTtcclxuICAgICAgICB2YXIgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzID0gW10uY29uY2F0KHdoaXRlTGlzdFsnKiddIHx8IFtdLCB3aGl0ZUxpc3RbZWxOYW1lXSB8fCBbXSk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGsgPSAwLCBsZW4zID0gYXR0cmlidXRlTGlzdC5sZW5ndGg7IGsgPCBsZW4zOyBrKyspIHtcclxuICAgICAgICAgIHZhciBhdHRyID0gYXR0cmlidXRlTGlzdFtrXTtcclxuXHJcbiAgICAgICAgICBpZiAoIWFsbG93ZWRBdHRyaWJ1dGUoYXR0ciwgd2hpdGVsaXN0ZWRBdHRyaWJ1dGVzKSkge1xyXG4gICAgICAgICAgICBlbC5yZW1vdmVBdHRyaWJ1dGUoYXR0ci5ub2RlTmFtZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBQb2x5ZmlsbCBmb3IgYnJvd3NlcnMgd2l0aCBubyBjbGFzc0xpc3Qgc3VwcG9ydFxyXG4gIC8vIFJlbW92ZSBpbiB2MlxyXG4gIGlmICghKCdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ18nKSkpIHtcclxuICAgIChmdW5jdGlvbiAodmlldykge1xyXG4gICAgICBpZiAoISgnRWxlbWVudCcgaW4gdmlldykpIHJldHVybjtcclxuXHJcbiAgICAgIHZhciBjbGFzc0xpc3RQcm9wID0gJ2NsYXNzTGlzdCcsXHJcbiAgICAgICAgICBwcm90b1Byb3AgPSAncHJvdG90eXBlJyxcclxuICAgICAgICAgIGVsZW1DdHJQcm90byA9IHZpZXcuRWxlbWVudFtwcm90b1Byb3BdLFxyXG4gICAgICAgICAgb2JqQ3RyID0gT2JqZWN0LFxyXG4gICAgICAgICAgY2xhc3NMaXN0R2V0dGVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgJGVsZW0gPSAkKHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICBhZGQ6IGZ1bmN0aW9uIChjbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsZW0uYWRkQ2xhc3MoY2xhc3Nlcyk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICByZW1vdmU6IGZ1bmN0aW9uIChjbGFzc2VzKSB7XHJcbiAgICAgICAgICAgICAgICBjbGFzc2VzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKS5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGVsZW0ucmVtb3ZlQ2xhc3MoY2xhc3Nlcyk7XHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB0b2dnbGU6IGZ1bmN0aW9uIChjbGFzc2VzLCBmb3JjZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbGVtLnRvZ2dsZUNsYXNzKGNsYXNzZXMsIGZvcmNlKTtcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBmdW5jdGlvbiAoY2xhc3Nlcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRlbGVtLmhhc0NsYXNzKGNsYXNzZXMpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgIGlmIChvYmpDdHIuZGVmaW5lUHJvcGVydHkpIHtcclxuICAgICAgICB2YXIgY2xhc3NMaXN0UHJvcERlc2MgPSB7XHJcbiAgICAgICAgICBnZXQ6IGNsYXNzTGlzdEdldHRlcixcclxuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICBvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXgpIHsgLy8gSUUgOCBkb2Vzbid0IHN1cHBvcnQgZW51bWVyYWJsZTp0cnVlXHJcbiAgICAgICAgICAvLyBhZGRpbmcgdW5kZWZpbmVkIHRvIGZpZ2h0IHRoaXMgaXNzdWUgaHR0cHM6Ly9naXRodWIuY29tL2VsaWdyZXkvY2xhc3NMaXN0LmpzL2lzc3Vlcy8zNlxyXG4gICAgICAgICAgLy8gbW9kZXJuaWUgSUU4LU1TVzcgbWFjaGluZSBoYXMgSUU4IDguMC42MDAxLjE4NzAyIGFuZCBpcyBhZmZlY3RlZFxyXG4gICAgICAgICAgaWYgKGV4Lm51bWJlciA9PT0gdW5kZWZpbmVkIHx8IGV4Lm51bWJlciA9PT0gLTB4N0ZGNUVDNTQpIHtcclxuICAgICAgICAgICAgY2xhc3NMaXN0UHJvcERlc2MuZW51bWVyYWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvYmpDdHIuZGVmaW5lUHJvcGVydHkoZWxlbUN0clByb3RvLCBjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RQcm9wRGVzYyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2UgaWYgKG9iakN0cltwcm90b1Byb3BdLl9fZGVmaW5lR2V0dGVyX18pIHtcclxuICAgICAgICBlbGVtQ3RyUHJvdG8uX19kZWZpbmVHZXR0ZXJfXyhjbGFzc0xpc3RQcm9wLCBjbGFzc0xpc3RHZXR0ZXIpO1xyXG4gICAgICB9XHJcbiAgICB9KHdpbmRvdykpO1xyXG4gIH1cclxuXHJcbiAgdmFyIHRlc3RFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnXycpO1xyXG5cclxuICB0ZXN0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjMScsICdjMicpO1xyXG5cclxuICBpZiAoIXRlc3RFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYzInKSkge1xyXG4gICAgdmFyIF9hZGQgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlLmFkZCxcclxuICAgICAgICBfcmVtb3ZlID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZS5yZW1vdmU7XHJcblxyXG4gICAgRE9NVG9rZW5MaXN0LnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoYXJndW1lbnRzLCBfYWRkLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIERPTVRva2VuTGlzdC5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKGFyZ3VtZW50cywgX3JlbW92ZS5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRlc3RFbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoJ2MzJywgZmFsc2UpO1xyXG5cclxuICAvLyBQb2x5ZmlsbCBmb3IgSUUgMTAgYW5kIEZpcmVmb3ggPDI0LCB3aGVyZSBjbGFzc0xpc3QudG9nZ2xlIGRvZXMgbm90XHJcbiAgLy8gc3VwcG9ydCB0aGUgc2Vjb25kIGFyZ3VtZW50LlxyXG4gIGlmICh0ZXN0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2MzJykpIHtcclxuICAgIHZhciBfdG9nZ2xlID0gRE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGU7XHJcblxyXG4gICAgRE9NVG9rZW5MaXN0LnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAodG9rZW4sIGZvcmNlKSB7XHJcbiAgICAgIGlmICgxIGluIGFyZ3VtZW50cyAmJiAhdGhpcy5jb250YWlucyh0b2tlbikgPT09ICFmb3JjZSkge1xyXG4gICAgICAgIHJldHVybiBmb3JjZTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gX3RvZ2dsZS5jYWxsKHRoaXMsIHRva2VuKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHRlc3RFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgLy8gc2hhbGxvdyBhcnJheSBjb21wYXJpc29uXHJcbiAgZnVuY3Rpb24gaXNFcXVhbCAoYXJyYXkxLCBhcnJheTIpIHtcclxuICAgIHJldHVybiBhcnJheTEubGVuZ3RoID09PSBhcnJheTIubGVuZ3RoICYmIGFycmF5MS5ldmVyeShmdW5jdGlvbiAoZWxlbWVudCwgaW5kZXgpIHtcclxuICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGFycmF5MltpbmRleF07XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyA8ZWRpdG9yLWZvbGQgZGVzYz1cIlNoaW1zXCI+XHJcbiAgaWYgKCFTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgpIHtcclxuICAgIChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICd1c2Ugc3RyaWN0JzsgLy8gbmVlZGVkIHRvIHN1cHBvcnQgYGFwcGx5YC9gY2FsbGAgd2l0aCBgdW5kZWZpbmVkYC9gbnVsbGBcclxuICAgICAgdmFyIGRlZmluZVByb3BlcnR5ID0gKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBJRSA4IG9ubHkgc3VwcG9ydHMgYE9iamVjdC5kZWZpbmVQcm9wZXJ0eWAgb24gRE9NIGVsZW1lbnRzXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHZhciBvYmplY3QgPSB7fTtcclxuICAgICAgICAgIHZhciAkZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XHJcbiAgICAgICAgICB2YXIgcmVzdWx0ID0gJGRlZmluZVByb3BlcnR5KG9iamVjdCwgb2JqZWN0LCBvYmplY3QpICYmICRkZWZpbmVQcm9wZXJ0eTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICB9KCkpO1xyXG4gICAgICB2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcclxuICAgICAgdmFyIHN0YXJ0c1dpdGggPSBmdW5jdGlvbiAoc2VhcmNoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMgPT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RyaW5nID0gU3RyaW5nKHRoaXMpO1xyXG4gICAgICAgIGlmIChzZWFyY2ggJiYgdG9TdHJpbmcuY2FsbChzZWFyY2gpID09ICdbb2JqZWN0IFJlZ0V4cF0nKSB7XHJcbiAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzdHJpbmdMZW5ndGggPSBzdHJpbmcubGVuZ3RoO1xyXG4gICAgICAgIHZhciBzZWFyY2hTdHJpbmcgPSBTdHJpbmcoc2VhcmNoKTtcclxuICAgICAgICB2YXIgc2VhcmNoTGVuZ3RoID0gc2VhcmNoU3RyaW5nLmxlbmd0aDtcclxuICAgICAgICB2YXIgcG9zaXRpb24gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAvLyBgVG9JbnRlZ2VyYFxyXG4gICAgICAgIHZhciBwb3MgPSBwb3NpdGlvbiA/IE51bWJlcihwb3NpdGlvbikgOiAwO1xyXG4gICAgICAgIGlmIChwb3MgIT0gcG9zKSB7IC8vIGJldHRlciBgaXNOYU5gXHJcbiAgICAgICAgICBwb3MgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgc3RhcnQgPSBNYXRoLm1pbihNYXRoLm1heChwb3MsIDApLCBzdHJpbmdMZW5ndGgpO1xyXG4gICAgICAgIC8vIEF2b2lkIHRoZSBgaW5kZXhPZmAgY2FsbCBpZiBubyBtYXRjaCBpcyBwb3NzaWJsZVxyXG4gICAgICAgIGlmIChzZWFyY2hMZW5ndGggKyBzdGFydCA+IHN0cmluZ0xlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgaW5kZXggPSAtMTtcclxuICAgICAgICB3aGlsZSAoKytpbmRleCA8IHNlYXJjaExlbmd0aCkge1xyXG4gICAgICAgICAgaWYgKHN0cmluZy5jaGFyQ29kZUF0KHN0YXJ0ICsgaW5kZXgpICE9IHNlYXJjaFN0cmluZy5jaGFyQ29kZUF0KGluZGV4KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9O1xyXG4gICAgICBpZiAoZGVmaW5lUHJvcGVydHkpIHtcclxuICAgICAgICBkZWZpbmVQcm9wZXJ0eShTdHJpbmcucHJvdG90eXBlLCAnc3RhcnRzV2l0aCcsIHtcclxuICAgICAgICAgICd2YWx1ZSc6IHN0YXJ0c1dpdGgsXHJcbiAgICAgICAgICAnY29uZmlndXJhYmxlJzogdHJ1ZSxcclxuICAgICAgICAgICd3cml0YWJsZSc6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGggPSBzdGFydHNXaXRoO1xyXG4gICAgICB9XHJcbiAgICB9KCkpO1xyXG4gIH1cclxuXHJcbiAgaWYgKCFPYmplY3Qua2V5cykge1xyXG4gICAgT2JqZWN0LmtleXMgPSBmdW5jdGlvbiAoXHJcbiAgICAgIG8sIC8vIG9iamVjdFxyXG4gICAgICBrLCAvLyBrZXlcclxuICAgICAgciAgLy8gcmVzdWx0IGFycmF5XHJcbiAgICApIHtcclxuICAgICAgLy8gaW5pdGlhbGl6ZSBvYmplY3QgYW5kIHJlc3VsdFxyXG4gICAgICByID0gW107XHJcbiAgICAgIC8vIGl0ZXJhdGUgb3ZlciBvYmplY3Qga2V5c1xyXG4gICAgICBmb3IgKGsgaW4gbykge1xyXG4gICAgICAgIC8vIGZpbGwgcmVzdWx0IGFycmF5IHdpdGggbm9uLXByb3RvdHlwaWNhbCBrZXlzXHJcbiAgICAgICAgci5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIGspICYmIHIucHVzaChrKTtcclxuICAgICAgfVxyXG4gICAgICAvLyByZXR1cm4gcmVzdWx0XHJcbiAgICAgIHJldHVybiByO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChIVE1MU2VsZWN0RWxlbWVudCAmJiAhSFRNTFNlbGVjdEVsZW1lbnQucHJvdG90eXBlLmhhc093blByb3BlcnR5KCdzZWxlY3RlZE9wdGlvbnMnKSkge1xyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxTZWxlY3RFbGVtZW50LnByb3RvdHlwZSwgJ3NlbGVjdGVkT3B0aW9ucycsIHtcclxuICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlTZWxlY3RvckFsbCgnOmNoZWNrZWQnKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBnZXRTZWxlY3RlZE9wdGlvbnMgKHNlbGVjdCwgaWdub3JlRGlzYWJsZWQpIHtcclxuICAgIHZhciBzZWxlY3RlZE9wdGlvbnMgPSBzZWxlY3Quc2VsZWN0ZWRPcHRpb25zLFxyXG4gICAgICAgIG9wdGlvbnMgPSBbXSxcclxuICAgICAgICBvcHQ7XHJcblxyXG4gICAgaWYgKGlnbm9yZURpc2FibGVkKSB7XHJcbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBzZWxlY3RlZE9wdGlvbnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBvcHQgPSBzZWxlY3RlZE9wdGlvbnNbaV07XHJcblxyXG4gICAgICAgIGlmICghKG9wdC5kaXNhYmxlZCB8fCBvcHQucGFyZW50Tm9kZS50YWdOYW1lID09PSAnT1BUR1JPVVAnICYmIG9wdC5wYXJlbnROb2RlLmRpc2FibGVkKSkge1xyXG4gICAgICAgICAgb3B0aW9ucy5wdXNoKG9wdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gb3B0aW9ucztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VsZWN0ZWRPcHRpb25zO1xyXG4gIH1cclxuXHJcbiAgLy8gbXVjaCBmYXN0ZXIgdGhhbiAkLnZhbCgpXHJcbiAgZnVuY3Rpb24gZ2V0U2VsZWN0VmFsdWVzIChzZWxlY3QsIHNlbGVjdGVkT3B0aW9ucykge1xyXG4gICAgdmFyIHZhbHVlID0gW10sXHJcbiAgICAgICAgb3B0aW9ucyA9IHNlbGVjdGVkT3B0aW9ucyB8fCBzZWxlY3Quc2VsZWN0ZWRPcHRpb25zLFxyXG4gICAgICAgIG9wdDtcclxuXHJcbiAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gb3B0aW9ucy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xyXG4gICAgICBvcHQgPSBvcHRpb25zW2ldO1xyXG5cclxuICAgICAgaWYgKCEob3B0LmRpc2FibGVkIHx8IG9wdC5wYXJlbnROb2RlLnRhZ05hbWUgPT09ICdPUFRHUk9VUCcgJiYgb3B0LnBhcmVudE5vZGUuZGlzYWJsZWQpKSB7XHJcbiAgICAgICAgdmFsdWUucHVzaChvcHQudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFzZWxlY3QubXVsdGlwbGUpIHtcclxuICAgICAgcmV0dXJuICF2YWx1ZS5sZW5ndGggPyBudWxsIDogdmFsdWVbMF07XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgLy8gc2V0IGRhdGEtc2VsZWN0ZWQgb24gc2VsZWN0IGVsZW1lbnQgaWYgdGhlIHZhbHVlIGhhcyBiZWVuIHByb2dyYW1tYXRpY2FsbHkgc2VsZWN0ZWRcclxuICAvLyBwcmlvciB0byBpbml0aWFsaXphdGlvbiBvZiBib290c3RyYXAtc2VsZWN0XHJcbiAgLy8gKiBjb25zaWRlciByZW1vdmluZyBvciByZXBsYWNpbmcgYW4gYWx0ZXJuYXRpdmUgbWV0aG9kICpcclxuICB2YXIgdmFsSG9va3MgPSB7XHJcbiAgICB1c2VEZWZhdWx0OiBmYWxzZSxcclxuICAgIF9zZXQ6ICQudmFsSG9va3Muc2VsZWN0LnNldFxyXG4gIH07XHJcblxyXG4gICQudmFsSG9va3Muc2VsZWN0LnNldCA9IGZ1bmN0aW9uIChlbGVtLCB2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlICYmICF2YWxIb29rcy51c2VEZWZhdWx0KSAkKGVsZW0pLmRhdGEoJ3NlbGVjdGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgcmV0dXJuIHZhbEhvb2tzLl9zZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICB9O1xyXG5cclxuICB2YXIgY2hhbmdlZEFyZ3VtZW50cyA9IG51bGw7XHJcblxyXG4gIHZhciBFdmVudElzU3VwcG9ydGVkID0gKGZ1bmN0aW9uICgpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgIG5ldyBFdmVudCgnY2hhbmdlJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfSkoKTtcclxuXHJcbiAgJC5mbi50cmlnZ2VyTmF0aXZlID0gZnVuY3Rpb24gKGV2ZW50TmFtZSkge1xyXG4gICAgdmFyIGVsID0gdGhpc1swXSxcclxuICAgICAgICBldmVudDtcclxuXHJcbiAgICBpZiAoZWwuZGlzcGF0Y2hFdmVudCkgeyAvLyBmb3IgbW9kZXJuIGJyb3dzZXJzICYgSUU5K1xyXG4gICAgICBpZiAoRXZlbnRJc1N1cHBvcnRlZCkge1xyXG4gICAgICAgIC8vIEZvciBtb2Rlcm4gYnJvd3NlcnNcclxuICAgICAgICBldmVudCA9IG5ldyBFdmVudChldmVudE5hbWUsIHtcclxuICAgICAgICAgIGJ1YmJsZXM6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBGb3IgSUUgc2luY2UgaXQgZG9lc24ndCBzdXBwb3J0IEV2ZW50IGNvbnN0cnVjdG9yXHJcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKTtcclxuICAgICAgICBldmVudC5pbml0RXZlbnQoZXZlbnROYW1lLCB0cnVlLCBmYWxzZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfSBlbHNlIGlmIChlbC5maXJlRXZlbnQpIHsgLy8gZm9yIElFOFxyXG4gICAgICBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50T2JqZWN0KCk7XHJcbiAgICAgIGV2ZW50LmV2ZW50VHlwZSA9IGV2ZW50TmFtZTtcclxuICAgICAgZWwuZmlyZUV2ZW50KCdvbicgKyBldmVudE5hbWUsIGV2ZW50KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIGZhbGwgYmFjayB0byBqUXVlcnkudHJpZ2dlclxyXG4gICAgICB0aGlzLnRyaWdnZXIoZXZlbnROYW1lKTtcclxuICAgIH1cclxuICB9O1xyXG4gIC8vIDwvZWRpdG9yLWZvbGQ+XHJcblxyXG4gIGZ1bmN0aW9uIHN0cmluZ1NlYXJjaCAobGksIHNlYXJjaFN0cmluZywgbWV0aG9kLCBub3JtYWxpemUpIHtcclxuICAgIHZhciBzdHJpbmdUeXBlcyA9IFtcclxuICAgICAgICAgICdkaXNwbGF5JyxcclxuICAgICAgICAgICdzdWJ0ZXh0JyxcclxuICAgICAgICAgICd0b2tlbnMnXHJcbiAgICAgICAgXSxcclxuICAgICAgICBzZWFyY2hTdWNjZXNzID0gZmFsc2U7XHJcblxyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHJpbmdUeXBlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgc3RyaW5nVHlwZSA9IHN0cmluZ1R5cGVzW2ldLFxyXG4gICAgICAgICAgc3RyaW5nID0gbGlbc3RyaW5nVHlwZV07XHJcblxyXG4gICAgICBpZiAoc3RyaW5nKSB7XHJcbiAgICAgICAgc3RyaW5nID0gc3RyaW5nLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8vIFN0cmlwIEhUTUwgdGFncy4gVGhpcyBpc24ndCBwZXJmZWN0LCBidXQgaXQncyBtdWNoIGZhc3RlciB0aGFuIGFueSBvdGhlciBtZXRob2RcclxuICAgICAgICBpZiAoc3RyaW5nVHlwZSA9PT0gJ2Rpc3BsYXknKSB7XHJcbiAgICAgICAgICBzdHJpbmcgPSBzdHJpbmcucmVwbGFjZSgvPFtePl0rPi9nLCAnJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9ybWFsaXplKSBzdHJpbmcgPSBub3JtYWxpemVUb0Jhc2Uoc3RyaW5nKTtcclxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gJ2NvbnRhaW5zJykge1xyXG4gICAgICAgICAgc2VhcmNoU3VjY2VzcyA9IHN0cmluZy5pbmRleE9mKHNlYXJjaFN0cmluZykgPj0gMDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2VhcmNoU3VjY2VzcyA9IHN0cmluZy5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2VhcmNoU3VjY2VzcykgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gc2VhcmNoU3VjY2VzcztcclxuICB9XHJcblxyXG4gIGZ1bmN0aW9uIHRvSW50ZWdlciAodmFsdWUpIHtcclxuICAgIHJldHVybiBwYXJzZUludCh2YWx1ZSwgMTApIHx8IDA7XHJcbiAgfVxyXG5cclxuICAvLyBCb3Jyb3dlZCBmcm9tIExvZGFzaCAoXy5kZWJ1cnIpXHJcbiAgLyoqIFVzZWQgdG8gbWFwIExhdGluIFVuaWNvZGUgbGV0dGVycyB0byBiYXNpYyBMYXRpbiBsZXR0ZXJzLiAqL1xyXG4gIHZhciBkZWJ1cnJlZExldHRlcnMgPSB7XHJcbiAgICAvLyBMYXRpbi0xIFN1cHBsZW1lbnQgYmxvY2suXHJcbiAgICAnXFx4YzAnOiAnQScsICAnXFx4YzEnOiAnQScsICdcXHhjMic6ICdBJywgJ1xceGMzJzogJ0EnLCAnXFx4YzQnOiAnQScsICdcXHhjNSc6ICdBJyxcclxuICAgICdcXHhlMCc6ICdhJywgICdcXHhlMSc6ICdhJywgJ1xceGUyJzogJ2EnLCAnXFx4ZTMnOiAnYScsICdcXHhlNCc6ICdhJywgJ1xceGU1JzogJ2EnLFxyXG4gICAgJ1xceGM3JzogJ0MnLCAgJ1xceGU3JzogJ2MnLFxyXG4gICAgJ1xceGQwJzogJ0QnLCAgJ1xceGYwJzogJ2QnLFxyXG4gICAgJ1xceGM4JzogJ0UnLCAgJ1xceGM5JzogJ0UnLCAnXFx4Y2EnOiAnRScsICdcXHhjYic6ICdFJyxcclxuICAgICdcXHhlOCc6ICdlJywgICdcXHhlOSc6ICdlJywgJ1xceGVhJzogJ2UnLCAnXFx4ZWInOiAnZScsXHJcbiAgICAnXFx4Y2MnOiAnSScsICAnXFx4Y2QnOiAnSScsICdcXHhjZSc6ICdJJywgJ1xceGNmJzogJ0knLFxyXG4gICAgJ1xceGVjJzogJ2knLCAgJ1xceGVkJzogJ2knLCAnXFx4ZWUnOiAnaScsICdcXHhlZic6ICdpJyxcclxuICAgICdcXHhkMSc6ICdOJywgICdcXHhmMSc6ICduJyxcclxuICAgICdcXHhkMic6ICdPJywgICdcXHhkMyc6ICdPJywgJ1xceGQ0JzogJ08nLCAnXFx4ZDUnOiAnTycsICdcXHhkNic6ICdPJywgJ1xceGQ4JzogJ08nLFxyXG4gICAgJ1xceGYyJzogJ28nLCAgJ1xceGYzJzogJ28nLCAnXFx4ZjQnOiAnbycsICdcXHhmNSc6ICdvJywgJ1xceGY2JzogJ28nLCAnXFx4ZjgnOiAnbycsXHJcbiAgICAnXFx4ZDknOiAnVScsICAnXFx4ZGEnOiAnVScsICdcXHhkYic6ICdVJywgJ1xceGRjJzogJ1UnLFxyXG4gICAgJ1xceGY5JzogJ3UnLCAgJ1xceGZhJzogJ3UnLCAnXFx4ZmInOiAndScsICdcXHhmYyc6ICd1JyxcclxuICAgICdcXHhkZCc6ICdZJywgICdcXHhmZCc6ICd5JywgJ1xceGZmJzogJ3knLFxyXG4gICAgJ1xceGM2JzogJ0FlJywgJ1xceGU2JzogJ2FlJyxcclxuICAgICdcXHhkZSc6ICdUaCcsICdcXHhmZSc6ICd0aCcsXHJcbiAgICAnXFx4ZGYnOiAnc3MnLFxyXG4gICAgLy8gTGF0aW4gRXh0ZW5kZWQtQSBibG9jay5cclxuICAgICdcXHUwMTAwJzogJ0EnLCAgJ1xcdTAxMDInOiAnQScsICdcXHUwMTA0JzogJ0EnLFxyXG4gICAgJ1xcdTAxMDEnOiAnYScsICAnXFx1MDEwMyc6ICdhJywgJ1xcdTAxMDUnOiAnYScsXHJcbiAgICAnXFx1MDEwNic6ICdDJywgICdcXHUwMTA4JzogJ0MnLCAnXFx1MDEwYSc6ICdDJywgJ1xcdTAxMGMnOiAnQycsXHJcbiAgICAnXFx1MDEwNyc6ICdjJywgICdcXHUwMTA5JzogJ2MnLCAnXFx1MDEwYic6ICdjJywgJ1xcdTAxMGQnOiAnYycsXHJcbiAgICAnXFx1MDEwZSc6ICdEJywgICdcXHUwMTEwJzogJ0QnLCAnXFx1MDEwZic6ICdkJywgJ1xcdTAxMTEnOiAnZCcsXHJcbiAgICAnXFx1MDExMic6ICdFJywgICdcXHUwMTE0JzogJ0UnLCAnXFx1MDExNic6ICdFJywgJ1xcdTAxMTgnOiAnRScsICdcXHUwMTFhJzogJ0UnLFxyXG4gICAgJ1xcdTAxMTMnOiAnZScsICAnXFx1MDExNSc6ICdlJywgJ1xcdTAxMTcnOiAnZScsICdcXHUwMTE5JzogJ2UnLCAnXFx1MDExYic6ICdlJyxcclxuICAgICdcXHUwMTFjJzogJ0cnLCAgJ1xcdTAxMWUnOiAnRycsICdcXHUwMTIwJzogJ0cnLCAnXFx1MDEyMic6ICdHJyxcclxuICAgICdcXHUwMTFkJzogJ2cnLCAgJ1xcdTAxMWYnOiAnZycsICdcXHUwMTIxJzogJ2cnLCAnXFx1MDEyMyc6ICdnJyxcclxuICAgICdcXHUwMTI0JzogJ0gnLCAgJ1xcdTAxMjYnOiAnSCcsICdcXHUwMTI1JzogJ2gnLCAnXFx1MDEyNyc6ICdoJyxcclxuICAgICdcXHUwMTI4JzogJ0knLCAgJ1xcdTAxMmEnOiAnSScsICdcXHUwMTJjJzogJ0knLCAnXFx1MDEyZSc6ICdJJywgJ1xcdTAxMzAnOiAnSScsXHJcbiAgICAnXFx1MDEyOSc6ICdpJywgICdcXHUwMTJiJzogJ2knLCAnXFx1MDEyZCc6ICdpJywgJ1xcdTAxMmYnOiAnaScsICdcXHUwMTMxJzogJ2knLFxyXG4gICAgJ1xcdTAxMzQnOiAnSicsICAnXFx1MDEzNSc6ICdqJyxcclxuICAgICdcXHUwMTM2JzogJ0snLCAgJ1xcdTAxMzcnOiAnaycsICdcXHUwMTM4JzogJ2snLFxyXG4gICAgJ1xcdTAxMzknOiAnTCcsICAnXFx1MDEzYic6ICdMJywgJ1xcdTAxM2QnOiAnTCcsICdcXHUwMTNmJzogJ0wnLCAnXFx1MDE0MSc6ICdMJyxcclxuICAgICdcXHUwMTNhJzogJ2wnLCAgJ1xcdTAxM2MnOiAnbCcsICdcXHUwMTNlJzogJ2wnLCAnXFx1MDE0MCc6ICdsJywgJ1xcdTAxNDInOiAnbCcsXHJcbiAgICAnXFx1MDE0Myc6ICdOJywgICdcXHUwMTQ1JzogJ04nLCAnXFx1MDE0Nyc6ICdOJywgJ1xcdTAxNGEnOiAnTicsXHJcbiAgICAnXFx1MDE0NCc6ICduJywgICdcXHUwMTQ2JzogJ24nLCAnXFx1MDE0OCc6ICduJywgJ1xcdTAxNGInOiAnbicsXHJcbiAgICAnXFx1MDE0Yyc6ICdPJywgICdcXHUwMTRlJzogJ08nLCAnXFx1MDE1MCc6ICdPJyxcclxuICAgICdcXHUwMTRkJzogJ28nLCAgJ1xcdTAxNGYnOiAnbycsICdcXHUwMTUxJzogJ28nLFxyXG4gICAgJ1xcdTAxNTQnOiAnUicsICAnXFx1MDE1Nic6ICdSJywgJ1xcdTAxNTgnOiAnUicsXHJcbiAgICAnXFx1MDE1NSc6ICdyJywgICdcXHUwMTU3JzogJ3InLCAnXFx1MDE1OSc6ICdyJyxcclxuICAgICdcXHUwMTVhJzogJ1MnLCAgJ1xcdTAxNWMnOiAnUycsICdcXHUwMTVlJzogJ1MnLCAnXFx1MDE2MCc6ICdTJyxcclxuICAgICdcXHUwMTViJzogJ3MnLCAgJ1xcdTAxNWQnOiAncycsICdcXHUwMTVmJzogJ3MnLCAnXFx1MDE2MSc6ICdzJyxcclxuICAgICdcXHUwMTYyJzogJ1QnLCAgJ1xcdTAxNjQnOiAnVCcsICdcXHUwMTY2JzogJ1QnLFxyXG4gICAgJ1xcdTAxNjMnOiAndCcsICAnXFx1MDE2NSc6ICd0JywgJ1xcdTAxNjcnOiAndCcsXHJcbiAgICAnXFx1MDE2OCc6ICdVJywgICdcXHUwMTZhJzogJ1UnLCAnXFx1MDE2Yyc6ICdVJywgJ1xcdTAxNmUnOiAnVScsICdcXHUwMTcwJzogJ1UnLCAnXFx1MDE3Mic6ICdVJyxcclxuICAgICdcXHUwMTY5JzogJ3UnLCAgJ1xcdTAxNmInOiAndScsICdcXHUwMTZkJzogJ3UnLCAnXFx1MDE2Zic6ICd1JywgJ1xcdTAxNzEnOiAndScsICdcXHUwMTczJzogJ3UnLFxyXG4gICAgJ1xcdTAxNzQnOiAnVycsICAnXFx1MDE3NSc6ICd3JyxcclxuICAgICdcXHUwMTc2JzogJ1knLCAgJ1xcdTAxNzcnOiAneScsICdcXHUwMTc4JzogJ1knLFxyXG4gICAgJ1xcdTAxNzknOiAnWicsICAnXFx1MDE3Yic6ICdaJywgJ1xcdTAxN2QnOiAnWicsXHJcbiAgICAnXFx1MDE3YSc6ICd6JywgICdcXHUwMTdjJzogJ3onLCAnXFx1MDE3ZSc6ICd6JyxcclxuICAgICdcXHUwMTMyJzogJ0lKJywgJ1xcdTAxMzMnOiAnaWonLFxyXG4gICAgJ1xcdTAxNTInOiAnT2UnLCAnXFx1MDE1Myc6ICdvZScsXHJcbiAgICAnXFx1MDE0OSc6IFwiJ25cIiwgJ1xcdTAxN2YnOiAncydcclxuICB9O1xyXG5cclxuICAvKiogVXNlZCB0byBtYXRjaCBMYXRpbiBVbmljb2RlIGxldHRlcnMgKGV4Y2x1ZGluZyBtYXRoZW1hdGljYWwgb3BlcmF0b3JzKS4gKi9cclxuICB2YXIgcmVMYXRpbiA9IC9bXFx4YzAtXFx4ZDZcXHhkOC1cXHhmNlxceGY4LVxceGZmXFx1MDEwMC1cXHUwMTdmXS9nO1xyXG5cclxuICAvKiogVXNlZCB0byBjb21wb3NlIHVuaWNvZGUgY2hhcmFjdGVyIGNsYXNzZXMuICovXHJcbiAgdmFyIHJzQ29tYm9NYXJrc1JhbmdlID0gJ1xcXFx1MDMwMC1cXFxcdTAzNmYnLFxyXG4gICAgICByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgPSAnXFxcXHVmZTIwLVxcXFx1ZmUyZicsXHJcbiAgICAgIHJzQ29tYm9TeW1ib2xzUmFuZ2UgPSAnXFxcXHUyMGQwLVxcXFx1MjBmZicsXHJcbiAgICAgIHJzQ29tYm9NYXJrc0V4dGVuZGVkUmFuZ2UgPSAnXFxcXHUxYWIwLVxcXFx1MWFmZicsXHJcbiAgICAgIHJzQ29tYm9NYXJrc1N1cHBsZW1lbnRSYW5nZSA9ICdcXFxcdTFkYzAtXFxcXHUxZGZmJyxcclxuICAgICAgcnNDb21ib1JhbmdlID0gcnNDb21ib01hcmtzUmFuZ2UgKyByZUNvbWJvSGFsZk1hcmtzUmFuZ2UgKyByc0NvbWJvU3ltYm9sc1JhbmdlICsgcnNDb21ib01hcmtzRXh0ZW5kZWRSYW5nZSArIHJzQ29tYm9NYXJrc1N1cHBsZW1lbnRSYW5nZTtcclxuXHJcbiAgLyoqIFVzZWQgdG8gY29tcG9zZSB1bmljb2RlIGNhcHR1cmUgZ3JvdXBzLiAqL1xyXG4gIHZhciByc0NvbWJvID0gJ1snICsgcnNDb21ib1JhbmdlICsgJ10nO1xyXG5cclxuICAvKipcclxuICAgKiBVc2VkIHRvIG1hdGNoIFtjb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3NdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0NvbWJpbmluZ19EaWFjcml0aWNhbF9NYXJrcykgYW5kXHJcbiAgICogW2NvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQ29tYmluaW5nX0RpYWNyaXRpY2FsX01hcmtzX2Zvcl9TeW1ib2xzKS5cclxuICAgKi9cclxuICB2YXIgcmVDb21ib01hcmsgPSBSZWdFeHAocnNDb21ibywgJ2cnKTtcclxuXHJcbiAgZnVuY3Rpb24gZGVidXJyTGV0dGVyIChrZXkpIHtcclxuICAgIHJldHVybiBkZWJ1cnJlZExldHRlcnNba2V5XTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBub3JtYWxpemVUb0Jhc2UgKHN0cmluZykge1xyXG4gICAgc3RyaW5nID0gc3RyaW5nLnRvU3RyaW5nKCk7XHJcbiAgICByZXR1cm4gc3RyaW5nICYmIHN0cmluZy5yZXBsYWNlKHJlTGF0aW4sIGRlYnVyckxldHRlcikucmVwbGFjZShyZUNvbWJvTWFyaywgJycpO1xyXG4gIH1cclxuXHJcbiAgLy8gTGlzdCBvZiBIVE1MIGVudGl0aWVzIGZvciBlc2NhcGluZy5cclxuICB2YXIgZXNjYXBlTWFwID0ge1xyXG4gICAgJyYnOiAnJmFtcDsnLFxyXG4gICAgJzwnOiAnJmx0OycsXHJcbiAgICAnPic6ICcmZ3Q7JyxcclxuICAgICdcIic6ICcmcXVvdDsnLFxyXG4gICAgXCInXCI6ICcmI3gyNzsnLFxyXG4gICAgJ2AnOiAnJiN4NjA7J1xyXG4gIH07XHJcblxyXG4gIC8vIEZ1bmN0aW9ucyBmb3IgZXNjYXBpbmcgYW5kIHVuZXNjYXBpbmcgc3RyaW5ncyB0by9mcm9tIEhUTUwgaW50ZXJwb2xhdGlvbi5cclxuICB2YXIgY3JlYXRlRXNjYXBlciA9IGZ1bmN0aW9uIChtYXApIHtcclxuICAgIHZhciBlc2NhcGVyID0gZnVuY3Rpb24gKG1hdGNoKSB7XHJcbiAgICAgIHJldHVybiBtYXBbbWF0Y2hdO1xyXG4gICAgfTtcclxuICAgIC8vIFJlZ2V4ZXMgZm9yIGlkZW50aWZ5aW5nIGEga2V5IHRoYXQgbmVlZHMgdG8gYmUgZXNjYXBlZC5cclxuICAgIHZhciBzb3VyY2UgPSAnKD86JyArIE9iamVjdC5rZXlzKG1hcCkuam9pbignfCcpICsgJyknO1xyXG4gICAgdmFyIHRlc3RSZWdleHAgPSBSZWdFeHAoc291cmNlKTtcclxuICAgIHZhciByZXBsYWNlUmVnZXhwID0gUmVnRXhwKHNvdXJjZSwgJ2cnKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoc3RyaW5nKSB7XHJcbiAgICAgIHN0cmluZyA9IHN0cmluZyA9PSBudWxsID8gJycgOiAnJyArIHN0cmluZztcclxuICAgICAgcmV0dXJuIHRlc3RSZWdleHAudGVzdChzdHJpbmcpID8gc3RyaW5nLnJlcGxhY2UocmVwbGFjZVJlZ2V4cCwgZXNjYXBlcikgOiBzdHJpbmc7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHZhciBodG1sRXNjYXBlID0gY3JlYXRlRXNjYXBlcihlc2NhcGVNYXApO1xyXG5cclxuICAvKipcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKiBDb25zdGFudHNcclxuICAgKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICAgKi9cclxuXHJcbiAgdmFyIGtleUNvZGVNYXAgPSB7XHJcbiAgICAzMjogJyAnLFxyXG4gICAgNDg6ICcwJyxcclxuICAgIDQ5OiAnMScsXHJcbiAgICA1MDogJzInLFxyXG4gICAgNTE6ICczJyxcclxuICAgIDUyOiAnNCcsXHJcbiAgICA1MzogJzUnLFxyXG4gICAgNTQ6ICc2JyxcclxuICAgIDU1OiAnNycsXHJcbiAgICA1NjogJzgnLFxyXG4gICAgNTc6ICc5JyxcclxuICAgIDU5OiAnOycsXHJcbiAgICA2NTogJ0EnLFxyXG4gICAgNjY6ICdCJyxcclxuICAgIDY3OiAnQycsXHJcbiAgICA2ODogJ0QnLFxyXG4gICAgNjk6ICdFJyxcclxuICAgIDcwOiAnRicsXHJcbiAgICA3MTogJ0cnLFxyXG4gICAgNzI6ICdIJyxcclxuICAgIDczOiAnSScsXHJcbiAgICA3NDogJ0onLFxyXG4gICAgNzU6ICdLJyxcclxuICAgIDc2OiAnTCcsXHJcbiAgICA3NzogJ00nLFxyXG4gICAgNzg6ICdOJyxcclxuICAgIDc5OiAnTycsXHJcbiAgICA4MDogJ1AnLFxyXG4gICAgODE6ICdRJyxcclxuICAgIDgyOiAnUicsXHJcbiAgICA4MzogJ1MnLFxyXG4gICAgODQ6ICdUJyxcclxuICAgIDg1OiAnVScsXHJcbiAgICA4NjogJ1YnLFxyXG4gICAgODc6ICdXJyxcclxuICAgIDg4OiAnWCcsXHJcbiAgICA4OTogJ1knLFxyXG4gICAgOTA6ICdaJyxcclxuICAgIDk2OiAnMCcsXHJcbiAgICA5NzogJzEnLFxyXG4gICAgOTg6ICcyJyxcclxuICAgIDk5OiAnMycsXHJcbiAgICAxMDA6ICc0JyxcclxuICAgIDEwMTogJzUnLFxyXG4gICAgMTAyOiAnNicsXHJcbiAgICAxMDM6ICc3JyxcclxuICAgIDEwNDogJzgnLFxyXG4gICAgMTA1OiAnOSdcclxuICB9O1xyXG5cclxuICB2YXIga2V5Q29kZXMgPSB7XHJcbiAgICBFU0NBUEU6IDI3LCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBFc2NhcGUgKEVzYykga2V5XHJcbiAgICBFTlRFUjogMTMsIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIEVudGVyIGtleVxyXG4gICAgU1BBQ0U6IDMyLCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciBzcGFjZSBrZXlcclxuICAgIFRBQjogOSwgLy8gS2V5Ym9hcmRFdmVudC53aGljaCB2YWx1ZSBmb3IgdGFiIGtleVxyXG4gICAgQVJST1dfVVA6IDM4LCAvLyBLZXlib2FyZEV2ZW50LndoaWNoIHZhbHVlIGZvciB1cCBhcnJvdyBrZXlcclxuICAgIEFSUk9XX0RPV046IDQwIC8vIEtleWJvYXJkRXZlbnQud2hpY2ggdmFsdWUgZm9yIGRvd24gYXJyb3cga2V5XHJcbiAgfVxyXG5cclxuICB2YXIgdmVyc2lvbiA9IHtcclxuICAgIHN1Y2Nlc3M6IGZhbHNlLFxyXG4gICAgbWFqb3I6ICczJ1xyXG4gIH07XHJcblxyXG4gIHRyeSB7XHJcbiAgICB2ZXJzaW9uLmZ1bGwgPSAoJC5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvci5WRVJTSU9OIHx8ICcnKS5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XHJcbiAgICB2ZXJzaW9uLm1ham9yID0gdmVyc2lvbi5mdWxsWzBdO1xyXG4gICAgdmVyc2lvbi5zdWNjZXNzID0gdHJ1ZTtcclxuICB9IGNhdGNoIChlcnIpIHtcclxuICAgIC8vIGRvIG5vdGhpbmdcclxuICB9XHJcblxyXG4gIHZhciBzZWxlY3RJZCA9IDA7XHJcblxyXG4gIHZhciBFVkVOVF9LRVkgPSAnLmJzLnNlbGVjdCc7XHJcblxyXG4gIHZhciBjbGFzc05hbWVzID0ge1xyXG4gICAgRElTQUJMRUQ6ICdkaXNhYmxlZCcsXHJcbiAgICBESVZJREVSOiAnZGl2aWRlcicsXHJcbiAgICBTSE9XOiAnb3BlbicsXHJcbiAgICBEUk9QVVA6ICdkcm9wdXAnLFxyXG4gICAgTUVOVTogJ2Ryb3Bkb3duLW1lbnUnLFxyXG4gICAgTUVOVVJJR0hUOiAnZHJvcGRvd24tbWVudS1yaWdodCcsXHJcbiAgICBNRU5VTEVGVDogJ2Ryb3Bkb3duLW1lbnUtbGVmdCcsXHJcbiAgICAvLyB0by1kbzogcmVwbGFjZSB3aXRoIG1vcmUgYWR2YW5jZWQgdGVtcGxhdGUvY3VzdG9taXphdGlvbiBvcHRpb25zXHJcbiAgICBCVVRUT05DTEFTUzogJ2J0bi1kZWZhdWx0JyxcclxuICAgIFBPUE9WRVJIRUFERVI6ICdwb3BvdmVyLXRpdGxlJyxcclxuICAgIElDT05CQVNFOiAnZ2x5cGhpY29uJyxcclxuICAgIFRJQ0tJQ09OOiAnZ2x5cGhpY29uLW9rJ1xyXG4gIH1cclxuXHJcbiAgdmFyIFNlbGVjdG9yID0ge1xyXG4gICAgTUVOVTogJy4nICsgY2xhc3NOYW1lcy5NRU5VXHJcbiAgfVxyXG5cclxuICB2YXIgZWxlbWVudFRlbXBsYXRlcyA9IHtcclxuICAgIGRpdjogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JyksXHJcbiAgICBzcGFuOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyksXHJcbiAgICBpOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyksXHJcbiAgICBzdWJ0ZXh0OiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzbWFsbCcpLFxyXG4gICAgYTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpLFxyXG4gICAgbGk6IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyksXHJcbiAgICB3aGl0ZXNwYWNlOiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnXFx1MDBBMCcpLFxyXG4gICAgZnJhZ21lbnQ6IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKVxyXG4gIH1cclxuXHJcbiAgZWxlbWVudFRlbXBsYXRlcy5ub1Jlc3VsdHMgPSBlbGVtZW50VGVtcGxhdGVzLmxpLmNsb25lTm9kZShmYWxzZSk7XHJcbiAgZWxlbWVudFRlbXBsYXRlcy5ub1Jlc3VsdHMuY2xhc3NOYW1lID0gJ25vLXJlc3VsdHMnO1xyXG5cclxuICBlbGVtZW50VGVtcGxhdGVzLmEuc2V0QXR0cmlidXRlKCdyb2xlJywgJ29wdGlvbicpO1xyXG4gIGVsZW1lbnRUZW1wbGF0ZXMuYS5jbGFzc05hbWUgPSAnZHJvcGRvd24taXRlbSc7XHJcblxyXG4gIGVsZW1lbnRUZW1wbGF0ZXMuc3VidGV4dC5jbGFzc05hbWUgPSAndGV4dC1tdXRlZCc7XHJcblxyXG4gIGVsZW1lbnRUZW1wbGF0ZXMudGV4dCA9IGVsZW1lbnRUZW1wbGF0ZXMuc3Bhbi5jbG9uZU5vZGUoZmFsc2UpO1xyXG4gIGVsZW1lbnRUZW1wbGF0ZXMudGV4dC5jbGFzc05hbWUgPSAndGV4dCc7XHJcblxyXG4gIGVsZW1lbnRUZW1wbGF0ZXMuY2hlY2tNYXJrID0gZWxlbWVudFRlbXBsYXRlcy5zcGFuLmNsb25lTm9kZShmYWxzZSk7XHJcblxyXG4gIHZhciBSRUdFWFBfQVJST1cgPSBuZXcgUmVnRXhwKGtleUNvZGVzLkFSUk9XX1VQICsgJ3wnICsga2V5Q29kZXMuQVJST1dfRE9XTik7XHJcbiAgdmFyIFJFR0VYUF9UQUJfT1JfRVNDQVBFID0gbmV3IFJlZ0V4cCgnXicgKyBrZXlDb2Rlcy5UQUIgKyAnJHwnICsga2V5Q29kZXMuRVNDQVBFKTtcclxuXHJcbiAgdmFyIGdlbmVyYXRlT3B0aW9uID0ge1xyXG4gICAgbGk6IGZ1bmN0aW9uIChjb250ZW50LCBjbGFzc2VzLCBvcHRncm91cCkge1xyXG4gICAgICB2YXIgbGkgPSBlbGVtZW50VGVtcGxhdGVzLmxpLmNsb25lTm9kZShmYWxzZSk7XHJcblxyXG4gICAgICBpZiAoY29udGVudCkge1xyXG4gICAgICAgIGlmIChjb250ZW50Lm5vZGVUeXBlID09PSAxIHx8IGNvbnRlbnQubm9kZVR5cGUgPT09IDExKSB7XHJcbiAgICAgICAgICBsaS5hcHBlbmRDaGlsZChjb250ZW50KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGkuaW5uZXJIVE1MID0gY29udGVudDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0eXBlb2YgY2xhc3NlcyAhPT0gJ3VuZGVmaW5lZCcgJiYgY2xhc3NlcyAhPT0gJycpIGxpLmNsYXNzTmFtZSA9IGNsYXNzZXM7XHJcbiAgICAgIGlmICh0eXBlb2Ygb3B0Z3JvdXAgIT09ICd1bmRlZmluZWQnICYmIG9wdGdyb3VwICE9PSBudWxsKSBsaS5jbGFzc0xpc3QuYWRkKCdvcHRncm91cC0nICsgb3B0Z3JvdXApO1xyXG5cclxuICAgICAgcmV0dXJuIGxpO1xyXG4gICAgfSxcclxuXHJcbiAgICBhOiBmdW5jdGlvbiAodGV4dCwgY2xhc3NlcywgaW5saW5lKSB7XHJcbiAgICAgIHZhciBhID0gZWxlbWVudFRlbXBsYXRlcy5hLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgIGlmICh0ZXh0KSB7XHJcbiAgICAgICAgaWYgKHRleHQubm9kZVR5cGUgPT09IDExKSB7XHJcbiAgICAgICAgICBhLmFwcGVuZENoaWxkKHRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodHlwZW9mIGNsYXNzZXMgIT09ICd1bmRlZmluZWQnICYmIGNsYXNzZXMgIT09ICcnKSBhLmNsYXNzTGlzdC5hZGQuYXBwbHkoYS5jbGFzc0xpc3QsIGNsYXNzZXMuc3BsaXQoL1xccysvKSk7XHJcbiAgICAgIGlmIChpbmxpbmUpIGEuc2V0QXR0cmlidXRlKCdzdHlsZScsIGlubGluZSk7XHJcblxyXG4gICAgICByZXR1cm4gYTtcclxuICAgIH0sXHJcblxyXG4gICAgdGV4dDogZnVuY3Rpb24gKG9wdGlvbnMsIHVzZUZyYWdtZW50KSB7XHJcbiAgICAgIHZhciB0ZXh0RWxlbWVudCA9IGVsZW1lbnRUZW1wbGF0ZXMudGV4dC5jbG9uZU5vZGUoZmFsc2UpLFxyXG4gICAgICAgICAgc3VidGV4dEVsZW1lbnQsXHJcbiAgICAgICAgICBpY29uRWxlbWVudDtcclxuXHJcbiAgICAgIGlmIChvcHRpb25zLmNvbnRlbnQpIHtcclxuICAgICAgICB0ZXh0RWxlbWVudC5pbm5lckhUTUwgPSBvcHRpb25zLmNvbnRlbnQ7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGV4dEVsZW1lbnQudGV4dENvbnRlbnQgPSBvcHRpb25zLnRleHQ7XHJcblxyXG4gICAgICAgIGlmIChvcHRpb25zLmljb24pIHtcclxuICAgICAgICAgIHZhciB3aGl0ZXNwYWNlID0gZWxlbWVudFRlbXBsYXRlcy53aGl0ZXNwYWNlLmNsb25lTm9kZShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgLy8gbmVlZCB0byB1c2UgPGk+IGZvciBpY29ucyBpbiB0aGUgYnV0dG9uIHRvIHByZXZlbnQgYSBicmVha2luZyBjaGFuZ2VcclxuICAgICAgICAgIC8vIG5vdGU6IHN3aXRjaCB0byBzcGFuIGluIG5leHQgbWFqb3IgcmVsZWFzZVxyXG4gICAgICAgICAgaWNvbkVsZW1lbnQgPSAodXNlRnJhZ21lbnQgPT09IHRydWUgPyBlbGVtZW50VGVtcGxhdGVzLmkgOiBlbGVtZW50VGVtcGxhdGVzLnNwYW4pLmNsb25lTm9kZShmYWxzZSk7XHJcbiAgICAgICAgICBpY29uRWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLm9wdGlvbnMuaWNvbkJhc2UgKyAnICcgKyBvcHRpb25zLmljb247XHJcblxyXG4gICAgICAgICAgZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudC5hcHBlbmRDaGlsZChpY29uRWxlbWVudCk7XHJcbiAgICAgICAgICBlbGVtZW50VGVtcGxhdGVzLmZyYWdtZW50LmFwcGVuZENoaWxkKHdoaXRlc3BhY2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuc3VidGV4dCkge1xyXG4gICAgICAgICAgc3VidGV4dEVsZW1lbnQgPSBlbGVtZW50VGVtcGxhdGVzLnN1YnRleHQuY2xvbmVOb2RlKGZhbHNlKTtcclxuICAgICAgICAgIHN1YnRleHRFbGVtZW50LnRleHRDb250ZW50ID0gb3B0aW9ucy5zdWJ0ZXh0O1xyXG4gICAgICAgICAgdGV4dEVsZW1lbnQuYXBwZW5kQ2hpbGQoc3VidGV4dEVsZW1lbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHVzZUZyYWdtZW50ID09PSB0cnVlKSB7XHJcbiAgICAgICAgd2hpbGUgKHRleHRFbGVtZW50LmNoaWxkTm9kZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudC5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudC5hcHBlbmRDaGlsZCh0ZXh0RWxlbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBlbGVtZW50VGVtcGxhdGVzLmZyYWdtZW50O1xyXG4gICAgfSxcclxuXHJcbiAgICBsYWJlbDogZnVuY3Rpb24gKG9wdGlvbnMpIHtcclxuICAgICAgdmFyIHRleHRFbGVtZW50ID0gZWxlbWVudFRlbXBsYXRlcy50ZXh0LmNsb25lTm9kZShmYWxzZSksXHJcbiAgICAgICAgICBzdWJ0ZXh0RWxlbWVudCxcclxuICAgICAgICAgIGljb25FbGVtZW50O1xyXG5cclxuICAgICAgdGV4dEVsZW1lbnQuaW5uZXJIVE1MID0gb3B0aW9ucy5kaXNwbGF5O1xyXG5cclxuICAgICAgaWYgKG9wdGlvbnMuaWNvbikge1xyXG4gICAgICAgIHZhciB3aGl0ZXNwYWNlID0gZWxlbWVudFRlbXBsYXRlcy53aGl0ZXNwYWNlLmNsb25lTm9kZShmYWxzZSk7XHJcblxyXG4gICAgICAgIGljb25FbGVtZW50ID0gZWxlbWVudFRlbXBsYXRlcy5zcGFuLmNsb25lTm9kZShmYWxzZSk7XHJcbiAgICAgICAgaWNvbkVsZW1lbnQuY2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmljb25CYXNlICsgJyAnICsgb3B0aW9ucy5pY29uO1xyXG5cclxuICAgICAgICBlbGVtZW50VGVtcGxhdGVzLmZyYWdtZW50LmFwcGVuZENoaWxkKGljb25FbGVtZW50KTtcclxuICAgICAgICBlbGVtZW50VGVtcGxhdGVzLmZyYWdtZW50LmFwcGVuZENoaWxkKHdoaXRlc3BhY2UpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAob3B0aW9ucy5zdWJ0ZXh0KSB7XHJcbiAgICAgICAgc3VidGV4dEVsZW1lbnQgPSBlbGVtZW50VGVtcGxhdGVzLnN1YnRleHQuY2xvbmVOb2RlKGZhbHNlKTtcclxuICAgICAgICBzdWJ0ZXh0RWxlbWVudC50ZXh0Q29udGVudCA9IG9wdGlvbnMuc3VidGV4dDtcclxuICAgICAgICB0ZXh0RWxlbWVudC5hcHBlbmRDaGlsZChzdWJ0ZXh0RWxlbWVudCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGVsZW1lbnRUZW1wbGF0ZXMuZnJhZ21lbnQuYXBwZW5kQ2hpbGQodGV4dEVsZW1lbnQpO1xyXG5cclxuICAgICAgcmV0dXJuIGVsZW1lbnRUZW1wbGF0ZXMuZnJhZ21lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBzaG93Tm9SZXN1bHRzIChzZWFyY2hNYXRjaCwgc2VhcmNoVmFsdWUpIHtcclxuICAgIGlmICghc2VhcmNoTWF0Y2gubGVuZ3RoKSB7XHJcbiAgICAgIGVsZW1lbnRUZW1wbGF0ZXMubm9SZXN1bHRzLmlubmVySFRNTCA9IHRoaXMub3B0aW9ucy5ub25lUmVzdWx0c1RleHQucmVwbGFjZSgnezB9JywgJ1wiJyArIGh0bWxFc2NhcGUoc2VhcmNoVmFsdWUpICsgJ1wiJyk7XHJcbiAgICAgIHRoaXMuJG1lbnVJbm5lclswXS5maXJzdENoaWxkLmFwcGVuZENoaWxkKGVsZW1lbnRUZW1wbGF0ZXMubm9SZXN1bHRzKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZhciBTZWxlY3RwaWNrZXIgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xyXG4gICAgdmFyIHRoYXQgPSB0aGlzO1xyXG5cclxuICAgIC8vIGJvb3RzdHJhcC1zZWxlY3QgaGFzIGJlZW4gaW5pdGlhbGl6ZWQgLSByZXZlcnQgdmFsSG9va3Muc2VsZWN0LnNldCBiYWNrIHRvIGl0cyBvcmlnaW5hbCBmdW5jdGlvblxyXG4gICAgaWYgKCF2YWxIb29rcy51c2VEZWZhdWx0KSB7XHJcbiAgICAgICQudmFsSG9va3Muc2VsZWN0LnNldCA9IHZhbEhvb2tzLl9zZXQ7XHJcbiAgICAgIHZhbEhvb2tzLnVzZURlZmF1bHQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xyXG4gICAgdGhpcy4kbmV3RWxlbWVudCA9IG51bGw7XHJcbiAgICB0aGlzLiRidXR0b24gPSBudWxsO1xyXG4gICAgdGhpcy4kbWVudSA9IG51bGw7XHJcbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xyXG4gICAgdGhpcy5zZWxlY3RwaWNrZXIgPSB7XHJcbiAgICAgIG1haW46IHt9LFxyXG4gICAgICBzZWFyY2g6IHt9LFxyXG4gICAgICBjdXJyZW50OiB7fSwgLy8gY3VycmVudCBjaGFuZ2VzIGlmIGEgc2VhcmNoIGlzIGluIHByb2dyZXNzXHJcbiAgICAgIHZpZXc6IHt9LFxyXG4gICAgICBpc1NlYXJjaGluZzogZmFsc2UsXHJcbiAgICAgIGtleWRvd246IHtcclxuICAgICAgICBrZXlIaXN0b3J5OiAnJyxcclxuICAgICAgICByZXNldEtleUhpc3Rvcnk6IHtcclxuICAgICAgICAgIHN0YXJ0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5rZXlkb3duLmtleUhpc3RvcnkgPSAnJztcclxuICAgICAgICAgICAgfSwgODAwKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zaXplSW5mbyA9IHt9O1xyXG5cclxuICAgIC8vIElmIHdlIGhhdmUgbm8gdGl0bGUgeWV0LCB0cnkgdG8gcHVsbCBpdCBmcm9tIHRoZSBodG1sIHRpdGxlIGF0dHJpYnV0ZSAoalF1ZXJ5IGRvZXNudCcgcGljayBpdCB1cCBhcyBpdCdzIG5vdCBhXHJcbiAgICAvLyBkYXRhLWF0dHJpYnV0ZSlcclxuICAgIGlmICh0aGlzLm9wdGlvbnMudGl0bGUgPT09IG51bGwpIHtcclxuICAgICAgdGhpcy5vcHRpb25zLnRpdGxlID0gdGhpcy4kZWxlbWVudC5hdHRyKCd0aXRsZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEZvcm1hdCB3aW5kb3cgcGFkZGluZ1xyXG4gICAgdmFyIHdpblBhZCA9IHRoaXMub3B0aW9ucy53aW5kb3dQYWRkaW5nO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5QYWQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgIHRoaXMub3B0aW9ucy53aW5kb3dQYWRkaW5nID0gW3dpblBhZCwgd2luUGFkLCB3aW5QYWQsIHdpblBhZF07XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRXhwb3NlIHB1YmxpYyBtZXRob2RzXHJcbiAgICB0aGlzLnZhbCA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUudmFsO1xyXG4gICAgdGhpcy5yZW5kZXIgPSBTZWxlY3RwaWNrZXIucHJvdG90eXBlLnJlbmRlcjtcclxuICAgIHRoaXMucmVmcmVzaCA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUucmVmcmVzaDtcclxuICAgIHRoaXMuc2V0U3R5bGUgPSBTZWxlY3RwaWNrZXIucHJvdG90eXBlLnNldFN0eWxlO1xyXG4gICAgdGhpcy5zZWxlY3RBbGwgPSBTZWxlY3RwaWNrZXIucHJvdG90eXBlLnNlbGVjdEFsbDtcclxuICAgIHRoaXMuZGVzZWxlY3RBbGwgPSBTZWxlY3RwaWNrZXIucHJvdG90eXBlLmRlc2VsZWN0QWxsO1xyXG4gICAgdGhpcy5kZXN0cm95ID0gU2VsZWN0cGlja2VyLnByb3RvdHlwZS5kZXN0cm95O1xyXG4gICAgdGhpcy5yZW1vdmUgPSBTZWxlY3RwaWNrZXIucHJvdG90eXBlLnJlbW92ZTtcclxuICAgIHRoaXMuc2hvdyA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUuc2hvdztcclxuICAgIHRoaXMuaGlkZSA9IFNlbGVjdHBpY2tlci5wcm90b3R5cGUuaGlkZTtcclxuXHJcbiAgICB0aGlzLmluaXQoKTtcclxuICB9O1xyXG5cclxuICBTZWxlY3RwaWNrZXIuVkVSU0lPTiA9ICcxLjEzLjE4JztcclxuXHJcbiAgLy8gcGFydCBvZiB0aGlzIGlzIGR1cGxpY2F0ZWQgaW4gaTE4bi9kZWZhdWx0cy1lbl9VUy5qcy4gTWFrZSBzdXJlIHRvIHVwZGF0ZSBib3RoLlxyXG4gIFNlbGVjdHBpY2tlci5ERUZBVUxUUyA9IHtcclxuICAgIG5vbmVTZWxlY3RlZFRleHQ6ICdOb3RoaW5nIHNlbGVjdGVkJyxcclxuICAgIG5vbmVSZXN1bHRzVGV4dDogJ05vIHJlc3VsdHMgbWF0Y2hlZCB7MH0nLFxyXG4gICAgY291bnRTZWxlY3RlZFRleHQ6IGZ1bmN0aW9uIChudW1TZWxlY3RlZCwgbnVtVG90YWwpIHtcclxuICAgICAgcmV0dXJuIChudW1TZWxlY3RlZCA9PSAxKSA/ICd7MH0gaXRlbSBzZWxlY3RlZCcgOiAnezB9IGl0ZW1zIHNlbGVjdGVkJztcclxuICAgIH0sXHJcbiAgICBtYXhPcHRpb25zVGV4dDogZnVuY3Rpb24gKG51bUFsbCwgbnVtR3JvdXApIHtcclxuICAgICAgcmV0dXJuIFtcclxuICAgICAgICAobnVtQWxsID09IDEpID8gJ0xpbWl0IHJlYWNoZWQgKHtufSBpdGVtIG1heCknIDogJ0xpbWl0IHJlYWNoZWQgKHtufSBpdGVtcyBtYXgpJyxcclxuICAgICAgICAobnVtR3JvdXAgPT0gMSkgPyAnR3JvdXAgbGltaXQgcmVhY2hlZCAoe259IGl0ZW0gbWF4KScgOiAnR3JvdXAgbGltaXQgcmVhY2hlZCAoe259IGl0ZW1zIG1heCknXHJcbiAgICAgIF07XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0QWxsVGV4dDogJ1NlbGVjdCBBbGwnLFxyXG4gICAgZGVzZWxlY3RBbGxUZXh0OiAnRGVzZWxlY3QgQWxsJyxcclxuICAgIGRvbmVCdXR0b246IGZhbHNlLFxyXG4gICAgZG9uZUJ1dHRvblRleHQ6ICdDbG9zZScsXHJcbiAgICBtdWx0aXBsZVNlcGFyYXRvcjogJywgJyxcclxuICAgIHN0eWxlQmFzZTogJ2J0bicsXHJcbiAgICBzdHlsZTogY2xhc3NOYW1lcy5CVVRUT05DTEFTUyxcclxuICAgIHNpemU6ICdhdXRvJyxcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAgc2VsZWN0ZWRUZXh0Rm9ybWF0OiAndmFsdWVzJyxcclxuICAgIHdpZHRoOiBmYWxzZSxcclxuICAgIGNvbnRhaW5lcjogZmFsc2UsXHJcbiAgICBoaWRlRGlzYWJsZWQ6IGZhbHNlLFxyXG4gICAgc2hvd1N1YnRleHQ6IGZhbHNlLFxyXG4gICAgc2hvd0ljb246IHRydWUsXHJcbiAgICBzaG93Q29udGVudDogdHJ1ZSxcclxuICAgIGRyb3B1cEF1dG86IHRydWUsXHJcbiAgICBoZWFkZXI6IGZhbHNlLFxyXG4gICAgbGl2ZVNlYXJjaDogZmFsc2UsXHJcbiAgICBsaXZlU2VhcmNoUGxhY2Vob2xkZXI6IG51bGwsXHJcbiAgICBsaXZlU2VhcmNoTm9ybWFsaXplOiBmYWxzZSxcclxuICAgIGxpdmVTZWFyY2hTdHlsZTogJ2NvbnRhaW5zJyxcclxuICAgIGFjdGlvbnNCb3g6IGZhbHNlLFxyXG4gICAgaWNvbkJhc2U6IGNsYXNzTmFtZXMuSUNPTkJBU0UsXHJcbiAgICB0aWNrSWNvbjogY2xhc3NOYW1lcy5USUNLSUNPTixcclxuICAgIHNob3dUaWNrOiBmYWxzZSxcclxuICAgIHRlbXBsYXRlOiB7XHJcbiAgICAgIGNhcmV0OiAnPHNwYW4gY2xhc3M9XCJjYXJldFwiPjwvc3Bhbj4nXHJcbiAgICB9LFxyXG4gICAgbWF4T3B0aW9uczogZmFsc2UsXHJcbiAgICBtb2JpbGU6IGZhbHNlLFxyXG4gICAgc2VsZWN0T25UYWI6IGZhbHNlLFxyXG4gICAgZHJvcGRvd25BbGlnblJpZ2h0OiBmYWxzZSxcclxuICAgIHdpbmRvd1BhZGRpbmc6IDAsXHJcbiAgICB2aXJ0dWFsU2Nyb2xsOiA2MDAsXHJcbiAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgIHNhbml0aXplOiB0cnVlLFxyXG4gICAgc2FuaXRpemVGbjogbnVsbCxcclxuICAgIHdoaXRlTGlzdDogRGVmYXVsdFdoaXRlbGlzdFxyXG4gIH07XHJcblxyXG4gIFNlbGVjdHBpY2tlci5wcm90b3R5cGUgPSB7XHJcblxyXG4gICAgY29uc3RydWN0b3I6IFNlbGVjdHBpY2tlcixcclxuXHJcbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcyxcclxuICAgICAgICAgIGlkID0gdGhpcy4kZWxlbWVudC5hdHRyKCdpZCcpLFxyXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnRbMF0sXHJcbiAgICAgICAgICBmb3JtID0gZWxlbWVudC5mb3JtO1xyXG5cclxuICAgICAgc2VsZWN0SWQrKztcclxuICAgICAgdGhpcy5zZWxlY3RJZCA9ICdicy1zZWxlY3QtJyArIHNlbGVjdElkO1xyXG5cclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdicy1zZWxlY3QtaGlkZGVuJyk7XHJcblxyXG4gICAgICB0aGlzLm11bHRpcGxlID0gdGhpcy4kZWxlbWVudC5wcm9wKCdtdWx0aXBsZScpO1xyXG4gICAgICB0aGlzLmF1dG9mb2N1cyA9IHRoaXMuJGVsZW1lbnQucHJvcCgnYXV0b2ZvY3VzJyk7XHJcblxyXG4gICAgICBpZiAoZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3ctdGljaycpKSB7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zLnNob3dUaWNrID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kbmV3RWxlbWVudCA9IHRoaXMuY3JlYXRlRHJvcGRvd24oKTtcclxuICAgICAgdGhpcy5idWlsZERhdGEoKTtcclxuICAgICAgdGhpcy4kZWxlbWVudFxyXG4gICAgICAgIC5hZnRlcih0aGlzLiRuZXdFbGVtZW50KVxyXG4gICAgICAgIC5wcmVwZW5kVG8odGhpcy4kbmV3RWxlbWVudCk7XHJcblxyXG4gICAgICAvLyBlbnN1cmUgc2VsZWN0IGlzIGFzc29jaWF0ZWQgd2l0aCBmb3JtIGVsZW1lbnQgaWYgaXQgZ290IHVubGlua2VkIGFmdGVyIG1vdmluZyBpdCBpbnNpZGUgbmV3RWxlbWVudFxyXG4gICAgICBpZiAoZm9ybSAmJiBlbGVtZW50LmZvcm0gPT09IG51bGwpIHtcclxuICAgICAgICBpZiAoIWZvcm0uaWQpIGZvcm0uaWQgPSAnZm9ybS0nICsgdGhpcy5zZWxlY3RJZDtcclxuICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9ybScsIGZvcm0uaWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiRidXR0b24gPSB0aGlzLiRuZXdFbGVtZW50LmNoaWxkcmVuKCdidXR0b24nKTtcclxuICAgICAgdGhpcy4kbWVudSA9IHRoaXMuJG5ld0VsZW1lbnQuY2hpbGRyZW4oU2VsZWN0b3IuTUVOVSk7XHJcbiAgICAgIHRoaXMuJG1lbnVJbm5lciA9IHRoaXMuJG1lbnUuY2hpbGRyZW4oJy5pbm5lcicpO1xyXG4gICAgICB0aGlzLiRzZWFyY2hib3ggPSB0aGlzLiRtZW51LmZpbmQoJ2lucHV0Jyk7XHJcblxyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2JzLXNlbGVjdC1oaWRkZW4nKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuZHJvcGRvd25BbGlnblJpZ2h0ID09PSB0cnVlKSB0aGlzLiRtZW51WzBdLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5NRU5VUklHSFQpO1xyXG5cclxuICAgICAgaWYgKHR5cGVvZiBpZCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLiRidXR0b24uYXR0cignZGF0YS1pZCcsIGlkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jaGVja0Rpc2FibGVkKCk7XHJcbiAgICAgIHRoaXMuY2xpY2tMaXN0ZW5lcigpO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5saXZlU2VhcmNoKSB7XHJcbiAgICAgICAgdGhpcy5saXZlU2VhcmNoTGlzdGVuZXIoKTtcclxuICAgICAgICB0aGlzLmZvY3VzZWRQYXJlbnQgPSB0aGlzLiRzZWFyY2hib3hbMF07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkUGFyZW50ID0gdGhpcy4kbWVudUlubmVyWzBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNldFN0eWxlKCk7XHJcbiAgICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICAgIHRoaXMuc2V0V2lkdGgoKTtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5jb250YWluZXIpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdFBvc2l0aW9uKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignaGlkZScgKyBFVkVOVF9LRVksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIGlmICh0aGF0LmlzVmlydHVhbCgpKSB7XHJcbiAgICAgICAgICAgIC8vIGVtcHR5IG1lbnUgb24gY2xvc2VcclxuICAgICAgICAgICAgdmFyIG1lbnVJbm5lciA9IHRoYXQuJG1lbnVJbm5lclswXSxcclxuICAgICAgICAgICAgICAgIGVtcHR5TWVudSA9IG1lbnVJbm5lci5maXJzdENoaWxkLmNsb25lTm9kZShmYWxzZSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXBsYWNlIHRoZSBleGlzdGluZyBVTCB3aXRoIGFuIGVtcHR5IG9uZSAtIHRoaXMgaXMgZmFzdGVyIHRoYW4gJC5lbXB0eSgpIG9yIGlubmVySFRNTCA9ICcnXHJcbiAgICAgICAgICAgIG1lbnVJbm5lci5yZXBsYWNlQ2hpbGQoZW1wdHlNZW51LCBtZW51SW5uZXIuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgIG1lbnVJbm5lci5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuJG1lbnUuZGF0YSgndGhpcycsIHRoaXMpO1xyXG4gICAgICB0aGlzLiRuZXdFbGVtZW50LmRhdGEoJ3RoaXMnLCB0aGlzKTtcclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tb2JpbGUpIHRoaXMubW9iaWxlKCk7XHJcblxyXG4gICAgICB0aGlzLiRuZXdFbGVtZW50Lm9uKHtcclxuICAgICAgICAnaGlkZS5icy5kcm9wZG93bic6IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2hpZGUnICsgRVZFTlRfS0VZLCBlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdoaWRkZW4uYnMuZHJvcGRvd24nOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdoaWRkZW4nICsgRVZFTlRfS0VZLCBlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICdzaG93LmJzLmRyb3Bkb3duJzogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignc2hvdycgKyBFVkVOVF9LRVksIGUpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgJ3Nob3duLmJzLmRyb3Bkb3duJzogZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignc2hvd24nICsgRVZFTlRfS0VZLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVsZW1lbnQuaGFzQXR0cmlidXRlKCdyZXF1aXJlZCcpKSB7XHJcbiAgICAgICAgdGhpcy4kZWxlbWVudC5vbignaW52YWxpZCcgKyBFVkVOVF9LRVksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgIHRoYXQuJGJ1dHRvblswXS5jbGFzc0xpc3QuYWRkKCdicy1pbnZhbGlkJyk7XHJcblxyXG4gICAgICAgICAgdGhhdC4kZWxlbWVudFxyXG4gICAgICAgICAgICAub24oJ3Nob3duJyArIEVWRU5UX0tFWSArICcuaW52YWxpZCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICB0aGF0LiRlbGVtZW50XHJcbiAgICAgICAgICAgICAgICAudmFsKHRoYXQuJGVsZW1lbnQudmFsKCkpIC8vIHNldCB0aGUgdmFsdWUgdG8gaGlkZSB0aGUgdmFsaWRhdGlvbiBtZXNzYWdlIGluIENocm9tZSB3aGVuIG1lbnUgaXMgb3BlbmVkXHJcbiAgICAgICAgICAgICAgICAub2ZmKCdzaG93bicgKyBFVkVOVF9LRVkgKyAnLmludmFsaWQnKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLm9uKCdyZW5kZXJlZCcgKyBFVkVOVF9LRVksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAvLyBpZiBzZWxlY3QgaXMgbm8gbG9uZ2VyIGludmFsaWQsIHJlbW92ZSB0aGUgYnMtaW52YWxpZCBjbGFzc1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkaXR5LnZhbGlkKSB0aGF0LiRidXR0b25bMF0uY2xhc3NMaXN0LnJlbW92ZSgnYnMtaW52YWxpZCcpO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGVsZW1lbnQub2ZmKCdyZW5kZXJlZCcgKyBFVkVOVF9LRVkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICB0aGF0LiRidXR0b24ub24oJ2JsdXInICsgRVZFTlRfS0VZLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignZm9jdXMnKS50cmlnZ2VyKCdibHVyJyk7XHJcbiAgICAgICAgICAgIHRoYXQuJGJ1dHRvbi5vZmYoJ2JsdXInICsgRVZFTlRfS0VZKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGF0LmJ1aWxkTGlzdCgpO1xyXG4gICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignbG9hZGVkJyArIEVWRU5UX0tFWSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBjcmVhdGVEcm9wZG93bjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAvLyBPcHRpb25zXHJcbiAgICAgIC8vIElmIHdlIGFyZSBtdWx0aXBsZSBvciBzaG93VGljayBvcHRpb24gaXMgc2V0LCB0aGVuIGFkZCB0aGUgc2hvdy10aWNrIGNsYXNzXHJcbiAgICAgIHZhciBzaG93VGljayA9ICh0aGlzLm11bHRpcGxlIHx8IHRoaXMub3B0aW9ucy5zaG93VGljaykgPyAnIHNob3ctdGljaycgOiAnJyxcclxuICAgICAgICAgIG11bHRpc2VsZWN0YWJsZSA9IHRoaXMubXVsdGlwbGUgPyAnIGFyaWEtbXVsdGlzZWxlY3RhYmxlPVwidHJ1ZVwiJyA6ICcnLFxyXG4gICAgICAgICAgaW5wdXRHcm91cCA9ICcnLFxyXG4gICAgICAgICAgYXV0b2ZvY3VzID0gdGhpcy5hdXRvZm9jdXMgPyAnIGF1dG9mb2N1cycgOiAnJztcclxuXHJcbiAgICAgIGlmICh2ZXJzaW9uLm1ham9yIDwgNCAmJiB0aGlzLiRlbGVtZW50LnBhcmVudCgpLmhhc0NsYXNzKCdpbnB1dC1ncm91cCcpKSB7XHJcbiAgICAgICAgaW5wdXRHcm91cCA9ICcgaW5wdXQtZ3JvdXAtYnRuJztcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gRWxlbWVudHNcclxuICAgICAgdmFyIGRyb3AsXHJcbiAgICAgICAgICBoZWFkZXIgPSAnJyxcclxuICAgICAgICAgIHNlYXJjaGJveCA9ICcnLFxyXG4gICAgICAgICAgYWN0aW9uc2JveCA9ICcnLFxyXG4gICAgICAgICAgZG9uZWJ1dHRvbiA9ICcnO1xyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5oZWFkZXIpIHtcclxuICAgICAgICBoZWFkZXIgPVxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCInICsgY2xhc3NOYW1lcy5QT1BPVkVSSEVBREVSICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJjbG9zZVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMuaGVhZGVyICtcclxuICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmxpdmVTZWFyY2gpIHtcclxuICAgICAgICBzZWFyY2hib3ggPVxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJicy1zZWFyY2hib3hcIj4nICtcclxuICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBhdXRvY29tcGxldGU9XCJvZmZcIicgK1xyXG4gICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5saXZlU2VhcmNoUGxhY2Vob2xkZXIgPT09IG51bGwgPyAnJ1xyXG4gICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgJyBwbGFjZWhvbGRlcj1cIicgKyBodG1sRXNjYXBlKHRoaXMub3B0aW9ucy5saXZlU2VhcmNoUGxhY2Vob2xkZXIpICsgJ1wiJ1xyXG4gICAgICAgICAgICAgICkgK1xyXG4gICAgICAgICAgICAgICcgcm9sZT1cImNvbWJvYm94XCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiIGFyaWEtY29udHJvbHM9XCInICsgdGhpcy5zZWxlY3RJZCArICdcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIj4nICtcclxuICAgICAgICAgICc8L2Rpdj4nO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLm9wdGlvbnMuYWN0aW9uc0JveCkge1xyXG4gICAgICAgIGFjdGlvbnNib3ggPVxyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCJicy1hY3Rpb25zYm94XCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiYnRuLWdyb3VwIGJ0bi1ncm91cC1zbSBidG4tYmxvY2tcIj4nICtcclxuICAgICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhY3Rpb25zLWJ0biBicy1zZWxlY3QtYWxsIGJ0biAnICsgY2xhc3NOYW1lcy5CVVRUT05DTEFTUyArICdcIj4nICtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RBbGxUZXh0ICtcclxuICAgICAgICAgICAgICAnPC9idXR0b24+JyArXHJcbiAgICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWN0aW9ucy1idG4gYnMtZGVzZWxlY3QtYWxsIGJ0biAnICsgY2xhc3NOYW1lcy5CVVRUT05DTEFTUyArICdcIj4nICtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZXNlbGVjdEFsbFRleHQgK1xyXG4gICAgICAgICAgICAgICc8L2J1dHRvbj4nICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgJzwvZGl2Pic7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHRoaXMub3B0aW9ucy5kb25lQnV0dG9uKSB7XHJcbiAgICAgICAgZG9uZWJ1dHRvbiA9XHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImJzLWRvbmVidXR0b25cIj4nICtcclxuICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJidG4tZ3JvdXAgYnRuLWJsb2NrXCI+JyArXHJcbiAgICAgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSAnICsgY2xhc3NOYW1lcy5CVVRUT05DTEFTUyArICdcIj4nICtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kb25lQnV0dG9uVGV4dCArXHJcbiAgICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAnPC9kaXY+JztcclxuICAgICAgfVxyXG5cclxuICAgICAgZHJvcCA9XHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJkcm9wZG93biBib290c3RyYXAtc2VsZWN0JyArIHNob3dUaWNrICsgaW5wdXRHcm91cCArICdcIj4nICtcclxuICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiB0YWJpbmRleD1cIi0xXCIgY2xhc3M9XCInICsgdGhpcy5vcHRpb25zLnN0eWxlQmFzZSArICcgZHJvcGRvd24tdG9nZ2xlXCIgJyArICh0aGlzLm9wdGlvbnMuZGlzcGxheSA9PT0gJ3N0YXRpYycgPyAnZGF0YS1kaXNwbGF5PVwic3RhdGljXCInIDogJycpICsgJ2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIicgKyBhdXRvZm9jdXMgKyAnIHJvbGU9XCJjb21ib2JveFwiIGFyaWEtb3ducz1cIicgKyB0aGlzLnNlbGVjdElkICsgJ1wiIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JyArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmlsdGVyLW9wdGlvblwiPicgK1xyXG4gICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiZmlsdGVyLW9wdGlvbi1pbm5lclwiPicgK1xyXG4gICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmaWx0ZXItb3B0aW9uLWlubmVyLWlubmVyXCI+PC9kaXY+JyArXHJcbiAgICAgICAgICAgICAgJzwvZGl2PiAnICtcclxuICAgICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgdmVyc2lvbi5tYWpvciA9PT0gJzQnID8gJydcclxuICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiYnMtY2FyZXRcIj4nICtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50ZW1wbGF0ZS5jYXJldCArXHJcbiAgICAgICAgICAgICAgJzwvc3Bhbj4nXHJcbiAgICAgICAgICAgICkgK1xyXG4gICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgJzxkaXYgY2xhc3M9XCInICsgY2xhc3NOYW1lcy5NRU5VICsgJyAnICsgKHZlcnNpb24ubWFqb3IgPT09ICc0JyA/ICcnIDogY2xhc3NOYW1lcy5TSE9XKSArICdcIj4nICtcclxuICAgICAgICAgICAgaGVhZGVyICtcclxuICAgICAgICAgICAgc2VhcmNoYm94ICtcclxuICAgICAgICAgICAgYWN0aW9uc2JveCArXHJcbiAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW5uZXIgJyArIGNsYXNzTmFtZXMuU0hPVyArICdcIiByb2xlPVwibGlzdGJveFwiIGlkPVwiJyArIHRoaXMuc2VsZWN0SWQgKyAnXCIgdGFiaW5kZXg9XCItMVwiICcgKyBtdWx0aXNlbGVjdGFibGUgKyAnPicgK1xyXG4gICAgICAgICAgICAgICAgJzx1bCBjbGFzcz1cIicgKyBjbGFzc05hbWVzLk1FTlUgKyAnIGlubmVyICcgKyAodmVyc2lvbi5tYWpvciA9PT0gJzQnID8gY2xhc3NOYW1lcy5TSE9XIDogJycpICsgJ1wiIHJvbGU9XCJwcmVzZW50YXRpb25cIj4nICtcclxuICAgICAgICAgICAgICAgICc8L3VsPicgK1xyXG4gICAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgICAgIGRvbmVidXR0b24gK1xyXG4gICAgICAgICAgJzwvZGl2PicgK1xyXG4gICAgICAgICc8L2Rpdj4nO1xyXG5cclxuICAgICAgcmV0dXJuICQoZHJvcCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFBvc2l0aW9uRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodCA9IFtdO1xyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci52aWV3LnNpemUgPSAwO1xyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci52aWV3LmZpcnN0SGlnaGxpZ2h0SW5kZXggPSBmYWxzZTtcclxuXHJcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGxpID0gdGhpcy5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2ldLFxyXG4gICAgICAgICAgICBjYW5IaWdobGlnaHQgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAobGkudHlwZSA9PT0gJ2RpdmlkZXInKSB7XHJcbiAgICAgICAgICBjYW5IaWdobGlnaHQgPSBmYWxzZTtcclxuICAgICAgICAgIGxpLmhlaWdodCA9IHRoaXMuc2l6ZUluZm8uZGl2aWRlckhlaWdodDtcclxuICAgICAgICB9IGVsc2UgaWYgKGxpLnR5cGUgPT09ICdvcHRncm91cC1sYWJlbCcpIHtcclxuICAgICAgICAgIGNhbkhpZ2hsaWdodCA9IGZhbHNlO1xyXG4gICAgICAgICAgbGkuaGVpZ2h0ID0gdGhpcy5zaXplSW5mby5kcm9wZG93bkhlYWRlckhlaWdodDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGkuaGVpZ2h0ID0gdGhpcy5zaXplSW5mby5saUhlaWdodDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChsaS5kaXNhYmxlZCkgY2FuSGlnaGxpZ2h0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgIHRoaXMuc2VsZWN0cGlja2VyLnZpZXcuY2FuSGlnaGxpZ2h0LnB1c2goY2FuSGlnaGxpZ2h0KTtcclxuXHJcbiAgICAgICAgaWYgKGNhbkhpZ2hsaWdodCkge1xyXG4gICAgICAgICAgdGhpcy5zZWxlY3RwaWNrZXIudmlldy5zaXplKys7XHJcbiAgICAgICAgICBsaS5wb3NpbnNldCA9IHRoaXMuc2VsZWN0cGlja2VyLnZpZXcuc2l6ZTtcclxuICAgICAgICAgIGlmICh0aGlzLnNlbGVjdHBpY2tlci52aWV3LmZpcnN0SGlnaGxpZ2h0SW5kZXggPT09IGZhbHNlKSB0aGlzLnNlbGVjdHBpY2tlci52aWV3LmZpcnN0SGlnaGxpZ2h0SW5kZXggPSBpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGkucG9zaXRpb24gPSAoaSA9PT0gMCA/IDAgOiB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbaSAtIDFdLnBvc2l0aW9uKSArIGxpLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBpc1ZpcnR1YWw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuICh0aGlzLm9wdGlvbnMudmlydHVhbFNjcm9sbCAhPT0gZmFsc2UpICYmICh0aGlzLnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzLmxlbmd0aCA+PSB0aGlzLm9wdGlvbnMudmlydHVhbFNjcm9sbCkgfHwgdGhpcy5vcHRpb25zLnZpcnR1YWxTY3JvbGwgPT09IHRydWU7XHJcbiAgICB9LFxyXG5cclxuICAgIGNyZWF0ZVZpZXc6IGZ1bmN0aW9uIChpc1NlYXJjaGluZywgc2V0U2l6ZSwgcmVmcmVzaCkge1xyXG4gICAgICB2YXIgdGhhdCA9IHRoaXMsXHJcbiAgICAgICAgICBzY3JvbGxUb3AgPSAwLFxyXG4gICAgICAgICAgYWN0aXZlID0gW10sXHJcbiAgICAgICAgICBzZWxlY3RlZCxcclxuICAgICAgICAgIHByZXZBY3RpdmU7XHJcblxyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci5pc1NlYXJjaGluZyA9IGlzU2VhcmNoaW5nO1xyXG4gICAgICB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50ID0gaXNTZWFyY2hpbmcgPyB0aGlzLnNlbGVjdHBpY2tlci5zZWFyY2ggOiB0aGlzLnNlbGVjdHBpY2tlci5tYWluO1xyXG5cclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbkRhdGEoKTtcclxuXHJcbiAgICAgIGlmIChzZXRTaXplKSB7XHJcbiAgICAgICAgaWYgKHJlZnJlc2gpIHtcclxuICAgICAgICAgIHNjcm9sbFRvcCA9IHRoaXMuJG1lbnVJbm5lclswXS5zY3JvbGxUb3A7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhhdC5tdWx0aXBsZSkge1xyXG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSB0aGF0LiRlbGVtZW50WzBdLFxyXG4gICAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSAoZWxlbWVudC5vcHRpb25zW2VsZW1lbnQuc2VsZWN0ZWRJbmRleF0gfHwge30pLmxpSW5kZXg7XHJcblxyXG4gICAgICAgICAgaWYgKHR5cGVvZiBzZWxlY3RlZEluZGV4ID09PSAnbnVtYmVyJyAmJiB0aGF0Lm9wdGlvbnMuc2l6ZSAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkRGF0YSA9IHRoYXQuc2VsZWN0cGlja2VyLm1haW4uZGF0YVtzZWxlY3RlZEluZGV4XSxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uID0gc2VsZWN0ZWREYXRhICYmIHNlbGVjdGVkRGF0YS5wb3NpdGlvbjtcclxuXHJcbiAgICAgICAgICAgIGlmIChwb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgIHNjcm9sbFRvcCA9IHBvc2l0aW9uIC0gKCh0aGF0LnNpemVJbmZvLm1lbnVJbm5lckhlaWdodCArIHRoYXQuc2l6ZUluZm8ubGlIZWlnaHQpIC8gMik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNjcm9sbChzY3JvbGxUb3AsIHRydWUpO1xyXG5cclxuICAgICAgdGhpcy4kbWVudUlubmVyLm9mZignc2Nyb2xsLmNyZWF0ZVZpZXcnKS5vbignc2Nyb2xsLmNyZWF0ZVZpZXcnLCBmdW5jdGlvbiAoZSwgdXBkYXRlVmFsdWUpIHtcclxuICAgICAgICBpZiAoIXRoYXQubm9TY3JvbGwpIHNjcm9sbCh0aGlzLnNjcm9sbFRvcCwgdXBkYXRlVmFsdWUpO1xyXG4gICAgICAgIHRoYXQubm9TY3JvbGwgPSBmYWxzZTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBmdW5jdGlvbiBzY3JvbGwgKHNjcm9sbFRvcCwgaW5pdCkge1xyXG4gICAgICAgIHZhciBzaXplID0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5lbGVtZW50cy5sZW5ndGgsXHJcbiAgICAgICAgICAgIGNodW5rcyA9IFtdLFxyXG4gICAgICAgICAgICBjaHVua1NpemUsXHJcbiAgICAgICAgICAgIGNodW5rQ291bnQsXHJcbiAgICAgICAgICAgIGZpcnN0Q2h1bmssXHJcbiAgICAgICAgICAgIGxhc3RDaHVuayxcclxuICAgICAgICAgICAgY3VycmVudENodW5rLFxyXG4gICAgICAgICAgICBwcmV2UG9zaXRpb25zLFxyXG4gICAgICAgICAgICBwb3NpdGlvbklzRGlmZmVyZW50LFxyXG4gICAgICAgICAgICBwcmV2aW91c0VsZW1lbnRzLFxyXG4gICAgICAgICAgICBtZW51SXNEaWZmZXJlbnQgPSB0cnVlLFxyXG4gICAgICAgICAgICBpc1ZpcnR1YWwgPSB0aGF0LmlzVmlydHVhbCgpO1xyXG5cclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcclxuXHJcbiAgICAgICAgY2h1bmtTaXplID0gTWF0aC5jZWlsKHRoYXQuc2l6ZUluZm8ubWVudUlubmVySGVpZ2h0IC8gdGhhdC5zaXplSW5mby5saUhlaWdodCAqIDEuNSk7IC8vIG51bWJlciBvZiBvcHRpb25zIGluIGEgY2h1bmtcclxuICAgICAgICBjaHVua0NvdW50ID0gTWF0aC5yb3VuZChzaXplIC8gY2h1bmtTaXplKSB8fCAxOyAvLyBudW1iZXIgb2YgY2h1bmtzXHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2h1bmtDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgZW5kT2ZDaHVuayA9IChpICsgMSkgKiBjaHVua1NpemU7XHJcblxyXG4gICAgICAgICAgaWYgKGkgPT09IGNodW5rQ291bnQgLSAxKSB7XHJcbiAgICAgICAgICAgIGVuZE9mQ2h1bmsgPSBzaXplO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNodW5rc1tpXSA9IFtcclxuICAgICAgICAgICAgKGkpICogY2h1bmtTaXplICsgKCFpID8gMCA6IDEpLFxyXG4gICAgICAgICAgICBlbmRPZkNodW5rXHJcbiAgICAgICAgICBdO1xyXG5cclxuICAgICAgICAgIGlmICghc2l6ZSkgYnJlYWs7XHJcblxyXG4gICAgICAgICAgaWYgKGN1cnJlbnRDaHVuayA9PT0gdW5kZWZpbmVkICYmIHNjcm9sbFRvcCAtIDEgPD0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2VuZE9mQ2h1bmsgLSAxXS5wb3NpdGlvbiAtIHRoYXQuc2l6ZUluZm8ubWVudUlubmVySGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRDaHVuayA9IGk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY3VycmVudENodW5rID09PSB1bmRlZmluZWQpIGN1cnJlbnRDaHVuayA9IDA7XHJcblxyXG4gICAgICAgIHByZXZQb3NpdGlvbnMgPSBbdGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjAsIHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24xXTtcclxuXHJcbiAgICAgICAgLy8gYWx3YXlzIGRpc3BsYXkgcHJldmlvdXMsIGN1cnJlbnQsIGFuZCBuZXh0IGNodW5rc1xyXG4gICAgICAgIGZpcnN0Q2h1bmsgPSBNYXRoLm1heCgwLCBjdXJyZW50Q2h1bmsgLSAxKTtcclxuICAgICAgICBsYXN0Q2h1bmsgPSBNYXRoLm1pbihjaHVua0NvdW50IC0gMSwgY3VycmVudENodW5rICsgMSk7XHJcblxyXG4gICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wID0gaXNWaXJ0dWFsID09PSBmYWxzZSA/IDAgOiAoTWF0aC5tYXgoMCwgY2h1bmtzW2ZpcnN0Q2h1bmtdWzBdKSB8fCAwKTtcclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMSA9IGlzVmlydHVhbCA9PT0gZmFsc2UgPyBzaXplIDogKE1hdGgubWluKHNpemUsIGNodW5rc1tsYXN0Q2h1bmtdWzFdKSB8fCAwKTtcclxuXHJcbiAgICAgICAgcG9zaXRpb25Jc0RpZmZlcmVudCA9IHByZXZQb3NpdGlvbnNbMF0gIT09IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wIHx8IHByZXZQb3NpdGlvbnNbMV0gIT09IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24xO1xyXG5cclxuICAgICAgICBpZiAodGhhdC5hY3RpdmVJbmRleCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICBwcmV2QWN0aXZlID0gdGhhdC5zZWxlY3RwaWNrZXIubWFpbi5lbGVtZW50c1t0aGF0LnByZXZBY3RpdmVJbmRleF07XHJcbiAgICAgICAgICBhY3RpdmUgPSB0aGF0LnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzW3RoYXQuYWN0aXZlSW5kZXhdO1xyXG4gICAgICAgICAgc2VsZWN0ZWQgPSB0aGF0LnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzW3RoYXQuc2VsZWN0ZWRJbmRleF07XHJcblxyXG4gICAgICAgICAgaWYgKGluaXQpIHtcclxuICAgICAgICAgICAgaWYgKHRoYXQuYWN0aXZlSW5kZXggIT09IHRoYXQuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgICAgICAgIHRoYXQuZGVmb2N1c0l0ZW0oYWN0aXZlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGF0LmFjdGl2ZUluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICh0aGF0LmFjdGl2ZUluZGV4ICYmIHRoYXQuYWN0aXZlSW5kZXggIT09IHRoYXQuc2VsZWN0ZWRJbmRleCkge1xyXG4gICAgICAgICAgICB0aGF0LmRlZm9jdXNJdGVtKHNlbGVjdGVkKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGF0LnByZXZBY3RpdmVJbmRleCAhPT0gdW5kZWZpbmVkICYmIHRoYXQucHJldkFjdGl2ZUluZGV4ICE9PSB0aGF0LmFjdGl2ZUluZGV4ICYmIHRoYXQucHJldkFjdGl2ZUluZGV4ICE9PSB0aGF0LnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICAgIHRoYXQuZGVmb2N1c0l0ZW0ocHJldkFjdGl2ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoaW5pdCB8fCBwb3NpdGlvbklzRGlmZmVyZW50KSB7XHJcbiAgICAgICAgICBwcmV2aW91c0VsZW1lbnRzID0gdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMgPyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnZpc2libGVFbGVtZW50cy5zbGljZSgpIDogW107XHJcblxyXG4gICAgICAgICAgaWYgKGlzVmlydHVhbCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMgPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMgPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzLnNsaWNlKHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wLCB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhhdC5zZXRPcHRpb25TdGF0dXMoKTtcclxuXHJcbiAgICAgICAgICAvLyBpZiBzZWFyY2hpbmcsIGNoZWNrIHRvIG1ha2Ugc3VyZSB0aGUgbGlzdCBoYXMgYWN0dWFsbHkgYmVlbiB1cGRhdGVkIGJlZm9yZSB1cGRhdGluZyBET01cclxuICAgICAgICAgIC8vIHRoaXMgcHJldmVudHMgdW5uZWNlc3NhcnkgcmVwYWludHNcclxuICAgICAgICAgIGlmIChpc1NlYXJjaGluZyB8fCAoaXNWaXJ0dWFsID09PSBmYWxzZSAmJiBpbml0KSkgbWVudUlzRGlmZmVyZW50ID0gIWlzRXF1YWwocHJldmlvdXNFbGVtZW50cywgdGhhdC5zZWxlY3RwaWNrZXIudmlldy52aXNpYmxlRWxlbWVudHMpO1xyXG5cclxuICAgICAgICAgIC8vIGlmIHZpcnR1YWwgc2Nyb2xsIGlzIGRpc2FibGVkIGFuZCBub3Qgc2VhcmNoaW5nLFxyXG4gICAgICAgICAgLy8gbWVudSBzaG91bGQgbmV2ZXIgbmVlZCB0byBiZSB1cGRhdGVkIG1vcmUgdGhhbiBvbmNlXHJcbiAgICAgICAgICBpZiAoKGluaXQgfHwgaXNWaXJ0dWFsID09PSB0cnVlKSAmJiBtZW51SXNEaWZmZXJlbnQpIHtcclxuICAgICAgICAgICAgdmFyIG1lbnVJbm5lciA9IHRoYXQuJG1lbnVJbm5lclswXSxcclxuICAgICAgICAgICAgICAgIG1lbnVGcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcclxuICAgICAgICAgICAgICAgIGVtcHR5TWVudSA9IG1lbnVJbm5lci5maXJzdENoaWxkLmNsb25lTm9kZShmYWxzZSksXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3AsXHJcbiAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20sXHJcbiAgICAgICAgICAgICAgICBlbGVtZW50cyA9IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcudmlzaWJsZUVsZW1lbnRzLFxyXG4gICAgICAgICAgICAgICAgdG9TYW5pdGl6ZSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVwbGFjZSB0aGUgZXhpc3RpbmcgVUwgd2l0aCBhbiBlbXB0eSBvbmUgLSB0aGlzIGlzIGZhc3RlciB0aGFuICQuZW1wdHkoKVxyXG4gICAgICAgICAgICBtZW51SW5uZXIucmVwbGFjZUNoaWxkKGVtcHR5TWVudSwgbWVudUlubmVyLmZpcnN0Q2hpbGQpO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIHZpc2libGVFbGVtZW50c0xlbiA9IGVsZW1lbnRzLmxlbmd0aDsgaSA8IHZpc2libGVFbGVtZW50c0xlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgdmFyIGVsZW1lbnQgPSBlbGVtZW50c1tpXSxcclxuICAgICAgICAgICAgICAgICAgZWxUZXh0LFxyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50RGF0YTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5zYW5pdGl6ZSkge1xyXG4gICAgICAgICAgICAgICAgZWxUZXh0ID0gZWxlbWVudC5sYXN0Q2hpbGQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGVsVGV4dCkge1xyXG4gICAgICAgICAgICAgICAgICBlbGVtZW50RGF0YSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtpICsgdGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnREYXRhICYmIGVsZW1lbnREYXRhLmNvbnRlbnQgJiYgIWVsZW1lbnREYXRhLnNhbml0aXplZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvU2FuaXRpemUucHVzaChlbFRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnREYXRhLnNhbml0aXplZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIG1lbnVGcmFnbWVudC5hcHBlbmRDaGlsZChlbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5zYW5pdGl6ZSAmJiB0b1Nhbml0aXplLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgIHNhbml0aXplSHRtbCh0b1Nhbml0aXplLCB0aGF0Lm9wdGlvbnMud2hpdGVMaXN0LCB0aGF0Lm9wdGlvbnMuc2FuaXRpemVGbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpc1ZpcnR1YWwgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICBtYXJnaW5Ub3AgPSAodGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjAgPT09IDAgPyAwIDogdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW3RoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wIC0gMV0ucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbSA9ICh0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMSA+IHNpemUgLSAxID8gMCA6IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtzaXplIC0gMV0ucG9zaXRpb24gLSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbdGhhdC5zZWxlY3RwaWNrZXIudmlldy5wb3NpdGlvbjEgLSAxXS5wb3NpdGlvbik7XHJcblxyXG4gICAgICAgICAgICAgIG1lbnVJbm5lci5maXJzdENoaWxkLnN0eWxlLm1hcmdpblRvcCA9IG1hcmdpblRvcCArICdweCc7XHJcbiAgICAgICAgICAgICAgbWVudUlubmVyLmZpcnN0Q2hpbGQuc3R5bGUubWFyZ2luQm90dG9tID0gbWFyZ2luQm90dG9tICsgJ3B4JztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBtZW51SW5uZXIuZmlyc3RDaGlsZC5zdHlsZS5tYXJnaW5Ub3AgPSAwO1xyXG4gICAgICAgICAgICAgIG1lbnVJbm5lci5maXJzdENoaWxkLnN0eWxlLm1hcmdpbkJvdHRvbSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG1lbnVJbm5lci5maXJzdENoaWxkLmFwcGVuZENoaWxkKG1lbnVGcmFnbWVudCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBhbiBvcHRpb24gaXMgZW5jb3VudGVyZWQgdGhhdCBpcyB3aWRlciB0aGFuIHRoZSBjdXJyZW50IG1lbnUgd2lkdGgsIHVwZGF0ZSB0aGUgbWVudSB3aWR0aCBhY2NvcmRpbmdseVxyXG4gICAgICAgICAgICAvLyBzd2l0Y2ggdG8gUmVzaXplT2JzZXJ2ZXIgd2l0aCBpbmNyZWFzZWQgYnJvd3NlciBzdXBwb3J0XHJcbiAgICAgICAgICAgIGlmIChpc1ZpcnR1YWwgPT09IHRydWUgJiYgdGhhdC5zaXplSW5mby5oYXNTY3JvbGxCYXIpIHtcclxuICAgICAgICAgICAgICB2YXIgbWVudUlubmVySW5uZXJXaWR0aCA9IG1lbnVJbm5lci5maXJzdENoaWxkLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgICBpZiAoaW5pdCAmJiBtZW51SW5uZXJJbm5lcldpZHRoIDwgdGhhdC5zaXplSW5mby5tZW51SW5uZXJJbm5lcldpZHRoICYmIHRoYXQuc2l6ZUluZm8udG90YWxNZW51V2lkdGggPiB0aGF0LnNpemVJbmZvLnNlbGVjdFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICBtZW51SW5uZXIuZmlyc3RDaGlsZC5zdHlsZS5taW5XaWR0aCA9IHRoYXQuc2l6ZUluZm8ubWVudUlubmVySW5uZXJXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChtZW51SW5uZXJJbm5lcldpZHRoID4gdGhhdC5zaXplSW5mby5tZW51SW5uZXJJbm5lcldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgdG8gMCB0byBnZXQgYWN0dWFsIHdpZHRoIG9mIG1lbnVcclxuICAgICAgICAgICAgICAgIHRoYXQuJG1lbnVbMF0uc3R5bGUubWluV2lkdGggPSAwO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhY3R1YWxNZW51V2lkdGggPSBtZW51SW5uZXIuZmlyc3RDaGlsZC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsTWVudVdpZHRoID4gdGhhdC5zaXplSW5mby5tZW51SW5uZXJJbm5lcldpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2l6ZUluZm8ubWVudUlubmVySW5uZXJXaWR0aCA9IGFjdHVhbE1lbnVXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgbWVudUlubmVyLmZpcnN0Q2hpbGQuc3R5bGUubWluV2lkdGggPSB0aGF0LnNpemVJbmZvLm1lbnVJbm5lcklubmVyV2lkdGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0IHRvIGRlZmF1bHQgQ1NTIHN0eWxpbmdcclxuICAgICAgICAgICAgICAgIHRoYXQuJG1lbnVbMF0uc3R5bGUubWluV2lkdGggPSAnJztcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoYXQucHJldkFjdGl2ZUluZGV4ID0gdGhhdC5hY3RpdmVJbmRleDtcclxuXHJcbiAgICAgICAgaWYgKCF0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgdGhhdC4kbWVudUlubmVyLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpc1NlYXJjaGluZyAmJiBpbml0KSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSAwLFxyXG4gICAgICAgICAgICAgIG5ld0FjdGl2ZTtcclxuXHJcbiAgICAgICAgICBpZiAoIXRoYXQuc2VsZWN0cGlja2VyLnZpZXcuY2FuSGlnaGxpZ2h0W2luZGV4XSkge1xyXG4gICAgICAgICAgICBpbmRleCA9IDEgKyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodC5zbGljZSgxKS5pbmRleE9mKHRydWUpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIG5ld0FjdGl2ZSA9IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcudmlzaWJsZUVsZW1lbnRzW2luZGV4XTtcclxuXHJcbiAgICAgICAgICB0aGF0LmRlZm9jdXNJdGVtKHRoYXQuc2VsZWN0cGlja2VyLnZpZXcuY3VycmVudEFjdGl2ZSk7XHJcblxyXG4gICAgICAgICAgdGhhdC5hY3RpdmVJbmRleCA9ICh0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbaW5kZXhdIHx8IHt9KS5pbmRleDtcclxuXHJcbiAgICAgICAgICB0aGF0LmZvY3VzSXRlbShuZXdBY3RpdmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgJCh3aW5kb3cpXHJcbiAgICAgICAgLm9mZigncmVzaXplJyArIEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQgKyAnLmNyZWF0ZVZpZXcnKVxyXG4gICAgICAgIC5vbigncmVzaXplJyArIEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQgKyAnLmNyZWF0ZVZpZXcnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB2YXIgaXNBY3RpdmUgPSB0aGF0LiRuZXdFbGVtZW50Lmhhc0NsYXNzKGNsYXNzTmFtZXMuU0hPVyk7XHJcblxyXG4gICAgICAgICAgaWYgKGlzQWN0aXZlKSBzY3JvbGwodGhhdC4kbWVudUlubmVyWzBdLnNjcm9sbFRvcCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGZvY3VzSXRlbTogZnVuY3Rpb24gKGxpLCBsaURhdGEsIG5vU3R5bGUpIHtcclxuICAgICAgaWYgKGxpKSB7XHJcbiAgICAgICAgbGlEYXRhID0gbGlEYXRhIHx8IHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZGF0YVt0aGlzLmFjdGl2ZUluZGV4XTtcclxuICAgICAgICB2YXIgYSA9IGxpLmZpcnN0Q2hpbGQ7XHJcblxyXG4gICAgICAgIGlmIChhKSB7XHJcbiAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgnYXJpYS1zZXRzaXplJywgdGhpcy5zZWxlY3RwaWNrZXIudmlldy5zaXplKTtcclxuICAgICAgICAgIGEuc2V0QXR0cmlidXRlKCdhcmlhLXBvc2luc2V0JywgbGlEYXRhLnBvc2luc2V0KTtcclxuXHJcbiAgICAgICAgICBpZiAobm9TdHlsZSAhPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzZWRQYXJlbnQuc2V0QXR0cmlidXRlKCdhcmlhLWFjdGl2ZWRlc2NlbmRhbnQnLCBhLmlkKTtcclxuICAgICAgICAgICAgbGkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIGEuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGRlZm9jdXNJdGVtOiBmdW5jdGlvbiAobGkpIHtcclxuICAgICAgaWYgKGxpKSB7XHJcbiAgICAgICAgbGkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgaWYgKGxpLmZpcnN0Q2hpbGQpIGxpLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgc2V0UGxhY2Vob2xkZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgdXBkYXRlSW5kZXggPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudGl0bGUgJiYgIXRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICBpZiAoIXRoaXMuc2VsZWN0cGlja2VyLnZpZXcudGl0bGVPcHRpb24pIHRoaXMuc2VsZWN0cGlja2VyLnZpZXcudGl0bGVPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcyBvcHRpb24gZG9lc24ndCBjcmVhdGUgYSBuZXcgPGxpPiBlbGVtZW50LCBidXQgZG9lcyBhZGQgYSBuZXcgb3B0aW9uIGF0IHRoZSBzdGFydCxcclxuICAgICAgICAvLyBzbyBzdGFydEluZGV4IHNob3VsZCBpbmNyZWFzZSB0byBwcmV2ZW50IGhhdmluZyB0byBjaGVjayBldmVyeSBvcHRpb24gZm9yIHRoZSBicy10aXRsZS1vcHRpb24gY2xhc3NcclxuICAgICAgICB1cGRhdGVJbmRleCA9IHRydWU7XHJcblxyXG4gICAgICAgIHZhciBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXSxcclxuICAgICAgICAgICAgc2VsZWN0VGl0bGVPcHRpb24gPSBmYWxzZSxcclxuICAgICAgICAgICAgdGl0bGVOb3RBcHBlbmRlZCA9ICF0aGlzLnNlbGVjdHBpY2tlci52aWV3LnRpdGxlT3B0aW9uLnBhcmVudE5vZGUsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkSW5kZXggPSBlbGVtZW50LnNlbGVjdGVkSW5kZXgsXHJcbiAgICAgICAgICAgIHNlbGVjdGVkT3B0aW9uID0gZWxlbWVudC5vcHRpb25zW3NlbGVjdGVkSW5kZXhdLFxyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uID0gd2luZG93LnBlcmZvcm1hbmNlICYmIHdpbmRvdy5wZXJmb3JtYW5jZS5nZXRFbnRyaWVzQnlUeXBlKCduYXZpZ2F0aW9uJyksXHJcbiAgICAgICAgICAgIC8vIFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgZ2V0RW50cmllc0J5VHlwZSgnbmF2aWdhdGlvbicpIC0gZmFsbCBiYWNrIHRvIHBlcmZvcm1hbmNlLm5hdmlnYXRpb25cclxuICAgICAgICAgICAgaXNOb3RCYWNrRm9yd2FyZCA9IChuYXZpZ2F0aW9uICYmIG5hdmlnYXRpb24ubGVuZ3RoKSA/IG5hdmlnYXRpb25bMF0udHlwZSAhPT0gJ2JhY2tfZm9yd2FyZCcgOiB3aW5kb3cucGVyZm9ybWFuY2UubmF2aWdhdGlvbi50eXBlICE9PSAyO1xyXG5cclxuICAgICAgICBpZiAodGl0bGVOb3RBcHBlbmRlZCkge1xyXG4gICAgICAgICAgLy8gVXNlIG5hdGl2ZSBKUyB0byBwcmVwZW5kIG9wdGlvbiAoZmFzdGVyKVxyXG4gICAgICAgICAgdGhpcy5zZWxlY3RwaWNrZXIudmlldy50aXRsZU9wdGlvbi5jbGFzc05hbWUgPSAnYnMtdGl0bGUtb3B0aW9uJztcclxuICAgICAgICAgIHRoaXMuc2VsZWN0cGlja2VyLnZpZXcudGl0bGVPcHRpb24udmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgICAvLyBDaGVjayBpZiBzZWxlY3RlZCBvciBkYXRhLXNlbGVjdGVkIGF0dHJpYnV0ZSBpcyBhbHJlYWR5IHNldCBvbiBhbiBvcHRpb24uIElmIG5vdCwgc2VsZWN0IHRoZSB0aXRsZU9wdGlvbiBvcHRpb24uXHJcbiAgICAgICAgICAvLyB0aGUgc2VsZWN0ZWQgaXRlbSBtYXkgaGF2ZSBiZWVuIGNoYW5nZWQgYnkgdXNlciBvciBwcm9ncmFtbWF0aWNhbGx5IGJlZm9yZSB0aGUgYm9vdHN0cmFwIHNlbGVjdCBwbHVnaW4gcnVucyxcclxuICAgICAgICAgIC8vIGlmIHNvLCB0aGUgc2VsZWN0IHdpbGwgaGF2ZSB0aGUgZGF0YS1zZWxlY3RlZCBhdHRyaWJ1dGVcclxuICAgICAgICAgIHNlbGVjdFRpdGxlT3B0aW9uID0gIXNlbGVjdGVkT3B0aW9uIHx8IChzZWxlY3RlZEluZGV4ID09PSAwICYmIHNlbGVjdGVkT3B0aW9uLmRlZmF1bHRTZWxlY3RlZCA9PT0gZmFsc2UgJiYgdGhpcy4kZWxlbWVudC5kYXRhKCdzZWxlY3RlZCcpID09PSB1bmRlZmluZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRpdGxlTm90QXBwZW5kZWQgfHwgdGhpcy5zZWxlY3RwaWNrZXIudmlldy50aXRsZU9wdGlvbi5pbmRleCAhPT0gMCkge1xyXG4gICAgICAgICAgZWxlbWVudC5pbnNlcnRCZWZvcmUodGhpcy5zZWxlY3RwaWNrZXIudmlldy50aXRsZU9wdGlvbiwgZWxlbWVudC5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBzZWxlY3RlZCAqYWZ0ZXIqIGFwcGVuZGluZyB0byBzZWxlY3QsXHJcbiAgICAgICAgLy8gb3RoZXJ3aXNlIHRoZSBvcHRpb24gZG9lc24ndCBnZXQgc2VsZWN0ZWQgaW4gSUVcclxuICAgICAgICAvLyBzZXQgdXNpbmcgc2VsZWN0ZWRJbmRleCwgYXMgc2V0dGluZyB0aGUgc2VsZWN0ZWQgYXR0ciB0byB0cnVlIGhlcmUgZG9lc24ndCB3b3JrIGluIElFMTFcclxuICAgICAgICBpZiAoc2VsZWN0VGl0bGVPcHRpb24gJiYgaXNOb3RCYWNrRm9yd2FyZCkge1xyXG4gICAgICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09ICdjb21wbGV0ZScpIHtcclxuICAgICAgICAgIC8vIGlmIG5hdmlnYXRpb24gdHlwZSBpcyBiYWNrX2ZvcndhcmQsIHRoZXJlJ3MgYSBjaGFuY2UgdGhlIHNlbGVjdCB3aWxsIGhhdmUgaXRzIHZhbHVlIHNldCBieSBCRkNhY2hlXHJcbiAgICAgICAgICAvLyB3YWl0IGZvciB0aGF0IHZhbHVlIHRvIGJlIHNldCwgdGhlbiBydW4gcmVuZGVyIGFnYWluXHJcbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncGFnZXNob3cnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGF0LnNlbGVjdHBpY2tlci52aWV3LmRpc3BsYXllZFZhbHVlICE9PSBlbGVtZW50LnZhbHVlKSB0aGF0LnJlbmRlcigpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdXBkYXRlSW5kZXg7XHJcbiAgICB9LFxyXG5cclxuICAgIGJ1aWxkRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgb3B0aW9uU2VsZWN0b3IgPSAnOm5vdChbaGlkZGVuXSk6bm90KFtkYXRhLWhpZGRlbj1cInRydWVcIl0pJyxcclxuICAgICAgICAgIG1haW5EYXRhID0gW10sXHJcbiAgICAgICAgICBvcHRJRCA9IDAsXHJcbiAgICAgICAgICBzdGFydEluZGV4ID0gdGhpcy5zZXRQbGFjZWhvbGRlcigpID8gMSA6IDA7IC8vIGFwcGVuZCB0aGUgdGl0bGVPcHRpb24gaWYgbmVjZXNzYXJ5IGFuZCBza2lwIHRoZSBmaXJzdCBvcHRpb24gaW4gdGhlIGxvb3BcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuaGlkZURpc2FibGVkKSBvcHRpb25TZWxlY3RvciArPSAnOm5vdCg6ZGlzYWJsZWQpJztcclxuXHJcbiAgICAgIHZhciBzZWxlY3RPcHRpb25zID0gdGhpcy4kZWxlbWVudFswXS5xdWVyeVNlbGVjdG9yQWxsKCdzZWxlY3QgPiAqJyArIG9wdGlvblNlbGVjdG9yKTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIGFkZERpdmlkZXIgKGNvbmZpZykge1xyXG4gICAgICAgIHZhciBwcmV2aW91c0RhdGEgPSBtYWluRGF0YVttYWluRGF0YS5sZW5ndGggLSAxXTtcclxuXHJcbiAgICAgICAgLy8gZW5zdXJlIG9wdGdyb3VwIGRvZXNuJ3QgY3JlYXRlIGJhY2stdG8tYmFjayBkaXZpZGVyc1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgIHByZXZpb3VzRGF0YSAmJlxyXG4gICAgICAgICAgcHJldmlvdXNEYXRhLnR5cGUgPT09ICdkaXZpZGVyJyAmJlxyXG4gICAgICAgICAgKHByZXZpb3VzRGF0YS5vcHRJRCB8fCBjb25maWcub3B0SUQpXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25maWcgPSBjb25maWcgfHwge307XHJcbiAgICAgICAgY29uZmlnLnR5cGUgPSAnZGl2aWRlcic7XHJcblxyXG4gICAgICAgIG1haW5EYXRhLnB1c2goY29uZmlnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gYWRkT3B0aW9uIChvcHRpb24sIGNvbmZpZykge1xyXG4gICAgICAgIGNvbmZpZyA9IGNvbmZpZyB8fCB7fTtcclxuXHJcbiAgICAgICAgY29uZmlnLmRpdmlkZXIgPSBvcHRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLWRpdmlkZXInKSA9PT0gJ3RydWUnO1xyXG5cclxuICAgICAgICBpZiAoY29uZmlnLmRpdmlkZXIpIHtcclxuICAgICAgICAgIGFkZERpdmlkZXIoe1xyXG4gICAgICAgICAgICBvcHRJRDogY29uZmlnLm9wdElEXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdmFyIGxpSW5kZXggPSBtYWluRGF0YS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgY3NzVGV4dCA9IG9wdGlvbi5zdHlsZS5jc3NUZXh0LFxyXG4gICAgICAgICAgICAgIGlubGluZVN0eWxlID0gY3NzVGV4dCA/IGh0bWxFc2NhcGUoY3NzVGV4dCkgOiAnJyxcclxuICAgICAgICAgICAgICBvcHRpb25DbGFzcyA9IChvcHRpb24uY2xhc3NOYW1lIHx8ICcnKSArIChjb25maWcub3B0Z3JvdXBDbGFzcyB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgaWYgKGNvbmZpZy5vcHRJRCkgb3B0aW9uQ2xhc3MgPSAnb3B0ICcgKyBvcHRpb25DbGFzcztcclxuXHJcbiAgICAgICAgICBjb25maWcub3B0aW9uQ2xhc3MgPSBvcHRpb25DbGFzcy50cmltKCk7XHJcbiAgICAgICAgICBjb25maWcuaW5saW5lU3R5bGUgPSBpbmxpbmVTdHlsZTtcclxuICAgICAgICAgIGNvbmZpZy50ZXh0ID0gb3B0aW9uLnRleHRDb250ZW50O1xyXG5cclxuICAgICAgICAgIGNvbmZpZy5jb250ZW50ID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1jb250ZW50Jyk7XHJcbiAgICAgICAgICBjb25maWcudG9rZW5zID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS10b2tlbnMnKTtcclxuICAgICAgICAgIGNvbmZpZy5zdWJ0ZXh0ID0gb3B0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS1zdWJ0ZXh0Jyk7XHJcbiAgICAgICAgICBjb25maWcuaWNvbiA9IG9wdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtaWNvbicpO1xyXG5cclxuICAgICAgICAgIG9wdGlvbi5saUluZGV4ID0gbGlJbmRleDtcclxuXHJcbiAgICAgICAgICBjb25maWcuZGlzcGxheSA9IGNvbmZpZy5jb250ZW50IHx8IGNvbmZpZy50ZXh0O1xyXG4gICAgICAgICAgY29uZmlnLnR5cGUgPSAnb3B0aW9uJztcclxuICAgICAgICAgIGNvbmZpZy5pbmRleCA9IGxpSW5kZXg7XHJcbiAgICAgICAgICBjb25maWcub3B0aW9uID0gb3B0aW9uO1xyXG4gICAgICAgICAgY29uZmlnLnNlbGVjdGVkID0gISFvcHRpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICBjb25maWcuZGlzYWJsZWQgPSBjb25maWcuZGlzYWJsZWQgfHwgISFvcHRpb24uZGlzYWJsZWQ7XHJcblxyXG4gICAgICAgICAgbWFpbkRhdGEucHVzaChjb25maWcpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gYWRkT3B0Z3JvdXAgKGluZGV4LCBzZWxlY3RPcHRpb25zKSB7XHJcbiAgICAgICAgdmFyIG9wdGdyb3VwID0gc2VsZWN0T3B0aW9uc1tpbmRleF0sXHJcbiAgICAgICAgICAgIC8vIHNraXAgcGxhY2Vob2xkZXIgb3B0aW9uXHJcbiAgICAgICAgICAgIHByZXZpb3VzID0gaW5kZXggLSAxIDwgc3RhcnRJbmRleCA/IGZhbHNlIDogc2VsZWN0T3B0aW9uc1tpbmRleCAtIDFdLFxyXG4gICAgICAgICAgICBuZXh0ID0gc2VsZWN0T3B0aW9uc1tpbmRleCArIDFdLFxyXG4gICAgICAgICAgICBvcHRpb25zID0gb3B0Z3JvdXAucXVlcnlTZWxlY3RvckFsbCgnb3B0aW9uJyArIG9wdGlvblNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgaWYgKCFvcHRpb25zLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB2YXIgY29uZmlnID0ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGh0bWxFc2NhcGUob3B0Z3JvdXAubGFiZWwpLFxyXG4gICAgICAgICAgICAgIHN1YnRleHQ6IG9wdGdyb3VwLmdldEF0dHJpYnV0ZSgnZGF0YS1zdWJ0ZXh0JyksXHJcbiAgICAgICAgICAgICAgaWNvbjogb3B0Z3JvdXAuZ2V0QXR0cmlidXRlKCdkYXRhLWljb24nKSxcclxuICAgICAgICAgICAgICB0eXBlOiAnb3B0Z3JvdXAtbGFiZWwnLFxyXG4gICAgICAgICAgICAgIG9wdGdyb3VwQ2xhc3M6ICcgJyArIChvcHRncm91cC5jbGFzc05hbWUgfHwgJycpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGhlYWRlckluZGV4LFxyXG4gICAgICAgICAgICBsYXN0SW5kZXg7XHJcblxyXG4gICAgICAgIG9wdElEKys7XHJcblxyXG4gICAgICAgIGlmIChwcmV2aW91cykge1xyXG4gICAgICAgICAgYWRkRGl2aWRlcih7IG9wdElEOiBvcHRJRCB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbmZpZy5vcHRJRCA9IG9wdElEO1xyXG5cclxuICAgICAgICBtYWluRGF0YS5wdXNoKGNvbmZpZyk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGogPSAwLCBsZW4gPSBvcHRpb25zLmxlbmd0aDsgaiA8IGxlbjsgaisrKSB7XHJcbiAgICAgICAgICB2YXIgb3B0aW9uID0gb3B0aW9uc1tqXTtcclxuXHJcbiAgICAgICAgICBpZiAoaiA9PT0gMCkge1xyXG4gICAgICAgICAgICBoZWFkZXJJbmRleCA9IG1haW5EYXRhLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgIGxhc3RJbmRleCA9IGhlYWRlckluZGV4ICsgbGVuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGFkZE9wdGlvbihvcHRpb24sIHtcclxuICAgICAgICAgICAgaGVhZGVySW5kZXg6IGhlYWRlckluZGV4LFxyXG4gICAgICAgICAgICBsYXN0SW5kZXg6IGxhc3RJbmRleCxcclxuICAgICAgICAgICAgb3B0SUQ6IGNvbmZpZy5vcHRJRCxcclxuICAgICAgICAgICAgb3B0Z3JvdXBDbGFzczogY29uZmlnLm9wdGdyb3VwQ2xhc3MsXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiBvcHRncm91cC5kaXNhYmxlZFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobmV4dCkge1xyXG4gICAgICAgICAgYWRkRGl2aWRlcih7IG9wdElEOiBvcHRJRCB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAodmFyIGxlbiA9IHNlbGVjdE9wdGlvbnMubGVuZ3RoLCBpID0gc3RhcnRJbmRleDsgaSA8IGxlbjsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW0gPSBzZWxlY3RPcHRpb25zW2ldO1xyXG5cclxuICAgICAgICBpZiAoaXRlbS50YWdOYW1lICE9PSAnT1BUR1JPVVAnKSB7XHJcbiAgICAgICAgICBhZGRPcHRpb24oaXRlbSwge30pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBhZGRPcHRncm91cChpLCBzZWxlY3RPcHRpb25zKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZGF0YSA9IHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YSA9IG1haW5EYXRhO1xyXG4gICAgfSxcclxuXHJcbiAgICBidWlsZExpc3Q6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgc2VsZWN0RGF0YSA9IHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZGF0YSxcclxuICAgICAgICAgIG1haW5FbGVtZW50cyA9IFtdLFxyXG4gICAgICAgICAgd2lkZXN0T3B0aW9uTGVuZ3RoID0gMDtcclxuXHJcbiAgICAgIGlmICgodGhhdC5vcHRpb25zLnNob3dUaWNrIHx8IHRoYXQubXVsdGlwbGUpICYmICFlbGVtZW50VGVtcGxhdGVzLmNoZWNrTWFyay5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgZWxlbWVudFRlbXBsYXRlcy5jaGVja01hcmsuY2xhc3NOYW1lID0gdGhpcy5vcHRpb25zLmljb25CYXNlICsgJyAnICsgdGhhdC5vcHRpb25zLnRpY2tJY29uICsgJyBjaGVjay1tYXJrJztcclxuICAgICAgICBlbGVtZW50VGVtcGxhdGVzLmEuYXBwZW5kQ2hpbGQoZWxlbWVudFRlbXBsYXRlcy5jaGVja01hcmspO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmdW5jdGlvbiBidWlsZEVsZW1lbnQgKGl0ZW0pIHtcclxuICAgICAgICB2YXIgbGlFbGVtZW50LFxyXG4gICAgICAgICAgICBjb21iaW5lZExlbmd0aCA9IDA7XHJcblxyXG4gICAgICAgIHN3aXRjaCAoaXRlbS50eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdkaXZpZGVyJzpcclxuICAgICAgICAgICAgbGlFbGVtZW50ID0gZ2VuZXJhdGVPcHRpb24ubGkoXHJcbiAgICAgICAgICAgICAgZmFsc2UsXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lcy5ESVZJREVSLFxyXG4gICAgICAgICAgICAgIChpdGVtLm9wdElEID8gaXRlbS5vcHRJRCArICdkaXYnIDogdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgY2FzZSAnb3B0aW9uJzpcclxuICAgICAgICAgICAgbGlFbGVtZW50ID0gZ2VuZXJhdGVPcHRpb24ubGkoXHJcbiAgICAgICAgICAgICAgZ2VuZXJhdGVPcHRpb24uYShcclxuICAgICAgICAgICAgICAgIGdlbmVyYXRlT3B0aW9uLnRleHQuY2FsbCh0aGF0LCBpdGVtKSxcclxuICAgICAgICAgICAgICAgIGl0ZW0ub3B0aW9uQ2xhc3MsXHJcbiAgICAgICAgICAgICAgICBpdGVtLmlubGluZVN0eWxlXHJcbiAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAnJyxcclxuICAgICAgICAgICAgICBpdGVtLm9wdElEXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBpZiAobGlFbGVtZW50LmZpcnN0Q2hpbGQpIHtcclxuICAgICAgICAgICAgICBsaUVsZW1lbnQuZmlyc3RDaGlsZC5pZCA9IHRoYXQuc2VsZWN0SWQgKyAnLScgKyBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICBjYXNlICdvcHRncm91cC1sYWJlbCc6XHJcbiAgICAgICAgICAgIGxpRWxlbWVudCA9IGdlbmVyYXRlT3B0aW9uLmxpKFxyXG4gICAgICAgICAgICAgIGdlbmVyYXRlT3B0aW9uLmxhYmVsLmNhbGwodGhhdCwgaXRlbSksXHJcbiAgICAgICAgICAgICAgJ2Ryb3Bkb3duLWhlYWRlcicgKyBpdGVtLm9wdGdyb3VwQ2xhc3MsXHJcbiAgICAgICAgICAgICAgaXRlbS5vcHRJRFxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpdGVtLmVsZW1lbnQgPSBsaUVsZW1lbnQ7XHJcbiAgICAgICAgbWFpbkVsZW1lbnRzLnB1c2gobGlFbGVtZW50KTtcclxuXHJcbiAgICAgICAgLy8gY291bnQgdGhlIG51bWJlciBvZiBjaGFyYWN0ZXJzIGluIHRoZSBvcHRpb24gLSBub3QgcGVyZmVjdCwgYnV0IHNob3VsZCB3b3JrIGluIG1vc3QgY2FzZXNcclxuICAgICAgICBpZiAoaXRlbS5kaXNwbGF5KSBjb21iaW5lZExlbmd0aCArPSBpdGVtLmRpc3BsYXkubGVuZ3RoO1xyXG4gICAgICAgIGlmIChpdGVtLnN1YnRleHQpIGNvbWJpbmVkTGVuZ3RoICs9IGl0ZW0uc3VidGV4dC5sZW5ndGg7XHJcbiAgICAgICAgLy8gaWYgdGhlcmUgaXMgYW4gaWNvbiwgZW5zdXJlIHRoaXMgb3B0aW9uJ3Mgd2lkdGggaXMgY2hlY2tlZFxyXG4gICAgICAgIGlmIChpdGVtLmljb24pIGNvbWJpbmVkTGVuZ3RoICs9IDE7XHJcblxyXG4gICAgICAgIGlmIChjb21iaW5lZExlbmd0aCA+IHdpZGVzdE9wdGlvbkxlbmd0aCkge1xyXG4gICAgICAgICAgd2lkZXN0T3B0aW9uTGVuZ3RoID0gY29tYmluZWRMZW5ndGg7XHJcblxyXG4gICAgICAgICAgLy8gZ3Vlc3Mgd2hpY2ggb3B0aW9uIGlzIHRoZSB3aWRlc3RcclxuICAgICAgICAgIC8vIHVzZSB0aGlzIHdoZW4gY2FsY3VsYXRpbmcgbWVudSB3aWR0aFxyXG4gICAgICAgICAgLy8gbm90IHBlcmZlY3QsIGJ1dCBpdCdzIGZhc3QsIGFuZCB0aGUgd2lkdGggd2lsbCBiZSB1cGRhdGluZyBhY2NvcmRpbmdseSB3aGVuIHNjcm9sbGluZ1xyXG4gICAgICAgICAgdGhhdC5zZWxlY3RwaWNrZXIudmlldy53aWRlc3RPcHRpb24gPSBtYWluRWxlbWVudHNbbWFpbkVsZW1lbnRzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yICh2YXIgbGVuID0gc2VsZWN0RGF0YS5sZW5ndGgsIGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB2YXIgaXRlbSA9IHNlbGVjdERhdGFbaV07XHJcblxyXG4gICAgICAgIGJ1aWxkRWxlbWVudChpdGVtKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zZWxlY3RwaWNrZXIubWFpbi5lbGVtZW50cyA9IHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZWxlbWVudHMgPSBtYWluRWxlbWVudHM7XHJcbiAgICB9LFxyXG5cclxuICAgIGZpbmRMaXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJG1lbnVJbm5lci5maW5kKCcuaW5uZXIgPiBsaScpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW5kZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgZWxlbWVudCA9IHRoaXMuJGVsZW1lbnRbMF0sXHJcbiAgICAgICAgICAvLyBlbnN1cmUgdGl0bGVPcHRpb24gaXMgYXBwZW5kZWQgYW5kIHNlbGVjdGVkIChpZiBuZWNlc3NhcnkpIGJlZm9yZSBnZXR0aW5nIHNlbGVjdGVkT3B0aW9uc1xyXG4gICAgICAgICAgcGxhY2Vob2xkZXJTZWxlY3RlZCA9IHRoaXMuc2V0UGxhY2Vob2xkZXIoKSAmJiBlbGVtZW50LnNlbGVjdGVkSW5kZXggPT09IDAsXHJcbiAgICAgICAgICBzZWxlY3RlZE9wdGlvbnMgPSBnZXRTZWxlY3RlZE9wdGlvbnMoZWxlbWVudCwgdGhpcy5vcHRpb25zLmhpZGVEaXNhYmxlZCksXHJcbiAgICAgICAgICBzZWxlY3RlZENvdW50ID0gc2VsZWN0ZWRPcHRpb25zLmxlbmd0aCxcclxuICAgICAgICAgIGJ1dHRvbiA9IHRoaXMuJGJ1dHRvblswXSxcclxuICAgICAgICAgIGJ1dHRvbklubmVyID0gYnV0dG9uLnF1ZXJ5U2VsZWN0b3IoJy5maWx0ZXItb3B0aW9uLWlubmVyLWlubmVyJyksXHJcbiAgICAgICAgICBtdWx0aXBsZVNlcGFyYXRvciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRoaXMub3B0aW9ucy5tdWx0aXBsZVNlcGFyYXRvciksXHJcbiAgICAgICAgICB0aXRsZUZyYWdtZW50ID0gZWxlbWVudFRlbXBsYXRlcy5mcmFnbWVudC5jbG9uZU5vZGUoZmFsc2UpLFxyXG4gICAgICAgICAgc2hvd0NvdW50LFxyXG4gICAgICAgICAgY291bnRNYXgsXHJcbiAgICAgICAgICBoYXNDb250ZW50ID0gZmFsc2U7XHJcblxyXG4gICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnYnMtcGxhY2Vob2xkZXInLCB0aGF0Lm11bHRpcGxlID8gIXNlbGVjdGVkQ291bnQgOiAhZ2V0U2VsZWN0VmFsdWVzKGVsZW1lbnQsIHNlbGVjdGVkT3B0aW9ucykpO1xyXG5cclxuICAgICAgaWYgKCF0aGF0Lm11bHRpcGxlICYmIHNlbGVjdGVkT3B0aW9ucy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmRpc3BsYXllZFZhbHVlID0gZ2V0U2VsZWN0VmFsdWVzKGVsZW1lbnQsIHNlbGVjdGVkT3B0aW9ucyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2VsZWN0ZWRUZXh0Rm9ybWF0ID09PSAnc3RhdGljJykge1xyXG4gICAgICAgIHRpdGxlRnJhZ21lbnQgPSBnZW5lcmF0ZU9wdGlvbi50ZXh0LmNhbGwodGhpcywgeyB0ZXh0OiB0aGlzLm9wdGlvbnMudGl0bGUgfSwgdHJ1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hvd0NvdW50ID0gdGhpcy5tdWx0aXBsZSAmJiB0aGlzLm9wdGlvbnMuc2VsZWN0ZWRUZXh0Rm9ybWF0LmluZGV4T2YoJ2NvdW50JykgIT09IC0xICYmIHNlbGVjdGVkQ291bnQgPiAxO1xyXG5cclxuICAgICAgICAvLyBkZXRlcm1pbmUgaWYgdGhlIG51bWJlciBvZiBzZWxlY3RlZCBvcHRpb25zIHdpbGwgYmUgc2hvd24gKHNob3dDb3VudCA9PT0gdHJ1ZSlcclxuICAgICAgICBpZiAoc2hvd0NvdW50KSB7XHJcbiAgICAgICAgICBjb3VudE1heCA9IHRoaXMub3B0aW9ucy5zZWxlY3RlZFRleHRGb3JtYXQuc3BsaXQoJz4nKTtcclxuICAgICAgICAgIHNob3dDb3VudCA9IChjb3VudE1heC5sZW5ndGggPiAxICYmIHNlbGVjdGVkQ291bnQgPiBjb3VudE1heFsxXSkgfHwgKGNvdW50TWF4Lmxlbmd0aCA9PT0gMSAmJiBzZWxlY3RlZENvdW50ID49IDIpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gb25seSBsb29wIHRocm91Z2ggYWxsIHNlbGVjdGVkIG9wdGlvbnMgaWYgdGhlIGNvdW50IHdvbid0IGJlIHNob3duXHJcbiAgICAgICAgaWYgKHNob3dDb3VudCA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIGlmICghcGxhY2Vob2xkZXJTZWxlY3RlZCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBzZWxlY3RlZEluZGV4ID0gMDsgc2VsZWN0ZWRJbmRleCA8IHNlbGVjdGVkQ291bnQ7IHNlbGVjdGVkSW5kZXgrKykge1xyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEluZGV4IDwgNTApIHtcclxuICAgICAgICAgICAgICAgIHZhciBvcHRpb24gPSBzZWxlY3RlZE9wdGlvbnNbc2VsZWN0ZWRJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc0RhdGEgPSB0aGlzLnNlbGVjdHBpY2tlci5tYWluLmRhdGFbb3B0aW9uLmxpSW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlT3B0aW9ucyA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm11bHRpcGxlICYmIHNlbGVjdGVkSW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgIHRpdGxlRnJhZ21lbnQuYXBwZW5kQ2hpbGQobXVsdGlwbGVTZXBhcmF0b3IuY2xvbmVOb2RlKGZhbHNlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9wdGlvbi50aXRsZSkge1xyXG4gICAgICAgICAgICAgICAgICB0aXRsZU9wdGlvbnMudGV4dCA9IG9wdGlvbi50aXRsZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpc0RhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRoaXNEYXRhLmNvbnRlbnQgJiYgdGhhdC5vcHRpb25zLnNob3dDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGVPcHRpb25zLmNvbnRlbnQgPSB0aGlzRGF0YS5jb250ZW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFzQ29udGVudCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5zaG93SWNvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGVPcHRpb25zLmljb24gPSB0aGlzRGF0YS5pY29uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5vcHRpb25zLnNob3dTdWJ0ZXh0ICYmICF0aGF0Lm11bHRpcGxlICYmIHRoaXNEYXRhLnN1YnRleHQpIHRpdGxlT3B0aW9ucy5zdWJ0ZXh0ID0gJyAnICsgdGhpc0RhdGEuc3VidGV4dDtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZU9wdGlvbnMudGV4dCA9IG9wdGlvbi50ZXh0Q29udGVudC50cmltKCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aXRsZUZyYWdtZW50LmFwcGVuZENoaWxkKGdlbmVyYXRlT3B0aW9uLnRleHQuY2FsbCh0aGlzLCB0aXRsZU9wdGlvbnMsIHRydWUpKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgZWxsaXBzaXNcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkQ291bnQgPiA0OSkge1xyXG4gICAgICAgICAgICAgIHRpdGxlRnJhZ21lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJy4uLicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgb3B0aW9uU2VsZWN0b3IgPSAnOm5vdChbaGlkZGVuXSk6bm90KFtkYXRhLWhpZGRlbj1cInRydWVcIl0pOm5vdChbZGF0YS1kaXZpZGVyPVwidHJ1ZVwiXSknO1xyXG4gICAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5oaWRlRGlzYWJsZWQpIG9wdGlvblNlbGVjdG9yICs9ICc6bm90KDpkaXNhYmxlZCknO1xyXG5cclxuICAgICAgICAgIC8vIElmIHRoaXMgaXMgYSBtdWx0aXNlbGVjdCwgYW5kIHNlbGVjdGVkVGV4dEZvcm1hdCBpcyBjb3VudCwgdGhlbiBzaG93IDEgb2YgMiBzZWxlY3RlZCwgZXRjLlxyXG4gICAgICAgICAgdmFyIHRvdGFsQ291bnQgPSB0aGlzLiRlbGVtZW50WzBdLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NlbGVjdCA+IG9wdGlvbicgKyBvcHRpb25TZWxlY3RvciArICcsIG9wdGdyb3VwJyArIG9wdGlvblNlbGVjdG9yICsgJyBvcHRpb24nICsgb3B0aW9uU2VsZWN0b3IpLmxlbmd0aCxcclxuICAgICAgICAgICAgICB0cjhuVGV4dCA9ICh0eXBlb2YgdGhpcy5vcHRpb25zLmNvdW50U2VsZWN0ZWRUZXh0ID09PSAnZnVuY3Rpb24nKSA/IHRoaXMub3B0aW9ucy5jb3VudFNlbGVjdGVkVGV4dChzZWxlY3RlZENvdW50LCB0b3RhbENvdW50KSA6IHRoaXMub3B0aW9ucy5jb3VudFNlbGVjdGVkVGV4dDtcclxuXHJcbiAgICAgICAgICB0aXRsZUZyYWdtZW50ID0gZ2VuZXJhdGVPcHRpb24udGV4dC5jYWxsKHRoaXMsIHtcclxuICAgICAgICAgICAgdGV4dDogdHI4blRleHQucmVwbGFjZSgnezB9Jywgc2VsZWN0ZWRDb3VudC50b1N0cmluZygpKS5yZXBsYWNlKCd7MX0nLCB0b3RhbENvdW50LnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICB9LCB0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMudGl0bGUgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgLy8gdXNlIC5hdHRyIHRvIGVuc3VyZSB1bmRlZmluZWQgaXMgcmV0dXJuZWQgaWYgdGl0bGUgYXR0cmlidXRlIGlzIG5vdCBzZXRcclxuICAgICAgICB0aGlzLm9wdGlvbnMudGl0bGUgPSB0aGlzLiRlbGVtZW50LmF0dHIoJ3RpdGxlJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIElmIHRoZSBzZWxlY3QgZG9lc24ndCBoYXZlIGEgdGl0bGUsIHRoZW4gdXNlIHRoZSBkZWZhdWx0LCBvciBpZiBub3RoaW5nIGlzIHNldCBhdCBhbGwsIHVzZSBub25lU2VsZWN0ZWRUZXh0XHJcbiAgICAgIGlmICghdGl0bGVGcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCkge1xyXG4gICAgICAgIHRpdGxlRnJhZ21lbnQgPSBnZW5lcmF0ZU9wdGlvbi50ZXh0LmNhbGwodGhpcywge1xyXG4gICAgICAgICAgdGV4dDogdHlwZW9mIHRoaXMub3B0aW9ucy50aXRsZSAhPT0gJ3VuZGVmaW5lZCcgPyB0aGlzLm9wdGlvbnMudGl0bGUgOiB0aGlzLm9wdGlvbnMubm9uZVNlbGVjdGVkVGV4dFxyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzdHJpcCBhbGwgSFRNTCB0YWdzIGFuZCB0cmltIHRoZSByZXN1bHQsIHRoZW4gdW5lc2NhcGUgYW55IGVzY2FwZWQgdGFnc1xyXG4gICAgICBidXR0b24udGl0bGUgPSB0aXRsZUZyYWdtZW50LnRleHRDb250ZW50LnJlcGxhY2UoLzxbXj5dKj4/L2csICcnKS50cmltKCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNhbml0aXplICYmIGhhc0NvbnRlbnQpIHtcclxuICAgICAgICBzYW5pdGl6ZUh0bWwoW3RpdGxlRnJhZ21lbnRdLCB0aGF0Lm9wdGlvbnMud2hpdGVMaXN0LCB0aGF0Lm9wdGlvbnMuc2FuaXRpemVGbik7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGJ1dHRvbklubmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICBidXR0b25Jbm5lci5hcHBlbmRDaGlsZCh0aXRsZUZyYWdtZW50KTtcclxuXHJcbiAgICAgIGlmICh2ZXJzaW9uLm1ham9yIDwgNCAmJiB0aGlzLiRuZXdFbGVtZW50WzBdLmNsYXNzTGlzdC5jb250YWlucygnYnMzLWhhcy1hZGRvbicpKSB7XHJcbiAgICAgICAgdmFyIGZpbHRlckV4cGFuZCA9IGJ1dHRvbi5xdWVyeVNlbGVjdG9yKCcuZmlsdGVyLWV4cGFuZCcpLFxyXG4gICAgICAgICAgICBjbG9uZSA9IGJ1dHRvbklubmVyLmNsb25lTm9kZSh0cnVlKTtcclxuXHJcbiAgICAgICAgY2xvbmUuY2xhc3NOYW1lID0gJ2ZpbHRlci1leHBhbmQnO1xyXG5cclxuICAgICAgICBpZiAoZmlsdGVyRXhwYW5kKSB7XHJcbiAgICAgICAgICBidXR0b24ucmVwbGFjZUNoaWxkKGNsb25lLCBmaWx0ZXJFeHBhbmQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoY2xvbmUpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKCdyZW5kZXJlZCcgKyBFVkVOVF9LRVkpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvKipcclxuICAgICAqIEBwYXJhbSBbc3R5bGVdXHJcbiAgICAgKiBAcGFyYW0gW3N0YXR1c11cclxuICAgICAqL1xyXG4gICAgc2V0U3R5bGU6IGZ1bmN0aW9uIChuZXdTdHlsZSwgc3RhdHVzKSB7XHJcbiAgICAgIHZhciBidXR0b24gPSB0aGlzLiRidXR0b25bMF0sXHJcbiAgICAgICAgICBuZXdFbGVtZW50ID0gdGhpcy4kbmV3RWxlbWVudFswXSxcclxuICAgICAgICAgIHN0eWxlID0gdGhpcy5vcHRpb25zLnN0eWxlLnRyaW0oKSxcclxuICAgICAgICAgIGJ1dHRvbkNsYXNzO1xyXG5cclxuICAgICAgaWYgKHRoaXMuJGVsZW1lbnQuYXR0cignY2xhc3MnKSkge1xyXG4gICAgICAgIHRoaXMuJG5ld0VsZW1lbnQuYWRkQ2xhc3ModGhpcy4kZWxlbWVudC5hdHRyKCdjbGFzcycpLnJlcGxhY2UoL3NlbGVjdHBpY2tlcnxtb2JpbGUtZGV2aWNlfGJzLXNlbGVjdC1oaWRkZW58dmFsaWRhdGVcXFsuKlxcXS9naSwgJycpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHZlcnNpb24ubWFqb3IgPCA0KSB7XHJcbiAgICAgICAgbmV3RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdiczMnKTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0VsZW1lbnQucGFyZW50Tm9kZS5jbGFzc0xpc3QgJiYgbmV3RWxlbWVudC5wYXJlbnROb2RlLmNsYXNzTGlzdC5jb250YWlucygnaW5wdXQtZ3JvdXAnKSAmJlxyXG4gICAgICAgICAgICAobmV3RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8IG5ld0VsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSAmJlxyXG4gICAgICAgICAgICAobmV3RWxlbWVudC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nIHx8IG5ld0VsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKS5jbGFzc0xpc3QuY29udGFpbnMoJ2lucHV0LWdyb3VwLWFkZG9uJylcclxuICAgICAgICApIHtcclxuICAgICAgICAgIG5ld0VsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnMzLWhhcy1hZGRvbicpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKG5ld1N0eWxlKSB7XHJcbiAgICAgICAgYnV0dG9uQ2xhc3MgPSBuZXdTdHlsZS50cmltKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYnV0dG9uQ2xhc3MgPSBzdHlsZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHN0YXR1cyA9PSAnYWRkJykge1xyXG4gICAgICAgIGlmIChidXR0b25DbGFzcykgYnV0dG9uLmNsYXNzTGlzdC5hZGQuYXBwbHkoYnV0dG9uLmNsYXNzTGlzdCwgYnV0dG9uQ2xhc3Muc3BsaXQoJyAnKSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoc3RhdHVzID09ICdyZW1vdmUnKSB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbkNsYXNzKSBidXR0b24uY2xhc3NMaXN0LnJlbW92ZS5hcHBseShidXR0b24uY2xhc3NMaXN0LCBidXR0b25DbGFzcy5zcGxpdCgnICcpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoc3R5bGUpIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlLmFwcGx5KGJ1dHRvbi5jbGFzc0xpc3QsIHN0eWxlLnNwbGl0KCcgJykpO1xyXG4gICAgICAgIGlmIChidXR0b25DbGFzcykgYnV0dG9uLmNsYXNzTGlzdC5hZGQuYXBwbHkoYnV0dG9uLmNsYXNzTGlzdCwgYnV0dG9uQ2xhc3Muc3BsaXQoJyAnKSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgbGlIZWlnaHQ6IGZ1bmN0aW9uIChyZWZyZXNoKSB7XHJcbiAgICAgIGlmICghcmVmcmVzaCAmJiAodGhpcy5vcHRpb25zLnNpemUgPT09IGZhbHNlIHx8IE9iamVjdC5rZXlzKHRoaXMuc2l6ZUluZm8pLmxlbmd0aCkpIHJldHVybjtcclxuXHJcbiAgICAgIHZhciBuZXdFbGVtZW50ID0gZWxlbWVudFRlbXBsYXRlcy5kaXYuY2xvbmVOb2RlKGZhbHNlKSxcclxuICAgICAgICAgIG1lbnUgPSBlbGVtZW50VGVtcGxhdGVzLmRpdi5jbG9uZU5vZGUoZmFsc2UpLFxyXG4gICAgICAgICAgbWVudUlubmVyID0gZWxlbWVudFRlbXBsYXRlcy5kaXYuY2xvbmVOb2RlKGZhbHNlKSxcclxuICAgICAgICAgIG1lbnVJbm5lcklubmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSxcclxuICAgICAgICAgIGRpdmlkZXIgPSBlbGVtZW50VGVtcGxhdGVzLmxpLmNsb25lTm9kZShmYWxzZSksXHJcbiAgICAgICAgICBkcm9wZG93bkhlYWRlciA9IGVsZW1lbnRUZW1wbGF0ZXMubGkuY2xvbmVOb2RlKGZhbHNlKSxcclxuICAgICAgICAgIGxpLFxyXG4gICAgICAgICAgYSA9IGVsZW1lbnRUZW1wbGF0ZXMuYS5jbG9uZU5vZGUoZmFsc2UpLFxyXG4gICAgICAgICAgdGV4dCA9IGVsZW1lbnRUZW1wbGF0ZXMuc3Bhbi5jbG9uZU5vZGUoZmFsc2UpLFxyXG4gICAgICAgICAgaGVhZGVyID0gdGhpcy5vcHRpb25zLmhlYWRlciAmJiB0aGlzLiRtZW51LmZpbmQoJy4nICsgY2xhc3NOYW1lcy5QT1BPVkVSSEVBREVSKS5sZW5ndGggPiAwID8gdGhpcy4kbWVudS5maW5kKCcuJyArIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUilbMF0uY2xvbmVOb2RlKHRydWUpIDogbnVsbCxcclxuICAgICAgICAgIHNlYXJjaCA9IHRoaXMub3B0aW9ucy5saXZlU2VhcmNoID8gZWxlbWVudFRlbXBsYXRlcy5kaXYuY2xvbmVOb2RlKGZhbHNlKSA6IG51bGwsXHJcbiAgICAgICAgICBhY3Rpb25zID0gdGhpcy5vcHRpb25zLmFjdGlvbnNCb3ggJiYgdGhpcy5tdWx0aXBsZSAmJiB0aGlzLiRtZW51LmZpbmQoJy5icy1hY3Rpb25zYm94JykubGVuZ3RoID4gMCA/IHRoaXMuJG1lbnUuZmluZCgnLmJzLWFjdGlvbnNib3gnKVswXS5jbG9uZU5vZGUodHJ1ZSkgOiBudWxsLFxyXG4gICAgICAgICAgZG9uZUJ1dHRvbiA9IHRoaXMub3B0aW9ucy5kb25lQnV0dG9uICYmIHRoaXMubXVsdGlwbGUgJiYgdGhpcy4kbWVudS5maW5kKCcuYnMtZG9uZWJ1dHRvbicpLmxlbmd0aCA+IDAgPyB0aGlzLiRtZW51LmZpbmQoJy5icy1kb25lYnV0dG9uJylbMF0uY2xvbmVOb2RlKHRydWUpIDogbnVsbCxcclxuICAgICAgICAgIGZpcnN0T3B0aW9uID0gdGhpcy4kZWxlbWVudC5maW5kKCdvcHRpb24nKVswXTtcclxuXHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uc2VsZWN0V2lkdGggPSB0aGlzLiRuZXdFbGVtZW50WzBdLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgdGV4dC5jbGFzc05hbWUgPSAndGV4dCc7XHJcbiAgICAgIGEuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWl0ZW0gJyArIChmaXJzdE9wdGlvbiA/IGZpcnN0T3B0aW9uLmNsYXNzTmFtZSA6ICcnKTtcclxuICAgICAgbmV3RWxlbWVudC5jbGFzc05hbWUgPSB0aGlzLiRtZW51WzBdLnBhcmVudE5vZGUuY2xhc3NOYW1lICsgJyAnICsgY2xhc3NOYW1lcy5TSE9XO1xyXG4gICAgICBuZXdFbGVtZW50LnN0eWxlLndpZHRoID0gMDsgLy8gZW5zdXJlIGJ1dHRvbiB3aWR0aCBkb2Vzbid0IGFmZmVjdCBuYXR1cmFsIHdpZHRoIG9mIG1lbnUgd2hlbiBjYWxjdWxhdGluZ1xyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLndpZHRoID09PSAnYXV0bycpIG1lbnUuc3R5bGUubWluV2lkdGggPSAwO1xyXG4gICAgICBtZW51LmNsYXNzTmFtZSA9IGNsYXNzTmFtZXMuTUVOVSArICcgJyArIGNsYXNzTmFtZXMuU0hPVztcclxuICAgICAgbWVudUlubmVyLmNsYXNzTmFtZSA9ICdpbm5lciAnICsgY2xhc3NOYW1lcy5TSE9XO1xyXG4gICAgICBtZW51SW5uZXJJbm5lci5jbGFzc05hbWUgPSBjbGFzc05hbWVzLk1FTlUgKyAnIGlubmVyICcgKyAodmVyc2lvbi5tYWpvciA9PT0gJzQnID8gY2xhc3NOYW1lcy5TSE9XIDogJycpO1xyXG4gICAgICBkaXZpZGVyLmNsYXNzTmFtZSA9IGNsYXNzTmFtZXMuRElWSURFUjtcclxuICAgICAgZHJvcGRvd25IZWFkZXIuY2xhc3NOYW1lID0gJ2Ryb3Bkb3duLWhlYWRlcic7XHJcblxyXG4gICAgICB0ZXh0LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCdcXHUyMDBiJykpO1xyXG5cclxuICAgICAgaWYgKHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgdmFyIGRhdGEgPSB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbaV07XHJcbiAgICAgICAgICBpZiAoZGF0YS50eXBlID09PSAnb3B0aW9uJykge1xyXG4gICAgICAgICAgICBsaSA9IGRhdGEuZWxlbWVudDtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxpID0gZWxlbWVudFRlbXBsYXRlcy5saS5jbG9uZU5vZGUoZmFsc2UpO1xyXG4gICAgICAgIGEuYXBwZW5kQ2hpbGQodGV4dCk7XHJcbiAgICAgICAgbGkuYXBwZW5kQ2hpbGQoYSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGRyb3Bkb3duSGVhZGVyLmFwcGVuZENoaWxkKHRleHQuY2xvbmVOb2RlKHRydWUpKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdHBpY2tlci52aWV3LndpZGVzdE9wdGlvbikge1xyXG4gICAgICAgIG1lbnVJbm5lcklubmVyLmFwcGVuZENoaWxkKHRoaXMuc2VsZWN0cGlja2VyLnZpZXcud2lkZXN0T3B0aW9uLmNsb25lTm9kZSh0cnVlKSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIG1lbnVJbm5lcklubmVyLmFwcGVuZENoaWxkKGxpKTtcclxuICAgICAgbWVudUlubmVySW5uZXIuYXBwZW5kQ2hpbGQoZGl2aWRlcik7XHJcbiAgICAgIG1lbnVJbm5lcklubmVyLmFwcGVuZENoaWxkKGRyb3Bkb3duSGVhZGVyKTtcclxuICAgICAgaWYgKGhlYWRlcikgbWVudS5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICBpZiAoc2VhcmNoKSB7XHJcbiAgICAgICAgdmFyIGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBzZWFyY2guY2xhc3NOYW1lID0gJ2JzLXNlYXJjaGJveCc7XHJcbiAgICAgICAgaW5wdXQuY2xhc3NOYW1lID0gJ2Zvcm0tY29udHJvbCc7XHJcbiAgICAgICAgc2VhcmNoLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICBtZW51LmFwcGVuZENoaWxkKHNlYXJjaCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGFjdGlvbnMpIG1lbnUuYXBwZW5kQ2hpbGQoYWN0aW9ucyk7XHJcbiAgICAgIG1lbnVJbm5lci5hcHBlbmRDaGlsZChtZW51SW5uZXJJbm5lcik7XHJcbiAgICAgIG1lbnUuYXBwZW5kQ2hpbGQobWVudUlubmVyKTtcclxuICAgICAgaWYgKGRvbmVCdXR0b24pIG1lbnUuYXBwZW5kQ2hpbGQoZG9uZUJ1dHRvbik7XHJcbiAgICAgIG5ld0VsZW1lbnQuYXBwZW5kQ2hpbGQobWVudSk7XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xyXG5cclxuICAgICAgdmFyIGxpSGVpZ2h0ID0gbGkub2Zmc2V0SGVpZ2h0LFxyXG4gICAgICAgICAgZHJvcGRvd25IZWFkZXJIZWlnaHQgPSBkcm9wZG93bkhlYWRlciA/IGRyb3Bkb3duSGVhZGVyLm9mZnNldEhlaWdodCA6IDAsXHJcbiAgICAgICAgICBoZWFkZXJIZWlnaHQgPSBoZWFkZXIgPyBoZWFkZXIub2Zmc2V0SGVpZ2h0IDogMCxcclxuICAgICAgICAgIHNlYXJjaEhlaWdodCA9IHNlYXJjaCA/IHNlYXJjaC5vZmZzZXRIZWlnaHQgOiAwLFxyXG4gICAgICAgICAgYWN0aW9uc0hlaWdodCA9IGFjdGlvbnMgPyBhY3Rpb25zLm9mZnNldEhlaWdodCA6IDAsXHJcbiAgICAgICAgICBkb25lQnV0dG9uSGVpZ2h0ID0gZG9uZUJ1dHRvbiA/IGRvbmVCdXR0b24ub2Zmc2V0SGVpZ2h0IDogMCxcclxuICAgICAgICAgIGRpdmlkZXJIZWlnaHQgPSAkKGRpdmlkZXIpLm91dGVySGVpZ2h0KHRydWUpLFxyXG4gICAgICAgICAgLy8gZmFsbCBiYWNrIHRvIGpRdWVyeSBpZiBnZXRDb21wdXRlZFN0eWxlIGlzIG5vdCBzdXBwb3J0ZWRcclxuICAgICAgICAgIG1lbnVTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUobWVudSkgOiBmYWxzZSxcclxuICAgICAgICAgIG1lbnVXaWR0aCA9IG1lbnUub2Zmc2V0V2lkdGgsXHJcbiAgICAgICAgICAkbWVudSA9IG1lbnVTdHlsZSA/IG51bGwgOiAkKG1lbnUpLFxyXG4gICAgICAgICAgbWVudVBhZGRpbmcgPSB7XHJcbiAgICAgICAgICAgIHZlcnQ6IHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUucGFkZGluZ1RvcCA6ICRtZW51LmNzcygncGFkZGluZ1RvcCcpKSArXHJcbiAgICAgICAgICAgICAgICAgIHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUucGFkZGluZ0JvdHRvbSA6ICRtZW51LmNzcygncGFkZGluZ0JvdHRvbScpKSArXHJcbiAgICAgICAgICAgICAgICAgIHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUuYm9yZGVyVG9wV2lkdGggOiAkbWVudS5jc3MoJ2JvcmRlclRvcFdpZHRoJykpICtcclxuICAgICAgICAgICAgICAgICAgdG9JbnRlZ2VyKG1lbnVTdHlsZSA/IG1lbnVTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCA6ICRtZW51LmNzcygnYm9yZGVyQm90dG9tV2lkdGgnKSksXHJcbiAgICAgICAgICAgIGhvcml6OiB0b0ludGVnZXIobWVudVN0eWxlID8gbWVudVN0eWxlLnBhZGRpbmdMZWZ0IDogJG1lbnUuY3NzKCdwYWRkaW5nTGVmdCcpKSArXHJcbiAgICAgICAgICAgICAgICAgIHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUucGFkZGluZ1JpZ2h0IDogJG1lbnUuY3NzKCdwYWRkaW5nUmlnaHQnKSkgK1xyXG4gICAgICAgICAgICAgICAgICB0b0ludGVnZXIobWVudVN0eWxlID8gbWVudVN0eWxlLmJvcmRlckxlZnRXaWR0aCA6ICRtZW51LmNzcygnYm9yZGVyTGVmdFdpZHRoJykpICtcclxuICAgICAgICAgICAgICAgICAgdG9JbnRlZ2VyKG1lbnVTdHlsZSA/IG1lbnVTdHlsZS5ib3JkZXJSaWdodFdpZHRoIDogJG1lbnUuY3NzKCdib3JkZXJSaWdodFdpZHRoJykpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbWVudUV4dHJhcyA9IHtcclxuICAgICAgICAgICAgdmVydDogbWVudVBhZGRpbmcudmVydCArXHJcbiAgICAgICAgICAgICAgICAgIHRvSW50ZWdlcihtZW51U3R5bGUgPyBtZW51U3R5bGUubWFyZ2luVG9wIDogJG1lbnUuY3NzKCdtYXJnaW5Ub3AnKSkgK1xyXG4gICAgICAgICAgICAgICAgICB0b0ludGVnZXIobWVudVN0eWxlID8gbWVudVN0eWxlLm1hcmdpbkJvdHRvbSA6ICRtZW51LmNzcygnbWFyZ2luQm90dG9tJykpICsgMixcclxuICAgICAgICAgICAgaG9yaXo6IG1lbnVQYWRkaW5nLmhvcml6ICtcclxuICAgICAgICAgICAgICAgICAgdG9JbnRlZ2VyKG1lbnVTdHlsZSA/IG1lbnVTdHlsZS5tYXJnaW5MZWZ0IDogJG1lbnUuY3NzKCdtYXJnaW5MZWZ0JykpICtcclxuICAgICAgICAgICAgICAgICAgdG9JbnRlZ2VyKG1lbnVTdHlsZSA/IG1lbnVTdHlsZS5tYXJnaW5SaWdodCA6ICRtZW51LmNzcygnbWFyZ2luUmlnaHQnKSkgKyAyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2Nyb2xsQmFyV2lkdGg7XHJcblxyXG4gICAgICBtZW51SW5uZXIuc3R5bGUub3ZlcmZsb3dZID0gJ3Njcm9sbCc7XHJcblxyXG4gICAgICBzY3JvbGxCYXJXaWR0aCA9IG1lbnUub2Zmc2V0V2lkdGggLSBtZW51V2lkdGg7XHJcblxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKG5ld0VsZW1lbnQpO1xyXG5cclxuICAgICAgdGhpcy5zaXplSW5mby5saUhlaWdodCA9IGxpSGVpZ2h0O1xyXG4gICAgICB0aGlzLnNpemVJbmZvLmRyb3Bkb3duSGVhZGVySGVpZ2h0ID0gZHJvcGRvd25IZWFkZXJIZWlnaHQ7XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uaGVhZGVySGVpZ2h0ID0gaGVhZGVySGVpZ2h0O1xyXG4gICAgICB0aGlzLnNpemVJbmZvLnNlYXJjaEhlaWdodCA9IHNlYXJjaEhlaWdodDtcclxuICAgICAgdGhpcy5zaXplSW5mby5hY3Rpb25zSGVpZ2h0ID0gYWN0aW9uc0hlaWdodDtcclxuICAgICAgdGhpcy5zaXplSW5mby5kb25lQnV0dG9uSGVpZ2h0ID0gZG9uZUJ1dHRvbkhlaWdodDtcclxuICAgICAgdGhpcy5zaXplSW5mby5kaXZpZGVySGVpZ2h0ID0gZGl2aWRlckhlaWdodDtcclxuICAgICAgdGhpcy5zaXplSW5mby5tZW51UGFkZGluZyA9IG1lbnVQYWRkaW5nO1xyXG4gICAgICB0aGlzLnNpemVJbmZvLm1lbnVFeHRyYXMgPSBtZW51RXh0cmFzO1xyXG4gICAgICB0aGlzLnNpemVJbmZvLm1lbnVXaWR0aCA9IG1lbnVXaWR0aDtcclxuICAgICAgdGhpcy5zaXplSW5mby5tZW51SW5uZXJJbm5lcldpZHRoID0gbWVudVdpZHRoIC0gbWVudVBhZGRpbmcuaG9yaXo7XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8udG90YWxNZW51V2lkdGggPSB0aGlzLnNpemVJbmZvLm1lbnVXaWR0aDtcclxuICAgICAgdGhpcy5zaXplSW5mby5zY3JvbGxCYXJXaWR0aCA9IHNjcm9sbEJhcldpZHRoO1xyXG4gICAgICB0aGlzLnNpemVJbmZvLnNlbGVjdEhlaWdodCA9IHRoaXMuJG5ld0VsZW1lbnRbMF0ub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5zZXRQb3NpdGlvbkRhdGEoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZ2V0U2VsZWN0UG9zaXRpb246IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgJHdpbmRvdyA9ICQod2luZG93KSxcclxuICAgICAgICAgIHBvcyA9IHRoYXQuJG5ld0VsZW1lbnQub2Zmc2V0KCksXHJcbiAgICAgICAgICAkY29udGFpbmVyID0gJCh0aGF0Lm9wdGlvbnMuY29udGFpbmVyKSxcclxuICAgICAgICAgIGNvbnRhaW5lclBvcztcclxuXHJcbiAgICAgIGlmICh0aGF0Lm9wdGlvbnMuY29udGFpbmVyICYmICRjb250YWluZXIubGVuZ3RoICYmICEkY29udGFpbmVyLmlzKCdib2R5JykpIHtcclxuICAgICAgICBjb250YWluZXJQb3MgPSAkY29udGFpbmVyLm9mZnNldCgpO1xyXG4gICAgICAgIGNvbnRhaW5lclBvcy50b3AgKz0gcGFyc2VJbnQoJGNvbnRhaW5lci5jc3MoJ2JvcmRlclRvcFdpZHRoJykpO1xyXG4gICAgICAgIGNvbnRhaW5lclBvcy5sZWZ0ICs9IHBhcnNlSW50KCRjb250YWluZXIuY3NzKCdib3JkZXJMZWZ0V2lkdGgnKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29udGFpbmVyUG9zID0geyB0b3A6IDAsIGxlZnQ6IDAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHdpblBhZCA9IHRoYXQub3B0aW9ucy53aW5kb3dQYWRkaW5nO1xyXG5cclxuICAgICAgdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRUb3AgPSBwb3MudG9wIC0gY29udGFpbmVyUG9zLnRvcCAtICR3aW5kb3cuc2Nyb2xsVG9wKCk7XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0Qm90ID0gJHdpbmRvdy5oZWlnaHQoKSAtIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0VG9wIC0gdGhpcy5zaXplSW5mby5zZWxlY3RIZWlnaHQgLSBjb250YWluZXJQb3MudG9wIC0gd2luUGFkWzJdO1xyXG4gICAgICB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldExlZnQgPSBwb3MubGVmdCAtIGNvbnRhaW5lclBvcy5sZWZ0IC0gJHdpbmRvdy5zY3JvbGxMZWZ0KCk7XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0UmlnaHQgPSAkd2luZG93LndpZHRoKCkgLSB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldExlZnQgLSB0aGlzLnNpemVJbmZvLnNlbGVjdFdpZHRoIC0gY29udGFpbmVyUG9zLmxlZnQgLSB3aW5QYWRbMV07XHJcbiAgICAgIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0VG9wIC09IHdpblBhZFswXTtcclxuICAgICAgdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRMZWZ0IC09IHdpblBhZFszXTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0TWVudVNpemU6IGZ1bmN0aW9uIChpc0F1dG8pIHtcclxuICAgICAgdGhpcy5nZXRTZWxlY3RQb3NpdGlvbigpO1xyXG5cclxuICAgICAgdmFyIHNlbGVjdFdpZHRoID0gdGhpcy5zaXplSW5mby5zZWxlY3RXaWR0aCxcclxuICAgICAgICAgIGxpSGVpZ2h0ID0gdGhpcy5zaXplSW5mby5saUhlaWdodCxcclxuICAgICAgICAgIGhlYWRlckhlaWdodCA9IHRoaXMuc2l6ZUluZm8uaGVhZGVySGVpZ2h0LFxyXG4gICAgICAgICAgc2VhcmNoSGVpZ2h0ID0gdGhpcy5zaXplSW5mby5zZWFyY2hIZWlnaHQsXHJcbiAgICAgICAgICBhY3Rpb25zSGVpZ2h0ID0gdGhpcy5zaXplSW5mby5hY3Rpb25zSGVpZ2h0LFxyXG4gICAgICAgICAgZG9uZUJ1dHRvbkhlaWdodCA9IHRoaXMuc2l6ZUluZm8uZG9uZUJ1dHRvbkhlaWdodCxcclxuICAgICAgICAgIGRpdkhlaWdodCA9IHRoaXMuc2l6ZUluZm8uZGl2aWRlckhlaWdodCxcclxuICAgICAgICAgIG1lbnVQYWRkaW5nID0gdGhpcy5zaXplSW5mby5tZW51UGFkZGluZyxcclxuICAgICAgICAgIG1lbnVJbm5lckhlaWdodCxcclxuICAgICAgICAgIG1lbnVIZWlnaHQsXHJcbiAgICAgICAgICBkaXZMZW5ndGggPSAwLFxyXG4gICAgICAgICAgbWluSGVpZ2h0LFxyXG4gICAgICAgICAgX21pbkhlaWdodCxcclxuICAgICAgICAgIG1heEhlaWdodCxcclxuICAgICAgICAgIG1lbnVJbm5lck1pbkhlaWdodCxcclxuICAgICAgICAgIGVzdGltYXRlLFxyXG4gICAgICAgICAgaXNEcm9wdXA7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRyb3B1cEF1dG8pIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGVzdGltYXRlZCBoZWlnaHQgb2YgdGhlIG1lbnUgd2l0aG91dCBzY3JvbGxiYXJzLlxyXG4gICAgICAgIC8vIFRoaXMgaXMgdXNlZnVsIGZvciBzbWFsbGVyIG1lbnVzLCB3aGVyZSB0aGVyZSBtaWdodCBiZSBwbGVudHkgb2Ygcm9vbVxyXG4gICAgICAgIC8vIGJlbG93IHRoZSBidXR0b24gd2l0aG91dCBzZXR0aW5nIGRyb3B1cCwgYnV0IHdlIGNhbid0IGtub3dcclxuICAgICAgICAvLyB0aGUgZXhhY3QgaGVpZ2h0IG9mIHRoZSBtZW51IHVudGlsIGNyZWF0ZVZpZXcgaXMgY2FsbGVkIGxhdGVyXHJcbiAgICAgICAgZXN0aW1hdGUgPSBsaUhlaWdodCAqIHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZWxlbWVudHMubGVuZ3RoICsgbWVudVBhZGRpbmcudmVydDtcclxuXHJcbiAgICAgICAgaXNEcm9wdXAgPSB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldFRvcCAtIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0Qm90ID4gdGhpcy5zaXplSW5mby5tZW51RXh0cmFzLnZlcnQgJiYgZXN0aW1hdGUgKyB0aGlzLnNpemVJbmZvLm1lbnVFeHRyYXMudmVydCArIDUwID4gdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRCb3Q7XHJcblxyXG4gICAgICAgIC8vIGVuc3VyZSBkcm9wdXAgZG9lc24ndCBjaGFuZ2Ugd2hpbGUgc2VhcmNoaW5nIChzbyBtZW51IGRvZXNuJ3QgYm91bmNlIGJhY2sgYW5kIGZvcnRoKVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdHBpY2tlci5pc1NlYXJjaGluZyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgaXNEcm9wdXAgPSB0aGlzLnNlbGVjdHBpY2tlci5kcm9wdXA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLiRuZXdFbGVtZW50LnRvZ2dsZUNsYXNzKGNsYXNzTmFtZXMuRFJPUFVQLCBpc0Ryb3B1cCk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RwaWNrZXIuZHJvcHVwID0gaXNEcm9wdXA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2l6ZSA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgX21pbkhlaWdodCA9IHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZWxlbWVudHMubGVuZ3RoID4gMyA/IHRoaXMuc2l6ZUluZm8ubGlIZWlnaHQgKiAzICsgdGhpcy5zaXplSW5mby5tZW51RXh0cmFzLnZlcnQgLSAyIDogMDtcclxuICAgICAgICBtZW51SGVpZ2h0ID0gdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRCb3QgLSB0aGlzLnNpemVJbmZvLm1lbnVFeHRyYXMudmVydDtcclxuICAgICAgICBtaW5IZWlnaHQgPSBfbWluSGVpZ2h0ICsgaGVhZGVySGVpZ2h0ICsgc2VhcmNoSGVpZ2h0ICsgYWN0aW9uc0hlaWdodCArIGRvbmVCdXR0b25IZWlnaHQ7XHJcbiAgICAgICAgbWVudUlubmVyTWluSGVpZ2h0ID0gTWF0aC5tYXgoX21pbkhlaWdodCAtIG1lbnVQYWRkaW5nLnZlcnQsIDApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy4kbmV3RWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWVzLkRST1BVUCkpIHtcclxuICAgICAgICAgIG1lbnVIZWlnaHQgPSB0aGlzLnNpemVJbmZvLnNlbGVjdE9mZnNldFRvcCAtIHRoaXMuc2l6ZUluZm8ubWVudUV4dHJhcy52ZXJ0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWF4SGVpZ2h0ID0gbWVudUhlaWdodDtcclxuICAgICAgICBtZW51SW5uZXJIZWlnaHQgPSBtZW51SGVpZ2h0IC0gaGVhZGVySGVpZ2h0IC0gc2VhcmNoSGVpZ2h0IC0gYWN0aW9uc0hlaWdodCAtIGRvbmVCdXR0b25IZWlnaHQgLSBtZW51UGFkZGluZy52ZXJ0O1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy5zaXplICYmIHRoaXMub3B0aW9ucy5zaXplICE9ICdhdXRvJyAmJiB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzLmxlbmd0aCA+IHRoaXMub3B0aW9ucy5zaXplKSB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLm9wdGlvbnMuc2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgICBpZiAodGhpcy5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2ldLnR5cGUgPT09ICdkaXZpZGVyJykgZGl2TGVuZ3RoKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZW51SGVpZ2h0ID0gbGlIZWlnaHQgKiB0aGlzLm9wdGlvbnMuc2l6ZSArIGRpdkxlbmd0aCAqIGRpdkhlaWdodCArIG1lbnVQYWRkaW5nLnZlcnQ7XHJcbiAgICAgICAgbWVudUlubmVySGVpZ2h0ID0gbWVudUhlaWdodCAtIG1lbnVQYWRkaW5nLnZlcnQ7XHJcbiAgICAgICAgbWF4SGVpZ2h0ID0gbWVudUhlaWdodCArIGhlYWRlckhlaWdodCArIHNlYXJjaEhlaWdodCArIGFjdGlvbnNIZWlnaHQgKyBkb25lQnV0dG9uSGVpZ2h0O1xyXG4gICAgICAgIG1pbkhlaWdodCA9IG1lbnVJbm5lck1pbkhlaWdodCA9ICcnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLiRtZW51LmNzcyh7XHJcbiAgICAgICAgJ21heC1oZWlnaHQnOiBtYXhIZWlnaHQgKyAncHgnLFxyXG4gICAgICAgICdvdmVyZmxvdyc6ICdoaWRkZW4nLFxyXG4gICAgICAgICdtaW4taGVpZ2h0JzogbWluSGVpZ2h0ICsgJ3B4J1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJG1lbnVJbm5lci5jc3Moe1xyXG4gICAgICAgICdtYXgtaGVpZ2h0JzogbWVudUlubmVySGVpZ2h0ICsgJ3B4JyxcclxuICAgICAgICAnb3ZlcmZsb3cteSc6ICdhdXRvJyxcclxuICAgICAgICAnbWluLWhlaWdodCc6IG1lbnVJbm5lck1pbkhlaWdodCArICdweCdcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBlbnN1cmUgbWVudUlubmVySGVpZ2h0IGlzIGFsd2F5cyBhIHBvc2l0aXZlIG51bWJlciB0byBwcmV2ZW50IGlzc3VlcyBjYWxjdWxhdGluZyBjaHVua1NpemUgaW4gY3JlYXRlVmlld1xyXG4gICAgICB0aGlzLnNpemVJbmZvLm1lbnVJbm5lckhlaWdodCA9IE1hdGgubWF4KG1lbnVJbm5lckhlaWdodCwgMSk7XHJcblxyXG4gICAgICBpZiAodGhpcy5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhLmxlbmd0aCAmJiB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbdGhpcy5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhLmxlbmd0aCAtIDFdLnBvc2l0aW9uID4gdGhpcy5zaXplSW5mby5tZW51SW5uZXJIZWlnaHQpIHtcclxuICAgICAgICB0aGlzLnNpemVJbmZvLmhhc1Njcm9sbEJhciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zaXplSW5mby50b3RhbE1lbnVXaWR0aCA9IHRoaXMuc2l6ZUluZm8ubWVudVdpZHRoICsgdGhpcy5zaXplSW5mby5zY3JvbGxCYXJXaWR0aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5kcm9wZG93bkFsaWduUmlnaHQgPT09ICdhdXRvJykge1xyXG4gICAgICAgIHRoaXMuJG1lbnUudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lcy5NRU5VUklHSFQsIHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0TGVmdCA+IHRoaXMuc2l6ZUluZm8uc2VsZWN0T2Zmc2V0UmlnaHQgJiYgdGhpcy5zaXplSW5mby5zZWxlY3RPZmZzZXRSaWdodCA8ICh0aGlzLnNpemVJbmZvLnRvdGFsTWVudVdpZHRoIC0gc2VsZWN0V2lkdGgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKHRoaXMuZHJvcGRvd24gJiYgdGhpcy5kcm9wZG93bi5fcG9wcGVyKSB0aGlzLmRyb3Bkb3duLl9wb3BwZXIudXBkYXRlKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFNpemU6IGZ1bmN0aW9uIChyZWZyZXNoKSB7XHJcbiAgICAgIHRoaXMubGlIZWlnaHQocmVmcmVzaCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmhlYWRlcikgdGhpcy4kbWVudS5jc3MoJ3BhZGRpbmctdG9wJywgMCk7XHJcblxyXG4gICAgICBpZiAodGhpcy5vcHRpb25zLnNpemUgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgICAkd2luZG93ID0gJCh3aW5kb3cpO1xyXG5cclxuICAgICAgICB0aGlzLnNldE1lbnVTaXplKCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgdGhpcy4kc2VhcmNoYm94XHJcbiAgICAgICAgICAgIC5vZmYoJ2lucHV0LnNldE1lbnVTaXplIHByb3BlcnR5Y2hhbmdlLnNldE1lbnVTaXplJylcclxuICAgICAgICAgICAgLm9uKCdpbnB1dC5zZXRNZW51U2l6ZSBwcm9wZXJ0eWNoYW5nZS5zZXRNZW51U2l6ZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdGhhdC5zZXRNZW51U2l6ZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2l6ZSA9PT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAkd2luZG93XHJcbiAgICAgICAgICAgIC5vZmYoJ3Jlc2l6ZScgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJy5zZXRNZW51U2l6ZScgKyAnIHNjcm9sbCcgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJy5zZXRNZW51U2l6ZScpXHJcbiAgICAgICAgICAgIC5vbigncmVzaXplJyArIEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQgKyAnLnNldE1lbnVTaXplJyArICcgc2Nyb2xsJyArIEVWRU5UX0tFWSArICcuJyArIHRoaXMuc2VsZWN0SWQgKyAnLnNldE1lbnVTaXplJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIHJldHVybiB0aGF0LnNldE1lbnVTaXplKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb25zLnNpemUgJiYgdGhpcy5vcHRpb25zLnNpemUgIT0gJ2F1dG8nICYmIHRoaXMuc2VsZWN0cGlja2VyLmN1cnJlbnQuZWxlbWVudHMubGVuZ3RoID4gdGhpcy5vcHRpb25zLnNpemUpIHtcclxuICAgICAgICAgICR3aW5kb3cub2ZmKCdyZXNpemUnICsgRVZFTlRfS0VZICsgJy4nICsgdGhpcy5zZWxlY3RJZCArICcuc2V0TWVudVNpemUnICsgJyBzY3JvbGwnICsgRVZFTlRfS0VZICsgJy4nICsgdGhpcy5zZWxlY3RJZCArICcuc2V0TWVudVNpemUnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuY3JlYXRlVmlldyhmYWxzZSwgdHJ1ZSwgcmVmcmVzaCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNldFdpZHRoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMud2lkdGggPT09ICdhdXRvJykge1xyXG4gICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICB0aGF0LiRtZW51LmNzcygnbWluLXdpZHRoJywgJzAnKTtcclxuXHJcbiAgICAgICAgICB0aGF0LiRlbGVtZW50Lm9uKCdsb2FkZWQnICsgRVZFTlRfS0VZLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQubGlIZWlnaHQoKTtcclxuICAgICAgICAgICAgdGhhdC5zZXRNZW51U2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IGNvcnJlY3Qgd2lkdGggaWYgZWxlbWVudCBpcyBoaWRkZW5cclxuICAgICAgICAgICAgdmFyICRzZWxlY3RDbG9uZSA9IHRoYXQuJG5ld0VsZW1lbnQuY2xvbmUoKS5hcHBlbmRUbygnYm9keScpLFxyXG4gICAgICAgICAgICAgICAgYnRuV2lkdGggPSAkc2VsZWN0Q2xvbmUuY3NzKCd3aWR0aCcsICdhdXRvJykuY2hpbGRyZW4oJ2J1dHRvbicpLm91dGVyV2lkdGgoKTtcclxuXHJcbiAgICAgICAgICAgICRzZWxlY3RDbG9uZS5yZW1vdmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIFNldCB3aWR0aCB0byB3aGF0ZXZlcidzIGxhcmdlciwgYnV0dG9uIHRpdGxlIG9yIGxvbmdlc3Qgb3B0aW9uXHJcbiAgICAgICAgICAgIHRoYXQuc2l6ZUluZm8uc2VsZWN0V2lkdGggPSBNYXRoLm1heCh0aGF0LnNpemVJbmZvLnRvdGFsTWVudVdpZHRoLCBidG5XaWR0aCk7XHJcbiAgICAgICAgICAgIHRoYXQuJG5ld0VsZW1lbnQuY3NzKCd3aWR0aCcsIHRoYXQuc2l6ZUluZm8uc2VsZWN0V2lkdGggKyAncHgnKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9ucy53aWR0aCA9PT0gJ2ZpdCcpIHtcclxuICAgICAgICAvLyBSZW1vdmUgaW5saW5lIG1pbi13aWR0aCBzbyB3aWR0aCBjYW4gYmUgY2hhbmdlZCBmcm9tICdhdXRvJ1xyXG4gICAgICAgIHRoaXMuJG1lbnUuY3NzKCdtaW4td2lkdGgnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kbmV3RWxlbWVudC5jc3MoJ3dpZHRoJywgJycpLmFkZENsYXNzKCdmaXQtd2lkdGgnKTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMud2lkdGgpIHtcclxuICAgICAgICAvLyBSZW1vdmUgaW5saW5lIG1pbi13aWR0aCBzbyB3aWR0aCBjYW4gYmUgY2hhbmdlZCBmcm9tICdhdXRvJ1xyXG4gICAgICAgIHRoaXMuJG1lbnUuY3NzKCdtaW4td2lkdGgnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kbmV3RWxlbWVudC5jc3MoJ3dpZHRoJywgdGhpcy5vcHRpb25zLndpZHRoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyBSZW1vdmUgaW5saW5lIG1pbi13aWR0aC93aWR0aCBzbyB3aWR0aCBjYW4gYmUgY2hhbmdlZFxyXG4gICAgICAgIHRoaXMuJG1lbnUuY3NzKCdtaW4td2lkdGgnLCAnJyk7XHJcbiAgICAgICAgdGhpcy4kbmV3RWxlbWVudC5jc3MoJ3dpZHRoJywgJycpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFJlbW92ZSBmaXQtd2lkdGggY2xhc3MgaWYgd2lkdGggaXMgY2hhbmdlZCBwcm9ncmFtbWF0aWNhbGx5XHJcbiAgICAgIGlmICh0aGlzLiRuZXdFbGVtZW50Lmhhc0NsYXNzKCdmaXQtd2lkdGgnKSAmJiB0aGlzLm9wdGlvbnMud2lkdGggIT09ICdmaXQnKSB7XHJcbiAgICAgICAgdGhpcy4kbmV3RWxlbWVudFswXS5jbGFzc0xpc3QucmVtb3ZlKCdmaXQtd2lkdGgnKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBzZWxlY3RQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLiRic0NvbnRhaW5lciA9ICQoJzxkaXYgY2xhc3M9XCJicy1jb250YWluZXJcIiAvPicpO1xyXG5cclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgJGNvbnRhaW5lciA9ICQodGhpcy5vcHRpb25zLmNvbnRhaW5lciksXHJcbiAgICAgICAgICBwb3MsXHJcbiAgICAgICAgICBjb250YWluZXJQb3MsXHJcbiAgICAgICAgICBhY3R1YWxIZWlnaHQsXHJcbiAgICAgICAgICBnZXRQbGFjZW1lbnQgPSBmdW5jdGlvbiAoJGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lclBvc2l0aW9uID0ge30sXHJcbiAgICAgICAgICAgICAgICAvLyBmYWxsIGJhY2sgdG8gZHJvcGRvd24ncyBkZWZhdWx0IGRpc3BsYXkgc2V0dGluZyBpZiBkaXNwbGF5IGlzIG5vdCBtYW51YWxseSBzZXRcclxuICAgICAgICAgICAgICAgIGRpc3BsYXkgPSB0aGF0Lm9wdGlvbnMuZGlzcGxheSB8fCAoXHJcbiAgICAgICAgICAgICAgICAgIC8vIEJvb3RzdHJhcCAzIGRvZXNuJ3QgaGF2ZSAkLmZuLmRyb3Bkb3duLkNvbnN0cnVjdG9yLkRlZmF1bHRcclxuICAgICAgICAgICAgICAgICAgJC5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvci5EZWZhdWx0ID8gJC5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvci5EZWZhdWx0LmRpc3BsYXlcclxuICAgICAgICAgICAgICAgICAgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuJGJzQ29udGFpbmVyLmFkZENsYXNzKCRlbGVtZW50LmF0dHIoJ2NsYXNzJykucmVwbGFjZSgvZm9ybS1jb250cm9sfGZpdC13aWR0aC9naSwgJycpKS50b2dnbGVDbGFzcyhjbGFzc05hbWVzLkRST1BVUCwgJGVsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lcy5EUk9QVVApKTtcclxuICAgICAgICAgICAgcG9zID0gJGVsZW1lbnQub2Zmc2V0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISRjb250YWluZXIuaXMoJ2JvZHknKSkge1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclBvcyA9ICRjb250YWluZXIub2Zmc2V0KCk7XHJcbiAgICAgICAgICAgICAgY29udGFpbmVyUG9zLnRvcCArPSBwYXJzZUludCgkY29udGFpbmVyLmNzcygnYm9yZGVyVG9wV2lkdGgnKSkgLSAkY29udGFpbmVyLnNjcm9sbFRvcCgpO1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclBvcy5sZWZ0ICs9IHBhcnNlSW50KCRjb250YWluZXIuY3NzKCdib3JkZXJMZWZ0V2lkdGgnKSkgLSAkY29udGFpbmVyLnNjcm9sbExlZnQoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBjb250YWluZXJQb3MgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhY3R1YWxIZWlnaHQgPSAkZWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWVzLkRST1BVUCkgPyAwIDogJGVsZW1lbnRbMF0ub2Zmc2V0SGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgLy8gQm9vdHN0cmFwIDQrIHVzZXMgUG9wcGVyIGZvciBtZW51IHBvc2l0aW9uaW5nXHJcbiAgICAgICAgICAgIGlmICh2ZXJzaW9uLm1ham9yIDwgNCB8fCBkaXNwbGF5ID09PSAnc3RhdGljJykge1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclBvc2l0aW9uLnRvcCA9IHBvcy50b3AgLSBjb250YWluZXJQb3MudG9wICsgYWN0dWFsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgIGNvbnRhaW5lclBvc2l0aW9uLmxlZnQgPSBwb3MubGVmdCAtIGNvbnRhaW5lclBvcy5sZWZ0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXJQb3NpdGlvbi53aWR0aCA9ICRlbGVtZW50WzBdLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgICAgICAgdGhhdC4kYnNDb250YWluZXIuY3NzKGNvbnRhaW5lclBvc2l0aW9uKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLiRidXR0b24ub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICh0aGF0LmlzRGlzYWJsZWQoKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UGxhY2VtZW50KHRoYXQuJG5ld0VsZW1lbnQpO1xyXG5cclxuICAgICAgICB0aGF0LiRic0NvbnRhaW5lclxyXG4gICAgICAgICAgLmFwcGVuZFRvKHRoYXQub3B0aW9ucy5jb250YWluZXIpXHJcbiAgICAgICAgICAudG9nZ2xlQ2xhc3MoY2xhc3NOYW1lcy5TSE9XLCAhdGhhdC4kYnV0dG9uLmhhc0NsYXNzKGNsYXNzTmFtZXMuU0hPVykpXHJcbiAgICAgICAgICAuYXBwZW5kKHRoYXQuJG1lbnUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgICQod2luZG93KVxyXG4gICAgICAgIC5vZmYoJ3Jlc2l6ZScgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJyBzY3JvbGwnICsgRVZFTlRfS0VZICsgJy4nICsgdGhpcy5zZWxlY3RJZClcclxuICAgICAgICAub24oJ3Jlc2l6ZScgKyBFVkVOVF9LRVkgKyAnLicgKyB0aGlzLnNlbGVjdElkICsgJyBzY3JvbGwnICsgRVZFTlRfS0VZICsgJy4nICsgdGhpcy5zZWxlY3RJZCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdmFyIGlzQWN0aXZlID0gdGhhdC4kbmV3RWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWVzLlNIT1cpO1xyXG5cclxuICAgICAgICAgIGlmIChpc0FjdGl2ZSkgZ2V0UGxhY2VtZW50KHRoYXQuJG5ld0VsZW1lbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kZWxlbWVudC5vbignaGlkZScgKyBFVkVOVF9LRVksIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB0aGF0LiRtZW51LmRhdGEoJ2hlaWdodCcsIHRoYXQuJG1lbnUuaGVpZ2h0KCkpO1xyXG4gICAgICAgIHRoYXQuJGJzQ29udGFpbmVyLmRldGFjaCgpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgc2V0T3B0aW9uU3RhdHVzOiBmdW5jdGlvbiAoc2VsZWN0ZWRPbmx5KSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIHRoYXQubm9TY3JvbGwgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGF0LnNlbGVjdHBpY2tlci52aWV3LnZpc2libGVFbGVtZW50cyAmJiB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnZpc2libGVFbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcudmlzaWJsZUVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICB2YXIgbGlEYXRhID0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5kYXRhW2kgKyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMF0sXHJcbiAgICAgICAgICAgICAgb3B0aW9uID0gbGlEYXRhLm9wdGlvbjtcclxuXHJcbiAgICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3RlZE9ubHkgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgICB0aGF0LnNldERpc2FibGVkKFxyXG4gICAgICAgICAgICAgICAgbGlEYXRhLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgbGlEYXRhLmRpc2FibGVkXHJcbiAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhhdC5zZXRTZWxlY3RlZChcclxuICAgICAgICAgICAgICBsaURhdGEuaW5kZXgsXHJcbiAgICAgICAgICAgICAgb3B0aW9uLnNlbGVjdGVkXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IC0gdGhlIGluZGV4IG9mIHRoZSBvcHRpb24gdGhhdCBpcyBiZWluZyBjaGFuZ2VkXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IHNlbGVjdGVkIC0gdHJ1ZSBpZiB0aGUgb3B0aW9uIGlzIGJlaW5nIHNlbGVjdGVkLCBmYWxzZSBpZiBiZWluZyBkZXNlbGVjdGVkXHJcbiAgICAgKi9cclxuICAgIHNldFNlbGVjdGVkOiBmdW5jdGlvbiAoaW5kZXgsIHNlbGVjdGVkKSB7XHJcbiAgICAgIHZhciBsaSA9IHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZWxlbWVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgbGlEYXRhID0gdGhpcy5zZWxlY3RwaWNrZXIubWFpbi5kYXRhW2luZGV4XSxcclxuICAgICAgICAgIGFjdGl2ZUluZGV4SXNTZXQgPSB0aGlzLmFjdGl2ZUluZGV4ICE9PSB1bmRlZmluZWQsXHJcbiAgICAgICAgICB0aGlzSXNBY3RpdmUgPSB0aGlzLmFjdGl2ZUluZGV4ID09PSBpbmRleCxcclxuICAgICAgICAgIHByZXZBY3RpdmUsXHJcbiAgICAgICAgICBhLFxyXG4gICAgICAgICAgLy8gaWYgY3VycmVudCBvcHRpb24gaXMgYWxyZWFkeSBhY3RpdmVcclxuICAgICAgICAgIC8vIE9SXHJcbiAgICAgICAgICAvLyBpZiB0aGUgY3VycmVudCBvcHRpb24gaXMgYmVpbmcgc2VsZWN0ZWQsIGl0J3MgTk9UIG11bHRpcGxlLCBhbmRcclxuICAgICAgICAgIC8vIGFjdGl2ZUluZGV4IGlzIHVuZGVmaW5lZDpcclxuICAgICAgICAgIC8vICAtIHdoZW4gdGhlIG1lbnUgaXMgZmlyc3QgYmVpbmcgb3BlbmVkLCBPUlxyXG4gICAgICAgICAgLy8gIC0gYWZ0ZXIgYSBzZWFyY2ggaGFzIGJlZW4gcGVyZm9ybWVkLCBPUlxyXG4gICAgICAgICAgLy8gIC0gd2hlbiByZXRhaW5BY3RpdmUgaXMgZmFsc2Ugd2hlbiBzZWxlY3RpbmcgYSBuZXcgb3B0aW9uIChpLmUuIGluZGV4IG9mIHRoZSBuZXdseSBzZWxlY3RlZCBvcHRpb24gaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBjdXJyZW50IGFjdGl2ZUluZGV4KVxyXG4gICAgICAgICAga2VlcEFjdGl2ZSA9IHRoaXNJc0FjdGl2ZSB8fCAoc2VsZWN0ZWQgJiYgIXRoaXMubXVsdGlwbGUgJiYgIWFjdGl2ZUluZGV4SXNTZXQpO1xyXG5cclxuICAgICAgbGlEYXRhLnNlbGVjdGVkID0gc2VsZWN0ZWQ7XHJcblxyXG4gICAgICBhID0gbGkuZmlyc3RDaGlsZDtcclxuXHJcbiAgICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsaS5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcsIHNlbGVjdGVkKTtcclxuXHJcbiAgICAgIGlmIChrZWVwQWN0aXZlKSB7XHJcbiAgICAgICAgdGhpcy5mb2N1c0l0ZW0obGksIGxpRGF0YSk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RwaWNrZXIudmlldy5jdXJyZW50QWN0aXZlID0gbGk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGluZGV4O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZGVmb2N1c0l0ZW0obGkpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoYSkge1xyXG4gICAgICAgIGEuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBzZWxlY3RlZCk7XHJcblxyXG4gICAgICAgIGlmIChzZWxlY3RlZCkge1xyXG4gICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCB0cnVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCFrZWVwQWN0aXZlICYmICFhY3RpdmVJbmRleElzU2V0ICYmIHNlbGVjdGVkICYmIHRoaXMucHJldkFjdGl2ZUluZGV4ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwcmV2QWN0aXZlID0gdGhpcy5zZWxlY3RwaWNrZXIubWFpbi5lbGVtZW50c1t0aGlzLnByZXZBY3RpdmVJbmRleF07XHJcblxyXG4gICAgICAgIHRoaXMuZGVmb2N1c0l0ZW0ocHJldkFjdGl2ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggLSB0aGUgaW5kZXggb2YgdGhlIG9wdGlvbiB0aGF0IGlzIGJlaW5nIGRpc2FibGVkXHJcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRpc2FibGVkIC0gdHJ1ZSBpZiB0aGUgb3B0aW9uIGlzIGJlaW5nIGRpc2FibGVkLCBmYWxzZSBpZiBiZWluZyBlbmFibGVkXHJcbiAgICAgKi9cclxuICAgIHNldERpc2FibGVkOiBmdW5jdGlvbiAoaW5kZXgsIGRpc2FibGVkKSB7XHJcbiAgICAgIHZhciBsaSA9IHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZWxlbWVudHNbaW5kZXhdLFxyXG4gICAgICAgICAgYTtcclxuXHJcbiAgICAgIHRoaXMuc2VsZWN0cGlja2VyLm1haW4uZGF0YVtpbmRleF0uZGlzYWJsZWQgPSBkaXNhYmxlZDtcclxuXHJcbiAgICAgIGEgPSBsaS5maXJzdENoaWxkO1xyXG5cclxuICAgICAgbGkuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWVzLkRJU0FCTEVELCBkaXNhYmxlZCk7XHJcblxyXG4gICAgICBpZiAoYSkge1xyXG4gICAgICAgIGlmICh2ZXJzaW9uLm1ham9yID09PSAnNCcpIGEuY2xhc3NMaXN0LnRvZ2dsZShjbGFzc05hbWVzLkRJU0FCTEVELCBkaXNhYmxlZCk7XHJcblxyXG4gICAgICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICAgICAgYS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCBkaXNhYmxlZCk7XHJcbiAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGEucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XHJcbiAgICAgICAgICBhLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcblxyXG4gICAgaXNEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kZWxlbWVudFswXS5kaXNhYmxlZDtcclxuICAgIH0sXHJcblxyXG4gICAgY2hlY2tEaXNhYmxlZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKCkpIHtcclxuICAgICAgICB0aGlzLiRuZXdFbGVtZW50WzBdLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lcy5ESVNBQkxFRCk7XHJcbiAgICAgICAgdGhpcy4kYnV0dG9uLmFkZENsYXNzKGNsYXNzTmFtZXMuRElTQUJMRUQpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAodGhpcy4kYnV0dG9uWzBdLmNsYXNzTGlzdC5jb250YWlucyhjbGFzc05hbWVzLkRJU0FCTEVEKSkge1xyXG4gICAgICAgICAgdGhpcy4kbmV3RWxlbWVudFswXS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZXMuRElTQUJMRUQpO1xyXG4gICAgICAgICAgdGhpcy4kYnV0dG9uLnJlbW92ZUNsYXNzKGNsYXNzTmFtZXMuRElTQUJMRUQpLmF0dHIoJ2FyaWEtZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGNsaWNrTGlzdGVuZXI6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmFyIHRoYXQgPSB0aGlzLFxyXG4gICAgICAgICAgJGRvY3VtZW50ID0gJChkb2N1bWVudCk7XHJcblxyXG4gICAgICAkZG9jdW1lbnQuZGF0YSgnc3BhY2VTZWxlY3QnLCBmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLiRidXR0b24ub24oJ2tleXVwJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoLygzMikvLnRlc3QoZS5rZXlDb2RlLnRvU3RyaW5nKDEwKSkgJiYgJGRvY3VtZW50LmRhdGEoJ3NwYWNlU2VsZWN0JykpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICRkb2N1bWVudC5kYXRhKCdzcGFjZVNlbGVjdCcsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kbmV3RWxlbWVudC5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAodmVyc2lvbi5tYWpvciA+IDMgJiYgIXRoYXQuZHJvcGRvd24pIHtcclxuICAgICAgICAgIHRoYXQuZHJvcGRvd24gPSB0aGF0LiRidXR0b24uZGF0YSgnYnMuZHJvcGRvd24nKTtcclxuICAgICAgICAgIHRoYXQuZHJvcGRvd24uX21lbnUgPSB0aGF0LiRtZW51WzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRidXR0b24ub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmICghdGhhdC4kbmV3RWxlbWVudC5oYXNDbGFzcyhjbGFzc05hbWVzLlNIT1cpKSB7XHJcbiAgICAgICAgICB0aGF0LnNldFNpemUoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZnVuY3Rpb24gc2V0Rm9jdXMgKCkge1xyXG4gICAgICAgIGlmICh0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgdGhhdC4kc2VhcmNoYm94LnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuJG1lbnVJbm5lci50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZnVuY3Rpb24gY2hlY2tQb3BwZXJFeGlzdHMgKCkge1xyXG4gICAgICAgIGlmICh0aGF0LmRyb3Bkb3duICYmIHRoYXQuZHJvcGRvd24uX3BvcHBlciAmJiB0aGF0LmRyb3Bkb3duLl9wb3BwZXIuc3RhdGUuaXNDcmVhdGVkKSB7XHJcbiAgICAgICAgICBzZXRGb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2hlY2tQb3BwZXJFeGlzdHMpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kZWxlbWVudC5vbignc2hvd24nICsgRVZFTlRfS0VZLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKHRoYXQuJG1lbnVJbm5lclswXS5zY3JvbGxUb3AgIT09IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcuc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICB0aGF0LiRtZW51SW5uZXJbMF0uc2Nyb2xsVG9wID0gdGhhdC5zZWxlY3RwaWNrZXIudmlldy5zY3JvbGxUb3A7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmVyc2lvbi5tYWpvciA+IDMpIHtcclxuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShjaGVja1BvcHBlckV4aXN0cyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldEZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIGVuc3VyZSBwb3NpbnNldCBhbmQgc2V0c2l6ZSBhcmUgY29ycmVjdCBiZWZvcmUgc2VsZWN0aW5nIGFuIG9wdGlvbiB2aWEgYSBjbGlja1xyXG4gICAgICB0aGlzLiRtZW51SW5uZXIub24oJ21vdXNlZW50ZXInLCAnbGkgYScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgdmFyIGhvdmVyTGkgPSB0aGlzLnBhcmVudEVsZW1lbnQsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uMCA9IHRoYXQuaXNWaXJ0dWFsKCkgPyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMCA6IDAsXHJcbiAgICAgICAgICAgIGluZGV4ID0gQXJyYXkucHJvdG90eXBlLmluZGV4T2YuY2FsbChob3ZlckxpLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4sIGhvdmVyTGkpLFxyXG4gICAgICAgICAgICBob3ZlckRhdGEgPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbaW5kZXggKyBwb3NpdGlvbjBdO1xyXG5cclxuICAgICAgICB0aGF0LmZvY3VzSXRlbShob3ZlckxpLCBob3ZlckRhdGEsIHRydWUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJG1lbnVJbm5lci5vbignY2xpY2snLCAnbGkgYScsIGZ1bmN0aW9uIChlLCByZXRhaW5BY3RpdmUpIHtcclxuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgICBlbGVtZW50ID0gdGhhdC4kZWxlbWVudFswXSxcclxuICAgICAgICAgICAgcG9zaXRpb24wID0gdGhhdC5pc1ZpcnR1YWwoKSA/IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcucG9zaXRpb24wIDogMCxcclxuICAgICAgICAgICAgY2xpY2tlZERhdGEgPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGFbJHRoaXMucGFyZW50KCkuaW5kZXgoKSArIHBvc2l0aW9uMF0sXHJcbiAgICAgICAgICAgIGNsaWNrZWRJbmRleCA9IGNsaWNrZWREYXRhLmluZGV4LFxyXG4gICAgICAgICAgICBwcmV2VmFsdWUgPSBnZXRTZWxlY3RWYWx1ZXMoZWxlbWVudCksXHJcbiAgICAgICAgICAgIHByZXZJbmRleCA9IGVsZW1lbnQuc2VsZWN0ZWRJbmRleCxcclxuICAgICAgICAgICAgcHJldk9wdGlvbiA9IGVsZW1lbnQub3B0aW9uc1twcmV2SW5kZXhdLFxyXG4gICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgY2xvc2Ugb24gbXVsdGkgY2hvaWNlIG1lbnVcclxuICAgICAgICBpZiAodGhhdC5tdWx0aXBsZSAmJiB0aGF0Lm9wdGlvbnMubWF4T3B0aW9ucyAhPT0gMSkge1xyXG4gICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gRG9uJ3QgcnVuIGlmIHRoZSBzZWxlY3QgaXMgZGlzYWJsZWRcclxuICAgICAgICBpZiAoIXRoYXQuaXNEaXNhYmxlZCgpICYmICEkdGhpcy5wYXJlbnQoKS5oYXNDbGFzcyhjbGFzc05hbWVzLkRJU0FCTEVEKSkge1xyXG4gICAgICAgICAgdmFyIG9wdGlvbiA9IGNsaWNrZWREYXRhLm9wdGlvbixcclxuICAgICAgICAgICAgICAkb3B0aW9uID0gJChvcHRpb24pLFxyXG4gICAgICAgICAgICAgIHN0YXRlID0gb3B0aW9uLnNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICRvcHRncm91cCA9ICRvcHRpb24ucGFyZW50KCdvcHRncm91cCcpLFxyXG4gICAgICAgICAgICAgICRvcHRncm91cE9wdGlvbnMgPSAkb3B0Z3JvdXAuZmluZCgnb3B0aW9uJyksXHJcbiAgICAgICAgICAgICAgbWF4T3B0aW9ucyA9IHRoYXQub3B0aW9ucy5tYXhPcHRpb25zLFxyXG4gICAgICAgICAgICAgIG1heE9wdGlvbnNHcnAgPSAkb3B0Z3JvdXAuZGF0YSgnbWF4T3B0aW9ucycpIHx8IGZhbHNlO1xyXG5cclxuICAgICAgICAgIGlmIChjbGlja2VkSW5kZXggPT09IHRoYXQuYWN0aXZlSW5kZXgpIHJldGFpbkFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgaWYgKCFyZXRhaW5BY3RpdmUpIHtcclxuICAgICAgICAgICAgdGhhdC5wcmV2QWN0aXZlSW5kZXggPSB0aGF0LmFjdGl2ZUluZGV4O1xyXG4gICAgICAgICAgICB0aGF0LmFjdGl2ZUluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmICghdGhhdC5tdWx0aXBsZSkgeyAvLyBEZXNlbGVjdCBhbGwgb3RoZXJzIGlmIG5vdCBtdWx0aSBzZWxlY3QgYm94XHJcbiAgICAgICAgICAgIGlmIChwcmV2T3B0aW9uKSBwcmV2T3B0aW9uLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoYXQuc2V0U2VsZWN0ZWQoY2xpY2tlZEluZGV4LCB0cnVlKTtcclxuICAgICAgICAgIH0gZWxzZSB7IC8vIFRvZ2dsZSB0aGUgb25lIHdlIGhhdmUgY2hvc2VuIGlmIHdlIGFyZSBtdWx0aSBzZWxlY3QuXHJcbiAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9ICFzdGF0ZTtcclxuXHJcbiAgICAgICAgICAgIHRoYXQuc2V0U2VsZWN0ZWQoY2xpY2tlZEluZGV4LCAhc3RhdGUpO1xyXG4gICAgICAgICAgICB0aGF0LmZvY3VzZWRQYXJlbnQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChtYXhPcHRpb25zICE9PSBmYWxzZSB8fCBtYXhPcHRpb25zR3JwICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgIHZhciBtYXhSZWFjaGVkID0gbWF4T3B0aW9ucyA8IGdldFNlbGVjdGVkT3B0aW9ucyhlbGVtZW50KS5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgIG1heFJlYWNoZWRHcnAgPSBtYXhPcHRpb25zR3JwIDwgJG9wdGdyb3VwLmZpbmQoJ29wdGlvbjpzZWxlY3RlZCcpLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKChtYXhPcHRpb25zICYmIG1heFJlYWNoZWQpIHx8IChtYXhPcHRpb25zR3JwICYmIG1heFJlYWNoZWRHcnApKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF4T3B0aW9ucyAmJiBtYXhPcHRpb25zID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgZWxlbWVudC5zZWxlY3RlZEluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2V0T3B0aW9uU3RhdHVzKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXhPcHRpb25zR3JwICYmIG1heE9wdGlvbnNHcnAgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8ICRvcHRncm91cE9wdGlvbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX29wdGlvbiA9ICRvcHRncm91cE9wdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgX29wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0U2VsZWN0ZWQoX29wdGlvbi5saUluZGV4LCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2V0U2VsZWN0ZWQoY2xpY2tlZEluZGV4LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgIHZhciBtYXhPcHRpb25zVGV4dCA9IHR5cGVvZiB0aGF0Lm9wdGlvbnMubWF4T3B0aW9uc1RleHQgPT09ICdzdHJpbmcnID8gW3RoYXQub3B0aW9ucy5tYXhPcHRpb25zVGV4dCwgdGhhdC5vcHRpb25zLm1heE9wdGlvbnNUZXh0XSA6IHRoYXQub3B0aW9ucy5tYXhPcHRpb25zVGV4dCxcclxuICAgICAgICAgICAgICAgICAgICAgIG1heE9wdGlvbnNBcnIgPSB0eXBlb2YgbWF4T3B0aW9uc1RleHQgPT09ICdmdW5jdGlvbicgPyBtYXhPcHRpb25zVGV4dChtYXhPcHRpb25zLCBtYXhPcHRpb25zR3JwKSA6IG1heE9wdGlvbnNUZXh0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgbWF4VHh0ID0gbWF4T3B0aW9uc0FyclswXS5yZXBsYWNlKCd7bn0nLCBtYXhPcHRpb25zKSxcclxuICAgICAgICAgICAgICAgICAgICAgIG1heFR4dEdycCA9IG1heE9wdGlvbnNBcnJbMV0ucmVwbGFjZSgne259JywgbWF4T3B0aW9uc0dycCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAkbm90aWZ5ID0gJCgnPGRpdiBjbGFzcz1cIm5vdGlmeVwiPjwvZGl2PicpO1xyXG4gICAgICAgICAgICAgICAgICAvLyBJZiB7dmFyfSBpcyBzZXQgaW4gYXJyYXksIHJlcGxhY2UgaXRcclxuICAgICAgICAgICAgICAgICAgLyoqIEBkZXByZWNhdGVkICovXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtYXhPcHRpb25zQXJyWzJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VHh0ID0gbWF4VHh0LnJlcGxhY2UoJ3t2YXJ9JywgbWF4T3B0aW9uc0FyclsyXVttYXhPcHRpb25zID4gMSA/IDAgOiAxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4VHh0R3JwID0gbWF4VHh0R3JwLnJlcGxhY2UoJ3t2YXJ9JywgbWF4T3B0aW9uc0FyclsyXVttYXhPcHRpb25zR3JwID4gMSA/IDAgOiAxXSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGhhdC4kbWVudS5hcHBlbmQoJG5vdGlmeSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZiAobWF4T3B0aW9ucyAmJiBtYXhSZWFjaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJG5vdGlmeS5hcHBlbmQoJCgnPGRpdj4nICsgbWF4VHh0ICsgJzwvZGl2PicpKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC4kZWxlbWVudC50cmlnZ2VyKCdtYXhSZWFjaGVkJyArIEVWRU5UX0tFWSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmIChtYXhPcHRpb25zR3JwICYmIG1heFJlYWNoZWRHcnApIHtcclxuICAgICAgICAgICAgICAgICAgICAkbm90aWZ5LmFwcGVuZCgkKCc8ZGl2PicgKyBtYXhUeHRHcnAgKyAnPC9kaXY+JykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ21heFJlYWNoZWRHcnAnICsgRVZFTlRfS0VZKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXRTZWxlY3RlZChjbGlja2VkSW5kZXgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgJG5vdGlmeVswXS5jbGFzc0xpc3QuYWRkKCdmYWRlT3V0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAkbm90aWZ5LnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAgICAgICB9LCAxMDUwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBpZiAoIXRoYXQubXVsdGlwbGUgfHwgKHRoYXQubXVsdGlwbGUgJiYgdGhhdC5vcHRpb25zLm1heE9wdGlvbnMgPT09IDEpKSB7XHJcbiAgICAgICAgICAgIHRoYXQuJGJ1dHRvbi50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgfSBlbHNlIGlmICh0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgICB0aGF0LiRzZWFyY2hib3gudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAvLyBUcmlnZ2VyIHNlbGVjdCAnY2hhbmdlJ1xyXG4gICAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UpIHtcclxuICAgICAgICAgICAgaWYgKHRoYXQubXVsdGlwbGUgfHwgcHJldkluZGV4ICE9PSBlbGVtZW50LnNlbGVjdGVkSW5kZXgpIHtcclxuICAgICAgICAgICAgICAvLyAkb3B0aW9uLnByb3AoJ3NlbGVjdGVkJykgaXMgY3VycmVudCBvcHRpb24gc3RhdGUgKHNlbGVjdGVkL3Vuc2VsZWN0ZWQpLiBwcmV2VmFsdWUgaXMgdGhlIHZhbHVlIG9mIHRoZSBzZWxlY3QgcHJpb3IgdG8gYmVpbmcgY2hhbmdlZC5cclxuICAgICAgICAgICAgICBjaGFuZ2VkQXJndW1lbnRzID0gW29wdGlvbi5pbmRleCwgJG9wdGlvbi5wcm9wKCdzZWxlY3RlZCcpLCBwcmV2VmFsdWVdO1xyXG4gICAgICAgICAgICAgIHRoYXQuJGVsZW1lbnRcclxuICAgICAgICAgICAgICAgIC50cmlnZ2VyTmF0aXZlKCdjaGFuZ2UnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRtZW51Lm9uKCdjbGljaycsICdsaS4nICsgY2xhc3NOYW1lcy5ESVNBQkxFRCArICcgYSwgLicgKyBjbGFzc05hbWVzLlBPUE9WRVJIRUFERVIgKyAnLCAuJyArIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUiArICcgOm5vdCguY2xvc2UpJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAoZS5jdXJyZW50VGFyZ2V0ID09IHRoaXMpIHtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICBpZiAodGhhdC5vcHRpb25zLmxpdmVTZWFyY2ggJiYgISQoZS50YXJnZXQpLmhhc0NsYXNzKCdjbG9zZScpKSB7XHJcbiAgICAgICAgICAgIHRoYXQuJHNlYXJjaGJveC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhhdC4kYnV0dG9uLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJG1lbnVJbm5lci5vbignY2xpY2snLCAnLmRpdmlkZXIsIC5kcm9wZG93bi1oZWFkZXInLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGlmICh0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgdGhhdC4kc2VhcmNoYm94LnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoYXQuJGJ1dHRvbi50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRtZW51Lm9uKCdjbGljaycsICcuJyArIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUiArICcgLmNsb3NlJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoYXQuJGJ1dHRvbi50cmlnZ2VyKCdjbGljaycpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJHNlYXJjaGJveC5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kbWVudS5vbignY2xpY2snLCAnLmFjdGlvbnMtYnRuJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBpZiAodGhhdC5vcHRpb25zLmxpdmVTZWFyY2gpIHtcclxuICAgICAgICAgIHRoYXQuJHNlYXJjaGJveC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LiRidXR0b24udHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYnMtc2VsZWN0LWFsbCcpKSB7XHJcbiAgICAgICAgICB0aGF0LnNlbGVjdEFsbCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGF0LmRlc2VsZWN0QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJGJ1dHRvblxyXG4gICAgICAgIC5vbignZm9jdXMnICsgRVZFTlRfS0VZLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgdmFyIHRhYmluZGV4ID0gdGhhdC4kZWxlbWVudFswXS5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XHJcblxyXG4gICAgICAgICAgLy8gb25seSBjaGFuZ2Ugd2hlbiBidXR0b24gaXMgYWN0dWFsbHkgZm9jdXNlZFxyXG4gICAgICAgICAgaWYgKHRhYmluZGV4ICE9PSB1bmRlZmluZWQgJiYgZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5pc1RydXN0ZWQpIHtcclxuICAgICAgICAgICAgLy8gYXBwbHkgc2VsZWN0IGVsZW1lbnQncyB0YWJpbmRleCB0byBlbnN1cmUgY29ycmVjdCBvcmRlciBpcyBmb2xsb3dlZCB3aGVuIHRhYmJpbmcgdG8gdGhlIG5leHQgZWxlbWVudFxyXG4gICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0YWJpbmRleCk7XHJcbiAgICAgICAgICAgIC8vIHNldCBlbGVtZW50J3MgdGFiaW5kZXggdG8gLTEgdG8gYWxsb3cgZm9yIHJldmVyc2UgdGFiYmluZ1xyXG4gICAgICAgICAgICB0aGF0LiRlbGVtZW50WzBdLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAtMSk7XHJcbiAgICAgICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnZpZXcudGFiaW5kZXggPSB0YWJpbmRleDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5vbignYmx1cicgKyBFVkVOVF9LRVksIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAvLyByZXZlcnQgZXZlcnl0aGluZyB0byBvcmlnaW5hbCB0YWJpbmRleFxyXG4gICAgICAgICAgaWYgKHRoYXQuc2VsZWN0cGlja2VyLnZpZXcudGFiaW5kZXggIT09IHVuZGVmaW5lZCAmJiBlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LmlzVHJ1c3RlZCkge1xyXG4gICAgICAgICAgICB0aGF0LiRlbGVtZW50WzBdLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnRhYmluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgLTEpO1xyXG4gICAgICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnRhYmluZGV4ID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy4kZWxlbWVudFxyXG4gICAgICAgIC5vbignY2hhbmdlJyArIEVWRU5UX0tFWSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgdGhhdC5yZW5kZXIoKTtcclxuICAgICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignY2hhbmdlZCcgKyBFVkVOVF9LRVksIGNoYW5nZWRBcmd1bWVudHMpO1xyXG4gICAgICAgICAgY2hhbmdlZEFyZ3VtZW50cyA9IG51bGw7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAub24oJ2ZvY3VzJyArIEVWRU5UX0tFWSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgaWYgKCF0aGF0Lm9wdGlvbnMubW9iaWxlKSB0aGF0LiRidXR0b25bMF0uZm9jdXMoKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgbGl2ZVNlYXJjaExpc3RlbmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciB0aGF0ID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuJGJ1dHRvbi5vbignY2xpY2suYnMuZHJvcGRvd24uZGF0YS1hcGknLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgaWYgKCEhdGhhdC4kc2VhcmNoYm94LnZhbCgpKSB7XHJcbiAgICAgICAgICB0aGF0LiRzZWFyY2hib3gudmFsKCcnKTtcclxuICAgICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnNlYXJjaC5wcmV2aW91c1ZhbHVlID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLiRzZWFyY2hib3gub24oJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpIGZvY3VzLmJzLmRyb3Bkb3duLmRhdGEtYXBpIHRvdWNoZW5kLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuJHNlYXJjaGJveC5vbignaW5wdXQgcHJvcGVydHljaGFuZ2UnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHNlYXJjaFZhbHVlID0gdGhhdC4kc2VhcmNoYm94WzBdLnZhbHVlO1xyXG5cclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5zZWFyY2guZWxlbWVudHMgPSBbXTtcclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5zZWFyY2guZGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoc2VhcmNoVmFsdWUpIHtcclxuICAgICAgICAgIHZhciBpLFxyXG4gICAgICAgICAgICAgIHNlYXJjaE1hdGNoID0gW10sXHJcbiAgICAgICAgICAgICAgcSA9IHNlYXJjaFZhbHVlLnRvVXBwZXJDYXNlKCksXHJcbiAgICAgICAgICAgICAgY2FjaGUgPSB7fSxcclxuICAgICAgICAgICAgICBjYWNoZUFyciA9IFtdLFxyXG4gICAgICAgICAgICAgIHNlYXJjaFN0eWxlID0gdGhhdC5fc2VhcmNoU3R5bGUoKSxcclxuICAgICAgICAgICAgICBub3JtYWxpemVTZWFyY2ggPSB0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaE5vcm1hbGl6ZTtcclxuXHJcbiAgICAgICAgICBpZiAobm9ybWFsaXplU2VhcmNoKSBxID0gbm9ybWFsaXplVG9CYXNlKHEpO1xyXG5cclxuICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhhdC5zZWxlY3RwaWNrZXIubWFpbi5kYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBsaSA9IHRoYXQuc2VsZWN0cGlja2VyLm1haW4uZGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghY2FjaGVbaV0pIHtcclxuICAgICAgICAgICAgICBjYWNoZVtpXSA9IHN0cmluZ1NlYXJjaChsaSwgcSwgc2VhcmNoU3R5bGUsIG5vcm1hbGl6ZVNlYXJjaCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChjYWNoZVtpXSAmJiBsaS5oZWFkZXJJbmRleCAhPT0gdW5kZWZpbmVkICYmIGNhY2hlQXJyLmluZGV4T2YobGkuaGVhZGVySW5kZXgpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgIGlmIChsaS5oZWFkZXJJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNhY2hlW2xpLmhlYWRlckluZGV4IC0gMV0gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2FjaGVBcnIucHVzaChsaS5oZWFkZXJJbmRleCAtIDEpO1xyXG4gICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgY2FjaGVbbGkuaGVhZGVySW5kZXhdID0gdHJ1ZTtcclxuICAgICAgICAgICAgICBjYWNoZUFyci5wdXNoKGxpLmhlYWRlckluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgY2FjaGVbbGkubGFzdEluZGV4ICsgMV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoY2FjaGVbaV0gJiYgbGkudHlwZSAhPT0gJ29wdGdyb3VwLWxhYmVsJykgY2FjaGVBcnIucHVzaChpKTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBmb3IgKHZhciBpID0gMCwgY2FjaGVMZW4gPSBjYWNoZUFyci5sZW5ndGg7IGkgPCBjYWNoZUxlbjsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNhY2hlQXJyW2ldLFxyXG4gICAgICAgICAgICAgICAgcHJldkluZGV4ID0gY2FjaGVBcnJbaSAtIDFdLFxyXG4gICAgICAgICAgICAgICAgbGkgPSB0aGF0LnNlbGVjdHBpY2tlci5tYWluLmRhdGFbaW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgbGlQcmV2ID0gdGhhdC5zZWxlY3RwaWNrZXIubWFpbi5kYXRhW3ByZXZJbmRleF07XHJcblxyXG4gICAgICAgICAgICBpZiAobGkudHlwZSAhPT0gJ2RpdmlkZXInIHx8IChsaS50eXBlID09PSAnZGl2aWRlcicgJiYgbGlQcmV2ICYmIGxpUHJldi50eXBlICE9PSAnZGl2aWRlcicgJiYgY2FjaGVMZW4gLSAxICE9PSBpKSkge1xyXG4gICAgICAgICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnNlYXJjaC5kYXRhLnB1c2gobGkpO1xyXG4gICAgICAgICAgICAgIHNlYXJjaE1hdGNoLnB1c2godGhhdC5zZWxlY3RwaWNrZXIubWFpbi5lbGVtZW50c1tpbmRleF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhhdC5hY3RpdmVJbmRleCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgIHRoYXQubm9TY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgICAgdGhhdC4kbWVudUlubmVyLnNjcm9sbFRvcCgwKTtcclxuICAgICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnNlYXJjaC5lbGVtZW50cyA9IHNlYXJjaE1hdGNoO1xyXG4gICAgICAgICAgdGhhdC5jcmVhdGVWaWV3KHRydWUpO1xyXG4gICAgICAgICAgc2hvd05vUmVzdWx0cy5jYWxsKHRoYXQsIHNlYXJjaE1hdGNoLCBzZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGF0LnNlbGVjdHBpY2tlci5zZWFyY2gucHJldmlvdXNWYWx1ZSkgeyAvLyBmb3IgSUUxMSAoIzI0MDIpXHJcbiAgICAgICAgICB0aGF0LiRtZW51SW5uZXIuc2Nyb2xsVG9wKDApO1xyXG4gICAgICAgICAgdGhhdC5jcmVhdGVWaWV3KGZhbHNlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoYXQuc2VsZWN0cGlja2VyLnNlYXJjaC5wcmV2aW91c1ZhbHVlID0gIHNlYXJjaFZhbHVlO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcblxyXG4gICAgX3NlYXJjaFN0eWxlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubGl2ZVNlYXJjaFN0eWxlIHx8ICdjb250YWlucyc7XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbDogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXTtcclxuXHJcbiAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgdmFyIHByZXZWYWx1ZSA9IGdldFNlbGVjdFZhbHVlcyhlbGVtZW50KTtcclxuXHJcbiAgICAgICAgY2hhbmdlZEFyZ3VtZW50cyA9IFtudWxsLCBudWxsLCBwcmV2VmFsdWVdO1xyXG5cclxuICAgICAgICB0aGlzLiRlbGVtZW50XHJcbiAgICAgICAgICAudmFsKHZhbHVlKVxyXG4gICAgICAgICAgLnRyaWdnZXIoJ2NoYW5nZWQnICsgRVZFTlRfS0VZLCBjaGFuZ2VkQXJndW1lbnRzKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJG5ld0VsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lcy5TSE9XKSkge1xyXG4gICAgICAgICAgaWYgKHRoaXMubXVsdGlwbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRPcHRpb25TdGF0dXModHJ1ZSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgbGlTZWxlY3RlZEluZGV4ID0gKGVsZW1lbnQub3B0aW9uc1tlbGVtZW50LnNlbGVjdGVkSW5kZXhdIHx8IHt9KS5saUluZGV4O1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBsaVNlbGVjdGVkSW5kZXggPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3RlZCh0aGlzLnNlbGVjdGVkSW5kZXgsIGZhbHNlKTtcclxuICAgICAgICAgICAgICB0aGlzLnNldFNlbGVjdGVkKGxpU2VsZWN0ZWRJbmRleCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVuZGVyKCk7XHJcblxyXG4gICAgICAgIGNoYW5nZWRBcmd1bWVudHMgPSBudWxsO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBjaGFuZ2VBbGw6IGZ1bmN0aW9uIChzdGF0dXMpIHtcclxuICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSByZXR1cm47XHJcbiAgICAgIGlmICh0eXBlb2Ygc3RhdHVzID09PSAndW5kZWZpbmVkJykgc3RhdHVzID0gdHJ1ZTtcclxuXHJcbiAgICAgIHZhciBlbGVtZW50ID0gdGhpcy4kZWxlbWVudFswXSxcclxuICAgICAgICAgIHByZXZpb3VzU2VsZWN0ZWQgPSAwLFxyXG4gICAgICAgICAgY3VycmVudFNlbGVjdGVkID0gMCxcclxuICAgICAgICAgIHByZXZWYWx1ZSA9IGdldFNlbGVjdFZhbHVlcyhlbGVtZW50KTtcclxuXHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYnMtc2VsZWN0LWhpZGRlbicpO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDAsIGRhdGEgPSB0aGlzLnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGEsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICB2YXIgbGlEYXRhID0gZGF0YVtpXSxcclxuICAgICAgICAgICAgb3B0aW9uID0gbGlEYXRhLm9wdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKG9wdGlvbiAmJiAhbGlEYXRhLmRpc2FibGVkICYmIGxpRGF0YS50eXBlICE9PSAnZGl2aWRlcicpIHtcclxuICAgICAgICAgIGlmIChsaURhdGEuc2VsZWN0ZWQpIHByZXZpb3VzU2VsZWN0ZWQrKztcclxuICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHN0YXR1cztcclxuICAgICAgICAgIGlmIChzdGF0dXMgPT09IHRydWUpIGN1cnJlbnRTZWxlY3RlZCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdicy1zZWxlY3QtaGlkZGVuJyk7XHJcblxyXG4gICAgICBpZiAocHJldmlvdXNTZWxlY3RlZCA9PT0gY3VycmVudFNlbGVjdGVkKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnNldE9wdGlvblN0YXR1cygpO1xyXG5cclxuICAgICAgY2hhbmdlZEFyZ3VtZW50cyA9IFtudWxsLCBudWxsLCBwcmV2VmFsdWVdO1xyXG5cclxuICAgICAgdGhpcy4kZWxlbWVudFxyXG4gICAgICAgIC50cmlnZ2VyTmF0aXZlKCdjaGFuZ2UnKTtcclxuICAgIH0sXHJcblxyXG4gICAgc2VsZWN0QWxsOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNoYW5nZUFsbCh0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVzZWxlY3RBbGw6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlQWxsKGZhbHNlKTtcclxuICAgIH0sXHJcblxyXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XHJcblxyXG4gICAgICBpZiAoZSkgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHJcbiAgICAgIHRoaXMuJGJ1dHRvbi50cmlnZ2VyKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScpO1xyXG4gICAgfSxcclxuXHJcbiAgICBrZXlkb3duOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxyXG4gICAgICAgICAgaXNUb2dnbGUgPSAkdGhpcy5oYXNDbGFzcygnZHJvcGRvd24tdG9nZ2xlJyksXHJcbiAgICAgICAgICAkcGFyZW50ID0gaXNUb2dnbGUgPyAkdGhpcy5jbG9zZXN0KCcuZHJvcGRvd24nKSA6ICR0aGlzLmNsb3Nlc3QoU2VsZWN0b3IuTUVOVSksXHJcbiAgICAgICAgICB0aGF0ID0gJHBhcmVudC5kYXRhKCd0aGlzJyksXHJcbiAgICAgICAgICAkaXRlbXMgPSB0aGF0LmZpbmRMaXMoKSxcclxuICAgICAgICAgIGluZGV4LFxyXG4gICAgICAgICAgaXNBY3RpdmUsXHJcbiAgICAgICAgICBsaUFjdGl2ZSxcclxuICAgICAgICAgIGFjdGl2ZUxpLFxyXG4gICAgICAgICAgb2Zmc2V0LFxyXG4gICAgICAgICAgdXBkYXRlU2Nyb2xsID0gZmFsc2UsXHJcbiAgICAgICAgICBkb3duT25UYWIgPSBlLndoaWNoID09PSBrZXlDb2Rlcy5UQUIgJiYgIWlzVG9nZ2xlICYmICF0aGF0Lm9wdGlvbnMuc2VsZWN0T25UYWIsXHJcbiAgICAgICAgICBpc0Fycm93S2V5ID0gUkVHRVhQX0FSUk9XLnRlc3QoZS53aGljaCkgfHwgZG93bk9uVGFiLFxyXG4gICAgICAgICAgc2Nyb2xsVG9wID0gdGhhdC4kbWVudUlubmVyWzBdLnNjcm9sbFRvcCxcclxuICAgICAgICAgIGlzVmlydHVhbCA9IHRoYXQuaXNWaXJ0dWFsKCksXHJcbiAgICAgICAgICBwb3NpdGlvbjAgPSBpc1ZpcnR1YWwgPT09IHRydWUgPyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LnBvc2l0aW9uMCA6IDA7XHJcblxyXG4gICAgICAvLyBkbyBub3RoaW5nIGlmIGEgZnVuY3Rpb24ga2V5IGlzIHByZXNzZWRcclxuICAgICAgaWYgKGUud2hpY2ggPj0gMTEyICYmIGUud2hpY2ggPD0gMTIzKSByZXR1cm47XHJcblxyXG4gICAgICBpc0FjdGl2ZSA9IHRoYXQuJG5ld0VsZW1lbnQuaGFzQ2xhc3MoY2xhc3NOYW1lcy5TSE9XKTtcclxuXHJcbiAgICAgIGlmIChcclxuICAgICAgICAhaXNBY3RpdmUgJiZcclxuICAgICAgICAoXHJcbiAgICAgICAgICBpc0Fycm93S2V5IHx8XHJcbiAgICAgICAgICAoZS53aGljaCA+PSA0OCAmJiBlLndoaWNoIDw9IDU3KSB8fFxyXG4gICAgICAgICAgKGUud2hpY2ggPj0gOTYgJiYgZS53aGljaCA8PSAxMDUpIHx8XHJcbiAgICAgICAgICAoZS53aGljaCA+PSA2NSAmJiBlLndoaWNoIDw9IDkwKVxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgdGhhdC4kYnV0dG9uLnRyaWdnZXIoJ2NsaWNrLmJzLmRyb3Bkb3duLmRhdGEtYXBpJyk7XHJcblxyXG4gICAgICAgIGlmICh0aGF0Lm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG4gICAgICAgICAgdGhhdC4kc2VhcmNoYm94LnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZS53aGljaCA9PT0ga2V5Q29kZXMuRVNDQVBFICYmIGlzQWN0aXZlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRoYXQuJGJ1dHRvbi50cmlnZ2VyKCdjbGljay5icy5kcm9wZG93bi5kYXRhLWFwaScpLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChpc0Fycm93S2V5KSB7IC8vIGlmIHVwIG9yIGRvd25cclxuICAgICAgICBpZiAoISRpdGVtcy5sZW5ndGgpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGlBY3RpdmUgPSB0aGF0LnNlbGVjdHBpY2tlci5tYWluLmVsZW1lbnRzW3RoYXQuYWN0aXZlSW5kZXhdO1xyXG4gICAgICAgIGluZGV4ID0gbGlBY3RpdmUgPyBBcnJheS5wcm90b3R5cGUuaW5kZXhPZi5jYWxsKGxpQWN0aXZlLnBhcmVudEVsZW1lbnQuY2hpbGRyZW4sIGxpQWN0aXZlKSA6IC0xO1xyXG5cclxuICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICB0aGF0LmRlZm9jdXNJdGVtKGxpQWN0aXZlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlLndoaWNoID09PSBrZXlDb2Rlcy5BUlJPV19VUCkgeyAvLyB1cFxyXG4gICAgICAgICAgaWYgKGluZGV4ICE9PSAtMSkgaW5kZXgtLTtcclxuICAgICAgICAgIGlmIChpbmRleCArIHBvc2l0aW9uMCA8IDApIGluZGV4ICs9ICRpdGVtcy5sZW5ndGg7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodFtpbmRleCArIHBvc2l0aW9uMF0pIHtcclxuICAgICAgICAgICAgaW5kZXggPSB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodC5zbGljZSgwLCBpbmRleCArIHBvc2l0aW9uMCkubGFzdEluZGV4T2YodHJ1ZSkgLSBwb3NpdGlvbjA7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PT0gLTEpIGluZGV4ID0gJGl0ZW1zLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSBrZXlDb2Rlcy5BUlJPV19ET1dOIHx8IGRvd25PblRhYikgeyAvLyBkb3duXHJcbiAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgaWYgKGluZGV4ICsgcG9zaXRpb24wID49IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcuY2FuSGlnaGxpZ2h0Lmxlbmd0aCkgaW5kZXggPSB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmZpcnN0SGlnaGxpZ2h0SW5kZXg7XHJcblxyXG4gICAgICAgICAgaWYgKCF0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodFtpbmRleCArIHBvc2l0aW9uMF0pIHtcclxuICAgICAgICAgICAgaW5kZXggPSBpbmRleCArIDEgKyB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmNhbkhpZ2hsaWdodC5zbGljZShpbmRleCArIHBvc2l0aW9uMCArIDEpLmluZGV4T2YodHJ1ZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIHZhciBsaUFjdGl2ZUluZGV4ID0gcG9zaXRpb24wICsgaW5kZXg7XHJcblxyXG4gICAgICAgIGlmIChlLndoaWNoID09PSBrZXlDb2Rlcy5BUlJPV19VUCkgeyAvLyB1cFxyXG4gICAgICAgICAgLy8gc2Nyb2xsIHRvIGJvdHRvbSBhbmQgaGlnaGxpZ2h0IGxhc3Qgb3B0aW9uXHJcbiAgICAgICAgICBpZiAocG9zaXRpb24wID09PSAwICYmIGluZGV4ID09PSAkaXRlbXMubGVuZ3RoIC0gMSkge1xyXG4gICAgICAgICAgICB0aGF0LiRtZW51SW5uZXJbMF0uc2Nyb2xsVG9wID0gdGhhdC4kbWVudUlubmVyWzBdLnNjcm9sbEhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGxpQWN0aXZlSW5kZXggPSB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmVsZW1lbnRzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3RpdmVMaSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtsaUFjdGl2ZUluZGV4XTtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gYWN0aXZlTGkucG9zaXRpb24gLSBhY3RpdmVMaS5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICB1cGRhdGVTY3JvbGwgPSBvZmZzZXQgPCBzY3JvbGxUb3A7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChlLndoaWNoID09PSBrZXlDb2Rlcy5BUlJPV19ET1dOIHx8IGRvd25PblRhYikgeyAvLyBkb3duXHJcbiAgICAgICAgICAvLyBzY3JvbGwgdG8gdG9wIGFuZCBoaWdobGlnaHQgZmlyc3Qgb3B0aW9uXHJcbiAgICAgICAgICBpZiAoaW5kZXggPT09IHRoYXQuc2VsZWN0cGlja2VyLnZpZXcuZmlyc3RIaWdobGlnaHRJbmRleCkge1xyXG4gICAgICAgICAgICB0aGF0LiRtZW51SW5uZXJbMF0uc2Nyb2xsVG9wID0gMDtcclxuXHJcbiAgICAgICAgICAgIGxpQWN0aXZlSW5kZXggPSB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmZpcnN0SGlnaGxpZ2h0SW5kZXg7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBhY3RpdmVMaSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtsaUFjdGl2ZUluZGV4XTtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gYWN0aXZlTGkucG9zaXRpb24gLSB0aGF0LnNpemVJbmZvLm1lbnVJbm5lckhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIHVwZGF0ZVNjcm9sbCA9IG9mZnNldCA+IHNjcm9sbFRvcDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxpQWN0aXZlID0gdGhhdC5zZWxlY3RwaWNrZXIuY3VycmVudC5lbGVtZW50c1tsaUFjdGl2ZUluZGV4XTtcclxuXHJcbiAgICAgICAgdGhhdC5hY3RpdmVJbmRleCA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtsaUFjdGl2ZUluZGV4XS5pbmRleDtcclxuXHJcbiAgICAgICAgdGhhdC5mb2N1c0l0ZW0obGlBY3RpdmUpO1xyXG5cclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci52aWV3LmN1cnJlbnRBY3RpdmUgPSBsaUFjdGl2ZTtcclxuXHJcbiAgICAgICAgaWYgKHVwZGF0ZVNjcm9sbCkgdGhhdC4kbWVudUlubmVyWzBdLnNjcm9sbFRvcCA9IG9mZnNldDtcclxuXHJcbiAgICAgICAgaWYgKHRoYXQub3B0aW9ucy5saXZlU2VhcmNoKSB7XHJcbiAgICAgICAgICB0aGF0LiRzZWFyY2hib3gudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgJHRoaXMudHJpZ2dlcignZm9jdXMnKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAoXHJcbiAgICAgICAgKCEkdGhpcy5pcygnaW5wdXQnKSAmJiAhUkVHRVhQX1RBQl9PUl9FU0NBUEUudGVzdChlLndoaWNoKSkgfHxcclxuICAgICAgICAoZS53aGljaCA9PT0ga2V5Q29kZXMuU1BBQ0UgJiYgdGhhdC5zZWxlY3RwaWNrZXIua2V5ZG93bi5rZXlIaXN0b3J5KVxyXG4gICAgICApIHtcclxuICAgICAgICB2YXIgc2VhcmNoTWF0Y2gsXHJcbiAgICAgICAgICAgIG1hdGNoZXMgPSBbXSxcclxuICAgICAgICAgICAga2V5SGlzdG9yeTtcclxuXHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICB0aGF0LnNlbGVjdHBpY2tlci5rZXlkb3duLmtleUhpc3RvcnkgKz0ga2V5Q29kZU1hcFtlLndoaWNoXTtcclxuXHJcbiAgICAgICAgaWYgKHRoYXQuc2VsZWN0cGlja2VyLmtleWRvd24ucmVzZXRLZXlIaXN0b3J5LmNhbmNlbCkgY2xlYXJUaW1lb3V0KHRoYXQuc2VsZWN0cGlja2VyLmtleWRvd24ucmVzZXRLZXlIaXN0b3J5LmNhbmNlbCk7XHJcbiAgICAgICAgdGhhdC5zZWxlY3RwaWNrZXIua2V5ZG93bi5yZXNldEtleUhpc3RvcnkuY2FuY2VsID0gdGhhdC5zZWxlY3RwaWNrZXIua2V5ZG93bi5yZXNldEtleUhpc3Rvcnkuc3RhcnQoKTtcclxuXHJcbiAgICAgICAga2V5SGlzdG9yeSA9IHRoYXQuc2VsZWN0cGlja2VyLmtleWRvd24ua2V5SGlzdG9yeTtcclxuXHJcbiAgICAgICAgLy8gaWYgYWxsIGxldHRlcnMgYXJlIHRoZSBzYW1lLCBzZXQga2V5SGlzdG9yeSB0byBqdXN0IHRoZSBmaXJzdCBjaGFyYWN0ZXIgd2hlbiBzZWFyY2hpbmdcclxuICAgICAgICBpZiAoL14oLilcXDErJC8udGVzdChrZXlIaXN0b3J5KSkge1xyXG4gICAgICAgICAga2V5SGlzdG9yeSA9IGtleUhpc3RvcnkuY2hhckF0KDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluZCBtYXRjaGVzXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGF0LnNlbGVjdHBpY2tlci5jdXJyZW50LmRhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgIHZhciBsaSA9IHRoYXQuc2VsZWN0cGlja2VyLmN1cnJlbnQuZGF0YVtpXSxcclxuICAgICAgICAgICAgICBoYXNNYXRjaDtcclxuXHJcbiAgICAgICAgICBoYXNNYXRjaCA9IHN0cmluZ1NlYXJjaChsaSwga2V5SGlzdG9yeSwgJ3N0YXJ0c1dpdGgnLCB0cnVlKTtcclxuXHJcbiAgICAgICAgICBpZiAoaGFzTWF0Y2ggJiYgdGhhdC5zZWxlY3RwaWNrZXIudmlldy5jYW5IaWdobGlnaHRbaV0pIHtcclxuICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGxpLmluZGV4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgdmFyIG1hdGNoSW5kZXggPSAwO1xyXG5cclxuICAgICAgICAgICRpdGVtcy5yZW1vdmVDbGFzcygnYWN0aXZlJykuZmluZCgnYScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHJcbiAgICAgICAgICAvLyBlaXRoZXIgb25seSBvbmUga2V5IGhhcyBiZWVuIHByZXNzZWQgb3IgdGhleSBhcmUgYWxsIHRoZSBzYW1lIGtleVxyXG4gICAgICAgICAgaWYgKGtleUhpc3RvcnkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIG1hdGNoSW5kZXggPSBtYXRjaGVzLmluZGV4T2YodGhhdC5hY3RpdmVJbmRleCk7XHJcblxyXG4gICAgICAgICAgICBpZiAobWF0Y2hJbmRleCA9PT0gLTEgfHwgbWF0Y2hJbmRleCA9PT0gbWF0Y2hlcy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgbWF0Y2hJbmRleCA9IDA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgbWF0Y2hJbmRleCsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc2VhcmNoTWF0Y2ggPSBtYXRjaGVzW21hdGNoSW5kZXhdO1xyXG5cclxuICAgICAgICAgIGFjdGl2ZUxpID0gdGhhdC5zZWxlY3RwaWNrZXIubWFpbi5kYXRhW3NlYXJjaE1hdGNoXTtcclxuXHJcbiAgICAgICAgICBpZiAoc2Nyb2xsVG9wIC0gYWN0aXZlTGkucG9zaXRpb24gPiAwKSB7XHJcbiAgICAgICAgICAgIG9mZnNldCA9IGFjdGl2ZUxpLnBvc2l0aW9uIC0gYWN0aXZlTGkuaGVpZ2h0O1xyXG4gICAgICAgICAgICB1cGRhdGVTY3JvbGwgPSB0cnVlO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2Zmc2V0ID0gYWN0aXZlTGkucG9zaXRpb24gLSB0aGF0LnNpemVJbmZvLm1lbnVJbm5lckhlaWdodDtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIG9wdGlvbiBpcyBhbHJlYWR5IHZpc2libGUgYXQgdGhlIGN1cnJlbnQgc2Nyb2xsIHBvc2l0aW9uLCBqdXN0IGtlZXAgaXQgdGhlIHNhbWVcclxuICAgICAgICAgICAgdXBkYXRlU2Nyb2xsID0gYWN0aXZlTGkucG9zaXRpb24gPiBzY3JvbGxUb3AgKyB0aGF0LnNpemVJbmZvLm1lbnVJbm5lckhlaWdodDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICBsaUFjdGl2ZSA9IHRoYXQuc2VsZWN0cGlja2VyLm1haW4uZWxlbWVudHNbc2VhcmNoTWF0Y2hdO1xyXG5cclxuICAgICAgICAgIHRoYXQuYWN0aXZlSW5kZXggPSBtYXRjaGVzW21hdGNoSW5kZXhdO1xyXG5cclxuICAgICAgICAgIHRoYXQuZm9jdXNJdGVtKGxpQWN0aXZlKTtcclxuXHJcbiAgICAgICAgICBpZiAobGlBY3RpdmUpIGxpQWN0aXZlLmZpcnN0Q2hpbGQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgICBpZiAodXBkYXRlU2Nyb2xsKSB0aGF0LiRtZW51SW5uZXJbMF0uc2Nyb2xsVG9wID0gb2Zmc2V0O1xyXG5cclxuICAgICAgICAgICR0aGlzLnRyaWdnZXIoJ2ZvY3VzJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBTZWxlY3QgZm9jdXNlZCBvcHRpb24gaWYgXCJFbnRlclwiLCBcIlNwYWNlYmFyXCIgb3IgXCJUYWJcIiAod2hlbiBzZWxlY3RPblRhYiBpcyB0cnVlKSBhcmUgcHJlc3NlZCBpbnNpZGUgdGhlIG1lbnUuXHJcbiAgICAgIGlmIChcclxuICAgICAgICBpc0FjdGl2ZSAmJlxyXG4gICAgICAgIChcclxuICAgICAgICAgIChlLndoaWNoID09PSBrZXlDb2Rlcy5TUEFDRSAmJiAhdGhhdC5zZWxlY3RwaWNrZXIua2V5ZG93bi5rZXlIaXN0b3J5KSB8fFxyXG4gICAgICAgICAgZS53aGljaCA9PT0ga2V5Q29kZXMuRU5URVIgfHxcclxuICAgICAgICAgIChlLndoaWNoID09PSBrZXlDb2Rlcy5UQUIgJiYgdGhhdC5vcHRpb25zLnNlbGVjdE9uVGFiKVxyXG4gICAgICAgIClcclxuICAgICAgKSB7XHJcbiAgICAgICAgaWYgKGUud2hpY2ggIT09IGtleUNvZGVzLlNQQUNFKSBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGlmICghdGhhdC5vcHRpb25zLmxpdmVTZWFyY2ggfHwgZS53aGljaCAhPT0ga2V5Q29kZXMuU1BBQ0UpIHtcclxuICAgICAgICAgIHRoYXQuJG1lbnVJbm5lci5maW5kKCcuYWN0aXZlIGEnKS50cmlnZ2VyKCdjbGljaycsIHRydWUpOyAvLyByZXRhaW4gYWN0aXZlIGNsYXNzXHJcbiAgICAgICAgICAkdGhpcy50cmlnZ2VyKCdmb2N1cycpO1xyXG5cclxuICAgICAgICAgIGlmICghdGhhdC5vcHRpb25zLmxpdmVTZWFyY2gpIHtcclxuICAgICAgICAgICAgLy8gUHJldmVudCBzY3JlZW4gZnJvbSBzY3JvbGxpbmcgaWYgdGhlIHVzZXIgaGl0cyB0aGUgc3BhY2ViYXJcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBGaXhlcyBzcGFjZWJhciBzZWxlY3Rpb24gb2YgZHJvcGRvd24gaXRlbXMgaW4gRkYgJiBJRVxyXG4gICAgICAgICAgICAkKGRvY3VtZW50KS5kYXRhKCdzcGFjZVNlbGVjdCcsIHRydWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBtb2JpbGU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgLy8gZW5zdXJlIG1vYmlsZSBpcyBzZXQgdG8gdHJ1ZSBpZiBtb2JpbGUgZnVuY3Rpb24gaXMgY2FsbGVkIGFmdGVyIGluaXRcclxuICAgICAgdGhpcy5vcHRpb25zLm1vYmlsZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuJGVsZW1lbnRbMF0uY2xhc3NMaXN0LmFkZCgnbW9iaWxlLWRldmljZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZWZyZXNoOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIC8vIHVwZGF0ZSBvcHRpb25zIGlmIGRhdGEgYXR0cmlidXRlcyBoYXZlIGJlZW4gY2hhbmdlZFxyXG4gICAgICB2YXIgY29uZmlnID0gJC5leHRlbmQoe30sIHRoaXMub3B0aW9ucywgdGhpcy4kZWxlbWVudC5kYXRhKCkpO1xyXG4gICAgICB0aGlzLm9wdGlvbnMgPSBjb25maWc7XHJcblxyXG4gICAgICB0aGlzLmNoZWNrRGlzYWJsZWQoKTtcclxuICAgICAgdGhpcy5idWlsZERhdGEoKTtcclxuICAgICAgdGhpcy5zZXRTdHlsZSgpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgICB0aGlzLmJ1aWxkTGlzdCgpO1xyXG4gICAgICB0aGlzLnNldFdpZHRoKCk7XHJcblxyXG4gICAgICB0aGlzLnNldFNpemUodHJ1ZSk7XHJcblxyXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ3JlZnJlc2hlZCcgKyBFVkVOVF9LRVkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJG5ld0VsZW1lbnQuaGlkZSgpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzaG93OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoaXMuJG5ld0VsZW1lbnQuc2hvdygpO1xyXG4gICAgfSxcclxuXHJcbiAgICByZW1vdmU6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhpcy4kbmV3RWxlbWVudC5yZW1vdmUoKTtcclxuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmUoKTtcclxuICAgIH0sXHJcblxyXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGlzLiRuZXdFbGVtZW50LmJlZm9yZSh0aGlzLiRlbGVtZW50KS5yZW1vdmUoKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLiRic0NvbnRhaW5lcikge1xyXG4gICAgICAgIHRoaXMuJGJzQ29udGFpbmVyLnJlbW92ZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuJG1lbnUucmVtb3ZlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLnNlbGVjdHBpY2tlci52aWV3LnRpdGxlT3B0aW9uICYmIHRoaXMuc2VsZWN0cGlja2VyLnZpZXcudGl0bGVPcHRpb24ucGFyZW50Tm9kZSkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0cGlja2VyLnZpZXcudGl0bGVPcHRpb24ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnNlbGVjdHBpY2tlci52aWV3LnRpdGxlT3B0aW9uKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy4kZWxlbWVudFxyXG4gICAgICAgIC5vZmYoRVZFTlRfS0VZKVxyXG4gICAgICAgIC5yZW1vdmVEYXRhKCdzZWxlY3RwaWNrZXInKVxyXG4gICAgICAgIC5yZW1vdmVDbGFzcygnYnMtc2VsZWN0LWhpZGRlbiBzZWxlY3RwaWNrZXInKTtcclxuXHJcbiAgICAgICQod2luZG93KS5vZmYoRVZFTlRfS0VZICsgJy4nICsgdGhpcy5zZWxlY3RJZCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gU0VMRUNUUElDS0VSIFBMVUdJTiBERUZJTklUSU9OXHJcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgZnVuY3Rpb24gUGx1Z2luIChvcHRpb24pIHtcclxuICAgIC8vIGdldCB0aGUgYXJncyBvZiB0aGUgb3V0ZXIgZnVuY3Rpb24uLlxyXG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAvLyBUaGUgYXJndW1lbnRzIG9mIHRoZSBmdW5jdGlvbiBhcmUgZXhwbGljaXRseSByZS1kZWZpbmVkIGZyb20gdGhlIGFyZ3VtZW50IGxpc3QsIGJlY2F1c2UgdGhlIHNoaWZ0IGNhdXNlcyB0aGVtXHJcbiAgICAvLyB0byBnZXQgbG9zdC9jb3JydXB0ZWQgaW4gYW5kcm9pZCAyLjMgYW5kIElFOSAjNzE1ICM3NzVcclxuICAgIHZhciBfb3B0aW9uID0gb3B0aW9uO1xyXG5cclxuICAgIFtdLnNoaWZ0LmFwcGx5KGFyZ3MpO1xyXG5cclxuICAgIC8vIGlmIHRoZSB2ZXJzaW9uIHdhcyBub3Qgc2V0IHN1Y2Nlc3NmdWxseVxyXG4gICAgaWYgKCF2ZXJzaW9uLnN1Y2Nlc3MpIHtcclxuICAgICAgLy8gdHJ5IHRvIHJldHJlaXZlIGl0IGFnYWluXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgdmVyc2lvbi5mdWxsID0gKCQuZm4uZHJvcGRvd24uQ29uc3RydWN0b3IuVkVSU0lPTiB8fCAnJykuc3BsaXQoJyAnKVswXS5zcGxpdCgnLicpO1xyXG4gICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAvLyBmYWxsIGJhY2sgdG8gdXNlIEJvb3RzdHJhcFZlcnNpb24gaWYgc2V0XHJcbiAgICAgICAgaWYgKFNlbGVjdHBpY2tlci5Cb290c3RyYXBWZXJzaW9uKSB7XHJcbiAgICAgICAgICB2ZXJzaW9uLmZ1bGwgPSBTZWxlY3RwaWNrZXIuQm9vdHN0cmFwVmVyc2lvbi5zcGxpdCgnICcpWzBdLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZlcnNpb24uZnVsbCA9IFt2ZXJzaW9uLm1ham9yLCAnMCcsICcwJ107XHJcblxyXG4gICAgICAgICAgY29uc29sZS53YXJuKFxyXG4gICAgICAgICAgICAnVGhlcmUgd2FzIGFuIGlzc3VlIHJldHJpZXZpbmcgQm9vdHN0cmFwXFwncyB2ZXJzaW9uLiAnICtcclxuICAgICAgICAgICAgJ0Vuc3VyZSBCb290c3RyYXAgaXMgYmVpbmcgbG9hZGVkIGJlZm9yZSBib290c3RyYXAtc2VsZWN0IGFuZCB0aGVyZSBpcyBubyBuYW1lc3BhY2UgY29sbGlzaW9uLiAnICtcclxuICAgICAgICAgICAgJ0lmIGxvYWRpbmcgQm9vdHN0cmFwIGFzeW5jaHJvbm91c2x5LCB0aGUgdmVyc2lvbiBtYXkgbmVlZCB0byBiZSBtYW51YWxseSBzcGVjaWZpZWQgdmlhICQuZm4uc2VsZWN0cGlja2VyLkNvbnN0cnVjdG9yLkJvb3RzdHJhcFZlcnNpb24uJyxcclxuICAgICAgICAgICAgZXJyXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdmVyc2lvbi5tYWpvciA9IHZlcnNpb24uZnVsbFswXTtcclxuICAgICAgdmVyc2lvbi5zdWNjZXNzID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmVyc2lvbi5tYWpvciA9PT0gJzQnKSB7XHJcbiAgICAgIC8vIHNvbWUgZGVmYXVsdHMgbmVlZCB0byBiZSBjaGFuZ2VkIGlmIHVzaW5nIEJvb3RzdHJhcCA0XHJcbiAgICAgIC8vIGNoZWNrIHRvIHNlZSBpZiB0aGV5IGhhdmUgYWxyZWFkeSBiZWVuIG1hbnVhbGx5IGNoYW5nZWQgYmVmb3JlIGZvcmNpbmcgdGhlbSB0byB1cGRhdGVcclxuICAgICAgdmFyIHRvVXBkYXRlID0gW107XHJcblxyXG4gICAgICBpZiAoU2VsZWN0cGlja2VyLkRFRkFVTFRTLnN0eWxlID09PSBjbGFzc05hbWVzLkJVVFRPTkNMQVNTKSB0b1VwZGF0ZS5wdXNoKHsgbmFtZTogJ3N0eWxlJywgY2xhc3NOYW1lOiAnQlVUVE9OQ0xBU1MnIH0pO1xyXG4gICAgICBpZiAoU2VsZWN0cGlja2VyLkRFRkFVTFRTLmljb25CYXNlID09PSBjbGFzc05hbWVzLklDT05CQVNFKSB0b1VwZGF0ZS5wdXNoKHsgbmFtZTogJ2ljb25CYXNlJywgY2xhc3NOYW1lOiAnSUNPTkJBU0UnIH0pO1xyXG4gICAgICBpZiAoU2VsZWN0cGlja2VyLkRFRkFVTFRTLnRpY2tJY29uID09PSBjbGFzc05hbWVzLlRJQ0tJQ09OKSB0b1VwZGF0ZS5wdXNoKHsgbmFtZTogJ3RpY2tJY29uJywgY2xhc3NOYW1lOiAnVElDS0lDT04nIH0pO1xyXG5cclxuICAgICAgY2xhc3NOYW1lcy5ESVZJREVSID0gJ2Ryb3Bkb3duLWRpdmlkZXInO1xyXG4gICAgICBjbGFzc05hbWVzLlNIT1cgPSAnc2hvdyc7XHJcbiAgICAgIGNsYXNzTmFtZXMuQlVUVE9OQ0xBU1MgPSAnYnRuLWxpZ2h0JztcclxuICAgICAgY2xhc3NOYW1lcy5QT1BPVkVSSEVBREVSID0gJ3BvcG92ZXItaGVhZGVyJztcclxuICAgICAgY2xhc3NOYW1lcy5JQ09OQkFTRSA9ICcnO1xyXG4gICAgICBjbGFzc05hbWVzLlRJQ0tJQ09OID0gJ2JzLW9rLWRlZmF1bHQnO1xyXG5cclxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0b1VwZGF0ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBvcHRpb24gPSB0b1VwZGF0ZVtpXTtcclxuICAgICAgICBTZWxlY3RwaWNrZXIuREVGQVVMVFNbb3B0aW9uLm5hbWVdID0gY2xhc3NOYW1lc1tvcHRpb24uY2xhc3NOYW1lXTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhciB2YWx1ZTtcclxuICAgIHZhciBjaGFpbiA9IHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7XHJcbiAgICAgIGlmICgkdGhpcy5pcygnc2VsZWN0JykpIHtcclxuICAgICAgICB2YXIgZGF0YSA9ICR0aGlzLmRhdGEoJ3NlbGVjdHBpY2tlcicpLFxyXG4gICAgICAgICAgICBvcHRpb25zID0gdHlwZW9mIF9vcHRpb24gPT0gJ29iamVjdCcgJiYgX29wdGlvbjtcclxuXHJcbiAgICAgICAgaWYgKCFkYXRhKSB7XHJcbiAgICAgICAgICB2YXIgZGF0YUF0dHJpYnV0ZXMgPSAkdGhpcy5kYXRhKCk7XHJcblxyXG4gICAgICAgICAgZm9yICh2YXIgZGF0YUF0dHIgaW4gZGF0YUF0dHJpYnV0ZXMpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChkYXRhQXR0cmlidXRlcywgZGF0YUF0dHIpICYmICQuaW5BcnJheShkYXRhQXR0ciwgRElTQUxMT1dFRF9BVFRSSUJVVEVTKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICBkZWxldGUgZGF0YUF0dHJpYnV0ZXNbZGF0YUF0dHJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdmFyIGNvbmZpZyA9ICQuZXh0ZW5kKHt9LCBTZWxlY3RwaWNrZXIuREVGQVVMVFMsICQuZm4uc2VsZWN0cGlja2VyLmRlZmF1bHRzIHx8IHt9LCBkYXRhQXR0cmlidXRlcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICBjb25maWcudGVtcGxhdGUgPSAkLmV4dGVuZCh7fSwgU2VsZWN0cGlja2VyLkRFRkFVTFRTLnRlbXBsYXRlLCAoJC5mbi5zZWxlY3RwaWNrZXIuZGVmYXVsdHMgPyAkLmZuLnNlbGVjdHBpY2tlci5kZWZhdWx0cy50ZW1wbGF0ZSA6IHt9KSwgZGF0YUF0dHJpYnV0ZXMudGVtcGxhdGUsIG9wdGlvbnMudGVtcGxhdGUpO1xyXG4gICAgICAgICAgJHRoaXMuZGF0YSgnc2VsZWN0cGlja2VyJywgKGRhdGEgPSBuZXcgU2VsZWN0cGlja2VyKHRoaXMsIGNvbmZpZykpKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbnMpIHtcclxuICAgICAgICAgIGZvciAodmFyIGkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIGkpKSB7XHJcbiAgICAgICAgICAgICAgZGF0YS5vcHRpb25zW2ldID0gb3B0aW9uc1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBfb3B0aW9uID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICBpZiAoZGF0YVtfb3B0aW9uXSBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YVtfb3B0aW9uXS5hcHBseShkYXRhLCBhcmdzKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gZGF0YS5vcHRpb25zW19vcHRpb25dO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW51c2VkQXNzaWdubWVudFxyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY2hhaW47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB2YXIgb2xkID0gJC5mbi5zZWxlY3RwaWNrZXI7XHJcbiAgJC5mbi5zZWxlY3RwaWNrZXIgPSBQbHVnaW47XHJcbiAgJC5mbi5zZWxlY3RwaWNrZXIuQ29uc3RydWN0b3IgPSBTZWxlY3RwaWNrZXI7XHJcblxyXG4gIC8vIFNFTEVDVFBJQ0tFUiBOTyBDT05GTElDVFxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICQuZm4uc2VsZWN0cGlja2VyLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAkLmZuLnNlbGVjdHBpY2tlciA9IG9sZDtcclxuICAgIHJldHVybiB0aGlzO1xyXG4gIH07XHJcblxyXG4gIC8vIGdldCBCb290c3RyYXAncyBrZXlkb3duIGV2ZW50IGhhbmRsZXIgZm9yIGVpdGhlciBCb290c3RyYXAgNCBvciBCb290c3RyYXAgM1xyXG4gIGZ1bmN0aW9uIGtleWRvd25IYW5kbGVyICgpIHtcclxuICAgIGlmICgkLmZuLmRyb3Bkb3duKSB7XHJcbiAgICAgIC8vIHdhaXQgdG8gZGVmaW5lIHVudGlsIGZ1bmN0aW9uIGlzIGNhbGxlZCBpbiBjYXNlIEJvb3RzdHJhcCBpc24ndCBsb2FkZWQgeWV0XHJcbiAgICAgIHZhciBib290c3RyYXBLZXlkb3duID0gJC5mbi5kcm9wZG93bi5Db25zdHJ1Y3Rvci5fZGF0YUFwaUtleWRvd25IYW5kbGVyIHx8ICQuZm4uZHJvcGRvd24uQ29uc3RydWN0b3IucHJvdG90eXBlLmtleWRvd247XHJcbiAgICAgIHJldHVybiBib290c3RyYXBLZXlkb3duLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAkKGRvY3VtZW50KVxyXG4gICAgLm9mZigna2V5ZG93bi5icy5kcm9wZG93bi5kYXRhLWFwaScpXHJcbiAgICAub24oJ2tleWRvd24uYnMuZHJvcGRvd24uZGF0YS1hcGknLCAnOm5vdCguYm9vdHN0cmFwLXNlbGVjdCkgPiBbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXScsIGtleWRvd25IYW5kbGVyKVxyXG4gICAgLm9uKCdrZXlkb3duLmJzLmRyb3Bkb3duLmRhdGEtYXBpJywgJzpub3QoLmJvb3RzdHJhcC1zZWxlY3QpID4gLmRyb3Bkb3duLW1lbnUnLCBrZXlkb3duSGFuZGxlcilcclxuICAgIC5vbigna2V5ZG93bicgKyBFVkVOVF9LRVksICcuYm9vdHN0cmFwLXNlbGVjdCBbZGF0YS10b2dnbGU9XCJkcm9wZG93blwiXSwgLmJvb3RzdHJhcC1zZWxlY3QgW3JvbGU9XCJsaXN0Ym94XCJdLCAuYm9vdHN0cmFwLXNlbGVjdCAuYnMtc2VhcmNoYm94IGlucHV0JywgU2VsZWN0cGlja2VyLnByb3RvdHlwZS5rZXlkb3duKVxyXG4gICAgLm9uKCdmb2N1c2luLm1vZGFsJywgJy5ib290c3RyYXAtc2VsZWN0IFtkYXRhLXRvZ2dsZT1cImRyb3Bkb3duXCJdLCAuYm9vdHN0cmFwLXNlbGVjdCBbcm9sZT1cImxpc3Rib3hcIl0sIC5ib290c3RyYXAtc2VsZWN0IC5icy1zZWFyY2hib3ggaW5wdXQnLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfSk7XHJcblxyXG4gIC8vIFNFTEVDVFBJQ0tFUiBEQVRBLUFQSVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICQod2luZG93KS5vbignbG9hZCcgKyBFVkVOVF9LRVkgKyAnLmRhdGEtYXBpJywgZnVuY3Rpb24gKCkge1xyXG4gICAgJCgnLnNlbGVjdHBpY2tlcicpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICB2YXIgJHNlbGVjdHBpY2tlciA9ICQodGhpcyk7XHJcbiAgICAgIFBsdWdpbi5jYWxsKCRzZWxlY3RwaWNrZXIsICRzZWxlY3RwaWNrZXIuZGF0YSgpKTtcclxuICAgIH0pXHJcbiAgfSk7XHJcbn0pKGpRdWVyeSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=