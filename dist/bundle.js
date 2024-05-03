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
    static idCounter = 0;

    constructor(description, project) {
        this.id = Task.idCounter++;
        this.description = description;
        this.project = project;
    }
}

function createTaskObject(description,project) {
    const task = new Task(description,project)

    console.log(task);
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
// input2.appendChild(option2)

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

// event listener and handler for project filter feature
const projectFilterSelect = document.getElementById('project-filter-container')
function handleProjectFilterSelect() {
    
    // get select element
const selectElement = document.getElementById('project-filter')
// remove children option elements 
for (let i = selectElement.children.length -1; i >= 1; i--) {
const child = selectElement.children[i];
selectElement.removeChild(child)

}

// get local storage array of task objects
const storedData = localStorage.getItem('allTasks')
// convert stringed array to normal array
const dataArray = JSON.parse(storedData);

const uniqueValues = [];
// loop through array object items and output the project value
for (let i = 0; i < dataArray.length; i++) {
let key = dataArray[i].project;

if (!uniqueValues.includes(key)) {

const optionElement = document.createElement('option')
optionElement.value = key;
optionElement.text = key;

selectElement.appendChild(optionElement)
uniqueValues.push(key)

}



}

}
projectFilterSelect.addEventListener('click', handleProjectFilterSelect)
projectFilterSelect.addEventListener('change', (event) => {
// get the value of selected option element
    const selectedItem = event.target.value;

// get the all tasks array
const allTasksArray = JSON.parse(localStorage.getItem('allTasks'))


const filteredObjects = [];
// loop through all tasks array 
for (let i = 0; i < allTasksArray.length; i++) {
    // const currentItem = allTasksArray[i];
    if (allTasksArray[i].project === selectedItem) {
        filteredObjects.push(allTasksArray[i])
    }
console.log(filteredObjects);
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)();
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(filteredObjects)
}


    
    });


// clearLocalStorage()



