/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    background-color: black;
    color: white;
}
#task-items-container {
    border: 3px solid white;
    height: 600px;
    width: 600px;
    
    flex-direction: column;
    overflow: scroll;
    white-space: wrap;
}
.task-item-element {
    border: 3px solid white;
    height: 100px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(10, 1fr);
padding-top: 20px;
}
#task-description {
    color: yellowgreen;
    font-weight: bold;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    grid-row: 1;
    grid-column: 2/9;

}
#task-project {
    color: yellowgreen;
    grid-row: 2;
    grid-column: 2/9;

}
#task-time-spent {
    grid-row: 1;
    grid-column: 9/10;
}
#task-start {
    grid-row: 2;
    grid-column: 9;
}


#start-stop-button {
    border: 5px solid purple;
    border-radius: 50%;
    position: fixed;
    bottom: 0;
    right: 0;
    height: 200px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.dialog {
    background-color: black;
    border:  5px solid purple;
    color: white;
}
#create-description {
    background-color: black;
    color: white;
}
#create-project {
    background-color: black;
    color: white;
}
#create-submit-button {
    background-color: black;
    color: white;
}
#update-description {
    background-color: black;
    color: white;
}
#update-project {
    background-color: black;
    color: white;
}
#update-submit-button {
    background-color: black;
    color: white;
}

