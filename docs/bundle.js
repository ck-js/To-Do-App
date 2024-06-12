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
#output {
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
align-items: center;

}

#task-items-container {
    outline: 1px solid purple;
    border-radius: 5px;
    flex-direction: column;
    height: 500px;
    width: 80%;
    overflow: scroll;

}
.task-item-element {
    outline: 2px solid purple;
    /* height: 100px; */
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(10, 1fr);
padding-top: 20px;
padding-bottom: 20px;
    row-gap: 40px;

}
.complete {
    text-decoration: line-through;
    color: purple;
    
}
#task-description {
    
    font-weight: bold;
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
cursor: pointer;
    grid-row: 1;
    grid-column: 2/9;

}
#task-project {
    grid-row: 2;
    grid-column: 2/9;
    cursor: pointer;
}
#task-date {
    grid-row: 1;
    grid-column: 9/10;
    cursor: pointer;
    font-size: 16px;
}
#task-start {
    grid-row: 2;
    grid-column: 9;
    cursor: pointer;
}


#start-stop-button {
    outline: 3px solid purple;
height: 200px;    
    display: flex;
    justify-content: center;
    align-items: center;
position: fixed;
    bottom: 10px;
    border-radius: 50%;
    right: 0;
    width: 200px;
    background-color: black;
    color: white;
    font-size: 36px;
    cursor: pointer;
    z-index:999;
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
padding: 25px 50px;
cursor: pointer;
}
#project-filter {
    width: 100%;
    height: 35px;
    border: 2px solid purple;
    background-color: black;
    color: white;
    cursor: pointer;
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
    width: 40%;
    
z-index: 999;    
padding: 5px;
padding-bottom: 50px;
}
.close {
    cursor: pointer;
}
.delete{
    cursor: pointer;
}
button {
    cursor: pointer;
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


@media (max-width: 767px) {

    
    #task-date {
        font-size: 12px;
    }
#start-stop-button {
width: 100px;    
height: 100px;
    font-size: 24px;    
    position: fixed;
    bottom: 100px;


}
.dialog {
    
        width: 80%;
        padding-bottom: 50px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;AAE1B;;;AAGA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B,mBAAmB;;AAEnB;;AAEA;IACI,yBAAyB;IACzB,kBAAkB;IAClB,sBAAsB;IACtB,aAAa;IACb,UAAU;IACV,gBAAgB;;AAEpB;AACA;IACI,yBAAyB;IACzB,mBAAmB;IACnB,aAAa;IACb,kCAAkC;IAClC,sCAAsC;AAC1C,iBAAiB;AACjB,oBAAoB;IAChB,aAAa;;AAEjB;AACA;IACI,6BAA6B;IAC7B,aAAa;;AAEjB;AACA;;IAEI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B,eAAe;IACX,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,WAAW;IACX,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;IACf,eAAe;AACnB;AACA;IACI,WAAW;IACX,cAAc;IACd,eAAe;AACnB;;;AAGA;IACI,yBAAyB;AAC7B,aAAa;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB,eAAe;IACX,YAAY;IACZ,kBAAkB;IAClB,QAAQ;IACR,YAAY;IACZ,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,eAAe;IACf,WAAW;AACf;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;;AAEnB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB,kBAAkB;AAClB,eAAe;AACf;AACA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;AACA;AACA,uBAAuB;IACnB,wBAAwB;IACxB,YAAY;IACZ,eAAe,EAAE,iDAAiD;IAClE,QAAQ,EAAE,kDAAkD;IAC5D,SAAS,EAAE,oDAAoD;IAC/D,gCAAgC,EAAE,+EAA+E;IACjH,mCAAmC;IACnC,UAAU;;AAEd,YAAY;AACZ,YAAY;AACZ,oBAAoB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,oCAAoC;IACpC,YAAY;IACZ,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,sBAAsB;GACvB;AACH;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,WAAW;IACX,wBAAwB;IACxB,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,cAAc;;AAElB;AACA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;;;AAGA;;;IAGI;QACI,eAAe;IACnB;AACJ;AACA,YAAY;AACZ,aAAa;IACT,eAAe;IACf,eAAe;IACf,aAAa;;;AAGjB;AACA;;QAEQ,UAAU;QACV,oBAAoB;IACxB;AACJ","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n}\n\n\nbody {\n    background-color: black;\n    color: white;\n}\n#output {\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\nalign-items: center;\n\n}\n\n#task-items-container {\n    outline: 1px solid purple;\n    border-radius: 5px;\n    flex-direction: column;\n    height: 500px;\n    width: 80%;\n    overflow: scroll;\n\n}\n.task-item-element {\n    outline: 2px solid purple;\n    /* height: 100px; */\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(10, 1fr);\npadding-top: 20px;\npadding-bottom: 20px;\n    row-gap: 40px;\n\n}\n.complete {\n    text-decoration: line-through;\n    color: purple;\n    \n}\n#task-description {\n    \n    font-weight: bold;\n    font-size: 1.3rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\ncursor: pointer;\n    grid-row: 1;\n    grid-column: 2/9;\n\n}\n#task-project {\n    grid-row: 2;\n    grid-column: 2/9;\n    cursor: pointer;\n}\n#task-date {\n    grid-row: 1;\n    grid-column: 9/10;\n    cursor: pointer;\n    font-size: 16px;\n}\n#task-start {\n    grid-row: 2;\n    grid-column: 9;\n    cursor: pointer;\n}\n\n\n#start-stop-button {\n    outline: 3px solid purple;\nheight: 200px;    \n    display: flex;\n    justify-content: center;\n    align-items: center;\nposition: fixed;\n    bottom: 10px;\n    border-radius: 50%;\n    right: 0;\n    width: 200px;\n    background-color: black;\n    color: white;\n    font-size: 36px;\n    cursor: pointer;\n    z-index:999;\n}\n#project-filter-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 25px 0;\n    \n}\n#filter-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    justify-content: center;\n    align-items: center;\npadding: 25px 50px;\ncursor: pointer;\n}\n#project-filter {\n    width: 100%;\n    height: 35px;\n    border: 2px solid purple;\n    background-color: black;\n    color: white;\n    cursor: pointer;\n}\n.dialog {\nbackground-color: black;\n    border: 5px solid purple;\n    color: white;\n    position: fixed; /* Position the dialog relative to the viewport */\n    top: 50%; /* Position the dialog halfway down the viewport */\n    left: 50%; /* Position the dialog halfway across the viewport */\n    transform: translate(-50%, -50%); /* Offset the dialog's position by half its own width and height to center it */\n    /* Add width and height if needed */\n    width: 40%;\n    \nz-index: 999;    \npadding: 5px;\npadding-bottom: 50px;\n}\n.close {\n    cursor: pointer;\n}\n.delete{\n    cursor: pointer;\n}\nbutton {\n    cursor: pointer;\n}\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 999;\n    transition: opacity 0.3s ease-in-out;\n}\n.dialog-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 20px;\n}\n#create-close {\n    align-self: flex-start;   \n   }\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    row-gap: 20px;\n}\n.form-wrappers {\n    display: flex;\n    flex-direction: column;\n\n}\n#create-description {\n    background-color: black;\n    color: white;\n}\n#create-project {\n    background-color: black;\n    color: white;\n}\nform button {\n    width: 100%;\n    background-color: purple;\n    border: 1px solid purple;\n    color: white;\n    align-self: center;\n    padding: 5px 0;\n\n}\n#update-nav-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n#update-description {\n    background-color: black;\n    color: white;\n}\n#update-project {\n    background-color: black;\n    color: white;\n}\n#create-date {\n    background-color: black;\n    color: white;\n}\n\n\n@media (max-width: 767px) {\n\n    \n    #task-date {\n        font-size: 12px;\n    }\n#start-stop-button {\nwidth: 100px;    \nheight: 100px;\n    font-size: 24px;    \n    position: fixed;\n    bottom: 100px;\n\n\n}\n.dialog {\n    \n        width: 80%;\n        padding-bottom: 50px;\n    }\n}\n"],"sourceRoot":""}]);
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
if (!item.isComplete) {    
    div4.textContent = 'Mark Complete';

}
if (item.isComplete) {
div4.textContent = 'Completed';
taskItemElement.classList.add('complete')
}
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

if (selectedValue === 'default' || selectedValue === 'all-tasks') {
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

// append project filter feature to dom
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createProjectFilterSelect)())

output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.taskItemsContainer)())



// append start stop button to body 
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.startStopButton)())


// append form to html
body.insertBefore((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createFormDialog)(), output)
body.insertBefore((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateFormDialog)(), output)
body.insertBefore((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createProjectFormDialog)(), output)
// body.appendChild(())
// body.appendChild(createProjectFormDialog())




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
    event.target.textContent === 'Completed') {

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
    event.target.textContent === 'Mark Complete') {
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
        task.daysLeft = daysLeft;

        // addTaskToAnArray(task,allTasksArray)
        // allTasksArray.addItem(task)
        // localStorage.setItem('allTasksArray', JSON.stringify(task))
addObjectToLocalStorageArray('allTasks', task)

console.log(JSON.parse(localStorage.getItem('allTasks')));


        // update dom with new task
            // updateTasksContainer(allTasksArray.getArray())
            (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.allTasks))
        
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



        (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(JSON.parse(localStorage.getItem('allTasks')))
            
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
    })