console.log(JSON.parse(localStorage.allTasks));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCO0FBQzVCOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQTRCQzs7Ozs7OztVQ3RYRDtVQUNBOztVQUVBO1VBQ0E7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O0FBQ0E7O0FBRUE7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxnQkFBZ0IsMEJBQTBCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2RUFBNEI7QUFDNUIscUVBQW9CO0FBQ3BCOzs7QUFHQTtBQUNBLEtBQUs7OztBQUdMOzs7O0FBSUEsK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2stb2JqZWN0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdXNlci1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdGFzay1pdGVtcy1jb250YWluZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcbn1cbi50YXNrLWl0ZW0tZWxlbWVudCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG5wYWRkaW5nLXRvcDogMjBweDtcbn1cbiN0YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZ3JpZC1jb2x1bW46IDIvOTtcblxufVxuI3Rhc2stcHJvamVjdCB7XG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiAyLzk7XG5cbn1cbiN0YXNrLXRpbWUtc3BlbnQge1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGdyaWQtY29sdW1uOiA5LzEwO1xufVxuI3Rhc2stc3RhcnQge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiA5O1xufVxuXG5cbiNzdGFydC1zdG9wLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcHVycGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5kaWFsb2cge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogIDVweCBzb2xpZCBwdXJwbGU7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NyZWF0ZS1kZXNjcmlwdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NyZWF0ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jY3JlYXRlLXN1Ym1pdC1idXR0b24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN1cGRhdGUtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN1cGRhdGUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3VwZGF0ZS1zdWJtaXQtYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7O0lBRVosc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxzQ0FBc0M7QUFDMUMsaUJBQWlCO0FBQ2pCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1Qjs7SUFFdkIsV0FBVztJQUNYLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsU0FBUztJQUNULFFBQVE7SUFDUixhQUFhO0lBQ2IsWUFBWTtJQUNaLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiN0YXNrLWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7XFxuICAgIFxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcbiAgICB3aGl0ZS1zcGFjZTogd3JhcDtcXG59XFxuLnRhc2staXRlbS1lbGVtZW50IHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbnBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG4jdGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAyLzk7XFxuXFxufVxcbiN0YXNrLXByb2plY3Qge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMi85O1xcblxcbn1cXG4jdGFzay10aW1lLXNwZW50IHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiA5LzEwO1xcbn1cXG4jdGFzay1zdGFydCB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogOTtcXG59XFxuXFxuXFxuI3N0YXJ0LXN0b3AtYnV0dG9uIHtcXG4gICAgYm9yZGVyOiA1cHggc29saWQgcHVycGxlO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgaGVpZ2h0OiAyMDBweDtcXG4gICAgd2lkdGg6IDIwMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmRpYWxvZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6ICA1cHggc29saWQgcHVycGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNjcmVhdGUtZGVzY3JpcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY3JlYXRlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY3JlYXRlLXN1Ym1pdC1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jdXBkYXRlLWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3VwZGF0ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3VwZGF0ZS1zdWJtaXQtYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuY2xhc3MgVGFzayB7XG4gICAgc3RhdGljIGlkQ291bnRlciA9IDA7XG5cbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgcHJvamVjdCkge1xuICAgICAgICB0aGlzLmlkID0gVGFzay5pZENvdW50ZXIrKztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlVGFza09iamVjdChkZXNjcmlwdGlvbixwcm9qZWN0KSB7XG4gICAgY29uc3QgdGFzayA9IG5ldyBUYXNrKGRlc2NyaXB0aW9uLHByb2plY3QpXG5cbiAgICBjb25zb2xlLmxvZyh0YXNrKTtcbiAgICByZXR1cm4gdGFza1xufVxuZnVuY3Rpb24gYWRkVGFza1RvQW5BcnJheShvYmplY3QsIGFycmF5TmFtZSkge1xuICAgIGFycmF5TmFtZS5wdXNoKG9iamVjdClcbn1cbi8vIGZhY3RvcnkgZm9yIHByb2plY3QgYXJyYXlzXG5mdW5jdGlvbiBjcmVhdGVBcnJheUZhY3RvcnkoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudFRhc2tJbmRleDsgXG5cbiAgICBmdW5jdGlvbiBnZXRBcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2snLCBKU09OLnN0cmluZ2lmeShpdGVtKSlcbiAgICB9XG4gICAgZnVuY3Rpb24gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoaWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGlkO1xuICAgICAgICBsZXQgc2hpZnRlZElkID0gcGFyc2VJbnQoKGVsZW1lbnQpIC0xKTtcblxucmV0dXJuIHNoaWZ0ZWRJZDtcbiAgICB9XG5mdW5jdGlvbiBnZXRBcnJheUl0ZW0oaW5kZXgpIHtcbiAgICByZXR1cm4gYXJyYXlbaW5kZXhdXG59XG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza0luZGV4KGluZGV4KSB7XG4gICAgY3VycmVudFRhc2tJbmRleCA9IGluZGV4O1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2tJbmRleCgpIHtcbiAgICByZXR1cm4gY3VycmVudFRhc2tJbmRleDtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tPYmplY3QoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufVxuZnVuY3Rpb24gc3RhcnQoaW5kZXgpIHtcbiAgICAgICAgYXJyYXlbaW5kZXhdLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cbn1cbmZ1bmN0aW9uIHN0b3AoaW5kZXgpIHtcbiAgICBhcnJheVtpbmRleF0uZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgXG59XG5mdW5jdGlvbiBlbGFwc2VkKGluZGV4KSB7XG4gICAgaWYgKCFhcnJheVtpbmRleF0uc3RhcnRUaW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcHdhdGNoIG5vdCB5ZXQgc3RhcnRlZCEnKVxuICAgIH1cbiAgICBpZiAoIWFycmF5W2luZGV4XS5lbmRUaW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcHdhdGNoIG5vdCB5ZXQgc3RvcHBlZCEnKVxuICAgIH1cblxuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGFycmF5W2luZGV4XS5lbmRUaW1lIC0gYXJyYXlbaW5kZXhdLnN0YXJ0VGltZTtcblxuICAgIHJldHVybiBtaWxsaXNlY29uZHM7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUobWlsbGlzZWNvbmRzKSB7XG4gICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgIGNvbnN0IHNlY29uZHMgPSB0b3RhbFNlY29uZHMgJSA2MDtcbiAgXG4gICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGAke3BhZFplcm8oaG91cnMpfToke3BhZFplcm8obWludXRlcyl9OiR7cGFkWmVybyhzZWNvbmRzKX1gO1xuICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICB9XG4gIFxuICBmdW5jdGlvbiBwYWRaZXJvKG51bWJlcikge1xuICAgIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZFNwZW50VGltZShpbmRleCkge1xubGV0IHRvdGFsTWlsbGlTZWNvbmRzID0gMDtcbmZvciAobGV0IGkgPSAwOyBpIDxhcnJheVtpbmRleF0ubXNBcnJheS5sZW5ndGg7IGkrKykge1xubGV0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0ubXNBcnJheVtpXTtcbnRvdGFsTWlsbGlTZWNvbmRzICs9IGVsZW1lbnQ7XG5cbn1cbnJldHVybiBmb3JtYXRUaW1lKHRvdGFsTWlsbGlTZWNvbmRzKTtcbn0gIFxuIGZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZShrZXksIGFycmF5KSB7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGFycmF5KVxuIH0gXG4gIFxuXG5cbnJldHVybiB7XG4gICAgZ2V0QXJyYXksXG4gICAgYWRkSXRlbSxcbiAgICBkb3duU2hpZnRJZFRvQXJyYXlJbmRleCxcbiAgICBnZXRBcnJheUl0ZW0sXG4gICAgc2V0Q3VycmVudFRhc2tJbmRleCxcbiAgICBnZXRDdXJyZW50VGFza0luZGV4LFxuICAgIGRlbGV0ZVRhc2tPYmplY3QsXG5zdGFydCxcbnN0b3AsXG5lbGFwc2VkLFxuZ2V0Rm9ybWF0dGVkU3BlbnRUaW1lLFxuc2V0TG9jYWxTdG9yYWdlLFxuXG5cbn07XG59XG5cbi8vIHNlY3Rpb24gZm9yIHByb2plY3Qgc2VsZWN0IG9wdGlvbiBkcm9wZG93biBpbXBsZW1lbnRhdGlvblxuXG5cblxuXG5cbi8vIHJlZmFjdG9yZWQgZmFjdG9yeSBtZXRob2RzIHRvIGdsb2JhbCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGRvd25TaGlmdElkVG9BcnJheUluZGV4KGlkKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGlkO1xuICAgIGxldCBzaGlmdGVkSWQgPSBwYXJzZUludCgoZWxlbWVudCkgLTEpO1xuXG5yZXR1cm4gc2hpZnRlZElkO1xufVxuZnVuY3Rpb24gc3RhcnQoaW5kZXgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuYWxsVGFza3NbaW5kZXhdLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cbn1cbmZ1bmN0aW9uIHN0b3AoaW5kZXgpIHtcbmFycmF5W2luZGV4XS5lbmRUaW1lID0gbmV3IERhdGUoKTtcblxufVxuZnVuY3Rpb24gZWxhcHNlZChpbmRleCkge1xuaWYgKCFhcnJheVtpbmRleF0uc3RhcnRUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdGFydGVkIScpXG59XG5pZiAoIWFycmF5W2luZGV4XS5lbmRUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdG9wcGVkIScpXG59XG5cbmNvbnN0IG1pbGxpc2Vjb25kcyA9IGFycmF5W2luZGV4XS5lbmRUaW1lIC0gYXJyYXlbaW5kZXhdLnN0YXJ0VGltZTtcblxucmV0dXJuIG1pbGxpc2Vjb25kcztcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShtaWxsaXNlY29uZHMpIHtcbmNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG5jb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XG5jb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG5jb25zdCBzZWNvbmRzID0gdG90YWxTZWNvbmRzICUgNjA7XG5cbmNvbnN0IGZvcm1hdHRlZFRpbWUgPSBgJHtwYWRaZXJvKGhvdXJzKX06JHtwYWRaZXJvKG1pbnV0ZXMpfToke3BhZFplcm8oc2Vjb25kcyl9YDtcbnJldHVybiBmb3JtYXR0ZWRUaW1lO1xufVxuXG5mdW5jdGlvbiBwYWRaZXJvKG51bWJlcikge1xucmV0dXJuIG51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbn1cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZFNwZW50VGltZShpbmRleCkge1xubGV0IHRvdGFsTWlsbGlTZWNvbmRzID0gMDtcbmZvciAobGV0IGkgPSAwOyBpIDxhcnJheVtpbmRleF0ubXNBcnJheS5sZW5ndGg7IGkrKykge1xubGV0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0ubXNBcnJheVtpXTtcbnRvdGFsTWlsbGlTZWNvbmRzICs9IGVsZW1lbnQ7XG5cbn1cbnJldHVybiBmb3JtYXRUaW1lKHRvdGFsTWlsbGlTZWNvbmRzKTtcbn0gIFxuXG5cblxuXG5leHBvcnQge1xuXG5jcmVhdGVUYXNrT2JqZWN0LFxuYWRkVGFza1RvQW5BcnJheSxcbmNyZWF0ZUFycmF5RmFjdG9yeSxcbmRvd25TaGlmdElkVG9BcnJheUluZGV4LFxuXG59IiwiaW1wb3J0IHtcbiAgICAgZm9ybWF0RGlzdGFuY2UsXG4gICAgICBzdWJEYXlzIFxuICAgIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cblxuaW1wb3J0IHtcbiAgICBTdG9wd2F0Y2gsXG4gICAgY3JlYXRlVGFza09iamVjdCxcbmFkZFRhc2tUb0FuQXJyYXksXG59IGZyb20gJy4vdGFzay1vYmplY3QtY29tcG9uZW50JztcblxuXG5cbi8vIGdldCB0aGUgY3VycmVudCB0aW1lIGluIGhvdXJzIGFuZCBtaW51dGVzXG5jb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3VycmVudEhvdXIgPSBub3cuZ2V0SG91cnMoKTtcbmNvbnN0IGN1cnJlbnRNaW51dGUgPSBub3cuZ2V0TWludXRlcygpO1xuZnVuY3Rpb24gZ2V0Q3VycmVudEhvdXJBbmRNaW51dGUoKSB7XG4gICAgLy8gY29uc3QgY3VycmVudEhvdXJBbmRNaW51dGUgPSBmb3JtYXREaXN0YW5jZShzdWJEYXlzKG5ldyBEYXRlKCksNiksIG5ldyBEYXRlKCksIHthZGRTdWZmaXg6IHRydWV9KTtcbi8vIHJldHVybiBjdXJyZW50SG91ckFuZE1pbnV0ZTtcbi8vIGNvbnN0IHN0b3B3YXRjaCA9IG5ldyBTdG9wd2F0Y2goKTtcblxuLy8gY29uc3Qgc3RhcnQgPSBzdG9wd2F0Y2guc3RhcnQoKTtcblxuLy8gc2V0VGltZW91dCgoKSA9PiB7XG4vLyAgICAgc3RvcHdhdGNoLnN0b3AoKTtcbi8vICAgICBjb25zdCBlbGFwc2VkID0gc3RvcHdhdGNoLmVsYXBzZWQoKTtcbiAgICBcbi8vIH0sIDQwMDApO1xuXG5yZXR1cm4gJ2hlbGxvIGFuZCBnb29kYnllIGRlcHJpY2F0ZWQnXG5cbn1cblxuLy8gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHN0YXJ0IGJ1dHRvblxuZnVuY3Rpb24gc3RhcnRCdG5FdmVudEhhbmRsZXIoKSB7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1zdG9wLWJ1dHRvbicpXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3BlbkNyZWF0ZUZvcm1EaWFsb2coKTtcbiAgICBcbiAgICB9KVxuICAgIH1cblxuLy8gY3JlYXRlIHRhc2sgaXRlbXMgY29udGFpbmVyIFxuZnVuY3Rpb24gdGFza0l0ZW1zQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmlkID0gJ3Rhc2staXRlbXMtY29udGFpbmVyJ1xuXG5yZXR1cm4gY29udGFpbmVyO1xufVxuLy8gY3JlYXRlIHRhc2sgaXRlbVxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW0oYXJyYXkpIHtcbmNvbnN0IHRhc2tJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICd0YXNrLWl0ZW1zLWNvbnRhaW5lcicpO1xuICAgZm9yIChsZXQgaSA9IDA7aSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpXTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFza0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0tZWxlbWVudCcpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5pZCA9IGkgKzE7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgZGl2LmlkID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICBkaXYyLmlkID0gJ3Rhc2stcHJvamVjdCc7XG4gICAgICAgIGRpdjIudGV4dENvbnRlbnQgPSBpdGVtLnByb2plY3Q7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIGRpdjMuaWQgPSAndGFzay10aW1lLXNwZW50JztcbiAgICAgICAgZGl2My50ZXh0Q29udGVudCA9IGl0ZW0uc3BlbnRUaW1lO1xuXG4gICAgICAgIC8vIGRpdiBmb3Igc3RhcnQgYW5kIHN0b3AgYnV0dG9uXG4gICAgICAgIGNvbnN0IGRpdjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmRpdjQuY2xhc3NMaXN0LmFkZCgndGFzay1jb21wb25lbnQnKVxuZGl2NC5pZCA9ICd0YXNrLXN0YXJ0JztcbmRpdjQudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xuXG5cblxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2MilcbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdjMpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkaXY0KVxuICAgICAgICBcbiAgICAgICAgdGFza0l0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJdGVtRWxlbWVudClcbiAgICB9XG4gICAgICAgIFxuICAgIHJldHVybiB0YXNrSXRlbXNDb250YWluZXI7XG59XG5cbi8vIGNyZWF0ZSBzdGFydCBhbmQgc3RvcCBidXR0b24gY29tcG9uZW50XG5mdW5jdGlvbiBzdGFydFN0b3BCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmlkID0gJ3N0YXJ0LXN0b3AtYnV0dG9uJztcbmNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuaDMudGV4dENvbnRlbnQgPSAnU3RhcnQnO1xuXG5idXR0b24uYXBwZW5kQ2hpbGQoaDMpXG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBjcmVhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ2NyZWF0ZS1kaWFsb2cnO1xuXG5jb25zdCBkaWFsb2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpYWxvZ0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNvbnRlbnQnKVxuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbmNsb3NlLnRleHRDb250ZW50ID0gJyZ0aW1lczsnO1xuY2xvc2UuaWQgPSAnY3JlYXRlLWNsb3NlJztcblxuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5oMi5pbm5lckhUTUwgPSAnTmV3IFRhc2snO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5pZCA9ICdjcmVhdGUtZm9ybSdcbmNvbnN0IGxhYmVsMSA9IGNyZWF0ZUxhYmVsKCdjcmVhdGUtZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcbmNvbnN0IGlucHV0MSA9IGNyZWF0ZUlucHV0KCdjcmVhdGUtZGVzY3JpcHRpb24nLCAndGV4dCcpXG5cbmNvbnN0IGxhYmVsMiA9IGNyZWF0ZUxhYmVsKCdjcmVhdGUtcHJvamVjdCcsJ1Byb2plY3QnKTtcbmNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5pbnB1dDIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXByb2plY3QnKTtcbmlucHV0Mi5pZCA9ICdjcmVhdGUtcHJvamVjdCc7XG5cbmNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbjEudmFsdWUgPSAnbm8tcHJvamVjdCdcbm9wdGlvbjEudGV4dCA9ICdObyBQcm9qZWN0JztcbmNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbjIudmFsdWUgPSAnY3JlYXRlLXByb2plY3QnXG5vcHRpb24yLnRleHQgPSAnQ3JlYXRlIFByb2plY3QnO1xuXG5cbmNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuaW5wdXQzLmlkID0gJ2NyZWF0ZS1zdGFydC10aW1lJ1xuXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdC5pZCA9ICdjcmVhdGUtc3VibWl0LWJ1dHRvbic7XG5zdWJtaXQudGV4dENvbnRlbnQgPSAnRG9uZSdcblxuLy8gYXBwZW5kIGVsZW1lbnRzIHN0YXJ0IGZyb20gbG93ZXN0IGNoaWxkXG5kaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGVudClcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChoMik7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuZm9ybS5hcHBlbmRDaGlsZChsYWJlbDEpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDEpXG5mb3JtLmFwcGVuZENoaWxkKGxhYmVsMik7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0Milcbi8vIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwzKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQzKVxuZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG5pbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMSlcbmlucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24yKVxuXG5yZXR1cm4gZGlhbG9nO1xufVxuXG4vLyB1cGRhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIHVwZGF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ3VwZGF0ZS1kaWFsb2cnO1xuXG5jb25zdCBkaWFsb2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpYWxvZ0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNvbnRlbnQnKVxuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbmNsb3NlLnRleHRDb250ZW50ID0gJyZ0aW1lczsnO1xuY2xvc2UuaWQgPSAndXBkYXRlLWNsb3NlJztcblxuY29uc3QgcmVtb3ZlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xucmVtb3ZlLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXG5yZW1vdmUudGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbnJlbW92ZS5pZCA9ICd1cGRhdGUtZGVsZXRlJztcblxuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5oMi5pbm5lckhUTUwgPSAnVXBkYXRlIFRhc2snO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5pZCA9ICd1cGRhdGUtZm9ybSdcbmNvbnN0IGxhYmVsMSA9IGNyZWF0ZUxhYmVsKCd1cGRhdGUtZGVzY3JpcHRpb24nLCAnRGVleiBhc2lhbiBudXR6Jyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgndXBkYXRlLWRlc2NyaXB0aW9uJywgJ3RleHQnKVxuXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgndXBkYXRlLXByb2plY3QnLCdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDIgPSBjcmVhdGVJbnB1dCgndXBkYXRlLXByb2plY3QnLCd0ZXh0Jyk7XG5cbmNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuaW5wdXQzLmlkID0gJ3VwZGF0ZS1zdGFydC10aW1lJ1xuXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdC5pZCA9ICd1cGRhdGUtc3VibWl0LWJ1dHRvbic7XG5zdWJtaXQudGV4dENvbnRlbnQgPSAnRG9uZSdcblxuLy8gYXBwZW5kIGVsZW1lbnRzIHN0YXJ0IGZyb20gbG93ZXN0IGNoaWxkXG5kaWFsb2cuYXBwZW5kQ2hpbGQoZGlhbG9nQ29udGVudClcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoY2xvc2UpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChyZW1vdmUpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChoMik7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGZvcm0pO1xuZm9ybS5hcHBlbmRDaGlsZChsYWJlbDEpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDEpXG5mb3JtLmFwcGVuZENoaWxkKGxhYmVsMik7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0Milcbi8vIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwzKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQzKVxuZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG5cbnJldHVybiBkaWFsb2c7XG59XG4vLyBjcmVhdGUgcHJvamVjdCBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuY2xvc2UudGV4dENvbnRlbnQgPSAnJnRpbWVzOyc7XG5jbG9zZS5pZCA9ICdjcmVhdGUtcHJvamVjdC1jbG9zZSc7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ05ldyBQcm9qZWN0JztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAnY3JlYXRlLXByb2plY3QtZm9ybSdcbmNvbnN0IGxhYmVsMSA9IGNyZWF0ZUxhYmVsKCdjcmVhdGUtcHJvamVjdC1uYW1lJywgJ1Byb2plY3QnKTtcbmNvbnN0IGlucHV0MSA9IGNyZWF0ZUlucHV0KCdjcmVhdGUtY3JlYXRlLXByb2plY3QtbmFtZScsICd0ZXh0JylcbmlucHV0MS5wbGFjZWhvbGRlciA9ICdFbnRlciBhIHByb2plY3QgbmFtZSc7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdC5pZCA9ICdjcmVhdGUtcHJvamVjdC1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKGxhYmVsMSk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MSlcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuXG5yZXR1cm4gZGlhbG9nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChmb3JBdHRyaWJ1dGUsdGV4dENvbnRlbnQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5odG1sRm9yID0gZm9yQXR0cmlidXRlO1xubGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxucmV0dXJuIGxhYmVsO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoaWRBdHRyaWJ1dGUsdHlwZUF0dHJpYnV0ZSl7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0LmlkID0gaWRBdHRyaWJ1dGU7XG5pbnB1dC50eXAgPSB0eXBlQXR0cmlidXRlO1xuXG5yZXR1cm4gaW5wdXQ7IFxufVxuXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgYW5kIG9wZW4gZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIG9wZW5DcmVhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGlhbG9nJylcbiAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICByZXR1cm4gZGlhbG9nO1xufVxuZnVuY3Rpb24gb3BlblVwZGF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBjbG9zZUNyZWF0ZURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cbmZ1bmN0aW9uIGNsb3NlVXBkYXRlRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGlhbG9nJylcbiAgICBkaWFsb2cuY2xvc2UoKVxufVxuZnVuY3Rpb24gb3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBjbG9zZUNyZWF0ZVByb2plY3REaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRhc2sgaXRlbXMgZnJvbSBjb250YWluZXJcbmZ1bmN0aW9uIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKSB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxuXG5mb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtMTsgaSA+PSAwOyBpLS0pIHtcbmNvbnN0IGNoaWxkID0gY29udGFpbmVyLmNoaWxkcmVuW2ldO1xuY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKVxuXG59XG59XG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRhc2tzIGNvbnRhaW5lciBlbGVtZW50c1xuZnVuY3Rpb24gdXBkYXRlVGFza3NDb250YWluZXIoYXJyYXlOYW1lKSB7XG5jb25zdCB1cGRhdGUgPSBvdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0l0ZW0oYXJyYXlOYW1lKSlcblxucmV0dXJuIHVwZGF0ZTtcblxufVxuLy8gcHJvamVjdCBmaWx0ZXIgc2VsZWN0IGRvbSBlbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0KCkge1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnRhaW5lci5pZCA9ICdwcm9qZWN0LWZpbHRlci1jb250YWluZXInXG5cbmNvbnN0IGxhYmVsMiA9IGNyZWF0ZUxhYmVsKCdwcm9qZWN0LWZpbHRlcicsJ0ZpbHRlcicpO1xuY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbmlucHV0Mi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuaW5wdXQyLmlkID0gJ3Byb2plY3QtZmlsdGVyJztcblxuY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uMS52YWx1ZSA9ICdhbGwtdGFza3MnXG5vcHRpb24xLnRleHQgPSAnQWxsIFRhc2tzJztcbmNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbjIudmFsdWUgPSAnY3JlYXRlLXByb2plY3QnXG5vcHRpb24yLnRleHQgPSAnQ3JlYXRlIFByb2plY3QnO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwyKVxuY29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0MilcbmlucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24xKVxuLy8gaW5wdXQyLmFwcGVuZENoaWxkKG9wdGlvbjIpXG5cbnJldHVybiBjb250YWluZXI7XG59XG5cblxuXG5cblxuXG5cblxuZXhwb3J0IHtcbiAgICBzdGFydEJ0bkV2ZW50SGFuZGxlcixcbnRhc2tJdGVtc0NvbnRhaW5lcixcbmNyZWF0ZVRhc2tJdGVtLFxuc3RhcnRTdG9wQnV0dG9uLFxuY3JlYXRlRm9ybURpYWxvZyxcbnVwZGF0ZUZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlRm9ybURpYWxvZyxcbm9wZW5VcGRhdGVGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVEaWFsb2csXG5jbG9zZVVwZGF0ZURpYWxvZyxcbmdldEN1cnJlbnRIb3VyQW5kTWludXRlLFxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcixcbnVwZGF0ZVRhc2tzQ29udGFpbmVyLFxuY3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5jbG9zZUNyZWF0ZVByb2plY3REaWFsb2csXG5jcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0LFxuXG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuZm9ybWF0LCBzZXREYXlPZlllYXIsIHN0YXJ0T2ZRdWFydGVyXG59IGZyb20gJ2RhdGUtZm5zJ1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtcbiAgICBzdGFydEJ0bkV2ZW50SGFuZGxlcixcbiAgICB0YXNrSXRlbXNDb250YWluZXIsXG5jcmVhdGVUYXNrSXRlbSxcbnN0YXJ0U3RvcEJ1dHRvbixcbmNyZWF0ZUZvcm1EaWFsb2csXG5vcGVuRm9ybURpYWxvZyxcbmdldEN1cnJlbnRIb3VyQW5kTWludXRlLFxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcixcbnVwZGF0ZVRhc2tFbGVtZW50cyxcbnVwZGF0ZVRhc2tzQ29udGFpbmVyLFxuY2xvc2VEaWFsb2csXG51cGRhdGVGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVEaWFsb2csXG5jbG9zZVVwZGF0ZURpYWxvZyxcbm9wZW5VcGRhdGVGb3JtRGlhbG9nLFxuY3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5jbG9zZUNyZWF0ZVByb2plY3REaWFsb2csXG5jcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0LFxuXG59IGZyb20gJy4vdXNlci1pbnRlcmZhY2UnXG5cbi8vIGltcG9ydCBvYmplY3QgcmVsYXRlZCBtb2R1bGVzXG5pbXBvcnQge1xuY3JlYXRlVGFza09iamVjdCxcbiAgICBhZGRUYXNrVG9BbkFycmF5LFxuICAgIGNyZWF0ZUFycmF5RmFjdG9yeSxcbiAgICBkb3duU2hpZnRJZFRvQXJyYXlJbmRleCxcbiAgICBcbn0gZnJvbSAnLi90YXNrLW9iamVjdC1jb21wb25lbnQnXG5cblxuY29uc3QgYWxsVGFza3NBcnJheSA9IGNyZWF0ZUFycmF5RmFjdG9yeSgpO1xuLy8gYWxsVGFza3NBcnJheS5hZGRJdGVtKFxuLy8gICAgICAgICAgICAge1xuLy8gICAgICAgICAgICAgZGVzY3JpcHRpb246ICdidWlsZCB0YXNrIGl0ZW0gY29tcG9uZW50IGFuZCB3cml0ZSBhIHJlYWxseSBsb25nIGRlc2NyaXB0aW9uIHNvIHRoYXQgd2UgY2FuIHNlZSB3aGF0IHRoZSBhZmZlY3Qgd2lsbCBiZScsXG4vLyAgICAgICAgICAgICBwcm9qZWN0OiAnSmF2YXNjcmlwdCcsXG4vLyAgICAgICAgICAgICB0aW1lU3BlbnQ6ICcwMDoyODoyMycsXG4vLyAgICAgICAgICAgICBtc0FycmF5OiBbXSxcbiAgICBcbi8vICAgICAgICAgfVxuLy8gKTtcbi8vIGFsbFRhc2tzQXJyYXkuYWRkSXRlbShcbi8vICAgICAgICAgICAgICAgICB7XG4vLyAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICdidWlsZCB0byBkbyB0YXNrIGFwcCcsXG4vLyAgICAgICAgICAgICAgICAgcHJvamVjdDogJ0phdmFzY3JpcHQnLFxuLy8gICAgICAgICAgICAgICAgIHRpbWVTcGVudDogJzAwOjQzOjIyJyxcbi8vICAgICAgICAgICAgIH1cbi8vIClcblxuXG4vLyBhbGwgZG9tIHJlbGF0ZWQgZnVuY3Rpb25zIGdvIGhlcmVcbi8vIGFwcGVuZCB0YXNrIGl0ZW1zIGNvbnRhaW5lciB0byBvdXRwdXRcbmNvbnN0IG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvdXRwdXQnKVxub3V0cHV0LmFwcGVuZENoaWxkKHRhc2tJdGVtc0NvbnRhaW5lcigpKVxuLy8gYXBwZW5kIHRhc2sgaXRlbXMgdG8gdGFzayBpdGVtcyBjb250YWluZXJcbi8vIG91dHB1dC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrSXRlbShhbGxUYXNrc0FycmF5LmdldEFycmF5KCkpKVxuLy8gYXBwZW5kIGZvcm0gdG8gaHRtbFxub3V0cHV0LmFwcGVuZENoaWxkKGNyZWF0ZUZvcm1EaWFsb2coKSlcbm91dHB1dC5hcHBlbmRDaGlsZCh1cGRhdGVGb3JtRGlhbG9nKCkpXG5vdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSlcblxuXG4vLyBhcHBlbmQgc3RhcnQgc3RvcCBidXR0b24gdG8gYm9keSBcbm91dHB1dC5hcHBlbmRDaGlsZChzdGFydFN0b3BCdXR0b24oKSlcblxuLy8gYXBwZW5kIHByb2plY3QgZmlsdGVyIGZlYXR1cmUgdG8gZG9tXG5vdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCgpKVxuXG4vLyBzdGFydCBidG4gZXZlbnQgaGFuZGxlclxuc3RhcnRCdG5FdmVudEhhbmRsZXIoKVxuXG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSk7XG5cbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGluaXRpYXRpbmcgdXBkYXRpbmcgdGFzayBlbGVtZW50c1xuZnVuY3Rpb24gdXBkYXRlVGFza0VsZW1lbnRFdmVudEhhbmRsZXIoKSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWl0ZW1zLWNvbnRhaW5lcicpXG5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudGFzay1pdGVtJykpIHtcblxuY29uc3Qgc2hpZnRlZEluZGV4ID0gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpXG5jb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcblxuLy8gc2V0IHRoZSBjdXJyZW50IHRhc2sgb2JqZWN0IGluZGV4IHZhbHVlIHRvIGxvY2FsIHN0b3JhZ2VcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VGFzaycsIHNoaWZ0ZWRJbmRleClcblxuLy8gcmV0cmlldmUgbG9jYWwgc3RvcmFnZSB2YWx1ZXMgdG8gcG9wdWxhdGUgZG9tIGVsZW1lbnRzIFxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRlc2NyaXB0aW9uJyk7XG5kZXNjcmlwdGlvbi52YWx1ZSA9IHNlbGVjdGVkT2JqZWN0LmRlc2NyaXB0aW9uXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1wcm9qZWN0Jyk7XG5wcm9qZWN0LnZhbHVlID0gc2VsZWN0ZWRPYmplY3QucHJvamVjdDtcblxub3BlblVwZGF0ZUZvcm1EaWFsb2coKVxuLy8gcG9wdWxhdGVGb3JtSW5wdXRzKGN1cnJlbnRUYXNrKVxuLy8gY29uc29sZS5sb2coY3VycmVudFRhc2spO1xuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLnRhc2stY29tcG9uZW50JykgJiZcbiAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09ICdTdG9wJykge1xuXG4gICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKVxuICAgICAgICBjb25zdCBzaGlmdGVkSW5kZXggPSBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtzaGlmdGVkSW5kZXhdO1xuXG4gICAgICAgIC8vIHNldCB2YWx1ZSB0byBrZXkgb2Ygb2JqZWN0IGluIGFycmF5XG4gICAgICAgIGlmIChzZWxlY3RlZE9iamVjdC5zdGFydFRpbWUpe1xuICAgICAgICBjb25zdCBlbmRUaW1lVmFsdWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgc2VsZWN0ZWRPYmplY3QuZW5kVGltZSA9IGVuZFRpbWVWYWx1ZTtcblxuICAgICAgICAvLyBnZXQgc3RhcnQgYW5kIGVuZCB0aW1lIGluIG1pbGxpc2Vjb25kcyBhbmQgcHVzaCB0byBhcnJheVxuY29uc3QgZWxhcHNlZFRpbWUgPSBzZWxlY3RlZE9iamVjdC5lbmRUaW1lIC0gc2VsZWN0ZWRPYmplY3Quc3RhcnRUaW1lO1xuc2VsZWN0ZWRPYmplY3QubXNBcnJheS5wdXNoKGVsYXBzZWRUaW1lKTtcbmNvbnNvbGUubG9nKGVsYXBzZWRUaW1lKTtcbiAgICAgICAgXG5zZWxlY3RlZE9iamVjdC5zdGFydFRpbWUgPSBudWxsO1xuXG4vLyBzdW0gdXAgbWlsbGlzZWNvbmRzIGl0ZW1zIGluIG1zIGFycmF5XG5sZXQgdG90YWxNaWxsaXNlY29uZHMgPSAwO1xuZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZE9iamVjdC5tc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdG90YWxNaWxsaXNlY29uZHMgKz0gc2VsZWN0ZWRPYmplY3QubXNBcnJheVtpXTtcbiAgICBcbn1cbi8vIHNldCByZXN1bHQgdG8gb2JqZWN0IHByb3BlcnR5XG5zZWxlY3RlZE9iamVjdC5zcGVudFRpbWUgPSB0b3RhbE1pbGxpc2Vjb25kcztcbmFsZXJ0KHRvdGFsTWlsbGlzZWNvbmRzKTtcblxuLy8gZGlzcGxheSByZXN1bHQgb24gZG9tIGVsZW1lbnQgXG5jb25zdCBwcmV2aW91c1NpYmxpbmcgPSBldmVudC50YXJnZXQucHJldmlvdXNTaWJsaW5nO1xucHJldmlvdXNTaWJsaW5nLnRleHRDb250ZW50ID0gdG90YWxNaWxsaXNlY29uZHM7XG5jb25zb2xlLmxvZyhwcmV2aW91c1NpYmxpbmcpO1xuXG4gICAgICAgIH1cbiAgICAgICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gJ1N0YXJ0JztcbiAgICAgICAgXG4gICAgICAgLy8gY29udmVydCBhcnJheSBiYWNrIGludG8gc3RyaW5nXG4gICAgICAgY29uc3QgdXBkYXRlZEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KVxuICAgICAgIFxuICAgICAgIC8vIHN0b3JlIHRoZSB1cGRhdGVkIGFycmF5IGJhY2sgaW50byBsb2NhbCBzdG9yYWdlXG4gICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuICAgICAgIFxuICAgICAgIGNvbnNvbGUubG9nKHNlbGVjdGVkT2JqZWN0KTtcbiAgICAgICBjb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG4gICAgICAgdXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpXG5cbi8vIHdoZW4gd2UgY2xpY2sgdXBkYXRlIHRhc2sgZWxlbWVudCBpdCBwb3B1bGF0ZXMgdGhlIGZvcm0gZWxlbWVudCB3aXRoIHRoZSBjb3JyZXNwb25kaW5nIHRhc2sgZnJvbSB0aGUgbG9jYWwgc3Ryb2FnZSBvYmplY3QuXG4vLyBidXQgZm9yIHNvbWUgcmVhc29uIGlmIHdlIGNsb3NlIHRoZSBmb3JtIGRpYWxvZyBpdCB3aWxsIGNoYW5nZSB0aGUgdGV4dCBjb250ZW50IG9mIGRlc2NyaXB0aW9uIHRvIHN0b3Agb3Igc3RhcnQgXG4vLyB3ZSB3YW50IHRoZSBzdGFydCBidXR0b24gdG8gcmVzZXQgdGhlIGNvcnJlc3BvbmRpbmcgdGFzayBvYmplY3Qgd2l0aCBudWxsIFxuLy8gdGhlbiBzZXQgdGhlIHN0YXJ0IHRpbWUga2V5IHZhbHVlIHRvIGEgbmV3IGRhdGUgbWV0aG9kXG4vLyB0aGUgc3RvcCBidXR0b24gYWRkcyBuZXcgZGF0ZSB0byB0aGUgZW5kIHRpbWUga2V5IHZhbHVlIFxuLy8gaXQgdGhlbiBkb2VzIHNvbWUgb3BlcmF0aW9ucyBhbmQgY2FsY3VsYXRpb25zIHN1Y2ggYXNcbi8vIHN0b3JlIHRoZSBkaWZmZXJlbmNlIGluIGVuZCBhbmQgc3RhcnQgdGltZSBpbiBtaWxsaXNlY29uZHMgb2YgdGhlIGN1cnJlbnQga2V5IHZhbHVlc1xuLy8gcHVzaCB0aGUgbWlsbGlzZWNvbmRzIHZhbHVlIHRvIHRoZSBtcyBhcnJheSBcbi8vIGxvb3AgdGhyb3VnaCBtcyBhcnJheSBhbmQgc3VtIHVwIGFsbCBpdGVtcyBcbi8vIHN0b3JlIG9yIHVwZGF0ZSB0b3RhbCB0aW1lIGluIG1pbGxpc2Vjb25kc1xuLy8gZ2V0IHRvdGFsIHRpbWUgaW4gbWlsbGlzZWNvbmRzIGFuZCBjb252ZXJ0IHRvIHRvdGFsIHNlY29uZHMgXG4vLyBmb3JtYXQgdG90YWwgc2Vjb25kcyBpbnRvIGhvdXIgaG91ciBtaW51dGUgbWludXRlIHNlY29uZCBzZWNvbmQgZm9ybWF0XG4vLyBkaXNwbGF5IGZvcm1hdHRlZCB0b3RhbCB0aW1lIGluIHRoZSBkb20gZWxlbWVudFxuLy8gY2FsbCBmdW5jdGlvbiB0byByZXBvcHVsYXRlIHRoZSB0YXNrIGl0ZW1zIGNvbnRhaW5lciB3aXRoIHVwZGF0ZWQgdGFzayBlbGVtZW50c1xuXG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gY29udmVydCBlbGVtZW50IGlkIHRvIGFycmF5IGluZGV4IHZhbHVlXG4gICAgICAgIGNvbnN0IHNoaWZ0ZWRJbmRleCA9IGRvd25TaGlmdElkVG9BcnJheUluZGV4KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBhbGwgdGFza3MgYXJyYXkgc3RvcmluZyB0YXNrIG9iamVjdHNcbiAgICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpXG4gICAgICAgIC8vIGNvbnZlcnQgc3RyaW5nZWQgYXJyYXkgdG8gbm9ybWFsIGFycmF5XG4gICAgICAgIGNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4gICAgICAgIC8vIGdldCB0aGUgY29ycmVsYXRlZCB0YXNrIG9iamVjdFxuICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtzaGlmdGVkSW5kZXhdO1xuXG4gICAgICAgIC8vIHNldCB2YWx1ZSB0byBrZXkgb2Ygb2JqZWN0IGluIGFycmF5XG5jb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiBzZWxlY3RlZE9iamVjdC5zdGFydFRpbWUgPSBzdGFydFRpbWU7XG5cbi8vIGNvbnZlcnQgYXJyYXkgYmFjayBpbnRvIHN0cmluZ1xuY29uc3QgdXBkYXRlZEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KVxuXG4vLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuXG5jb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdCk7XG5jb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG4gICAgICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9ICdTdG9wJztcbiAgICAgICAgXG4gICAgfVxufSlcbn1cbnVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKClcblxuLy8gZnVuY3Rpb24gdG8gYWRkIG9iamVjdCB0byBsb2NhbCBzdG9yYWdlIGFycmF5XG5mdW5jdGlvbiBhZGRPYmplY3RUb0xvY2FsU3RvcmFnZUFycmF5KGtleSwgb2JqZWN0KSB7XG4gICAgLy8gY2hlY2tzIGlmIGtleSBleGlzdHMgaW4gc3RvcmFnZSBvciBjcmVhdGVzIG9uZSB3aXRoIGVtcHR5IGFycmF5XG4gICAgLy8gYW5kIHN0b3JlcyBpdCBpbiBhIHZhcmlhYmxlXG5jb25zdCBleGlzdGluZ0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCBbXTtcbi8vIHB1c2ggdGhlIG9iamVjdCB0byBhbiBhcnJheSBpbiBzdG9yYWdlXG5leGlzdGluZ0FycmF5LnB1c2gob2JqZWN0KTtcbi8vIHNldCB0aGUgYXJyYXkgd2l0aCBuZXcgb2JqZWN0IGluIGtleSBvZiBzdG9yYWdlIFxubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShleGlzdGluZ0FycmF5KSlcblxufVxuXG4vLyBmdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXRcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlRm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIGRvbVxuICAgICAgICAgICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBnZXQgZm9ybSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXQxLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gaW5wdXQyLnZhbHVlO1xuICAgICAgICAgICAgLy8gY29uc3Qgc3RhcnRUaW1lID0gZ2V0Q3VycmVudEhvdXJBbmRNaW51dGUoKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBvYmplY3RcbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdClcbiAgICAgICAgLy8gYWRkVGFza1RvQW5BcnJheSh0YXNrLGFsbFRhc2tzQXJyYXkpXG4gICAgICAgIC8vIGFsbFRhc2tzQXJyYXkuYWRkSXRlbSh0YXNrKVxuICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVGFza3NBcnJheScsIEpTT04uc3RyaW5naWZ5KHRhc2spKVxuYWRkT2JqZWN0VG9Mb2NhbFN0b3JhZ2VBcnJheSgnYWxsVGFza3MnLCB0YXNrKVxuXG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSk7XG5cbiAgICAgICAgYWxlcnQoJ2NyZWF0aW9uIGV2ZW50IGhhbmRsZXInKVxuICAgICAgICAgICAgXG4gICAgICAgIC8vIHVwZGF0ZSBkb20gd2l0aCBuZXcgdGFza1xuICAgICAgICAgICAgLy8gdXBkYXRlVGFza3NDb250YWluZXIoYWxsVGFza3NBcnJheS5nZXRBcnJheSgpKVxuICAgICAgICAgICAgdXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYWxsVGFza3MpKVxuICAgICAgICBcbiAgICAgICAgICAgIC8vIHJlc2V0IGZvcm0gaW5wdXRzXG4gICAgICAgIGlucHV0MS52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dDIudmFsdWUgPSAnJzsgICAgICAgIFxuXG4gICAgICAgIGNsb3NlQ3JlYXRlRGlhbG9nKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgICAgICAvLyBldmVudCBoYW5kbGVyIGZvciBzdWJtaXQgdXBkYXRlXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVGb3JtU3VibWl0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAvLyBnZXQgZm9ybSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dDEudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgICAgICBcbi8vIGdldCBpbmRleCBvZiBjdXJyZW50IHRhc2tcbmNvbnN0IGN1cnJlbnRUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRUYXNrJylcblxuLy8gdXBkYXRlIHRoZSB0YXNrIG9iamVjdCBpbiBsb2NhbCBzc3RvcmFnZVxuICAgICAgICBcbiAgICAgICAgLy8gZ2V0IHRoZSBhbGwgdGFza3MgYXJyYXkgc3RvcmluZyB0YXNrIG9iamVjdHNcbiAgICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpXG4gICAgICAgIC8vIGNvbnZlcnQgc3RyaW5nZWQgYXJyYXkgdG8gbm9ybWFsIGFycmF5XG4gICAgICAgIGNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4gICAgICAgIC8vIGdldCB0aGUgY29ycmVsYXRlZCB0YXNrIG9iamVjdFxuICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtjdXJyZW50VGFza107XG5cbiAgICAgICAgYWxlcnQoY3VycmVudFRhc2spXG4gICAgICAgIC8vIHNldCBpbnB1dCB2YWx1ZXMgdG8gbG9jYWwgc3RvcmFnZVxuIHNlbGVjdGVkT2JqZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gc2VsZWN0ZWRPYmplY3QucHJvamVjdCA9IHByb2plY3Q7XG5cbi8vIGNvbnZlcnQgYXJyYXkgYmFjayBpbnRvIHN0cmluZ1xuY29uc3QgdXBkYXRlZEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KVxuXG4vLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuXG5jb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdCk7XG5jb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG5cbmFsZXJ0KCd1cGRhdGUgZXZlbnQgaGFuZGxlcicpXG5cbiAgICAgICAgdXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0MS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaW5wdXQyLnZhbHVlID0gJyc7ICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIGNsb3NlVXBkYXRlRGlhbG9nKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbi8vIGF0dGF0Y2ggZXZlbnQgbGlzdGVuZXIgYW5kIGhhbmRsZXIgdG8gY3JlYXRlIGFuZCB1cGRhdGUgZm9ybSBzdWJtaXQgICAgXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1mb3JtJyk7XG4gICAgY3JlYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUNyZWF0ZUZvcm1TdWJtaXQpICAgIFxuICAgIGNvbnN0IHVwZGF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWZvcm0nKTtcbnVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVVcGRhdGVGb3JtU3VibWl0KVxuICAgIFxuLy8gZnVuY3Rpb24gdG8gcG9wdWxhdGUgZm9ybSBkaWFsb2cgd2l0aCBjbGlja2VkIHRhc2tcbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybUlucHV0cyhhcnJheUluZGV4KSB7XG5sZXQgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuaW5wdXQxLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWxsVGFza3MpW2FycmF5SW5kZXhdLmRlc2NyaXB0aW9uO1xuXG5sZXQgaW5wdXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1wcm9qZWN0Jyk7XG5pbnB1dDIudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUYXNrcylbYXJyYXlJbmRleF0ucHJvamVjdDtcblxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oYWxsVGFza3NbYXJyYXlJbmRleF0pKTtcbn1cblxuLy8gZXZlbnQgaGFuZGxlciBmb3IgY2xvc2luZyBjcmVhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNsb3NlQ3JlYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1jbG9zZScpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5jbG9zZUNyZWF0ZURpYWxvZygpO1xuICAgIH0pXG59XG5jbG9zZUNyZWF0ZUZvcm1EaWFsb2coKTtcblxuLy8gZXZlbnQgaGFuZGxlciBmb3IgY2xvc2luZyB1cGRhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNsb3NlVXBkYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jbG9zZScpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5jbG9zZVVwZGF0ZURpYWxvZygpO1xuICAgIH0pXG59XG5jbG9zZVVwZGF0ZUZvcm1EaWFsb2coKTtcblxuLy8gZXZlbnQgaGFuZGxlciBmb3IgZGVsZXRpbmcgYSB0YXNrIG9iamVjdFxuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZWxldGUnKTtcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRUYXNrJyk7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpXG4gICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtjdXJyZW50VGFza107XG4vLyByZW1vdmUgb2JqZWN0IGZyb20gYXJyYXlcbmRhdGFBcnJheS5zcGxpY2UoY3VycmVudFRhc2ssMSlcbmNvbnNvbGUubG9nKGRhdGFBcnJheSk7XG5cbi8vIGNvbnZlcnQgYXJyYXkgYmFjayBpbnRvIHN0cmluZ1xuY29uc3QgdXBkYXRlZEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KVxuICAgICAgIFxuLy8gc3RvcmUgdGhlIHVwZGF0ZWQgYXJyYXkgYmFjayBpbnRvIGxvY2FsIHN0b3JhZ2VcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUYXNrcycsIHVwZGF0ZWRBcnJheVN0cmluZylcblxuLy8gcmVuZGVyIGRvbSB3aXRoIHVwZGF0ZWQgdGFzayBvYmplY3RzXG51cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcblxuXG5jbG9zZVVwZGF0ZURpYWxvZygpXG5cbn0pXG5cblxuXG4vLyBmdW5jdGlvbiB0byBjaGVjayBpZiBzdG9yYWdlIGlzIGF2YWlsYWJsZSBcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIFxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3NcbiAgICBjb25zb2xlLmxvZygnWWlwcGVlJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xuICAgIGNvbnNvbGUubG9nKCdOdXBwZWUnKTtcbiAgfVxuICBcbiAgXG4vLyBzZWxlY3Qgb3B0aW9uIGZvcm0gZHJvcGRvd24gaW1wbGVtZW50YXRpb24gXG5cbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QnKVxuY29uc3QgcHJvamVjdE9wdGlvbnMgPSBbJ0phdmFzY3JpcHQnLCAnUHl0aG9uJywgJ1J1YnknXVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0T3B0aW9ucygpIHtcbnByb2plY3RPcHRpb25zLmZvckVhY2gocHJvamVjdE9wdGlvbiA9PiB7XG5jb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbm9wdGlvbkVsZW1lbnQudmFsdWUgPSBwcm9qZWN0T3B0aW9uO1xub3B0aW9uRWxlbWVudC50ZXh0ID0gcHJvamVjdE9wdGlvbjtcblxuc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxufSk7XG59XG5cbnNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG5jb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5pZiAoc2VsZWN0ZWRFbGVtZW50ID09PSAnY3JlYXRlLXByb2plY3QnKXtcbiAgICBhbGVydChzZWxlY3RlZEVsZW1lbnQpXG5vcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKVxuXG59XG5cbn0pXG4vLyBoYW5kbGUgY3JlYXRlIHByb2plY3QgZm9ybSBzdWJtaXRcbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LWZvcm0nKVxuY3JlYXRlUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtY3JlYXRlLXByb2plY3QtbmFtZScpLnZhbHVlO1xucHJvamVjdE9wdGlvbnMucHVzaChwcm9qZWN0TmFtZUlucHV0KVxuLy8gY2FsbCBmdW5jdGlvbiB0byB1cGRhdGUgcHJvamVjdCBvcHRpb25zIFxuc2V0UHJvamVjdE9wdGlvbnMoKTtcblxuY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nKClcblxufSlcbnNldFByb2plY3RPcHRpb25zKCk7XG5cbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIFxufVxuLy8gY2xlYXJMb2NhbFN0b3JhZ2UoKVxuXG4vLyBjYWxsIG9uIHBhZ2UgbG9hZCB0byBkaXNwbGF5IHRhc2tzIGluIGxvY2FsIHN0b3JhZ2Vcbi8vIHVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzQXJyYXkpKVxudXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYWxsVGFza3MpKVxuXG4vLyBmdW5jdGlvbiB0byBzdGFydCB0aW1lciB0aGF0IHRha2VzIG9iamVjdCBhcyBhcmd1bWVudFxuZnVuY3Rpb24gc3RhcnRUaW1lcihvYmplY3QpIHtcblxufVxuXG4vLyBldmVudCBsaXN0ZW5lciBhbmQgaGFuZGxlciBmb3IgcHJvamVjdCBmaWx0ZXIgZmVhdHVyZVxuY29uc3QgcHJvamVjdEZpbHRlclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZpbHRlci1jb250YWluZXInKVxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdEZpbHRlclNlbGVjdCgpIHtcbiAgICBcbiAgICAvLyBnZXQgc2VsZWN0IGVsZW1lbnRcbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1maWx0ZXInKVxuLy8gcmVtb3ZlIGNoaWxkcmVuIG9wdGlvbiBlbGVtZW50cyBcbmZvciAobGV0IGkgPSBzZWxlY3RFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCAtMTsgaSA+PSAxOyBpLS0pIHtcbmNvbnN0IGNoaWxkID0gc2VsZWN0RWxlbWVudC5jaGlsZHJlbltpXTtcbnNlbGVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGQpXG5cbn1cblxuLy8gZ2V0IGxvY2FsIHN0b3JhZ2UgYXJyYXkgb2YgdGFzayBvYmplY3RzXG5jb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbi8vIGNvbnZlcnQgc3RyaW5nZWQgYXJyYXkgdG8gbm9ybWFsIGFycmF5XG5jb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuXG5jb25zdCB1bmlxdWVWYWx1ZXMgPSBbXTtcbi8vIGxvb3AgdGhyb3VnaCBhcnJheSBvYmplY3QgaXRlbXMgYW5kIG91dHB1dCB0aGUgcHJvamVjdCB2YWx1ZVxuZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQXJyYXkubGVuZ3RoOyBpKyspIHtcbmxldCBrZXkgPSBkYXRhQXJyYXlbaV0ucHJvamVjdDtcblxuaWYgKCF1bmlxdWVWYWx1ZXMuaW5jbHVkZXMoa2V5KSkge1xuXG5jb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbm9wdGlvbkVsZW1lbnQudmFsdWUgPSBrZXk7XG5vcHRpb25FbGVtZW50LnRleHQgPSBrZXk7XG5cbnNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbnVuaXF1ZVZhbHVlcy5wdXNoKGtleSlcblxufVxuXG5cblxufVxuXG59XG5wcm9qZWN0RmlsdGVyU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdEZpbHRlclNlbGVjdClcbnByb2plY3RGaWx0ZXJTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4vLyBnZXQgdGhlIHZhbHVlIG9mIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4vLyBnZXQgdGhlIGFsbCB0YXNrcyBhcnJheVxuY29uc3QgYWxsVGFza3NBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpXG5cblxuY29uc3QgZmlsdGVyZWRPYmplY3RzID0gW107XG4vLyBsb29wIHRocm91Z2ggYWxsIHRhc2tzIGFycmF5IFxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gY29uc3QgY3VycmVudEl0ZW0gPSBhbGxUYXNrc0FycmF5W2ldO1xuICAgIGlmIChhbGxUYXNrc0FycmF5W2ldLnByb2plY3QgPT09IHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBmaWx0ZXJlZE9iamVjdHMucHVzaChhbGxUYXNrc0FycmF5W2ldKVxuICAgIH1cbmNvbnNvbGUubG9nKGZpbHRlcmVkT2JqZWN0cyk7XG5yZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCk7XG51cGRhdGVUYXNrc0NvbnRhaW5lcihmaWx0ZXJlZE9iamVjdHMpXG59XG5cblxuICAgIFxuICAgIH0pO1xuXG5cbi8vIGNsZWFyTG9jYWxTdG9yYWdlKClcblxuXG5cbmNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9