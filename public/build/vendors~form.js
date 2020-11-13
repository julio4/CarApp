(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~form"],{

/***/ "./node_modules/bootstrap-input-spinner/src/bootstrap-input-spinner.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/bootstrap-input-spinner/src/bootstrap-input-spinner.js ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Author and copyright: Stefan Haack (https://shaack.com)
 * Repository: https://github.com/shaack/bootstrap-input-spinner
 * License: MIT, see file 'LICENSE'
 */

;(function ($) {
    "use strict"

    var triggerKeyPressed = false
    var originalVal = $.fn.val
    $.fn.val = function (value) {
        if (arguments.length >= 1) {
            if (this[0] && this[0]["bootstrap-input-spinner"] && this[0].setValue) {
                var element = this[0]
                setTimeout(function () {
                    element.setValue(value)
                })
            }
        }
        return originalVal.apply(this, arguments)
    }

    $.fn.inputSpinner = function (methodOrProps) {

        if (methodOrProps === "destroy") {
            this.each(function () {
                this.destroyInputSpinner()
            })
            return this
        }

        var props = {
            decrementButton: "<strong>&minus;</strong>", // button text
            incrementButton: "<strong>&plus;</strong>", // ..
            groupClass: "", // css class of the resulting input-group
            buttonsClass: "btn-outline-secondary",
            buttonsWidth: "2.5rem",
            textAlign: "center", // alignment of the entered number
            autoDelay: 500, // ms threshold before auto value change
            autoInterval: 50, // speed of auto value change
            buttonsOnly: false, // set this `true` to disable the possibility to enter or paste the number via keyboard
            locale: navigator.language, // the locale, per default detected automatically from the browser
            template: // the template of the input
                '<div class="input-group ${groupClass}">' +
                '<div class="input-group-prepend"><button style="min-width: ${buttonsWidth}" class="btn btn-decrement ${buttonsClass} btn-minus" type="button">${decrementButton}</button></div>' +
                '<input type="text" inputmode="decimal" style="text-align: ${textAlign}" class="form-control form-control-text-input"/>' +
                '<div class="input-group-append"><button style="min-width: ${buttonsWidth}" class="btn btn-increment ${buttonsClass} btn-plus" type="button">${incrementButton}</button></div>' +
                '</div>'
        }
        for (var option in methodOrProps) {
            // noinspection JSUnfilteredForInLoop
            props[option] = methodOrProps[option]
        }

        var html = props.template
            .replace(/\${groupClass}/g, props.groupClass)
            .replace(/\${buttonsWidth}/g, props.buttonsWidth)
            .replace(/\${buttonsClass}/g, props.buttonsClass)
            .replace(/\${decrementButton}/g, props.decrementButton)
            .replace(/\${incrementButton}/g, props.incrementButton)
            .replace(/\${textAlign}/g, props.textAlign)

        var locale = props.locale || "en-US"

        this.each(function () {

            var $original = $(this)
            $original[0]["bootstrap-input-spinner"] = true
            $original.hide()

            var autoDelayHandler = null
            var autoIntervalHandler = null

            var $inputGroup = $(html)
            var $buttonDecrement = $inputGroup.find(".btn-decrement")
            var $buttonIncrement = $inputGroup.find(".btn-increment")
            var $input = $inputGroup.find("input")

            // var base = null // base value for step calculations
            var min = null
            var max = null
            var step = null
            var decimals = null
            var digitGrouping = null
            var numberFormat = null

            updateAttributes()

            var value = parseFloat($original[0].value)
            var boostStepsCount = 0

            var prefix = $original.attr("data-prefix") || ""
            var suffix = $original.attr("data-suffix") || ""

            if (prefix) {
                var prefixElement = $('<span class="input-group-text">' + prefix + '</span>')
                $inputGroup.find(".input-group-prepend").append(prefixElement)
            }
            if (suffix) {
                var suffixElement = $('<span class="input-group-text">' + suffix + '</span>')
                $inputGroup.find(".input-group-append").prepend(suffixElement)
            }

            $original[0].setValue = function (newValue) {
                setValue(newValue)
            }
            $original[0].destroyInputSpinner = function () {
                destroy()
            }

            var observer = new MutationObserver(function () {
                updateAttributes()
                setValue(value, true)
            })
            observer.observe($original[0], {attributes: true})

            $original.after($inputGroup)

            setValue(value)

            $input.on("paste input change focusout", function (event) {
                var newValue = $input[0].value
                var focusOut = event.type === "focusout"
                newValue = parseLocaleNumber(newValue)
                setValue(newValue, focusOut)
                dispatchEvent($original, event.type)
            })

            onPointerDown($buttonDecrement[0], function () {
                stepHandling(-step)
            })
            onPointerDown($buttonIncrement[0], function () {
                stepHandling(step)
            })
            onPointerUp(document.body, function () {
                resetTimer()
            })

            function setValue(newValue, updateInput) {
                if (updateInput === undefined) {
                    updateInput = true
                }
                if (isNaN(newValue) || newValue === "") {
                    $original[0].value = ""
                    if (updateInput) {
                        $input[0].value = ""
                    }
                    value = NaN
                } else {
                    newValue = parseFloat(newValue)
                    newValue = Math.min(Math.max(newValue, min), max)
                    newValue = Math.round(newValue * Math.pow(10, decimals)) / Math.pow(10, decimals)
                    $original[0].value = newValue
                    if (updateInput) {
                        $input[0].value = numberFormat.format(newValue)
                    }
                    value = newValue
                }
            }

            function destroy() {
                $original.prop("required", $input.prop("required"))
                observer.disconnect()
                resetTimer()
                $input.off("paste input change focusout")
                $inputGroup.remove()
                $original.show()
            }

            function dispatchEvent($element, type) {
                if (type) {
                    setTimeout(function () {
                        var event
                        if (typeof (Event) === 'function') {
                            event = new Event(type, {bubbles: true})
                        } else { // IE
                            event = document.createEvent('Event')
                            event.initEvent(type, true, true)
                        }
                        $element[0].dispatchEvent(event)
                    })
                }
            }

            function stepHandling(step) {
                calcStep(step)
                resetTimer()
                autoDelayHandler = setTimeout(function () {
                    autoIntervalHandler = setInterval(function () {
                        calcStep(step)
                    }, props.autoInterval)
                }, props.autoDelay)
            }


            function calcStep(step) {
                if (isNaN(value)) {
                    value = 0
                }
                setValue(Math.round(value / step) * step + step)
                dispatchEvent($original, "input")
                dispatchEvent($original, "change")
            }

            function resetTimer() {
                clearTimeout(autoDelayHandler)
                clearTimeout(autoIntervalHandler)
            }

            function updateAttributes() {
                // copy properties from original to the new input
                if ($original.prop("required")) {
                    $input.prop("required", $original.prop("required"))
                    $original.removeAttr('required')
                }
                $input.prop("placeholder", $original.prop("placeholder"))
                $input.attr("inputmode", $original.attr("inputmode") || "decimal")
                var disabled = $original.prop("disabled")
                var readonly = $original.prop("readonly")
                $input.prop("disabled", disabled)
                $input.prop("readonly", readonly || props.buttonsOnly)
                $buttonIncrement.prop("disabled", disabled || readonly)
                $buttonDecrement.prop("disabled", disabled || readonly)
                if (disabled || readonly) {
                    resetTimer()
                }
                var originalClass = $original.prop("class")
                var groupClass = ""
                // sizing
                if (/form-control-sm/g.test(originalClass)) {
                    groupClass = "input-group-sm"
                } else if (/form-control-lg/g.test(originalClass)) {
                    groupClass = "input-group-lg"
                }
                var inputClass = originalClass.replace(/form-control(-(sm|lg))?/g, "")
                $inputGroup.prop("class", "input-group " + groupClass + " " + props.groupClass)
                $input.prop("class", "form-control " + inputClass)

                // update the main attributes
                min = isNaN($original.prop("min")) || $original.prop("min") === "" ? -Infinity : parseFloat($original.prop("min"))
                max = isNaN($original.prop("max")) || $original.prop("max") === "" ? Infinity : parseFloat($original.prop("max"))
                step = parseFloat($original.prop("step")) || 1
                var newDecimals = parseInt($original.attr("data-decimals")) || 0
                var newDigitGrouping = !($original.attr("data-digit-grouping") === "false")
                if (decimals !== newDecimals || digitGrouping !== newDigitGrouping) {
                    decimals = newDecimals
                    digitGrouping = newDigitGrouping
                    numberFormat = new Intl.NumberFormat(locale, {
                        minimumFractionDigits: decimals,
                        maximumFractionDigits: decimals,
                        useGrouping: digitGrouping
                    })
                }
                if ($original.attr("hidden")) {
                    $inputGroup.attr("hidden", $original.attr("hidden"))
                } else {
                    $inputGroup.removeAttr("hidden")
                }
            }

            function parseLocaleNumber(stringNumber) {
                var numberFormat = new Intl.NumberFormat(locale)
                var thousandSeparator = numberFormat.format(11111).replace(/1/g, '') || '.'
                var decimalSeparator = numberFormat.format(1.1).replace(/1/g, '')
                return parseFloat(stringNumber
                    .replace(new RegExp(' ', 'g'), '')
                    .replace(new RegExp('\\' + thousandSeparator, 'g'), '')
                    .replace(new RegExp('\\' + decimalSeparator), '.')
                )
            }
        })

        return this
    }

    function onPointerUp(element, callback) {
        element.addEventListener("mouseup", function (e) {
            callback(e)
        })
        element.addEventListener("touchend", function (e) {
            callback(e)
        })
        element.addEventListener("keyup", function (e) {
            if ((e.keyCode === 32 || e.keyCode === 13)) {
                triggerKeyPressed = false
                callback(e)
            }
        })
    }

    function onPointerDown(element, callback) {
        element.addEventListener("mousedown", function (e) {
            e.preventDefault()
            callback(e)
        })
        element.addEventListener("touchstart", function (e) {
            if (e.cancelable) {
                e.preventDefault()
            }
            callback(e)
        })
        element.addEventListener("keydown", function (e) {
            if ((e.keyCode === 32 || e.keyCode === 13) && !triggerKeyPressed) {
                triggerKeyPressed = true
                callback(e)
            }
        })
    }

}(jQuery))


/***/ }),