// rule for escape key event 
updateDialog.addEventListener('keydown', (event) => {
if (event.key === 'Escape' || event.key === 'Esc') {
    event.preventDefault();

    (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)()
}
// check if event target is click on backdrop
updateDialog.addEventListener('click', (event) => {
if (event.target === updateDialog) {
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)()

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
(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.openCreateProjectFormDialog)()

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUF1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzWnNDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsbURBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU02QztBQUNOO0FBQytDOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCx5QkFBeUIsMkRBQVU7QUFDbkMsMEJBQTBCLDJE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QUFFQTtBQUNBO0FBQ0EscUVBQW9COztBQUVwQjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFFBQVE7QUFDdkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLHNCQUFzQjtBQUN0Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQiwwQkFBMEI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsNkVBQTRCO0FBQ3BDLFFBQVEsc0VBQW9CO0FBQzVCO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLDhFQUE0QjtBQUNwQyxxRUFBb0I7QUFDcEI7OztBQUdBOzs7QUFHQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDBEQUFnQjs7QUFFckM7QUFDQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQSwrQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdGFzay1vYmplY3QtY29tcG9uZW50LmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy91c2VyLWludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29uc3RhbnRzLm1qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZUluRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0T2ZEYXkubWpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy90b0RhdGUubWpzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxufVxuXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNvdXRwdXQge1xuICAgIGhlaWdodDogODAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbn1cblxuI3Rhc2staXRlbXMtY29udGFpbmVyIHtcbiAgICBvdXRsaW5lOiAxcHggc29saWQgcHVycGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGhlaWdodDogNTAwcHg7XG4gICAgd2lkdGg6IDgwJTtcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xuXG59XG4udGFzay1pdGVtLWVsZW1lbnQge1xuICAgIG91dGxpbmU6IDJweCBzb2xpZCBwdXJwbGU7XG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XG5wYWRkaW5nLXRvcDogMjBweDtcbnBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgIHJvdy1nYXA6IDQwcHg7XG5cbn1cbi5jb21wbGV0ZSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgY29sb3I6IHB1cnBsZTtcbiAgICBcbn1cbiN0YXNrLWRlc2NyaXB0aW9uIHtcbiAgICBcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDEuM3JlbTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG5jdXJzb3I6IHBvaW50ZXI7XG4gICAgZ3JpZC1yb3c6IDE7XG4gICAgZ3JpZC1jb2x1bW46IDIvOTtcblxufVxuI3Rhc2stcHJvamVjdCB7XG4gICAgZ3JpZC1yb3c6IDI7XG4gICAgZ3JpZC1jb2x1bW46IDIvOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4jdGFzay1kYXRlIHtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogOS8xMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuI3Rhc2stc3RhcnQge1xuICAgIGdyaWQtcm93OiAyO1xuICAgIGdyaWQtY29sdW1uOiA5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuXG4jc3RhcnQtc3RvcC1idXR0b24ge1xuICAgIG91dGxpbmU6IDNweCBzb2xpZCBwdXJwbGU7XG5oZWlnaHQ6IDIwMHB4OyAgICBcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5wb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICByaWdodDogMDtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgei1pbmRleDo5OTk7XG59XG4jcHJvamVjdC1maWx0ZXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMjVweCAwO1xuICAgIFxufVxuI2ZpbHRlci13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcm93LWdhcDogMjBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xucGFkZGluZzogMjVweCA1MHB4O1xuY3Vyc29yOiBwb2ludGVyO1xufVxuI3Byb2plY3QtZmlsdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uZGlhbG9nIHtcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydCAqL1xuICAgIHRvcDogNTAlOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIGhhbGZ3YXkgZG93biB0aGUgdmlld3BvcnQgKi9cbiAgICBsZWZ0OiA1MCU7IC8qIFBvc2l0aW9uIHRoZSBkaWFsb2cgaGFsZndheSBhY3Jvc3MgdGhlIHZpZXdwb3J0ICovXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIE9mZnNldCB0aGUgZGlhbG9nJ3MgcG9zaXRpb24gYnkgaGFsZiBpdHMgb3duIHdpZHRoIGFuZCBoZWlnaHQgdG8gY2VudGVyIGl0ICovXG4gICAgLyogQWRkIHdpZHRoIGFuZCBoZWlnaHQgaWYgbmVlZGVkICovXG4gICAgd2lkdGg6IDQwJTtcbiAgICBcbnotaW5kZXg6IDk5OTsgICAgXG5wYWRkaW5nOiA1cHg7XG5wYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5jbG9zZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRlbGV0ZXtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5idXR0b24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbmRpYWxvZzo6YmFja2Ryb3Age1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgICB6LWluZGV4OiA5OTk7XG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2UtaW4tb3V0O1xufVxuLmRpYWxvZy1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICByb3ctZ2FwOiAyMHB4O1xufVxuI2NyZWF0ZS1jbG9zZSB7XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgICBcbiAgIH1cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICByb3ctZ2FwOiAyMHB4O1xufVxuLmZvcm0td3JhcHBlcnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxufVxuI2NyZWF0ZS1kZXNjcmlwdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NyZWF0ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5mb3JtIGJ1dHRvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDVweCAwO1xuXG59XG4jdXBkYXRlLW5hdi13cmFwcGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuI3VwZGF0ZS1kZXNjcmlwdGlvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI3VwZGF0ZS1wcm9qZWN0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jY3JlYXRlLWRhdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcblxuICAgIFxuICAgICN0YXNrLWRhdGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuI3N0YXJ0LXN0b3AtYnV0dG9uIHtcbndpZHRoOiAxMDBweDsgICAgXG5oZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMjRweDsgICAgXG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTAwcHg7XG5cblxufVxuLmRpYWxvZyB7XG4gICAgXG4gICAgICAgIHdpZHRoOiA4MCU7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLFVBQVU7SUFDVixTQUFTO0lBQ1Qsc0JBQXNCOztBQUUxQjs7O0FBR0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCLG1CQUFtQjs7QUFFbkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxzQ0FBc0M7QUFDMUMsaUJBQWlCO0FBQ2pCLG9CQUFvQjtJQUNoQixhQUFhOztBQUVqQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7O0FBRWpCO0FBQ0E7O0lBRUksaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtBQUMzQixlQUFlO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7QUFHQTtJQUNJLHlCQUF5QjtBQUM3QixhQUFhO0lBQ1QsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIsZUFBZTtJQUNYLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFlBQVk7SUFDWix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YsV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7QUFDQSx1QkFBdUI7SUFDbkIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixlQUFlLEVBQUUsaURBQWlEO0lBQ2xFLFFBQVEsRUFBRSxrREFBa0Q7SUFDNUQsU0FBUyxFQUFFLG9EQUFvRDtJQUMvRCxnQ0FBZ0MsRUFBRSwrRUFBK0U7SUFDakgsbUNBQW1DO0lBQ25DLFVBQVU7O0FBRWQsWUFBWTtBQUNaLFlBQVk7QUFDWixvQkFBb0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksc0JBQXNCO0dBQ3ZCO0FBQ0g7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOzs7QUFHQTs7O0lBR0k7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFDQSxZQUFZO0FBQ1osYUFBYTtJQUNULGVBQWU7SUFDZixlQUFlO0lBQ2YsYUFBYTs7O0FBR2pCO0FBQ0E7O1FBRVEsVUFBVTtRQUNWLG9CQUFvQjtJQUN4QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jb3V0cHV0IHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiN0YXNrLWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBwdXJwbGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgaGVpZ2h0OiA1MDBweDtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcXG5cXG59XFxuLnRhc2staXRlbS1lbGVtZW50IHtcXG4gICAgb3V0bGluZTogMnB4IHNvbGlkIHB1cnBsZTtcXG4gICAgLyogaGVpZ2h0OiAxMDBweDsgKi9cXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMiwgMWZyKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxucGFkZGluZy10b3A6IDIwcHg7XFxucGFkZGluZy1ib3R0b206IDIwcHg7XFxuICAgIHJvdy1nYXA6IDQwcHg7XFxuXFxufVxcbi5jb21wbGV0ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICBcXG59XFxuI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5jdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMi85O1xcblxcbn1cXG4jdGFzay1wcm9qZWN0IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3Rhc2stZGF0ZSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogOS8xMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBmb250LXNpemU6IDE2cHg7XFxufVxcbiN0YXNrLXN0YXJ0IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiA5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblxcbiNzdGFydC1zdG9wLWJ1dHRvbiB7XFxuICAgIG91dGxpbmU6IDNweCBzb2xpZCBwdXJwbGU7XFxuaGVpZ2h0OiAyMDBweDsgICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbnBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB6LWluZGV4Ojk5OTtcXG59XFxuI3Byb2plY3QtZmlsdGVyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAyNXB4IDA7XFxuICAgIFxcbn1cXG4jZmlsdGVyLXdyYXBwZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcm93LWdhcDogMjBweDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxucGFkZGluZzogMjVweCA1MHB4O1xcbmN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3Byb2plY3QtZmlsdGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgYm9yZGVyOiAycHggc29saWQgcHVycGxlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kaWFsb2cge1xcbmJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwdXJwbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgcG9zaXRpb246IGZpeGVkOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIHJlbGF0aXZlIHRvIHRoZSB2aWV3cG9ydCAqL1xcbiAgICB0b3A6IDUwJTsgLyogUG9zaXRpb24gdGhlIGRpYWxvZyBoYWxmd2F5IGRvd24gdGhlIHZpZXdwb3J0ICovXFxuICAgIGxlZnQ6IDUwJTsgLyogUG9zaXRpb24gdGhlIGRpYWxvZyBoYWxmd2F5IGFjcm9zcyB0aGUgdmlld3BvcnQgKi9cXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IC8qIE9mZnNldCB0aGUgZGlhbG9nJ3MgcG9zaXRpb24gYnkgaGFsZiBpdHMgb3duIHdpZHRoIGFuZCBoZWlnaHQgdG8gY2VudGVyIGl0ICovXFxuICAgIC8qIEFkZCB3aWR0aCBhbmQgaGVpZ2h0IGlmIG5lZWRlZCAqL1xcbiAgICB3aWR0aDogNDAlO1xcbiAgICBcXG56LWluZGV4OiA5OTk7ICAgIFxcbnBhZGRpbmc6IDVweDtcXG5wYWRkaW5nLWJvdHRvbTogNTBweDtcXG59XFxuLmNsb3NlIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4uZGVsZXRle1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbmJ1dHRvbiB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuZGlhbG9nOjpiYWNrZHJvcCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gICAgei1pbmRleDogOTk5O1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZS1pbi1vdXQ7XFxufVxcbi5kaWFsb2ctY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbn1cXG4jY3JlYXRlLWNsb3NlIHtcXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDsgICBcXG4gICB9XFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG4gICAgcm93LWdhcDogMjBweDtcXG59XFxuLmZvcm0td3JhcHBlcnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcblxcbn1cXG4jY3JlYXRlLWRlc2NyaXB0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI2NyZWF0ZS1wcm9qZWN0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuZm9ybSBidXR0b24ge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcHVycGxlO1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiA1cHggMDtcXG5cXG59XFxuI3VwZGF0ZS1uYXYtd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbiN1cGRhdGUtZGVzY3JpcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jdXBkYXRlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY3JlYXRlLWRhdGUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcXG5cXG4gICAgXFxuICAgICN0YXNrLWRhdGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xcbiAgICB9XFxuI3N0YXJ0LXN0b3AtYnV0dG9uIHtcXG53aWR0aDogMTAwcHg7ICAgIFxcbmhlaWdodDogMTAwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjRweDsgICAgXFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAxMDBweDtcXG5cXG5cXG59XFxuLmRpYWxvZyB7XFxuICAgIFxcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUYXNrIHtcbiAgICBzdGF0aWMgaWRDb3VudGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkQ291bnRlcicpIHx8IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmlkID0gVGFzay5pZENvdW50ZXIrKztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIGlkQ291bnRlciB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkQ291bnRlcicsIFRhc2suaWRDb3VudGVyKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdCwgZHVlRGF0ZSkge1xuICAgIGNvbnN0IHRhc2sgPSBuZXcgVGFzayhkZXNjcmlwdGlvbixwcm9qZWN0LCBkdWVEYXRlKTtcblxuICAgIHJldHVybiB0YXNrXG59XG5mdW5jdGlvbiBhZGRUYXNrVG9BbkFycmF5KG9iamVjdCwgYXJyYXlOYW1lKSB7XG4gICAgYXJyYXlOYW1lLnB1c2gob2JqZWN0KVxufVxuLy8gZmFjdG9yeSBmb3IgcHJvamVjdCBhcnJheXNcbmZ1bmN0aW9uIGNyZWF0ZUFycmF5RmFjdG9yeSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50VGFza0luZGV4OyBcblxuICAgIGZ1bmN0aW9uIGdldEFycmF5KCkge1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFzaycsIEpTT04uc3RyaW5naWZ5KGl0ZW0pKVxuICAgIH1cbiAgICBmdW5jdGlvbiBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChpZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gaWQ7XG4gICAgICAgIGxldCBzaGlmdGVkSWQgPSBwYXJzZUludCgoZWxlbWVudCkgLTEpO1xuXG5yZXR1cm4gc2hpZnRlZElkO1xuICAgIH1cbmZ1bmN0aW9uIGdldEFycmF5SXRlbShpbmRleCkge1xuICAgIHJldHVybiBhcnJheVtpbmRleF1cbn1cbmZ1bmN0aW9uIHNldEN1cnJlbnRUYXNrSW5kZXgoaW5kZXgpIHtcbiAgICBjdXJyZW50VGFza0luZGV4ID0gaW5kZXg7XG59XG5mdW5jdGlvbiBnZXRDdXJyZW50VGFza0luZGV4KCkge1xuICAgIHJldHVybiBjdXJyZW50VGFza0luZGV4O1xufVxuZnVuY3Rpb24gZGVsZXRlVGFza09iamVjdChpbmRleCkge1xuICAgIGlmIChpbmRleCA+PSAwICYmIGluZGV4IDwgYXJyYXkubGVuZ3RoKSB7XG4gICAgICAgIGFycmF5LnNwbGljZShpbmRleCwgMSlcbiAgICB9XG59XG5mdW5jdGlvbiBzdGFydChpbmRleCkge1xuICAgICAgICBhcnJheVtpbmRleF0uc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxufVxuZnVuY3Rpb24gc3RvcChpbmRleCkge1xuICAgIGFycmF5W2luZGV4XS5lbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICBcbn1cbmZ1bmN0aW9uIGVsYXBzZWQoaW5kZXgpIHtcbiAgICBpZiAoIWFycmF5W2luZGV4XS5zdGFydFRpbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdGFydGVkIScpXG4gICAgfVxuICAgIGlmICghYXJyYXlbaW5kZXhdLmVuZFRpbWUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdG9wcGVkIScpXG4gICAgfVxuXG4gICAgY29uc3QgbWlsbGlzZWNvbmRzID0gYXJyYXlbaW5kZXhdLmVuZFRpbWUgLSBhcnJheVtpbmRleF0uc3RhcnRUaW1lO1xuXG4gICAgcmV0dXJuIG1pbGxpc2Vjb25kcztcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShtaWxsaXNlY29uZHMpIHtcbiAgICBjb25zdCB0b3RhbFNlY29uZHMgPSBNYXRoLmZsb29yKG1pbGxpc2Vjb25kcyAvIDEwMDApO1xuICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbiAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG4gICAgY29uc3Qgc2Vjb25kcyA9IHRvdGFsU2Vjb25kcyAlIDYwO1xuICBcbiAgICBjb25zdCBmb3JtYXR0ZWRUaW1lID0gYCR7cGFkWmVybyhob3Vycyl9OiR7cGFkWmVybyhtaW51dGVzKX06JHtwYWRaZXJvKHNlY29uZHMpfWA7XG4gICAgcmV0dXJuIGZvcm1hdHRlZFRpbWU7XG4gIH1cbiAgXG4gIGZ1bmN0aW9uIHBhZFplcm8obnVtYmVyKSB7XG4gICAgcmV0dXJuIG51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgfVxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkU3BlbnRUaW1lKGluZGV4KSB7XG5sZXQgdG90YWxNaWxsaVNlY29uZHMgPSAwO1xuZm9yIChsZXQgaSA9IDA7IGkgPGFycmF5W2luZGV4XS5tc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG5sZXQgZWxlbWVudCA9IGFycmF5W2luZGV4XS5tc0FycmF5W2ldO1xudG90YWxNaWxsaVNlY29uZHMgKz0gZWxlbWVudDtcblxufVxucmV0dXJuIGZvcm1hdFRpbWUodG90YWxNaWxsaVNlY29uZHMpO1xufSAgXG4gZnVuY3Rpb24gc2V0TG9jYWxTdG9yYWdlKGtleSwgYXJyYXkpIHtcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgYXJyYXkpXG4gfSBcbiAgXG5cblxucmV0dXJuIHtcbiAgICBnZXRBcnJheSxcbiAgICBhZGRJdGVtLFxuICAgIGRvd25TaGlmdElkVG9BcnJheUluZGV4LFxuICAgIGdldEFycmF5SXRlbSxcbiAgICBzZXRDdXJyZW50VGFza0luZGV4LFxuICAgIGdldEN1cnJlbnRUYXNrSW5kZXgsXG4gICAgZGVsZXRlVGFza09iamVjdCxcbnN0YXJ0LFxuc3RvcCxcbmVsYXBzZWQsXG5nZXRGb3JtYXR0ZWRTcGVudFRpbWUsXG5zZXRMb2NhbFN0b3JhZ2UsXG5cblxufTtcbn1cblxuLy8gc2VjdGlvbiBmb3IgcHJvamVjdCBzZWxlY3Qgb3B0aW9uIGRyb3Bkb3duIGltcGxlbWVudGF0aW9uXG5cblxuXG5cblxuLy8gcmVmYWN0b3JlZCBmYWN0b3J5IG1ldGhvZHMgdG8gZ2xvYmFsIGZ1bmN0aW9uc1xuZnVuY3Rpb24gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoaWQpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gaWQ7XG4gICAgbGV0IHNoaWZ0ZWRJZCA9IHBhcnNlSW50KChlbGVtZW50KSAtMSk7XG5cbnJldHVybiBzaGlmdGVkSWQ7XG59XG5mdW5jdGlvbiBzdGFydChpbmRleCkge1xuICAgIGxvY2FsU3RvcmFnZS5hbGxUYXNrc1tpbmRleF0uc3RhcnRUaW1lID0gbmV3IERhdGUoKTtcblxufVxuZnVuY3Rpb24gc3RvcChpbmRleCkge1xuYXJyYXlbaW5kZXhdLmVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuXG59XG5mdW5jdGlvbiBlbGFwc2VkKGluZGV4KSB7XG5pZiAoIWFycmF5W2luZGV4XS5zdGFydFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0YXJ0ZWQhJylcbn1cbmlmICghYXJyYXlbaW5kZXhdLmVuZFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1N0b3B3YXRjaCBub3QgeWV0IHN0b3BwZWQhJylcbn1cblxuY29uc3QgbWlsbGlzZWNvbmRzID0gYXJyYXlbaW5kZXhdLmVuZFRpbWUgLSBhcnJheVtpbmRleF0uc3RhcnRUaW1lO1xuXG5yZXR1cm4gbWlsbGlzZWNvbmRzO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lKG1pbGxpc2Vjb25kcykge1xuY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbmNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0b3RhbFNlY29uZHMgLyAzNjAwKTtcbmNvbnN0IG1pbnV0ZXMgPSBNYXRoLmZsb29yKCh0b3RhbFNlY29uZHMgJSAzNjAwKSAvIDYwKTtcbmNvbnN0IHNlY29uZHMgPSB0b3RhbFNlY29uZHMgJSA2MDtcblxuY29uc3QgZm9ybWF0dGVkVGltZSA9IGAke3BhZFplcm8oaG91cnMpfToke3BhZFplcm8obWludXRlcyl9OiR7cGFkWmVybyhzZWNvbmRzKX1gO1xucmV0dXJuIGZvcm1hdHRlZFRpbWU7XG59XG5cbmZ1bmN0aW9uIHBhZFplcm8obnVtYmVyKSB7XG5yZXR1cm4gbnVtYmVyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xufVxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkU3BlbnRUaW1lKGluZGV4KSB7XG5sZXQgdG90YWxNaWxsaVNlY29uZHMgPSAwO1xuZm9yIChsZXQgaSA9IDA7IGkgPGFycmF5W2luZGV4XS5tc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG5sZXQgZWxlbWVudCA9IGFycmF5W2luZGV4XS5tc0FycmF5W2ldO1xudG90YWxNaWxsaVNlY29uZHMgKz0gZWxlbWVudDtcblxufVxucmV0dXJuIGZvcm1hdFRpbWUodG90YWxNaWxsaVNlY29uZHMpO1xufSAgXG5cblxuXG5cbmV4cG9ydCB7XG5cbmNyZWF0ZVRhc2tPYmplY3QsXG5hZGRUYXNrVG9BbkFycmF5LFxuY3JlYXRlQXJyYXlGYWN0b3J5LFxuZG93blNoaWZ0SWRUb0FycmF5SW5kZXgsXG5cbn0iLCJpbXBvcnQge1xuICAgICBmb3JtYXREaXN0YW5jZSxcbiAgICAgIHN1YkRheXMgXG4gICAgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuXG5pbXBvcnQge1xuICAgIFN0b3B3YXRjaCxcbiAgICBjcmVhdGVUYXNrT2JqZWN0LFxuYWRkVGFza1RvQW5BcnJheSxcbn0gZnJvbSAnLi90YXNrLW9iamVjdC1jb21wb25lbnQnO1xuXG5cblxuLy8gY2xpY2sgZXZlbnQgbGlzdGVuZXIgZm9yIHN0YXJ0IGJ1dHRvblxuZnVuY3Rpb24gc3RhcnRCdG5FdmVudEhhbmRsZXIoKSB7XG5jb25zdCBzdGFydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydC1zdG9wLWJ1dHRvbicpXG4gICAgc3RhcnRCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgb3BlbkNyZWF0ZUZvcm1EaWFsb2coKTtcbiAgICBcbiAgICB9KVxuICAgIH1cblxuLy8gY3JlYXRlIHRhc2sgaXRlbXMgY29udGFpbmVyIFxuZnVuY3Rpb24gdGFza0l0ZW1zQ29udGFpbmVyKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgY29udGFpbmVyLmlkID0gJ3Rhc2staXRlbXMtY29udGFpbmVyJ1xuXG5yZXR1cm4gY29udGFpbmVyO1xufVxuLy8gY3JlYXRlIHRhc2sgaXRlbVxuZnVuY3Rpb24gY3JlYXRlVGFza0l0ZW0oYXJyYXkpIHtcbmNvbnN0IHRhc2tJdGVtc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWl0ZW1zLWNvbnRhaW5lcicpO1xuICAgZm9yIChsZXQgaSA9IDA7aSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBhcnJheVtpXTtcbiAgICBcbiAgICAgICAgY29uc3QgdGFza0l0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0tZWxlbWVudCcpXG5cbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmlkID0gaXRlbS5pZDtcblxuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICBkaXYuaWQgPSAndGFzay1kZXNjcmlwdGlvbic7XG4gICAgICAgIGRpdi50ZXh0Q29udGVudCA9IGl0ZW0uZGVzY3JpcHRpb247XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXYyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdjIuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIGRpdjIuaWQgPSAndGFzay1wcm9qZWN0JztcbiAgICAgICAgZGl2Mi50ZXh0Q29udGVudCA9IGl0ZW0ucHJvamVjdDtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRpdjMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2My5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgZGl2My5pZCA9ICd0YXNrLWRhdGUnO1xuICAgICAgICBpZiAoIWl0ZW0uZGF5c0xlZnQpIHtcbmRpdjMudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGl2My50ZXh0Q29udGVudCA9IGAke2l0ZW0uZGF5c0xlZnR9IGRheXMgbGVmdGA7XG5cbiAgICAgICAgfVxuICAgICAgICAvLyBkaXYgZm9yIHN0YXJ0IGFuZCBzdG9wIGJ1dHRvblxuICAgICAgICBjb25zdCBkaXY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5kaXY0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29tcG9uZW50JylcbmRpdjQuaWQgPSAndGFzay1zdGFydCc7XG5pZiAoIWl0ZW0uaXNDb21wbGV0ZSkgeyAgICBcbiAgICBkaXY0LnRleHRDb250ZW50ID0gJ01hcmsgQ29tcGxldGUnO1xuXG59XG5pZiAoaXRlbS5pc0NvbXBsZXRlKSB7XG5kaXY0LnRleHRDb250ZW50ID0gJ0NvbXBsZXRlZCc7XG50YXNrSXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY29tcGxldGUnKVxufVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2MilcbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdjMpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkaXY0KVxuICAgICAgICBcbiAgICAgICAgdGFza0l0ZW1zQ29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tJdGVtRWxlbWVudClcbiAgICB9XG4gICAgICAgIFxuICAgIHJldHVybiB0YXNrSXRlbXNDb250YWluZXI7XG59XG5cbi8vIGNyZWF0ZSBzdGFydCBhbmQgc3RvcCBidXR0b24gY29tcG9uZW50XG5mdW5jdGlvbiBzdGFydFN0b3BCdXR0b24oKSB7XG4gICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYnV0dG9uLmlkID0gJ3N0YXJ0LXN0b3AtYnV0dG9uJztcbmNvbnN0IGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKVxuaDMudGV4dENvbnRlbnQgPSAnKyc7XG5cbmJ1dHRvbi5hcHBlbmRDaGlsZChoMylcblxuICAgIHJldHVybiBidXR0b247XG59XG5cbi8vIGNyZWF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY3JlYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpXG5kaWFsb2cuaWQgPSAnY3JlYXRlLWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuY2xvc2UuaWQgPSAnY3JlYXRlLWNsb3NlJztcbmNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbmNsb3NlLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ05ldyBUYXNrJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAnY3JlYXRlLWZvcm0nXG5cbmNvbnN0IHdyYXBwZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53cmFwcGVyMS5jbGFzc0xpc3QuYWRkKCdmb3JtLXdyYXBwZXJzJylcbmNvbnN0IGxhYmVsMSA9IGNyZWF0ZUxhYmVsKCdjcmVhdGUtZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcbmNvbnN0IGlucHV0MSA9IGNyZWF0ZUlucHV0KCdjcmVhdGUtZGVzY3JpcHRpb24nLCAndGV4dCcpXG53cmFwcGVyMS5hcHBlbmRDaGlsZChsYWJlbDEpXG53cmFwcGVyMS5hcHBlbmRDaGlsZChpbnB1dDEpXG5cbmNvbnN0IHdyYXBwZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53cmFwcGVyMi5jbGFzc0xpc3QuYWRkKCdmb3JtLXdyYXBwZXJzJylcbmNvbnN0IGxhYmVsMiA9IGNyZWF0ZUxhYmVsKCdjcmVhdGUtcHJvamVjdCcsJ1Byb2plY3QnKTtcbmNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpXG5pbnB1dDIuY2xhc3NMaXN0LmFkZCgnY3JlYXRlLXByb2plY3QnKTtcbmlucHV0Mi5pZCA9ICdjcmVhdGUtcHJvamVjdCc7XG53cmFwcGVyMi5hcHBlbmRDaGlsZChsYWJlbDIpXG53cmFwcGVyMi5hcHBlbmRDaGlsZChpbnB1dDIpXG5cbmNvbnN0IG9wdGlvbjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbjEudmFsdWUgPSAnbm8tcHJvamVjdCdcbm9wdGlvbjEudGV4dCA9ICdObyBQcm9qZWN0JztcbmNvbnN0IG9wdGlvbjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbm9wdGlvbjIudmFsdWUgPSAnY3JlYXRlLXByb2plY3QnXG5vcHRpb24yLnRleHQgPSAnQ3JlYXRlIFByb2plY3QnO1xuXG5cbi8vIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxuLy8gaW5wdXQzLmlkID0gJ2NyZWF0ZS1zdGFydC10aW1lJ1xuXG5jb25zdCBpbnB1dDMgPSBjcmVhdGVEYXRlVGltZUlucHV0KCdjcmVhdGUtZGF0ZScpO1xuXG5cblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbnN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXQuaWQgPSAnY3JlYXRlLXN1Ym1pdC1idXR0b24nO1xuc3VibWl0LnRleHRDb250ZW50ID0gJ0RvbmUnXG5cbi8vIGFwcGVuZCBlbGVtZW50cyBzdGFydCBmcm9tIGxvd2VzdCBjaGlsZFxuZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRlbnQpXG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kQ2hpbGQod3JhcHBlcjEpO1xuZm9ybS5hcHBlbmRDaGlsZCh3cmFwcGVyMik7XG4vLyBmb3JtLmFwcGVuZENoaWxkKGxhYmVsMyk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MylcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuaW5wdXQyLmFwcGVuZENoaWxkKG9wdGlvbjEpXG5pbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMilcblxucmV0dXJuIGRpYWxvZztcbn1cblxuLy8gdXBkYXRlIGZvcm0gZGlhbG9nXG5mdW5jdGlvbiB1cGRhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpYWxvZycpXG5kaWFsb2cuY2xhc3NMaXN0LmFkZCgnZGlhbG9nJylcbmRpYWxvZy5pZCA9ICd1cGRhdGUtZGlhbG9nJztcblxuY29uc3QgZGlhbG9nQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kaWFsb2dDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1jb250ZW50JylcblxuY29uc3Qgd3JhcHBlcjEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbndyYXBwZXIxLmlkID0gJ3VwZGF0ZS1uYXYtd3JhcHBlcic7XG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbmNsb3NlLmlkID0gJ3VwZGF0ZS1jbG9zZSc7XG5jbG9zZS50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xud3JhcHBlcjEuYXBwZW5kQ2hpbGQoY2xvc2UpXG5cbmNvbnN0IHJlbW92ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbnJlbW92ZS5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxucmVtb3ZlLnRleHRDb250ZW50ID0gJ0RlbGV0ZSc7XG5yZW1vdmUuaWQgPSAndXBkYXRlLWRlbGV0ZSc7XG53cmFwcGVyMS5hcHBlbmRDaGlsZChyZW1vdmUpXG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ1VwZGF0ZSBUYXNrJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAndXBkYXRlLWZvcm0nXG5cbmNvbnN0IHdyYXBwZXIyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53cmFwcGVyMi5jbGFzc0xpc3QuYWRkKCdmb3JtLXdyYXBwZXJzJylcbmNvbnN0IGxhYmVsMSA9IGNyZWF0ZUxhYmVsKCd1cGRhdGUtZGVzY3JpcHRpb24nLCAnRGVzY3JpcHRpb24nKTtcbmNvbnN0IGlucHV0MSA9IGNyZWF0ZUlucHV0KCd1cGRhdGUtZGVzY3JpcHRpb24nLCAndGV4dCcpXG53cmFwcGVyMi5hcHBlbmRDaGlsZChsYWJlbDEpXG53cmFwcGVyMi5hcHBlbmRDaGlsZChpbnB1dDEpXG5cbmNvbnN0IHdyYXBwZXIzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53cmFwcGVyMy5jbGFzc0xpc3QuYWRkKCdmb3JtLXdyYXBwZXJzJylcbmNvbnN0IGxhYmVsMiA9IGNyZWF0ZUxhYmVsKCd1cGRhdGUtcHJvamVjdCcsJ1Byb2plY3QnKTtcbmNvbnN0IGlucHV0MiA9IGNyZWF0ZUlucHV0KCd1cGRhdGUtcHJvamVjdCcsJ3RleHQnKTtcbndyYXBwZXIzLmFwcGVuZENoaWxkKGxhYmVsMilcbndyYXBwZXIzLmFwcGVuZENoaWxkKGlucHV0MilcblxuY29uc3QgaW5wdXQzID0gY3JlYXRlRGF0ZVRpbWVJbnB1dCgndXBkYXRlLWRhdGUnKTtcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbnN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXQuaWQgPSAndXBkYXRlLXN1Ym1pdC1idXR0b24nO1xuc3VibWl0LnRleHRDb250ZW50ID0gJ0RvbmUnXG5cbi8vIGFwcGVuZCBlbGVtZW50cyBzdGFydCBmcm9tIGxvd2VzdCBjaGlsZFxuZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRlbnQpXG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKHdyYXBwZXIxKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kQ2hpbGQod3JhcHBlcjIpXG5mb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIzKVxuLy8gZm9ybS5hcHBlbmRDaGlsZChsYWJlbDMpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDMpXG5mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcblxucmV0dXJuIGRpYWxvZztcbn1cbi8vIGNyZWF0ZSBwcm9qZWN0IGZvcm0gZGlhbG9nXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0Rm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpXG5kaWFsb2cuaWQgPSAnY3JlYXRlLXByb2plY3QtZGlhbG9nJztcblxuY29uc3QgZGlhbG9nQ29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG5kaWFsb2dDb250ZW50LmNsYXNzTGlzdC5hZGQoJ2RpYWxvZy1jb250ZW50JylcblxuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS50ZXh0Q29udGVudCA9ICcmdGltZXM7JztcbmNsb3NlLmlkID0gJ2NyZWF0ZS1wcm9qZWN0LWNsb3NlJztcblxuY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpXG5oMi5pbm5lckhUTUwgPSAnTmV3IFByb2plY3QnO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuZm9ybS5pZCA9ICdjcmVhdGUtcHJvamVjdC1mb3JtJ1xuY29uc3QgbGFiZWwxID0gY3JlYXRlTGFiZWwoJ2NyZWF0ZS1wcm9qZWN0LW5hbWUnLCAnUHJvamVjdCcpO1xuY29uc3QgaW5wdXQxID0gY3JlYXRlSW5wdXQoJ2NyZWF0ZS1jcmVhdGUtcHJvamVjdC1uYW1lJywgJ3RleHQnKVxuaW5wdXQxLnBsYWNlaG9sZGVyID0gJ0VudGVyIGEgcHJvamVjdCBuYW1lJztcbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuc3VibWl0LmlkID0gJ2NyZWF0ZS1wcm9qZWN0LXN1Ym1pdC1idXR0b24nO1xuc3VibWl0LnRleHRDb250ZW50ID0gJ0RvbmUnXG5cbi8vIGFwcGVuZCBlbGVtZW50cyBzdGFydCBmcm9tIGxvd2VzdCBjaGlsZFxuZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRlbnQpXG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kQ2hpbGQobGFiZWwxKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQxKVxuZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG5cbnJldHVybiBkaWFsb2c7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGZvckF0dHJpYnV0ZSx0ZXh0Q29udGVudCkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmh0bWxGb3IgPSBmb3JBdHRyaWJ1dGU7XG5sYWJlbC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuXG5yZXR1cm4gbGFiZWw7XG59XG5mdW5jdGlvbiBjcmVhdGVJbnB1dChpZEF0dHJpYnV0ZSx0eXBlQXR0cmlidXRlKXtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuaW5wdXQuaWQgPSBpZEF0dHJpYnV0ZTtcbmlucHV0LnR5cCA9IHR5cGVBdHRyaWJ1dGU7XG5cbnJldHVybiBpbnB1dDsgXG59XG5cbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgb3BlbiBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gb3BlbkNyZWF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBvcGVuVXBkYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRpYWxvZycpXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgcmV0dXJuIGRpYWxvZztcbn1cbmZ1bmN0aW9uIGNsb3NlQ3JlYXRlRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGlhbG9nJylcbiAgICBkaWFsb2cuY2xvc2UoKVxufVxuZnVuY3Rpb24gY2xvc2VVcGRhdGVEaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kaWFsb2cnKVxuICAgIFxuICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKVxuICAgIHVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKVxuICAgIGRpYWxvZy5jbG9zZSgpXG59XG5mdW5jdGlvbiBvcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZycpXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgcmV0dXJuIGRpYWxvZztcbn1cbmZ1bmN0aW9uIGNsb3NlQ3JlYXRlUHJvamVjdERpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLXByb2plY3QtZGlhbG9nJylcbiAgICBkaWFsb2cuY2xvc2UoKVxufVxuXG4vLyBmdW5jdGlvbiB0byByZW1vdmUgdGFzayBpdGVtcyBmcm9tIGNvbnRhaW5lclxuZnVuY3Rpb24gcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpIHtcbmNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrLWl0ZW1zLWNvbnRhaW5lcicpXG5cbmZvciAobGV0IGkgPSBjb250YWluZXIuY2hpbGRyZW4ubGVuZ3RoIC0xOyBpID49IDA7IGktLSkge1xuY29uc3QgY2hpbGQgPSBjb250YWluZXIuY2hpbGRyZW5baV07XG5jb250YWluZXIucmVtb3ZlQ2hpbGQoY2hpbGQpXG5cbn1cbn1cbi8vIGZ1bmN0aW9uIHRvIHVwZGF0ZSB0aGUgdGFza3MgY29udGFpbmVyIGVsZW1lbnRzXG5mdW5jdGlvbiB1cGRhdGVUYXNrc0NvbnRhaW5lcihhcnJheU5hbWUpIHtcblxuY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZpbHRlcicpXG5jb25zdCBzZWxlY3RlZFZhbHVlID0gc2VsZWN0RWxlbWVudC52YWx1ZTtcblxuaWYgKHNlbGVjdGVkVmFsdWUgPT09ICdkZWZhdWx0JyB8fCBzZWxlY3RlZFZhbHVlID09PSAnYWxsLXRhc2tzJykge1xuY29uc3QgdXBkYXRlID0gb3V0cHV0LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tJdGVtKGFycmF5TmFtZSkpXG5yZXR1cm4gdXBkYXRlO1xufVxuZWxzZSB7XG4gICAgY29uc3QgZmlsdGVyZWRBcnJheSA9IGFycmF5TmFtZS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHNlbGVjdGVkVmFsdWUpO1xuICAgIGNvbnN0IHVwZGF0ZSA9IG91dHB1dC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrSXRlbShmaWx0ZXJlZEFycmF5KSk7XG4gICAgcmV0dXJuIHVwZGF0ZTtcbn1cbn1cblxuXG4vLyBwcm9qZWN0IGZpbHRlciBzZWxlY3QgZG9tIGVsZW1lbnRcbmZ1bmN0aW9uIGNyZWF0ZVByb2plY3RGaWx0ZXJTZWxlY3QoKSB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuY29udGFpbmVyLmlkID0gJ3Byb2plY3QtZmlsdGVyLWNvbnRhaW5lcidcblxuY29uc3QgZmlsdGVyV3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZmlsdGVyV3JhcHBlci5pZCA9ICdmaWx0ZXItd3JhcHBlcidcblxuY29uc3QgbGFiZWwyID0gY3JlYXRlTGFiZWwoJ3Byb2plY3QtZmlsdGVyJywnRmlsdGVyJyk7XG5jb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG5pbnB1dDIuaWQgPSAncHJvamVjdC1maWx0ZXInO1xuXG5jb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24xLnZhbHVlID0gJ2RlZmF1bHQnXG5vcHRpb24xLnRleHQgPSAnLS0gU2VsZWN0IFByb2plY3QgLS0nO1xuXG5jb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24yLnZhbHVlID0gJ2FsbC10YXNrcydcbm9wdGlvbjIudGV4dCA9ICdBbGwgVGFza3MnO1xuXG5jb250YWluZXIuYXBwZW5kQ2hpbGQoZmlsdGVyV3JhcHBlcilcbmZpbHRlcldyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwyKVxuZmlsdGVyV3JhcHBlci5hcHBlbmRDaGlsZChpbnB1dDIpXG5pbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMSlcbmlucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24yKVxuXG5yZXR1cm4gY29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGUgbWV0aG9kIHRoYXQgY3JlYXRzIGR1IGRhdGUgbGFiZWwgYW5kIGlucHV0XG5mdW5jdGlvbiBjcmVhdGVEYXRlVGltZUlucHV0KGlkQXR0cmlidXRlKSB7XG4gICAgY29uc3QgZGF0ZVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkYXRlV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdmb3JtLXdyYXBwZXJzJyk7XG5cbiAgICBjb25zdCBsYWJlbCA9IGNyZWF0ZUxhYmVsKGlkQXR0cmlidXRlLCAnRGF0ZScpO1xuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC5pZCA9IGlkQXR0cmlidXRlO1xuICAgIGlucHV0LnR5cGUgPSAnZGF0ZSc7XG5cbiAgICBkYXRlV3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXG4gICAgcmV0dXJuIGRhdGVXcmFwcGVyO1xufVxuXG5cblxuZXhwb3J0IHtcbiAgICBzdGFydEJ0bkV2ZW50SGFuZGxlcixcbnRhc2tJdGVtc0NvbnRhaW5lcixcbmNyZWF0ZVRhc2tJdGVtLFxuc3RhcnRTdG9wQnV0dG9uLFxuY3JlYXRlRm9ybURpYWxvZyxcbnVwZGF0ZUZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlRm9ybURpYWxvZyxcbm9wZW5VcGRhdGVGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVEaWFsb2csXG5jbG9zZVVwZGF0ZURpYWxvZyxcblxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcixcbnVwZGF0ZVRhc2tzQ29udGFpbmVyLFxuY3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5jbG9zZUNyZWF0ZVByb2plY3REaWFsb2csXG5jcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0LFxuXG59XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEdvb2dsZSBDaHJvbWUgYXMgb2YgNjcuMC4zMzk2Ljg3IGludHJvZHVjZWQgdGltZXpvbmVzIHdpdGggb2Zmc2V0IHRoYXQgaW5jbHVkZXMgc2Vjb25kcy5cbiAqIFRoZXkgdXN1YWxseSBhcHBlYXIgZm9yIGRhdGVzIHRoYXQgZGVub3RlIHRpbWUgYmVmb3JlIHRoZSB0aW1lem9uZXMgd2VyZSBpbnRyb2R1Y2VkXG4gKiAoZS5nLiBmb3IgJ0V1cm9wZS9QcmFndWUnIHRpbWV6b25lIHRoZSBvZmZzZXQgaXMgR01UKzAwOjU3OjQ0IGJlZm9yZSAxIE9jdG9iZXIgMTg5MVxuICogYW5kIEdNVCswMTowMDowMCBhZnRlciB0aGF0IGRhdGUpXG4gKlxuICogRGF0ZSNnZXRUaW1lem9uZU9mZnNldCByZXR1cm5zIHRoZSBvZmZzZXQgaW4gbWludXRlcyBhbmQgd291bGQgcmV0dXJuIDU3IGZvciB0aGUgZXhhbXBsZSBhYm92ZSxcbiAqIHdoaWNoIHdvdWxkIGxlYWQgdG8gaW5jb3JyZWN0IGNhbGN1bGF0aW9ucy5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIHJldHVybnMgdGhlIHRpbWV6b25lIG9mZnNldCBpbiBtaWxsaXNlY29uZHMgdGhhdCB0YWtlcyBzZWNvbmRzIGluIGFjY291bnQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIGNvbnN0IHV0Y0RhdGUgPSBuZXcgRGF0ZShcbiAgICBEYXRlLlVUQyhcbiAgICAgIF9kYXRlLmdldEZ1bGxZZWFyKCksXG4gICAgICBfZGF0ZS5nZXRNb250aCgpLFxuICAgICAgX2RhdGUuZ2V0RGF0ZSgpLFxuICAgICAgX2RhdGUuZ2V0SG91cnMoKSxcbiAgICAgIF9kYXRlLmdldE1pbnV0ZXMoKSxcbiAgICAgIF9kYXRlLmdldFNlY29uZHMoKSxcbiAgICAgIF9kYXRlLmdldE1pbGxpc2Vjb25kcygpLFxuICAgICksXG4gICk7XG4gIHV0Y0RhdGUuc2V0VVRDRnVsbFllYXIoX2RhdGUuZ2V0RnVsbFllYXIoKSk7XG4gIHJldHVybiArZGF0ZSAtICt1dGNEYXRlO1xufVxuIiwiLyoqXG4gKiBAbW9kdWxlIGNvbnN0YW50c1xuICogQHN1bW1hcnkgVXNlZnVsIGNvbnN0YW50c1xuICogQGRlc2NyaXB0aW9uXG4gKiBDb2xsZWN0aW9uIG9mIHVzZWZ1bCBkYXRlIGNvbnN0YW50cy5cbiAqXG4gKiBUaGUgY29uc3RhbnRzIGNvdWxkIGJlIGltcG9ydGVkIGZyb20gYGRhdGUtZm5zL2NvbnN0YW50c2A6XG4gKlxuICogYGBgdHNcbiAqIGltcG9ydCB7IG1heFRpbWUsIG1pblRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogZnVuY3Rpb24gaXNBbGxvd2VkVGltZSh0aW1lKSB7XG4gKiAgIHJldHVybiB0aW1lIDw9IG1heFRpbWUgJiYgdGltZSA+PSBtaW5UaW1lO1xuICogfVxuICogYGBgXG4gKi9cblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIGRheXNJbldlZWtcbiAqIEBzdW1tYXJ5IERheXMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3QgZGF5c0luV2VlayA9IDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5ZZWFyXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgeWVhci5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEhvdyBtYW55IGRheXMgaW4gYSB5ZWFyLlxuICpcbiAqIE9uZSB5ZWFycyBlcXVhbHMgMzY1LjI0MjUgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGZvcm11bGE6XG4gKlxuICogPiBMZWFwIHllYXIgb2NjdXJlcyBldmVyeSA0IHllYXJzLCBleGNlcHQgZm9yIHllYXJzIHRoYXQgYXJlIGRpdmlzYWJsZSBieSAxMDAgYW5kIG5vdCBkaXZpc2FibGUgYnkgNDAwLlxuICogPiAxIG1lYW4geWVhciA9ICgzNjUrMS80LTEvMTAwKzEvNDAwKSBkYXlzID0gMzY1LjI0MjUgZGF5c1xuICovXG5leHBvcnQgY29uc3QgZGF5c0luWWVhciA9IDM2NS4yNDI1O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWF4VGltZVxuICogQHN1bW1hcnkgTWF4aW11bSBhbGxvd2VkIHRpbWUuXG4gKlxuICogQGV4YW1wbGVcbiAqIGltcG9ydCB7IG1heFRpbWUgfSBmcm9tIFwiLi9jb25zdGFudHMvZGF0ZS1mbnMvY29uc3RhbnRzXCI7XG4gKlxuICogY29uc3QgaXNWYWxpZCA9IDg2NDAwMDAwMDAwMDAwMDEgPD0gbWF4VGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSg4NjQwMDAwMDAwMDAwMDAxKTtcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtYXhUaW1lID0gTWF0aC5wb3coMTAsIDgpICogMjQgKiA2MCAqIDYwICogMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pblRpbWVcbiAqIEBzdW1tYXJ5IE1pbmltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSAtODY0MDAwMDAwMDAwMDAwMSA+PSBtaW5UaW1lO1xuICogLy89PiBmYWxzZVxuICpcbiAqIG5ldyBEYXRlKC04NjQwMDAwMDAwMDAwMDAxKVxuICogLy89PiBJbnZhbGlkIERhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pblRpbWUgPSAtbWF4VGltZTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luV2VlayA9IDYwNDgwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBkYXkuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbkRheSA9IDg2NDAwMDAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWlsbGlzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIG1pbnV0ZVxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5NaW51dGUgPSA2MDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgaG91clxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5Ib3VyID0gMzYwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luU2Vjb25kXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBzZWNvbmRcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luU2Vjb25kID0gMTAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJblllYXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luWWVhciA9IDUyNTYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbk1vbnRoXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgbW9udGguXG4gKi9cbmV4cG9ydCBjb25zdCBtaW51dGVzSW5Nb250aCA9IDQzMjAwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbWludXRlc0luRGF5XG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luRGF5ID0gMTQ0MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbnV0ZXMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luSG91ciA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgbW9udGhzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBNb250aHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3QgbW9udGhzSW5RdWFydGVyID0gMztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luWWVhclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luWWVhciA9IDEyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgcXVhcnRlcnNJblllYXJcbiAqIEBzdW1tYXJ5IFF1YXJ0ZXJzIGluIDEgeWVhclxuICovXG5leHBvcnQgY29uc3QgcXVhcnRlcnNJblllYXIgPSA0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luSG91clxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGhvdXIuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Ib3VyID0gMzYwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbk1pbnV0ZVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1pbnV0ZS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbk1pbnV0ZSA9IDYwO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luRGF5XG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luRGF5ID0gc2Vjb25kc0luSG91ciAqIDI0O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luV2Vla1xuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5XZWVrID0gc2Vjb25kc0luRGF5ICogNztcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblllYXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB5ZWFyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luWWVhciA9IHNlY29uZHNJbkRheSAqIGRheXNJblllYXI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5Nb250aFxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIG1vbnRoXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5Nb250aCA9IHNlY29uZHNJblllYXIgLyAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJblF1YXJ0ZXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBxdWFydGVyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luUXVhcnRlciA9IHNlY29uZHNJbk1vbnRoICogMztcbiIsImltcG9ydCB7IG1pbGxpc2Vjb25kc0luRGF5IH0gZnJvbSBcIi4vY29uc3RhbnRzLm1qc1wiO1xuaW1wb3J0IHsgc3RhcnRPZkRheSB9IGZyb20gXCIuL3N0YXJ0T2ZEYXkubWpzXCI7XG5pbXBvcnQgeyBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzIH0gZnJvbSBcIi4vX2xpYi9nZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5c1xuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy4gVGhpcyBtZWFucyB0aGF0IHRoZSB0aW1lcyBhcmUgcmVtb3ZlZFxuICogZnJvbSB0aGUgZGF0ZXMgYW5kIHRoZW4gdGhlIGRpZmZlcmVuY2UgaW4gZGF5cyBpcyBjYWxjdWxhdGVkLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTIsIDYsIDIsIDAsIDApLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgMClcbiAqIClcbiAqIC8vPT4gMzY2XG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlMZWZ0ID0gc3RhcnRPZkRheShkYXRlTGVmdCk7XG4gIGNvbnN0IHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCB0aW1lc3RhbXBMZWZ0ID1cbiAgICArc3RhcnRPZkRheUxlZnQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlMZWZ0KTtcbiAgY29uc3QgdGltZXN0YW1wUmlnaHQgPVxuICAgICtzdGFydE9mRGF5UmlnaHQgLSBnZXRUaW1lem9uZU9mZnNldEluTWlsbGlzZWNvbmRzKHN0YXJ0T2ZEYXlSaWdodCk7XG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXIgYmVjYXVzZSB0aGUgbnVtYmVyIG9mXG4gIC8vIG1pbGxpc2Vjb25kcyBpbiBhIGRheSBpcyBub3QgY29uc3RhbnQgKGUuZy4gaXQncyBkaWZmZXJlbnQgaW4gdGhlIHdlZWsgb2ZcbiAgLy8gdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KS5cbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBtaWxsaXNlY29uZHNJbkRheSk7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzO1xuIiwiaW1wb3J0IHsgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzIH0gZnJvbSBcIi4vZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzLm1qc1wiO1xuaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIGRpZmZlcmVuY2VJbkRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXkgcGVyaW9kcyBiZXR3ZWVuIHR3byBkYXRlcy4gRnJhY3Rpb25hbCBkYXlzIGFyZVxuICogdHJ1bmNhdGVkIHRvd2FyZHMgemVyby5cbiAqXG4gKiBPbmUgXCJmdWxsIGRheVwiIGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGEgbG9jYWwgdGltZSBpbiBvbmUgZGF5IHRvIHRoZSBzYW1lXG4gKiBsb2NhbCB0aW1lIG9uIHRoZSBuZXh0IG9yIHByZXZpb3VzIGRheS4gQSBmdWxsIGRheSBjYW4gc29tZXRpbWVzIGJlIGxlc3MgdGhhblxuICogb3IgbW9yZSB0aGFuIDI0IGhvdXJzIGlmIGEgZGF5bGlnaHQgc2F2aW5ncyBjaGFuZ2UgaGFwcGVucyBiZXR3ZWVuIHR3byBkYXRlcy5cbiAqXG4gKiBUbyBpZ25vcmUgRFNUIGFuZCBvbmx5IG1lYXN1cmUgZXhhY3QgMjQtaG91ciBwZXJpb2RzLCB1c2UgdGhpcyBpbnN0ZWFkOlxuICogYE1hdGgudHJ1bmMoZGlmZmVyZW5jZUluSG91cnMoZGF0ZUxlZnQsIGRhdGVSaWdodCkvMjQpfDBgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBkYXRlTGVmdCAtIFRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0gZGF0ZVJpZ2h0IC0gVGhlIGVhcmxpZXIgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGFjY29yZGluZyB0byB0aGUgbG9jYWwgdGltZXpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIGRheXMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDExIDIzOjU5OjAwIGFuZCAzIEp1bHkgMjAxMSAwMDowMTowMD9cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDMsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAyLCAyMywgNTkpXG4gKiApXG4gKiAvLz0+IDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAxIE1hcmNoIDIwMjAgMDowMCBhbmQgMSBKdW5lIDIwMjAgMDowMCA/XG4gKiAvLyBOb3RlOiBiZWNhdXNlIGxvY2FsIHRpbWUgaXMgdXNlZCwgdGhlXG4gKiAvLyByZXN1bHQgd2lsbCBhbHdheXMgYmUgOTIgZGF5cywgZXZlbiBpblxuICogLy8gdGltZSB6b25lcyB3aGVyZSBEU1Qgc3RhcnRzIGFuZCB0aGVcbiAqIC8vIHBlcmlvZCBoYXMgb25seSA5MioyNC0xIGhvdXJzLlxuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAyMCwgNSwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDIsIDEpXG4gKiApXG4gKiAvLz0+IDkyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5EYXlzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgX2RhdGVMZWZ0ID0gdG9EYXRlKGRhdGVMZWZ0KTtcbiAgY29uc3QgX2RhdGVSaWdodCA9IHRvRGF0ZShkYXRlUmlnaHQpO1xuXG4gIGNvbnN0IHNpZ24gPSBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KTtcbiAgY29uc3QgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhfZGF0ZUxlZnQsIF9kYXRlUmlnaHQpKTtcblxuICBfZGF0ZUxlZnQuc2V0RGF0ZShfZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpO1xuXG4gIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCBkYXlzIC0gZGlmZiBpbiBjYWxlbmRhciBkYXlzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIGRheSBpcyBub3QgZnVsbFxuICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcbiAgY29uc3QgaXNMYXN0RGF5Tm90RnVsbCA9IE51bWJlcihcbiAgICBjb21wYXJlTG9jYWxBc2MoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSA9PT0gLXNpZ24sXG4gICk7XG4gIGNvbnN0IHJlc3VsdCA9IHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdERheU5vdEZ1bGwpO1xuICAvLyBQcmV2ZW50IG5lZ2F0aXZlIHplcm9cbiAgcmV0dXJuIHJlc3VsdCA9PT0gMCA/IDAgOiByZXN1bHQ7XG59XG5cbi8vIExpa2UgYGNvbXBhcmVBc2NgIGJ1dCB1c2VzIGxvY2FsIHRpbWUgbm90IFVUQywgd2hpY2ggaXMgbmVlZGVkXG4vLyBmb3IgYWNjdXJhdGUgZXF1YWxpdHkgY29tcGFyaXNvbnMgb2YgVVRDIHRpbWVzdGFtcHMgdGhhdCBlbmQgdXBcbi8vIGhhdmluZyB0aGUgc2FtZSByZXByZXNlbnRhdGlvbiBpbiBsb2NhbCB0aW1lLCBlLmcuIG9uZSBob3VyIGJlZm9yZVxuLy8gRFNUIGVuZHMgdnMuIHRoZSBpbnN0YW50IHRoYXQgRFNUIGVuZHMuXG5mdW5jdGlvbiBjb21wYXJlTG9jYWxBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBkaWZmID1cbiAgICBkYXRlTGVmdC5nZXRGdWxsWWVhcigpIC0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNb250aCgpIC0gZGF0ZVJpZ2h0LmdldE1vbnRoKCkgfHxcbiAgICBkYXRlTGVmdC5nZXREYXRlKCkgLSBkYXRlUmlnaHQuZ2V0RGF0ZSgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0SG91cnMoKSAtIGRhdGVSaWdodC5nZXRIb3VycygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWludXRlcygpIC0gZGF0ZVJpZ2h0LmdldE1pbnV0ZXMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldFNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRTZWNvbmRzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRNaWxsaXNlY29uZHMoKSAtIGRhdGVSaWdodC5nZXRNaWxsaXNlY29uZHMoKTtcblxuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkRheXM7XG4iLCJpbXBvcnQgeyB0b0RhdGUgfSBmcm9tIFwiLi90b0RhdGUubWpzXCI7XG5cbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZSAtIFRoZSBvcmlnaW5hbCBkYXRlXG4gKlxuICogQHJldHVybnMgVGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZEYXkobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzdGFydE9mRGF5KGRhdGUpIHtcbiAgY29uc3QgX2RhdGUgPSB0b0RhdGUoZGF0ZSk7XG4gIF9kYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gX2RhdGU7XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgc3RhcnRPZkRheTtcbiIsIi8qKlxuICogQG5hbWUgdG9EYXRlXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhbiBpbnN0YW5jZSBvZiBEYXRlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBpdHMgY2xvbmUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGEgbnVtYmVyLCBpdCBpcyB0cmVhdGVkIGFzIGEgdGltZXN0YW1wLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBub25lIG9mIHRoZSBhYm92ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgSW52YWxpZCBEYXRlLlxuICpcbiAqICoqTm90ZSoqOiAqYWxsKiBEYXRlIGFyZ3VtZW50cyBwYXNzZWQgdG8gYW55ICpkYXRlLWZucyogZnVuY3Rpb24gaXMgcHJvY2Vzc2VkIGJ5IGB0b0RhdGVgLlxuICpcbiAqIEB0eXBlUGFyYW0gRGF0ZVR5cGUgLSBUaGUgYERhdGVgIHR5cGUsIHRoZSBmdW5jdGlvbiBvcGVyYXRlcyBvbi4gR2V0cyBpbmZlcnJlZCBmcm9tIHBhc3NlZCBhcmd1bWVudHMuIEFsbG93cyB0byB1c2UgZXh0ZW5zaW9ucyBsaWtlIFtgVVRDRGF0ZWBdKGh0dHBzOi8vZ2l0aHViLmNvbS9kYXRlLWZucy91dGMpLlxuICpcbiAqIEBwYXJhbSBhcmd1bWVudCAtIFRoZSB2YWx1ZSB0byBjb252ZXJ0XG4gKlxuICogQHJldHVybnMgVGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b0RhdGUoYXJndW1lbnQpIHtcbiAgY29uc3QgYXJnU3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50KTtcblxuICAvLyBDbG9uZSB0aGUgZGF0ZVxuICBpZiAoXG4gICAgYXJndW1lbnQgaW5zdGFuY2VvZiBEYXRlIHx8XG4gICAgKHR5cGVvZiBhcmd1bWVudCA9PT0gXCJvYmplY3RcIiAmJiBhcmdTdHIgPT09IFwiW29iamVjdCBEYXRlXVwiKVxuICApIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IGFyZ3VtZW50LmNvbnN0cnVjdG9yKCthcmd1bWVudCk7XG4gIH0gZWxzZSBpZiAoXG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcIm51bWJlclwiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgTnVtYmVyXVwiIHx8XG4gICAgdHlwZW9mIGFyZ3VtZW50ID09PSBcInN0cmluZ1wiIHx8XG4gICAgYXJnU3RyID09PSBcIltvYmplY3QgU3RyaW5nXVwiXG4gICkge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShhcmd1bWVudCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gVE9ETzogQ2FuIHdlIGdldCByaWQgb2YgYXM/XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCB0b0RhdGU7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQge1xuZm9ybWF0LCBkaWZmZXJlbmNlSW5EYXlzXG59IGZyb20gJ2RhdGUtZm5zJ1xuXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IHtcbiAgICBzdGFydEJ0bkV2ZW50SGFuZGxlcixcbiAgICB0YXNrSXRlbXNDb250YWluZXIsXG5jcmVhdGVUYXNrSXRlbSxcbnN0YXJ0U3RvcEJ1dHRvbixcbmNyZWF0ZUZvcm1EaWFsb2csXG5vcGVuRm9ybURpYWxvZyxcblxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcixcbnVwZGF0ZVRhc2tFbGVtZW50cyxcbnVwZGF0ZVRhc2tzQ29udGFpbmVyLFxuY2xvc2VEaWFsb2csXG51cGRhdGVGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVEaWFsb2csXG5jbG9zZVVwZGF0ZURpYWxvZyxcbm9wZW5VcGRhdGVGb3JtRGlhbG9nLFxuY3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5vcGVuQ3JlYXRlUHJvamVjdEZvcm1EaWFsb2csXG5jbG9zZUNyZWF0ZVByb2plY3REaWFsb2csXG5jcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0LFxuXG59IGZyb20gJy4vdXNlci1pbnRlcmZhY2UnXG5cbi8vIGltcG9ydCBvYmplY3QgcmVsYXRlZCBtb2R1bGVzXG5pbXBvcnQge1xuY3JlYXRlVGFza09iamVjdCxcbiAgICBhZGRUYXNrVG9BbkFycmF5LFxuICAgIGNyZWF0ZUFycmF5RmFjdG9yeSxcbiAgICBkb3duU2hpZnRJZFRvQXJyYXlJbmRleCxcbiAgICBcbn0gZnJvbSAnLi90YXNrLW9iamVjdC1jb21wb25lbnQnXG5cbi8vIGFsbCBkb20gcmVsYXRlZCBmdW5jdGlvbnMgZ28gaGVyZVxuLy8gYXBwZW5kIHRhc2sgaXRlbXMgY29udGFpbmVyIHRvIG91dHB1dFxuY29uc3QgYm9keSA9IGRvY3VtZW50LmJvZHk7XG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0JylcblxuLy8gYXBwZW5kIHByb2plY3QgZmlsdGVyIGZlYXR1cmUgdG8gZG9tXG5vdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCgpKVxuXG5vdXRwdXQuYXBwZW5kQ2hpbGQodGFza0l0ZW1zQ29udGFpbmVyKCkpXG5cblxuXG4vLyBhcHBlbmQgc3RhcnQgc3RvcCBidXR0b24gdG8gYm9keSBcbm91dHB1dC5hcHBlbmRDaGlsZChzdGFydFN0b3BCdXR0b24oKSlcblxuXG4vLyBhcHBlbmQgZm9ybSB0byBodG1sXG5ib2R5Lmluc2VydEJlZm9yZShjcmVhdGVGb3JtRGlhbG9nKCksIG91dHB1dClcbmJvZHkuaW5zZXJ0QmVmb3JlKHVwZGF0ZUZvcm1EaWFsb2coKSwgb3V0cHV0KVxuYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSwgb3V0cHV0KVxuLy8gYm9keS5hcHBlbmRDaGlsZCgoKSlcbi8vIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSlcblxuXG5cblxuLy8gc3RhcnQgYnRuIGV2ZW50IGhhbmRsZXJcbnN0YXJ0QnRuRXZlbnRIYW5kbGVyKClcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG4vLyBldmVudCBoYW5kbGVyIGZvciBpbml0aWF0aW5nIHVwZGF0aW5nIHRhc2sgZWxlbWVudHNcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxuXG5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudGFzay1pdGVtJykpIHtcbi8vIGNvbnN0IHNoaWZ0ZWRJbmRleCA9IGRvd25TaGlmdElkVG9BcnJheUluZGV4KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbmNvbnN0IGRvbVRhc2tJZCA9ICtldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuXG5jb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbmNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4vLyBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtzaGlmdGVkSW5kZXhdO1xuY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXkuZmluZChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpXG5cbi8vIHNldCB0aGUgY3VycmVudCB0YXNrIG9iamVjdCBpbmRleCB2YWx1ZSB0byBsb2NhbCBzdG9yYWdlXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFRhc2snLCBkb21UYXNrSWQpXG5cbi8vIHJldHJpZXZlIGxvY2FsIHN0b3JhZ2UgdmFsdWVzIHRvIHBvcHVsYXRlIGRvbSBlbGVtZW50cyBcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuZGVzY3JpcHRpb24udmFsdWUgPSBzZWxlY3RlZE9iamVjdC5kZXNjcmlwdGlvblxuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHJvamVjdCcpO1xucHJvamVjdC52YWx1ZSA9IHNlbGVjdGVkT2JqZWN0LnByb2plY3Q7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kYXRlJyk7XG5kYXRlLnZhbHVlID0gc2VsZWN0ZWRPYmplY3QuZHVlRGF0ZTtcblxub3BlblVwZGF0ZUZvcm1EaWFsb2coKVxuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudGFzay1jb21wb25lbnQnKSAmJlxuICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ0NvbXBsZXRlZCcpIHtcblxuICAgICAgICAvLyBjb25zdCBzaGlmdGVkSW5kZXggPSBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbVRhc2tJZCA9ICtldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXkuZmluZChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpO1xuICAgICAgICBcbnNlbGVjdGVkT2JqZWN0LmlzQ29tcGxldGUgPSBmYWxzZTtcbi8vIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9ICdmYWxzZSdcblxuLy8gVXBkYXRlIHRoZSBkYXRhQXJyYXkgd2l0aCB0aGUgbW9kaWZpZWQgc2VsZWN0ZWRPYmplY3Rcbi8vIGRhdGFBcnJheVtdID0gc2VsZWN0ZWRPYmplY3Q7XG5sZXQgaW5kZXggPSBkYXRhQXJyYXkuZmluZEluZGV4KG9iaiA9PiBvYmouaWQgPT09IGRvbVRhc2tJZCkgXG5kYXRhQXJyYXlbaW5kZXhdID0gc2VsZWN0ZWRPYmplY3Q7XG5cbi8vIFN0cmluZ2lmeSB0aGUgZGF0YUFycmF5IGFuZCBzdG9yZSBpdCBiYWNrIGludG8gbG9jYWxTdG9yYWdlXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVGFza3MnLCBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpKTtcblxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xudXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG4gICAgfSBcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50YXNrLWNvbXBvbmVudCcpICYmXG4gICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID09PSAnTWFyayBDb21wbGV0ZScpIHtcbiAgICAgICAgY29uc3Qgc2hpZnRlZEluZGV4ID0gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICBjb25zdCBkb21UYXNrSWQgPSArZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcbmNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5LmZpbmQob2JqID0+IG9iai5pZCA9PT0gZG9tVGFza0lkKVxuXG5cbnNlbGVjdGVkT2JqZWN0LmlzQ29tcGxldGUgPSB0cnVlO1xuLy8gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gJ3RydWUnXG5cbi8vIFVwZGF0ZSB0aGUgZGF0YUFycmF5IHdpdGggdGhlIG1vZGlmaWVkIHNlbGVjdGVkT2JqZWN0XG4vLyBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XSA9IHNlbGVjdGVkT2JqZWN0O1xubGV0IGluZGV4ID0gZGF0YUFycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpIFxuZGF0YUFycmF5W2luZGV4XSA9IHNlbGVjdGVkT2JqZWN0O1xuXG4vLyBTdHJpbmdpZnkgdGhlIGRhdGFBcnJheSBhbmQgc3RvcmUgaXQgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG5cbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKTtcblxuXG4gICAgfVxufSlcbn1cbnVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKClcblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCBvYmplY3QgdG8gbG9jYWwgc3RvcmFnZSBhcnJheVxuZnVuY3Rpb24gYWRkT2JqZWN0VG9Mb2NhbFN0b3JhZ2VBcnJheShrZXksIG9iamVjdCkge1xuICAgIC8vIGNoZWNrcyBpZiBrZXkgZXhpc3RzIGluIHN0b3JhZ2Ugb3IgY3JlYXRlcyBvbmUgd2l0aCBlbXB0eSBhcnJheVxuICAgIC8vIGFuZCBzdG9yZXMgaXQgaW4gYSB2YXJpYWJsZVxuY29uc3QgZXhpc3RpbmdBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgW107XG4vLyBwdXNoIHRoZSBvYmplY3QgdG8gYW4gYXJyYXkgaW4gc3RvcmFnZVxuZXhpc3RpbmdBcnJheS5wdXNoKG9iamVjdCk7XG4vLyBzZXQgdGhlIGFycmF5IHdpdGggbmV3IG9iamVjdCBpbiBrZXkgb2Ygc3RvcmFnZSBcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdBcnJheSkpXG5cbn1cblxuLy8gZnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gc3VibWl0XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBkb21cbiAgICAgICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0MS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGF0ZScpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGlucHV0My52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgZGF5c0xlZnQgPSBkYXlzTGVmdFVudGlsRHVlRGF0ZShkYXRlKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBvYmplY3RcbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdCwgZGF0ZSlcbiAgICAgICAgdGFzay5kYXlzTGVmdCA9IGRheXNMZWZ0O1xuXG4gICAgICAgIC8vIGFkZFRhc2tUb0FuQXJyYXkodGFzayxhbGxUYXNrc0FycmF5KVxuICAgICAgICAvLyBhbGxUYXNrc0FycmF5LmFkZEl0ZW0odGFzaylcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzQXJyYXknLCBKU09OLnN0cmluZ2lmeSh0YXNrKSlcbmFkZE9iamVjdFRvTG9jYWxTdG9yYWdlQXJyYXkoJ2FsbFRhc2tzJywgdGFzaylcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG5cbiAgICAgICAgLy8gdXBkYXRlIGRvbSB3aXRoIG5ldyB0YXNrXG4gICAgICAgICAgICAvLyB1cGRhdGVUYXNrc0NvbnRhaW5lcihhbGxUYXNrc0FycmF5LmdldEFycmF5KCkpXG4gICAgICAgICAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrcykpXG4gICAgICAgIFxuICAgICAgICAgICAgLy8gcmVzZXQgZm9ybSBpbnB1dHNcbiAgICAgICAgaW5wdXQxLnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0Mi52YWx1ZSA9ICcnOyAgICAgICAgXG5cbiAgICAgICAgY2xvc2VDcmVhdGVEaWFsb2coKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgICAgLy8gZXZlbnQgaGFuZGxlciBmb3Igc3VibWl0IHVwZGF0ZVxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlRm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXQxLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBpbnB1dDIudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGlucHV0My52YWx1ZTtcbmNvbnN0IGRheXNMZWZ0ID0gZGF5c0xlZnRVbnRpbER1ZURhdGUoZGF0ZSlcbi8vIGdldCBpZCBvZiBjdXJyZW50IHRhc2tcbmNvbnN0IGN1cnJlbnRUYXNrSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFRhc2snKVxuXG4vLyB1cGRhdGUgdGhlIHRhc2sgb2JqZWN0IGluIGxvY2FsIHNzdG9yYWdlXG4gICAgICAgIFxuICAgICAgICAvLyBnZXQgdGhlIGFsbCB0YXNrcyBhcnJheSBzdG9yaW5nIHRhc2sgb2JqZWN0c1xuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgLy8gY29udmVydCBzdHJpbmdlZCBhcnJheSB0byBub3JtYWwgYXJyYXlcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBjb3JyZWxhdGVkIHRhc2sgb2JqZWN0XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W2N1cnJlbnRUYXNrXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXkuZmluZChvYmogPT4gb2JqLmlkID09PSArY3VycmVudFRhc2tJZClcblxuICAgICAgICAvLyBzZXQgaW5wdXQgdmFsdWVzIHRvIGxvY2FsIHN0b3JhZ2VcbiBzZWxlY3RlZE9iamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuIHNlbGVjdGVkT2JqZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHNlbGVjdGVkT2JqZWN0LmR1ZURhdGUgPSBkYXRlO1xuICAgIHNlbGVjdGVkT2JqZWN0LmRheXNMZWZ0ID0gZGF5c0xlZnQ7XG5cbiAgICBcbi8vIGNvbnZlcnQgYXJyYXkgYmFjayBpbnRvIHN0cmluZ1xuY29uc3QgdXBkYXRlZEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KVxuXG4vLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuXG5jb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdCk7XG5jb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG5cblxuICAgICAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQxLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBpbnB1dDIudmFsdWUgPSAnJzsgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgY2xvc2VVcGRhdGVEaWFsb2coKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuLy8gYXR0YXRjaCBldmVudCBsaXN0ZW5lciBhbmQgaGFuZGxlciB0byBjcmVhdGUgYW5kIHVwZGF0ZSBmb3JtIHN1Ym1pdCAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWZvcm0nKTtcbiAgICBjcmVhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQ3JlYXRlRm9ybVN1Ym1pdCkgICAgXG4gICAgY29uc3QgdXBkYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZm9ybScpO1xudXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVVwZGF0ZUZvcm1TdWJtaXQpXG4gICAgXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSBmb3JtIGRpYWxvZyB3aXRoIGNsaWNrZWQgdGFza1xuZnVuY3Rpb24gcG9wdWxhdGVGb3JtSW5wdXRzKGFycmF5SW5kZXgpIHtcbmxldCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRlc2NyaXB0aW9uJyk7XG5pbnB1dDEudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUYXNrcylbYXJyYXlJbmRleF0uZGVzY3JpcHRpb247XG5cbmxldCBpbnB1dDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXByb2plY3QnKTtcbmlucHV0Mi52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbFRhc2tzKVthcnJheUluZGV4XS5wcm9qZWN0O1xuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUYXNrc1thcnJheUluZGV4XSkpO1xufVxuXG4vLyBldmVudCBoYW5kbGVyIGZvciBjbG9zaW5nIGNyZWF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY2xvc2VDcmVhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNsb3NlJyk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbmNsb3NlQ3JlYXRlRGlhbG9nKCk7XG4gICAgfSlcbn1cbmNsb3NlQ3JlYXRlRm9ybURpYWxvZygpO1xuXG4vLyBldmVudCBoYW5kbGVyIGZvciBjbG9zaW5nIHVwZGF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY2xvc2VVcGRhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IHVwZGF0ZURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGlhbG9nJylcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jbG9zZScpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuY2xvc2VVcGRhdGVEaWFsb2coKTtcbiAgICB9KVxuLy8gcnVsZSBmb3IgZXNjYXBlIGtleSBldmVudCBcbnVwZGF0ZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG5pZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdFc2MnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNsb3NlVXBkYXRlRGlhbG9nKClcbn1cbi8vIGNoZWNrIGlmIGV2ZW50IHRhcmdldCBpcyBjbGljayBvbiBiYWNrZHJvcFxudXBkYXRlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5pZiAoZXZlbnQudGFyZ2V0ID09PSB1cGRhdGVEaWFsb2cpIHtcbmNsb3NlVXBkYXRlRGlhbG9nKClcblxufVxuXG59KVxuXG5cblxuXG59KVxuXG5cblxufVxuY2xvc2VVcGRhdGVGb3JtRGlhbG9nKClcblxuLy8gZXZlbnQgaGFuZGxlciBmb3IgZGVsZXRpbmcgYSB0YXNrIG9iamVjdFxuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZWxldGUnKTtcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRUYXNrJyk7XG4vLyBjb25zdCBkb21UYXNrSWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcbiAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgIC8vIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W2N1cnJlbnRUYXNrXTtcbiAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheS5maW5kKG9iaiA9PiBvYmouaWQgPT09ICtjdXJyZW50VGFzaylcbi8vIHJlbW92ZSBvYmplY3QgZnJvbSBhcnJheVxuZGF0YUFycmF5LnNwbGljZShzZWxlY3RlZE9iamVjdCwxKVxuY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuLy8gY29udmVydCBhcnJheSBiYWNrIGludG8gc3RyaW5nXG5jb25zdCB1cGRhdGVkQXJyYXlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpXG4gICAgICAgXG4vLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuXG4vLyByZW5kZXIgZG9tIHdpdGggdXBkYXRlZCB0YXNrIG9iamVjdHNcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKVxuXG5cbmNsb3NlVXBkYXRlRGlhbG9nKClcblxufSlcblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHN0b3JhZ2UgaXMgYXZhaWxhYmxlIFxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuICAgIGNvbnNvbGUubG9nKCdZaXBwZWUnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXG4gICAgY29uc29sZS5sb2coJ051cHBlZScpO1xuICB9XG4gIFxuICBcbi8vIHNlbGVjdCBvcHRpb24gZm9ybSBkcm9wZG93biBpbXBsZW1lbnRhdGlvbiBcblxuY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpXG5jb25zdCBwcm9qZWN0T3B0aW9ucyA9IFsnSmF2YXNjcmlwdCcsICdQeXRob24nLCAnUnVieSddXG5cbmZ1bmN0aW9uIHNldFByb2plY3RPcHRpb25zKCkge1xucHJvamVjdE9wdGlvbnMuZm9yRWFjaChwcm9qZWN0T3B0aW9uID0+IHtcbmNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxub3B0aW9uRWxlbWVudC52YWx1ZSA9IHByb2plY3RPcHRpb247XG5vcHRpb25FbGVtZW50LnRleHQgPSBwcm9qZWN0T3B0aW9uO1xuXG5zZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG59KTtcbn1cblxuc2VsZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbmNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbmlmIChzZWxlY3RlZEVsZW1lbnQgPT09ICdjcmVhdGUtcHJvamVjdCcpe1xub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKClcblxufVxuXG59KVxuLy8gaGFuZGxlIGNyZWF0ZSBwcm9qZWN0IGZvcm0gc3VibWl0XG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1mb3JtJylcbmNyZWF0ZVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNyZWF0ZS1wcm9qZWN0LW5hbWUnKS52YWx1ZTtcbnByb2plY3RPcHRpb25zLnB1c2gocHJvamVjdE5hbWVJbnB1dClcbi8vIGNhbGwgZnVuY3Rpb24gdG8gdXBkYXRlIHByb2plY3Qgb3B0aW9ucyBcbnNldFByb2plY3RPcHRpb25zKCk7XG5cbmNsb3NlQ3JlYXRlUHJvamVjdERpYWxvZygpXG5cbn0pXG5zZXRQcm9qZWN0T3B0aW9ucygpO1xuXG4vLyBmdW5jdGlvbiB0byBjbGVhciBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBcbn1cbi8vIGNsZWFyTG9jYWxTdG9yYWdlKClcblxuLy8gY2FsbCBvbiBwYWdlIGxvYWQgdG8gZGlzcGxheSB0YXNrcyBpbiBsb2NhbCBzdG9yYWdlXG4vLyB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrc0FycmF5KSlcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKVxuXG4vLyBmdW5jdGlvbiB0byBzdGFydCB0aW1lciB0aGF0IHRha2VzIG9iamVjdCBhcyBhcmd1bWVudFxuZnVuY3Rpb24gc3RhcnRUaW1lcihvYmplY3QpIHtcblxufVxuXG4vLyBldmVudCBsaXN0ZW5lciBhbmQgaGFuZGxlciBmb3IgcHJvamVjdCBmaWx0ZXIgZmVhdHVyZVxuY29uc3QgcHJvamVjdEZpbHRlclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZpbHRlci1jb250YWluZXInKVxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdEZpbHRlclNlbGVjdCgpIHtcbiAgICBcbiAgICAvLyBnZXQgc2VsZWN0IGVsZW1lbnRcbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1maWx0ZXInKVxuLy8gcmVtb3ZlIGNoaWxkcmVuIG9wdGlvbiBlbGVtZW50cyBcbmZvciAobGV0IGkgPSBzZWxlY3RFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCAtMTsgaSA+PSAyOyBpLS0pIHtcbmNvbnN0IGNoaWxkID0gc2VsZWN0RWxlbWVudC5jaGlsZHJlbltpXTtcbnNlbGVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGQpXG5cbn1cblxuLy8gZ2V0IGxvY2FsIHN0b3JhZ2UgYXJyYXkgb2YgdGFzayBvYmplY3RzXG5jb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbi8vIGNvbnZlcnQgc3RyaW5nZWQgYXJyYXkgdG8gbm9ybWFsIGFycmF5XG5jb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuXG5jb25zdCB1bmlxdWVWYWx1ZXMgPSBbXTtcbi8vIGxvb3AgdGhyb3VnaCBhcnJheSBvYmplY3QgaXRlbXMgYW5kIG91dHB1dCB0aGUgcHJvamVjdCB2YWx1ZVxuZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQXJyYXkubGVuZ3RoOyBpKyspIHtcbmxldCBrZXkgPSBkYXRhQXJyYXlbaV0ucHJvamVjdDtcblxuaWYgKCF1bmlxdWVWYWx1ZXMuaW5jbHVkZXMoa2V5KSkge1xuXG5jb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbm9wdGlvbkVsZW1lbnQudmFsdWUgPSBrZXk7XG5vcHRpb25FbGVtZW50LnRleHQgPSBrZXk7XG5cbnNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbnVuaXF1ZVZhbHVlcy5wdXNoKGtleSlcblxufVxuXG59XG5cbn1cbnByb2plY3RGaWx0ZXJTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0RmlsdGVyU2VsZWN0KVxucHJvamVjdEZpbHRlclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbi8vIGdldCB0aGUgdmFsdWUgb2Ygc2VsZWN0ZWQgb3B0aW9uIGVsZW1lbnRcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBldmVudC50YXJnZXQudmFsdWU7XG5cbi8vIGdldCB0aGUgYWxsIHRhc2tzIGFycmF5XG5jb25zdCBhbGxUYXNrc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSlcblxuY29uc3QgZmlsdGVyZWRPYmplY3RzID0gW107XG4vLyBsb29wIHRocm91Z2ggYWxsIHRhc2tzIGFycmF5IFxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gY29uc3QgY3VycmVudEl0ZW0gPSBhbGxUYXNrc0FycmF5W2ldO1xuXG4gICAgLy8gY2hlY2sgaWYgc2VsZWN0ZWQgaXRlbSB2YWx1ZSBpcyBhbGwgdGFza3NcbiAgICBpZiAoc2VsZWN0ZWRJdGVtID09PSAnYWxsLXRhc2tzJykge1xuICAgICAgICAvLyBhZGQgYWxsIHRhc2tzIHRvIGZpbHRlciBhcnJheVxuICAgICAgICAvLyBmaWx0ZXJlZE9iamVjdHMucHVzaChhbGxUYXNrc0FycmF5W2ldKVxuICAgICAgICBcbiAgICAgICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpXG4gICAgICAgIHVwZGF0ZVRhc2tzQ29udGFpbmVyKGFsbFRhc2tzQXJyYXkpXG4gICAgfVxuaWYgKGFsbFRhc2tzQXJyYXlbaV0ucHJvamVjdCA9PT0gc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGZpbHRlcmVkT2JqZWN0cy5wdXNoKGFsbFRhc2tzQXJyYXlbaV0pXG5cbiAgICAgICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xudXBkYXRlVGFza3NDb250YWluZXIoZmlsdGVyZWRPYmplY3RzKVxuICAgIH1cblxuXG59XG5cblxuICAgIFxuICAgIH0pO1xuXG5mdW5jdGlvbiBkYXlzTGVmdFVudGlsRHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXlzTGVmdCA9IGRpZmZlcmVuY2VJbkRheXModGFyZ2V0RGF0ZSwgY3VycmVudERhdGUpO1xuXG4gICAgcmV0dXJuIGRheXNMZWZ0XG59ICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2xlYXJMb2NhbFN0b3JhZ2UoKVxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYWxsVGFza3MpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=