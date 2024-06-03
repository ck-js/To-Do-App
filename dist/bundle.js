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
z-index: 999;    
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



`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;AAE1B;;;AAGA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB;mBACe;IACf,sBAAsB;;;AAG1B;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,sCAAsC;AAC1C,iBAAiB;AACjB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;;IAEvB,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,kBAAkB;IAClB,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,WAAW;IACX,iBAAiB;;AAErB;AACA;IACI,WAAW;IACX,cAAc;AAClB;;;AAGA;IACI,wBAAwB;AAC5B,aAAa;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;;AAEnB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;AAEvB;AACA;IACI,UAAU;IACV,YAAY;IACZ,wBAAwB;IACxB,uBAAuB;IACvB,YAAY;AAChB;AACA;AACA,uBAAuB;IACnB,wBAAwB;IACxB,YAAY;IACZ,eAAe,EAAE,iDAAiD;IAClE,QAAQ,EAAE,kDAAkD;IAC5D,SAAS,EAAE,oDAAoD;IAC/D,gCAAgC,EAAE,+EAA+E;IACjH,mCAAmC;IACnC,UAAU;IACV,oBAAoB;AACxB,YAAY;AACZ;AACA;IACI,oCAAoC;IACpC,YAAY;IACZ,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,sBAAsB;GACvB;AACH;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,WAAW;IACX,wBAAwB;IACxB,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,cAAc;;AAElB;AACA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n}\n\n\nbody {\n    background-color: black;\n    color: white;\n}\n#task-items-container {\n    border: 3px solid white;\n    /* height: 600px;\n    width: 600px; */\n    flex-direction: column;\n    \n    \n}\n.task-item-element {\n    border: 3px solid white;\n    height: 100px;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(10, 1fr);\npadding-top: 20px;\n}\n#task-description {\n    color: yellowgreen;\n    font-weight: bold;\n    font-size: 1.3rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n\n    grid-row: 1;\n    grid-column: 2/9;\n\n}\n#task-project {\n    color: yellowgreen;\n    grid-row: 2;\n    grid-column: 2/9;\n\n}\n#task-date {\n    grid-row: 1;\n    grid-column: 8/10;\n    \n}\n#task-start {\n    grid-row: 2;\n    grid-column: 9;\n}\n\n\n#start-stop-button {\n    border: 5px solid purple;\nheight: 200px;    \n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#project-filter-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 25px 0;\n    \n}\n#filter-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    justify-content: center;\n    align-items: center;\n\n}\n#project-filter {\n    width: 60%;\n    height: 35px;\n    border: 2px solid purple;\n    background-color: black;\n    color: white;\n}\n.dialog {\nbackground-color: black;\n    border: 5px solid purple;\n    color: white;\n    position: fixed; /* Position the dialog relative to the viewport */\n    top: 50%; /* Position the dialog halfway down the viewport */\n    left: 50%; /* Position the dialog halfway across the viewport */\n    transform: translate(-50%, -50%); /* Offset the dialog's position by half its own width and height to center it */\n    /* Add width and height if needed */\n    width: 80%;\n    padding-bottom: 20px;\nz-index: 999;    \n}\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 999;\n    transition: opacity 0.3s ease-in-out;\n}\n.dialog-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 20px;\n}\n#create-close {\n    align-self: flex-start;   \n   }\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    row-gap: 20px;\n}\n.form-wrappers {\n    display: flex;\n    flex-direction: column;\n\n}\n#create-description {\n    background-color: black;\n    color: white;\n}\n#create-project {\n    background-color: black;\n    color: white;\n}\nform button {\n    width: 100%;\n    background-color: purple;\n    border: 1px solid purple;\n    color: white;\n    align-self: center;\n    padding: 5px 0;\n\n}\n#update-nav-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n#update-description {\n    background-color: black;\n    color: white;\n}\n#update-project {\n    background-color: black;\n    color: white;\n}\n#create-date {\n    background-color: black;\n    color: white;\n}\n\n\n\n"],"sourceRoot":""}]);
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
    static idCounter = localStorage.getItem('idCounter') || 1;

    constructor(description, project, dueDate) {
        this.id = Task.idCounter++;
        this.description = description;
        this.project = project;
        this.dueDate = dueDate;
        this.isComplete = false;

        // Save the updated idCounter to localStorage
        localStorage.setItem('idCounter', Task.idCounter);
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
alert(selectedValue)

if (selectedValue === 'default' || selectedValue === 'all-tasks') {
    alert(selectedValue)
const update = output.appendChild(createTaskItem(arrayName))
return update;
}
else {
    const filteredArray = arrayName.filter(task => task.project === selectedValue);
    const update = output.appendChild(createTaskItem(filteredArray));
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
// const domTaskId = event.target.parentNode.id;
alert(currentTask)
    const storedData = localStorage.getItem('allTasks')
    const dataArray = JSON.parse(storedData);
    // const selectedObject = dataArray[currentTask];
    const selectedObject = dataArray.find(obj => obj.id === +currentTask)
// remove object from array
dataArray.splice(selectedObject,1)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FB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QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsMEJBQTBCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUE0QjtBQUNwQyxRQUFRLHNFQUFvQjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSw4RUFBNEI7QUFDcEMscUVBQW9CO0FBQ3BCOzs7QUFHQTs7O0FBR0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBZ0I7O0FBRXJDO0FBQ0E7Ozs7O0FBS0E7OztBQUdBLCtDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy90YXNrLW9iamVjdC1jb21wb25lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3VzZXItaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9fbGliL2dldFRpbWV6b25lT2Zmc2V0SW5NaWxsaXNlY29uZHMubWpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jb25zdGFudHMubWpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5DYWxlbmRhckRheXMubWpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlSW5EYXlzLm1qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRPZkRheS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3RvRGF0ZS5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIG1hcmdpbjogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG59XG5cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3Rhc2staXRlbXMtY29udGFpbmVyIHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICAvKiBoZWlnaHQ6IDYwMHB4O1xuICAgIHdpZHRoOiA2MDBweDsgKi9cbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIFxuICAgIFxufVxuLnRhc2staXRlbS1lbGVtZW50IHtcbiAgICBib3JkZXI6IDNweCBzb2xpZCB3aGl0ZTtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcbnBhZGRpbmctdG9wOiAyMHB4O1xufVxuI3Rhc2stZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5cbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogMi85O1xuXG59XG4jdGFzay1wcm9qZWN0IHtcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDIvOTtcblxufVxuI3Rhc2stZGF0ZSB7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZ3JpZC1jb2x1bW46IDgvMTA7XG4gICAgXG59XG4jdGFzay1zdGFydCB7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDk7XG59XG5cblxuI3N0YXJ0LXN0b3AtYnV0dG9uIHtcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwdXJwbGU7XG5oZWlnaHQ6IDIwMHB4OyAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4jcHJvamVjdC1maWx0ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjVweCAwO1xuICAgIFxufVxuI2ZpbHRlci13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG4jcHJvamVjdC1maWx0ZXIge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uZGlhbG9nIHtcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydCAqL1xuICAgIHRvcDogNTAlOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIGhhbGZ3YXkgZG93biB0aGUgdmlld3BvcnQgKi9cbiAgICBsZWZ0OiA1MCU7IC8qIFBvc2l0aW9uIHRoZSBkaWFsb2cgaGFsZndheSBhY3Jvc3MgdGhlIHZpZXdwb3J0ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIE9mZnNldCB0aGUgZGlhbG9nJ3MgcG9zaXRpb24gYnkgaGFsZiBpdHMgb3duIHdpZHRoIGFuZCBoZWlnaHQgdG8gY2VudGVyIGl0ICovXG4gICAgLyogQWRkIHdpZHRoIGFuZCBoZWlnaHQgaWYgbmVlZGVkICovXG4gICAgd2lkdGg6IDgwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbnotaW5kZXg6IDk5OTsgICAgXG59XG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5kaWFsb2ctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogMjBweDtcbn1cbiNjcmVhdGUtY2xvc2Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7ICAgXG4gICB9XG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcm93LWdhcDogMjBweDtcbn1cbi5mb3JtLXdyYXBwZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbn1cbiNjcmVhdGUtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNjcmVhdGUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuZm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMDtcblxufVxuI3VwZGF0ZS1uYXYtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiN1cGRhdGUtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN1cGRhdGUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NyZWF0ZS1kYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjs7QUFFMUI7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QjttQkFDZTtJQUNmLHNCQUFzQjs7O0FBRzFCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsc0NBQXNDO0FBQzFDLGlCQUFpQjtBQUNqQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQix1QkFBdUI7O0lBRXZCLFdBQVc7SUFDWCxnQkFBZ0I7O0FBRXBCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsY0FBYztBQUNsQjs7O0FBR0E7SUFDSSx3QkFBd0I7QUFDNUIsYUFBYTtJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0FBRXZCO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsWUFBWTtJQUNaLHdCQUF3QjtJQUN4Qix1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0FBQ0EsdUJBQXVCO0lBQ25CLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osZUFBZSxFQUFFLGlEQUFpRDtJQUNsRSxRQUFRLEVBQUUsa0RBQWtEO0lBQzVELFNBQVMsRUFBRSxvREFBb0Q7SUFDL0QsZ0NBQWdDLEVBQUUsK0VBQStFO0lBQ2pILG1DQUFtQztJQUNuQyxVQUFVO0lBQ1Ysb0JBQW9CO0FBQ3hCLFlBQVk7QUFDWjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixvQ0FBb0M7QUFDeEM7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxzQkFBc0I7R0FDdkI7QUFDSDtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLHVCQUF1QjtJQUN2QixhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCOztBQUUxQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsd0JBQXdCO0lBQ3hCLHdCQUF3QjtJQUN4QixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7O0FBRWxCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG59XFxuXFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiN0YXNrLWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xcbiAgICAvKiBoZWlnaHQ6IDYwMHB4O1xcbiAgICB3aWR0aDogNjAwcHg7ICovXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIFxcbiAgICBcXG59XFxuLnRhc2staXRlbS1lbGVtZW50IHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbnBhZGRpbmctdG9wOiAyMHB4O1xcbn1cXG4jdGFzay1kZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiB5ZWxsb3dncmVlbjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5cXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiAyLzk7XFxuXFxufVxcbiN0YXNrLXByb2plY3Qge1xcbiAgICBjb2xvcjogeWVsbG93Z3JlZW47XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogMi85O1xcblxcbn1cXG4jdGFzay1kYXRlIHtcXG4gICAgZ3JpZC1yb3c6IDE7XFxuICAgIGdyaWQtY29sdW1uOiA4LzEwO1xcbiAgICBcXG59XFxuI3Rhc2stc3RhcnQge1xcbiAgICBncmlkLXJvdzogMjtcXG4gICAgZ3JpZC1jb2x1bW46IDk7XFxufVxcblxcblxcbiNzdGFydC1zdG9wLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcXG5oZWlnaHQ6IDIwMHB4OyAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbiNwcm9qZWN0LWZpbHRlci1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMjVweCAwO1xcbiAgICBcXG59XFxuI2ZpbHRlci13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbn1cXG4jcHJvamVjdC1maWx0ZXIge1xcbiAgICB3aWR0aDogNjAlO1xcbiAgICBoZWlnaHQ6IDM1cHg7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmRpYWxvZyB7XFxuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFBvc2l0aW9uIHRoZSBkaWFsb2cgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0ICovXFxuICAgIHRvcDogNTAlOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIGhhbGZ3YXkgZG93biB0aGUgdmlld3BvcnQgKi9cXG4gICAgbGVmdDogNTAlOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIGhhbGZ3YXkgYWNyb3NzIHRoZSB2aWV3cG9ydCAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogT2Zmc2V0IHRoZSBkaWFsb2cncyBwb3NpdGlvbiBieSBoYWxmIGl0cyBvd24gd2lkdGggYW5kIGhlaWdodCB0byBjZW50ZXIgaXQgKi9cXG4gICAgLyogQWRkIHdpZHRoIGFuZCBoZWlnaHQgaWYgbmVlZGVkICovXFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xcbnotaW5kZXg6IDk5OTsgICAgXFxufVxcbmRpYWxvZzo6YmFja2Ryb3Age1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICAgIHotaW5kZXg6IDk5OTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xcbn1cXG4uZGlhbG9nLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcm93LWdhcDogMjBweDtcXG59XFxuI2NyZWF0ZS1jbG9zZSB7XFxuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7ICAgXFxuICAgfVxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxufVxcbi5mb3JtLXdyYXBwZXJzIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG5cXG59XFxuI2NyZWF0ZS1kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNjcmVhdGUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbmZvcm0gYnV0dG9uIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgcHVycGxlO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogNXB4IDA7XFxuXFxufVxcbiN1cGRhdGUtbmF2LXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4jdXBkYXRlLWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3VwZGF0ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2NyZWF0ZS1kYXRlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNsYXNzIFRhc2sge1xuICAgIHN0YXRpYyBpZENvdW50ZXIgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaWRDb3VudGVyJykgfHwgMTtcblxuICAgIGNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLCBwcm9qZWN0LCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMuaWQgPSBUYXNrLmlkQ291bnRlcisrO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJvamVjdCA9IHByb2plY3Q7XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuXG4gICAgICAgIC8vIFNhdmUgdGhlIHVwZGF0ZWQgaWRDb3VudGVyIHRvIGxvY2FsU3RvcmFnZVxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaWRDb3VudGVyJywgVGFzay5pZENvdW50ZXIpO1xuICAgIH1cbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdCwgZHVlRGF0ZSkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkZXNjcmlwdGlvbixwcm9qZWN0LCBkdWVEYXRlKTtcblxuICAgIHJldHVybiB0YXNrXG59XG5mdW5jdGlvbiBhZGRUYXNrVG9BbkFycmF5KG9iamVjdCwgYXJyYXlOYW1lKSB7XG4gICAgYXJyYXlOYW1lLnB1c2gob2JqZWN0KVxufVxuLy8gZmFjdG9yeSBmb3IgcHJvamVjdCBhcnJheXNcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5RmFjdG9yeSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50VGFza0luZGV4OyBcblxuICAgIGZ1bmN0aW9uIGdldEFycmF5KCkge1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuICAgIH1cbiAgICBmdW5jdGlvbiBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChpZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gaWQ7XG4gICAgICAgIGxldCBzaGlmdGVkSWQgPSBwYXJzZUludCgoZWxlbWVudCkgLTEpO1xuXG5yZXR1cm4gc2hpZnRlZElkO1xuICAgIH1cbmZ1bmN0aW9uIGdldEFycmF5SXRlbShpbmRleCkge1xuICAgIHJldHVybiBhcnJheVtpbmRleF1cbn1cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrSW5kZXgoaW5kZXgpIHtcbiAgICBjdXJyZW50VGFza0luZGV4ID0gaW5kZXg7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50VGFza0luZGV4KCkge1xuICAgIHJldHVybiBjdXJyZW50VGFza0luZGV4O1xufVxuZnVuY3Rpb24gZGVsZXRlVGFza09iamVjdChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59XG5mdW5jdGlvbiBzdGFydChpbmRleCkge1xuICAgICAgICBhcnJheVtpbmRleF0uc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxufVxuZnVuY3Rpb24gc3RvcChpbmRleCkge1xuICAgIGFycmF5W2luZGV4XS5lbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBcbn1cbmZ1bmN0aW9uIGVsYXBzZWQoaW5kZXgpIHtcbiAgICBpZiAoIWFycmF5W2luZGV4XS5zdGFydFRpbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdGFydGVkIScpXG4gICAgfVxuICAgIGlmICghYXJyYXlbaW5kZXhdLmVuZFRpbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdG9wcGVkIScpXG4gICAgfVxuXG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gYXJyYXlbaW5kZXhdLmVuZFRpbWUgLSBhcnJheVtpbmRleF0uc3RhcnRUaW1lO1xuXG4gICAgcmV0dXJuIG1pbGxpc2Vjb25kcztcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShtaWxsaXNlY29uZHMpIHtcbiAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwO1xuICBcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gYCR7cGFkWmVybyhob3Vycyl9OiR7cGFkWmVybyhtaW51dGVzKX06JHtwYWRaZXJvKHNlY29uZHMpfWA7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHBhZFplcm8obnVtYmVyKSB7XG4gICAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkU3BlbnRUaW1lKGluZGV4KSB7XG5sZXQgdG90YWxNaWxsaVNlY29uZHMgPSAwO1xuZm9yIChsZXQgaSA9IDA7IGkgPGFycmF5W2luZGV4XS5tc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG5sZXQgZWxlbWVudCA9IGFycmF5W2luZGV4XS5tc0FycmF5W2ldO1xudG90YWxNaWxsaVNlY29uZHMgKz0gZWxlbWVudDtcblxufVxucmV0dXJuIGZvcm1hdFRpbWUodG90YWxNaWxsaVNlY29uZHMpO1xufSAgXG4gZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKGtleSwgYXJyYXkpIHtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgYXJyYXkpXG4gfSBcbiAgXG5cblxucmV0dXJuIHtcbiAgICBnZXRBcnJheSxcbiAgICBhZGRJdGVtLFxuICAgIGRvd25TaGlmdElkVG9BcnJheUluZGV4LFxuICAgIGdldEFycmF5SXRlbSxcbiAgICBzZXRDdXJyZW50VGFza0luZGV4LFxuICAgIGdldEN1cnJlbnRUYXNrSW5kZXgsXG4gICAgZGVsZXRlVGFza09iamVjdCxcbnN0YXJ0LFxuc3RvcCxcbmVsYXBzZWQsXG5nZXRGb3JtYXR0ZWRTcGVudFRpbWUsXG5zZXRMb2NhbFN0b3JhZ2UsXG5cblxufTtcbn1cblxuLy8gc2VjdGlvbiBmb3IgcHJvamVjdCBzZWxlY3Qgb3B0aW9uIGRyb3Bkb3duIGltcGxlbWVudGF0aW9uXG5cblxuXG5cblxuLy8gcmVmYWN0b3JlZCBmYWN0b3J5IG1ldGhvZHMgdG8gZ2xvYmFsIGZ1bmN0aW9uc1xuZnVuY3Rpb24gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoaWQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gaWQ7XG4gICAgbGV0IHNoaWZ0ZWRJZCA9IHBhcnNlSW50KChlbGVtZW50KSAtMSk7XG5cbnJldHVybiBzaGlmdGVkSWQ7XG59XG5mdW5jdGlvbiBzdGFydChpbmRleCkge1xuICAgIGxvY2FsU3RvcmFnZS5hbGxUYXNrc1tpbmRleF0uc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxufVxuZnVuY3Rpb24gc3RvcChpbmRleCkge1xuYXJyYXlbaW5kZXhdLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG59XG5mdW5jdGlvbiBlbGFwc2VkKGluZGV4KSB7XG5pZiAoIWFycmF5W2luZGV4XS5zdGFydFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0YXJ0ZWQhJylcbn1cbmlmICghYXJyYXlbaW5kZXhdLmVuZFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0b3BwZWQhJylcbn1cblxuY29uc3QgbWlsbGlzZWNvbmRzID0gYXJyYXlbaW5kZXhdLmVuZFRpbWUgLSBhcnJheVtpbmRleF0uc3RhcnRUaW1lO1xuXG5yZXR1cm4gbWlsbGlzZWNvbmRzO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKG1pbGxpc2Vjb25kcykge1xuY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbmNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbmNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbmNvbnN0IHNlY29uZHMgPSB0b3RhbFNlY29uZHMgJSA2MDtcblxuY29uc3QgZm9ybWF0dGVkVGltZSA9IGAke3BhZFplcm8oaG91cnMpfToke3BhZFplcm8obWludXRlcyl9OiR7cGFkWmVybyhzZWNvbmRzKX1gO1xucmV0dXJuIGZvcm1hdHRlZFRpbWU7XG59XG5cbmZ1bmN0aW9uIHBhZFplcm8obnVtYmVyKSB7XG5yZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xufVxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkU3BlbnRUaW1lKGluZGV4KSB7XG5sZXQgdG90YWxNaWxsaVNlY29uZHMgPSAwO1xuZm9yIChsZXQgaSA9IDA7IGkgPGFycmF5W2luZGV4XS5tc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG5sZXQgZWxlbWVudCA9IGFycmF5W2luZGV4XS5tc0FycmF5W2ldO1xudG90YWxNaWxsaVNlY29uZHMgKz0gZWxlbWVudDtcblxufVxucmV0dXJuIGZvcm1hdFRpbWUodG90YWxNaWxsaVNlY29uZHMpO1xufSAgXG5cblxuXG5cbmV4cG9ydCB7XG5cbmNyZWF0ZVRhc2tPYmplY3QsXG5hZGRUYXNrVG9BbkFycmF5LFxuY3JlYXRlQXJyYXlGYWN0b3J5LFxuZG93blNoaWZ0SWRUb0FycmF5SW5kZXgsXG5cbn0iLCJpbXBvcnQge1xuICAgICBmb3JtYXREaXN0YW5jZSxcbiAgICAgIHN1YkRheXMgXG4gICAgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuXG5pbXBvcnQge1xuICAgIFN0b3B3YXRjaCxcbiAgICBjcmVhdGVUYXNrT2JqZWN0LFxuYWRkVGFza1RvQW5BcnJheSxcbn0gZnJvbSAnLi90YXNrLW9iamVjdC1jb21wb25lbnQnO1xuXG5cblxuLy8gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHN0YXJ0IGJ1dHRvblxuZnVuY3Rpb24gc3RhcnRCdG5FdmVudEhhbmRsZXIoKSB7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1zdG9wLWJ1dHRvbicpXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3BlbkNyZWF0ZUZvcm1EaWFsb2coKTtcbiAgICBcbiAgICB9KVxuICAgIH1cblxuLy8gY3JlYXRlIHRhc2sgaXRlbXMgY29udGFpbmVyIFxuZnVuY3Rpb24gdGFza0l0ZW1zQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmlkID0gJ3Rhc2staXRlbXMtY29udGFpbmVyJ1xuXG5yZXR1cm4gY29udGFpbmVyO1xufVxuLy8gY3JlYXRlIHRhc2sgaXRlbVxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW0oYXJyYXkpIHtcbmNvbnN0IHRhc2tJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWl0ZW1zLWNvbnRhaW5lcicpO1xuICAgZm9yIChsZXQgaSA9IDA7aSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpXTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFza0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0tZWxlbWVudCcpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5pZCA9IGl0ZW0uaWQ7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgZGl2LmlkID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICBkaXYyLmlkID0gJ3Rhc2stcHJvamVjdCc7XG4gICAgICAgIGRpdjIudGV4dENvbnRlbnQgPSBpdGVtLnByb2plY3Q7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIGRpdjMuaWQgPSAndGFzay1kYXRlJztcbiAgICAgICAgaWYgKCFpdGVtLmRheXNMZWZ0KSB7XG5kaXYzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdjMudGV4dENvbnRlbnQgPSBgJHtpdGVtLmRheXNMZWZ0fSBkYXlzIGxlZnRgO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZGl2IGZvciBzdGFydCBhbmQgc3RvcCBidXR0b25cbiAgICAgICAgY29uc3QgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2NC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBvbmVudCcpXG5kaXY0LmlkID0gJ3Rhc2stc3RhcnQnO1xuZGl2NC50ZXh0Q29udGVudCA9IGl0ZW0uaXNDb21wbGV0ZTtcblxuXG5cbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdjIpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkaXYzKVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2NClcbiAgICAgICAgXG4gICAgICAgIHRhc2tJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbUVsZW1lbnQpXG4gICAgfVxuICAgICAgICBcbiAgICByZXR1cm4gdGFza0l0ZW1zQ29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGUgc3RhcnQgYW5kIHN0b3AgYnV0dG9uIGNvbXBvbmVudFxuZnVuY3Rpb24gc3RhcnRTdG9wQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5pZCA9ICdzdGFydC1zdG9wLWJ1dHRvbic7XG5jb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbmgzLnRleHRDb250ZW50ID0gJysnO1xuXG5idXR0b24uYXBwZW5kQ2hpbGQoaDMpXG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBjcmVhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ2NyZWF0ZS1kaWFsb2cnO1xuXG5jb25zdCBkaWFsb2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpYWxvZ0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNvbnRlbnQnKVxuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlLmlkID0gJ2NyZWF0ZS1jbG9zZSc7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdOZXcgVGFzayc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ2NyZWF0ZS1mb3JtJ1xuXG5jb25zdCB3cmFwcGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjEuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ3RleHQnKVxud3JhcHBlcjEuYXBwZW5kQ2hpbGQobGFiZWwxKVxud3JhcHBlcjEuYXBwZW5kQ2hpbGQoaW5wdXQxKVxuXG5jb25zdCB3cmFwcGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLXByb2plY3QnLCdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG5pbnB1dDIuaWQgPSAnY3JlYXRlLXByb2plY3QnO1xud3JhcHBlcjIuYXBwZW5kQ2hpbGQobGFiZWwyKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQoaW5wdXQyKVxuXG5jb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24xLnZhbHVlID0gJ25vLXByb2plY3QnXG5vcHRpb24xLnRleHQgPSAnTm8gUHJvamVjdCc7XG5jb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24yLnZhbHVlID0gJ2NyZWF0ZS1wcm9qZWN0J1xub3B0aW9uMi50ZXh0ID0gJ0NyZWF0ZSBQcm9qZWN0JztcblxuXG4vLyBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbi8vIGlucHV0My5pZCA9ICdjcmVhdGUtc3RhcnQtdGltZSdcblxuY29uc3QgaW5wdXQzID0gY3JlYXRlRGF0ZVRpbWVJbnB1dCgnY3JlYXRlLWRhdGUnKTtcblxuXG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuc3VibWl0LmlkID0gJ2NyZWF0ZS1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIxKTtcbmZvcm0uYXBwZW5kQ2hpbGQod3JhcHBlcjIpO1xuLy8gZm9ybS5hcHBlbmRDaGlsZChsYWJlbDMpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDMpXG5mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcbmlucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24xKVxuaW5wdXQyLmFwcGVuZENoaWxkKG9wdGlvbjIpXG5cbnJldHVybiBkaWFsb2c7XG59XG5cbi8vIHVwZGF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gdXBkYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpXG5kaWFsb2cuaWQgPSAndXBkYXRlLWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IHdyYXBwZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53cmFwcGVyMS5pZCA9ICd1cGRhdGUtbmF2LXdyYXBwZXInO1xuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS5pZCA9ICd1cGRhdGUtY2xvc2UnO1xuY2xvc2UudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbndyYXBwZXIxLmFwcGVuZENoaWxkKGNsb3NlKVxuXG5jb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5yZW1vdmUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcbnJlbW92ZS50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xucmVtb3ZlLmlkID0gJ3VwZGF0ZS1kZWxldGUnO1xud3JhcHBlcjEuYXBwZW5kQ2hpbGQocmVtb3ZlKVxuXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdVcGRhdGUgVGFzayc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ3VwZGF0ZS1mb3JtJ1xuXG5jb25zdCB3cmFwcGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgndXBkYXRlLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgndXBkYXRlLWRlc2NyaXB0aW9uJywgJ3RleHQnKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQobGFiZWwxKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQoaW5wdXQxKVxuXG5jb25zdCB3cmFwcGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjMuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgndXBkYXRlLXByb2plY3QnLCdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDIgPSBjcmVhdGVJbnB1dCgndXBkYXRlLXByb2plY3QnLCd0ZXh0Jyk7XG53cmFwcGVyMy5hcHBlbmRDaGlsZChsYWJlbDIpXG53cmFwcGVyMy5hcHBlbmRDaGlsZChpbnB1dDIpXG5cbmNvbnN0IGlucHV0MyA9IGNyZWF0ZURhdGVUaW1lSW5wdXQoJ3VwZGF0ZS1kYXRlJyk7XG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuc3VibWl0LmlkID0gJ3VwZGF0ZS1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyMSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIyKVxuZm9ybS5hcHBlbmRDaGlsZCh3cmFwcGVyMylcbi8vIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwzKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQzKVxuZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG5cbnJldHVybiBkaWFsb2c7XG59XG4vLyBjcmVhdGUgcHJvamVjdCBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuY2xvc2UudGV4dENvbnRlbnQgPSAnJnRpbWVzOyc7XG5jbG9zZS5pZCA9ICdjcmVhdGUtcHJvamVjdC1jbG9zZSc7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ05ldyBQcm9qZWN0JztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAnY3JlYXRlLXByb2plY3QtZm9ybSdcbmNvbnN0IGxhYmVsMSA9IGNyZWF0ZUxhYmVsKCdjcmVhdGUtcHJvamVjdC1uYW1lJywgJ1Byb2plY3QnKTtcbmNvbnN0IGlucHV0MSA9IGNyZWF0ZUlucHV0KCdjcmVhdGUtY3JlYXRlLXByb2plY3QtbmFtZScsICd0ZXh0JylcbmlucHV0MS5wbGFjZWhvbGRlciA9ICdFbnRlciBhIHByb2plY3QgbmFtZSc7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdC5pZCA9ICdjcmVhdGUtcHJvamVjdC1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKGxhYmVsMSk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MSlcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuXG5yZXR1cm4gZGlhbG9nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChmb3JBdHRyaWJ1dGUsdGV4dENvbnRlbnQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5odG1sRm9yID0gZm9yQXR0cmlidXRlO1xubGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxucmV0dXJuIGxhYmVsO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoaWRBdHRyaWJ1dGUsdHlwZUF0dHJpYnV0ZSl7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0LmlkID0gaWRBdHRyaWJ1dGU7XG5pbnB1dC50eXAgPSB0eXBlQXR0cmlidXRlO1xuXG5yZXR1cm4gaW5wdXQ7IFxufVxuXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgYW5kIG9wZW4gZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIG9wZW5DcmVhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGlhbG9nJylcbiAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICByZXR1cm4gZGlhbG9nO1xufVxuZnVuY3Rpb24gb3BlblVwZGF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBjbG9zZUNyZWF0ZURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cbmZ1bmN0aW9uIGNsb3NlVXBkYXRlRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGlhbG9nJylcbiAgICBcbiAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKClcbiAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcbiAgICBkaWFsb2cuY2xvc2UoKVxufVxuZnVuY3Rpb24gb3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBjbG9zZUNyZWF0ZVByb2plY3REaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRhc2sgaXRlbXMgZnJvbSBjb250YWluZXJcbmZ1bmN0aW9uIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKSB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxuXG5mb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtMTsgaSA+PSAwOyBpLS0pIHtcbmNvbnN0IGNoaWxkID0gY29udGFpbmVyLmNoaWxkcmVuW2ldO1xuY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKVxuXG59XG59XG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRhc2tzIGNvbnRhaW5lciBlbGVtZW50c1xuZnVuY3Rpb24gdXBkYXRlVGFza3NDb250YWluZXIoYXJyYXlOYW1lKSB7XG5cbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1maWx0ZXInKVxuY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdEVsZW1lbnQudmFsdWU7XG5hbGVydChzZWxlY3RlZFZhbHVlKVxuXG5pZiAoc2VsZWN0ZWRWYWx1ZSA9PT0gJ2RlZmF1bHQnIHx8IHNlbGVjdGVkVmFsdWUgPT09ICdhbGwtdGFza3MnKSB7XG4gICAgYWxlcnQoc2VsZWN0ZWRWYWx1ZSlcbmNvbnN0IHVwZGF0ZSA9IG91dHB1dC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrSXRlbShhcnJheU5hbWUpKVxucmV0dXJuIHVwZGF0ZTtcbn1cbmVsc2Uge1xuICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBhcnJheU5hbWUuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBzZWxlY3RlZFZhbHVlKTtcbiAgICBjb25zdCB1cGRhdGUgPSBvdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0l0ZW0oZmlsdGVyZWRBcnJheSkpO1xuICAgIHJldHVybiB1cGRhdGU7XG59XG59XG5cblxuLy8gcHJvamVjdCBmaWx0ZXIgc2VsZWN0IGRvbSBlbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0KCkge1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnRhaW5lci5pZCA9ICdwcm9qZWN0LWZpbHRlci1jb250YWluZXInXG5cbmNvbnN0IGZpbHRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZpbHRlcldyYXBwZXIuaWQgPSAnZmlsdGVyLXdyYXBwZXInXG5cbmNvbnN0IGxhYmVsMiA9IGNyZWF0ZUxhYmVsKCdwcm9qZWN0LWZpbHRlcicsJ0ZpbHRlcicpO1xuY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbmlucHV0Mi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuaW5wdXQyLmlkID0gJ3Byb2plY3QtZmlsdGVyJztcblxuY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uMS52YWx1ZSA9ICdkZWZhdWx0J1xub3B0aW9uMS50ZXh0ID0gJy0tIFNlbGVjdCBQcm9qZWN0IC0tJztcblxuY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uMi52YWx1ZSA9ICdhbGwtdGFza3MnXG5vcHRpb24yLnRleHQgPSAnQWxsIFRhc2tzJztcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGZpbHRlcldyYXBwZXIpXG5maWx0ZXJXcmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsMilcbmZpbHRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQyKVxuaW5wdXQyLmFwcGVuZENoaWxkKG9wdGlvbjEpXG5pbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMilcblxucmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIG1ldGhvZCB0aGF0IGNyZWF0cyBkdSBkYXRlIGxhYmVsIGFuZCBpbnB1dFxuZnVuY3Rpb24gY3JlYXRlRGF0ZVRpbWVJbnB1dChpZEF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGRhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChpZEF0dHJpYnV0ZSwgJ0RhdGUnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuaWQgPSBpZEF0dHJpYnV0ZTtcbiAgICBpbnB1dC50eXBlID0gJ2RhdGUnO1xuXG4gICAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiBkYXRlV3JhcHBlcjtcbn1cblxuXG5cbmV4cG9ydCB7XG4gICAgc3RhcnRCdG5FdmVudEhhbmRsZXIsXG50YXNrSXRlbXNDb250YWluZXIsXG5jcmVhdGVUYXNrSXRlbSxcbnN0YXJ0U3RvcEJ1dHRvbixcbmNyZWF0ZUZvcm1EaWFsb2csXG51cGRhdGVGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZUZvcm1EaWFsb2csXG5vcGVuVXBkYXRlRm9ybURpYWxvZyxcbmNsb3NlQ3JlYXRlRGlhbG9nLFxuY2xvc2VVcGRhdGVEaWFsb2csXG5cbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIsXG51cGRhdGVUYXNrc0NvbnRhaW5lcixcbmNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nLFxuY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCxcblxufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5EYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5IHBlcmlvZHMgYmV0d2VlbiB0d28gZGF0ZXMuIEZyYWN0aW9uYWwgZGF5cyBhcmVcbiAqIHRydW5jYXRlZCB0b3dhcmRzIHplcm8uXG4gKlxuICogT25lIFwiZnVsbCBkYXlcIiBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGxvY2FsIHRpbWUgaW4gb25lIGRheSB0byB0aGUgc2FtZVxuICogbG9jYWwgdGltZSBvbiB0aGUgbmV4dCBvciBwcmV2aW91cyBkYXkuIEEgZnVsbCBkYXkgY2FuIHNvbWV0aW1lcyBiZSBsZXNzIHRoYW5cbiAqIG9yIG1vcmUgdGhhbiAyNCBob3VycyBpZiBhIGRheWxpZ2h0IHNhdmluZ3MgY2hhbmdlIGhhcHBlbnMgYmV0d2VlbiB0d28gZGF0ZXMuXG4gKlxuICogVG8gaWdub3JlIERTVCBhbmQgb25seSBtZWFzdXJlIGV4YWN0IDI0LWhvdXIgcGVyaW9kcywgdXNlIHRoaXMgaW5zdGVhZDpcbiAqIGBNYXRoLnRydW5jKGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpLzI0KXwwYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMSBNYXJjaCAyMDIwIDA6MDAgYW5kIDEgSnVuZSAyMDIwIDA6MDAgP1xuICogLy8gTm90ZTogYmVjYXVzZSBsb2NhbCB0aW1lIGlzIHVzZWQsIHRoZVxuICogLy8gcmVzdWx0IHdpbGwgYWx3YXlzIGJlIDkyIGRheXMsIGV2ZW4gaW5cbiAqIC8vIHRpbWUgem9uZXMgd2hlcmUgRFNUIHN0YXJ0cyBhbmQgdGhlXG4gKiAvLyBwZXJpb2QgaGFzIG9ubHkgOTIqMjQtMSBob3Vycy5cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDUsIDEpLFxuICogICBuZXcgRGF0ZSgyMDIwLCAyLCAxKVxuICogKVxuICogLy89PiA5MlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBzaWduID0gY29tcGFyZUxvY2FsQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCk7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSk7XG5cbiAgX2RhdGVMZWZ0LnNldERhdGUoX2RhdGVMZWZ0LmdldERhdGUoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTtcblxuICAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgZGF5cyAtIGRpZmYgaW4gY2FsZW5kYXIgZGF5cykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBkYXkgaXMgbm90IGZ1bGxcbiAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gIGNvbnN0IGlzTGFzdERheU5vdEZ1bGwgPSBOdW1iZXIoXG4gICAgY29tcGFyZUxvY2FsQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCkgPT09IC1zaWduLFxuICApO1xuICBjb25zdCByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBpc0xhc3REYXlOb3RGdWxsKTtcbiAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufVxuXG4vLyBMaWtlIGBjb21wYXJlQXNjYCBidXQgdXNlcyBsb2NhbCB0aW1lIG5vdCBVVEMsIHdoaWNoIGlzIG5lZWRlZFxuLy8gZm9yIGFjY3VyYXRlIGVxdWFsaXR5IGNvbXBhcmlzb25zIG9mIFVUQyB0aW1lc3RhbXBzIHRoYXQgZW5kIHVwXG4vLyBoYXZpbmcgdGhlIHNhbWUgcmVwcmVzZW50YXRpb24gaW4gbG9jYWwgdGltZSwgZS5nLiBvbmUgaG91ciBiZWZvcmVcbi8vIERTVCBlbmRzIHZzLiB0aGUgaW5zdGFudCB0aGF0IERTVCBlbmRzLlxuZnVuY3Rpb24gY29tcGFyZUxvY2FsQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGlmZiA9XG4gICAgZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gZGF0ZVJpZ2h0LmdldERhdGUoKSB8fFxuICAgIGRhdGVMZWZ0LmdldEhvdXJzKCkgLSBkYXRlUmlnaHQuZ2V0SG91cnMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1pbnV0ZXMoKSAtIGRhdGVSaWdodC5nZXRNaW51dGVzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRTZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0U2Vjb25kcygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWlsbGlzZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5EYXlzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbmZvcm1hdCwgZGlmZmVyZW5jZUluRGF5c1xufSBmcm9tICdkYXRlLWZucydcblxuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7XG4gICAgc3RhcnRCdG5FdmVudEhhbmRsZXIsXG4gICAgdGFza0l0ZW1zQ29udGFpbmVyLFxuY3JlYXRlVGFza0l0ZW0sXG5zdGFydFN0b3BCdXR0b24sXG5jcmVhdGVGb3JtRGlhbG9nLFxub3BlbkZvcm1EaWFsb2csXG5cbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIsXG51cGRhdGVUYXNrRWxlbWVudHMsXG51cGRhdGVUYXNrc0NvbnRhaW5lcixcbmNsb3NlRGlhbG9nLFxudXBkYXRlRm9ybURpYWxvZyxcbmNsb3NlQ3JlYXRlRGlhbG9nLFxuY2xvc2VVcGRhdGVEaWFsb2csXG5vcGVuVXBkYXRlRm9ybURpYWxvZyxcbmNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nLFxuY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCxcblxufSBmcm9tICcuL3VzZXItaW50ZXJmYWNlJ1xuXG4vLyBpbXBvcnQgb2JqZWN0IHJlbGF0ZWQgbW9kdWxlc1xuaW1wb3J0IHtcbmNyZWF0ZVRhc2tPYmplY3QsXG4gICAgYWRkVGFza1RvQW5BcnJheSxcbiAgICBjcmVhdGVBcnJheUZhY3RvcnksXG4gICAgZG93blNoaWZ0SWRUb0FycmF5SW5kZXgsXG4gICAgXG59IGZyb20gJy4vdGFzay1vYmplY3QtY29tcG9uZW50J1xuXG4vLyBhbGwgZG9tIHJlbGF0ZWQgZnVuY3Rpb25zIGdvIGhlcmVcbi8vIGFwcGVuZCB0YXNrIGl0ZW1zIGNvbnRhaW5lciB0byBvdXRwdXRcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpXG5cbm91dHB1dC5hcHBlbmRDaGlsZCh0YXNrSXRlbXNDb250YWluZXIoKSlcblxuLy8gYXBwZW5kIHByb2plY3QgZmlsdGVyIGZlYXR1cmUgdG8gZG9tXG5vdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCgpKVxuLy8gYXBwZW5kIHN0YXJ0IHN0b3AgYnV0dG9uIHRvIGJvZHkgXG5ib2R5LmFwcGVuZENoaWxkKHN0YXJ0U3RvcEJ1dHRvbigpKVxuLy8gYXBwZW5kIGZvcm0gdG8gaHRtbFxuYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlRm9ybURpYWxvZygpLCBvdXRwdXQpXG5ib2R5LmFwcGVuZENoaWxkKHVwZGF0ZUZvcm1EaWFsb2coKSlcbmJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSlcblxuXG5cblxuLy8gc3RhcnQgYnRuIGV2ZW50IGhhbmRsZXJcbnN0YXJ0QnRuRXZlbnRIYW5kbGVyKClcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG4vLyBldmVudCBoYW5kbGVyIGZvciBpbml0aWF0aW5nIHVwZGF0aW5nIHRhc2sgZWxlbWVudHNcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxuXG5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudGFzay1pdGVtJykpIHtcbi8vIGNvbnN0IHNoaWZ0ZWRJbmRleCA9IGRvd25TaGlmdElkVG9BcnJheUluZGV4KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbmNvbnN0IGRvbVRhc2tJZCA9ICtldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcbmFsZXJ0KGRvbVRhc2tJZCArICcgaXMgdGhlIGlkIGtleScpXG5cbmNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbi8vIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W3NoaWZ0ZWRJbmRleF07XG5jb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheS5maW5kKG9iaiA9PiBvYmouaWQgPT09IGRvbVRhc2tJZClcblxuLy8gc2V0IHRoZSBjdXJyZW50IHRhc2sgb2JqZWN0IGluZGV4IHZhbHVlIHRvIGxvY2FsIHN0b3JhZ2VcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50VGFzaycsIGRvbVRhc2tJZClcblxuLy8gcmV0cmlldmUgbG9jYWwgc3RvcmFnZSB2YWx1ZXMgdG8gcG9wdWxhdGUgZG9tIGVsZW1lbnRzIFxuY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRlc2NyaXB0aW9uJyk7XG5kZXNjcmlwdGlvbi52YWx1ZSA9IHNlbGVjdGVkT2JqZWN0LmRlc2NyaXB0aW9uXG5jb25zdCBwcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1wcm9qZWN0Jyk7XG5wcm9qZWN0LnZhbHVlID0gc2VsZWN0ZWRPYmplY3QucHJvamVjdDtcbmNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRhdGUnKTtcbmRhdGUudmFsdWUgPSBzZWxlY3RlZE9iamVjdC5kdWVEYXRlO1xuXG5cbm9wZW5VcGRhdGVGb3JtRGlhbG9nKClcblxuICAgIH1cblxuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLnRhc2stY29tcG9uZW50JykgJiZcbiAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09ICd0cnVlJykge1xuXG4gICAgICAgIC8vIGNvbnN0IHNoaWZ0ZWRJbmRleCA9IGRvd25TaGlmdElkVG9BcnJheUluZGV4KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbiAgICAgICAgY29uc3QgZG9tVGFza0lkID0gK2V2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkO1xuXG4gICAgICAgIGNvbnN0IHN0b3JlZERhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKVxuICAgICAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgICAgICAvLyBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtzaGlmdGVkSW5kZXhdO1xuICAgICAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheS5maW5kKG9iaiA9PiBvYmouaWQgPT09IGRvbVRhc2tJZCk7XG4gICAgICAgIFxuc2VsZWN0ZWRPYmplY3QuaXNDb21wbGV0ZSA9IGZhbHNlO1xuLy8gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gJ2ZhbHNlJ1xuXG4vLyBVcGRhdGUgdGhlIGRhdGFBcnJheSB3aXRoIHRoZSBtb2RpZmllZCBzZWxlY3RlZE9iamVjdFxuLy8gZGF0YUFycmF5W10gPSBzZWxlY3RlZE9iamVjdDtcbmxldCBpbmRleCA9IGRhdGFBcnJheS5maW5kSW5kZXgob2JqID0+IG9iai5pZCA9PT0gZG9tVGFza0lkKSBcbmRhdGFBcnJheVtpbmRleF0gPSBzZWxlY3RlZE9iamVjdDtcblxuLy8gU3RyaW5naWZ5IHRoZSBkYXRhQXJyYXkgYW5kIHN0b3JlIGl0IGJhY2sgaW50byBsb2NhbFN0b3JhZ2VcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUYXNrcycsIEpTT04uc3RyaW5naWZ5KGRhdGFBcnJheSkpO1xuXG5yZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCk7XG51cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSk7XG5cbiAgICB9IFxuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLnRhc2stY29tcG9uZW50JykgJiZcbiAgICBldmVudC50YXJnZXQudGV4dENvbnRlbnQgPT09ICdmYWxzZScpIHtcbiAgICAgICAgY29uc3Qgc2hpZnRlZEluZGV4ID0gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICBjb25zdCBkb21UYXNrSWQgPSArZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcbmNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5LmZpbmQob2JqID0+IG9iai5pZCA9PT0gZG9tVGFza0lkKVxuXG5cbnNlbGVjdGVkT2JqZWN0LmlzQ29tcGxldGUgPSB0cnVlO1xuLy8gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gJ3RydWUnXG5cbi8vIFVwZGF0ZSB0aGUgZGF0YUFycmF5IHdpdGggdGhlIG1vZGlmaWVkIHNlbGVjdGVkT2JqZWN0XG4vLyBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XSA9IHNlbGVjdGVkT2JqZWN0O1xubGV0IGluZGV4ID0gZGF0YUFycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpIFxuZGF0YUFycmF5W2luZGV4XSA9IHNlbGVjdGVkT2JqZWN0O1xuXG4vLyBTdHJpbmdpZnkgdGhlIGRhdGFBcnJheSBhbmQgc3RvcmUgaXQgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG5cbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKTtcblxuXG4gICAgfVxufSlcbn1cbnVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKClcblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCBvYmplY3QgdG8gbG9jYWwgc3RvcmFnZSBhcnJheVxuZnVuY3Rpb24gYWRkT2JqZWN0VG9Mb2NhbFN0b3JhZ2VBcnJheShrZXksIG9iamVjdCkge1xuICAgIC8vIGNoZWNrcyBpZiBrZXkgZXhpc3RzIGluIHN0b3JhZ2Ugb3IgY3JlYXRlcyBvbmUgd2l0aCBlbXB0eSBhcnJheVxuICAgIC8vIGFuZCBzdG9yZXMgaXQgaW4gYSB2YXJpYWJsZVxuY29uc3QgZXhpc3RpbmdBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgW107XG4vLyBwdXNoIHRoZSBvYmplY3QgdG8gYW4gYXJyYXkgaW4gc3RvcmFnZVxuZXhpc3RpbmdBcnJheS5wdXNoKG9iamVjdCk7XG4vLyBzZXQgdGhlIGFycmF5IHdpdGggbmV3IG9iamVjdCBpbiBrZXkgb2Ygc3RvcmFnZSBcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdBcnJheSkpXG5cbn1cblxuLy8gZnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gc3VibWl0XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBkb21cbiAgICAgICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0MS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGF0ZScpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGlucHV0My52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgZGF5c0xlZnQgPSBkYXlzTGVmdFVudGlsRHVlRGF0ZShkYXRlKVxuXG5cblxuICAgICAgICAvLyBjcmVhdGUgbmV3IHRhc2sgb2JqZWN0XG4gICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrT2JqZWN0KGRlc2NyaXB0aW9uLHByb2plY3QsIGRhdGUpXG4gICAgICAgIC8vIHRhc2suZGF5c0xlZnQgPSBkYXlzTGVmdDtcblxuICAgICAgICAvLyBhZGRUYXNrVG9BbkFycmF5KHRhc2ssYWxsVGFza3NBcnJheSlcbiAgICAgICAgLy8gYWxsVGFza3NBcnJheS5hZGRJdGVtKHRhc2spXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdhbGxUYXNrc0FycmF5JywgSlNPTi5zdHJpbmdpZnkodGFzaykpXG5hZGRPYmplY3RUb0xvY2FsU3RvcmFnZUFycmF5KCdhbGxUYXNrcycsIHRhc2spXG5cbmNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKTtcblxuICAgICAgICBhbGVydCgnY3JlYXRpb24gZXZlbnQgaGFuZGxlcicpXG4gICAgICAgICAgICBcbiAgICAgICAgLy8gdXBkYXRlIGRvbSB3aXRoIG5ldyB0YXNrXG4gICAgICAgICAgICAvLyB1cGRhdGVUYXNrc0NvbnRhaW5lcihhbGxUYXNrc0FycmF5LmdldEFycmF5KCkpXG4gICAgICAgICAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrcykpXG4gICAgICAgIFxuICAgICAgICAgICAgLy8gcmVzZXQgZm9ybSBpbnB1dHNcbiAgICAgICAgaW5wdXQxLnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0Mi52YWx1ZSA9ICcnOyAgICAgICAgXG5cbiAgICAgICAgY2xvc2VDcmVhdGVEaWFsb2coKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgICAgLy8gZXZlbnQgaGFuZGxlciBmb3Igc3VibWl0IHVwZGF0ZVxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlRm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXQxLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBpbnB1dDIudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGlucHV0My52YWx1ZTtcbmNvbnN0IGRheXNMZWZ0ID0gZGF5c0xlZnRVbnRpbER1ZURhdGUoZGF0ZSlcbi8vIGdldCBpZCBvZiBjdXJyZW50IHRhc2tcbmNvbnN0IGN1cnJlbnRUYXNrSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFRhc2snKVxuXG4vLyB1cGRhdGUgdGhlIHRhc2sgb2JqZWN0IGluIGxvY2FsIHNzdG9yYWdlXG4gICAgICAgIFxuICAgICAgICAvLyBnZXQgdGhlIGFsbCB0YXNrcyBhcnJheSBzdG9yaW5nIHRhc2sgb2JqZWN0c1xuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgLy8gY29udmVydCBzdHJpbmdlZCBhcnJheSB0byBub3JtYWwgYXJyYXlcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBjb3JyZWxhdGVkIHRhc2sgb2JqZWN0XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W2N1cnJlbnRUYXNrXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXkuZmluZChvYmogPT4gb2JqLmlkID09PSArY3VycmVudFRhc2tJZClcblxuICAgICAgICAvLyBzZXQgaW5wdXQgdmFsdWVzIHRvIGxvY2FsIHN0b3JhZ2VcbiBzZWxlY3RlZE9iamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuIHNlbGVjdGVkT2JqZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHNlbGVjdGVkT2JqZWN0LmR1ZURhdGUgPSBkYXRlO1xuICAgIHNlbGVjdGVkT2JqZWN0LmRheXNMZWZ0ID0gZGF5c0xlZnQ7XG5cbiAgICBcbi8vIGNvbnZlcnQgYXJyYXkgYmFjayBpbnRvIHN0cmluZ1xuY29uc3QgdXBkYXRlZEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KVxuXG4vLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuXG5jb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdCk7XG5jb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG5cbmFsZXJ0KCd1cGRhdGUgZXZlbnQgaGFuZGxlcicpXG5cbiAgICAgICAgdXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlucHV0MS52YWx1ZSA9ICcnO1xuICAgICAgICAgICAgaW5wdXQyLnZhbHVlID0gJyc7ICAgICAgICBcbiAgICBcbiAgICAgICAgICAgIGNsb3NlVXBkYXRlRGlhbG9nKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9XG5cbi8vIGF0dGF0Y2ggZXZlbnQgbGlzdGVuZXIgYW5kIGhhbmRsZXIgdG8gY3JlYXRlIGFuZCB1cGRhdGUgZm9ybSBzdWJtaXQgICAgXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1mb3JtJyk7XG4gICAgY3JlYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUNyZWF0ZUZvcm1TdWJtaXQpICAgIFxuICAgIGNvbnN0IHVwZGF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWZvcm0nKTtcbnVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVVcGRhdGVGb3JtU3VibWl0KVxuICAgIFxuLy8gZnVuY3Rpb24gdG8gcG9wdWxhdGUgZm9ybSBkaWFsb2cgd2l0aCBjbGlja2VkIHRhc2tcbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybUlucHV0cyhhcnJheUluZGV4KSB7XG5sZXQgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuaW5wdXQxLnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oYWxsVGFza3MpW2FycmF5SW5kZXhdLmRlc2NyaXB0aW9uO1xuXG5sZXQgaW5wdXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1wcm9qZWN0Jyk7XG5pbnB1dDIudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUYXNrcylbYXJyYXlJbmRleF0ucHJvamVjdDtcblxuY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oYWxsVGFza3NbYXJyYXlJbmRleF0pKTtcbn1cblxuLy8gZXZlbnQgaGFuZGxlciBmb3IgY2xvc2luZyBjcmVhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNsb3NlQ3JlYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1jbG9zZScpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG5jbG9zZUNyZWF0ZURpYWxvZygpO1xuICAgIH0pXG59XG5jbG9zZUNyZWF0ZUZvcm1EaWFsb2coKTtcblxuLy8gZXZlbnQgaGFuZGxlciBmb3IgY2xvc2luZyB1cGRhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNsb3NlVXBkYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCB1cGRhdGVEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRpYWxvZycpXG4gICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtY2xvc2UnKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBcbmNsb3NlVXBkYXRlRGlhbG9nKCk7XG5hbGVydCgndXBkYXRlIGNsb3NlIGV2ZW50IGhhbmRsZXInKVxuICAgIH0pXG4vLyBydWxlIGZvciBlc2NhcGUga2V5IGV2ZW50IFxudXBkYXRlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZXZlbnQpID0+IHtcbmlmIChldmVudC5rZXkgPT09ICdFc2NhcGUnIHx8IGV2ZW50LmtleSA9PT0gJ0VzYycpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGFsZXJ0KCdFc2NhcGUga2V5IHdhcyBwcmVzc3NlZCBkb3duJylcbiAgICBjbG9zZVVwZGF0ZURpYWxvZygpXG59XG4vLyBjaGVjayBpZiBldmVudCB0YXJnZXQgaXMgY2xpY2sgb24gYmFja2Ryb3BcbnVwZGF0ZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuaWYgKGV2ZW50LnRhcmdldCA9PT0gdXBkYXRlRGlhbG9nKSB7XG5hbGVydCgnYmFja2Ryb3AgY2xpY2tlZCcpXG5jbG9zZVVwZGF0ZURpYWxvZygpXG5cbn1cblxufSlcblxuXG5cblxufSlcblxuXG5cbn1cbmNsb3NlVXBkYXRlRm9ybURpYWxvZygpXG5cbi8vIGV2ZW50IGhhbmRsZXIgZm9yIGRlbGV0aW5nIGEgdGFzayBvYmplY3RcbmNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGVsZXRlJyk7XG5kZWxldGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcblxuICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICBjb25zdCBjdXJyZW50VGFzayA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXJyZW50VGFzaycpO1xuLy8gY29uc3QgZG9tVGFza0lkID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG5hbGVydChjdXJyZW50VGFzaylcbiAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgIC8vIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W2N1cnJlbnRUYXNrXTtcbiAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheS5maW5kKG9iaiA9PiBvYmouaWQgPT09ICtjdXJyZW50VGFzaylcbi8vIHJlbW92ZSBvYmplY3QgZnJvbSBhcnJheVxuZGF0YUFycmF5LnNwbGljZShzZWxlY3RlZE9iamVjdCwxKVxuY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuLy8gY29udmVydCBhcnJheSBiYWNrIGludG8gc3RyaW5nXG5jb25zdCB1cGRhdGVkQXJyYXlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpXG4gICAgICAgXG4vLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuXG4vLyByZW5kZXIgZG9tIHdpdGggdXBkYXRlZCB0YXNrIG9iamVjdHNcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKVxuXG5cbmNsb3NlVXBkYXRlRGlhbG9nKClcblxufSlcblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHN0b3JhZ2UgaXMgYXZhaWxhYmxlIFxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuICAgIGNvbnNvbGUubG9nKCdZaXBwZWUnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXG4gICAgY29uc29sZS5sb2coJ051cHBlZScpO1xuICB9XG4gIFxuICBcbi8vIHNlbGVjdCBvcHRpb24gZm9ybSBkcm9wZG93biBpbXBsZW1lbnRhdGlvbiBcblxuY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpXG5jb25zdCBwcm9qZWN0T3B0aW9ucyA9IFsnSmF2YXNjcmlwdCcsICdQeXRob24nLCAnUnVieSddXG5cbmZ1bmN0aW9uIHNldFByb2plY3RPcHRpb25zKCkge1xucHJvamVjdE9wdGlvbnMuZm9yRWFjaChwcm9qZWN0T3B0aW9uID0+IHtcbmNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxub3B0aW9uRWxlbWVudC52YWx1ZSA9IHByb2plY3RPcHRpb247XG5vcHRpb25FbGVtZW50LnRleHQgPSBwcm9qZWN0T3B0aW9uO1xuXG5zZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG59KTtcbn1cblxuc2VsZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbmNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbmlmIChzZWxlY3RlZEVsZW1lbnQgPT09ICdjcmVhdGUtcHJvamVjdCcpe1xuICAgIGFsZXJ0KHNlbGVjdGVkRWxlbWVudClcbm9wZW5DcmVhdGVQcm9qZWN0Rm9ybURpYWxvZygpXG5cbn1cblxufSlcbi8vIGhhbmRsZSBjcmVhdGUgcHJvamVjdCBmb3JtIHN1Ym1pdFxuY29uc3QgY3JlYXRlUHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QtZm9ybScpXG5jcmVhdGVQcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5jb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1jcmVhdGUtcHJvamVjdC1uYW1lJykudmFsdWU7XG5wcm9qZWN0T3B0aW9ucy5wdXNoKHByb2plY3ROYW1lSW5wdXQpXG4vLyBjYWxsIGZ1bmN0aW9uIHRvIHVwZGF0ZSBwcm9qZWN0IG9wdGlvbnMgXG5zZXRQcm9qZWN0T3B0aW9ucygpO1xuXG5jbG9zZUNyZWF0ZVByb2plY3REaWFsb2coKVxuXG59KVxuc2V0UHJvamVjdE9wdGlvbnMoKTtcblxuLy8gZnVuY3Rpb24gdG8gY2xlYXIgbG9jYWwgc3RvcmFnZVxuZnVuY3Rpb24gY2xlYXJMb2NhbFN0b3JhZ2UoKSB7XG4gICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XG4gICAgXG59XG4vLyBjbGVhckxvY2FsU3RvcmFnZSgpXG5cbi8vIGNhbGwgb24gcGFnZSBsb2FkIHRvIGRpc3BsYXkgdGFza3MgaW4gbG9jYWwgc3RvcmFnZVxuLy8gdXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYWxsVGFza3NBcnJheSkpXG51cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcblxuLy8gZnVuY3Rpb24gdG8gc3RhcnQgdGltZXIgdGhhdCB0YWtlcyBvYmplY3QgYXMgYXJndW1lbnRcbmZ1bmN0aW9uIHN0YXJ0VGltZXIob2JqZWN0KSB7XG5cbn1cblxuLy8gZXZlbnQgbGlzdGVuZXIgYW5kIGhhbmRsZXIgZm9yIHByb2plY3QgZmlsdGVyIGZlYXR1cmVcbmNvbnN0IHByb2plY3RGaWx0ZXJTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1maWx0ZXItY29udGFpbmVyJylcbmZ1bmN0aW9uIGhhbmRsZVByb2plY3RGaWx0ZXJTZWxlY3QoKSB7XG4gICAgXG4gICAgLy8gZ2V0IHNlbGVjdCBlbGVtZW50XG5jb25zdCBzZWxlY3RFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QtZmlsdGVyJylcbi8vIHJlbW92ZSBjaGlsZHJlbiBvcHRpb24gZWxlbWVudHMgXG5mb3IgKGxldCBpID0gc2VsZWN0RWxlbWVudC5jaGlsZHJlbi5sZW5ndGggLTE7IGkgPj0gMjsgaS0tKSB7XG5jb25zdCBjaGlsZCA9IHNlbGVjdEVsZW1lbnQuY2hpbGRyZW5baV07XG5zZWxlY3RFbGVtZW50LnJlbW92ZUNoaWxkKGNoaWxkKVxuXG59XG5cbi8vIGdldCBsb2NhbCBzdG9yYWdlIGFycmF5IG9mIHRhc2sgb2JqZWN0c1xuY29uc3Qgc3RvcmVkRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpXG4vLyBjb252ZXJ0IHN0cmluZ2VkIGFycmF5IHRvIG5vcm1hbCBhcnJheVxuY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcblxuY29uc3QgdW5pcXVlVmFsdWVzID0gW107XG4vLyBsb29wIHRocm91Z2ggYXJyYXkgb2JqZWN0IGl0ZW1zIGFuZCBvdXRwdXQgdGhlIHByb2plY3QgdmFsdWVcbmZvciAobGV0IGkgPSAwOyBpIDwgZGF0YUFycmF5Lmxlbmd0aDsgaSsrKSB7XG5sZXQga2V5ID0gZGF0YUFycmF5W2ldLnByb2plY3Q7XG5cbmlmICghdW5pcXVlVmFsdWVzLmluY2x1ZGVzKGtleSkpIHtcblxuY29uc3Qgb3B0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG5vcHRpb25FbGVtZW50LnZhbHVlID0ga2V5O1xub3B0aW9uRWxlbWVudC50ZXh0ID0ga2V5O1xuXG5zZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG51bmlxdWVWYWx1ZXMucHVzaChrZXkpXG5cbn1cblxufVxuXG59XG5wcm9qZWN0RmlsdGVyU2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlUHJvamVjdEZpbHRlclNlbGVjdClcbnByb2plY3RGaWx0ZXJTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKGV2ZW50KSA9PiB7XG4vLyBnZXQgdGhlIHZhbHVlIG9mIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50XG4gICAgY29uc3Qgc2VsZWN0ZWRJdGVtID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuXG4vLyBnZXQgdGhlIGFsbCB0YXNrcyBhcnJheVxuY29uc3QgYWxsVGFza3NBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpXG5cbmNvbnN0IGZpbHRlcmVkT2JqZWN0cyA9IFtdO1xuLy8gbG9vcCB0aHJvdWdoIGFsbCB0YXNrcyBhcnJheSBcbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsVGFza3NBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIC8vIGNvbnN0IGN1cnJlbnRJdGVtID0gYWxsVGFza3NBcnJheVtpXTtcblxuICAgIC8vIGNoZWNrIGlmIHNlbGVjdGVkIGl0ZW0gdmFsdWUgaXMgYWxsIHRhc2tzXG4gICAgaWYgKHNlbGVjdGVkSXRlbSA9PT0gJ2FsbC10YXNrcycpIHtcbiAgICAgICAgLy8gYWRkIGFsbCB0YXNrcyB0byBmaWx0ZXIgYXJyYXlcbiAgICAgICAgLy8gZmlsdGVyZWRPYmplY3RzLnB1c2goYWxsVGFza3NBcnJheVtpXSlcbiAgICAgICAgXG4gICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKVxuICAgICAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihhbGxUYXNrc0FycmF5KVxuICAgIH1cbmlmIChhbGxUYXNrc0FycmF5W2ldLnByb2plY3QgPT09IHNlbGVjdGVkSXRlbSkge1xuICAgICAgICBmaWx0ZXJlZE9iamVjdHMucHVzaChhbGxUYXNrc0FycmF5W2ldKVxuXG4gICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKGZpbHRlcmVkT2JqZWN0cylcbiAgICB9XG5cblxufVxuXG5cbiAgICBcbiAgICB9KTtcblxuZnVuY3Rpb24gZGF5c0xlZnRVbnRpbER1ZURhdGUoZHVlRGF0ZSkge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBuZXcgRGF0ZShkdWVEYXRlKTtcbiAgICBjb25zdCBjdXJyZW50RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgY29uc3QgZGF5c0xlZnQgPSBkaWZmZXJlbmNlSW5EYXlzKHRhcmdldERhdGUsIGN1cnJlbnREYXRlKTtcblxuICAgIHJldHVybiBkYXlzTGVmdFxufSAgIFxuXG5cblxuXG4vLyBjbGVhckxvY2FsU3RvcmFnZSgpXG5cblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYWxsVGFza3MpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=