/***/ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js":
/*!************************************************************************!*\
  !*** ./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * bsCustomFileInput v1.3.4 (https://github.com/Johann-S/bs-custom-file-input)
 * Copyright 2018 - 2020 Johann-S <johann.servoire@gmail.com>
 * Licensed under MIT (https://github.com/Johann-S/bs-custom-file-input/blob/master/LICENSE)
 */
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  var Selector = {
    CUSTOMFILE: '.custom-file input[type="file"]',
    CUSTOMFILELABEL: '.custom-file-label',
    FORM: 'form',
    INPUT: 'input'
  };

  var textNodeType = 3;

  var getDefaultText = function getDefaultText(input) {
    var defaultText = '';
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      defaultText = label.textContent;
    }

    return defaultText;
  };

  var findFirstChildNode = function findFirstChildNode(element) {
    if (element.childNodes.length > 0) {
      var childNodes = [].slice.call(element.childNodes);

      for (var i = 0; i < childNodes.length; i++) {
        var node = childNodes[i];

        if (node.nodeType !== textNodeType) {
          return node;
        }
      }
    }

    return element;
  };

  var restoreDefaultText = function restoreDefaultText(input) {
    var defaultText = input.bsCustomFileInput.defaultText;
    var label = input.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      element.textContent = defaultText;
    }
  };

  var fileApi = !!window.File;
  var FAKE_PATH = 'fakepath';
  var FAKE_PATH_SEPARATOR = '\\';

  var getSelectedFiles = function getSelectedFiles(input) {
    if (input.hasAttribute('multiple') && fileApi) {
      return [].slice.call(input.files).map(function (file) {
        return file.name;
      }).join(', ');
    }

    if (input.value.indexOf(FAKE_PATH) !== -1) {
      var splittedValue = input.value.split(FAKE_PATH_SEPARATOR);
      return splittedValue[splittedValue.length - 1];
    }

    return input.value;
  };

  function handleInputChange() {
    var label = this.parentNode.querySelector(Selector.CUSTOMFILELABEL);

    if (label) {
      var element = findFirstChildNode(label);
      var inputValue = getSelectedFiles(this);

      if (inputValue.length) {
        element.textContent = inputValue;
      } else {
        restoreDefaultText(this);
      }
    }
  }

  function handleFormReset() {
    var customFileList = [].slice.call(this.querySelectorAll(Selector.INPUT)).filter(function (input) {
      return !!input.bsCustomFileInput;
    });

    for (var i = 0, len = customFileList.length; i < len; i++) {
      restoreDefaultText(customFileList[i]);
    }
  }

  var customProperty = 'bsCustomFileInput';
  var Event = {
    FORMRESET: 'reset',
    INPUTCHANGE: 'change'
  };
  var bsCustomFileInput = {
    init: function init(inputSelector, formSelector) {
      if (inputSelector === void 0) {
        inputSelector = Selector.CUSTOMFILE;
      }

      if (formSelector === void 0) {
        formSelector = Selector.FORM;
      }

      var customFileInputList = [].slice.call(document.querySelectorAll(inputSelector));
      var formList = [].slice.call(document.querySelectorAll(formSelector));

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        Object.defineProperty(input, customProperty, {
          value: {
            defaultText: getDefaultText(input)
          },
          writable: true
        });
        handleInputChange.call(input);
        input.addEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i = 0, _len = formList.length; _i < _len; _i++) {
        formList[_i].addEventListener(Event.FORMRESET, handleFormReset);

        Object.defineProperty(formList[_i], customProperty, {
          value: true,
          writable: true
        });
      }
    },
    destroy: function destroy() {
      var formList = [].slice.call(document.querySelectorAll(Selector.FORM)).filter(function (form) {
        return !!form.bsCustomFileInput;
      });
      var customFileInputList = [].slice.call(document.querySelectorAll(Selector.INPUT)).filter(function (input) {
        return !!input.bsCustomFileInput;
      });

      for (var i = 0, len = customFileInputList.length; i < len; i++) {
        var input = customFileInputList[i];
        restoreDefaultText(input);
        input[customProperty] = undefined;
        input.removeEventListener(Event.INPUTCHANGE, handleInputChange);
      }

      for (var _i2 = 0, _len2 = formList.length; _i2 < _len2; _i2++) {
        formList[_i2].removeEventListener(Event.FORMRESET, handleFormReset);

        formList[_i2][customProperty] = undefined;
      }
    }
  };

  return bsCustomFileInput;

})));
//# sourceMappingURL=bs-custom-file-input.js.map


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYm9vdHN0cmFwLWlucHV0LXNwaW5uZXIvc3JjL2Jvb3RzdHJhcC1pbnB1dC1zcGlubmVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9icy1jdXN0b20tZmlsZS1pbnB1dC9kaXN0L2JzLWN1c3RvbS1maWxlLWlucHV0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7O0FBRUE7QUFDQSw2Q0FBNkM7QUFDN0MsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxXQUFXO0FBQ3RELDhFQUE4RSxhQUFhLDZCQUE2QixhQUFhLDRCQUE0QixnQkFBZ0I7QUFDakwsNkVBQTZFLFVBQVU7QUFDdkYsNkVBQTZFLGFBQWEsNkJBQTZCLGFBQWEsMkJBQTJCLGdCQUFnQjtBQUMvSztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsV0FBVztBQUNwQyx5QkFBeUIsYUFBYTtBQUN0Qyx5QkFBeUIsYUFBYTtBQUN0Qyx5QkFBeUIsZ0JBQWdCO0FBQ3pDLHlCQUF5QixnQkFBZ0I7QUFDekMseUJBQXlCLFVBQVU7O0FBRW5DOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPOztBQUVQLHVEQUF1RCxTQUFTO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0RBQWdELGFBQWE7QUFDN0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQ0FBQztBQUNEIiwiZmlsZSI6InZlbmRvcnN+Zm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQXV0aG9yIGFuZCBjb3B5cmlnaHQ6IFN0ZWZhbiBIYWFjayAoaHR0cHM6Ly9zaGFhY2suY29tKVxuICogUmVwb3NpdG9yeTogaHR0cHM6Ly9naXRodWIuY29tL3NoYWFjay9ib290c3RyYXAtaW5wdXQtc3Bpbm5lclxuICogTGljZW5zZTogTUlULCBzZWUgZmlsZSAnTElDRU5TRSdcbiAqL1xuXG47KGZ1bmN0aW9uICgkKSB7XG4gICAgXCJ1c2Ugc3RyaWN0XCJcblxuICAgIHZhciB0cmlnZ2VyS2V5UHJlc3NlZCA9IGZhbHNlXG4gICAgdmFyIG9yaWdpbmFsVmFsID0gJC5mbi52YWxcbiAgICAkLmZuLnZhbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBpZiAodGhpc1swXSAmJiB0aGlzWzBdW1wiYm9vdHN0cmFwLWlucHV0LXNwaW5uZXJcIl0gJiYgdGhpc1swXS5zZXRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIHZhciBlbGVtZW50ID0gdGhpc1swXVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnNldFZhbHVlKHZhbHVlKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsVmFsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICB9XG5cbiAgICAkLmZuLmlucHV0U3Bpbm5lciA9IGZ1bmN0aW9uIChtZXRob2RPclByb3BzKSB7XG5cbiAgICAgICAgaWYgKG1ldGhvZE9yUHJvcHMgPT09IFwiZGVzdHJveVwiKSB7XG4gICAgICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVzdHJveUlucHV0U3Bpbm5lcigpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgcmV0dXJuIHRoaXNcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwcm9wcyA9IHtcbiAgICAgICAgICAgIGRlY3JlbWVudEJ1dHRvbjogXCI8c3Ryb25nPiZtaW51czs8L3N0cm9uZz5cIiwgLy8gYnV0dG9uIHRleHRcbiAgICAgICAgICAgIGluY3JlbWVudEJ1dHRvbjogXCI8c3Ryb25nPiZwbHVzOzwvc3Ryb25nPlwiLCAvLyAuLlxuICAgICAgICAgICAgZ3JvdXBDbGFzczogXCJcIiwgLy8gY3NzIGNsYXNzIG9mIHRoZSByZXN1bHRpbmcgaW5wdXQtZ3JvdXBcbiAgICAgICAgICAgIGJ1dHRvbnNDbGFzczogXCJidG4tb3V0bGluZS1zZWNvbmRhcnlcIixcbiAgICAgICAgICAgIGJ1dHRvbnNXaWR0aDogXCIyLjVyZW1cIixcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIiwgLy8gYWxpZ25tZW50IG9mIHRoZSBlbnRlcmVkIG51bWJlclxuICAgICAgICAgICAgYXV0b0RlbGF5OiA1MDAsIC8vIG1zIHRocmVzaG9sZCBiZWZvcmUgYXV0byB2YWx1ZSBjaGFuZ2VcbiAgICAgICAgICAgIGF1dG9JbnRlcnZhbDogNTAsIC8vIHNwZWVkIG9mIGF1dG8gdmFsdWUgY2hhbmdlXG4gICAgICAgICAgICBidXR0b25zT25seTogZmFsc2UsIC8vIHNldCB0aGlzIGB0cnVlYCB0byBkaXNhYmxlIHRoZSBwb3NzaWJpbGl0eSB0byBlbnRlciBvciBwYXN0ZSB0aGUgbnVtYmVyIHZpYSBrZXlib2FyZFxuICAgICAgICAgICAgbG9jYWxlOiBuYXZpZ2F0b3IubGFuZ3VhZ2UsIC8vIHRoZSBsb2NhbGUsIHBlciBkZWZhdWx0IGRldGVjdGVkIGF1dG9tYXRpY2FsbHkgZnJvbSB0aGUgYnJvd3NlclxuICAgICAgICAgICAgdGVtcGxhdGU6IC8vIHRoZSB0ZW1wbGF0ZSBvZiB0aGUgaW5wdXRcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwICR7Z3JvdXBDbGFzc31cIj4nICtcbiAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLXByZXBlbmRcIj48YnV0dG9uIHN0eWxlPVwibWluLXdpZHRoOiAke2J1dHRvbnNXaWR0aH1cIiBjbGFzcz1cImJ0biBidG4tZGVjcmVtZW50ICR7YnV0dG9uc0NsYXNzfSBidG4tbWludXNcIiB0eXBlPVwiYnV0dG9uXCI+JHtkZWNyZW1lbnRCdXR0b259PC9idXR0b24+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzxpbnB1dCB0eXBlPVwidGV4dFwiIGlucHV0bW9kZT1cImRlY2ltYWxcIiBzdHlsZT1cInRleHQtYWxpZ246ICR7dGV4dEFsaWdufVwiIGNsYXNzPVwiZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC10ZXh0LWlucHV0XCIvPicgK1xuICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+PGJ1dHRvbiBzdHlsZT1cIm1pbi13aWR0aDogJHtidXR0b25zV2lkdGh9XCIgY2xhc3M9XCJidG4gYnRuLWluY3JlbWVudCAke2J1dHRvbnNDbGFzc30gYnRuLXBsdXNcIiB0eXBlPVwiYnV0dG9uXCI+JHtpbmNyZW1lbnRCdXR0b259PC9idXR0b24+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgJzwvZGl2PidcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBvcHRpb24gaW4gbWV0aG9kT3JQcm9wcykge1xuICAgICAgICAgICAgLy8gbm9pbnNwZWN0aW9uIEpTVW5maWx0ZXJlZEZvckluTG9vcFxuICAgICAgICAgICAgcHJvcHNbb3B0aW9uXSA9IG1ldGhvZE9yUHJvcHNbb3B0aW9uXVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGh0bWwgPSBwcm9wcy50ZW1wbGF0ZVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcJHtncm91cENsYXNzfS9nLCBwcm9wcy5ncm91cENsYXNzKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcJHtidXR0b25zV2lkdGh9L2csIHByb3BzLmJ1dHRvbnNXaWR0aClcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCR7YnV0dG9uc0NsYXNzfS9nLCBwcm9wcy5idXR0b25zQ2xhc3MpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFwke2RlY3JlbWVudEJ1dHRvbn0vZywgcHJvcHMuZGVjcmVtZW50QnV0dG9uKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcJHtpbmNyZW1lbnRCdXR0b259L2csIHByb3BzLmluY3JlbWVudEJ1dHRvbilcbiAgICAgICAgICAgIC5yZXBsYWNlKC9cXCR7dGV4dEFsaWdufS9nLCBwcm9wcy50ZXh0QWxpZ24pXG5cbiAgICAgICAgdmFyIGxvY2FsZSA9IHByb3BzLmxvY2FsZSB8fCBcImVuLVVTXCJcblxuICAgICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICB2YXIgJG9yaWdpbmFsID0gJCh0aGlzKVxuICAgICAgICAgICAgJG9yaWdpbmFsWzBdW1wiYm9vdHN0cmFwLWlucHV0LXNwaW5uZXJcIl0gPSB0cnVlXG4gICAgICAgICAgICAkb3JpZ2luYWwuaGlkZSgpXG5cbiAgICAgICAgICAgIHZhciBhdXRvRGVsYXlIYW5kbGVyID0gbnVsbFxuICAgICAgICAgICAgdmFyIGF1dG9JbnRlcnZhbEhhbmRsZXIgPSBudWxsXG5cbiAgICAgICAgICAgIHZhciAkaW5wdXRHcm91cCA9ICQoaHRtbClcbiAgICAgICAgICAgIHZhciAkYnV0dG9uRGVjcmVtZW50ID0gJGlucHV0R3JvdXAuZmluZChcIi5idG4tZGVjcmVtZW50XCIpXG4gICAgICAgICAgICB2YXIgJGJ1dHRvbkluY3JlbWVudCA9ICRpbnB1dEdyb3VwLmZpbmQoXCIuYnRuLWluY3JlbWVudFwiKVxuICAgICAgICAgICAgdmFyICRpbnB1dCA9ICRpbnB1dEdyb3VwLmZpbmQoXCJpbnB1dFwiKVxuXG4gICAgICAgICAgICAvLyB2YXIgYmFzZSA9IG51bGwgLy8gYmFzZSB2YWx1ZSBmb3Igc3RlcCBjYWxjdWxhdGlvbnNcbiAgICAgICAgICAgIHZhciBtaW4gPSBudWxsXG4gICAgICAgICAgICB2YXIgbWF4ID0gbnVsbFxuICAgICAgICAgICAgdmFyIHN0ZXAgPSBudWxsXG4gICAgICAgICAgICB2YXIgZGVjaW1hbHMgPSBudWxsXG4gICAgICAgICAgICB2YXIgZGlnaXRHcm91cGluZyA9IG51bGxcbiAgICAgICAgICAgIHZhciBudW1iZXJGb3JtYXQgPSBudWxsXG5cbiAgICAgICAgICAgIHVwZGF0ZUF0dHJpYnV0ZXMoKVxuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUZsb2F0KCRvcmlnaW5hbFswXS52YWx1ZSlcbiAgICAgICAgICAgIHZhciBib29zdFN0ZXBzQ291bnQgPSAwXG5cbiAgICAgICAgICAgIHZhciBwcmVmaXggPSAkb3JpZ2luYWwuYXR0cihcImRhdGEtcHJlZml4XCIpIHx8IFwiXCJcbiAgICAgICAgICAgIHZhciBzdWZmaXggPSAkb3JpZ2luYWwuYXR0cihcImRhdGEtc3VmZml4XCIpIHx8IFwiXCJcblxuICAgICAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgICAgIHZhciBwcmVmaXhFbGVtZW50ID0gJCgnPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+JyArIHByZWZpeCArICc8L3NwYW4+JylcbiAgICAgICAgICAgICAgICAkaW5wdXRHcm91cC5maW5kKFwiLmlucHV0LWdyb3VwLXByZXBlbmRcIikuYXBwZW5kKHByZWZpeEVsZW1lbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3VmZml4KSB7XG4gICAgICAgICAgICAgICAgdmFyIHN1ZmZpeEVsZW1lbnQgPSAkKCc8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj4nICsgc3VmZml4ICsgJzwvc3Bhbj4nKVxuICAgICAgICAgICAgICAgICRpbnB1dEdyb3VwLmZpbmQoXCIuaW5wdXQtZ3JvdXAtYXBwZW5kXCIpLnByZXBlbmQoc3VmZml4RWxlbWVudClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJG9yaWdpbmFsWzBdLnNldFZhbHVlID0gZnVuY3Rpb24gKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgc2V0VmFsdWUobmV3VmFsdWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkb3JpZ2luYWxbMF0uZGVzdHJveUlucHV0U3Bpbm5lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZXN0cm95KClcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUF0dHJpYnV0ZXMoKVxuICAgICAgICAgICAgICAgIHNldFZhbHVlKHZhbHVlLCB0cnVlKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoJG9yaWdpbmFsWzBdLCB7YXR0cmlidXRlczogdHJ1ZX0pXG5cbiAgICAgICAgICAgICRvcmlnaW5hbC5hZnRlcigkaW5wdXRHcm91cClcblxuICAgICAgICAgICAgc2V0VmFsdWUodmFsdWUpXG5cbiAgICAgICAgICAgICRpbnB1dC5vbihcInBhc3RlIGlucHV0IGNoYW5nZSBmb2N1c291dFwiLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3VmFsdWUgPSAkaW5wdXRbMF0udmFsdWVcbiAgICAgICAgICAgICAgICB2YXIgZm9jdXNPdXQgPSBldmVudC50eXBlID09PSBcImZvY3Vzb3V0XCJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IHBhcnNlTG9jYWxlTnVtYmVyKG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgIHNldFZhbHVlKG5ld1ZhbHVlLCBmb2N1c091dClcbiAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KCRvcmlnaW5hbCwgZXZlbnQudHlwZSlcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIG9uUG9pbnRlckRvd24oJGJ1dHRvbkRlY3JlbWVudFswXSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHN0ZXBIYW5kbGluZygtc3RlcClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBvblBvaW50ZXJEb3duKCRidXR0b25JbmNyZW1lbnRbMF0sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBzdGVwSGFuZGxpbmcoc3RlcClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBvblBvaW50ZXJVcChkb2N1bWVudC5ib2R5LCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVzZXRUaW1lcigpXG4gICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBzZXRWYWx1ZShuZXdWYWx1ZSwgdXBkYXRlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodXBkYXRlSW5wdXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVJbnB1dCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGlzTmFOKG5ld1ZhbHVlKSB8fCBuZXdWYWx1ZSA9PT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICAkb3JpZ2luYWxbMF0udmFsdWUgPSBcIlwiXG4gICAgICAgICAgICAgICAgICAgIGlmICh1cGRhdGVJbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJGlucHV0WzBdLnZhbHVlID0gXCJcIlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gTmFOXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3VmFsdWUgPSBwYXJzZUZsb2F0KG5ld1ZhbHVlKVxuICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9IE1hdGgubWluKE1hdGgubWF4KG5ld1ZhbHVlLCBtaW4pLCBtYXgpXG4gICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlID0gTWF0aC5yb3VuZChuZXdWYWx1ZSAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpIC8gTWF0aC5wb3coMTAsIGRlY2ltYWxzKVxuICAgICAgICAgICAgICAgICAgICAkb3JpZ2luYWxbMF0udmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgICAgICBpZiAodXBkYXRlSW5wdXQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRpbnB1dFswXS52YWx1ZSA9IG51bWJlckZvcm1hdC5mb3JtYXQobmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBuZXdWYWx1ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgICAgICAgICAgICAkb3JpZ2luYWwucHJvcChcInJlcXVpcmVkXCIsICRpbnB1dC5wcm9wKFwicmVxdWlyZWRcIikpXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpXG4gICAgICAgICAgICAgICAgcmVzZXRUaW1lcigpXG4gICAgICAgICAgICAgICAgJGlucHV0Lm9mZihcInBhc3RlIGlucHV0IGNoYW5nZSBmb2N1c291dFwiKVxuICAgICAgICAgICAgICAgICRpbnB1dEdyb3VwLnJlbW92ZSgpXG4gICAgICAgICAgICAgICAgJG9yaWdpbmFsLnNob3coKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KCRlbGVtZW50LCB0eXBlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgKEV2ZW50KSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50ID0gbmV3IEV2ZW50KHR5cGUsIHtidWJibGVzOiB0cnVlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7IC8vIElFXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnRXZlbnQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LmluaXRFdmVudCh0eXBlLCB0cnVlLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgJGVsZW1lbnRbMF0uZGlzcGF0Y2hFdmVudChldmVudClcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0ZXBIYW5kbGluZyhzdGVwKSB7XG4gICAgICAgICAgICAgICAgY2FsY1N0ZXAoc3RlcClcbiAgICAgICAgICAgICAgICByZXNldFRpbWVyKClcbiAgICAgICAgICAgICAgICBhdXRvRGVsYXlIYW5kbGVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dG9JbnRlcnZhbEhhbmRsZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxjU3RlcChzdGVwKVxuICAgICAgICAgICAgICAgICAgICB9LCBwcm9wcy5hdXRvSW50ZXJ2YWwpXG4gICAgICAgICAgICAgICAgfSwgcHJvcHMuYXV0b0RlbGF5KVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGNhbGNTdGVwKHN0ZXApIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNOYU4odmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRWYWx1ZShNYXRoLnJvdW5kKHZhbHVlIC8gc3RlcCkgKiBzdGVwICsgc3RlcClcbiAgICAgICAgICAgICAgICBkaXNwYXRjaEV2ZW50KCRvcmlnaW5hbCwgXCJpbnB1dFwiKVxuICAgICAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoJG9yaWdpbmFsLCBcImNoYW5nZVwiKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiByZXNldFRpbWVyKCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChhdXRvRGVsYXlIYW5kbGVyKVxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChhdXRvSW50ZXJ2YWxIYW5kbGVyKVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVBdHRyaWJ1dGVzKCkge1xuICAgICAgICAgICAgICAgIC8vIGNvcHkgcHJvcGVydGllcyBmcm9tIG9yaWdpbmFsIHRvIHRoZSBuZXcgaW5wdXRcbiAgICAgICAgICAgICAgICBpZiAoJG9yaWdpbmFsLnByb3AoXCJyZXF1aXJlZFwiKSkge1xuICAgICAgICAgICAgICAgICAgICAkaW5wdXQucHJvcChcInJlcXVpcmVkXCIsICRvcmlnaW5hbC5wcm9wKFwicmVxdWlyZWRcIikpXG4gICAgICAgICAgICAgICAgICAgICRvcmlnaW5hbC5yZW1vdmVBdHRyKCdyZXF1aXJlZCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICRpbnB1dC5wcm9wKFwicGxhY2Vob2xkZXJcIiwgJG9yaWdpbmFsLnByb3AoXCJwbGFjZWhvbGRlclwiKSlcbiAgICAgICAgICAgICAgICAkaW5wdXQuYXR0cihcImlucHV0bW9kZVwiLCAkb3JpZ2luYWwuYXR0cihcImlucHV0bW9kZVwiKSB8fCBcImRlY2ltYWxcIilcbiAgICAgICAgICAgICAgICB2YXIgZGlzYWJsZWQgPSAkb3JpZ2luYWwucHJvcChcImRpc2FibGVkXCIpXG4gICAgICAgICAgICAgICAgdmFyIHJlYWRvbmx5ID0gJG9yaWdpbmFsLnByb3AoXCJyZWFkb25seVwiKVxuICAgICAgICAgICAgICAgICRpbnB1dC5wcm9wKFwiZGlzYWJsZWRcIiwgZGlzYWJsZWQpXG4gICAgICAgICAgICAgICAgJGlucHV0LnByb3AoXCJyZWFkb25seVwiLCByZWFkb25seSB8fCBwcm9wcy5idXR0b25zT25seSlcbiAgICAgICAgICAgICAgICAkYnV0dG9uSW5jcmVtZW50LnByb3AoXCJkaXNhYmxlZFwiLCBkaXNhYmxlZCB8fCByZWFkb25seSlcbiAgICAgICAgICAgICAgICAkYnV0dG9uRGVjcmVtZW50LnByb3AoXCJkaXNhYmxlZFwiLCBkaXNhYmxlZCB8fCByZWFkb25seSlcbiAgICAgICAgICAgICAgICBpZiAoZGlzYWJsZWQgfHwgcmVhZG9ubHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRUaW1lcigpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbENsYXNzID0gJG9yaWdpbmFsLnByb3AoXCJjbGFzc1wiKVxuICAgICAgICAgICAgICAgIHZhciBncm91cENsYXNzID0gXCJcIlxuICAgICAgICAgICAgICAgIC8vIHNpemluZ1xuICAgICAgICAgICAgICAgIGlmICgvZm9ybS1jb250cm9sLXNtL2cudGVzdChvcmlnaW5hbENsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICBncm91cENsYXNzID0gXCJpbnB1dC1ncm91cC1zbVwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgvZm9ybS1jb250cm9sLWxnL2cudGVzdChvcmlnaW5hbENsYXNzKSkge1xuICAgICAgICAgICAgICAgICAgICBncm91cENsYXNzID0gXCJpbnB1dC1ncm91cC1sZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBpbnB1dENsYXNzID0gb3JpZ2luYWxDbGFzcy5yZXBsYWNlKC9mb3JtLWNvbnRyb2woLShzbXxsZykpPy9nLCBcIlwiKVxuICAgICAgICAgICAgICAgICRpbnB1dEdyb3VwLnByb3AoXCJjbGFzc1wiLCBcImlucHV0LWdyb3VwIFwiICsgZ3JvdXBDbGFzcyArIFwiIFwiICsgcHJvcHMuZ3JvdXBDbGFzcylcbiAgICAgICAgICAgICAgICAkaW5wdXQucHJvcChcImNsYXNzXCIsIFwiZm9ybS1jb250cm9sIFwiICsgaW5wdXRDbGFzcylcblxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgbWFpbiBhdHRyaWJ1dGVzXG4gICAgICAgICAgICAgICAgbWluID0gaXNOYU4oJG9yaWdpbmFsLnByb3AoXCJtaW5cIikpIHx8ICRvcmlnaW5hbC5wcm9wKFwibWluXCIpID09PSBcIlwiID8gLUluZmluaXR5IDogcGFyc2VGbG9hdCgkb3JpZ2luYWwucHJvcChcIm1pblwiKSlcbiAgICAgICAgICAgICAgICBtYXggPSBpc05hTigkb3JpZ2luYWwucHJvcChcIm1heFwiKSkgfHwgJG9yaWdpbmFsLnByb3AoXCJtYXhcIikgPT09IFwiXCIgPyBJbmZpbml0eSA6IHBhcnNlRmxvYXQoJG9yaWdpbmFsLnByb3AoXCJtYXhcIikpXG4gICAgICAgICAgICAgICAgc3RlcCA9IHBhcnNlRmxvYXQoJG9yaWdpbmFsLnByb3AoXCJzdGVwXCIpKSB8fCAxXG4gICAgICAgICAgICAgICAgdmFyIG5ld0RlY2ltYWxzID0gcGFyc2VJbnQoJG9yaWdpbmFsLmF0dHIoXCJkYXRhLWRlY2ltYWxzXCIpKSB8fCAwXG4gICAgICAgICAgICAgICAgdmFyIG5ld0RpZ2l0R3JvdXBpbmcgPSAhKCRvcmlnaW5hbC5hdHRyKFwiZGF0YS1kaWdpdC1ncm91cGluZ1wiKSA9PT0gXCJmYWxzZVwiKVxuICAgICAgICAgICAgICAgIGlmIChkZWNpbWFscyAhPT0gbmV3RGVjaW1hbHMgfHwgZGlnaXRHcm91cGluZyAhPT0gbmV3RGlnaXRHcm91cGluZykge1xuICAgICAgICAgICAgICAgICAgICBkZWNpbWFscyA9IG5ld0RlY2ltYWxzXG4gICAgICAgICAgICAgICAgICAgIGRpZ2l0R3JvdXBpbmcgPSBuZXdEaWdpdEdyb3VwaW5nXG4gICAgICAgICAgICAgICAgICAgIG51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbmltdW1GcmFjdGlvbkRpZ2l0czogZGVjaW1hbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXhpbXVtRnJhY3Rpb25EaWdpdHM6IGRlY2ltYWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXNlR3JvdXBpbmc6IGRpZ2l0R3JvdXBpbmdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCRvcmlnaW5hbC5hdHRyKFwiaGlkZGVuXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICRpbnB1dEdyb3VwLmF0dHIoXCJoaWRkZW5cIiwgJG9yaWdpbmFsLmF0dHIoXCJoaWRkZW5cIikpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJGlucHV0R3JvdXAucmVtb3ZlQXR0cihcImhpZGRlblwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gcGFyc2VMb2NhbGVOdW1iZXIoc3RyaW5nTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdChsb2NhbGUpXG4gICAgICAgICAgICAgICAgdmFyIHRob3VzYW5kU2VwYXJhdG9yID0gbnVtYmVyRm9ybWF0LmZvcm1hdCgxMTExMSkucmVwbGFjZSgvMS9nLCAnJykgfHwgJy4nXG4gICAgICAgICAgICAgICAgdmFyIGRlY2ltYWxTZXBhcmF0b3IgPSBudW1iZXJGb3JtYXQuZm9ybWF0KDEuMSkucmVwbGFjZSgvMS9nLCAnJylcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdChzdHJpbmdOdW1iZXJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnICcsICdnJyksICcnKVxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZShuZXcgUmVnRXhwKCdcXFxcJyArIHRob3VzYW5kU2VwYXJhdG9yLCAnZycpLCAnJylcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UobmV3IFJlZ0V4cCgnXFxcXCcgKyBkZWNpbWFsU2VwYXJhdG9yKSwgJy4nKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpc1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIG9uUG9pbnRlclVwKGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKGUpXG4gICAgICAgIH0pXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlKVxuICAgICAgICB9KVxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT09IDMyIHx8IGUua2V5Q29kZSA9PT0gMTMpKSB7XG4gICAgICAgICAgICAgICAgdHJpZ2dlcktleVByZXNzZWQgPSBmYWxzZVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gb25Qb2ludGVyRG93bihlbGVtZW50LCBjYWxsYmFjaykge1xuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgY2FsbGJhY2soZSlcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FsbGJhY2soZSlcbiAgICAgICAgfSlcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgaWYgKChlLmtleUNvZGUgPT09IDMyIHx8IGUua2V5Q29kZSA9PT0gMTMpICYmICF0cmlnZ2VyS2V5UHJlc3NlZCkge1xuICAgICAgICAgICAgICAgIHRyaWdnZXJLZXlQcmVzc2VkID0gdHJ1ZVxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGUpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuXG59KGpRdWVyeSkpXG4iLCIvKiFcbiAqIGJzQ3VzdG9tRmlsZUlucHV0IHYxLjMuNCAoaHR0cHM6Ly9naXRodWIuY29tL0pvaGFubi1TL2JzLWN1c3RvbS1maWxlLWlucHV0KVxuICogQ29weXJpZ2h0IDIwMTggLSAyMDIwIEpvaGFubi1TIDxqb2hhbm4uc2Vydm9pcmVAZ21haWwuY29tPlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vSm9oYW5uLVMvYnMtY3VzdG9tLWZpbGUtaW5wdXQvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcbiAgdHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuICB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuICAoZ2xvYmFsID0gZ2xvYmFsIHx8IHNlbGYsIGdsb2JhbC5ic0N1c3RvbUZpbGVJbnB1dCA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuICB2YXIgU2VsZWN0b3IgPSB7XG4gICAgQ1VTVE9NRklMRTogJy5jdXN0b20tZmlsZSBpbnB1dFt0eXBlPVwiZmlsZVwiXScsXG4gICAgQ1VTVE9NRklMRUxBQkVMOiAnLmN1c3RvbS1maWxlLWxhYmVsJyxcbiAgICBGT1JNOiAnZm9ybScsXG4gICAgSU5QVVQ6ICdpbnB1dCdcbiAgfTtcblxuICB2YXIgdGV4dE5vZGVUeXBlID0gMztcblxuICB2YXIgZ2V0RGVmYXVsdFRleHQgPSBmdW5jdGlvbiBnZXREZWZhdWx0VGV4dChpbnB1dCkge1xuICAgIHZhciBkZWZhdWx0VGV4dCA9ICcnO1xuICAgIHZhciBsYWJlbCA9IGlucHV0LnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5DVVNUT01GSUxFTEFCRUwpO1xuXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBkZWZhdWx0VGV4dCA9IGxhYmVsLnRleHRDb250ZW50O1xuICAgIH1cblxuICAgIHJldHVybiBkZWZhdWx0VGV4dDtcbiAgfTtcblxuICB2YXIgZmluZEZpcnN0Q2hpbGROb2RlID0gZnVuY3Rpb24gZmluZEZpcnN0Q2hpbGROb2RlKGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIHZhciBjaGlsZE5vZGVzID0gW10uc2xpY2UuY2FsbChlbGVtZW50LmNoaWxkTm9kZXMpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIG5vZGUgPSBjaGlsZE5vZGVzW2ldO1xuXG4gICAgICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSB0ZXh0Tm9kZVR5cGUpIHtcbiAgICAgICAgICByZXR1cm4gbm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBlbGVtZW50O1xuICB9O1xuXG4gIHZhciByZXN0b3JlRGVmYXVsdFRleHQgPSBmdW5jdGlvbiByZXN0b3JlRGVmYXVsdFRleHQoaW5wdXQpIHtcbiAgICB2YXIgZGVmYXVsdFRleHQgPSBpbnB1dC5ic0N1c3RvbUZpbGVJbnB1dC5kZWZhdWx0VGV4dDtcbiAgICB2YXIgbGFiZWwgPSBpbnB1dC5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoU2VsZWN0b3IuQ1VTVE9NRklMRUxBQkVMKTtcblxuICAgIGlmIChsYWJlbCkge1xuICAgICAgdmFyIGVsZW1lbnQgPSBmaW5kRmlyc3RDaGlsZE5vZGUobGFiZWwpO1xuICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGRlZmF1bHRUZXh0O1xuICAgIH1cbiAgfTtcblxuICB2YXIgZmlsZUFwaSA9ICEhd2luZG93LkZpbGU7XG4gIHZhciBGQUtFX1BBVEggPSAnZmFrZXBhdGgnO1xuICB2YXIgRkFLRV9QQVRIX1NFUEFSQVRPUiA9ICdcXFxcJztcblxuICB2YXIgZ2V0U2VsZWN0ZWRGaWxlcyA9IGZ1bmN0aW9uIGdldFNlbGVjdGVkRmlsZXMoaW5wdXQpIHtcbiAgICBpZiAoaW5wdXQuaGFzQXR0cmlidXRlKCdtdWx0aXBsZScpICYmIGZpbGVBcGkpIHtcbiAgICAgIHJldHVybiBbXS5zbGljZS5jYWxsKGlucHV0LmZpbGVzKS5tYXAoZnVuY3Rpb24gKGZpbGUpIHtcbiAgICAgICAgcmV0dXJuIGZpbGUubmFtZTtcbiAgICAgIH0pLmpvaW4oJywgJyk7XG4gICAgfVxuXG4gICAgaWYgKGlucHV0LnZhbHVlLmluZGV4T2YoRkFLRV9QQVRIKSAhPT0gLTEpIHtcbiAgICAgIHZhciBzcGxpdHRlZFZhbHVlID0gaW5wdXQudmFsdWUuc3BsaXQoRkFLRV9QQVRIX1NFUEFSQVRPUik7XG4gICAgICByZXR1cm4gc3BsaXR0ZWRWYWx1ZVtzcGxpdHRlZFZhbHVlLmxlbmd0aCAtIDFdO1xuICAgIH1cblxuICAgIHJldHVybiBpbnB1dC52YWx1ZTtcbiAgfTtcblxuICBmdW5jdGlvbiBoYW5kbGVJbnB1dENoYW5nZSgpIHtcbiAgICB2YXIgbGFiZWwgPSB0aGlzLnBhcmVudE5vZGUucXVlcnlTZWxlY3RvcihTZWxlY3Rvci5DVVNUT01GSUxFTEFCRUwpO1xuXG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICB2YXIgZWxlbWVudCA9IGZpbmRGaXJzdENoaWxkTm9kZShsYWJlbCk7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IGdldFNlbGVjdGVkRmlsZXModGhpcyk7XG5cbiAgICAgIGlmIChpbnB1dFZhbHVlLmxlbmd0aCkge1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gaW5wdXRWYWx1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3RvcmVEZWZhdWx0VGV4dCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBoYW5kbGVGb3JtUmVzZXQoKSB7XG4gICAgdmFyIGN1c3RvbUZpbGVMaXN0ID0gW10uc2xpY2UuY2FsbCh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoU2VsZWN0b3IuSU5QVVQpKS5maWx0ZXIoZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICByZXR1cm4gISFpbnB1dC5ic0N1c3RvbUZpbGVJbnB1dDtcbiAgICB9KTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjdXN0b21GaWxlTGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgcmVzdG9yZURlZmF1bHRUZXh0KGN1c3RvbUZpbGVMaXN0W2ldKTtcbiAgICB9XG4gIH1cblxuICB2YXIgY3VzdG9tUHJvcGVydHkgPSAnYnNDdXN0b21GaWxlSW5wdXQnO1xuICB2YXIgRXZlbnQgPSB7XG4gICAgRk9STVJFU0VUOiAncmVzZXQnLFxuICAgIElOUFVUQ0hBTkdFOiAnY2hhbmdlJ1xuICB9O1xuICB2YXIgYnNDdXN0b21GaWxlSW5wdXQgPSB7XG4gICAgaW5pdDogZnVuY3Rpb24gaW5pdChpbnB1dFNlbGVjdG9yLCBmb3JtU2VsZWN0b3IpIHtcbiAgICAgIGlmIChpbnB1dFNlbGVjdG9yID09PSB2b2lkIDApIHtcbiAgICAgICAgaW5wdXRTZWxlY3RvciA9IFNlbGVjdG9yLkNVU1RPTUZJTEU7XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtU2VsZWN0b3IgPT09IHZvaWQgMCkge1xuICAgICAgICBmb3JtU2VsZWN0b3IgPSBTZWxlY3Rvci5GT1JNO1xuICAgICAgfVxuXG4gICAgICB2YXIgY3VzdG9tRmlsZUlucHV0TGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbnB1dFNlbGVjdG9yKSk7XG4gICAgICB2YXIgZm9ybUxpc3QgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoZm9ybVNlbGVjdG9yKSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBjdXN0b21GaWxlSW5wdXRMaXN0Lmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHZhciBpbnB1dCA9IGN1c3RvbUZpbGVJbnB1dExpc3RbaV07XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShpbnB1dCwgY3VzdG9tUHJvcGVydHksIHtcbiAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdFRleHQ6IGdldERlZmF1bHRUZXh0KGlucHV0KVxuICAgICAgICAgIH0sXG4gICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIGhhbmRsZUlucHV0Q2hhbmdlLmNhbGwoaW5wdXQpO1xuICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKEV2ZW50LklOUFVUQ0hBTkdFLCBoYW5kbGVJbnB1dENoYW5nZSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIF9pID0gMCwgX2xlbiA9IGZvcm1MaXN0Lmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGZvcm1MaXN0W19pXS5hZGRFdmVudExpc3RlbmVyKEV2ZW50LkZPUk1SRVNFVCwgaGFuZGxlRm9ybVJlc2V0KTtcblxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm9ybUxpc3RbX2ldLCBjdXN0b21Qcm9wZXJ0eSwge1xuICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIHZhciBmb3JtTGlzdCA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChTZWxlY3Rvci5GT1JNKSkuZmlsdGVyKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgIHJldHVybiAhIWZvcm0uYnNDdXN0b21GaWxlSW5wdXQ7XG4gICAgICB9KTtcbiAgICAgIHZhciBjdXN0b21GaWxlSW5wdXRMaXN0ID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFNlbGVjdG9yLklOUFVUKSkuZmlsdGVyKGZ1bmN0aW9uIChpbnB1dCkge1xuICAgICAgICByZXR1cm4gISFpbnB1dC5ic0N1c3RvbUZpbGVJbnB1dDtcbiAgICAgIH0pO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gY3VzdG9tRmlsZUlucHV0TGlzdC5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICB2YXIgaW5wdXQgPSBjdXN0b21GaWxlSW5wdXRMaXN0W2ldO1xuICAgICAgICByZXN0b3JlRGVmYXVsdFRleHQoaW5wdXQpO1xuICAgICAgICBpbnB1dFtjdXN0b21Qcm9wZXJ0eV0gPSB1bmRlZmluZWQ7XG4gICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnQuSU5QVVRDSEFOR0UsIGhhbmRsZUlucHV0Q2hhbmdlKTtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgX2kyID0gMCwgX2xlbjIgPSBmb3JtTGlzdC5sZW5ndGg7IF9pMiA8IF9sZW4yOyBfaTIrKykge1xuICAgICAgICBmb3JtTGlzdFtfaTJdLnJlbW92ZUV2ZW50TGlzdGVuZXIoRXZlbnQuRk9STVJFU0VULCBoYW5kbGVGb3JtUmVzZXQpO1xuXG4gICAgICAgIGZvcm1MaXN0W19pMl1bY3VzdG9tUHJvcGVydHldID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gYnNDdXN0b21GaWxlSW5wdXQ7XG5cbn0pKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1icy1jdXN0b20tZmlsZS1pbnB1dC5qcy5tYXBcbiJdLCJzb3VyY2VSb290IjoiIn0=