`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;;IAEZ,sBAAsB;IACtB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,sCAAsC;AAC1C,iBAAiB;AACjB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;;IAEvB,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,WAAW;IACX,iBAAiB;AACrB;AACA;IACI,WAAW;IACX,cAAc;AAClB;;;AAGA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;IACf,SAAS;IACT,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB","sourcesContent":["body {\n    background-color: black;\n    color: white;\n}\n#task-items-container {\n    border: 3px solid white;\n    height: 600px;\n    width: 600px;\n    \n    flex-direction: column;\n    overflow: scroll;\n    white-space: wrap;\n}\n.task-item-element {\n    border: 3px solid white;\n    height: 100px;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(10, 1fr);\npadding-top: 20px;\n}\n#task-description {\n    color: yellowgreen;\n    font-weight: bold;\n    font-size: 1.3rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    grid-row: 1;\n    grid-column: 2/9;\n\n}\n#task-project {\n    color: yellowgreen;\n    grid-row: 2;\n    grid-column: 2/9;\n\n}\n#task-time-spent {\n    grid-row: 1;\n    grid-column: 9/10;\n}\n#task-start {\n    grid-row: 2;\n    grid-column: 9;\n}\n\n\n#start-stop-button {\n    border: 5px solid purple;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    height: 200px;\n    width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n.dialog {\n    background-color: black;\n    border:  5px solid purple;\n    color: white;\n}\n#create-description {\n    background-color: black;\n    color: white;\n}\n#create-project {\n    background-color: black;\n    color: white;\n}\n#create-submit-button {\n    background-color: black;\n    color: white;\n}\n#update-description {\n    background-color: black;\n    color: white;\n}\n#update-project {\n    background-color: black;\n    color: white;\n}\n#update-submit-button {\n    background-color: black;\n    color: white;\n}\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/task-object-component.js":
/*!**************************************!*\
  !*** ./src/task-object-component.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTaskToAnArray: () => (/* binding */ addTaskToAnArray),
/* harmony export */   createArrayFactory: () => (/* binding */ createArrayFactory),
/* harmony export */   createTaskObject: () => (/* binding */ createTaskObject),
/* harmony export */   downShiftIdToArrayIndex: () => (/* binding */ downShiftIdToArrayIndex)
/* harmony export */ });

class Task {
constructor(description,project,timeSpent) {
    this.description = description
    this.project = project
    this.timeSpent = []
    this.startTime = null;
    this.endTime = null;
this.msArray = []

    }
//     start() {
// this.startTime = new Date();
//     }
//     stop() {
//         this.endTime = new Date();;
//     }
//     elapsed() {
//         if (!this.startTime) {
//             throw new Error('Stopwatch not yet started!')
//         }
//         if (!this.endTime) {
//             throw new Error('Stopwatch not yet stopped!')
//         }
//         return this.endTime - this.startTime;
    // }

}

function createTaskObject(description,project,startTime) {
    const task = new Task(description,project,startTime)
    
    return task
}
function addTaskToAnArray(object, arrayName) {
    arrayName.push(object)
}
// factory for project arrays
function createArrayFactory() {
    const array = [];
    let currentTaskIndex; 

    function getArray() {
        return array;
    }
    function addItem(item) {
        array.push(item);
        localStorage.setItem('task', JSON.stringify(item))
    }
    function downShiftIdToArrayIndex(id) {
        const element = id;
        let shiftedId = parseInt((element) -1);

return shiftedId;
    }
function getArrayItem(index) {
    return array[index]
}
function setCurrentTaskIndex(index) {
    currentTaskIndex = index;
}
function getCurrentTaskIndex() {
    return currentTaskIndex;
}
function deleteTaskObject(index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1)
    }
}
function start(index) {
        array[index].startTime = new Date();

}
function stop(index) {
    array[index].endTime = new Date();
    
}
function elapsed(index) {
    if (!array[index].startTime) {
        throw new Error('Stopwatch not yet started!')
    }
    if (!array[index].endTime) {
        throw new Error('Stopwatch not yet stopped!')
    }

    const milliseconds = array[index].endTime - array[index].startTime;

    return milliseconds;
}

function formatTime(milliseconds) {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
    return formattedTime;
  }
  
  function padZero(number) {
    return number.toString().padStart(2, "0");
  }
function getFormattedSpentTime(index) {
let totalMilliSeconds = 0;
for (let i = 0; i <array[index].msArray.length; i++) {
let element = array[index].msArray[i];
totalMilliSeconds += element;

}
return formatTime(totalMilliSeconds);
}  
 function setLocalStorage(key, array) {
localStorage.setItem(key, array)
 } 
  


return {
    getArray,
    addItem,
    downShiftIdToArrayIndex,
    getArrayItem,
    setCurrentTaskIndex,
    getCurrentTaskIndex,
    deleteTaskObject,
start,
stop,
elapsed,
getFormattedSpentTime,
setLocalStorage,


};
}

// section for project select option dropdown implementation





// refactored factory methods to global functions
function downShiftIdToArrayIndex(id) {
    const element = id;
    let shiftedId = parseInt((element) -1);

return shiftedId;
}
function start(index) {
    localStorage.allTasks[index].startTime = new Date();

}
function stop(index) {
array[index].endTime = new Date();

}
function elapsed(index) {
if (!array[index].startTime) {
    throw new Error('Stopwatch not yet started!')
}
if (!array[index].endTime) {
    throw new Error('Stopwatch not yet stopped!')
}

const milliseconds = array[index].endTime - array[index].startTime;

return milliseconds;
}

function formatTime(milliseconds) {
const totalSeconds = Math.floor(milliseconds / 1000);
const hours = Math.floor(totalSeconds / 3600);
const minutes = Math.floor((totalSeconds % 3600) / 60);
const seconds = totalSeconds % 60;

const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;
return formattedTime;
}

function padZero(number) {
return number.toString().padStart(2, "0");
}
function getFormattedSpentTime(index) {
let totalMilliSeconds = 0;
for (let i = 0; i <array[index].msArray.length; i++) {
let element = array[index].msArray[i];
totalMilliSeconds += element;

}
return formatTime(totalMilliSeconds);
}  






/***/ }),

/***/ "./src/user-interface.js":
/*!*******************************!*\
  !*** ./src/user-interface.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   closeCreateDialog: () => (/* binding */ closeCreateDialog),
/* harmony export */   closeCreateProjectDialog: () => (/* binding */ closeCreateProjectDialog),
/* harmony export */   closeUpdateDialog: () => (/* binding */ closeUpdateDialog),
/* harmony export */   createFormDialog: () => (/* binding */ createFormDialog),
/* harmony export */   createProjectFilterSelect: () => (/* binding */ createProjectFilterSelect),
/* harmony export */   createProjectFormDialog: () => (/* binding */ createProjectFormDialog),
/* harmony export */   createTaskItem: () => (/* binding */ createTaskItem),
/* harmony export */   getCurrentHourAndMinute: () => (/* binding */ getCurrentHourAndMinute),
/* harmony export */   openCreateFormDialog: () => (/* binding */ openCreateFormDialog),
/* harmony export */   openCreateProjectFormDialog: () => (/* binding */ openCreateProjectFormDialog),
/* harmony export */   openUpdateFormDialog: () => (/* binding */ openUpdateFormDialog),
/* harmony export */   removeTaskItemsFromContainer: () => (/* binding */ removeTaskItemsFromContainer),
/* harmony export */   startBtnEventHandler: () => (/* binding */ startBtnEventHandler),
/* harmony export */   startStopButton: () => (/* binding */ startStopButton),
/* harmony export */   taskItemsContainer: () => (/* binding */ taskItemsContainer),
/* harmony export */   updateFormDialog: () => (/* binding */ updateFormDialog),
/* harmony export */   updateTasksContainer: () => (/* binding */ updateTasksContainer)
/* harmony export */ });
/* harmony import */ var _task_object_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task-object-component */ "./src/task-object-component.js");







// get the current time in hours and minutes
const now = new Date();
const currentHour = now.getHours();
const currentMinute = now.getMinutes();
function getCurrentHourAndMinute() {
    // const currentHourAndMinute = formatDistance(subDays(new Date(),6), new Date(), {addSuffix: true});
// return currentHourAndMinute;
// const stopwatch = new Stopwatch();

// const start = stopwatch.start();

// setTimeout(() => {
//     stopwatch.stop();
//     const elapsed = stopwatch.elapsed();
    
// }, 4000);

return 'hello and goodbye depricated'

}

// click event listener for start button
function startBtnEventHandler() {
const startBtn = document.getElementById('start-stop-button')
    startBtn.addEventListener('click', () => {
    openCreateFormDialog();
    
    })
    }

// create task items container 
function taskItemsContainer() {
    const container = document.createElement('div')
    container.id = 'task-items-container'

return container;
}
// create task item
function createTaskItem(array) {
const taskItemsContainer = document.getElementById(
    'task-items-container');
   for (let i = 0;i < array.length; i++) {
        const item = array[i];
    
        const taskItemElement = document.createElement('div');
        taskItemElement.classList.add('task-item-element')
        taskItemElement.id = i +1;

        const div = document.createElement('div');
        div.classList.add('task-item');
        div.id = 'task-description';
        div.textContent = item.description;
        
        const div2 = document.createElement('div');
        div2.classList.add('task-item');
        div2.id = 'task-project';
        div2.textContent = item.project;
        
        const div3 = document.createElement('div');
        div3.classList.add('task-item');
        div3.id = 'task-time-spent';
        div3.textContent = item.spentTime;

        // div for start and stop button
        const div4 = document.createElement('div');
div4.classList.add('task-component')
div4.id = 'task-start';
div4.textContent = 'Start';



        taskItemElement.appendChild(div)
        taskItemElement.appendChild(div2)
        taskItemElement.appendChild(div3)
        taskItemElement.appendChild(div4)
        
        taskItemsContainer.appendChild(taskItemElement)
    }
        
    return taskItemsContainer;
}

// create start and stop button component
function startStopButton() {
    const button = document.createElement('div');
    button.id = 'start-stop-button';
const h3 = document.createElement('h3')
h3.textContent = 'Start';

button.appendChild(h3)

    return button;
}

// create form dialog
function createFormDialog() {
    const dialog = document.createElement('dialog')
dialog.classList.add('dialog')
dialog.id = 'create-dialog';

const dialogContent = document.createElement('div')
dialogContent.classList.add('dialog-content')

const close = document.createElement('span');
close.classList.add('close')
close.textContent = '&times;';
close.id = 'create-close';

const h2 = document.createElement('h2')
h2.innerHTML = 'New Task';

const form = document.createElement('form');
form.id = 'create-form'
const label1 = createLabel('create-description', 'Description');
const input1 = createInput('create-description', 'text')

const label2 = createLabel('create-project','Project');
const input2 = document.createElement('select')
input2.classList.add('create-project');
input2.id = 'create-project';

const option1 = document.createElement('option');
option1.value = 'no-project'
option1.text = 'No Project';
const option2 = document.createElement('option');
option2.value = 'create-project'
option2.text = 'Create Project';


const input3 = document.createElement('span')
input3.id = 'create-start-time'

const submit = document.createElement('button')
submit.type = 'submit';
submit.id = 'create-submit-button';
submit.textContent = 'Done'

// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(close);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(label1);
form.appendChild(input1)
form.appendChild(label2);
form.appendChild(input2)
// form.appendChild(label3);
form.appendChild(input3)
form.appendChild(submit)
input2.appendChild(option1)
input2.appendChild(option2)

return dialog;
}

// update form dialog
function updateFormDialog() {
    const dialog = document.createElement('dialog')
dialog.classList.add('dialog')
dialog.id = 'update-dialog';

const dialogContent = document.createElement('div')
dialogContent.classList.add('dialog-content')

const close = document.createElement('span');
close.classList.add('close')
close.textContent = '&times;';
close.id = 'update-close';

const remove = document.createElement('span');
remove.classList.add('delete')
remove.textContent = 'Delete';
remove.id = 'update-delete';

const h2 = document.createElement('h2')
h2.innerHTML = 'Update Task';

const form = document.createElement('form');
form.id = 'update-form'
const label1 = createLabel('update-description', 'Deez asian nutz');
const input1 = createInput('update-description', 'text')

const label2 = createLabel('update-project','Project');
const input2 = createInput('update-project','text');

const input3 = document.createElement('span')
input3.id = 'update-start-time'

const submit = document.createElement('button')
submit.type = 'submit';
submit.id = 'update-submit-button';
submit.textContent = 'Done'

// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(close);
dialogContent.appendChild(remove);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(label1);
form.appendChild(input1)
form.appendChild(label2);
form.appendChild(input2)
// form.appendChild(label3);
form.appendChild(input3)
form.appendChild(submit)

return dialog;
}
// create project form dialog
function createProjectFormDialog() {
    const dialog = document.createElement('dialog')
dialog.classList.add('dialog')
dialog.id = 'create-project-dialog';

const dialogContent = document.createElement('div')
dialogContent.classList.add('dialog-content')

const close = document.createElement('span');
close.classList.add('close')
close.textContent = '&times;';
close.id = 'create-project-close';

const h2 = document.createElement('h2')
h2.innerHTML = 'New Project';

const form = document.createElement('form');
form.id = 'create-project-form'
const label1 = createLabel('create-project-name', 'Project');
const input1 = createInput('create-create-project-name', 'text')
input1.placeholder = 'Enter a project name';
const submit = document.createElement('button')
submit.type = 'submit';
submit.id = 'create-project-submit-button';
submit.textContent = 'Done'

// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(close);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(label1);
form.appendChild(input1)
form.appendChild(submit)

return dialog;
}

function createLabel(forAttribute,textContent) {
    const label = document.createElement('label')
    label.htmlFor = forAttribute;
label.textContent = textContent;

return label;
}
function createInput(idAttribute,typeAttribute){
const input = document.createElement('input')
input.id = idAttribute;
input.typ = typeAttribute;

return input; 
}

// function to create and open form dialog
function openCreateFormDialog() {
    const dialog = document.getElementById('create-dialog')
    dialog.showModal()
    return dialog;
}
function openUpdateFormDialog() {
    const dialog = document.getElementById('update-dialog')
    dialog.showModal()
    return dialog;
}
function closeCreateDialog() {
    const dialog = document.getElementById('create-dialog')
    dialog.close()
}
function closeUpdateDialog() {
    const dialog = document.getElementById('update-dialog')
    dialog.close()
}
function openCreateProjectFormDialog() {
    const dialog = document.getElementById('create-project-dialog')
    dialog.showModal()
    return dialog;
}
function closeCreateProjectDialog() {
    const dialog = document.getElementById('create-project-dialog')
    dialog.close()
}

// function to remove task items from container
function removeTaskItemsFromContainer() {
const container = document.getElementById('task-items-container')

for (let i = container.children.length -1; i >= 0; i--) {
const child = container.children[i];
container.removeChild(child)

}
}
// function to update the tasks container elements
function updateTasksContainer(arrayName) {
const update = output.appendChild(createTaskItem(arrayName))

return update;

}
// project filter select dom element
function createProjectFilterSelect() {
const container = document.createElement('div')
container.id = 'project-filter-container'

const label2 = createLabel('project-filter','Filter');
const input2 = document.createElement('select')
input2.classList.add('create-project');
input2.id = 'project-filter';

const option1 = document.createElement('option');
option1.value = 'all-tasks'
option1.text = 'All Tasks';
const option2 = document.createElement('option');
option2.value = 'create-project'
option2.text = 'Create Project';

container.appendChild(label2)
container.appendChild(input2)
input2.appendChild(option1)
input2.appendChild(option2)

return container;
}











/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-interface */ "./src/user-interface.js");
/* harmony import */ var _task_object_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-object-component */ "./src/task-object-component.js");





// import object related modules



const allTasksArray = (0,_task_object_component__WEBPACK_IMPORTED_MODULE_2__.createArrayFactory)();
// allTasksArray.addItem(
//             {
//             description: 'build task item component and write a really long description so that we can see what the affect will be',
//             project: 'Javascript',
//             timeSpent: '00:28:23',
//             msArray: [],
    
//         }
// );
// allTasksArray.addItem(
//                 {
//                 description: 'build to do task app',
//                 project: 'Javascript',
//                 timeSpent: '00:43:22',
//             }
// )


// all dom related functions go here
// append task items container to output
const output = document.getElementById('output')
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.taskItemsContainer)())
// append task items to task items container
// output.appendChild(createTaskItem(allTasksArray.getArray()))
// append form to html
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createFormDialog)())
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateFormDialog)())
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createProjectFormDialog)())


// append start stop button to body 
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.startStopButton)())

// append project filter feature to dom
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createProjectFilterSelect)())

// start btn event handler
;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.startBtnEventHandler)()

console.log(JSON.parse(localStorage.getItem('allTasks')));

// event handler for initiating updating task elements
function updateTaskElementEventHandler() {
    const parentElement = document.getElementById('task-items-container')
parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.task-item')) {

const shiftedIndex = (0,_task_object_component__WEBPACK_IMPORTED_MODULE_2__.downShiftIdToArrayIndex)(event.target.parentNode.id);
const storedData = localStorage.getItem('allTasks')
const dataArray = JSON.parse(storedData);
const selectedObject = dataArray[shiftedIndex];

// set the current task object index value to local storage
localStorage.setItem('currentTask', shiftedIndex)

// retrieve local storage values to populate dom elements 
const description = document.getElementById('update-description');
description.value = selectedObject.description
const project = document.getElementById('update-project');
project.value = selectedObject.project;

(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.openUpdateFormDialog)()
// populateFormInputs(currentTask)
// console.log(currentTask);
    }

    if (event.target.matches('.task-component') &&
    event.target.textContent === 'Stop') {

        (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)()
        const shiftedIndex = (0,_task_object_component__WEBPACK_IMPORTED_MODULE_2__.downShiftIdToArrayIndex)(event.target.parentNode.id);
        const storedData = localStorage.getItem('allTasks')
        const dataArray = JSON.parse(storedData);
        const selectedObject = dataArray[shiftedIndex];

        // set value to key of object in array
        if (selectedObject.startTime){
        const endTimeValue = new Date().getTime();
        selectedObject.endTime = endTimeValue;

        // get start and end time in milliseconds and push to array
const elapsedTime = selectedObject.endTime - selectedObject.startTime;
selectedObject.msArray.push(elapsedTime);
console.log(elapsedTime);
        
selectedObject.startTime = null;

// sum up milliseconds items in ms array
let totalMilliseconds = 0;
for (let i = 0; i < selectedObject.msArray.length; i++) {
    totalMilliseconds += selectedObject.msArray[i];
    
}
// set result to object property
selectedObject.spentTime = totalMilliseconds;
alert(totalMilliseconds);

// display result on dom element 
const previousSibling = event.target.previousSibling;
previousSibling.textContent = totalMilliseconds;
console.log(previousSibling);

        }
        event.target.textContent = 'Start';
        
       // convert array back into string
       const updatedArrayString = JSON.stringify(dataArray)
       
       // store the updated array back into local storage
       localStorage.setItem('allTasks', updatedArrayString)
       
       console.log(selectedObject);
       console.log(dataArray);

       (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.getItem('allTasks')))

// when we click update task element it populates the form element with the corresponding task from the local stroage object.
// but for some reason if we close the form dialog it will change the text content of description to stop or start 
// we want the start button to reset the corresponding task object with null 
// then set the start time key value to a new date method
// the stop button adds new date to the end time key value 
// it then does some operations and calculations such as
// store the difference in end and start time in milliseconds of the current key values
// push the milliseconds value to the ms array 
// loop through ms array and sum up all items 
// store or update total time in milliseconds
// get total time in milliseconds and convert to total seconds 
// format total seconds into hour hour minute minute second second format
// display formatted total time in the dom element
// call function to repopulate the task items container with updated task elements

    } else {
        // convert element id to array index value
        const shiftedIndex = (0,_task_object_component__WEBPACK_IMPORTED_MODULE_2__.downShiftIdToArrayIndex)(event.target.parentNode.id);
        // get the all tasks array storing task objects
        const storedData = localStorage.getItem('allTasks')
        // convert stringed array to normal array
        const dataArray = JSON.parse(storedData);
        // get the correlated task object
        const selectedObject = dataArray[shiftedIndex];

        // set value to key of object in array
const startTime = new Date().getTime();
 selectedObject.startTime = startTime;

// convert array back into string
const updatedArrayString = JSON.stringify(dataArray)

// store the updated array back into local storage
localStorage.setItem('allTasks', updatedArrayString)

console.log(selectedObject);
console.log(dataArray);

        event.target.textContent = 'Stop';
        
    }
})
}
updateTaskElementEventHandler()

// function to add object to local storage array
function addObjectToLocalStorageArray(key, object) {
    // checks if key exists in storage or creates one with empty array
    // and stores it in a variable
const existingArray = JSON.parse(localStorage.getItem(key)) || [];
// push the object to an array in storage
existingArray.push(object);
// set the array with new object in key of storage 
localStorage.setItem(key, JSON.stringify(existingArray))

}

// function to handle form submit
        function handleCreateFormSubmit(event) {
            event.preventDefault();

            // clear the dom
            (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)();
            
            // get form input values
            const input1 = document.getElementById('create-description');
            const description = input1.value;
            const input2 = document.getElementById('create-project');
            const project = input2.value;
            // const startTime = getCurrentHourAndMinute();
        
        // create new task object
        const task = (0,_task_object_component__WEBPACK_IMPORTED_MODULE_2__.createTaskObject)(description,project)
        // addTaskToAnArray(task,allTasksArray)
        // allTasksArray.addItem(task)
        // localStorage.setItem('allTasksArray', JSON.stringify(task))
addObjectToLocalStorageArray('allTasks', task)

console.log(JSON.parse(localStorage.getItem('allTasks')));

        alert('creation event handler')
            
        // update dom with new task
            // updateTasksContainer(allTasksArray.getArray())
            ;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.allTasks))
        
            // reset form inputs
        input1.value = '';
        input2.value = '';        

        (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeCreateDialog)();
                
            }
        

            // event handler for submit update
            function handleUpdateFormSubmit(event) {
                event.preventDefault();
            
                (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)();
                // get form input values
                const input1 = document.getElementById('update-description');
                const description = input1.value;
                const input2 = document.getElementById('update-project');
                const project = input2.value;
                
// get index of current task
const currentTask = localStorage.getItem('currentTask')

// update the task object in local sstorage
        
        // get the all tasks array storing task objects
        const storedData = localStorage.getItem('allTasks')
        // convert stringed array to normal array
        const dataArray = JSON.parse(storedData);
        // get the correlated task object
        const selectedObject = dataArray[currentTask];

        alert(currentTask)
        // set input values to local storage
 selectedObject.description = description;
 selectedObject.project = project;

// convert array back into string
const updatedArrayString = JSON.stringify(dataArray)

// store the updated array back into local storage
localStorage.setItem('allTasks', updatedArrayString)

console.log(selectedObject);
console.log(dataArray);


alert('update event handler')

        ;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.getItem('allTasks')))
            
            input1.value = '';
            input2.value = '';        
    
            (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)();
            
                }

// attatch event listener and handler to create and update form submit    
    const createForm =document.getElementById('create-form');
    createForm.addEventListener("submit", handleCreateFormSubmit)    
    const updateForm = document.getElementById('update-form');
updateForm.addEventListener("submit", handleUpdateFormSubmit)
    
// function to populate form dialog with clicked task
function populateFormInputs(arrayIndex) {
let input1 = document.getElementById('update-description');
input1.value = localStorage.getItem(allTasks)[arrayIndex].description;

let input2 = document.getElementById('update-project');
input2.value = localStorage.getItem(allTasks)[arrayIndex].project;

console.log(localStorage.getItem(allTasks[arrayIndex]));
}

// event handler for closing create form dialog
function closeCreateFormDialog() {
    const element = document.getElementById('create-close');
    element.addEventListener('click', () => {
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeCreateDialog)();
    })
}
closeCreateFormDialog();

// event handler for closing update form dialog
function closeUpdateFormDialog() {
    const element = document.getElementById('update-close');
    element.addEventListener('click', () => {
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)();
    })
}
closeUpdateFormDialog();

// event handler for deleting a task object
const deleteButton = document.getElementById('update-delete');
deleteButton.addEventListener('click', (event) => {

    (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)();
    const currentTask = localStorage.getItem('currentTask');
    const storedData = localStorage.getItem('allTasks')
    const dataArray = JSON.parse(storedData);
    const selectedObject = dataArray[currentTask];
// remove object from array
dataArray.splice(currentTask,1)
console.log(dataArray);

// convert array back into string
const updatedArrayString = JSON.stringify(dataArray)
       
// store the updated array back into local storage
localStorage.setItem('allTasks', updatedArrayString)

// render dom with updated task objects
;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.getItem('allTasks')))


;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)()

})



// function to check if storage is available 
function storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      const x = "__storage_test__";
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        // everything except Firefox
        (e.code === 22 ||
          // Firefox
          e.code === 1014 ||
          // test name field too, because code might not be present
          // everything except Firefox
          e.name === "QuotaExceededError" ||
          // Firefox
          e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
        // acknowledge QuotaExceededError only if there's something already stored
        storage &&
        storage.length !== 0
      );
    }
  }
  
  if (storageAvailable("localStorage")) {
    // Yippee! We can use localStorage awesomeness
    console.log('Yippee');
  } else {
    // Too bad, no localStorage for us
    console.log('Nuppee');
  }
  
  
// select option form dropdown implementation 

const selectElement = document.getElementById('create-project')
const projectOptions = ['Javascript', 'Python', 'Ruby']

function setProjectOptions() {
projectOptions.forEach(projectOption => {
const optionElement = document.createElement('option')
optionElement.value = projectOption;
optionElement.text = projectOption;

selectElement.appendChild(optionElement)
});
}

selectElement.addEventListener('change', (event) => {
const selectedElement = event.target.value;
if (selectedElement === 'create-project'){
    alert(selectedElement)
;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.openCreateProjectFormDialog)()

}

})
// handle create project form submit
const createProjectForm = document.getElementById('create-project-form')
createProjectForm.addEventListener('submit', (event) => {
event.preventDefault();
const projectNameInput = document.getElementById('create-create-project-name').value;
projectOptions.push(projectNameInput)
// call function to update project options 
setProjectOptions();

(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeCreateProjectDialog)()

})
setProjectOptions();

// function to clear local storage
function clearLocalStorage() {
    localStorage.clear();
    
}
// clearLocalStorage()

// call on page load to display tasks in local storage
// updateTasksContainer(JSON.parse(localStorage.allTasksArray))
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.allTasks))

// function to start timer that takes object as argument
function startTimer(object) {

}


console.log(JSON.parse(localStorage.allTasks));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsZUFBZSxHQUFHLGlCQUFpQixHQUFHLGlCQUFpQjtBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGdDQUFnQztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixlQUFlLEdBQUcsaUJBQWlCLEdBQUcsaUJBQWlCO0FBQ2hGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixnQ0FBZ0M7QUFDaEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVMc0I7OztBQU9XOzs7O0FBSWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1RkFBdUYsZ0JBQWdCO0FBQ3ZHO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOztBQUVKOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isa0JBQWtCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrLW9iamVjdC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3VzZXItaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3Rhc2staXRlbXMtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiA2MDBweDtcbiAgICBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG92ZXJmbG93OiBzY3JvbGw7XG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XG59XG4udGFzay1pdGVtLWVsZW1lbnQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xucGFkZGluZy10b3A6IDIwcHg7XG59XG4jdGFzay1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgIGdyaWQtcm93OiAxO1xuICAgIGdyaWQtY29sdW1uOiAyLzk7XG5cbn1cbiN0YXNrLXByb2plY3Qge1xuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMi85O1xuXG59XG4jdGFzay10aW1lLXNwZW50IHtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogOS8xMDtcbn1cbiN0YXNrLXN0YXJ0IHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogOTtcbn1cblxuXG4jc3RhcnQtc3RvcC1idXR0b24ge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMDtcbiAgICByaWdodDogMDtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIHdpZHRoOiAyMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uZGlhbG9nIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6ICA1cHggc29saWQgcHVycGxlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNjcmVhdGUtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNjcmVhdGUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NyZWF0ZS1zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdXBkYXRlLWRlc2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdXBkYXRlLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN1cGRhdGUtc3VibWl0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZOztJQUVaLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsc0NBQXNDO0FBQzFDLGlCQUFpQjtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7O0lBRXZCLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0FBQ2xCOzs7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jdGFzay1pdGVtcy1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgaGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgICBcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG4gICAgd2hpdGUtc3BhY2U6IHdyYXA7XFxufVxcbi50YXNrLWl0ZW0tZWxlbWVudCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG5wYWRkaW5nLXRvcDogMjBweDtcXG59XFxuI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMi85O1xcblxcbn1cXG4jdGFzay1wcm9qZWN0IHtcXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvOTtcXG5cXG59XFxuI3Rhc2stdGltZS1zcGVudCB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogOS8xMDtcXG59XFxuI3Rhc2stc3RhcnQge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDk7XFxufVxcblxcblxcbiNzdGFydC1zdG9wLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5kaWFsb2cge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgYm9yZGVyOiAgNXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY3JlYXRlLWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2NyZWF0ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2NyZWF0ZS1zdWJtaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3VwZGF0ZS1kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiN1cGRhdGUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiN1cGRhdGUtc3VibWl0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJcbmNsYXNzIFRhc2sge1xuY29uc3RydWN0b3IoZGVzY3JpcHRpb24scHJvamVjdCx0aW1lU3BlbnQpIHtcbiAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25cbiAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0XG4gICAgdGhpcy50aW1lU3BlbnQgPSBbXVxuICAgIHRoaXMuc3RhcnRUaW1lID0gbnVsbDtcbiAgICB0aGlzLmVuZFRpbWUgPSBudWxsO1xudGhpcy5tc0FycmF5ID0gW11cblxuICAgIH1cbi8vICAgICBzdGFydCgpIHtcbi8vIHRoaXMuc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcbi8vICAgICB9XG4vLyAgICAgc3RvcCgpIHtcbi8vICAgICAgICAgdGhpcy5lbmRUaW1lID0gbmV3IERhdGUoKTs7XG4vLyAgICAgfVxuLy8gICAgIGVsYXBzZWQoKSB7XG4vLyAgICAgICAgIGlmICghdGhpcy5zdGFydFRpbWUpIHtcbi8vICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcHdhdGNoIG5vdCB5ZXQgc3RhcnRlZCEnKVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGlmICghdGhpcy5lbmRUaW1lKSB7XG4vLyAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0b3BwZWQhJylcbi8vICAgICAgICAgfVxuLy8gICAgICAgICByZXR1cm4gdGhpcy5lbmRUaW1lIC0gdGhpcy5zdGFydFRpbWU7XG4gICAgLy8gfVxuXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdCxzdGFydFRpbWUpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24scHJvamVjdCxzdGFydFRpbWUpXG4gICAgXG4gICAgcmV0dXJuIHRhc2tcbn1cbmZ1bmN0aW9uIGFkZFRhc2tUb0FuQXJyYXkob2JqZWN0LCBhcnJheU5hbWUpIHtcbiAgICBhcnJheU5hbWUucHVzaChvYmplY3QpXG59XG4vLyBmYWN0b3J5IGZvciBwcm9qZWN0IGFycmF5c1xuZnVuY3Rpb24gY3JlYXRlQXJyYXlGYWN0b3J5KCkge1xuICAgIGNvbnN0IGFycmF5ID0gW107XG4gICAgbGV0IGN1cnJlbnRUYXNrSW5kZXg7IFxuXG4gICAgZnVuY3Rpb24gZ2V0QXJyYXkoKSB7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkSXRlbShpdGVtKSB7XG4gICAgICAgIGFycmF5LnB1c2goaXRlbSk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrJywgSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRvd25TaGlmdElkVG9BcnJheUluZGV4KGlkKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBpZDtcbiAgICAgICAgbGV0IHNoaWZ0ZWRJZCA9IHBhcnNlSW50KChlbGVtZW50KSAtMSk7XG5cbnJldHVybiBzaGlmdGVkSWQ7XG4gICAgfVxuZnVuY3Rpb24gZ2V0QXJyYXlJdGVtKGluZGV4KSB7XG4gICAgcmV0dXJuIGFycmF5W2luZGV4XVxufVxuZnVuY3Rpb24gc2V0Q3VycmVudFRhc2tJbmRleChpbmRleCkge1xuICAgIGN1cnJlbnRUYXNrSW5kZXggPSBpbmRleDtcbn1cbmZ1bmN0aW9uIGdldEN1cnJlbnRUYXNrSW5kZXgoKSB7XG4gICAgcmV0dXJuIGN1cnJlbnRUYXNrSW5kZXg7XG59XG5mdW5jdGlvbiBkZWxldGVUYXNrT2JqZWN0KGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IDAgJiYgaW5kZXggPCBhcnJheS5sZW5ndGgpIHtcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKVxuICAgIH1cbn1cbmZ1bmN0aW9uIHN0YXJ0KGluZGV4KSB7XG4gICAgICAgIGFycmF5W2luZGV4XS5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG59XG5mdW5jdGlvbiBzdG9wKGluZGV4KSB7XG4gICAgYXJyYXlbaW5kZXhdLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICAgIFxufVxuZnVuY3Rpb24gZWxhcHNlZChpbmRleCkge1xuICAgIGlmICghYXJyYXlbaW5kZXhdLnN0YXJ0VGltZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0YXJ0ZWQhJylcbiAgICB9XG4gICAgaWYgKCFhcnJheVtpbmRleF0uZW5kVGltZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0b3BwZWQhJylcbiAgICB9XG5cbiAgICBjb25zdCBtaWxsaXNlY29uZHMgPSBhcnJheVtpbmRleF0uZW5kVGltZSAtIGFycmF5W2luZGV4XS5zdGFydFRpbWU7XG5cbiAgICByZXR1cm4gbWlsbGlzZWNvbmRzO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKG1pbGxpc2Vjb25kcykge1xuICAgIGNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG4gICAgY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuICAgIGNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbiAgICBjb25zdCBzZWNvbmRzID0gdG90YWxTZWNvbmRzICUgNjA7XG4gIFxuICAgIGNvbnN0IGZvcm1hdHRlZFRpbWUgPSBgJHtwYWRaZXJvKGhvdXJzKX06JHtwYWRaZXJvKG1pbnV0ZXMpfToke3BhZFplcm8oc2Vjb25kcyl9YDtcbiAgICByZXR1cm4gZm9ybWF0dGVkVGltZTtcbiAgfVxuICBcbiAgZnVuY3Rpb24gcGFkWmVybyhudW1iZXIpIHtcbiAgICByZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICB9XG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRTcGVudFRpbWUoaW5kZXgpIHtcbmxldCB0b3RhbE1pbGxpU2Vjb25kcyA9IDA7XG5mb3IgKGxldCBpID0gMDsgaSA8YXJyYXlbaW5kZXhdLm1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbmxldCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLm1zQXJyYXlbaV07XG50b3RhbE1pbGxpU2Vjb25kcyArPSBlbGVtZW50O1xuXG59XG5yZXR1cm4gZm9ybWF0VGltZSh0b3RhbE1pbGxpU2Vjb25kcyk7XG59ICBcbiBmdW5jdGlvbiBzZXRMb2NhbFN0b3JhZ2Uoa2V5LCBhcnJheSkge1xubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBhcnJheSlcbiB9IFxuICBcblxuXG5yZXR1cm4ge1xuICAgIGdldEFycmF5LFxuICAgIGFkZEl0ZW0sXG4gICAgZG93blNoaWZ0SWRUb0FycmF5SW5kZXgsXG4gICAgZ2V0QXJyYXlJdGVtLFxuICAgIHNldEN1cnJlbnRUYXNrSW5kZXgsXG4gICAgZ2V0Q3VycmVudFRhc2tJbmRleCxcbiAgICBkZWxldGVUYXNrT2JqZWN0LFxuc3RhcnQsXG5zdG9wLFxuZWxhcHNlZCxcbmdldEZvcm1hdHRlZFNwZW50VGltZSxcbnNldExvY2FsU3RvcmFnZSxcblxuXG59O1xufVxuXG4vLyBzZWN0aW9uIGZvciBwcm9qZWN0IHNlbGVjdCBvcHRpb24gZHJvcGRvd24gaW1wbGVtZW50YXRpb25cblxuXG5cblxuXG4vLyByZWZhY3RvcmVkIGZhY3RvcnkgbWV0aG9kcyB0byBnbG9iYWwgZnVuY3Rpb25zXG5mdW5jdGlvbiBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChpZCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBpZDtcbiAgICBsZXQgc2hpZnRlZElkID0gcGFyc2VJbnQoKGVsZW1lbnQpIC0xKTtcblxucmV0dXJuIHNoaWZ0ZWRJZDtcbn1cbmZ1bmN0aW9uIHN0YXJ0KGluZGV4KSB7XG4gICAgbG9jYWxTdG9yYWdlLmFsbFRhc2tzW2luZGV4XS5zdGFydFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG59XG5mdW5jdGlvbiBzdG9wKGluZGV4KSB7XG5hcnJheVtpbmRleF0uZW5kVGltZSA9IG5ldyBEYXRlKCk7XG5cbn1cbmZ1bmN0aW9uIGVsYXBzZWQoaW5kZXgpIHtcbmlmICghYXJyYXlbaW5kZXhdLnN0YXJ0VGltZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU3RvcHdhdGNoIG5vdCB5ZXQgc3RhcnRlZCEnKVxufVxuaWYgKCFhcnJheVtpbmRleF0uZW5kVGltZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignU3RvcHdhdGNoIG5vdCB5ZXQgc3RvcHBlZCEnKVxufVxuXG5jb25zdCBtaWxsaXNlY29uZHMgPSBhcnJheVtpbmRleF0uZW5kVGltZSAtIGFycmF5W2luZGV4XS5zdGFydFRpbWU7XG5cbnJldHVybiBtaWxsaXNlY29uZHM7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUobWlsbGlzZWNvbmRzKSB7XG5jb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuY29uc3QgaG91cnMgPSBNYXRoLmZsb29yKHRvdGFsU2Vjb25kcyAvIDM2MDApO1xuY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwO1xuXG5jb25zdCBmb3JtYXR0ZWRUaW1lID0gYCR7cGFkWmVybyhob3Vycyl9OiR7cGFkWmVybyhtaW51dGVzKX06JHtwYWRaZXJvKHNlY29uZHMpfWA7XG5yZXR1cm4gZm9ybWF0dGVkVGltZTtcbn1cblxuZnVuY3Rpb24gcGFkWmVybyhudW1iZXIpIHtcbnJldHVybiBudW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG59XG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWRTcGVudFRpbWUoaW5kZXgpIHtcbmxldCB0b3RhbE1pbGxpU2Vjb25kcyA9IDA7XG5mb3IgKGxldCBpID0gMDsgaSA8YXJyYXlbaW5kZXhdLm1zQXJyYXkubGVuZ3RoOyBpKyspIHtcbmxldCBlbGVtZW50ID0gYXJyYXlbaW5kZXhdLm1zQXJyYXlbaV07XG50b3RhbE1pbGxpU2Vjb25kcyArPSBlbGVtZW50O1xuXG59XG5yZXR1cm4gZm9ybWF0VGltZSh0b3RhbE1pbGxpU2Vjb25kcyk7XG59ICBcblxuXG5cblxuZXhwb3J0IHtcblxuY3JlYXRlVGFza09iamVjdCxcbmFkZFRhc2tUb0FuQXJyYXksXG5jcmVhdGVBcnJheUZhY3RvcnksXG5kb3duU2hpZnRJZFRvQXJyYXlJbmRleCxcblxufSIsImltcG9ydCB7XG4gICAgIGZvcm1hdERpc3RhbmNlLFxuICAgICAgc3ViRGF5cyBcbiAgICB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5cbmltcG9ydCB7XG4gICAgU3RvcHdhdGNoLFxuICAgIGNyZWF0ZVRhc2tPYmplY3QsXG5hZGRUYXNrVG9BbkFycmF5LFxufSBmcm9tICcuL3Rhc2stb2JqZWN0LWNvbXBvbmVudCc7XG5cblxuXG4vLyBnZXQgdGhlIGN1cnJlbnQgdGltZSBpbiBob3VycyBhbmQgbWludXRlc1xuY29uc3Qgbm93ID0gbmV3IERhdGUoKTtcbmNvbnN0IGN1cnJlbnRIb3VyID0gbm93LmdldEhvdXJzKCk7XG5jb25zdCBjdXJyZW50TWludXRlID0gbm93LmdldE1pbnV0ZXMoKTtcbmZ1bmN0aW9uIGdldEN1cnJlbnRIb3VyQW5kTWludXRlKCkge1xuICAgIC8vIGNvbnN0IGN1cnJlbnRIb3VyQW5kTWludXRlID0gZm9ybWF0RGlzdGFuY2Uoc3ViRGF5cyhuZXcgRGF0ZSgpLDYpLCBuZXcgRGF0ZSgpLCB7YWRkU3VmZml4OiB0cnVlfSk7XG4vLyByZXR1cm4gY3VycmVudEhvdXJBbmRNaW51dGU7XG4vLyBjb25zdCBzdG9wd2F0Y2ggPSBuZXcgU3RvcHdhdGNoKCk7XG5cbi8vIGNvbnN0IHN0YXJ0ID0gc3RvcHdhdGNoLnN0YXJ0KCk7XG5cbi8vIHNldFRpbWVvdXQoKCkgPT4ge1xuLy8gICAgIHN0b3B3YXRjaC5zdG9wKCk7XG4vLyAgICAgY29uc3QgZWxhcHNlZCA9IHN0b3B3YXRjaC5lbGFwc2VkKCk7XG4gICAgXG4vLyB9LCA0MDAwKTtcblxucmV0dXJuICdoZWxsbyBhbmQgZ29vZGJ5ZSBkZXByaWNhdGVkJ1xuXG59XG5cbi8vIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciBzdGFydCBidXR0b25cbmZ1bmN0aW9uIHN0YXJ0QnRuRXZlbnRIYW5kbGVyKCkge1xuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtc3RvcC1idXR0b24nKVxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5DcmVhdGVGb3JtRGlhbG9nKCk7XG4gICAgXG4gICAgfSlcbiAgICB9XG5cbi8vIGNyZWF0ZSB0YXNrIGl0ZW1zIGNvbnRhaW5lciBcbmZ1bmN0aW9uIHRhc2tJdGVtc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5pZCA9ICd0YXNrLWl0ZW1zLWNvbnRhaW5lcidcblxucmV0dXJuIGNvbnRhaW5lcjtcbn1cbi8vIGNyZWF0ZSB0YXNrIGl0ZW1cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKGFycmF5KSB7XG5jb25zdCB0YXNrSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAndGFzay1pdGVtcy1jb250YWluZXInKTtcbiAgIGZvciAobGV0IGkgPSAwO2kgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gYXJyYXlbaV07XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtLWVsZW1lbnQnKVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuaWQgPSBpICsxO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIGRpdi5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uJztcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgZGl2Mi5pZCA9ICd0YXNrLXByb2plY3QnO1xuICAgICAgICBkaXYyLnRleHRDb250ZW50ID0gaXRlbS5wcm9qZWN0O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYzLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICBkaXYzLmlkID0gJ3Rhc2stdGltZS1zcGVudCc7XG4gICAgICAgIGRpdjMudGV4dENvbnRlbnQgPSBpdGVtLnNwZW50VGltZTtcblxuICAgICAgICAvLyBkaXYgZm9yIHN0YXJ0IGFuZCBzdG9wIGJ1dHRvblxuICAgICAgICBjb25zdCBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kaXY0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29tcG9uZW50JylcbmRpdjQuaWQgPSAndGFzay1zdGFydCc7XG5kaXY0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcblxuXG5cbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdjIpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkaXYzKVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2NClcbiAgICAgICAgXG4gICAgICAgIHRhc2tJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbUVsZW1lbnQpXG4gICAgfVxuICAgICAgICBcbiAgICByZXR1cm4gdGFza0l0ZW1zQ29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGUgc3RhcnQgYW5kIHN0b3AgYnV0dG9uIGNvbXBvbmVudFxuZnVuY3Rpb24gc3RhcnRTdG9wQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5pZCA9ICdzdGFydC1zdG9wLWJ1dHRvbic7XG5jb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbmgzLnRleHRDb250ZW50ID0gJ1N0YXJ0JztcblxuYnV0dG9uLmFwcGVuZENoaWxkKGgzKVxuXG4gICAgcmV0dXJuIGJ1dHRvbjtcbn1cblxuLy8gY3JlYXRlIGZvcm0gZGlhbG9nXG5mdW5jdGlvbiBjcmVhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG5kaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlhbG9nJylcbmRpYWxvZy5pZCA9ICdjcmVhdGUtZGlhbG9nJztcblxuY29uc3QgZGlhbG9nQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kaWFsb2dDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1jb250ZW50JylcblxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS50ZXh0Q29udGVudCA9ICcmdGltZXM7JztcbmNsb3NlLmlkID0gJ2NyZWF0ZS1jbG9zZSc7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ05ldyBUYXNrJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAnY3JlYXRlLWZvcm0nXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ3RleHQnKVxuXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLXByb2plY3QnLCdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG5pbnB1dDIuaWQgPSAnY3JlYXRlLXByb2plY3QnO1xuXG5jb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24xLnZhbHVlID0gJ25vLXByb2plY3QnXG5vcHRpb24xLnRleHQgPSAnTm8gUHJvamVjdCc7XG5jb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24yLnZhbHVlID0gJ2NyZWF0ZS1wcm9qZWN0J1xub3B0aW9uMi50ZXh0ID0gJ0NyZWF0ZSBQcm9qZWN0JztcblxuXG5jb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbmlucHV0My5pZCA9ICdjcmVhdGUtc3RhcnQtdGltZSdcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbnN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXQuaWQgPSAnY3JlYXRlLXN1Ym1pdC1idXR0b24nO1xuc3VibWl0LnRleHRDb250ZW50ID0gJ0RvbmUnXG5cbi8vIGFwcGVuZCBlbGVtZW50cyBzdGFydCBmcm9tIGxvd2VzdCBjaGlsZFxuZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRlbnQpXG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kQ2hpbGQobGFiZWwxKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQxKVxuZm9ybS5hcHBlbmRDaGlsZChsYWJlbDIpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDIpXG4vLyBmb3JtLmFwcGVuZENoaWxkKGxhYmVsMyk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MylcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuaW5wdXQyLmFwcGVuZENoaWxkKG9wdGlvbjEpXG5pbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMilcblxucmV0dXJuIGRpYWxvZztcbn1cblxuLy8gdXBkYXRlIGZvcm0gZGlhbG9nXG5mdW5jdGlvbiB1cGRhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG5kaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlhbG9nJylcbmRpYWxvZy5pZCA9ICd1cGRhdGUtZGlhbG9nJztcblxuY29uc3QgZGlhbG9nQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kaWFsb2dDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1jb250ZW50JylcblxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS50ZXh0Q29udGVudCA9ICcmdGltZXM7JztcbmNsb3NlLmlkID0gJ3VwZGF0ZS1jbG9zZSc7XG5cbmNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbnJlbW92ZS5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxucmVtb3ZlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5yZW1vdmUuaWQgPSAndXBkYXRlLWRlbGV0ZSc7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ1VwZGF0ZSBUYXNrJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAndXBkYXRlLWZvcm0nXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgndXBkYXRlLWRlc2NyaXB0aW9uJywgJ0RlZXogYXNpYW4gbnV0eicpO1xuY29uc3QgaW5wdXQxID0gY3JlYXRlSW5wdXQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicsICd0ZXh0JylcblxuY29uc3QgbGFiZWwyID0gY3JlYXRlTGFiZWwoJ3VwZGF0ZS1wcm9qZWN0JywnUHJvamVjdCcpO1xuY29uc3QgaW5wdXQyID0gY3JlYXRlSW5wdXQoJ3VwZGF0ZS1wcm9qZWN0JywndGV4dCcpO1xuXG5jb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbmlucHV0My5pZCA9ICd1cGRhdGUtc3RhcnQtdGltZSdcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbnN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXQuaWQgPSAndXBkYXRlLXN1Ym1pdC1idXR0b24nO1xuc3VibWl0LnRleHRDb250ZW50ID0gJ0RvbmUnXG5cbi8vIGFwcGVuZCBlbGVtZW50cyBzdGFydCBmcm9tIGxvd2VzdCBjaGlsZFxuZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRlbnQpXG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQocmVtb3ZlKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kQ2hpbGQobGFiZWwxKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQxKVxuZm9ybS5hcHBlbmRDaGlsZChsYWJlbDIpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDIpXG4vLyBmb3JtLmFwcGVuZENoaWxkKGxhYmVsMyk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MylcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuXG5yZXR1cm4gZGlhbG9nO1xufVxuLy8gY3JlYXRlIHByb2plY3QgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG5kaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlhbG9nJylcbmRpYWxvZy5pZCA9ICdjcmVhdGUtcHJvamVjdC1kaWFsb2cnO1xuXG5jb25zdCBkaWFsb2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpYWxvZ0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNvbnRlbnQnKVxuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbmNsb3NlLnRleHRDb250ZW50ID0gJyZ0aW1lczsnO1xuY2xvc2UuaWQgPSAnY3JlYXRlLXByb2plY3QtY2xvc2UnO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdOZXcgUHJvamVjdCc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ2NyZWF0ZS1wcm9qZWN0LWZvcm0nXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLXByb2plY3QtbmFtZScsICdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgnY3JlYXRlLWNyZWF0ZS1wcm9qZWN0LW5hbWUnLCAndGV4dCcpXG5pbnB1dDEucGxhY2Vob2xkZXIgPSAnRW50ZXIgYSBwcm9qZWN0IG5hbWUnO1xuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbnN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXQuaWQgPSAnY3JlYXRlLXByb2plY3Qtc3VibWl0LWJ1dHRvbic7XG5zdWJtaXQudGV4dENvbnRlbnQgPSAnRG9uZSdcblxuLy8gYXBwZW5kIGVsZW1lbnRzIHN0YXJ0IGZyb20gbG93ZXN0IGNoaWxkXG5kaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGVudClcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChoMik7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuZm9ybS5hcHBlbmRDaGlsZChsYWJlbDEpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDEpXG5mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcblxucmV0dXJuIGRpYWxvZztcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGFiZWwoZm9yQXR0cmlidXRlLHRleHRDb250ZW50KSB7XG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpXG4gICAgbGFiZWwuaHRtbEZvciA9IGZvckF0dHJpYnV0ZTtcbmxhYmVsLnRleHRDb250ZW50ID0gdGV4dENvbnRlbnQ7XG5cbnJldHVybiBsYWJlbDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0KGlkQXR0cmlidXRlLHR5cGVBdHRyaWJ1dGUpe1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG5pbnB1dC5pZCA9IGlkQXR0cmlidXRlO1xuaW5wdXQudHlwID0gdHlwZUF0dHJpYnV0ZTtcblxucmV0dXJuIGlucHV0OyBcbn1cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBvcGVuIGZvcm0gZGlhbG9nXG5mdW5jdGlvbiBvcGVuQ3JlYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRpYWxvZycpXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgcmV0dXJuIGRpYWxvZztcbn1cbmZ1bmN0aW9uIG9wZW5VcGRhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGlhbG9nJylcbiAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICByZXR1cm4gZGlhbG9nO1xufVxuZnVuY3Rpb24gY2xvc2VDcmVhdGVEaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1kaWFsb2cnKVxuICAgIGRpYWxvZy5jbG9zZSgpXG59XG5mdW5jdGlvbiBjbG9zZVVwZGF0ZURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cbmZ1bmN0aW9uIG9wZW5DcmVhdGVQcm9qZWN0Rm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QtZGlhbG9nJylcbiAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICByZXR1cm4gZGlhbG9nO1xufVxuZnVuY3Rpb24gY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1kaWFsb2cnKVxuICAgIGRpYWxvZy5jbG9zZSgpXG59XG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0YXNrIGl0ZW1zIGZyb20gY29udGFpbmVyXG5mdW5jdGlvbiByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCkge1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staXRlbXMtY29udGFpbmVyJylcblxuZm9yIChsZXQgaSA9IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLTE7IGkgPj0gMDsgaS0tKSB7XG5jb25zdCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbltpXTtcbmNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZClcblxufVxufVxuLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0YXNrcyBjb250YWluZXIgZWxlbWVudHNcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tzQ29udGFpbmVyKGFycmF5TmFtZSkge1xuY29uc3QgdXBkYXRlID0gb3V0cHV0LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tJdGVtKGFycmF5TmFtZSkpXG5cbnJldHVybiB1cGRhdGU7XG5cbn1cbi8vIHByb2plY3QgZmlsdGVyIHNlbGVjdCBkb20gZWxlbWVudFxuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCgpIHtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5jb250YWluZXIuaWQgPSAncHJvamVjdC1maWx0ZXItY29udGFpbmVyJ1xuXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgncHJvamVjdC1maWx0ZXInLCdGaWx0ZXInKTtcbmNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5pbnB1dDIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXByb2plY3QnKTtcbmlucHV0Mi5pZCA9ICdwcm9qZWN0LWZpbHRlcic7XG5cbmNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbjEudmFsdWUgPSAnYWxsLXRhc2tzJ1xub3B0aW9uMS50ZXh0ID0gJ0FsbCBUYXNrcyc7XG5jb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24yLnZhbHVlID0gJ2NyZWF0ZS1wcm9qZWN0J1xub3B0aW9uMi50ZXh0ID0gJ0NyZWF0ZSBQcm9qZWN0JztcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsMilcbmNvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dDIpXG5pbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMSlcbmlucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24yKVxuXG5yZXR1cm4gY29udGFpbmVyO1xufVxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7XG4gICAgc3RhcnRCdG5FdmVudEhhbmRsZXIsXG50YXNrSXRlbXNDb250YWluZXIsXG5jcmVhdGVUYXNrSXRlbSxcbnN0YXJ0U3RvcEJ1dHRvbixcbmNyZWF0ZUZvcm1EaWFsb2csXG51cGRhdGVGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZUZvcm1EaWFsb2csXG5vcGVuVXBkYXRlRm9ybURpYWxvZyxcbmNsb3NlQ3JlYXRlRGlhbG9nLFxuY2xvc2VVcGRhdGVEaWFsb2csXG5nZXRDdXJyZW50SG91ckFuZE1pbnV0ZSxcbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIsXG51cGRhdGVUYXNrc0NvbnRhaW5lcixcbmNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nLFxuY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCxcblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbmZvcm1hdCwgc2V0RGF5T2ZZZWFyLCBzdGFydE9mUXVhcnRlclxufSBmcm9tICdkYXRlLWZucydcblxuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7XG4gICAgc3RhcnRCdG5FdmVudEhhbmRsZXIsXG4gICAgdGFza0l0ZW1zQ29udGFpbmVyLFxuY3JlYXRlVGFza0l0ZW0sXG5zdGFydFN0b3BCdXR0b24sXG5jcmVhdGVGb3JtRGlhbG9nLFxub3BlbkZvcm1EaWFsb2csXG5nZXRDdXJyZW50SG91ckFuZE1pbnV0ZSxcbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIsXG51cGRhdGVUYXNrRWxlbWVudHMsXG51cGRhdGVUYXNrc0NvbnRhaW5lcixcbmNsb3NlRGlhbG9nLFxudXBkYXRlRm9ybURpYWxvZyxcbmNsb3NlQ3JlYXRlRGlhbG9nLFxuY2xvc2VVcGRhdGVEaWFsb2csXG5vcGVuVXBkYXRlRm9ybURpYWxvZyxcbmNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nLFxuY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCxcblxufSBmcm9tICcuL3VzZXItaW50ZXJmYWNlJ1xuXG4vLyBpbXBvcnQgb2JqZWN0IHJlbGF0ZWQgbW9kdWxlc1xuaW1wb3J0IHtcbmNyZWF0ZVRhc2tPYmplY3QsXG4gICAgYWRkVGFza1RvQW5BcnJheSxcbiAgICBjcmVhdGVBcnJheUZhY3RvcnksXG4gICAgZG93blNoaWZ0SWRUb0FycmF5SW5kZXgsXG4gICAgXG59IGZyb20gJy4vdGFzay1vYmplY3QtY29tcG9uZW50J1xuXG5cbmNvbnN0IGFsbFRhc2tzQXJyYXkgPSBjcmVhdGVBcnJheUZhY3RvcnkoKTtcbi8vIGFsbFRhc2tzQXJyYXkuYWRkSXRlbShcbi8vICAgICAgICAgICAgIHtcbi8vICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYnVpbGQgdGFzayBpdGVtIGNvbXBvbmVudCBhbmQgd3JpdGUgYSByZWFsbHkgbG9uZyBkZXNjcmlwdGlvbiBzbyB0aGF0IHdlIGNhbiBzZWUgd2hhdCB0aGUgYWZmZWN0IHdpbGwgYmUnLFxuLy8gICAgICAgICAgICAgcHJvamVjdDogJ0phdmFzY3JpcHQnLFxuLy8gICAgICAgICAgICAgdGltZVNwZW50OiAnMDA6Mjg6MjMnLFxuLy8gICAgICAgICAgICAgbXNBcnJheTogW10sXG4gICAgXG4vLyAgICAgICAgIH1cbi8vICk7XG4vLyBhbGxUYXNrc0FycmF5LmFkZEl0ZW0oXG4vLyAgICAgICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYnVpbGQgdG8gZG8gdGFzayBhcHAnLFxuLy8gICAgICAgICAgICAgICAgIHByb2plY3Q6ICdKYXZhc2NyaXB0Jyxcbi8vICAgICAgICAgICAgICAgICB0aW1lU3BlbnQ6ICcwMDo0MzoyMicsXG4vLyAgICAgICAgICAgICB9XG4vLyApXG5cblxuLy8gYWxsIGRvbSByZWxhdGVkIGZ1bmN0aW9ucyBnbyBoZXJlXG4vLyBhcHBlbmQgdGFzayBpdGVtcyBjb250YWluZXIgdG8gb3V0cHV0XG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jylcbm91dHB1dC5hcHBlbmRDaGlsZCh0YXNrSXRlbXNDb250YWluZXIoKSlcbi8vIGFwcGVuZCB0YXNrIGl0ZW1zIHRvIHRhc2sgaXRlbXMgY29udGFpbmVyXG4vLyBvdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0l0ZW0oYWxsVGFza3NBcnJheS5nZXRBcnJheSgpKSlcbi8vIGFwcGVuZCBmb3JtIHRvIGh0bWxcbm91dHB1dC5hcHBlbmRDaGlsZChjcmVhdGVGb3JtRGlhbG9nKCkpXG5vdXRwdXQuYXBwZW5kQ2hpbGQodXBkYXRlRm9ybURpYWxvZygpKVxub3V0cHV0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKCkpXG5cblxuLy8gYXBwZW5kIHN0YXJ0IHN0b3AgYnV0dG9uIHRvIGJvZHkgXG5vdXRwdXQuYXBwZW5kQ2hpbGQoc3RhcnRTdG9wQnV0dG9uKCkpXG5cbi8vIGFwcGVuZCBwcm9qZWN0IGZpbHRlciBmZWF0dXJlIHRvIGRvbVxub3V0cHV0LmFwcGVuZENoaWxkKGNyZWF0ZVByb2plY3RGaWx0ZXJTZWxlY3QoKSlcblxuLy8gc3RhcnQgYnRuIGV2ZW50IGhhbmRsZXJcbnN0YXJ0QnRuRXZlbnRIYW5kbGVyKClcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG4vLyBldmVudCBoYW5kbGVyIGZvciBpbml0aWF0aW5nIHVwZGF0aW5nIHRhc2sgZWxlbWVudHNcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLnRhc2staXRlbScpKSB7XG5cbmNvbnN0IHNoaWZ0ZWRJbmRleCA9IGRvd25TaGlmdElkVG9BcnJheUluZGV4KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbmNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbmNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W3NoaWZ0ZWRJbmRleF07XG5cbi8vIHNldCB0aGUgY3VycmVudCB0YXNrIG9iamVjdCBpbmRleCB2YWx1ZSB0byBsb2NhbCBzdG9yYWdlXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFRhc2snLCBzaGlmdGVkSW5kZXgpXG5cbi8vIHJldHJpZXZlIGxvY2FsIHN0b3JhZ2UgdmFsdWVzIHRvIHBvcHVsYXRlIGRvbSBlbGVtZW50cyBcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuZGVzY3JpcHRpb24udmFsdWUgPSBzZWxlY3RlZE9iamVjdC5kZXNjcmlwdGlvblxuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHJvamVjdCcpO1xucHJvamVjdC52YWx1ZSA9IHNlbGVjdGVkT2JqZWN0LnByb2plY3Q7XG5cbm9wZW5VcGRhdGVGb3JtRGlhbG9nKClcbi8vIHBvcHVsYXRlRm9ybUlucHV0cyhjdXJyZW50VGFzaylcbi8vIGNvbnNvbGUubG9nKGN1cnJlbnRUYXNrKTtcbiAgICB9XG5cbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50YXNrLWNvbXBvbmVudCcpICYmXG4gICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID09PSAnU3RvcCcpIHtcblxuICAgICAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKClcbiAgICAgICAgY29uc3Qgc2hpZnRlZEluZGV4ID0gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcblxuICAgICAgICAvLyBzZXQgdmFsdWUgdG8ga2V5IG9mIG9iamVjdCBpbiBhcnJheVxuICAgICAgICBpZiAoc2VsZWN0ZWRPYmplY3Quc3RhcnRUaW1lKXtcbiAgICAgICAgY29uc3QgZW5kVGltZVZhbHVlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIHNlbGVjdGVkT2JqZWN0LmVuZFRpbWUgPSBlbmRUaW1lVmFsdWU7XG5cbiAgICAgICAgLy8gZ2V0IHN0YXJ0IGFuZCBlbmQgdGltZSBpbiBtaWxsaXNlY29uZHMgYW5kIHB1c2ggdG8gYXJyYXlcbmNvbnN0IGVsYXBzZWRUaW1lID0gc2VsZWN0ZWRPYmplY3QuZW5kVGltZSAtIHNlbGVjdGVkT2JqZWN0LnN0YXJ0VGltZTtcbnNlbGVjdGVkT2JqZWN0Lm1zQXJyYXkucHVzaChlbGFwc2VkVGltZSk7XG5jb25zb2xlLmxvZyhlbGFwc2VkVGltZSk7XG4gICAgICAgIFxuc2VsZWN0ZWRPYmplY3Quc3RhcnRUaW1lID0gbnVsbDtcblxuLy8gc3VtIHVwIG1pbGxpc2Vjb25kcyBpdGVtcyBpbiBtcyBhcnJheVxubGV0IHRvdGFsTWlsbGlzZWNvbmRzID0gMDtcbmZvciAobGV0IGkgPSAwOyBpIDwgc2VsZWN0ZWRPYmplY3QubXNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHRvdGFsTWlsbGlzZWNvbmRzICs9IHNlbGVjdGVkT2JqZWN0Lm1zQXJyYXlbaV07XG4gICAgXG59XG4vLyBzZXQgcmVzdWx0IHRvIG9iamVjdCBwcm9wZXJ0eVxuc2VsZWN0ZWRPYmplY3Quc3BlbnRUaW1lID0gdG90YWxNaWxsaXNlY29uZHM7XG5hbGVydCh0b3RhbE1pbGxpc2Vjb25kcyk7XG5cbi8vIGRpc3BsYXkgcmVzdWx0IG9uIGRvbSBlbGVtZW50IFxuY29uc3QgcHJldmlvdXNTaWJsaW5nID0gZXZlbnQudGFyZ2V0LnByZXZpb3VzU2libGluZztcbnByZXZpb3VzU2libGluZy50ZXh0Q29udGVudCA9IHRvdGFsTWlsbGlzZWNvbmRzO1xuY29uc29sZS5sb2cocHJldmlvdXNTaWJsaW5nKTtcblxuICAgICAgICB9XG4gICAgICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9ICdTdGFydCc7XG4gICAgICAgIFxuICAgICAgIC8vIGNvbnZlcnQgYXJyYXkgYmFjayBpbnRvIHN0cmluZ1xuICAgICAgIGNvbnN0IHVwZGF0ZWRBcnJheVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSlcbiAgICAgICBcbiAgICAgICAvLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxuICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUYXNrcycsIHVwZGF0ZWRBcnJheVN0cmluZylcbiAgICAgICBcbiAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdCk7XG4gICAgICAgY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuICAgICAgIHVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKVxuXG4vLyB3aGVuIHdlIGNsaWNrIHVwZGF0ZSB0YXNrIGVsZW1lbnQgaXQgcG9wdWxhdGVzIHRoZSBmb3JtIGVsZW1lbnQgd2l0aCB0aGUgY29ycmVzcG9uZGluZyB0YXNrIGZyb20gdGhlIGxvY2FsIHN0cm9hZ2Ugb2JqZWN0LlxuLy8gYnV0IGZvciBzb21lIHJlYXNvbiBpZiB3ZSBjbG9zZSB0aGUgZm9ybSBkaWFsb2cgaXQgd2lsbCBjaGFuZ2UgdGhlIHRleHQgY29udGVudCBvZiBkZXNjcmlwdGlvbiB0byBzdG9wIG9yIHN0YXJ0IFxuLy8gd2Ugd2FudCB0aGUgc3RhcnQgYnV0dG9uIHRvIHJlc2V0IHRoZSBjb3JyZXNwb25kaW5nIHRhc2sgb2JqZWN0IHdpdGggbnVsbCBcbi8vIHRoZW4gc2V0IHRoZSBzdGFydCB0aW1lIGtleSB2YWx1ZSB0byBhIG5ldyBkYXRlIG1ldGhvZFxuLy8gdGhlIHN0b3AgYnV0dG9uIGFkZHMgbmV3IGRhdGUgdG8gdGhlIGVuZCB0aW1lIGtleSB2YWx1ZSBcbi8vIGl0IHRoZW4gZG9lcyBzb21lIG9wZXJhdGlvbnMgYW5kIGNhbGN1bGF0aW9ucyBzdWNoIGFzXG4vLyBzdG9yZSB0aGUgZGlmZmVyZW5jZSBpbiBlbmQgYW5kIHN0YXJ0IHRpbWUgaW4gbWlsbGlzZWNvbmRzIG9mIHRoZSBjdXJyZW50IGtleSB2YWx1ZXNcbi8vIHB1c2ggdGhlIG1pbGxpc2Vjb25kcyB2YWx1ZSB0byB0aGUgbXMgYXJyYXkgXG4vLyBsb29wIHRocm91Z2ggbXMgYXJyYXkgYW5kIHN1bSB1cCBhbGwgaXRlbXMgXG4vLyBzdG9yZSBvciB1cGRhdGUgdG90YWwgdGltZSBpbiBtaWxsaXNlY29uZHNcbi8vIGdldCB0b3RhbCB0aW1lIGluIG1pbGxpc2Vjb25kcyBhbmQgY29udmVydCB0byB0b3RhbCBzZWNvbmRzIFxuLy8gZm9ybWF0IHRvdGFsIHNlY29uZHMgaW50byBob3VyIGhvdXIgbWludXRlIG1pbnV0ZSBzZWNvbmQgc2Vjb25kIGZvcm1hdFxuLy8gZGlzcGxheSBmb3JtYXR0ZWQgdG90YWwgdGltZSBpbiB0aGUgZG9tIGVsZW1lbnRcbi8vIGNhbGwgZnVuY3Rpb24gdG8gcmVwb3B1bGF0ZSB0aGUgdGFzayBpdGVtcyBjb250YWluZXIgd2l0aCB1cGRhdGVkIHRhc2sgZWxlbWVudHNcblxuICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNvbnZlcnQgZWxlbWVudCBpZCB0byBhcnJheSBpbmRleCB2YWx1ZVxuICAgICAgICBjb25zdCBzaGlmdGVkSW5kZXggPSBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIC8vIGdldCB0aGUgYWxsIHRhc2tzIGFycmF5IHN0b3JpbmcgdGFzayBvYmplY3RzXG4gICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuICAgICAgICAvLyBjb252ZXJ0IHN0cmluZ2VkIGFycmF5IHRvIG5vcm1hbCBhcnJheVxuICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgICAgICAvLyBnZXQgdGhlIGNvcnJlbGF0ZWQgdGFzayBvYmplY3RcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcblxuICAgICAgICAvLyBzZXQgdmFsdWUgdG8ga2V5IG9mIG9iamVjdCBpbiBhcnJheVxuY29uc3Qgc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gc2VsZWN0ZWRPYmplY3Quc3RhcnRUaW1lID0gc3RhcnRUaW1lO1xuXG4vLyBjb252ZXJ0IGFycmF5IGJhY2sgaW50byBzdHJpbmdcbmNvbnN0IHVwZGF0ZWRBcnJheVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSlcblxuLy8gc3RvcmUgdGhlIHVwZGF0ZWQgYXJyYXkgYmFjayBpbnRvIGxvY2FsIHN0b3JhZ2VcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUYXNrcycsIHVwZGF0ZWRBcnJheVN0cmluZylcblxuY29uc29sZS5sb2coc2VsZWN0ZWRPYmplY3QpO1xuY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuICAgICAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSAnU3RvcCc7XG4gICAgICAgIFxuICAgIH1cbn0pXG59XG51cGRhdGVUYXNrRWxlbWVudEV2ZW50SGFuZGxlcigpXG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCBvYmplY3QgdG8gbG9jYWwgc3RvcmFnZSBhcnJheVxuZnVuY3Rpb24gYWRkT2JqZWN0VG9Mb2NhbFN0b3JhZ2VBcnJheShrZXksIG9iamVjdCkge1xuICAgIC8vIGNoZWNrcyBpZiBrZXkgZXhpc3RzIGluIHN0b3JhZ2Ugb3IgY3JlYXRlcyBvbmUgd2l0aCBlbXB0eSBhcnJheVxuICAgIC8vIGFuZCBzdG9yZXMgaXQgaW4gYSB2YXJpYWJsZVxuY29uc3QgZXhpc3RpbmdBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgW107XG4vLyBwdXNoIHRoZSBvYmplY3QgdG8gYW4gYXJyYXkgaW4gc3RvcmFnZVxuZXhpc3RpbmdBcnJheS5wdXNoKG9iamVjdCk7XG4vLyBzZXQgdGhlIGFycmF5IHdpdGggbmV3IG9iamVjdCBpbiBrZXkgb2Ygc3RvcmFnZSBcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdBcnJheSkpXG5cbn1cblxuLy8gZnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gc3VibWl0XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBkb21cbiAgICAgICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0MS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgIC8vIGNvbnN0IHN0YXJ0VGltZSA9IGdldEN1cnJlbnRIb3VyQW5kTWludXRlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgbmV3IHRhc2sgb2JqZWN0XG4gICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrT2JqZWN0KGRlc2NyaXB0aW9uLHByb2plY3QpXG4gICAgICAgIC8vIGFkZFRhc2tUb0FuQXJyYXkodGFzayxhbGxUYXNrc0FycmF5KVxuICAgICAgICAvLyBhbGxUYXNrc0FycmF5LmFkZEl0ZW0odGFzaylcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzQXJyYXknLCBKU09OLnN0cmluZ2lmeSh0YXNrKSlcbmFkZE9iamVjdFRvTG9jYWxTdG9yYWdlQXJyYXkoJ2FsbFRhc2tzJywgdGFzaylcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG4gICAgICAgIGFsZXJ0KCdjcmVhdGlvbiBldmVudCBoYW5kbGVyJylcbiAgICAgICAgICAgIFxuICAgICAgICAvLyB1cGRhdGUgZG9tIHdpdGggbmV3IHRhc2tcbiAgICAgICAgICAgIC8vIHVwZGF0ZVRhc2tzQ29udGFpbmVyKGFsbFRhc2tzQXJyYXkuZ2V0QXJyYXkoKSlcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzKSlcbiAgICAgICAgXG4gICAgICAgICAgICAvLyByZXNldCBmb3JtIGlucHV0c1xuICAgICAgICBpbnB1dDEudmFsdWUgPSAnJztcbiAgICAgICAgaW5wdXQyLnZhbHVlID0gJyc7ICAgICAgICBcblxuICAgICAgICBjbG9zZUNyZWF0ZURpYWxvZygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICBcblxuICAgICAgICAgICAgLy8gZXZlbnQgaGFuZGxlciBmb3Igc3VibWl0IHVwZGF0ZVxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlRm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXQxLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBpbnB1dDIudmFsdWU7XG4gICAgICAgICAgICAgICAgXG4vLyBnZXQgaW5kZXggb2YgY3VycmVudCB0YXNrXG5jb25zdCBjdXJyZW50VGFzayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VGFzaycpXG5cbi8vIHVwZGF0ZSB0aGUgdGFzayBvYmplY3QgaW4gbG9jYWwgc3N0b3JhZ2VcbiAgICAgICAgXG4gICAgICAgIC8vIGdldCB0aGUgYWxsIHRhc2tzIGFycmF5IHN0b3JpbmcgdGFzayBvYmplY3RzXG4gICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuICAgICAgICAvLyBjb252ZXJ0IHN0cmluZ2VkIGFycmF5IHRvIG5vcm1hbCBhcnJheVxuICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgICAgICAvLyBnZXQgdGhlIGNvcnJlbGF0ZWQgdGFzayBvYmplY3RcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbY3VycmVudFRhc2tdO1xuXG4gICAgICAgIGFsZXJ0KGN1cnJlbnRUYXNrKVxuICAgICAgICAvLyBzZXQgaW5wdXQgdmFsdWVzIHRvIGxvY2FsIHN0b3JhZ2VcbiBzZWxlY3RlZE9iamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuIHNlbGVjdGVkT2JqZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuXG4vLyBjb252ZXJ0IGFycmF5IGJhY2sgaW50byBzdHJpbmdcbmNvbnN0IHVwZGF0ZWRBcnJheVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSlcblxuLy8gc3RvcmUgdGhlIHVwZGF0ZWQgYXJyYXkgYmFjayBpbnRvIGxvY2FsIHN0b3JhZ2VcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUYXNrcycsIHVwZGF0ZWRBcnJheVN0cmluZylcblxuY29uc29sZS5sb2coc2VsZWN0ZWRPYmplY3QpO1xuY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuXG5hbGVydCgndXBkYXRlIGV2ZW50IGhhbmRsZXInKVxuXG4gICAgICAgIHVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbnB1dDEudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGlucHV0Mi52YWx1ZSA9ICcnOyAgICAgICAgXG4gICAgXG4gICAgICAgICAgICBjbG9zZVVwZGF0ZURpYWxvZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4vLyBhdHRhdGNoIGV2ZW50IGxpc3RlbmVyIGFuZCBoYW5kbGVyIHRvIGNyZWF0ZSBhbmQgdXBkYXRlIGZvcm0gc3VibWl0ICAgIFxuICAgIGNvbnN0IGNyZWF0ZUZvcm0gPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZm9ybScpO1xuICAgIGNyZWF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVDcmVhdGVGb3JtU3VibWl0KSAgICBcbiAgICBjb25zdCB1cGRhdGVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1mb3JtJyk7XG51cGRhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlVXBkYXRlRm9ybVN1Ym1pdClcbiAgICBcbi8vIGZ1bmN0aW9uIHRvIHBvcHVsYXRlIGZvcm0gZGlhbG9nIHdpdGggY2xpY2tlZCB0YXNrXG5mdW5jdGlvbiBwb3B1bGF0ZUZvcm1JbnB1dHMoYXJyYXlJbmRleCkge1xubGV0IGlucHV0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGVzY3JpcHRpb24nKTtcbmlucHV0MS52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbFRhc2tzKVthcnJheUluZGV4XS5kZXNjcmlwdGlvbjtcblxubGV0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHJvamVjdCcpO1xuaW5wdXQyLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWxsVGFza3MpW2FycmF5SW5kZXhdLnByb2plY3Q7XG5cbmNvbnNvbGUubG9nKGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbFRhc2tzW2FycmF5SW5kZXhdKSk7XG59XG5cbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGNsb3NpbmcgY3JlYXRlIGZvcm0gZGlhbG9nXG5mdW5jdGlvbiBjbG9zZUNyZWF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtY2xvc2UnKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuY2xvc2VDcmVhdGVEaWFsb2coKTtcbiAgICB9KVxufVxuY2xvc2VDcmVhdGVGb3JtRGlhbG9nKCk7XG5cbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGNsb3NpbmcgdXBkYXRlIGZvcm0gZGlhbG9nXG5mdW5jdGlvbiBjbG9zZVVwZGF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtY2xvc2UnKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuY2xvc2VVcGRhdGVEaWFsb2coKTtcbiAgICB9KVxufVxuY2xvc2VVcGRhdGVGb3JtRGlhbG9nKCk7XG5cbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGRlbGV0aW5nIGEgdGFzayBvYmplY3RcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGVsZXRlJyk7XG5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VGFzaycpO1xuICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuICAgIGNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4gICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbY3VycmVudFRhc2tdO1xuLy8gcmVtb3ZlIG9iamVjdCBmcm9tIGFycmF5XG5kYXRhQXJyYXkuc3BsaWNlKGN1cnJlbnRUYXNrLDEpXG5jb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG4vLyBjb252ZXJ0IGFycmF5IGJhY2sgaW50byBzdHJpbmdcbmNvbnN0IHVwZGF0ZWRBcnJheVN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSlcbiAgICAgICBcbi8vIHN0b3JlIHRoZSB1cGRhdGVkIGFycmF5IGJhY2sgaW50byBsb2NhbCBzdG9yYWdlXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVGFza3MnLCB1cGRhdGVkQXJyYXlTdHJpbmcpXG5cbi8vIHJlbmRlciBkb20gd2l0aCB1cGRhdGVkIHRhc2sgb2JqZWN0c1xudXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpXG5cblxuY2xvc2VVcGRhdGVEaWFsb2coKVxuXG59KVxuXG5cblxuLy8gZnVuY3Rpb24gdG8gY2hlY2sgaWYgc3RvcmFnZSBpcyBhdmFpbGFibGUgXG5mdW5jdGlvbiBzdG9yYWdlQXZhaWxhYmxlKHR5cGUpIHtcbiAgICBsZXQgc3RvcmFnZTtcbiAgICB0cnkge1xuICAgICAgc3RvcmFnZSA9IHdpbmRvd1t0eXBlXTtcbiAgICAgIGNvbnN0IHggPSBcIl9fc3RvcmFnZV90ZXN0X19cIjtcbiAgICAgIHN0b3JhZ2Uuc2V0SXRlbSh4LCB4KTtcbiAgICAgIHN0b3JhZ2UucmVtb3ZlSXRlbSh4KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIGUgaW5zdGFuY2VvZiBET01FeGNlcHRpb24gJiZcbiAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAoZS5jb2RlID09PSAyMiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLmNvZGUgPT09IDEwMTQgfHxcbiAgICAgICAgICAvLyB0ZXN0IG5hbWUgZmllbGQgdG9vLCBiZWNhdXNlIGNvZGUgbWlnaHQgbm90IGJlIHByZXNlbnRcbiAgICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIlF1b3RhRXhjZWVkZWRFcnJvclwiIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJOU19FUlJPUl9ET01fUVVPVEFfUkVBQ0hFRFwiKSAmJlxuICAgICAgICAvLyBhY2tub3dsZWRnZSBRdW90YUV4Y2VlZGVkRXJyb3Igb25seSBpZiB0aGVyZSdzIHNvbWV0aGluZyBhbHJlYWR5IHN0b3JlZFxuICAgICAgICBzdG9yYWdlICYmXG4gICAgICAgIHN0b3JhZ2UubGVuZ3RoICE9PSAwXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBcbiAgaWYgKHN0b3JhZ2VBdmFpbGFibGUoXCJsb2NhbFN0b3JhZ2VcIikpIHtcbiAgICAvLyBZaXBwZWUhIFdlIGNhbiB1c2UgbG9jYWxTdG9yYWdlIGF3ZXNvbWVuZXNzXG4gICAgY29uc29sZS5sb2coJ1lpcHBlZScpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvbyBiYWQsIG5vIGxvY2FsU3RvcmFnZSBmb3IgdXNcbiAgICBjb25zb2xlLmxvZygnTnVwcGVlJyk7XG4gIH1cbiAgXG4gIFxuLy8gc2VsZWN0IG9wdGlvbiBmb3JtIGRyb3Bkb3duIGltcGxlbWVudGF0aW9uIFxuXG5jb25zdCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0JylcbmNvbnN0IHByb2plY3RPcHRpb25zID0gWydKYXZhc2NyaXB0JywgJ1B5dGhvbicsICdSdWJ5J11cblxuZnVuY3Rpb24gc2V0UHJvamVjdE9wdGlvbnMoKSB7XG5wcm9qZWN0T3B0aW9ucy5mb3JFYWNoKHByb2plY3RPcHRpb24gPT4ge1xuY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG5vcHRpb25FbGVtZW50LnZhbHVlID0gcHJvamVjdE9wdGlvbjtcbm9wdGlvbkVsZW1lbnQudGV4dCA9IHByb2plY3RPcHRpb247XG5cbnNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbn0pO1xufVxuXG5zZWxlY3RFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuY29uc3Qgc2VsZWN0ZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuaWYgKHNlbGVjdGVkRWxlbWVudCA9PT0gJ2NyZWF0ZS1wcm9qZWN0Jyl7XG4gICAgYWxlcnQoc2VsZWN0ZWRFbGVtZW50KVxub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKClcblxufVxuXG59KVxuLy8gaGFuZGxlIGNyZWF0ZSBwcm9qZWN0IGZvcm0gc3VibWl0XG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1mb3JtJylcbmNyZWF0ZVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNyZWF0ZS1wcm9qZWN0LW5hbWUnKS52YWx1ZTtcbnByb2plY3RPcHRpb25zLnB1c2gocHJvamVjdE5hbWVJbnB1dClcbi8vIGNhbGwgZnVuY3Rpb24gdG8gdXBkYXRlIHByb2plY3Qgb3B0aW9ucyBcbnNldFByb2plY3RPcHRpb25zKCk7XG5cbmNsb3NlQ3JlYXRlUHJvamVjdERpYWxvZygpXG5cbn0pXG5zZXRQcm9qZWN0T3B0aW9ucygpO1xuXG4vLyBmdW5jdGlvbiB0byBjbGVhciBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBcbn1cbi8vIGNsZWFyTG9jYWxTdG9yYWdlKClcblxuLy8gY2FsbCBvbiBwYWdlIGxvYWQgdG8gZGlzcGxheSB0YXNrcyBpbiBsb2NhbCBzdG9yYWdlXG4vLyB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrc0FycmF5KSlcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzKSlcblxuLy8gZnVuY3Rpb24gdG8gc3RhcnQgdGltZXIgdGhhdCB0YWtlcyBvYmplY3QgYXMgYXJndW1lbnRcbmZ1bmN0aW9uIHN0YXJ0VGltZXIob2JqZWN0KSB7XG5cbn1cblxuXG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrcykpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==