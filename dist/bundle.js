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
___CSS_LOADER_EXPORT___.push([module.id, `* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;

}


body {
    background-color: black;
    color: white;
}
#task-items-container {
    border: 3px solid white;
    /* height: 600px;
    width: 600px; */
    flex-direction: column;
    
    
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
#task-date {
    grid-row: 1;
    grid-column: 8/10;
    
}
#task-start {
    grid-row: 2;
    grid-column: 9;
}


#start-stop-button {
    border: 5px solid purple;
height: 200px;    
    display: flex;
    justify-content: center;
    align-items: center;
}
#project-filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 25px 0;
    
}
#filter-wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
    justify-content: center;
    align-items: center;

}
#project-filter {
    width: 60%;
    height: 35px;
    border: 2px solid purple;
    background-color: black;
    color: white;
}
.dialog {
background-color: black;
    border: 5px solid purple;
    color: white;
    position: fixed; /* Position the dialog relative to the viewport */
    top: 50%; /* Position the dialog halfway down the viewport */
    left: 50%; /* Position the dialog halfway across the viewport */
    transform: translate(-50%, -50%); /* Offset the dialog's position by half its own width and height to center it */
    /* Add width and height if needed */
    width: 80%;
    padding-bottom: 20px;
    
}
dialog::backdrop {
    background-color: rgba(0, 0, 0, 0.8);
    z-index: 999;
    transition: opacity 0.3s ease-in-out;
}
.dialog-content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
}
#create-close {
    align-self: flex-start;   
   }
form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    row-gap: 20px;
}
.form-wrappers {
    display: flex;
    flex-direction: column;

}
#create-description {
    background-color: black;
    color: white;
}
#create-project {
    background-color: black;
    color: white;
}
form button {
    width: 100%;
    background-color: purple;
    border: 1px solid purple;
    color: white;
    align-self: center;
    padding: 5px 0;

}
#update-nav-wrapper {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
#update-description {
    background-color: black;
    color: white;
}
#update-project {
    background-color: black;
    color: white;
}
#create-date {
    background-color: black;
    color: white;
}



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;AAE1B;;;AAGA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB;mBACe;IACf,sBAAsB;;;AAG1B;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,sCAAsC;AAC1C,iBAAiB;AACjB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;;IAEvB,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,WAAW;IACX,iBAAiB;;AAErB;AACA;IACI,WAAW;IACX,cAAc;AAClB;;;AAGA;IACI,wBAAwB;AAC5B,aAAa;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;;AAEnB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;IACI,UAAU;IACV,YAAY;IACZ,wBAAwB;IACxB,uBAAuB;IACvB,YAAY;AAChB;AACA;AACA,uBAAuB;IACnB,wBAAwB;IACxB,YAAY;IACZ,eAAe,EAAE,iDAAiD;IAClE,QAAQ,EAAE,kDAAkD;IAC5D,SAAS,EAAE,oDAAoD;IAC/D,gCAAgC,EAAE,+EAA+E;IACjH,mCAAmC;IACnC,UAAU;IACV,oBAAoB;;AAExB;AACA;IACI,oCAAoC;IACpC,YAAY;IACZ,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,sBAAsB;GACvB;AACH;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,WAAW;IACX,wBAAwB;IACxB,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,cAAc;;AAElB;AACA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n}\n\n\nbody {\n    background-color: black;\n    color: white;\n}\n#task-items-container {\n    border: 3px solid white;\n    /* height: 600px;\n    width: 600px; */\n    flex-direction: column;\n    \n    \n}\n.task-item-element {\n    border: 3px solid white;\n    height: 100px;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(10, 1fr);\npadding-top: 20px;\n}\n#task-description {\n    color: yellowgreen;\n    font-weight: bold;\n    font-size: 1.3rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    grid-row: 1;\n    grid-column: 2/9;\n\n}\n#task-project {\n    color: yellowgreen;\n    grid-row: 2;\n    grid-column: 2/9;\n\n}\n#task-date {\n    grid-row: 1;\n    grid-column: 8/10;\n    \n}\n#task-start {\n    grid-row: 2;\n    grid-column: 9;\n}\n\n\n#start-stop-button {\n    border: 5px solid purple;\nheight: 200px;    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#project-filter-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 25px 0;\n    \n}\n#filter-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    justify-content: center;\n    align-items: center;\n\n}\n#project-filter {\n    width: 60%;\n    height: 35px;\n    border: 2px solid purple;\n    background-color: black;\n    color: white;\n}\n.dialog {\nbackground-color: black;\n    border: 5px solid purple;\n    color: white;\n    position: fixed; /* Position the dialog relative to the viewport */\n    top: 50%; /* Position the dialog halfway down the viewport */\n    left: 50%; /* Position the dialog halfway across the viewport */\n    transform: translate(-50%, -50%); /* Offset the dialog's position by half its own width and height to center it */\n    /* Add width and height if needed */\n    width: 80%;\n    padding-bottom: 20px;\n    \n}\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 999;\n    transition: opacity 0.3s ease-in-out;\n}\n.dialog-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 20px;\n}\n#create-close {\n    align-self: flex-start;   \n   }\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    row-gap: 20px;\n}\n.form-wrappers {\n    display: flex;\n    flex-direction: column;\n\n}\n#create-description {\n    background-color: black;\n    color: white;\n}\n#create-project {\n    background-color: black;\n    color: white;\n}\nform button {\n    width: 100%;\n    background-color: purple;\n    border: 1px solid purple;\n    color: white;\n    align-self: center;\n    padding: 5px 0;\n\n}\n#update-nav-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n#update-description {\n    background-color: black;\n    color: white;\n}\n#update-project {\n    background-color: black;\n    color: white;\n}\n#create-date {\n    background-color: black;\n    color: white;\n}\n\n\n\n"],"sourceRoot":""}]);
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
    static idCounter = 1;

    constructor(description, project, dueDate) {
        this.id = Task.idCounter++;
        this.description = description;
        this.project = project;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
}

function createTaskObject(description,project, dueDate) {
    const task = new Task(description,project, dueDate);

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
const taskItemsContainer = document.getElementById('task-items-container');
   for (let i = 0;i < array.length; i++) {
        const item = array[i];
    
        const taskItemElement = document.createElement('div');
        taskItemElement.classList.add('task-item-element')
        taskItemElement.id = item.id;

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
        div3.id = 'task-date';
        if (!item.daysLeft) {
div3.textContent = '';
        } else {
        div3.textContent = `${item.daysLeft} days left`;

        }
        // div for start and stop button
        const div4 = document.createElement('div');
div4.classList.add('task-component')
div4.id = 'task-start';
div4.textContent = item.isComplete;



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
h3.textContent = '+';

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
close.id = 'create-close';
close.classList.add('close')
close.textContent = 'Cancel';

const h2 = document.createElement('h2')
h2.innerHTML = 'New Task';

const form = document.createElement('form');
form.id = 'create-form'

const wrapper1 = document.createElement('div');
wrapper1.classList.add('form-wrappers')
const label1 = createLabel('create-description', 'Description');
const input1 = createInput('create-description', 'text')
wrapper1.appendChild(label1)
wrapper1.appendChild(input1)

const wrapper2 = document.createElement('div');
wrapper2.classList.add('form-wrappers')
const label2 = createLabel('create-project','Project');
const input2 = document.createElement('select')
input2.classList.add('create-project');
input2.id = 'create-project';
wrapper2.appendChild(label2)
wrapper2.appendChild(input2)

const option1 = document.createElement('option');
option1.value = 'no-project'
option1.text = 'No Project';
const option2 = document.createElement('option');
option2.value = 'create-project'
option2.text = 'Create Project';


// const input3 = document.createElement('span')
// input3.id = 'create-start-time'

const input3 = createDateTimeInput('create-date');



const submit = document.createElement('button')
submit.type = 'submit';
submit.id = 'create-submit-button';
submit.textContent = 'Done'

// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(close);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(wrapper1);
form.appendChild(wrapper2);
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

const wrapper1 = document.createElement('div');
wrapper1.id = 'update-nav-wrapper';
const close = document.createElement('span');
close.classList.add('close')
close.id = 'update-close';
close.textContent = 'Cancel';
wrapper1.appendChild(close)

const remove = document.createElement('span');
remove.classList.add('delete')
remove.textContent = 'Delete';
remove.id = 'update-delete';
wrapper1.appendChild(remove)

const h2 = document.createElement('h2')
h2.innerHTML = 'Update Task';

const form = document.createElement('form');
form.id = 'update-form'

const wrapper2 = document.createElement('div');
wrapper2.classList.add('form-wrappers')
const label1 = createLabel('update-description', 'Description');
const input1 = createInput('update-description', 'text')
wrapper2.appendChild(label1)
wrapper2.appendChild(input1)

const wrapper3 = document.createElement('div');
wrapper3.classList.add('form-wrappers')
const label2 = createLabel('update-project','Project');
const input2 = createInput('update-project','text');
wrapper3.appendChild(label2)
wrapper3.appendChild(input2)

const input3 = createDateTimeInput('update-date');

const submit = document.createElement('button')
submit.type = 'submit';
submit.id = 'update-submit-button';
submit.textContent = 'Done'

// append elements start from lowest child
dialog.appendChild(dialogContent)
dialogContent.appendChild(wrapper1);
dialogContent.appendChild(h2);
dialogContent.appendChild(form);
form.appendChild(wrapper2)
form.appendChild(wrapper3)
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
    
    removeTaskItemsFromContainer()
    updateTasksContainer(JSON.parse(localStorage.getItem('allTasks')))
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

const selectElement = document.getElementById('project-filter')
const selectedValue = selectElement.value;



if (selectedValue === 'default') {
    alert(selectedValue)
const update = output.appendChild(createTaskItem(arrayName))

return update;
}

}
// project filter select dom element
function createProjectFilterSelect() {
const container = document.createElement('div')
container.id = 'project-filter-container'

const filterWrapper = document.createElement('div');
filterWrapper.id = 'filter-wrapper'

const label2 = createLabel('project-filter','Filter');
const input2 = document.createElement('select')
input2.classList.add('create-project');
input2.id = 'project-filter';

const option1 = document.createElement('option');
option1.value = 'default'
option1.text = '-- Select Project --';

const option2 = document.createElement('option');
option2.value = 'all-tasks'
option2.text = 'All Tasks';

container.appendChild(filterWrapper)
filterWrapper.appendChild(label2)
filterWrapper.appendChild(input2)
input2.appendChild(option1)
input2.appendChild(option2)

return container;
}

// create method that creats du date label and input
function createDateTimeInput(idAttribute) {
    const dateWrapper = document.createElement('div');
    dateWrapper.classList.add('form-wrappers');

    const label = createLabel(idAttribute, 'Date');
    const input = document.createElement('input');
    input.id = idAttribute;
    input.type = 'date';

    dateWrapper.appendChild(label);
    dateWrapper.appendChild(input);

    return dateWrapper;
}






/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/differenceInDays.mjs":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/differenceInDays.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInDays: () => (/* binding */ differenceInDays)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name differenceInDays
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full day periods between two dates. Fractional days are
 * truncated towards zero.
 *
 * One "full day" is the distance between a local time in one day to the same
 * local time on the next or previous day. A full day can sometimes be less than
 * or more than 24 hours if a daylight savings change happens between two dates.
 *
 * To ignore DST and only measure exact 24-hour periods, use this instead:
 * `Math.trunc(differenceInHours(dateLeft, dateRight)/24)|0`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of full days according to the local timezone
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 0
 *
 * @example
 * // How many full days are between
 * // 1 March 2020 0:00 and 1 June 2020 0:00 ?
 * // Note: because local time is used, the
 * // result will always be 92 days, even in
 * // time zones where DST starts and the
 * // period has only 92*24-1 hours.
 * const result = differenceInDays(
 *   new Date(2020, 5, 1),
 *   new Date(2020, 2, 1)
 * )
 * //=> 92
 */
function differenceInDays(dateLeft, dateRight) {
  const _dateLeft = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateLeft);
  const _dateRight = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(dateRight);

  const sign = compareLocalAsc(_dateLeft, _dateRight);
  const difference = Math.abs((0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_dateLeft, _dateRight));

  _dateLeft.setDate(_dateLeft.getDate() - sign * difference);

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  const isLastDayNotFull = Number(
    compareLocalAsc(_dateLeft, _dateRight) === -sign,
  );
  const result = sign * (difference - isLastDayNotFull);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}

// Like `compareAsc` but uses local time not UTC, which is needed
// for accurate equality comparisons of UTC timestamps that end up
// having the same representation in local time, e.g. one hour before
// DST ends vs. the instant that DST ends.
function compareLocalAsc(dateLeft, dateRight) {
  const diff =
    dateLeft.getFullYear() - dateRight.getFullYear() ||
    dateLeft.getMonth() - dateRight.getMonth() ||
    dateLeft.getDate() - dateRight.getDate() ||
    dateLeft.getHours() - dateRight.getHours() ||
    dateLeft.getMinutes() - dateRight.getMinutes() ||
    dateLeft.getSeconds() - dateRight.getSeconds() ||
    dateLeft.getMilliseconds() - dateRight.getMilliseconds();

  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInDays);


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


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
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/differenceInDays.mjs");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _user_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-interface */ "./src/user-interface.js");
/* harmony import */ var _task_object_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-object-component */ "./src/task-object-component.js");





// import object related modules


// all dom related functions go here
// append task items container to output
const body = document.body;
const output = document.getElementById('output')

output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.taskItemsContainer)())

// append project filter feature to dom
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createProjectFilterSelect)())
// append start stop button to body 
body.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.startStopButton)())
// append form to html
body.insertBefore((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createFormDialog)(), output)
body.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateFormDialog)())
body.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createProjectFormDialog)())




// start btn event handler
;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.startBtnEventHandler)()

console.log(JSON.parse(localStorage.getItem('allTasks')));

// event handler for initiating updating task elements
function updateTaskElementEventHandler() {
    const parentElement = document.getElementById('task-items-container')

parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.task-item')) {
// const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
const domTaskId = +event.target.parentNode.id;
alert(domTaskId + ' is the id key')

const storedData = localStorage.getItem('allTasks')
const dataArray = JSON.parse(storedData);
// const selectedObject = dataArray[shiftedIndex];
const selectedObject = dataArray.find(obj => obj.id === domTaskId)

// set the current task object index value to local storage
localStorage.setItem('currentTask', domTaskId)

// retrieve local storage values to populate dom elements 
const description = document.getElementById('update-description');
description.value = selectedObject.description
const project = document.getElementById('update-project');
project.value = selectedObject.project;
const date = document.getElementById('update-date');
date.value = selectedObject.dueDate;


(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.openUpdateFormDialog)()

    }

    if (event.target.matches('.task-component') &&
    event.target.textContent === 'true') {

        // const shiftedIndex = downShiftIdToArrayIndex(event.target.parentNode.id);
        const domTaskId = +event.target.parentNode.id;

        const storedData = localStorage.getItem('allTasks')
        const dataArray = JSON.parse(storedData);
        // const selectedObject = dataArray[shiftedIndex];
        const selectedObject = dataArray.find(obj => obj.id === domTaskId);
        
selectedObject.isComplete = false;
// event.target.textContent = 'false'

// Update the dataArray with the modified selectedObject
// dataArray[] = selectedObject;
let index = dataArray.findIndex(obj => obj.id === domTaskId) 
dataArray[index] = selectedObject;

// Stringify the dataArray and store it back into localStorage
localStorage.setItem('allTasks', JSON.stringify(dataArray));

(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)();
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.getItem('allTasks')));

    } 
    if (event.target.matches('.task-component') &&
    event.target.textContent === 'false') {
        const shiftedIndex = (0,_task_object_component__WEBPACK_IMPORTED_MODULE_2__.downShiftIdToArrayIndex)(event.target.parentNode.id);
        const domTaskId = +event.target.parentNode.id;
        
        const storedData = localStorage.getItem('allTasks')
        const dataArray = JSON.parse(storedData);
        // const selectedObject = dataArray[shiftedIndex];
const selectedObject = dataArray.find(obj => obj.id === domTaskId)


selectedObject.isComplete = true;
// event.target.textContent = 'true'

// Update the dataArray with the modified selectedObject
// dataArray[shiftedIndex] = selectedObject;
let index = dataArray.findIndex(obj => obj.id === domTaskId) 
dataArray[index] = selectedObject;

// Stringify the dataArray and store it back into localStorage
localStorage.setItem('allTasks', JSON.stringify(dataArray));

(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)();
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.getItem('allTasks')));


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
            const input3 = document.getElementById('create-date');
            const date = input3.value;

            const daysLeft = daysLeftUntilDueDate(date)



        // create new task object
        const task = (0,_task_object_component__WEBPACK_IMPORTED_MODULE_2__.createTaskObject)(description,project, date)
        // task.daysLeft = daysLeft;

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
                const input3 = document.getElementById('update-date');
                const date = input3.value;
const daysLeft = daysLeftUntilDueDate(date)
// get id of current task
const currentTaskId = localStorage.getItem('currentTask')

// update the task object in local sstorage
        
        // get the all tasks array storing task objects
        const storedData = localStorage.getItem('allTasks')
        // convert stringed array to normal array
        const dataArray = JSON.parse(storedData);
        // get the correlated task object
        // const selectedObject = dataArray[currentTask];
        const selectedObject = dataArray.find(obj => obj.id === +currentTaskId)

        // set input values to local storage
 selectedObject.description = description;
 selectedObject.project = project;
    selectedObject.dueDate = date;
    selectedObject.daysLeft = daysLeft;

    
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
    const updateDialog = document.getElementById('update-dialog')
    const element = document.getElementById('update-close');
    element.addEventListener('click', () => {
        
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)();
alert('update close event handler')
    })
// rule for escape key event 
updateDialog.addEventListener('keydown', (event) => {
if (event.key === 'Escape' || event.key === 'Esc') {
    event.preventDefault();
    alert('Escape key was presssed down')
    ;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)()
}
// check if event target is click on backdrop
updateDialog.addEventListener('click', (event) => {
if (event.target === updateDialog) {
alert('backdrop clicked')
;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)()

}

})




})



}
closeUpdateFormDialog()

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
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.getItem('allTasks')))

// function to start timer that takes object as argument
function startTimer(object) {

}

// event listener and handler for project filter feature
const projectFilterSelect = document.getElementById('project-filter-container')
function handleProjectFilterSelect() {
    
    // get select element
const selectElement = document.getElementById('project-filter')
// remove children option elements 
for (let i = selectElement.children.length -1; i >= 2; i--) {
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

    // check if selected item value is all tasks
    if (selectedItem === 'all-tasks') {
        // add all tasks to filter array
        // filteredObjects.push(allTasksArray[i])
        
        (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)()
        ;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(allTasksArray)
    }
if (allTasksArray[i].project === selectedItem) {
        filteredObjects.push(allTasksArray[i])

        ;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)();
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(filteredObjects)
    }


}


    
    });

function daysLeftUntilDueDate(dueDate) {
    const targetDate = new Date(dueDate);
    const currentDate = new Date();
    const daysLeft = (0,date_fns__WEBPACK_IMPORTED_MODULE_3__.differenceInDays)(targetDate, currentDate);

    return daysLeft
}   




// clearLocalStorage()


console.log(JSON.parse(localStorage.allTasks));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJDQUEy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QTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTRCO0FBQ3BDLFFBQVEsc0VBQW9CO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDhFQUE0QjtBQUNwQyxxRUFBb0I7QUFDcEI7OztBQUdBOzs7QUFHQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFnQjs7QUFFckM7QUFDQTs7Ozs7QUFLQTs7O0FBR0EsK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2stb2JqZWN0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdXNlci1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkRheXMubWpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbn1cblxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdGFzay1pdGVtcy1jb250YWluZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIC8qIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDYwMHB4OyAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgXG4gICAgXG59XG4udGFzay1pdGVtLWVsZW1lbnQge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xucGFkZGluZy10b3A6IDIwcHg7XG59XG4jdGFzay1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgIGdyaWQtcm93OiAxO1xuICAgIGdyaWQtY29sdW1uOiAyLzk7XG5cbn1cbiN0YXNrLXByb2plY3Qge1xuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMi85O1xuXG59XG4jdGFzay1kYXRlIHtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogOC8xMDtcbiAgICBcbn1cbiN0YXNrLXN0YXJ0IHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogOTtcbn1cblxuXG4jc3RhcnQtc3RvcC1idXR0b24ge1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcbmhlaWdodDogMjAwcHg7ICAgIFxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiNwcm9qZWN0LWZpbHRlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyNXB4IDA7XG4gICAgXG59XG4jZmlsdGVyLXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICByb3ctZ2FwOiAyMHB4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cbiNwcm9qZWN0LWZpbHRlciB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5kaWFsb2cge1xuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcHVycGxlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFBvc2l0aW9uIHRoZSBkaWFsb2cgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0ICovXG4gICAgdG9wOiA1MCU7IC8qIFBvc2l0aW9uIHRoZSBkaWFsb2cgaGFsZndheSBkb3duIHRoZSB2aWV3cG9ydCAqL1xuICAgIGxlZnQ6IDUwJTsgLyogUG9zaXRpb24gdGhlIGRpYWxvZyBoYWxmd2F5IGFjcm9zcyB0aGUgdmlld3BvcnQgKi9cbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogT2Zmc2V0IHRoZSBkaWFsb2cncyBwb3NpdGlvbiBieSBoYWxmIGl0cyBvd24gd2lkdGggYW5kIGhlaWdodCB0byBjZW50ZXIgaXQgKi9cbiAgICAvKiBBZGQgd2lkdGggYW5kIGhlaWdodCBpZiBuZWVkZWQgKi9cbiAgICB3aWR0aDogODAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIFxufVxuZGlhbG9nOjpiYWNrZHJvcCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XG59XG4uZGlhbG9nLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHJvdy1nYXA6IDIwcHg7XG59XG4jY3JlYXRlLWNsb3NlIHtcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyAgIFxuICAgfVxuZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIHJvdy1nYXA6IDIwcHg7XG59XG4uZm9ybS13cmFwcGVycyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG59XG4jY3JlYXRlLWRlc2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jY3JlYXRlLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbmZvcm0gYnV0dG9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgcGFkZGluZzogNXB4IDA7XG5cbn1cbiN1cGRhdGUtbmF2LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4jdXBkYXRlLWRlc2NyaXB0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdXBkYXRlLXByb2plY3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNjcmVhdGUtZGF0ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5cblxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7SUFDVCxzQkFBc0I7O0FBRTFCOzs7QUFHQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkI7bUJBQ2U7SUFDZixzQkFBc0I7OztBQUcxQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixhQUFhO0lBQ2Isa0NBQWtDO0lBQ2xDLHNDQUFzQztBQUMxQyxpQkFBaUI7QUFDakI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCOztJQUV2QixXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7QUFDbEI7OztBQUdBO0lBQ0ksd0JBQXdCO0FBQzVCLGFBQWE7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZUFBZTs7QUFFbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztBQUV2QjtBQUNBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtBQUNBLHVCQUF1QjtJQUNuQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGVBQWUsRUFBRSxpREFBaUQ7SUFDbEUsUUFBUSxFQUFFLGtEQUFrRDtJQUM1RCxTQUFTLEVBQUUsb0RBQW9EO0lBQy9ELGdDQUFnQyxFQUFFLCtFQUErRTtJQUNqSCxtQ0FBbUM7SUFDbkMsVUFBVTtJQUNWLG9CQUFvQjs7QUFFeEI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksc0JBQXNCO0dBQ3ZCO0FBQ0g7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jdGFzay1pdGVtcy1jb250YWluZXIge1xcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcXG4gICAgLyogaGVpZ2h0OiA2MDBweDtcXG4gICAgd2lkdGg6IDYwMHB4OyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBcXG4gICAgXFxufVxcbi50YXNrLWl0ZW0tZWxlbWVudCB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG5wYWRkaW5nLXRvcDogMjBweDtcXG59XFxuI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuXFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMi85O1xcblxcbn1cXG4jdGFzay1wcm9qZWN0IHtcXG4gICAgY29sb3I6IHllbGxvd2dyZWVuO1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDIvOTtcXG5cXG59XFxuI3Rhc2stZGF0ZSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogOC8xMDtcXG4gICAgXFxufVxcbiN0YXNrLXN0YXJ0IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiA5O1xcbn1cXG5cXG5cXG4jc3RhcnQtc3RvcC1idXR0b24ge1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwdXJwbGU7XFxuaGVpZ2h0OiAyMDBweDsgICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4jcHJvamVjdC1maWx0ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI1cHggMDtcXG4gICAgXFxufVxcbiNmaWx0ZXItd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG59XFxuI3Byb2plY3QtZmlsdGVyIHtcXG4gICAgd2lkdGg6IDYwJTtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbi5kaWFsb2cge1xcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwdXJwbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydCAqL1xcbiAgICB0b3A6IDUwJTsgLyogUG9zaXRpb24gdGhlIGRpYWxvZyBoYWxmd2F5IGRvd24gdGhlIHZpZXdwb3J0ICovXFxuICAgIGxlZnQ6IDUwJTsgLyogUG9zaXRpb24gdGhlIGRpYWxvZyBoYWxmd2F5IGFjcm9zcyB0aGUgdmlld3BvcnQgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIE9mZnNldCB0aGUgZGlhbG9nJ3MgcG9zaXRpb24gYnkgaGFsZiBpdHMgb3duIHdpZHRoIGFuZCBoZWlnaHQgdG8gY2VudGVyIGl0ICovXFxuICAgIC8qIEFkZCB3aWR0aCBhbmQgaGVpZ2h0IGlmIG5lZWRlZCAqL1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgXFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMjBweDtcXG59XFxuI2NyZWF0ZS1jbG9zZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7ICAgXFxuICAgfVxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxufVxcbi5mb3JtLXdyYXBwZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuI2NyZWF0ZS1kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNjcmVhdGUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmZvcm0gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuXFxufVxcbiN1cGRhdGUtbmF2LXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jdXBkYXRlLWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3VwZGF0ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2NyZWF0ZS1kYXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIlxuY2xhc3MgVGFzayB7XG4gICAgc3RhdGljIGlkQ291bnRlciA9IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmlkID0gVGFzay5pZENvdW50ZXIrKztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdCwgZHVlRGF0ZSkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkZXNjcmlwdGlvbixwcm9qZWN0LCBkdWVEYXRlKTtcblxuICAgIHJldHVybiB0YXNrXG59XG5mdW5jdGlvbiBhZGRUYXNrVG9BbkFycmF5KG9iamVjdCwgYXJyYXlOYW1lKSB7XG4gICAgYXJyYXlOYW1lLnB1c2gob2JqZWN0KVxufVxuLy8gZmFjdG9yeSBmb3IgcHJvamVjdCBhcnJheXNcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5RmFjdG9yeSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50VGFza0luZGV4OyBcblxuICAgIGZ1bmN0aW9uIGdldEFycmF5KCkge1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuICAgIH1cbiAgICBmdW5jdGlvbiBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChpZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gaWQ7XG4gICAgICAgIGxldCBzaGlmdGVkSWQgPSBwYXJzZUludCgoZWxlbWVudCkgLTEpO1xuXG5yZXR1cm4gc2hpZnRlZElkO1xuICAgIH1cbmZ1bmN0aW9uIGdldEFycmF5SXRlbShpbmRleCkge1xuICAgIHJldHVybiBhcnJheVtpbmRleF1cbn1cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrSW5kZXgoaW5kZXgpIHtcbiAgICBjdXJyZW50VGFza0luZGV4ID0gaW5kZXg7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50VGFza0luZGV4KCkge1xuICAgIHJldHVybiBjdXJyZW50VGFza0luZGV4O1xufVxuZnVuY3Rpb24gZGVsZXRlVGFza09iamVjdChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59XG5mdW5jdGlvbiBzdGFydChpbmRleCkge1xuICAgICAgICBhcnJheVtpbmRleF0uc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxufVxuZnVuY3Rpb24gc3RvcChpbmRleCkge1xuICAgIGFycmF5W2luZGV4XS5lbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBcbn1cbmZ1bmN0aW9uIGVsYXBzZWQoaW5kZXgpIHtcbiAgICBpZiAoIWFycmF5W2luZGV4XS5zdGFydFRpbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdGFydGVkIScpXG4gICAgfVxuICAgIGlmICghYXJyYXlbaW5kZXhdLmVuZFRpbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdG9wcGVkIScpXG4gICAgfVxuXG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gYXJyYXlbaW5kZXhdLmVuZFRpbWUgLSBhcnJheVtpbmRleF0uc3RhcnRUaW1lO1xuXG4gICAgcmV0dXJuIG1pbGxpc2Vjb25kcztcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShtaWxsaXNlY29uZHMpIHtcbiAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwO1xuICBcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gYCR7cGFkWmVybyhob3Vycyl9OiR7cGFkWmVybyhtaW51dGVzKX06JHtwYWRaZXJvKHNlY29uZHMpfWA7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHBhZFplcm8obnVtYmVyKSB7XG4gICAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkU3BlbnRUaW1lKGluZGV4KSB7XG5sZXQgdG90YWxNaWxsaVNlY29uZHMgPSAwO1xuZm9yIChsZXQgaSA9IDA7IGkgPGFycmF5W2luZGV4XS5tc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG5sZXQgZWxlbWVudCA9IGFycmF5W2luZGV4XS5tc0FycmF5W2ldO1xudG90YWxNaWxsaVNlY29uZHMgKz0gZWxlbWVudDtcblxufVxucmV0dXJuIGZvcm1hdFRpbWUodG90YWxNaWxsaVNlY29uZHMpO1xufSAgXG4gZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKGtleSwgYXJyYXkpIHtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgYXJyYXkpXG4gfSBcbiAgXG5cblxucmV0dXJuIHtcbiAgICBnZXRBcnJheSxcbiAgICBhZGRJdGVtLFxuICAgIGRvd25TaGlmdElkVG9BcnJheUluZGV4LFxuICAgIGdldEFycmF5SXRlbSxcbiAgICBzZXRDdXJyZW50VGFza0luZGV4LFxuICAgIGdldEN1cnJlbnRUYXNrSW5kZXgsXG4gICAgZGVsZXRlVGFza09iamVjdCxcbnN0YXJ0LFxuc3RvcCxcbmVsYXBzZWQsXG5nZXRGb3JtYXR0ZWRTcGVudFRpbWUsXG5zZXRMb2NhbFN0b3JhZ2UsXG5cblxufTtcbn1cblxuLy8gc2VjdGlvbiBmb3IgcHJvamVjdCBzZWxlY3Qgb3B0aW9uIGRyb3Bkb3duIGltcGxlbWVudGF0aW9uXG5cblxuXG5cblxuLy8gcmVmYWN0b3JlZCBmYWN0b3J5IG1ldGhvZHMgdG8gZ2xvYmFsIGZ1bmN0aW9uc1xuZnVuY3Rpb24gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoaWQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gaWQ7XG4gICAgbGV0IHNoaWZ0ZWRJZCA9IHBhcnNlSW50KChlbGVtZW50KSAtMSk7XG5cbnJldHVybiBzaGlmdGVkSWQ7XG59XG5mdW5jdGlvbiBzdGFydChpbmRleCkge1xuICAgIGxvY2FsU3RvcmFnZS5hbGxUYXNrc1tpbmRleF0uc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxufVxuZnVuY3Rpb24gc3RvcChpbmRleCkge1xuYXJyYXlbaW5kZXhdLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG59XG5mdW5jdGlvbiBlbGFwc2VkKGluZGV4KSB7XG5pZiAoIWFycmF5W2luZGV4XS5zdGFydFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0YXJ0ZWQhJylcbn1cbmlmICghYXJyYXlbaW5kZXhdLmVuZFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0b3BwZWQhJylcbn1cblxuY29uc3QgbWlsbGlzZWNvbmRzID0gYXJyYXlbaW5kZXhdLmVuZFRpbWUgLSBhcnJheVtpbmRleF0uc3RhcnRUaW1lO1xuXG5yZXR1cm4gbWlsbGlzZWNvbmRzO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKG1pbGxpc2Vjb25kcykge1xuY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbmNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbmNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbmNvbnN0IHNlY29uZHMgPSB0b3RhbFNlY29uZHMgJSA2MDtcblxuY29uc3QgZm9ybWF0dGVkVGltZSA9IGAke3BhZFplcm8oaG91cnMpfToke3BhZFplcm8obWludXRlcyl9OiR7cGFkWmVybyhzZWNvbmRzKX1gO1xucmV0dXJuIGZvcm1hdHRlZFRpbWU7XG59XG5cbmZ1bmN0aW9uIHBhZFplcm8obnVtYmVyKSB7XG5yZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xufVxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkU3BlbnRUaW1lKGluZGV4KSB7XG5sZXQgdG90YWxNaWxsaVNlY29uZHMgPSAwO1xuZm9yIChsZXQgaSA9IDA7IGkgPGFycmF5W2luZGV4XS5tc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG5sZXQgZWxlbWVudCA9IGFycmF5W2luZGV4XS5tc0FycmF5W2ldO1xudG90YWxNaWxsaVNlY29uZHMgKz0gZWxlbWVudDtcblxufVxucmV0dXJuIGZvcm1hdFRpbWUodG90YWxNaWxsaVNlY29uZHMpO1xufSAgXG5cblxuXG5cbmV4cG9ydCB7XG5cbmNyZWF0ZVRhc2tPYmplY3QsXG5hZGRUYXNrVG9BbkFycmF5LFxuY3JlYXRlQXJyYXlGYWN0b3J5LFxuZG93blNoaWZ0SWRUb0FycmF5SW5kZXgsXG5cbn0iLCJpbXBvcnQge1xuICAgICBmb3JtYXREaXN0YW5jZSxcbiAgICAgIHN1YkRheXMgXG4gICAgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuXG5pbXBvcnQge1xuICAgIFN0b3B3YXRjaCxcbiAgICBjcmVhdGVUYXNrT2JqZWN0LFxuYWRkVGFza1RvQW5BcnJheSxcbn0gZnJvbSAnLi90YXNrLW9iamVjdC1jb21wb25lbnQnO1xuXG5cblxuLy8gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHN0YXJ0IGJ1dHRvblxuZnVuY3Rpb24gc3RhcnRCdG5FdmVudEhhbmRsZXIoKSB7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1zdG9wLWJ1dHRvbicpXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3BlbkNyZWF0ZUZvcm1EaWFsb2coKTtcbiAgICBcbiAgICB9KVxuICAgIH1cblxuLy8gY3JlYXRlIHRhc2sgaXRlbXMgY29udGFpbmVyIFxuZnVuY3Rpb24gdGFza0l0ZW1zQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmlkID0gJ3Rhc2staXRlbXMtY29udGFpbmVyJ1xuXG5yZXR1cm4gY29udGFpbmVyO1xufVxuLy8gY3JlYXRlIHRhc2sgaXRlbVxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW0oYXJyYXkpIHtcbmNvbnN0IHRhc2tJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWl0ZW1zLWNvbnRhaW5lcicpO1xuICAgZm9yIChsZXQgaSA9IDA7aSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpXTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFza0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0tZWxlbWVudCcpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5pZCA9IGl0ZW0uaWQ7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgZGl2LmlkID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICBkaXYyLmlkID0gJ3Rhc2stcHJvamVjdCc7XG4gICAgICAgIGRpdjIudGV4dENvbnRlbnQgPSBpdGVtLnByb2plY3Q7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIGRpdjMuaWQgPSAndGFzay1kYXRlJztcbiAgICAgICAgaWYgKCFpdGVtLmRheXNMZWZ0KSB7XG5kaXYzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdjMudGV4dENvbnRlbnQgPSBgJHtpdGVtLmRheXNMZWZ0fSBkYXlzIGxlZnRgO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZGl2IGZvciBzdGFydCBhbmQgc3RvcCBidXR0b25cbiAgICAgICAgY29uc3QgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2NC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBvbmVudCcpXG5kaXY0LmlkID0gJ3Rhc2stc3RhcnQnO1xuZGl2NC50ZXh0Q29udGVudCA9IGl0ZW0uaXNDb21wbGV0ZTtcblxuXG5cbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdjIpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkaXYzKVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2NClcbiAgICAgICAgXG4gICAgICAgIHRhc2tJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbUVsZW1lbnQpXG4gICAgfVxuICAgICAgICBcbiAgICByZXR1cm4gdGFza0l0ZW1zQ29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGUgc3RhcnQgYW5kIHN0b3AgYnV0dG9uIGNvbXBvbmVudFxuZnVuY3Rpb24gc3RhcnRTdG9wQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5pZCA9ICdzdGFydC1zdG9wLWJ1dHRvbic7XG5jb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbmgzLnRleHRDb250ZW50ID0gJysnO1xuXG5idXR0b24uYXBwZW5kQ2hpbGQoaDMpXG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBjcmVhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ2NyZWF0ZS1kaWFsb2cnO1xuXG5jb25zdCBkaWFsb2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpYWxvZ0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNvbnRlbnQnKVxuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlLmlkID0gJ2NyZWF0ZS1jbG9zZSc7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdOZXcgVGFzayc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ2NyZWF0ZS1mb3JtJ1xuXG5jb25zdCB3cmFwcGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjEuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ3RleHQnKVxud3JhcHBlcjEuYXBwZW5kQ2hpbGQobGFiZWwxKVxud3JhcHBlcjEuYXBwZW5kQ2hpbGQoaW5wdXQxKVxuXG5jb25zdCB3cmFwcGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLXByb2plY3QnLCdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG5pbnB1dDIuaWQgPSAnY3JlYXRlLXByb2plY3QnO1xud3JhcHBlcjIuYXBwZW5kQ2hpbGQobGFiZWwyKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQoaW5wdXQyKVxuXG5jb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24xLnZhbHVlID0gJ25vLXByb2plY3QnXG5vcHRpb24xLnRleHQgPSAnTm8gUHJvamVjdCc7XG5jb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24yLnZhbHVlID0gJ2NyZWF0ZS1wcm9qZWN0J1xub3B0aW9uMi50ZXh0ID0gJ0NyZWF0ZSBQcm9qZWN0JztcblxuXG4vLyBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbi8vIGlucHV0My5pZCA9ICdjcmVhdGUtc3RhcnQtdGltZSdcblxuY29uc3QgaW5wdXQzID0gY3JlYXRlRGF0ZVRpbWVJbnB1dCgnY3JlYXRlLWRhdGUnKTtcblxuXG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuc3VibWl0LmlkID0gJ2NyZWF0ZS1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIxKTtcbmZvcm0uYXBwZW5kQ2hpbGQod3JhcHBlcjIpO1xuLy8gZm9ybS5hcHBlbmRDaGlsZChsYWJlbDMpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDMpXG5mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcbmlucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24xKVxuaW5wdXQyLmFwcGVuZENoaWxkKG9wdGlvbjIpXG5cbnJldHVybiBkaWFsb2c7XG59XG5cbi8vIHVwZGF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gdXBkYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpXG5kaWFsb2cuaWQgPSAndXBkYXRlLWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IHdyYXBwZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53cmFwcGVyMS5pZCA9ICd1cGRhdGUtbmF2LXdyYXBwZXInO1xuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS5pZCA9ICd1cGRhdGUtY2xvc2UnO1xuY2xvc2UudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbndyYXBwZXIxLmFwcGVuZENoaWxkKGNsb3NlKVxuXG5jb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5yZW1vdmUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcbnJlbW92ZS50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xucmVtb3ZlLmlkID0gJ3VwZGF0ZS1kZWxldGUnO1xud3JhcHBlcjEuYXBwZW5kQ2hpbGQocmVtb3ZlKVxuXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdVcGRhdGUgVGFzayc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ3VwZGF0ZS1mb3JtJ1xuXG5jb25zdCB3cmFwcGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgndXBkYXRlLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgndXBkYXRlLWRlc2NyaXB0aW9uJywgJ3RleHQnKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQobGFiZWwxKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQoaW5wdXQxKVxuXG5jb25zdCB3cmFwcGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjMuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgndXBkYXRlLXByb2plY3QnLCdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDIgPSBjcmVhdGVJbnB1dCgndXBkYXRlLXByb2plY3QnLCd0ZXh0Jyk7XG53cmFwcGVyMy5hcHBlbmRDaGlsZChsYWJlbDIpXG53cmFwcGVyMy5hcHBlbmRDaGlsZChpbnB1dDIpXG5cbmNvbnN0IGlucHV0MyA9IGNyZWF0ZURhdGVUaW1lSW5wdXQoJ3VwZGF0ZS1kYXRlJyk7XG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuc3VibWl0LmlkID0gJ3VwZGF0ZS1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyMSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIyKVxuZm9ybS5hcHBlbmRDaGlsZCh3cmFwcGVyMylcbi8vIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwzKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQzKVxuZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG5cbnJldHVybiBkaWFsb2c7XG59XG4vLyBjcmVhdGUgcHJvamVjdCBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuY2xvc2UudGV4dENvbnRlbnQgPSAnJnRpbWVzOyc7XG5jbG9zZS5pZCA9ICdjcmVhdGUtcHJvamVjdC1jbG9zZSc7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ05ldyBQcm9qZWN0JztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAnY3JlYXRlLXByb2plY3QtZm9ybSdcbmNvbnN0IGxhYmVsMSA9IGNyZWF0ZUxhYmVsKCdjcmVhdGUtcHJvamVjdC1uYW1lJywgJ1Byb2plY3QnKTtcbmNvbnN0IGlucHV0MSA9IGNyZWF0ZUlucHV0KCdjcmVhdGUtY3JlYXRlLXByb2plY3QtbmFtZScsICd0ZXh0JylcbmlucHV0MS5wbGFjZWhvbGRlciA9ICdFbnRlciBhIHByb2plY3QgbmFtZSc7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdC5pZCA9ICdjcmVhdGUtcHJvamVjdC1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKGxhYmVsMSk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MSlcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuXG5yZXR1cm4gZGlhbG9nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChmb3JBdHRyaWJ1dGUsdGV4dENvbnRlbnQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5odG1sRm9yID0gZm9yQXR0cmlidXRlO1xubGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxucmV0dXJuIGxhYmVsO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoaWRBdHRyaWJ1dGUsdHlwZUF0dHJpYnV0ZSl7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0LmlkID0gaWRBdHRyaWJ1dGU7XG5pbnB1dC50eXAgPSB0eXBlQXR0cmlidXRlO1xuXG5yZXR1cm4gaW5wdXQ7IFxufVxuXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgYW5kIG9wZW4gZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIG9wZW5DcmVhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGlhbG9nJylcbiAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICByZXR1cm4gZGlhbG9nO1xufVxuZnVuY3Rpb24gb3BlblVwZGF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBjbG9zZUNyZWF0ZURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cbmZ1bmN0aW9uIGNsb3NlVXBkYXRlRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGlhbG9nJylcbiAgICBcbiAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKClcbiAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcbiAgICBkaWFsb2cuY2xvc2UoKVxufVxuZnVuY3Rpb24gb3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBjbG9zZUNyZWF0ZVByb2plY3REaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRhc2sgaXRlbXMgZnJvbSBjb250YWluZXJcbmZ1bmN0aW9uIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKSB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxuXG5mb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtMTsgaSA+PSAwOyBpLS0pIHtcbmNvbnN0IGNoaWxkID0gY29udGFpbmVyLmNoaWxkcmVuW2ldO1xuY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKVxuXG59XG59XG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRhc2tzIGNvbnRhaW5lciBlbGVtZW50c1xuZnVuY3Rpb24gdXBkYXRlVGFza3NDb250YWluZXIoYXJyYXlOYW1lKSB7XG5cbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1maWx0ZXInKVxuY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdEVsZW1lbnQudmFsdWU7XG5cblxuXG5pZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgYWxlcnQoc2VsZWN0ZWRWYWx1ZSlcbmNvbnN0IHVwZGF0ZSA9IG91dHB1dC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrSXRlbShhcnJheU5hbWUpKVxuXG5yZXR1cm4gdXBkYXRlO1xufVxuXG59XG4vLyBwcm9qZWN0IGZpbHRlciBzZWxlY3QgZG9tIGVsZW1lbnRcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGaWx0ZXJTZWxlY3QoKSB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29udGFpbmVyLmlkID0gJ3Byb2plY3QtZmlsdGVyLWNvbnRhaW5lcidcblxuY29uc3QgZmlsdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZmlsdGVyV3JhcHBlci5pZCA9ICdmaWx0ZXItd3JhcHBlcidcblxuY29uc3QgbGFiZWwyID0gY3JlYXRlTGFiZWwoJ3Byb2plY3QtZmlsdGVyJywnRmlsdGVyJyk7XG5jb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG5pbnB1dDIuaWQgPSAncHJvamVjdC1maWx0ZXInO1xuXG5jb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24xLnZhbHVlID0gJ2RlZmF1bHQnXG5vcHRpb24xLnRleHQgPSAnLS0gU2VsZWN0IFByb2plY3QgLS0nO1xuXG5jb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24yLnZhbHVlID0gJ2FsbC10YXNrcydcbm9wdGlvbjIudGV4dCA9ICdBbGwgVGFza3MnO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsdGVyV3JhcHBlcilcbmZpbHRlcldyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwyKVxuZmlsdGVyV3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dDIpXG5pbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMSlcbmlucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24yKVxuXG5yZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGUgbWV0aG9kIHRoYXQgY3JlYXRzIGR1IGRhdGUgbGFiZWwgYW5kIGlucHV0XG5mdW5jdGlvbiBjcmVhdGVEYXRlVGltZUlucHV0KGlkQXR0cmlidXRlKSB7XG4gICAgY29uc3QgZGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb3JtLXdyYXBwZXJzJyk7XG5cbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlkQXR0cmlidXRlLCAnRGF0ZScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9IGlkQXR0cmlidXRlO1xuICAgIGlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cbiAgICBkYXRlV3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGRhdGVXcmFwcGVyO1xufVxuXG5cblxuZXhwb3J0IHtcbiAgICBzdGFydEJ0bkV2ZW50SGFuZGxlcixcbnRhc2tJdGVtc0NvbnRhaW5lcixcbmNyZWF0ZVRhc2tJdGVtLFxuc3RhcnRTdG9wQnV0dG9uLFxuY3JlYXRlRm9ybURpYWxvZyxcbnVwZGF0ZUZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlRm9ybURpYWxvZyxcbm9wZW5VcGRhdGVGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVEaWFsb2csXG5jbG9zZVVwZGF0ZURpYWxvZyxcblxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcixcbnVwZGF0ZVRhc2tzQ29udGFpbmVyLFxuY3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5jbG9zZUNyZWF0ZVByb2plY3REaWFsb2csXG5jcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0LFxuXG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXkgcGVyaW9kcyBiZXR3ZWVuIHR3byBkYXRlcy4gRnJhY3Rpb25hbCBkYXlzIGFyZVxuICogdHJ1bmNhdGVkIHRvd2FyZHMgemVyby5cbiAqXG4gKiBPbmUgXCJmdWxsIGRheVwiIGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgbG9jYWwgdGltZSBpbiBvbmUgZGF5IHRvIHRoZSBzYW1lXG4gKiBsb2NhbCB0aW1lIG9uIHRoZSBuZXh0IG9yIHByZXZpb3VzIGRheS4gQSBmdWxsIGRheSBjYW4gc29tZXRpbWVzIGJlIGxlc3MgdGhhblxuICogb3IgbW9yZSB0aGFuIDI0IGhvdXJzIGlmIGEgZGF5bGlnaHQgc2F2aW5ncyBjaGFuZ2UgaGFwcGVucyBiZXR3ZWVuIHR3byBkYXRlcy5cbiAqXG4gKiBUbyBpZ25vcmUgRFNUIGFuZCBvbmx5IG1lYXN1cmUgZXhhY3QgMjQtaG91ciBwZXJpb2RzLCB1c2UgdGhpcyBpbnN0ZWFkOlxuICogYE1hdGgudHJ1bmMoZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkvMjQpfDBgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGFjY29yZGluZyB0byB0aGUgbG9jYWwgdGltZXpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4gKiAvLz0+IDkyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHNpZ24gPSBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KTtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpKTtcblxuICBfZGF0ZUxlZnQuc2V0RGF0ZShfZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBkYXlzIC0gZGlmZiBpbiBjYWxlbmRhciBkYXlzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIGRheSBpcyBub3QgZnVsbFxuICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcbiAgY29uc3QgaXNMYXN0RGF5Tm90RnVsbCA9IE51bWJlcihcbiAgICBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gLXNpZ24sXG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdERheU5vdEZ1bGwpO1xuICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59XG5cbi8vIExpa2UgYGNvbXBhcmVBc2NgIGJ1dCB1c2VzIGxvY2FsIHRpbWUgbm90IFVUQywgd2hpY2ggaXMgbmVlZGVkXG4vLyBmb3IgYWNjdXJhdGUgZXF1YWxpdHkgY29tcGFyaXNvbnMgb2YgVVRDIHRpbWVzdGFtcHMgdGhhdCBlbmQgdXBcbi8vIGhhdmluZyB0aGUgc2FtZSByZXByZXNlbnRhdGlvbiBpbiBsb2NhbCB0aW1lLCBlLmcuIG9uZSBob3VyIGJlZm9yZVxuLy8gRFNUIGVuZHMgdnMuIHRoZSBpbnN0YW50IHRoYXQgRFNUIGVuZHMuXG5mdW5jdGlvbiBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkaWZmID1cbiAgICBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCkgfHxcbiAgICBkYXRlTGVmdC5nZXREYXRlKCkgLSBkYXRlUmlnaHQuZ2V0RGF0ZSgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0SG91cnMoKSAtIGRhdGVSaWdodC5nZXRIb3VycygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWludXRlcygpIC0gZGF0ZVJpZ2h0LmdldE1pbnV0ZXMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldFNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRTZWNvbmRzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNaWxsaXNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRNaWxsaXNlY29uZHMoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkRheXM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuZm9ybWF0LCBkaWZmZXJlbmNlSW5EYXlzXG59IGZyb20gJ2RhdGUtZm5zJ1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtcbiAgICBzdGFydEJ0bkV2ZW50SGFuZGxlcixcbiAgICB0YXNrSXRlbXNDb250YWluZXIsXG5jcmVhdGVUYXNrSXRlbSxcbnN0YXJ0U3RvcEJ1dHRvbixcbmNyZWF0ZUZvcm1EaWFsb2csXG5vcGVuRm9ybURpYWxvZyxcblxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcixcbnVwZGF0ZVRhc2tFbGVtZW50cyxcbnVwZGF0ZVRhc2tzQ29udGFpbmVyLFxuY2xvc2VEaWFsb2csXG51cGRhdGVGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVEaWFsb2csXG5jbG9zZVVwZGF0ZURpYWxvZyxcbm9wZW5VcGRhdGVGb3JtRGlhbG9nLFxuY3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5jbG9zZUNyZWF0ZVByb2plY3REaWFsb2csXG5jcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0LFxuXG59IGZyb20gJy4vdXNlci1pbnRlcmZhY2UnXG5cbi8vIGltcG9ydCBvYmplY3QgcmVsYXRlZCBtb2R1bGVzXG5pbXBvcnQge1xuY3JlYXRlVGFza09iamVjdCxcbiAgICBhZGRUYXNrVG9BbkFycmF5LFxuICAgIGNyZWF0ZUFycmF5RmFjdG9yeSxcbiAgICBkb3duU2hpZnRJZFRvQXJyYXlJbmRleCxcbiAgICBcbn0gZnJvbSAnLi90YXNrLW9iamVjdC1jb21wb25lbnQnXG5cbi8vIGFsbCBkb20gcmVsYXRlZCBmdW5jdGlvbnMgZ28gaGVyZVxuLy8gYXBwZW5kIHRhc2sgaXRlbXMgY29udGFpbmVyIHRvIG91dHB1dFxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jylcblxub3V0cHV0LmFwcGVuZENoaWxkKHRhc2tJdGVtc0NvbnRhaW5lcigpKVxuXG4vLyBhcHBlbmQgcHJvamVjdCBmaWx0ZXIgZmVhdHVyZSB0byBkb21cbm91dHB1dC5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0KCkpXG4vLyBhcHBlbmQgc3RhcnQgc3RvcCBidXR0b24gdG8gYm9keSBcbmJvZHkuYXBwZW5kQ2hpbGQoc3RhcnRTdG9wQnV0dG9uKCkpXG4vLyBhcHBlbmQgZm9ybSB0byBodG1sXG5ib2R5Lmluc2VydEJlZm9yZShjcmVhdGVGb3JtRGlhbG9nKCksIG91dHB1dClcbmJvZHkuYXBwZW5kQ2hpbGQodXBkYXRlRm9ybURpYWxvZygpKVxuYm9keS5hcHBlbmRDaGlsZChjcmVhdGVQcm9qZWN0Rm9ybURpYWxvZygpKVxuXG5cblxuXG4vLyBzdGFydCBidG4gZXZlbnQgaGFuZGxlclxuc3RhcnRCdG5FdmVudEhhbmRsZXIoKVxuXG5jb25zb2xlLmxvZyhKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSk7XG5cbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGluaXRpYXRpbmcgdXBkYXRpbmcgdGFzayBlbGVtZW50c1xuZnVuY3Rpb24gdXBkYXRlVGFza0VsZW1lbnRFdmVudEhhbmRsZXIoKSB7XG4gICAgY29uc3QgcGFyZW50RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWl0ZW1zLWNvbnRhaW5lcicpXG5cbnBhcmVudEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50YXNrLWl0ZW0nKSkge1xuLy8gY29uc3Qgc2hpZnRlZEluZGV4ID0gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuY29uc3QgZG9tVGFza0lkID0gK2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkO1xuYWxlcnQoZG9tVGFza0lkICsgJyBpcyB0aGUgaWQga2V5JylcblxuY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpXG5jb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuLy8gY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcbmNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5LmZpbmQob2JqID0+IG9iai5pZCA9PT0gZG9tVGFza0lkKVxuXG4vLyBzZXQgdGhlIGN1cnJlbnQgdGFzayBvYmplY3QgaW5kZXggdmFsdWUgdG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2N1cnJlbnRUYXNrJywgZG9tVGFza0lkKVxuXG4vLyByZXRyaWV2ZSBsb2NhbCBzdG9yYWdlIHZhbHVlcyB0byBwb3B1bGF0ZSBkb20gZWxlbWVudHMgXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGVzY3JpcHRpb24nKTtcbmRlc2NyaXB0aW9uLnZhbHVlID0gc2VsZWN0ZWRPYmplY3QuZGVzY3JpcHRpb25cbmNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXByb2plY3QnKTtcbnByb2plY3QudmFsdWUgPSBzZWxlY3RlZE9iamVjdC5wcm9qZWN0O1xuY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGF0ZScpO1xuZGF0ZS52YWx1ZSA9IHNlbGVjdGVkT2JqZWN0LmR1ZURhdGU7XG5cblxub3BlblVwZGF0ZUZvcm1EaWFsb2coKVxuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudGFzay1jb21wb25lbnQnKSAmJlxuICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ3RydWUnKSB7XG5cbiAgICAgICAgLy8gY29uc3Qgc2hpZnRlZEluZGV4ID0gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICBjb25zdCBkb21UYXNrSWQgPSArZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG5cbiAgICAgICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpXG4gICAgICAgIGNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W3NoaWZ0ZWRJbmRleF07XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5LmZpbmQob2JqID0+IG9iai5pZCA9PT0gZG9tVGFza0lkKTtcbiAgICAgICAgXG5zZWxlY3RlZE9iamVjdC5pc0NvbXBsZXRlID0gZmFsc2U7XG4vLyBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSAnZmFsc2UnXG5cbi8vIFVwZGF0ZSB0aGUgZGF0YUFycmF5IHdpdGggdGhlIG1vZGlmaWVkIHNlbGVjdGVkT2JqZWN0XG4vLyBkYXRhQXJyYXlbXSA9IHNlbGVjdGVkT2JqZWN0O1xubGV0IGluZGV4ID0gZGF0YUFycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpIFxuZGF0YUFycmF5W2luZGV4XSA9IHNlbGVjdGVkT2JqZWN0O1xuXG4vLyBTdHJpbmdpZnkgdGhlIGRhdGFBcnJheSBhbmQgc3RvcmUgaXQgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG5cbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKTtcblxuICAgIH0gXG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudGFzay1jb21wb25lbnQnKSAmJlxuICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ2ZhbHNlJykge1xuICAgICAgICBjb25zdCBzaGlmdGVkSW5kZXggPSBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbVRhc2tJZCA9ICtldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgICAgICAvLyBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtzaGlmdGVkSW5kZXhdO1xuY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXkuZmluZChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpXG5cblxuc2VsZWN0ZWRPYmplY3QuaXNDb21wbGV0ZSA9IHRydWU7XG4vLyBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPSAndHJ1ZSdcblxuLy8gVXBkYXRlIHRoZSBkYXRhQXJyYXkgd2l0aCB0aGUgbW9kaWZpZWQgc2VsZWN0ZWRPYmplY3Rcbi8vIGRhdGFBcnJheVtzaGlmdGVkSW5kZXhdID0gc2VsZWN0ZWRPYmplY3Q7XG5sZXQgaW5kZXggPSBkYXRhQXJyYXkuZmluZEluZGV4KG9iaiA9PiBvYmouaWQgPT09IGRvbVRhc2tJZCkgXG5kYXRhQXJyYXlbaW5kZXhdID0gc2VsZWN0ZWRPYmplY3Q7XG5cbi8vIFN0cmluZ2lmeSB0aGUgZGF0YUFycmF5IGFuZCBzdG9yZSBpdCBiYWNrIGludG8gbG9jYWxTdG9yYWdlXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVGFza3MnLCBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpKTtcblxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xudXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG5cbiAgICB9XG59KVxufVxudXBkYXRlVGFza0VsZW1lbnRFdmVudEhhbmRsZXIoKVxuXG5cblxuXG5cblxuLy8gZnVuY3Rpb24gdG8gYWRkIG9iamVjdCB0byBsb2NhbCBzdG9yYWdlIGFycmF5XG5mdW5jdGlvbiBhZGRPYmplY3RUb0xvY2FsU3RvcmFnZUFycmF5KGtleSwgb2JqZWN0KSB7XG4gICAgLy8gY2hlY2tzIGlmIGtleSBleGlzdHMgaW4gc3RvcmFnZSBvciBjcmVhdGVzIG9uZSB3aXRoIGVtcHR5IGFycmF5XG4gICAgLy8gYW5kIHN0b3JlcyBpdCBpbiBhIHZhcmlhYmxlXG5jb25zdCBleGlzdGluZ0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKSB8fCBbXTtcbi8vIHB1c2ggdGhlIG9iamVjdCB0byBhbiBhcnJheSBpbiBzdG9yYWdlXG5leGlzdGluZ0FycmF5LnB1c2gob2JqZWN0KTtcbi8vIHNldCB0aGUgYXJyYXkgd2l0aCBuZXcgb2JqZWN0IGluIGtleSBvZiBzdG9yYWdlIFxubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeShleGlzdGluZ0FycmF5KSlcblxufVxuXG4vLyBmdW5jdGlvbiB0byBoYW5kbGUgZm9ybSBzdWJtaXRcbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQ3JlYXRlRm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgLy8gY2xlYXIgdGhlIGRvbVxuICAgICAgICAgICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBnZXQgZm9ybSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGVzY3JpcHRpb24nKTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXQxLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gaW5wdXQyLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1kYXRlJyk7XG4gICAgICAgICAgICBjb25zdCBkYXRlID0gaW5wdXQzLnZhbHVlO1xuXG4gICAgICAgICAgICBjb25zdCBkYXlzTGVmdCA9IGRheXNMZWZ0VW50aWxEdWVEYXRlKGRhdGUpXG5cblxuXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBvYmplY3RcbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdCwgZGF0ZSlcbiAgICAgICAgLy8gdGFzay5kYXlzTGVmdCA9IGRheXNMZWZ0O1xuXG4gICAgICAgIC8vIGFkZFRhc2tUb0FuQXJyYXkodGFzayxhbGxUYXNrc0FycmF5KVxuICAgICAgICAvLyBhbGxUYXNrc0FycmF5LmFkZEl0ZW0odGFzaylcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzQXJyYXknLCBKU09OLnN0cmluZ2lmeSh0YXNrKSlcbmFkZE9iamVjdFRvTG9jYWxTdG9yYWdlQXJyYXkoJ2FsbFRhc2tzJywgdGFzaylcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG4gICAgICAgIGFsZXJ0KCdjcmVhdGlvbiBldmVudCBoYW5kbGVyJylcbiAgICAgICAgICAgIFxuICAgICAgICAvLyB1cGRhdGUgZG9tIHdpdGggbmV3IHRhc2tcbiAgICAgICAgICAgIC8vIHVwZGF0ZVRhc2tzQ29udGFpbmVyKGFsbFRhc2tzQXJyYXkuZ2V0QXJyYXkoKSlcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzKSlcbiAgICAgICAgXG4gICAgICAgICAgICAvLyByZXNldCBmb3JtIGlucHV0c1xuICAgICAgICBpbnB1dDEudmFsdWUgPSAnJztcbiAgICAgICAgaW5wdXQyLnZhbHVlID0gJyc7ICAgICAgICBcblxuICAgICAgICBjbG9zZUNyZWF0ZURpYWxvZygpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgXG4gICAgICAgICAgICAvLyBldmVudCBoYW5kbGVyIGZvciBzdWJtaXQgdXBkYXRlXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVGb3JtU3VibWl0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICAgICAgICAgICAgICAvLyBnZXQgZm9ybSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dDEudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRhdGUnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRlID0gaW5wdXQzLnZhbHVlO1xuY29uc3QgZGF5c0xlZnQgPSBkYXlzTGVmdFVudGlsRHVlRGF0ZShkYXRlKVxuLy8gZ2V0IGlkIG9mIGN1cnJlbnQgdGFza1xuY29uc3QgY3VycmVudFRhc2tJZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VGFzaycpXG5cbi8vIHVwZGF0ZSB0aGUgdGFzayBvYmplY3QgaW4gbG9jYWwgc3N0b3JhZ2VcbiAgICAgICAgXG4gICAgICAgIC8vIGdldCB0aGUgYWxsIHRhc2tzIGFycmF5IHN0b3JpbmcgdGFzayBvYmplY3RzXG4gICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuICAgICAgICAvLyBjb252ZXJ0IHN0cmluZ2VkIGFycmF5IHRvIG5vcm1hbCBhcnJheVxuICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgICAgICAvLyBnZXQgdGhlIGNvcnJlbGF0ZWQgdGFzayBvYmplY3RcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbY3VycmVudFRhc2tdO1xuICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheS5maW5kKG9iaiA9PiBvYmouaWQgPT09ICtjdXJyZW50VGFza0lkKVxuXG4gICAgICAgIC8vIHNldCBpbnB1dCB2YWx1ZXMgdG8gbG9jYWwgc3RvcmFnZVxuIHNlbGVjdGVkT2JqZWN0LmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gc2VsZWN0ZWRPYmplY3QucHJvamVjdCA9IHByb2plY3Q7XG4gICAgc2VsZWN0ZWRPYmplY3QuZHVlRGF0ZSA9IGRhdGU7XG4gICAgc2VsZWN0ZWRPYmplY3QuZGF5c0xlZnQgPSBkYXlzTGVmdDtcblxuICAgIFxuLy8gY29udmVydCBhcnJheSBiYWNrIGludG8gc3RyaW5nXG5jb25zdCB1cGRhdGVkQXJyYXlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpXG5cbi8vIHN0b3JlIHRoZSB1cGRhdGVkIGFycmF5IGJhY2sgaW50byBsb2NhbCBzdG9yYWdlXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVGFza3MnLCB1cGRhdGVkQXJyYXlTdHJpbmcpXG5cbmNvbnNvbGUubG9nKHNlbGVjdGVkT2JqZWN0KTtcbmNvbnNvbGUubG9nKGRhdGFBcnJheSk7XG5cblxuYWxlcnQoJ3VwZGF0ZSBldmVudCBoYW5kbGVyJylcblxuICAgICAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQxLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBpbnB1dDIudmFsdWUgPSAnJzsgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgY2xvc2VVcGRhdGVEaWFsb2coKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuLy8gYXR0YXRjaCBldmVudCBsaXN0ZW5lciBhbmQgaGFuZGxlciB0byBjcmVhdGUgYW5kIHVwZGF0ZSBmb3JtIHN1Ym1pdCAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWZvcm0nKTtcbiAgICBjcmVhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQ3JlYXRlRm9ybVN1Ym1pdCkgICAgXG4gICAgY29uc3QgdXBkYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZm9ybScpO1xudXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVVwZGF0ZUZvcm1TdWJtaXQpXG4gICAgXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSBmb3JtIGRpYWxvZyB3aXRoIGNsaWNrZWQgdGFza1xuZnVuY3Rpb24gcG9wdWxhdGVGb3JtSW5wdXRzKGFycmF5SW5kZXgpIHtcbmxldCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRlc2NyaXB0aW9uJyk7XG5pbnB1dDEudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUYXNrcylbYXJyYXlJbmRleF0uZGVzY3JpcHRpb247XG5cbmxldCBpbnB1dDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXByb2plY3QnKTtcbmlucHV0Mi52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbFRhc2tzKVthcnJheUluZGV4XS5wcm9qZWN0O1xuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUYXNrc1thcnJheUluZGV4XSkpO1xufVxuXG4vLyBldmVudCBoYW5kbGVyIGZvciBjbG9zaW5nIGNyZWF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY2xvc2VDcmVhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNsb3NlJyk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbmNsb3NlQ3JlYXRlRGlhbG9nKCk7XG4gICAgfSlcbn1cbmNsb3NlQ3JlYXRlRm9ybURpYWxvZygpO1xuXG4vLyBldmVudCBoYW5kbGVyIGZvciBjbG9zaW5nIHVwZGF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY2xvc2VVcGRhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IHVwZGF0ZURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGlhbG9nJylcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jbG9zZScpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuY2xvc2VVcGRhdGVEaWFsb2coKTtcbmFsZXJ0KCd1cGRhdGUgY2xvc2UgZXZlbnQgaGFuZGxlcicpXG4gICAgfSlcbi8vIHJ1bGUgZm9yIGVzY2FwZSBrZXkgZXZlbnQgXG51cGRhdGVEaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChldmVudCkgPT4ge1xuaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZlbnQua2V5ID09PSAnRXNjJykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWxlcnQoJ0VzY2FwZSBrZXkgd2FzIHByZXNzc2VkIGRvd24nKVxuICAgIGNsb3NlVXBkYXRlRGlhbG9nKClcbn1cbi8vIGNoZWNrIGlmIGV2ZW50IHRhcmdldCBpcyBjbGljayBvbiBiYWNrZHJvcFxudXBkYXRlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5pZiAoZXZlbnQudGFyZ2V0ID09PSB1cGRhdGVEaWFsb2cpIHtcbmFsZXJ0KCdiYWNrZHJvcCBjbGlja2VkJylcbmNsb3NlVXBkYXRlRGlhbG9nKClcblxufVxuXG59KVxuXG5cblxuXG59KVxuXG5cblxufVxuY2xvc2VVcGRhdGVGb3JtRGlhbG9nKClcblxuLy8gZXZlbnQgaGFuZGxlciBmb3IgZGVsZXRpbmcgYSB0YXNrIG9iamVjdFxuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZWxldGUnKTtcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRUYXNrJyk7XG4gICAgY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpXG4gICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtjdXJyZW50VGFza107XG4vLyByZW1vdmUgb2JqZWN0IGZyb20gYXJyYXlcbmRhdGFBcnJheS5zcGxpY2UoY3VycmVudFRhc2ssMSlcbmNvbnNvbGUubG9nKGRhdGFBcnJheSk7XG5cbi8vIGNvbnZlcnQgYXJyYXkgYmFjayBpbnRvIHN0cmluZ1xuY29uc3QgdXBkYXRlZEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KVxuICAgICAgIFxuLy8gc3RvcmUgdGhlIHVwZGF0ZWQgYXJyYXkgYmFjayBpbnRvIGxvY2FsIHN0b3JhZ2VcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUYXNrcycsIHVwZGF0ZWRBcnJheVN0cmluZylcblxuLy8gcmVuZGVyIGRvbSB3aXRoIHVwZGF0ZWQgdGFzayBvYmplY3RzXG51cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcblxuXG5jbG9zZVVwZGF0ZURpYWxvZygpXG5cbn0pXG5cblxuXG4vLyBmdW5jdGlvbiB0byBjaGVjayBpZiBzdG9yYWdlIGlzIGF2YWlsYWJsZSBcbmZ1bmN0aW9uIHN0b3JhZ2VBdmFpbGFibGUodHlwZSkge1xuICAgIGxldCBzdG9yYWdlO1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlID0gd2luZG93W3R5cGVdO1xuICAgICAgY29uc3QgeCA9IFwiX19zdG9yYWdlX3Rlc3RfX1wiO1xuICAgICAgc3RvcmFnZS5zZXRJdGVtKHgsIHgpO1xuICAgICAgc3RvcmFnZS5yZW1vdmVJdGVtKHgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZSBpbnN0YW5jZW9mIERPTUV4Y2VwdGlvbiAmJlxuICAgICAgICAvLyBldmVyeXRoaW5nIGV4Y2VwdCBGaXJlZm94XG4gICAgICAgIChlLmNvZGUgPT09IDIyIHx8XG4gICAgICAgICAgLy8gRmlyZWZveFxuICAgICAgICAgIGUuY29kZSA9PT0gMTAxNCB8fFxuICAgICAgICAgIC8vIHRlc3QgbmFtZSBmaWVsZCB0b28sIGJlY2F1c2UgY29kZSBtaWdodCBub3QgYmUgcHJlc2VudFxuICAgICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiUXVvdGFFeGNlZWRlZEVycm9yXCIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5uYW1lID09PSBcIk5TX0VSUk9SX0RPTV9RVU9UQV9SRUFDSEVEXCIpICYmXG4gICAgICAgIC8vIGFja25vd2xlZGdlIFF1b3RhRXhjZWVkZWRFcnJvciBvbmx5IGlmIHRoZXJlJ3Mgc29tZXRoaW5nIGFscmVhZHkgc3RvcmVkXG4gICAgICAgIHN0b3JhZ2UgJiZcbiAgICAgICAgc3RvcmFnZS5sZW5ndGggIT09IDBcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIFxuICBpZiAoc3RvcmFnZUF2YWlsYWJsZShcImxvY2FsU3RvcmFnZVwiKSkge1xuICAgIC8vIFlpcHBlZSEgV2UgY2FuIHVzZSBsb2NhbFN0b3JhZ2UgYXdlc29tZW5lc3NcbiAgICBjb25zb2xlLmxvZygnWWlwcGVlJyk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVG9vIGJhZCwgbm8gbG9jYWxTdG9yYWdlIGZvciB1c1xuICAgIGNvbnNvbGUubG9nKCdOdXBwZWUnKTtcbiAgfVxuICBcbiAgXG4vLyBzZWxlY3Qgb3B0aW9uIGZvcm0gZHJvcGRvd24gaW1wbGVtZW50YXRpb24gXG5cbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QnKVxuY29uc3QgcHJvamVjdE9wdGlvbnMgPSBbJ0phdmFzY3JpcHQnLCAnUHl0aG9uJywgJ1J1YnknXVxuXG5mdW5jdGlvbiBzZXRQcm9qZWN0T3B0aW9ucygpIHtcbnByb2plY3RPcHRpb25zLmZvckVhY2gocHJvamVjdE9wdGlvbiA9PiB7XG5jb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbm9wdGlvbkVsZW1lbnQudmFsdWUgPSBwcm9qZWN0T3B0aW9uO1xub3B0aW9uRWxlbWVudC50ZXh0ID0gcHJvamVjdE9wdGlvbjtcblxuc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxufSk7XG59XG5cbnNlbGVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG5jb25zdCBzZWxlY3RlZEVsZW1lbnQgPSBldmVudC50YXJnZXQudmFsdWU7XG5pZiAoc2VsZWN0ZWRFbGVtZW50ID09PSAnY3JlYXRlLXByb2plY3QnKXtcbiAgICBhbGVydChzZWxlY3RlZEVsZW1lbnQpXG5vcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKVxuXG59XG5cbn0pXG4vLyBoYW5kbGUgY3JlYXRlIHByb2plY3QgZm9ybSBzdWJtaXRcbmNvbnN0IGNyZWF0ZVByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LWZvcm0nKVxuY3JlYXRlUHJvamVjdEZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtY3JlYXRlLXByb2plY3QtbmFtZScpLnZhbHVlO1xucHJvamVjdE9wdGlvbnMucHVzaChwcm9qZWN0TmFtZUlucHV0KVxuLy8gY2FsbCBmdW5jdGlvbiB0byB1cGRhdGUgcHJvamVjdCBvcHRpb25zIFxuc2V0UHJvamVjdE9wdGlvbnMoKTtcblxuY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nKClcblxufSlcbnNldFByb2plY3RPcHRpb25zKCk7XG5cbi8vIGZ1bmN0aW9uIHRvIGNsZWFyIGxvY2FsIHN0b3JhZ2VcbmZ1bmN0aW9uIGNsZWFyTG9jYWxTdG9yYWdlKCkge1xuICAgIGxvY2FsU3RvcmFnZS5jbGVhcigpO1xuICAgIFxufVxuLy8gY2xlYXJMb2NhbFN0b3JhZ2UoKVxuXG4vLyBjYWxsIG9uIHBhZ2UgbG9hZCB0byBkaXNwbGF5IHRhc2tzIGluIGxvY2FsIHN0b3JhZ2Vcbi8vIHVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzQXJyYXkpKVxudXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpXG5cbi8vIGZ1bmN0aW9uIHRvIHN0YXJ0IHRpbWVyIHRoYXQgdGFrZXMgb2JqZWN0IGFzIGFyZ3VtZW50XG5mdW5jdGlvbiBzdGFydFRpbWVyKG9iamVjdCkge1xuXG59XG5cbi8vIGV2ZW50IGxpc3RlbmVyIGFuZCBoYW5kbGVyIGZvciBwcm9qZWN0IGZpbHRlciBmZWF0dXJlXG5jb25zdCBwcm9qZWN0RmlsdGVyU2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZmlsdGVyLWNvbnRhaW5lcicpXG5mdW5jdGlvbiBoYW5kbGVQcm9qZWN0RmlsdGVyU2VsZWN0KCkge1xuICAgIFxuICAgIC8vIGdldCBzZWxlY3QgZWxlbWVudFxuY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZpbHRlcicpXG4vLyByZW1vdmUgY2hpbGRyZW4gb3B0aW9uIGVsZW1lbnRzIFxuZm9yIChsZXQgaSA9IHNlbGVjdEVsZW1lbnQuY2hpbGRyZW4ubGVuZ3RoIC0xOyBpID49IDI7IGktLSkge1xuY29uc3QgY2hpbGQgPSBzZWxlY3RFbGVtZW50LmNoaWxkcmVuW2ldO1xuc2VsZWN0RWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZClcblxufVxuXG4vLyBnZXQgbG9jYWwgc3RvcmFnZSBhcnJheSBvZiB0YXNrIG9iamVjdHNcbmNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuLy8gY29udmVydCBzdHJpbmdlZCBhcnJheSB0byBub3JtYWwgYXJyYXlcbmNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG5cbmNvbnN0IHVuaXF1ZVZhbHVlcyA9IFtdO1xuLy8gbG9vcCB0aHJvdWdoIGFycmF5IG9iamVjdCBpdGVtcyBhbmQgb3V0cHV0IHRoZSBwcm9qZWN0IHZhbHVlXG5mb3IgKGxldCBpID0gMDsgaSA8IGRhdGFBcnJheS5sZW5ndGg7IGkrKykge1xubGV0IGtleSA9IGRhdGFBcnJheVtpXS5wcm9qZWN0O1xuXG5pZiAoIXVuaXF1ZVZhbHVlcy5pbmNsdWRlcyhrZXkpKSB7XG5cbmNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxub3B0aW9uRWxlbWVudC52YWx1ZSA9IGtleTtcbm9wdGlvbkVsZW1lbnQudGV4dCA9IGtleTtcblxuc2VsZWN0RWxlbWVudC5hcHBlbmRDaGlsZChvcHRpb25FbGVtZW50KVxudW5pcXVlVmFsdWVzLnB1c2goa2V5KVxuXG59XG5cbn1cblxufVxucHJvamVjdEZpbHRlclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVByb2plY3RGaWx0ZXJTZWxlY3QpXG5wcm9qZWN0RmlsdGVyU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIChldmVudCkgPT4ge1xuLy8gZ2V0IHRoZSB2YWx1ZSBvZiBzZWxlY3RlZCBvcHRpb24gZWxlbWVudFxuICAgIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcblxuLy8gZ2V0IHRoZSBhbGwgdGFza3MgYXJyYXlcbmNvbnN0IGFsbFRhc2tzQXJyYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKVxuXG5jb25zdCBmaWx0ZXJlZE9iamVjdHMgPSBbXTtcbi8vIGxvb3AgdGhyb3VnaCBhbGwgdGFza3MgYXJyYXkgXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbFRhc2tzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAvLyBjb25zdCBjdXJyZW50SXRlbSA9IGFsbFRhc2tzQXJyYXlbaV07XG5cbiAgICAvLyBjaGVjayBpZiBzZWxlY3RlZCBpdGVtIHZhbHVlIGlzIGFsbCB0YXNrc1xuICAgIGlmIChzZWxlY3RlZEl0ZW0gPT09ICdhbGwtdGFza3MnKSB7XG4gICAgICAgIC8vIGFkZCBhbGwgdGFza3MgdG8gZmlsdGVyIGFycmF5XG4gICAgICAgIC8vIGZpbHRlcmVkT2JqZWN0cy5wdXNoKGFsbFRhc2tzQXJyYXlbaV0pXG4gICAgICAgIFxuICAgICAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKClcbiAgICAgICAgdXBkYXRlVGFza3NDb250YWluZXIoYWxsVGFza3NBcnJheSlcbiAgICB9XG5pZiAoYWxsVGFza3NBcnJheVtpXS5wcm9qZWN0ID09PSBzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgZmlsdGVyZWRPYmplY3RzLnB1c2goYWxsVGFza3NBcnJheVtpXSlcblxuICAgICAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCk7XG51cGRhdGVUYXNrc0NvbnRhaW5lcihmaWx0ZXJlZE9iamVjdHMpXG4gICAgfVxuXG5cbn1cblxuXG4gICAgXG4gICAgfSk7XG5cbmZ1bmN0aW9uIGRheXNMZWZ0VW50aWxEdWVEYXRlKGR1ZURhdGUpIHtcbiAgICBjb25zdCB0YXJnZXREYXRlID0gbmV3IERhdGUoZHVlRGF0ZSk7XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGRheXNMZWZ0ID0gZGlmZmVyZW5jZUluRGF5cyh0YXJnZXREYXRlLCBjdXJyZW50RGF0ZSk7XG5cbiAgICByZXR1cm4gZGF5c0xlZnRcbn0gICBcblxuXG5cblxuLy8gY2xlYXJMb2NhbFN0b3JhZ2UoKVxuXG5cbmNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmFsbFRhc2tzKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9