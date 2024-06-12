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
    /* border: 3px solid white; */
    flex-direction: column;
    height: 500px;
    width: 80%;
    overflow: scroll;

}
.task-item-element {
    outline: 2px solid purple;
    height: 100px;
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(10, 1fr);
padding-top: 20px;
padding-bottom: 20px;
    

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
    left: 0;
    width: 100%;
    background-color: black;
    color: white;
    font-size: 36px;
    cursor: pointer;
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
#task-items-container {
    height: 400px;
    width: 100%;
    overflow: scroll;

    }
    .task-item-element {
        height: auto;
row-gap: 25px;

    }
    #task-date {
        font-size: 12px;
    }
#start-stop-button {
    bottom: 0;
    height: 100px;
    font-size: 24px;    


}
.dialog {
    
        width: 80%;
        padding-bottom: 50px;
    }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,sBAAsB;;AAE1B;;;AAGA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,uBAAuB;AAC3B,mBAAmB;;AAEnB;;AAEA;IACI,6BAA6B;IAC7B,sBAAsB;IACtB,aAAa;IACb,UAAU;IACV,gBAAgB;;AAEpB;AACA;IACI,yBAAyB;IACzB,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,sCAAsC;AAC1C,iBAAiB;AACjB,oBAAoB;;;AAGpB;AACA;IACI,6BAA6B;IAC7B,aAAa;;AAEjB;AACA;;IAEI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,gBAAgB;IAChB,uBAAuB;AAC3B,eAAe;IACX,WAAW;IACX,gBAAgB;;AAEpB;AACA;IACI,WAAW;IACX,gBAAgB;IAChB,eAAe;AACnB;AACA;IACI,WAAW;IACX,iBAAiB;IACjB,eAAe;AACnB;AACA;IACI,WAAW;IACX,cAAc;IACd,eAAe;AACnB;;;AAGA;IACI,yBAAyB;AAC7B,aAAa;IACT,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB,eAAe;IACX,YAAY;IACZ,OAAO;IACP,WAAW;IACX,uBAAuB;IACvB,YAAY;IACZ,eAAe;IACf,eAAe;AACnB;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,eAAe;;AAEnB;AACA;IACI,WAAW;IACX,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB,kBAAkB;AAClB,eAAe;AACf;AACA;IACI,WAAW;IACX,YAAY;IACZ,wBAAwB;IACxB,uBAAuB;IACvB,YAAY;IACZ,eAAe;AACnB;AACA;AACA,uBAAuB;IACnB,wBAAwB;IACxB,YAAY;IACZ,eAAe,EAAE,iDAAiD;IAClE,QAAQ,EAAE,kDAAkD;IAC5D,SAAS,EAAE,oDAAoD;IAC/D,gCAAgC,EAAE,+EAA+E;IACjH,mCAAmC;IACnC,UAAU;;AAEd,YAAY;AACZ,YAAY;AACZ,oBAAoB;AACpB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,eAAe;AACnB;AACA;IACI,oCAAoC;IACpC,YAAY;IACZ,oCAAoC;AACxC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,sBAAsB;GACvB;AACH;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;;AAE1B;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,WAAW;IACX,wBAAwB;IACxB,wBAAwB;IACxB,YAAY;IACZ,kBAAkB;IAClB,cAAc;;AAElB;AACA;IACI,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,8BAA8B;AAClC;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,YAAY;AAChB;;;AAGA;AACA;IACI,aAAa;IACb,WAAW;IACX,gBAAgB;;IAEhB;IACA;QACI,YAAY;AACpB,aAAa;;IAET;IACA;QACI,eAAe;IACnB;AACJ;IACI,SAAS;IACT,aAAa;IACb,eAAe;;;AAGnB;AACA;;QAEQ,UAAU;QACV,oBAAoB;IACxB;AACJ","sourcesContent":["* {\n    padding: 0;\n    margin: 0;\n    box-sizing: border-box;\n\n}\n\n\nbody {\n    background-color: black;\n    color: white;\n}\n#output {\n    height: 80%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\nalign-items: center;\n\n}\n\n#task-items-container {\n    /* border: 3px solid white; */\n    flex-direction: column;\n    height: 500px;\n    width: 80%;\n    overflow: scroll;\n\n}\n.task-item-element {\n    outline: 2px solid purple;\n    height: 100px;\n    display: grid;\n    grid-template-rows: repeat(2, 1fr);\n    grid-template-columns: repeat(10, 1fr);\npadding-top: 20px;\npadding-bottom: 20px;\n    \n\n}\n.complete {\n    text-decoration: line-through;\n    color: purple;\n    \n}\n#task-description {\n    \n    font-weight: bold;\n    font-size: 1.3rem;\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\ncursor: pointer;\n    grid-row: 1;\n    grid-column: 2/9;\n\n}\n#task-project {\n    grid-row: 2;\n    grid-column: 2/9;\n    cursor: pointer;\n}\n#task-date {\n    grid-row: 1;\n    grid-column: 9/10;\n    cursor: pointer;\n}\n#task-start {\n    grid-row: 2;\n    grid-column: 9;\n    cursor: pointer;\n}\n\n\n#start-stop-button {\n    outline: 3px solid purple;\nheight: 200px;    \n    display: flex;\n    justify-content: center;\n    align-items: center;\nposition: fixed;\n    bottom: 10px;\n    left: 0;\n    width: 100%;\n    background-color: black;\n    color: white;\n    font-size: 36px;\n    cursor: pointer;\n}\n#project-filter-container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 25px 0;\n    \n}\n#filter-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    row-gap: 20px;\n    justify-content: center;\n    align-items: center;\npadding: 25px 50px;\ncursor: pointer;\n}\n#project-filter {\n    width: 100%;\n    height: 35px;\n    border: 2px solid purple;\n    background-color: black;\n    color: white;\n    cursor: pointer;\n}\n.dialog {\nbackground-color: black;\n    border: 5px solid purple;\n    color: white;\n    position: fixed; /* Position the dialog relative to the viewport */\n    top: 50%; /* Position the dialog halfway down the viewport */\n    left: 50%; /* Position the dialog halfway across the viewport */\n    transform: translate(-50%, -50%); /* Offset the dialog's position by half its own width and height to center it */\n    /* Add width and height if needed */\n    width: 40%;\n    \nz-index: 999;    \npadding: 5px;\npadding-bottom: 50px;\n}\n.close {\n    cursor: pointer;\n}\n.delete{\n    cursor: pointer;\n}\nbutton {\n    cursor: pointer;\n}\ndialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.8);\n    z-index: 999;\n    transition: opacity 0.3s ease-in-out;\n}\n.dialog-content {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    row-gap: 20px;\n}\n#create-close {\n    align-self: flex-start;   \n   }\nform {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: flex-start;\n    row-gap: 20px;\n}\n.form-wrappers {\n    display: flex;\n    flex-direction: column;\n\n}\n#create-description {\n    background-color: black;\n    color: white;\n}\n#create-project {\n    background-color: black;\n    color: white;\n}\nform button {\n    width: 100%;\n    background-color: purple;\n    border: 1px solid purple;\n    color: white;\n    align-self: center;\n    padding: 5px 0;\n\n}\n#update-nav-wrapper {\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n}\n#update-description {\n    background-color: black;\n    color: white;\n}\n#update-project {\n    background-color: black;\n    color: white;\n}\n#create-date {\n    background-color: black;\n    color: white;\n}\n\n\n@media (max-width: 767px) {\n#task-items-container {\n    height: 400px;\n    width: 100%;\n    overflow: scroll;\n\n    }\n    .task-item-element {\n        height: auto;\nrow-gap: 25px;\n\n    }\n    #task-date {\n        font-size: 12px;\n    }\n#start-stop-button {\n    bottom: 0;\n    height: 100px;\n    font-size: 24px;    \n\n\n}\n.dialog {\n    \n        width: 80%;\n        padding-bottom: 50px;\n    }\n}\n"],"sourceRoot":""}]);
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

output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.taskItemsContainer)())

// append project filter feature to dom
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createProjectFilterSelect)())

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
        // task.daysLeft = daysLeft;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDJDQUEyQyxRQUFRO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUF1QkM7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzWnNDOztBQUV2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUCxnQkFBZ0IsbURBQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLG1CQUFtQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxVQUFVO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMU02QztBQUNOO0FBQytDOztBQUU3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFFQUFvQjs7QUFFcEI7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxRQUFRO0FBQ3ZEO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixzQkFBc0I7QUFDdEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsMEJBQTBCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLDZFQUE0QjtBQUNwQyxRQUFRLHNFQUFvQjtBQUM1QjtBQUNBO0FBQ0E7O0FBRUEsUUFBUSw4RUFBNEI7QUFDcEMscUVBQW9CO0FBQ3BCOzs7QUFHQTs7O0FBR0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiwwREFBZ0I7O0FBRXJDO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0EsK0MiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2stb2JqZWN0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdXNlci1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbnN0YW50cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VJbkRheXMubWpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydE9mRGF5Lm1qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvdG9EYXRlLm1qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYCoge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbn1cblxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jb3V0cHV0IHtcbiAgICBoZWlnaHQ6IDgwJTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5hbGlnbi1pdGVtczogY2VudGVyO1xuXG59XG5cbiN0YXNrLWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgLyogYm9yZGVyOiAzcHggc29saWQgd2hpdGU7ICovXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBoZWlnaHQ6IDUwMHB4O1xuICAgIHdpZHRoOiA4MCU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxufVxuLnRhc2staXRlbS1lbGVtZW50IHtcbiAgICBvdXRsaW5lOiAycHggc29saWQgcHVycGxlO1xuICAgIGhlaWdodDogMTAwcHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xucGFkZGluZy10b3A6IDIwcHg7XG5wYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBcblxufVxuLmNvbXBsZXRlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICBjb2xvcjogcHVycGxlO1xuICAgIFxufVxuI3Rhc2stZGVzY3JpcHRpb24ge1xuICAgIFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbmN1cnNvcjogcG9pbnRlcjtcbiAgICBncmlkLXJvdzogMTtcbiAgICBncmlkLWNvbHVtbjogMi85O1xuXG59XG4jdGFzay1wcm9qZWN0IHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogMi85O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0YXNrLWRhdGUge1xuICAgIGdyaWQtcm93OiAxO1xuICAgIGdyaWQtY29sdW1uOiA5LzEwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN0YXNrLXN0YXJ0IHtcbiAgICBncmlkLXJvdzogMjtcbiAgICBncmlkLWNvbHVtbjogOTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cblxuI3N0YXJ0LXN0b3AtYnV0dG9uIHtcbiAgICBvdXRsaW5lOiAzcHggc29saWQgcHVycGxlO1xuaGVpZ2h0OiAyMDBweDsgICAgXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xucG9zaXRpb246IGZpeGVkO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuI3Byb2plY3QtZmlsdGVyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICBcbn1cbiNmaWx0ZXItd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHJvdy1nYXA6IDIwcHg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbnBhZGRpbmc6IDI1cHggNTBweDtcbmN1cnNvcjogcG9pbnRlcjtcbn1cbiNwcm9qZWN0LWZpbHRlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAzNXB4O1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHB1cnBsZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmRpYWxvZyB7XG5iYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBib3JkZXI6IDVweCBzb2xpZCBwdXJwbGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBvc2l0aW9uOiBmaXhlZDsgLyogUG9zaXRpb24gdGhlIGRpYWxvZyByZWxhdGl2ZSB0byB0aGUgdmlld3BvcnQgKi9cbiAgICB0b3A6IDUwJTsgLyogUG9zaXRpb24gdGhlIGRpYWxvZyBoYWxmd2F5IGRvd24gdGhlIHZpZXdwb3J0ICovXG4gICAgbGVmdDogNTAlOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIGhhbGZ3YXkgYWNyb3NzIHRoZSB2aWV3cG9ydCAqL1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpOyAvKiBPZmZzZXQgdGhlIGRpYWxvZydzIHBvc2l0aW9uIGJ5IGhhbGYgaXRzIG93biB3aWR0aCBhbmQgaGVpZ2h0IHRvIGNlbnRlciBpdCAqL1xuICAgIC8qIEFkZCB3aWR0aCBhbmQgaGVpZ2h0IGlmIG5lZWRlZCAqL1xuICAgIHdpZHRoOiA0MCU7XG4gICAgXG56LWluZGV4OiA5OTk7ICAgIFxucGFkZGluZzogNXB4O1xucGFkZGluZy1ib3R0b206IDUwcHg7XG59XG4uY2xvc2Uge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5kZWxldGV7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuYnV0dG9uIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5kaWFsb2c6OmJhY2tkcm9wIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XG4gICAgei1pbmRleDogOTk5O1xuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbn1cbi5kaWFsb2ctY29udGVudCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcm93LWdhcDogMjBweDtcbn1cbiNjcmVhdGUtY2xvc2Uge1xuICAgIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7ICAgXG4gICB9XG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgcm93LWdhcDogMjBweDtcbn1cbi5mb3JtLXdyYXBwZXJzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbn1cbiNjcmVhdGUtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiNjcmVhdGUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuZm9ybSBidXR0b24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHB1cnBsZTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBwdXJwbGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiA1cHggMDtcblxufVxuI3VwZGF0ZS1uYXYtd3JhcHBlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbiN1cGRhdGUtZGVzY3JpcHRpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbiN1cGRhdGUtcHJvamVjdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuI2NyZWF0ZS1kYXRlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4jdGFzay1pdGVtcy1jb250YWluZXIge1xuICAgIGhlaWdodDogNDAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb3ZlcmZsb3c6IHNjcm9sbDtcblxuICAgIH1cbiAgICAudGFzay1pdGVtLWVsZW1lbnQge1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG5yb3ctZ2FwOiAyNXB4O1xuXG4gICAgfVxuICAgICN0YXNrLWRhdGUge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgfVxuI3N0YXJ0LXN0b3AtYnV0dG9uIHtcbiAgICBib3R0b206IDA7XG4gICAgaGVpZ2h0OiAxMDBweDtcbiAgICBmb250LXNpemU6IDI0cHg7ICAgIFxuXG5cbn1cbi5kaWFsb2cge1xuICAgIFxuICAgICAgICB3aWR0aDogODAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbiAgICB9XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULHNCQUFzQjs7QUFFMUI7OztBQUdBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQixtQkFBbUI7O0FBRW5COztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2IsVUFBVTtJQUNWLGdCQUFnQjs7QUFFcEI7QUFDQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyxzQ0FBc0M7QUFDMUMsaUJBQWlCO0FBQ2pCLG9CQUFvQjs7O0FBR3BCO0FBQ0E7SUFDSSw2QkFBNkI7SUFDN0IsYUFBYTs7QUFFakI7QUFDQTs7SUFFSSxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCLGVBQWU7SUFDWCxXQUFXO0lBQ1gsZ0JBQWdCOztBQUVwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7O0FBR0E7SUFDSSx5QkFBeUI7QUFDN0IsYUFBYTtJQUNULGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCLGVBQWU7SUFDWCxZQUFZO0lBQ1osT0FBTztJQUNQLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlOztBQUVuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWix3QkFBd0I7SUFDeEIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixlQUFlO0FBQ25CO0FBQ0E7QUFDQSx1QkFBdUI7SUFDbkIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixlQUFlLEVBQUUsaURBQWlEO0lBQ2xFLFFBQVEsRUFBRSxrREFBa0Q7SUFDNUQsU0FBUyxFQUFFLG9EQUFvRDtJQUMvRCxnQ0FBZ0MsRUFBRSwrRUFBK0U7SUFDakgsbUNBQW1DO0lBQ25DLFVBQVU7O0FBRWQsWUFBWTtBQUNaLFlBQVk7QUFDWixvQkFBb0I7QUFDcEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksc0JBQXNCO0dBQ3ZCO0FBQ0g7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2Qix1QkFBdUI7SUFDdkIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjs7QUFFMUI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHdCQUF3QjtJQUN4Qix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixjQUFjOztBQUVsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0FBQ2xDO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0FBQ2hCOzs7QUFHQTtBQUNBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxnQkFBZ0I7O0lBRWhCO0lBQ0E7UUFDSSxZQUFZO0FBQ3BCLGFBQWE7O0lBRVQ7SUFDQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjtJQUNJLFNBQVM7SUFDVCxhQUFhO0lBQ2IsZUFBZTs7O0FBR25CO0FBQ0E7O1FBRVEsVUFBVTtRQUNWLG9CQUFvQjtJQUN4QjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxufVxcblxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jb3V0cHV0IHtcXG4gICAgaGVpZ2h0OiA4MCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxufVxcblxcbiN0YXNrLWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIC8qIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlOyAqL1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICB3aWR0aDogODAlO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcblxcbn1cXG4udGFzay1pdGVtLWVsZW1lbnQge1xcbiAgICBvdXRsaW5lOiAycHggc29saWQgcHVycGxlO1xcbiAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgyLCAxZnIpO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG5wYWRkaW5nLXRvcDogMjBweDtcXG5wYWRkaW5nLWJvdHRvbTogMjBweDtcXG4gICAgXFxuXFxufVxcbi5jb21wbGV0ZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xcbiAgICBjb2xvcjogcHVycGxlO1xcbiAgICBcXG59XFxuI3Rhc2stZGVzY3JpcHRpb24ge1xcbiAgICBcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG5jdXJzb3I6IHBvaW50ZXI7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogMi85O1xcblxcbn1cXG4jdGFzay1wcm9qZWN0IHtcXG4gICAgZ3JpZC1yb3c6IDI7XFxuICAgIGdyaWQtY29sdW1uOiAyLzk7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuI3Rhc2stZGF0ZSB7XFxuICAgIGdyaWQtcm93OiAxO1xcbiAgICBncmlkLWNvbHVtbjogOS8xMDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jdGFzay1zdGFydCB7XFxuICAgIGdyaWQtcm93OiAyO1xcbiAgICBncmlkLWNvbHVtbjogOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cXG4jc3RhcnQtc3RvcC1idXR0b24ge1xcbiAgICBvdXRsaW5lOiAzcHggc29saWQgcHVycGxlO1xcbmhlaWdodDogMjAwcHg7ICAgIFxcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5wb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMTBweDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGZvbnQtc2l6ZTogMzZweDtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jcHJvamVjdC1maWx0ZXItY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDI1cHggMDtcXG4gICAgXFxufVxcbiNmaWx0ZXItd3JhcHBlciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5wYWRkaW5nOiAyNXB4IDUwcHg7XFxuY3Vyc29yOiBwb2ludGVyO1xcbn1cXG4jcHJvamVjdC1maWx0ZXIge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCBwdXJwbGU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuLmRpYWxvZyB7XFxuYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7IC8qIFBvc2l0aW9uIHRoZSBkaWFsb2cgcmVsYXRpdmUgdG8gdGhlIHZpZXdwb3J0ICovXFxuICAgIHRvcDogNTAlOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIGhhbGZ3YXkgZG93biB0aGUgdmlld3BvcnQgKi9cXG4gICAgbGVmdDogNTAlOyAvKiBQb3NpdGlvbiB0aGUgZGlhbG9nIGhhbGZ3YXkgYWNyb3NzIHRoZSB2aWV3cG9ydCAqL1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTsgLyogT2Zmc2V0IHRoZSBkaWFsb2cncyBwb3NpdGlvbiBieSBoYWxmIGl0cyBvd24gd2lkdGggYW5kIGhlaWdodCB0byBjZW50ZXIgaXQgKi9cXG4gICAgLyogQWRkIHdpZHRoIGFuZCBoZWlnaHQgaWYgbmVlZGVkICovXFxuICAgIHdpZHRoOiA0MCU7XFxuICAgIFxcbnotaW5kZXg6IDk5OTsgICAgXFxucGFkZGluZzogNXB4O1xcbnBhZGRpbmctYm90dG9tOiA1MHB4O1xcbn1cXG4uY2xvc2Uge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbi5kZWxldGV7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5kaWFsb2c6OmJhY2tkcm9wIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xcbiAgICB6LWluZGV4OiA5OTk7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcXG59XFxuLmRpYWxvZy1jb250ZW50IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHJvdy1nYXA6IDIwcHg7XFxufVxcbiNjcmVhdGUtY2xvc2Uge1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0OyAgIFxcbiAgIH1cXG5mb3JtIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbiAgICByb3ctZ2FwOiAyMHB4O1xcbn1cXG4uZm9ybS13cmFwcGVycyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuXFxufVxcbiNjcmVhdGUtZGVzY3JpcHRpb24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG4jY3JlYXRlLXByb2plY3Qge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBwdXJwbGU7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDVweCAwO1xcblxcbn1cXG4jdXBkYXRlLW5hdi13cmFwcGVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuI3VwZGF0ZS1kZXNjcmlwdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiN1cGRhdGUtcHJvamVjdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcbiNjcmVhdGUtZGF0ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xcbiN0YXNrLWl0ZW1zLWNvbnRhaW5lciB7XFxuICAgIGhlaWdodDogNDAwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBvdmVyZmxvdzogc2Nyb2xsO1xcblxcbiAgICB9XFxuICAgIC50YXNrLWl0ZW0tZWxlbWVudCB7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxucm93LWdhcDogMjVweDtcXG5cXG4gICAgfVxcbiAgICAjdGFzay1kYXRlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcXG4gICAgfVxcbiNzdGFydC1zdG9wLWJ1dHRvbiB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgaGVpZ2h0OiAxMDBweDtcXG4gICAgZm9udC1zaXplOiAyNHB4OyAgICBcXG5cXG5cXG59XFxuLmRpYWxvZyB7XFxuICAgIFxcbiAgICAgICAgd2lkdGg6IDgwJTtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1MHB4O1xcbiAgICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUYXNrIHtcbiAgICBzdGF0aWMgaWRDb3VudGVyID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lkQ291bnRlcicpIHx8IDE7XG5cbiAgICBjb25zdHJ1Y3RvcihkZXNjcmlwdGlvbiwgcHJvamVjdCwgZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmlkID0gVGFzay5pZENvdW50ZXIrKztcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByb2plY3QgPSBwcm9qZWN0O1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmlzQ29tcGxldGUgPSBmYWxzZTtcblxuICAgICAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIGlkQ291bnRlciB0byBsb2NhbFN0b3JhZ2VcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lkQ291bnRlcicsIFRhc2suaWRDb3VudGVyKTtcbiAgICB9XG59XG5cblxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrT2JqZWN0KGRlc2NyaXB0aW9uLHByb2plY3QsIGR1ZURhdGUpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24scHJvamVjdCwgZHVlRGF0ZSk7XG5cbiAgICByZXR1cm4gdGFza1xufVxuZnVuY3Rpb24gYWRkVGFza1RvQW5BcnJheShvYmplY3QsIGFycmF5TmFtZSkge1xuICAgIGFycmF5TmFtZS5wdXNoKG9iamVjdClcbn1cbi8vIGZhY3RvcnkgZm9yIHByb2plY3QgYXJyYXlzXG5mdW5jdGlvbiBjcmVhdGVBcnJheUZhY3RvcnkoKSB7XG4gICAgY29uc3QgYXJyYXkgPSBbXTtcbiAgICBsZXQgY3VycmVudFRhc2tJbmRleDsgXG5cbiAgICBmdW5jdGlvbiBnZXRBcnJheSgpIHtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRJdGVtKGl0ZW0pIHtcbiAgICAgICAgYXJyYXkucHVzaChpdGVtKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2snLCBKU09OLnN0cmluZ2lmeShpdGVtKSlcbiAgICB9XG4gICAgZnVuY3Rpb24gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoaWQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGlkO1xuICAgICAgICBsZXQgc2hpZnRlZElkID0gcGFyc2VJbnQoKGVsZW1lbnQpIC0xKTtcblxucmV0dXJuIHNoaWZ0ZWRJZDtcbiAgICB9XG5mdW5jdGlvbiBnZXRBcnJheUl0ZW0oaW5kZXgpIHtcbiAgICByZXR1cm4gYXJyYXlbaW5kZXhdXG59XG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza0luZGV4KGluZGV4KSB7XG4gICAgY3VycmVudFRhc2tJbmRleCA9IGluZGV4O1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2tJbmRleCgpIHtcbiAgICByZXR1cm4gY3VycmVudFRhc2tJbmRleDtcbn1cbmZ1bmN0aW9uIGRlbGV0ZVRhc2tPYmplY3QoaW5kZXgpIHtcbiAgICBpZiAoaW5kZXggPj0gMCAmJiBpbmRleCA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICBhcnJheS5zcGxpY2UoaW5kZXgsIDEpXG4gICAgfVxufVxuZnVuY3Rpb24gc3RhcnQoaW5kZXgpIHtcbiAgICAgICAgYXJyYXlbaW5kZXhdLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cbn1cbmZ1bmN0aW9uIHN0b3AoaW5kZXgpIHtcbiAgICBhcnJheVtpbmRleF0uZW5kVGltZSA9IG5ldyBEYXRlKCk7XG4gICAgXG59XG5mdW5jdGlvbiBlbGFwc2VkKGluZGV4KSB7XG4gICAgaWYgKCFhcnJheVtpbmRleF0uc3RhcnRUaW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcHdhdGNoIG5vdCB5ZXQgc3RhcnRlZCEnKVxuICAgIH1cbiAgICBpZiAoIWFycmF5W2luZGV4XS5lbmRUaW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignU3RvcHdhdGNoIG5vdCB5ZXQgc3RvcHBlZCEnKVxuICAgIH1cblxuICAgIGNvbnN0IG1pbGxpc2Vjb25kcyA9IGFycmF5W2luZGV4XS5lbmRUaW1lIC0gYXJyYXlbaW5kZXhdLnN0YXJ0VGltZTtcblxuICAgIHJldHVybiBtaWxsaXNlY29uZHM7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUobWlsbGlzZWNvbmRzKSB7XG4gICAgY29uc3QgdG90YWxTZWNvbmRzID0gTWF0aC5mbG9vcihtaWxsaXNlY29uZHMgLyAxMDAwKTtcbiAgICBjb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XG4gICAgY29uc3QgbWludXRlcyA9IE1hdGguZmxvb3IoKHRvdGFsU2Vjb25kcyAlIDM2MDApIC8gNjApO1xuICAgIGNvbnN0IHNlY29uZHMgPSB0b3RhbFNlY29uZHMgJSA2MDtcbiAgXG4gICAgY29uc3QgZm9ybWF0dGVkVGltZSA9IGAke3BhZFplcm8oaG91cnMpfToke3BhZFplcm8obWludXRlcyl9OiR7cGFkWmVybyhzZWNvbmRzKX1gO1xuICAgIHJldHVybiBmb3JtYXR0ZWRUaW1lO1xuICB9XG4gIFxuICBmdW5jdGlvbiBwYWRaZXJvKG51bWJlcikge1xuICAgIHJldHVybiBudW1iZXIudG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gIH1cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZFNwZW50VGltZShpbmRleCkge1xubGV0IHRvdGFsTWlsbGlTZWNvbmRzID0gMDtcbmZvciAobGV0IGkgPSAwOyBpIDxhcnJheVtpbmRleF0ubXNBcnJheS5sZW5ndGg7IGkrKykge1xubGV0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0ubXNBcnJheVtpXTtcbnRvdGFsTWlsbGlTZWNvbmRzICs9IGVsZW1lbnQ7XG5cbn1cbnJldHVybiBmb3JtYXRUaW1lKHRvdGFsTWlsbGlTZWNvbmRzKTtcbn0gIFxuIGZ1bmN0aW9uIHNldExvY2FsU3RvcmFnZShrZXksIGFycmF5KSB7XG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIGFycmF5KVxuIH0gXG4gIFxuXG5cbnJldHVybiB7XG4gICAgZ2V0QXJyYXksXG4gICAgYWRkSXRlbSxcbiAgICBkb3duU2hpZnRJZFRvQXJyYXlJbmRleCxcbiAgICBnZXRBcnJheUl0ZW0sXG4gICAgc2V0Q3VycmVudFRhc2tJbmRleCxcbiAgICBnZXRDdXJyZW50VGFza0luZGV4LFxuICAgIGRlbGV0ZVRhc2tPYmplY3QsXG5zdGFydCxcbnN0b3AsXG5lbGFwc2VkLFxuZ2V0Rm9ybWF0dGVkU3BlbnRUaW1lLFxuc2V0TG9jYWxTdG9yYWdlLFxuXG5cbn07XG59XG5cbi8vIHNlY3Rpb24gZm9yIHByb2plY3Qgc2VsZWN0IG9wdGlvbiBkcm9wZG93biBpbXBsZW1lbnRhdGlvblxuXG5cblxuXG5cbi8vIHJlZmFjdG9yZWQgZmFjdG9yeSBtZXRob2RzIHRvIGdsb2JhbCBmdW5jdGlvbnNcbmZ1bmN0aW9uIGRvd25TaGlmdElkVG9BcnJheUluZGV4KGlkKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGlkO1xuICAgIGxldCBzaGlmdGVkSWQgPSBwYXJzZUludCgoZWxlbWVudCkgLTEpO1xuXG5yZXR1cm4gc2hpZnRlZElkO1xufVxuZnVuY3Rpb24gc3RhcnQoaW5kZXgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuYWxsVGFza3NbaW5kZXhdLnN0YXJ0VGltZSA9IG5ldyBEYXRlKCk7XG5cbn1cbmZ1bmN0aW9uIHN0b3AoaW5kZXgpIHtcbmFycmF5W2luZGV4XS5lbmRUaW1lID0gbmV3IERhdGUoKTtcblxufVxuZnVuY3Rpb24gZWxhcHNlZChpbmRleCkge1xuaWYgKCFhcnJheVtpbmRleF0uc3RhcnRUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdGFydGVkIScpXG59XG5pZiAoIWFycmF5W2luZGV4XS5lbmRUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdTdG9wd2F0Y2ggbm90IHlldCBzdG9wcGVkIScpXG59XG5cbmNvbnN0IG1pbGxpc2Vjb25kcyA9IGFycmF5W2luZGV4XS5lbmRUaW1lIC0gYXJyYXlbaW5kZXhdLnN0YXJ0VGltZTtcblxucmV0dXJuIG1pbGxpc2Vjb25kcztcbn1cblxuZnVuY3Rpb24gZm9ybWF0VGltZShtaWxsaXNlY29uZHMpIHtcbmNvbnN0IHRvdGFsU2Vjb25kcyA9IE1hdGguZmxvb3IobWlsbGlzZWNvbmRzIC8gMTAwMCk7XG5jb25zdCBob3VycyA9IE1hdGguZmxvb3IodG90YWxTZWNvbmRzIC8gMzYwMCk7XG5jb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcigodG90YWxTZWNvbmRzICUgMzYwMCkgLyA2MCk7XG5jb25zdCBzZWNvbmRzID0gdG90YWxTZWNvbmRzICUgNjA7XG5cbmNvbnN0IGZvcm1hdHRlZFRpbWUgPSBgJHtwYWRaZXJvKGhvdXJzKX06JHtwYWRaZXJvKG1pbnV0ZXMpfToke3BhZFplcm8oc2Vjb25kcyl9YDtcbnJldHVybiBmb3JtYXR0ZWRUaW1lO1xufVxuXG5mdW5jdGlvbiBwYWRaZXJvKG51bWJlcikge1xucmV0dXJuIG51bWJlci50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbn1cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZFNwZW50VGltZShpbmRleCkge1xubGV0IHRvdGFsTWlsbGlTZWNvbmRzID0gMDtcbmZvciAobGV0IGkgPSAwOyBpIDxhcnJheVtpbmRleF0ubXNBcnJheS5sZW5ndGg7IGkrKykge1xubGV0IGVsZW1lbnQgPSBhcnJheVtpbmRleF0ubXNBcnJheVtpXTtcbnRvdGFsTWlsbGlTZWNvbmRzICs9IGVsZW1lbnQ7XG5cbn1cbnJldHVybiBmb3JtYXRUaW1lKHRvdGFsTWlsbGlTZWNvbmRzKTtcbn0gIFxuXG5cblxuXG5leHBvcnQge1xuXG5jcmVhdGVUYXNrT2JqZWN0LFxuYWRkVGFza1RvQW5BcnJheSxcbmNyZWF0ZUFycmF5RmFjdG9yeSxcbmRvd25TaGlmdElkVG9BcnJheUluZGV4LFxuXG59IiwiaW1wb3J0IHtcbiAgICAgZm9ybWF0RGlzdGFuY2UsXG4gICAgICBzdWJEYXlzIFxuICAgIH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cblxuaW1wb3J0IHtcbiAgICBTdG9wd2F0Y2gsXG4gICAgY3JlYXRlVGFza09iamVjdCxcbmFkZFRhc2tUb0FuQXJyYXksXG59IGZyb20gJy4vdGFzay1vYmplY3QtY29tcG9uZW50JztcblxuXG5cbi8vIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciBzdGFydCBidXR0b25cbmZ1bmN0aW9uIHN0YXJ0QnRuRXZlbnRIYW5kbGVyKCkge1xuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtc3RvcC1idXR0b24nKVxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5DcmVhdGVGb3JtRGlhbG9nKCk7XG4gICAgXG4gICAgfSlcbiAgICB9XG5cbi8vIGNyZWF0ZSB0YXNrIGl0ZW1zIGNvbnRhaW5lciBcbmZ1bmN0aW9uIHRhc2tJdGVtc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5pZCA9ICd0YXNrLWl0ZW1zLWNvbnRhaW5lcidcblxucmV0dXJuIGNvbnRhaW5lcjtcbn1cbi8vIGNyZWF0ZSB0YXNrIGl0ZW1cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKGFycmF5KSB7XG5jb25zdCB0YXNrSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKTtcbiAgIGZvciAobGV0IGkgPSAwO2kgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gYXJyYXlbaV07XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtLWVsZW1lbnQnKVxuXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5pZCA9IGl0ZW0uaWQ7XG5cbiAgICAgICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgZGl2LmlkID0gJ3Rhc2stZGVzY3JpcHRpb24nO1xuICAgICAgICBkaXYudGV4dENvbnRlbnQgPSBpdGVtLmRlc2NyaXB0aW9uO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYyLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICBkaXYyLmlkID0gJ3Rhc2stcHJvamVjdCc7XG4gICAgICAgIGRpdjIudGV4dENvbnRlbnQgPSBpdGVtLnByb2plY3Q7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBkaXYzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRpdjMuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIGRpdjMuaWQgPSAndGFzay1kYXRlJztcbiAgICAgICAgaWYgKCFpdGVtLmRheXNMZWZ0KSB7XG5kaXYzLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpdjMudGV4dENvbnRlbnQgPSBgJHtpdGVtLmRheXNMZWZ0fSBkYXlzIGxlZnRgO1xuXG4gICAgICAgIH1cbiAgICAgICAgLy8gZGl2IGZvciBzdGFydCBhbmQgc3RvcCBidXR0b25cbiAgICAgICAgY29uc3QgZGl2NCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZGl2NC5jbGFzc0xpc3QuYWRkKCd0YXNrLWNvbXBvbmVudCcpXG5kaXY0LmlkID0gJ3Rhc2stc3RhcnQnO1xuaWYgKCFpdGVtLmlzQ29tcGxldGUpIHsgICAgXG4gICAgZGl2NC50ZXh0Q29udGVudCA9ICdNYXJrIENvbXBsZXRlJztcblxufVxuaWYgKGl0ZW0uaXNDb21wbGV0ZSkge1xuZGl2NC50ZXh0Q29udGVudCA9ICdDb21wbGV0ZWQnO1xudGFza0l0ZW1FbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NvbXBsZXRlJylcbn1cbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdilcbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdjIpXG4gICAgICAgIHRhc2tJdGVtRWxlbWVudC5hcHBlbmRDaGlsZChkaXYzKVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2NClcbiAgICAgICAgXG4gICAgICAgIHRhc2tJdGVtc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrSXRlbUVsZW1lbnQpXG4gICAgfVxuICAgICAgICBcbiAgICByZXR1cm4gdGFza0l0ZW1zQ29udGFpbmVyO1xufVxuXG4vLyBjcmVhdGUgc3RhcnQgYW5kIHN0b3AgYnV0dG9uIGNvbXBvbmVudFxuZnVuY3Rpb24gc3RhcnRTdG9wQnV0dG9uKCkge1xuICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJ1dHRvbi5pZCA9ICdzdGFydC1zdG9wLWJ1dHRvbic7XG5jb25zdCBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJylcbmgzLnRleHRDb250ZW50ID0gJysnO1xuXG5idXR0b24uYXBwZW5kQ2hpbGQoaDMpXG5cbiAgICByZXR1cm4gYnV0dG9uO1xufVxuXG4vLyBjcmVhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIGNyZWF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ2NyZWF0ZS1kaWFsb2cnO1xuXG5jb25zdCBkaWFsb2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpYWxvZ0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNvbnRlbnQnKVxuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlLmlkID0gJ2NyZWF0ZS1jbG9zZSc7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS50ZXh0Q29udGVudCA9ICdDYW5jZWwnO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdOZXcgVGFzayc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ2NyZWF0ZS1mb3JtJ1xuXG5jb25zdCB3cmFwcGVyMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjEuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ3RleHQnKVxud3JhcHBlcjEuYXBwZW5kQ2hpbGQobGFiZWwxKVxud3JhcHBlcjEuYXBwZW5kQ2hpbGQoaW5wdXQxKVxuXG5jb25zdCB3cmFwcGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLXByb2plY3QnLCdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKVxuaW5wdXQyLmNsYXNzTGlzdC5hZGQoJ2NyZWF0ZS1wcm9qZWN0Jyk7XG5pbnB1dDIuaWQgPSAnY3JlYXRlLXByb2plY3QnO1xud3JhcHBlcjIuYXBwZW5kQ2hpbGQobGFiZWwyKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQoaW5wdXQyKVxuXG5jb25zdCBvcHRpb24xID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24xLnZhbHVlID0gJ25vLXByb2plY3QnXG5vcHRpb24xLnRleHQgPSAnTm8gUHJvamVjdCc7XG5jb25zdCBvcHRpb24yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG5vcHRpb24yLnZhbHVlID0gJ2NyZWF0ZS1wcm9qZWN0J1xub3B0aW9uMi50ZXh0ID0gJ0NyZWF0ZSBQcm9qZWN0JztcblxuXG4vLyBjb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbi8vIGlucHV0My5pZCA9ICdjcmVhdGUtc3RhcnQtdGltZSdcblxuY29uc3QgaW5wdXQzID0gY3JlYXRlRGF0ZVRpbWVJbnB1dCgnY3JlYXRlLWRhdGUnKTtcblxuXG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuc3VibWl0LmlkID0gJ2NyZWF0ZS1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIxKTtcbmZvcm0uYXBwZW5kQ2hpbGQod3JhcHBlcjIpO1xuLy8gZm9ybS5hcHBlbmRDaGlsZChsYWJlbDMpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDMpXG5mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcbmlucHV0Mi5hcHBlbmRDaGlsZChvcHRpb24xKVxuaW5wdXQyLmFwcGVuZENoaWxkKG9wdGlvbjIpXG5cbnJldHVybiBkaWFsb2c7XG59XG5cbi8vIHVwZGF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gdXBkYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpXG5kaWFsb2cuaWQgPSAndXBkYXRlLWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IHdyYXBwZXIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG53cmFwcGVyMS5pZCA9ICd1cGRhdGUtbmF2LXdyYXBwZXInO1xuY29uc3QgY2xvc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jbG9zZS5jbGFzc0xpc3QuYWRkKCdjbG9zZScpXG5jbG9zZS5pZCA9ICd1cGRhdGUtY2xvc2UnO1xuY2xvc2UudGV4dENvbnRlbnQgPSAnQ2FuY2VsJztcbndyYXBwZXIxLmFwcGVuZENoaWxkKGNsb3NlKVxuXG5jb25zdCByZW1vdmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5yZW1vdmUuY2xhc3NMaXN0LmFkZCgnZGVsZXRlJylcbnJlbW92ZS50ZXh0Q29udGVudCA9ICdEZWxldGUnO1xucmVtb3ZlLmlkID0gJ3VwZGF0ZS1kZWxldGUnO1xud3JhcHBlcjEuYXBwZW5kQ2hpbGQocmVtb3ZlKVxuXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdVcGRhdGUgVGFzayc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ3VwZGF0ZS1mb3JtJ1xuXG5jb25zdCB3cmFwcGVyMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgndXBkYXRlLWRlc2NyaXB0aW9uJywgJ0Rlc2NyaXB0aW9uJyk7XG5jb25zdCBpbnB1dDEgPSBjcmVhdGVJbnB1dCgndXBkYXRlLWRlc2NyaXB0aW9uJywgJ3RleHQnKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQobGFiZWwxKVxud3JhcHBlcjIuYXBwZW5kQ2hpbGQoaW5wdXQxKVxuXG5jb25zdCB3cmFwcGVyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xud3JhcHBlcjMuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpXG5jb25zdCBsYWJlbDIgPSBjcmVhdGVMYWJlbCgndXBkYXRlLXByb2plY3QnLCdQcm9qZWN0Jyk7XG5jb25zdCBpbnB1dDIgPSBjcmVhdGVJbnB1dCgndXBkYXRlLXByb2plY3QnLCd0ZXh0Jyk7XG53cmFwcGVyMy5hcHBlbmRDaGlsZChsYWJlbDIpXG53cmFwcGVyMy5hcHBlbmRDaGlsZChpbnB1dDIpXG5cbmNvbnN0IGlucHV0MyA9IGNyZWF0ZURhdGVUaW1lSW5wdXQoJ3VwZGF0ZS1kYXRlJyk7XG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuc3VibWl0LmlkID0gJ3VwZGF0ZS1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZCh3cmFwcGVyMSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKHdyYXBwZXIyKVxuZm9ybS5hcHBlbmRDaGlsZCh3cmFwcGVyMylcbi8vIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwzKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQzKVxuZm9ybS5hcHBlbmRDaGlsZChzdWJtaXQpXG5cbnJldHVybiBkaWFsb2c7XG59XG4vLyBjcmVhdGUgcHJvamVjdCBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuY2xvc2UudGV4dENvbnRlbnQgPSAnJnRpbWVzOyc7XG5jbG9zZS5pZCA9ICdjcmVhdGUtcHJvamVjdC1jbG9zZSc7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ05ldyBQcm9qZWN0JztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAnY3JlYXRlLXByb2plY3QtZm9ybSdcbmNvbnN0IGxhYmVsMSA9IGNyZWF0ZUxhYmVsKCdjcmVhdGUtcHJvamVjdC1uYW1lJywgJ1Byb2plY3QnKTtcbmNvbnN0IGlucHV0MSA9IGNyZWF0ZUlucHV0KCdjcmVhdGUtY3JlYXRlLXByb2plY3QtbmFtZScsICd0ZXh0JylcbmlucHV0MS5wbGFjZWhvbGRlciA9ICdFbnRlciBhIHByb2plY3QgbmFtZSc7XG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuc3VibWl0LnR5cGUgPSAnc3VibWl0JztcbnN1Ym1pdC5pZCA9ICdjcmVhdGUtcHJvamVjdC1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKGxhYmVsMSk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MSlcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuXG5yZXR1cm4gZGlhbG9nO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMYWJlbChmb3JBdHRyaWJ1dGUsdGV4dENvbnRlbnQpIHtcbiAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJylcbiAgICBsYWJlbC5odG1sRm9yID0gZm9yQXR0cmlidXRlO1xubGFiZWwudGV4dENvbnRlbnQgPSB0ZXh0Q29udGVudDtcblxucmV0dXJuIGxhYmVsO1xufVxuZnVuY3Rpb24gY3JlYXRlSW5wdXQoaWRBdHRyaWJ1dGUsdHlwZUF0dHJpYnV0ZSl7XG5jb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbmlucHV0LmlkID0gaWRBdHRyaWJ1dGU7XG5pbnB1dC50eXAgPSB0eXBlQXR0cmlidXRlO1xuXG5yZXR1cm4gaW5wdXQ7IFxufVxuXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgYW5kIG9wZW4gZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIG9wZW5DcmVhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGlhbG9nJylcbiAgICBkaWFsb2cuc2hvd01vZGFsKClcbiAgICByZXR1cm4gZGlhbG9nO1xufVxuZnVuY3Rpb24gb3BlblVwZGF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBjbG9zZUNyZWF0ZURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cbmZ1bmN0aW9uIGNsb3NlVXBkYXRlRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGlhbG9nJylcbiAgICBcbiAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKClcbiAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcbiAgICBkaWFsb2cuY2xvc2UoKVxufVxuZnVuY3Rpb24gb3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBjbG9zZUNyZWF0ZVByb2plY3REaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1wcm9qZWN0LWRpYWxvZycpXG4gICAgZGlhbG9nLmNsb3NlKClcbn1cblxuLy8gZnVuY3Rpb24gdG8gcmVtb3ZlIHRhc2sgaXRlbXMgZnJvbSBjb250YWluZXJcbmZ1bmN0aW9uIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKSB7XG5jb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxuXG5mb3IgKGxldCBpID0gY29udGFpbmVyLmNoaWxkcmVuLmxlbmd0aCAtMTsgaSA+PSAwOyBpLS0pIHtcbmNvbnN0IGNoaWxkID0gY29udGFpbmVyLmNoaWxkcmVuW2ldO1xuY29udGFpbmVyLnJlbW92ZUNoaWxkKGNoaWxkKVxuXG59XG59XG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIHRhc2tzIGNvbnRhaW5lciBlbGVtZW50c1xuZnVuY3Rpb24gdXBkYXRlVGFza3NDb250YWluZXIoYXJyYXlOYW1lKSB7XG5cbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1maWx0ZXInKVxuY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdEVsZW1lbnQudmFsdWU7XG5cbmlmIChzZWxlY3RlZFZhbHVlID09PSAnZGVmYXVsdCcgfHwgc2VsZWN0ZWRWYWx1ZSA9PT0gJ2FsbC10YXNrcycpIHtcbmNvbnN0IHVwZGF0ZSA9IG91dHB1dC5hcHBlbmRDaGlsZChjcmVhdGVUYXNrSXRlbShhcnJheU5hbWUpKVxucmV0dXJuIHVwZGF0ZTtcbn1cbmVsc2Uge1xuICAgIGNvbnN0IGZpbHRlcmVkQXJyYXkgPSBhcnJheU5hbWUuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBzZWxlY3RlZFZhbHVlKTtcbiAgICBjb25zdCB1cGRhdGUgPSBvdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0l0ZW0oZmlsdGVyZWRBcnJheSkpO1xuICAgIHJldHVybiB1cGRhdGU7XG59XG59XG5cblxuLy8gcHJvamVjdCBmaWx0ZXIgc2VsZWN0IGRvbSBlbGVtZW50XG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0RmlsdGVyU2VsZWN0KCkge1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmNvbnRhaW5lci5pZCA9ICdwcm9qZWN0LWZpbHRlci1jb250YWluZXInXG5cbmNvbnN0IGZpbHRlcldyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbmZpbHRlcldyYXBwZXIuaWQgPSAnZmlsdGVyLXdyYXBwZXInXG5cbmNvbnN0IGxhYmVsMiA9IGNyZWF0ZUxhYmVsKCdwcm9qZWN0LWZpbHRlcicsJ0ZpbHRlcicpO1xuY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JylcbmlucHV0Mi5jbGFzc0xpc3QuYWRkKCdjcmVhdGUtcHJvamVjdCcpO1xuaW5wdXQyLmlkID0gJ3Byb2plY3QtZmlsdGVyJztcblxuY29uc3Qgb3B0aW9uMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uMS52YWx1ZSA9ICdkZWZhdWx0J1xub3B0aW9uMS50ZXh0ID0gJy0tIFNlbGVjdCBQcm9qZWN0IC0tJztcblxuY29uc3Qgb3B0aW9uMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xub3B0aW9uMi52YWx1ZSA9ICdhbGwtdGFza3MnXG5vcHRpb24yLnRleHQgPSAnQWxsIFRhc2tzJztcblxuY29udGFpbmVyLmFwcGVuZENoaWxkKGZpbHRlcldyYXBwZXIpXG5maWx0ZXJXcmFwcGVyLmFwcGVuZENoaWxkKGxhYmVsMilcbmZpbHRlcldyYXBwZXIuYXBwZW5kQ2hpbGQoaW5wdXQyKVxuaW5wdXQyLmFwcGVuZENoaWxkKG9wdGlvbjEpXG5pbnB1dDIuYXBwZW5kQ2hpbGQob3B0aW9uMilcblxucmV0dXJuIGNvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIG1ldGhvZCB0aGF0IGNyZWF0cyBkdSBkYXRlIGxhYmVsIGFuZCBpbnB1dFxuZnVuY3Rpb24gY3JlYXRlRGF0ZVRpbWVJbnB1dChpZEF0dHJpYnV0ZSkge1xuICAgIGNvbnN0IGRhdGVXcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGF0ZVdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnZm9ybS13cmFwcGVycycpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBjcmVhdGVMYWJlbChpZEF0dHJpYnV0ZSwgJ0RhdGUnKTtcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgaW5wdXQuaWQgPSBpZEF0dHJpYnV0ZTtcbiAgICBpbnB1dC50eXBlID0gJ2RhdGUnO1xuXG4gICAgZGF0ZVdyYXBwZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGRhdGVXcmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcblxuICAgIHJldHVybiBkYXRlV3JhcHBlcjtcbn1cblxuXG5cbmV4cG9ydCB7XG4gICAgc3RhcnRCdG5FdmVudEhhbmRsZXIsXG50YXNrSXRlbXNDb250YWluZXIsXG5jcmVhdGVUYXNrSXRlbSxcbnN0YXJ0U3RvcEJ1dHRvbixcbmNyZWF0ZUZvcm1EaWFsb2csXG51cGRhdGVGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZUZvcm1EaWFsb2csXG5vcGVuVXBkYXRlRm9ybURpYWxvZyxcbmNsb3NlQ3JlYXRlRGlhbG9nLFxuY2xvc2VVcGRhdGVEaWFsb2csXG5cbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIsXG51cGRhdGVUYXNrc0NvbnRhaW5lcixcbmNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nLFxuY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCxcblxufVxuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4uL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBHb29nbGUgQ2hyb21lIGFzIG9mIDY3LjAuMzM5Ni44NyBpbnRyb2R1Y2VkIHRpbWV6b25lcyB3aXRoIG9mZnNldCB0aGF0IGluY2x1ZGVzIHNlY29uZHMuXG4gKiBUaGV5IHVzdWFsbHkgYXBwZWFyIGZvciBkYXRlcyB0aGF0IGRlbm90ZSB0aW1lIGJlZm9yZSB0aGUgdGltZXpvbmVzIHdlcmUgaW50cm9kdWNlZFxuICogKGUuZy4gZm9yICdFdXJvcGUvUHJhZ3VlJyB0aW1lem9uZSB0aGUgb2Zmc2V0IGlzIEdNVCswMDo1Nzo0NCBiZWZvcmUgMSBPY3RvYmVyIDE4OTFcbiAqIGFuZCBHTVQrMDE6MDA6MDAgYWZ0ZXIgdGhhdCBkYXRlKVxuICpcbiAqIERhdGUjZ2V0VGltZXpvbmVPZmZzZXQgcmV0dXJucyB0aGUgb2Zmc2V0IGluIG1pbnV0ZXMgYW5kIHdvdWxkIHJldHVybiA1NyBmb3IgdGhlIGV4YW1wbGUgYWJvdmUsXG4gKiB3aGljaCB3b3VsZCBsZWFkIHRvIGluY29ycmVjdCBjYWxjdWxhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSB0aW1lem9uZSBvZmZzZXQgaW4gbWlsbGlzZWNvbmRzIHRoYXQgdGFrZXMgc2Vjb25kcyBpbiBhY2NvdW50LlxuICovXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBjb25zdCB1dGNEYXRlID0gbmV3IERhdGUoXG4gICAgRGF0ZS5VVEMoXG4gICAgICBfZGF0ZS5nZXRGdWxsWWVhcigpLFxuICAgICAgX2RhdGUuZ2V0TW9udGgoKSxcbiAgICAgIF9kYXRlLmdldERhdGUoKSxcbiAgICAgIF9kYXRlLmdldEhvdXJzKCksXG4gICAgICBfZGF0ZS5nZXRNaW51dGVzKCksXG4gICAgICBfZGF0ZS5nZXRTZWNvbmRzKCksXG4gICAgICBfZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSxcbiAgICApLFxuICApO1xuICB1dGNEYXRlLnNldFVUQ0Z1bGxZZWFyKF9kYXRlLmdldEZ1bGxZZWFyKCkpO1xuICByZXR1cm4gK2RhdGUgLSArdXRjRGF0ZTtcbn1cbiIsIi8qKlxuICogQG1vZHVsZSBjb25zdGFudHNcbiAqIEBzdW1tYXJ5IFVzZWZ1bCBjb25zdGFudHNcbiAqIEBkZXNjcmlwdGlvblxuICogQ29sbGVjdGlvbiBvZiB1c2VmdWwgZGF0ZSBjb25zdGFudHMuXG4gKlxuICogVGhlIGNvbnN0YW50cyBjb3VsZCBiZSBpbXBvcnRlZCBmcm9tIGBkYXRlLWZucy9jb25zdGFudHNgOlxuICpcbiAqIGBgYHRzXG4gKiBpbXBvcnQgeyBtYXhUaW1lLCBtaW5UaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGZ1bmN0aW9uIGlzQWxsb3dlZFRpbWUodGltZSkge1xuICogICByZXR1cm4gdGltZSA8PSBtYXhUaW1lICYmIHRpbWUgPj0gbWluVGltZTtcbiAqIH1cbiAqIGBgYFxuICovXG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBkYXlzSW5XZWVrXG4gKiBAc3VtbWFyeSBEYXlzIGluIDEgd2Vlay5cbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJbldlZWsgPSA3O1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgZGF5c0luWWVhclxuICogQHN1bW1hcnkgRGF5cyBpbiAxIHllYXIuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBIb3cgbWFueSBkYXlzIGluIGEgeWVhci5cbiAqXG4gKiBPbmUgeWVhcnMgZXF1YWxzIDM2NS4yNDI1IGRheXMgYWNjb3JkaW5nIHRvIHRoZSBmb3JtdWxhOlxuICpcbiAqID4gTGVhcCB5ZWFyIG9jY3VyZXMgZXZlcnkgNCB5ZWFycywgZXhjZXB0IGZvciB5ZWFycyB0aGF0IGFyZSBkaXZpc2FibGUgYnkgMTAwIGFuZCBub3QgZGl2aXNhYmxlIGJ5IDQwMC5cbiAqID4gMSBtZWFuIHllYXIgPSAoMzY1KzEvNC0xLzEwMCsxLzQwMCkgZGF5cyA9IDM2NS4yNDI1IGRheXNcbiAqL1xuZXhwb3J0IGNvbnN0IGRheXNJblllYXIgPSAzNjUuMjQyNTtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1heFRpbWVcbiAqIEBzdW1tYXJ5IE1heGltdW0gYWxsb3dlZCB0aW1lLlxuICpcbiAqIEBleGFtcGxlXG4gKiBpbXBvcnQgeyBtYXhUaW1lIH0gZnJvbSBcIi4vY29uc3RhbnRzL2RhdGUtZm5zL2NvbnN0YW50c1wiO1xuICpcbiAqIGNvbnN0IGlzVmFsaWQgPSA4NjQwMDAwMDAwMDAwMDAxIDw9IG1heFRpbWU7XG4gKiAvLz0+IGZhbHNlXG4gKlxuICogbmV3IERhdGUoODY0MDAwMDAwMDAwMDAwMSk7XG4gKiAvLz0+IEludmFsaWQgRGF0ZVxuICovXG5leHBvcnQgY29uc3QgbWF4VGltZSA9IE1hdGgucG93KDEwLCA4KSAqIDI0ICogNjAgKiA2MCAqIDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW5UaW1lXG4gKiBAc3VtbWFyeSBNaW5pbXVtIGFsbG93ZWQgdGltZS5cbiAqXG4gKiBAZXhhbXBsZVxuICogaW1wb3J0IHsgbWluVGltZSB9IGZyb20gXCIuL2NvbnN0YW50cy9kYXRlLWZucy9jb25zdGFudHNcIjtcbiAqXG4gKiBjb25zdCBpc1ZhbGlkID0gLTg2NDAwMDAwMDAwMDAwMDEgPj0gbWluVGltZTtcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBuZXcgRGF0ZSgtODY0MDAwMDAwMDAwMDAwMSlcbiAqIC8vPT4gSW52YWxpZCBEYXRlXG4gKi9cbmV4cG9ydCBjb25zdCBtaW5UaW1lID0gLW1heFRpbWU7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIHdlZWsuXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJbldlZWsgPSA2MDQ4MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgZGF5LlxuICovXG5leHBvcnQgY29uc3QgbWlsbGlzZWNvbmRzSW5EYXkgPSA4NjQwMDAwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbGxpc2Vjb25kc0luTWludXRlXG4gKiBAc3VtbWFyeSBNaWxsaXNlY29uZHMgaW4gMSBtaW51dGVcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luTWludXRlID0gNjAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IE1pbGxpc2Vjb25kcyBpbiAxIGhvdXJcbiAqL1xuZXhwb3J0IGNvbnN0IG1pbGxpc2Vjb25kc0luSG91ciA9IDM2MDAwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaWxsaXNlY29uZHNJblNlY29uZFxuICogQHN1bW1hcnkgTWlsbGlzZWNvbmRzIGluIDEgc2Vjb25kXG4gKi9cbmV4cG9ydCBjb25zdCBtaWxsaXNlY29uZHNJblNlY29uZCA9IDEwMDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5ZZWFyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJblllYXIgPSA1MjU2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Nb250aFxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIG1vbnRoLlxuICovXG5leHBvcnQgY29uc3QgbWludXRlc0luTW9udGggPSA0MzIwMDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1pbnV0ZXNJbkRheVxuICogQHN1bW1hcnkgTWludXRlcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkRheSA9IDE0NDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtaW51dGVzSW5Ib3VyXG4gKiBAc3VtbWFyeSBNaW51dGVzIGluIDEgaG91ci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1pbnV0ZXNJbkhvdXIgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIG1vbnRoc0luUXVhcnRlclxuICogQHN1bW1hcnkgTW9udGhzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IG1vbnRoc0luUXVhcnRlciA9IDM7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBtb250aHNJblllYXJcbiAqIEBzdW1tYXJ5IE1vbnRocyBpbiAxIHllYXIuXG4gKi9cbmV4cG9ydCBjb25zdCBtb250aHNJblllYXIgPSAxMjtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHF1YXJ0ZXJzSW5ZZWFyXG4gKiBAc3VtbWFyeSBRdWFydGVycyBpbiAxIHllYXJcbiAqL1xuZXhwb3J0IGNvbnN0IHF1YXJ0ZXJzSW5ZZWFyID0gNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkhvdXJcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBob3VyLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luSG91ciA9IDM2MDA7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5NaW51dGVcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtaW51dGUuXG4gKi9cbmV4cG9ydCBjb25zdCBzZWNvbmRzSW5NaW51dGUgPSA2MDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbkRheVxuICogQHN1bW1hcnkgU2Vjb25kcyBpbiAxIGRheS5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJbkRheSA9IHNlY29uZHNJbkhvdXIgKiAyNDtcblxuLyoqXG4gKiBAY29uc3RhbnRcbiAqIEBuYW1lIHNlY29uZHNJbldlZWtcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSB3ZWVrLlxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luV2VlayA9IHNlY29uZHNJbkRheSAqIDc7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5ZZWFyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgeWVhci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblllYXIgPSBzZWNvbmRzSW5EYXkgKiBkYXlzSW5ZZWFyO1xuXG4vKipcbiAqIEBjb25zdGFudFxuICogQG5hbWUgc2Vjb25kc0luTW9udGhcbiAqIEBzdW1tYXJ5IFNlY29uZHMgaW4gMSBtb250aFxuICovXG5leHBvcnQgY29uc3Qgc2Vjb25kc0luTW9udGggPSBzZWNvbmRzSW5ZZWFyIC8gMTI7XG5cbi8qKlxuICogQGNvbnN0YW50XG4gKiBAbmFtZSBzZWNvbmRzSW5RdWFydGVyXG4gKiBAc3VtbWFyeSBTZWNvbmRzIGluIDEgcXVhcnRlci5cbiAqL1xuZXhwb3J0IGNvbnN0IHNlY29uZHNJblF1YXJ0ZXIgPSBzZWNvbmRzSW5Nb250aCAqIDM7XG4iLCJpbXBvcnQgeyBtaWxsaXNlY29uZHNJbkRheSB9IGZyb20gXCIuL2NvbnN0YW50cy5tanNcIjtcbmltcG9ydCB7IHN0YXJ0T2ZEYXkgfSBmcm9tIFwiLi9zdGFydE9mRGF5Lm1qc1wiO1xuaW1wb3J0IHsgZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyB9IGZyb20gXCIuL19saWIvZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcy5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuIFRoaXMgbWVhbnMgdGhhdCB0aGUgdGltZXMgYXJlIHJlbW92ZWRcbiAqIGZyb20gdGhlIGRhdGVzIGFuZCB0aGVuIHRoZSBkaWZmZXJlbmNlIGluIGRheXMgaXMgY2FsY3VsYXRlZC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGNhbGVuZGFyIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6NTk6MDAgYW5kIDMgSnVseSAyMDExIDAwOjAxOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAxXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZUxlZnQsIGRhdGVSaWdodCkge1xuICBjb25zdCBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGF0ZUxlZnQpO1xuICBjb25zdCBzdGFydE9mRGF5UmlnaHQgPSBzdGFydE9mRGF5KGRhdGVSaWdodCk7XG5cbiAgY29uc3QgdGltZXN0YW1wTGVmdCA9XG4gICAgK3N0YXJ0T2ZEYXlMZWZ0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5TGVmdCk7XG4gIGNvbnN0IHRpbWVzdGFtcFJpZ2h0ID1cbiAgICArc3RhcnRPZkRheVJpZ2h0IC0gZ2V0VGltZXpvbmVPZmZzZXRJbk1pbGxpc2Vjb25kcyhzdGFydE9mRGF5UmlnaHQpO1xuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyIGJlY2F1c2UgdGhlIG51bWJlciBvZlxuICAvLyBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50IChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mXG4gIC8vIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdCkuXG4gIHJldHVybiBNYXRoLnJvdW5kKCh0aW1lc3RhbXBMZWZ0IC0gdGltZXN0YW1wUmlnaHQpIC8gbWlsbGlzZWNvbmRzSW5EYXkpO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cztcbiIsImltcG9ydCB7IGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyB9IGZyb20gXCIuL2RpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cy5tanNcIjtcbmltcG9ydCB7IHRvRGF0ZSB9IGZyb20gXCIuL3RvRGF0ZS5tanNcIjtcblxuLyoqXG4gKiBAbmFtZSBkaWZmZXJlbmNlSW5EYXlzXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgZGF5IHBlcmlvZHMgYmV0d2VlbiB0d28gZGF0ZXMuIEZyYWN0aW9uYWwgZGF5cyBhcmVcbiAqIHRydW5jYXRlZCB0b3dhcmRzIHplcm8uXG4gKlxuICogT25lIFwiZnVsbCBkYXlcIiBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiBhIGxvY2FsIHRpbWUgaW4gb25lIGRheSB0byB0aGUgc2FtZVxuICogbG9jYWwgdGltZSBvbiB0aGUgbmV4dCBvciBwcmV2aW91cyBkYXkuIEEgZnVsbCBkYXkgY2FuIHNvbWV0aW1lcyBiZSBsZXNzIHRoYW5cbiAqIG9yIG1vcmUgdGhhbiAyNCBob3VycyBpZiBhIGRheWxpZ2h0IHNhdmluZ3MgY2hhbmdlIGhhcHBlbnMgYmV0d2VlbiB0d28gZGF0ZXMuXG4gKlxuICogVG8gaWdub3JlIERTVCBhbmQgb25seSBtZWFzdXJlIGV4YWN0IDI0LWhvdXIgcGVyaW9kcywgdXNlIHRoaXMgaW5zdGVhZDpcbiAqIGBNYXRoLnRydW5jKGRpZmZlcmVuY2VJbkhvdXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpLzI0KXwwYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gZGF0ZUxlZnQgLSBUaGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIGRhdGVSaWdodCAtIFRoZSBlYXJsaWVyIGRhdGVcbiAqXG4gKiBAcmV0dXJucyBUaGUgbnVtYmVyIG9mIGZ1bGwgZGF5cyBhY2NvcmRpbmcgdG8gdGhlIGxvY2FsIHRpbWV6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTEgMjM6MDA6MDAgYW5kIDIgSnVseSAyMDEyIDAwOjAwOjAwP1xuICogY29uc3QgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzo1OTowMCBhbmQgMyBKdWx5IDIwMTEgMDA6MDE6MDA/XG4gKiBjb25zdCByZXN1bHQgPSBkaWZmZXJlbmNlSW5EYXlzKFxuICogICBuZXcgRGF0ZSgyMDExLCA2LCAzLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDU5KVxuICogKVxuICogLy89PiAwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgZGF5cyBhcmUgYmV0d2VlblxuICogLy8gMSBNYXJjaCAyMDIwIDA6MDAgYW5kIDEgSnVuZSAyMDIwIDA6MDAgP1xuICogLy8gTm90ZTogYmVjYXVzZSBsb2NhbCB0aW1lIGlzIHVzZWQsIHRoZVxuICogLy8gcmVzdWx0IHdpbGwgYWx3YXlzIGJlIDkyIGRheXMsIGV2ZW4gaW5cbiAqIC8vIHRpbWUgem9uZXMgd2hlcmUgRFNUIHN0YXJ0cyBhbmQgdGhlXG4gKiAvLyBwZXJpb2QgaGFzIG9ubHkgOTIqMjQtMSBob3Vycy5cbiAqIGNvbnN0IHJlc3VsdCA9IGRpZmZlcmVuY2VJbkRheXMoXG4gKiAgIG5ldyBEYXRlKDIwMjAsIDUsIDEpLFxuICogICBuZXcgRGF0ZSgyMDIwLCAyLCAxKVxuICogKVxuICogLy89PiA5MlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZmVyZW5jZUluRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSB7XG4gIGNvbnN0IF9kYXRlTGVmdCA9IHRvRGF0ZShkYXRlTGVmdCk7XG4gIGNvbnN0IF9kYXRlUmlnaHQgPSB0b0RhdGUoZGF0ZVJpZ2h0KTtcblxuICBjb25zdCBzaWduID0gY29tcGFyZUxvY2FsQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCk7XG4gIGNvbnN0IGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoX2RhdGVMZWZ0LCBfZGF0ZVJpZ2h0KSk7XG5cbiAgX2RhdGVMZWZ0LnNldERhdGUoX2RhdGVMZWZ0LmdldERhdGUoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKTtcblxuICAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgZGF5cyAtIGRpZmYgaW4gY2FsZW5kYXIgZGF5cykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBkYXkgaXMgbm90IGZ1bGxcbiAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gIGNvbnN0IGlzTGFzdERheU5vdEZ1bGwgPSBOdW1iZXIoXG4gICAgY29tcGFyZUxvY2FsQXNjKF9kYXRlTGVmdCwgX2RhdGVSaWdodCkgPT09IC1zaWduLFxuICApO1xuICBjb25zdCByZXN1bHQgPSBzaWduICogKGRpZmZlcmVuY2UgLSBpc0xhc3REYXlOb3RGdWxsKTtcbiAgLy8gUHJldmVudCBuZWdhdGl2ZSB6ZXJvXG4gIHJldHVybiByZXN1bHQgPT09IDAgPyAwIDogcmVzdWx0O1xufVxuXG4vLyBMaWtlIGBjb21wYXJlQXNjYCBidXQgdXNlcyBsb2NhbCB0aW1lIG5vdCBVVEMsIHdoaWNoIGlzIG5lZWRlZFxuLy8gZm9yIGFjY3VyYXRlIGVxdWFsaXR5IGNvbXBhcmlzb25zIG9mIFVUQyB0aW1lc3RhbXBzIHRoYXQgZW5kIHVwXG4vLyBoYXZpbmcgdGhlIHNhbWUgcmVwcmVzZW50YXRpb24gaW4gbG9jYWwgdGltZSwgZS5nLiBvbmUgaG91ciBiZWZvcmVcbi8vIERTVCBlbmRzIHZzLiB0aGUgaW5zdGFudCB0aGF0IERTVCBlbmRzLlxuZnVuY3Rpb24gY29tcGFyZUxvY2FsQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpIHtcbiAgY29uc3QgZGlmZiA9XG4gICAgZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIGRhdGVSaWdodC5nZXRGdWxsWWVhcigpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0RGF0ZSgpIC0gZGF0ZVJpZ2h0LmdldERhdGUoKSB8fFxuICAgIGRhdGVMZWZ0LmdldEhvdXJzKCkgLSBkYXRlUmlnaHQuZ2V0SG91cnMoKSB8fFxuICAgIGRhdGVMZWZ0LmdldE1pbnV0ZXMoKSAtIGRhdGVSaWdodC5nZXRNaW51dGVzKCkgfHxcbiAgICBkYXRlTGVmdC5nZXRTZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0U2Vjb25kcygpIHx8XG4gICAgZGF0ZUxlZnQuZ2V0TWlsbGlzZWNvbmRzKCkgLSBkYXRlUmlnaHQuZ2V0TWlsbGlzZWNvbmRzKCk7XG5cbiAgaWYgKGRpZmYgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKGRpZmYgPiAwKSB7XG4gICAgcmV0dXJuIDE7XG4gICAgLy8gUmV0dXJuIDAgaWYgZGlmZiBpcyAwOyByZXR1cm4gTmFOIGlmIGRpZmYgaXMgTmFOXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGRpZmY7XG4gIH1cbn1cblxuLy8gRmFsbGJhY2sgZm9yIG1vZHVsYXJpemVkIGltcG9ydHM6XG5leHBvcnQgZGVmYXVsdCBkaWZmZXJlbmNlSW5EYXlzO1xuIiwiaW1wb3J0IHsgdG9EYXRlIH0gZnJvbSBcIi4vdG9EYXRlLm1qc1wiO1xuXG4vKipcbiAqIEBuYW1lIHN0YXJ0T2ZEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIGRheSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHR5cGVQYXJhbSBEYXRlVHlwZSAtIFRoZSBgRGF0ZWAgdHlwZSwgdGhlIGZ1bmN0aW9uIG9wZXJhdGVzIG9uLiBHZXRzIGluZmVycmVkIGZyb20gcGFzc2VkIGFyZ3VtZW50cy4gQWxsb3dzIHRvIHVzZSBleHRlbnNpb25zIGxpa2UgW2BVVENEYXRlYF0oaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL3V0YykuXG4gKlxuICogQHBhcmFtIGRhdGUgLSBUaGUgb3JpZ2luYWwgZGF0ZVxuICpcbiAqIEByZXR1cm5zIFRoZSBzdGFydCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZnVuY3Rpb24gc3RhcnRPZkRheShkYXRlKSB7XG4gIGNvbnN0IF9kYXRlID0gdG9EYXRlKGRhdGUpO1xuICBfZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIF9kYXRlO1xufVxuXG4vLyBGYWxsYmFjayBmb3IgbW9kdWxhcml6ZWQgaW1wb3J0czpcbmV4cG9ydCBkZWZhdWx0IHN0YXJ0T2ZEYXk7XG4iLCIvKipcbiAqIEBuYW1lIHRvRGF0ZVxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgbm9uZSBvZiB0aGUgYWJvdmUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIEludmFsaWQgRGF0ZS5cbiAqXG4gKiAqKk5vdGUqKjogKmFsbCogRGF0ZSBhcmd1bWVudHMgcGFzc2VkIHRvIGFueSAqZGF0ZS1mbnMqIGZ1bmN0aW9uIGlzIHByb2Nlc3NlZCBieSBgdG9EYXRlYC5cbiAqXG4gKiBAdHlwZVBhcmFtIERhdGVUeXBlIC0gVGhlIGBEYXRlYCB0eXBlLCB0aGUgZnVuY3Rpb24gb3BlcmF0ZXMgb24uIEdldHMgaW5mZXJyZWQgZnJvbSBwYXNzZWQgYXJndW1lbnRzLiBBbGxvd3MgdG8gdXNlIGV4dGVuc2lvbnMgbGlrZSBbYFVUQ0RhdGVgXShodHRwczovL2dpdGh1Yi5jb20vZGF0ZS1mbnMvdXRjKS5cbiAqXG4gKiBAcGFyYW0gYXJndW1lbnQgLSBUaGUgdmFsdWUgdG8gY29udmVydFxuICpcbiAqIEByZXR1cm5zIFRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENsb25lIHRoZSBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKG5ldyBEYXRlKDIwMTQsIDEsIDExLCAxMSwgMzAsIDMwKSlcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbnZlcnQgdGhlIHRpbWVzdGFtcCB0byBkYXRlOlxuICogY29uc3QgcmVzdWx0ID0gdG9EYXRlKDEzOTIwOTg0MzAwMDApXG4gKiAvLz0+IFR1ZSBGZWIgMTEgMjAxNCAxMTozMDozMFxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9EYXRlKGFyZ3VtZW50KSB7XG4gIGNvbnN0IGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKFxuICAgIGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fFxuICAgICh0eXBlb2YgYXJndW1lbnQgPT09IFwib2JqZWN0XCIgJiYgYXJnU3RyID09PSBcIltvYmplY3QgRGF0ZV1cIilcbiAgKSB7XG4gICAgLy8gUHJldmVudCB0aGUgZGF0ZSB0byBsb3NlIHRoZSBtaWxsaXNlY29uZHMgd2hlbiBwYXNzZWQgdG8gbmV3IERhdGUoKSBpbiBJRTEwXG4gICAgcmV0dXJuIG5ldyBhcmd1bWVudC5jb25zdHJ1Y3RvcigrYXJndW1lbnQpO1xuICB9IGVsc2UgaWYgKFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJudW1iZXJcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IE51bWJlcl1cIiB8fFxuICAgIHR5cGVvZiBhcmd1bWVudCA9PT0gXCJzdHJpbmdcIiB8fFxuICAgIGFyZ1N0ciA9PT0gXCJbb2JqZWN0IFN0cmluZ11cIlxuICApIHtcbiAgICAvLyBUT0RPOiBDYW4gd2UgZ2V0IHJpZCBvZiBhcz9cbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIC8vIFRPRE86IENhbiB3ZSBnZXQgcmlkIG9mIGFzP1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG59XG5cbi8vIEZhbGxiYWNrIGZvciBtb2R1bGFyaXplZCBpbXBvcnRzOlxuZXhwb3J0IGRlZmF1bHQgdG9EYXRlO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHtcbmZvcm1hdCwgZGlmZmVyZW5jZUluRGF5c1xufSBmcm9tICdkYXRlLWZucydcblxuaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCB7XG4gICAgc3RhcnRCdG5FdmVudEhhbmRsZXIsXG4gICAgdGFza0l0ZW1zQ29udGFpbmVyLFxuY3JlYXRlVGFza0l0ZW0sXG5zdGFydFN0b3BCdXR0b24sXG5jcmVhdGVGb3JtRGlhbG9nLFxub3BlbkZvcm1EaWFsb2csXG5cbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIsXG51cGRhdGVUYXNrRWxlbWVudHMsXG51cGRhdGVUYXNrc0NvbnRhaW5lcixcbmNsb3NlRGlhbG9nLFxudXBkYXRlRm9ybURpYWxvZyxcbmNsb3NlQ3JlYXRlRGlhbG9nLFxuY2xvc2VVcGRhdGVEaWFsb2csXG5vcGVuVXBkYXRlRm9ybURpYWxvZyxcbmNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nLFxuY2xvc2VDcmVhdGVQcm9qZWN0RGlhbG9nLFxuY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCxcblxufSBmcm9tICcuL3VzZXItaW50ZXJmYWNlJ1xuXG4vLyBpbXBvcnQgb2JqZWN0IHJlbGF0ZWQgbW9kdWxlc1xuaW1wb3J0IHtcbmNyZWF0ZVRhc2tPYmplY3QsXG4gICAgYWRkVGFza1RvQW5BcnJheSxcbiAgICBjcmVhdGVBcnJheUZhY3RvcnksXG4gICAgZG93blNoaWZ0SWRUb0FycmF5SW5kZXgsXG4gICAgXG59IGZyb20gJy4vdGFzay1vYmplY3QtY29tcG9uZW50J1xuXG4vLyBhbGwgZG9tIHJlbGF0ZWQgZnVuY3Rpb25zIGdvIGhlcmVcbi8vIGFwcGVuZCB0YXNrIGl0ZW1zIGNvbnRhaW5lciB0byBvdXRwdXRcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5ib2R5O1xuY29uc3Qgb3V0cHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ291dHB1dCcpXG5cbm91dHB1dC5hcHBlbmRDaGlsZCh0YXNrSXRlbXNDb250YWluZXIoKSlcblxuLy8gYXBwZW5kIHByb2plY3QgZmlsdGVyIGZlYXR1cmUgdG8gZG9tXG5vdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZpbHRlclNlbGVjdCgpKVxuXG4vLyBhcHBlbmQgc3RhcnQgc3RvcCBidXR0b24gdG8gYm9keSBcbm91dHB1dC5hcHBlbmRDaGlsZChzdGFydFN0b3BCdXR0b24oKSlcblxuXG4vLyBhcHBlbmQgZm9ybSB0byBodG1sXG5ib2R5Lmluc2VydEJlZm9yZShjcmVhdGVGb3JtRGlhbG9nKCksIG91dHB1dClcbmJvZHkuaW5zZXJ0QmVmb3JlKHVwZGF0ZUZvcm1EaWFsb2coKSwgb3V0cHV0KVxuYm9keS5pbnNlcnRCZWZvcmUoY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSwgb3V0cHV0KVxuLy8gYm9keS5hcHBlbmRDaGlsZCgoKSlcbi8vIGJvZHkuYXBwZW5kQ2hpbGQoY3JlYXRlUHJvamVjdEZvcm1EaWFsb2coKSlcblxuXG5cblxuLy8gc3RhcnQgYnRuIGV2ZW50IGhhbmRsZXJcbnN0YXJ0QnRuRXZlbnRIYW5kbGVyKClcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG4vLyBldmVudCBoYW5kbGVyIGZvciBpbml0aWF0aW5nIHVwZGF0aW5nIHRhc2sgZWxlbWVudHNcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxuXG5wYXJlbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudGFzay1pdGVtJykpIHtcbi8vIGNvbnN0IHNoaWZ0ZWRJbmRleCA9IGRvd25TaGlmdElkVG9BcnJheUluZGV4KGV2ZW50LnRhcmdldC5wYXJlbnROb2RlLmlkKTtcbmNvbnN0IGRvbVRhc2tJZCA9ICtldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuXG5jb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbmNvbnN0IGRhdGFBcnJheSA9IEpTT04ucGFyc2Uoc3RvcmVkRGF0YSk7XG4vLyBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheVtzaGlmdGVkSW5kZXhdO1xuY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXkuZmluZChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpXG5cbi8vIHNldCB0aGUgY3VycmVudCB0YXNrIG9iamVjdCBpbmRleCB2YWx1ZSB0byBsb2NhbCBzdG9yYWdlXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY3VycmVudFRhc2snLCBkb21UYXNrSWQpXG5cbi8vIHJldHJpZXZlIGxvY2FsIHN0b3JhZ2UgdmFsdWVzIHRvIHBvcHVsYXRlIGRvbSBlbGVtZW50cyBcbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuZGVzY3JpcHRpb24udmFsdWUgPSBzZWxlY3RlZE9iamVjdC5kZXNjcmlwdGlvblxuY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHJvamVjdCcpO1xucHJvamVjdC52YWx1ZSA9IHNlbGVjdGVkT2JqZWN0LnByb2plY3Q7XG5jb25zdCBkYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kYXRlJyk7XG5kYXRlLnZhbHVlID0gc2VsZWN0ZWRPYmplY3QuZHVlRGF0ZTtcblxub3BlblVwZGF0ZUZvcm1EaWFsb2coKVxuXG4gICAgfVxuXG4gICAgaWYgKGV2ZW50LnRhcmdldC5tYXRjaGVzKCcudGFzay1jb21wb25lbnQnKSAmJlxuICAgIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9PT0gJ0NvbXBsZXRlZCcpIHtcblxuICAgICAgICAvLyBjb25zdCBzaGlmdGVkSW5kZXggPSBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZCk7XG4gICAgICAgIGNvbnN0IGRvbVRhc2tJZCA9ICtldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcblxuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXkuZmluZChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpO1xuICAgICAgICBcbnNlbGVjdGVkT2JqZWN0LmlzQ29tcGxldGUgPSBmYWxzZTtcbi8vIGV2ZW50LnRhcmdldC50ZXh0Q29udGVudCA9ICdmYWxzZSdcblxuLy8gVXBkYXRlIHRoZSBkYXRhQXJyYXkgd2l0aCB0aGUgbW9kaWZpZWQgc2VsZWN0ZWRPYmplY3Rcbi8vIGRhdGFBcnJheVtdID0gc2VsZWN0ZWRPYmplY3Q7XG5sZXQgaW5kZXggPSBkYXRhQXJyYXkuZmluZEluZGV4KG9iaiA9PiBvYmouaWQgPT09IGRvbVRhc2tJZCkgXG5kYXRhQXJyYXlbaW5kZXhdID0gc2VsZWN0ZWRPYmplY3Q7XG5cbi8vIFN0cmluZ2lmeSB0aGUgZGF0YUFycmF5IGFuZCBzdG9yZSBpdCBiYWNrIGludG8gbG9jYWxTdG9yYWdlXG5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYWxsVGFza3MnLCBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpKTtcblxucmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xudXBkYXRlVGFza3NDb250YWluZXIoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG4gICAgfSBcbiAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJy50YXNrLWNvbXBvbmVudCcpICYmXG4gICAgZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID09PSAnTWFyayBDb21wbGV0ZScpIHtcbiAgICAgICAgY29uc3Qgc2hpZnRlZEluZGV4ID0gZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpO1xuICAgICAgICBjb25zdCBkb21UYXNrSWQgPSArZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQ7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgLy8gY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XTtcbmNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5LmZpbmQob2JqID0+IG9iai5pZCA9PT0gZG9tVGFza0lkKVxuXG5cbnNlbGVjdGVkT2JqZWN0LmlzQ29tcGxldGUgPSB0cnVlO1xuLy8gZXZlbnQudGFyZ2V0LnRleHRDb250ZW50ID0gJ3RydWUnXG5cbi8vIFVwZGF0ZSB0aGUgZGF0YUFycmF5IHdpdGggdGhlIG1vZGlmaWVkIHNlbGVjdGVkT2JqZWN0XG4vLyBkYXRhQXJyYXlbc2hpZnRlZEluZGV4XSA9IHNlbGVjdGVkT2JqZWN0O1xubGV0IGluZGV4ID0gZGF0YUFycmF5LmZpbmRJbmRleChvYmogPT4gb2JqLmlkID09PSBkb21UYXNrSWQpIFxuZGF0YUFycmF5W2luZGV4XSA9IHNlbGVjdGVkT2JqZWN0O1xuXG4vLyBTdHJpbmdpZnkgdGhlIGRhdGFBcnJheSBhbmQgc3RvcmUgaXQgYmFjayBpbnRvIGxvY2FsU3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KSk7XG5cbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKTtcblxuXG4gICAgfVxufSlcbn1cbnVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKClcblxuXG5cblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGFkZCBvYmplY3QgdG8gbG9jYWwgc3RvcmFnZSBhcnJheVxuZnVuY3Rpb24gYWRkT2JqZWN0VG9Mb2NhbFN0b3JhZ2VBcnJheShrZXksIG9iamVjdCkge1xuICAgIC8vIGNoZWNrcyBpZiBrZXkgZXhpc3RzIGluIHN0b3JhZ2Ugb3IgY3JlYXRlcyBvbmUgd2l0aCBlbXB0eSBhcnJheVxuICAgIC8vIGFuZCBzdG9yZXMgaXQgaW4gYSB2YXJpYWJsZVxuY29uc3QgZXhpc3RpbmdBcnJheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSkgfHwgW107XG4vLyBwdXNoIHRoZSBvYmplY3QgdG8gYW4gYXJyYXkgaW4gc3RvcmFnZVxuZXhpc3RpbmdBcnJheS5wdXNoKG9iamVjdCk7XG4vLyBzZXQgdGhlIGFycmF5IHdpdGggbmV3IG9iamVjdCBpbiBrZXkgb2Ygc3RvcmFnZSBcbmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkoZXhpc3RpbmdBcnJheSkpXG5cbn1cblxuLy8gZnVuY3Rpb24gdG8gaGFuZGxlIGZvcm0gc3VibWl0XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBkb21cbiAgICAgICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0MS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGF0ZScpO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGlucHV0My52YWx1ZTtcblxuICAgICAgICAgICAgY29uc3QgZGF5c0xlZnQgPSBkYXlzTGVmdFVudGlsRHVlRGF0ZShkYXRlKVxuXG4gICAgICAgIC8vIGNyZWF0ZSBuZXcgdGFzayBvYmplY3RcbiAgICAgICAgY29uc3QgdGFzayA9IGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdCwgZGF0ZSlcbiAgICAgICAgLy8gdGFzay5kYXlzTGVmdCA9IGRheXNMZWZ0O1xuXG4gICAgICAgIC8vIGFkZFRhc2tUb0FuQXJyYXkodGFzayxhbGxUYXNrc0FycmF5KVxuICAgICAgICAvLyBhbGxUYXNrc0FycmF5LmFkZEl0ZW0odGFzaylcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzQXJyYXknLCBKU09OLnN0cmluZ2lmeSh0YXNrKSlcbmFkZE9iamVjdFRvTG9jYWxTdG9yYWdlQXJyYXkoJ2FsbFRhc2tzJywgdGFzaylcblxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSkpO1xuXG5cbiAgICAgICAgLy8gdXBkYXRlIGRvbSB3aXRoIG5ldyB0YXNrXG4gICAgICAgICAgICAvLyB1cGRhdGVUYXNrc0NvbnRhaW5lcihhbGxUYXNrc0FycmF5LmdldEFycmF5KCkpXG4gICAgICAgICAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrcykpXG4gICAgICAgIFxuICAgICAgICAgICAgLy8gcmVzZXQgZm9ybSBpbnB1dHNcbiAgICAgICAgaW5wdXQxLnZhbHVlID0gJyc7XG4gICAgICAgIGlucHV0Mi52YWx1ZSA9ICcnOyAgICAgICAgXG5cbiAgICAgICAgY2xvc2VDcmVhdGVEaWFsb2coKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgIFxuICAgICAgICAgICAgLy8gZXZlbnQgaGFuZGxlciBmb3Igc3VibWl0IHVwZGF0ZVxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlVXBkYXRlRm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgICByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gaW5wdXQxLnZhbHVlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBpbnB1dDIudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kYXRlJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGlucHV0My52YWx1ZTtcbmNvbnN0IGRheXNMZWZ0ID0gZGF5c0xlZnRVbnRpbER1ZURhdGUoZGF0ZSlcbi8vIGdldCBpZCBvZiBjdXJyZW50IHRhc2tcbmNvbnN0IGN1cnJlbnRUYXNrSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFRhc2snKVxuXG4vLyB1cGRhdGUgdGhlIHRhc2sgb2JqZWN0IGluIGxvY2FsIHNzdG9yYWdlXG4gICAgICAgIFxuICAgICAgICAvLyBnZXQgdGhlIGFsbCB0YXNrcyBhcnJheSBzdG9yaW5nIHRhc2sgb2JqZWN0c1xuICAgICAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICAgICAgLy8gY29udmVydCBzdHJpbmdlZCBhcnJheSB0byBub3JtYWwgYXJyYXlcbiAgICAgICAgY29uc3QgZGF0YUFycmF5ID0gSlNPTi5wYXJzZShzdG9yZWREYXRhKTtcbiAgICAgICAgLy8gZ2V0IHRoZSBjb3JyZWxhdGVkIHRhc2sgb2JqZWN0XG4gICAgICAgIC8vIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W2N1cnJlbnRUYXNrXTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRPYmplY3QgPSBkYXRhQXJyYXkuZmluZChvYmogPT4gb2JqLmlkID09PSArY3VycmVudFRhc2tJZClcblxuICAgICAgICAvLyBzZXQgaW5wdXQgdmFsdWVzIHRvIGxvY2FsIHN0b3JhZ2VcbiBzZWxlY3RlZE9iamVjdC5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuIHNlbGVjdGVkT2JqZWN0LnByb2plY3QgPSBwcm9qZWN0O1xuICAgIHNlbGVjdGVkT2JqZWN0LmR1ZURhdGUgPSBkYXRlO1xuICAgIHNlbGVjdGVkT2JqZWN0LmRheXNMZWZ0ID0gZGF5c0xlZnQ7XG5cbiAgICBcbi8vIGNvbnZlcnQgYXJyYXkgYmFjayBpbnRvIHN0cmluZ1xuY29uc3QgdXBkYXRlZEFycmF5U3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoZGF0YUFycmF5KVxuXG4vLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuXG5jb25zb2xlLmxvZyhzZWxlY3RlZE9iamVjdCk7XG5jb25zb2xlLmxvZyhkYXRhQXJyYXkpO1xuXG5cblxuICAgICAgICB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhbGxUYXNrcycpKSlcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaW5wdXQxLnZhbHVlID0gJyc7XG4gICAgICAgICAgICBpbnB1dDIudmFsdWUgPSAnJzsgICAgICAgIFxuICAgIFxuICAgICAgICAgICAgY2xvc2VVcGRhdGVEaWFsb2coKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cblxuLy8gYXR0YXRjaCBldmVudCBsaXN0ZW5lciBhbmQgaGFuZGxlciB0byBjcmVhdGUgYW5kIHVwZGF0ZSBmb3JtIHN1Ym1pdCAgICBcbiAgICBjb25zdCBjcmVhdGVGb3JtID1kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWZvcm0nKTtcbiAgICBjcmVhdGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQ3JlYXRlRm9ybVN1Ym1pdCkgICAgXG4gICAgY29uc3QgdXBkYXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZm9ybScpO1xudXBkYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZVVwZGF0ZUZvcm1TdWJtaXQpXG4gICAgXG4vLyBmdW5jdGlvbiB0byBwb3B1bGF0ZSBmb3JtIGRpYWxvZyB3aXRoIGNsaWNrZWQgdGFza1xuZnVuY3Rpb24gcG9wdWxhdGVGb3JtSW5wdXRzKGFycmF5SW5kZXgpIHtcbmxldCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRlc2NyaXB0aW9uJyk7XG5pbnB1dDEudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUYXNrcylbYXJyYXlJbmRleF0uZGVzY3JpcHRpb247XG5cbmxldCBpbnB1dDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXByb2plY3QnKTtcbmlucHV0Mi52YWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGFsbFRhc2tzKVthcnJheUluZGV4XS5wcm9qZWN0O1xuXG5jb25zb2xlLmxvZyhsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhbGxUYXNrc1thcnJheUluZGV4XSkpO1xufVxuXG4vLyBldmVudCBoYW5kbGVyIGZvciBjbG9zaW5nIGNyZWF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY2xvc2VDcmVhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNsb3NlJyk7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbmNsb3NlQ3JlYXRlRGlhbG9nKCk7XG4gICAgfSlcbn1cbmNsb3NlQ3JlYXRlRm9ybURpYWxvZygpO1xuXG4vLyBldmVudCBoYW5kbGVyIGZvciBjbG9zaW5nIHVwZGF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY2xvc2VVcGRhdGVGb3JtRGlhbG9nKCkge1xuICAgIGNvbnN0IHVwZGF0ZURpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd1cGRhdGUtZGlhbG9nJylcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1jbG9zZScpO1xuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIFxuY2xvc2VVcGRhdGVEaWFsb2coKTtcbiAgICB9KVxuLy8gcnVsZSBmb3IgZXNjYXBlIGtleSBldmVudCBcbnVwZGF0ZURpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGV2ZW50KSA9PiB7XG5pZiAoZXZlbnQua2V5ID09PSAnRXNjYXBlJyB8fCBldmVudC5rZXkgPT09ICdFc2MnKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNsb3NlVXBkYXRlRGlhbG9nKClcbn1cbi8vIGNoZWNrIGlmIGV2ZW50IHRhcmdldCBpcyBjbGljayBvbiBiYWNrZHJvcFxudXBkYXRlRGlhbG9nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG5pZiAoZXZlbnQudGFyZ2V0ID09PSB1cGRhdGVEaWFsb2cpIHtcbmNsb3NlVXBkYXRlRGlhbG9nKClcblxufVxuXG59KVxuXG5cblxuXG59KVxuXG5cblxufVxuY2xvc2VVcGRhdGVGb3JtRGlhbG9nKClcblxuLy8gZXZlbnQgaGFuZGxlciBmb3IgZGVsZXRpbmcgYSB0YXNrIG9iamVjdFxuY29uc3QgZGVsZXRlQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZWxldGUnKTtcbmRlbGV0ZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuXG4gICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xuICAgIGNvbnN0IGN1cnJlbnRUYXNrID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1cnJlbnRUYXNrJyk7XG4vLyBjb25zdCBkb21UYXNrSWQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZS5pZDtcbiAgICBjb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbiAgICBjb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuICAgIC8vIGNvbnN0IHNlbGVjdGVkT2JqZWN0ID0gZGF0YUFycmF5W2N1cnJlbnRUYXNrXTtcbiAgICBjb25zdCBzZWxlY3RlZE9iamVjdCA9IGRhdGFBcnJheS5maW5kKG9iaiA9PiBvYmouaWQgPT09ICtjdXJyZW50VGFzaylcbi8vIHJlbW92ZSBvYmplY3QgZnJvbSBhcnJheVxuZGF0YUFycmF5LnNwbGljZShzZWxlY3RlZE9iamVjdCwxKVxuY29uc29sZS5sb2coZGF0YUFycmF5KTtcblxuLy8gY29udmVydCBhcnJheSBiYWNrIGludG8gc3RyaW5nXG5jb25zdCB1cGRhdGVkQXJyYXlTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkYXRhQXJyYXkpXG4gICAgICAgXG4vLyBzdG9yZSB0aGUgdXBkYXRlZCBhcnJheSBiYWNrIGludG8gbG9jYWwgc3RvcmFnZVxubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FsbFRhc2tzJywgdXBkYXRlZEFycmF5U3RyaW5nKVxuXG4vLyByZW5kZXIgZG9tIHdpdGggdXBkYXRlZCB0YXNrIG9iamVjdHNcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKVxuXG5cbmNsb3NlVXBkYXRlRGlhbG9nKClcblxufSlcblxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoZWNrIGlmIHN0b3JhZ2UgaXMgYXZhaWxhYmxlIFxuZnVuY3Rpb24gc3RvcmFnZUF2YWlsYWJsZSh0eXBlKSB7XG4gICAgbGV0IHN0b3JhZ2U7XG4gICAgdHJ5IHtcbiAgICAgIHN0b3JhZ2UgPSB3aW5kb3dbdHlwZV07XG4gICAgICBjb25zdCB4ID0gXCJfX3N0b3JhZ2VfdGVzdF9fXCI7XG4gICAgICBzdG9yYWdlLnNldEl0ZW0oeCwgeCk7XG4gICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0oeCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBlIGluc3RhbmNlb2YgRE9NRXhjZXB0aW9uICYmXG4gICAgICAgIC8vIGV2ZXJ5dGhpbmcgZXhjZXB0IEZpcmVmb3hcbiAgICAgICAgKGUuY29kZSA9PT0gMjIgfHxcbiAgICAgICAgICAvLyBGaXJlZm94XG4gICAgICAgICAgZS5jb2RlID09PSAxMDE0IHx8XG4gICAgICAgICAgLy8gdGVzdCBuYW1lIGZpZWxkIHRvbywgYmVjYXVzZSBjb2RlIG1pZ2h0IG5vdCBiZSBwcmVzZW50XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNlcHQgRmlyZWZveFxuICAgICAgICAgIGUubmFtZSA9PT0gXCJRdW90YUV4Y2VlZGVkRXJyb3JcIiB8fFxuICAgICAgICAgIC8vIEZpcmVmb3hcbiAgICAgICAgICBlLm5hbWUgPT09IFwiTlNfRVJST1JfRE9NX1FVT1RBX1JFQUNIRURcIikgJiZcbiAgICAgICAgLy8gYWNrbm93bGVkZ2UgUXVvdGFFeGNlZWRlZEVycm9yIG9ubHkgaWYgdGhlcmUncyBzb21ldGhpbmcgYWxyZWFkeSBzdG9yZWRcbiAgICAgICAgc3RvcmFnZSAmJlxuICAgICAgICBzdG9yYWdlLmxlbmd0aCAhPT0gMFxuICAgICAgKTtcbiAgICB9XG4gIH1cbiAgXG4gIGlmIChzdG9yYWdlQXZhaWxhYmxlKFwibG9jYWxTdG9yYWdlXCIpKSB7XG4gICAgLy8gWWlwcGVlISBXZSBjYW4gdXNlIGxvY2FsU3RvcmFnZSBhd2Vzb21lbmVzc1xuICAgIGNvbnNvbGUubG9nKCdZaXBwZWUnKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBUb28gYmFkLCBubyBsb2NhbFN0b3JhZ2UgZm9yIHVzXG4gICAgY29uc29sZS5sb2coJ051cHBlZScpO1xuICB9XG4gIFxuICBcbi8vIHNlbGVjdCBvcHRpb24gZm9ybSBkcm9wZG93biBpbXBsZW1lbnRhdGlvbiBcblxuY29uc3Qgc2VsZWN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpXG5jb25zdCBwcm9qZWN0T3B0aW9ucyA9IFsnSmF2YXNjcmlwdCcsICdQeXRob24nLCAnUnVieSddXG5cbmZ1bmN0aW9uIHNldFByb2plY3RPcHRpb25zKCkge1xucHJvamVjdE9wdGlvbnMuZm9yRWFjaChwcm9qZWN0T3B0aW9uID0+IHtcbmNvbnN0IG9wdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxub3B0aW9uRWxlbWVudC52YWx1ZSA9IHByb2plY3RPcHRpb247XG5vcHRpb25FbGVtZW50LnRleHQgPSBwcm9qZWN0T3B0aW9uO1xuXG5zZWxlY3RFbGVtZW50LmFwcGVuZENoaWxkKG9wdGlvbkVsZW1lbnQpXG59KTtcbn1cblxuc2VsZWN0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbmNvbnN0IHNlbGVjdGVkRWxlbWVudCA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbmlmIChzZWxlY3RlZEVsZW1lbnQgPT09ICdjcmVhdGUtcHJvamVjdCcpe1xub3BlbkNyZWF0ZVByb2plY3RGb3JtRGlhbG9nKClcblxufVxuXG59KVxuLy8gaGFuZGxlIGNyZWF0ZSBwcm9qZWN0IGZvcm0gc3VibWl0XG5jb25zdCBjcmVhdGVQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdC1mb3JtJylcbmNyZWF0ZVByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbmNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWNyZWF0ZS1wcm9qZWN0LW5hbWUnKS52YWx1ZTtcbnByb2plY3RPcHRpb25zLnB1c2gocHJvamVjdE5hbWVJbnB1dClcbi8vIGNhbGwgZnVuY3Rpb24gdG8gdXBkYXRlIHByb2plY3Qgb3B0aW9ucyBcbnNldFByb2plY3RPcHRpb25zKCk7XG5cbmNsb3NlQ3JlYXRlUHJvamVjdERpYWxvZygpXG5cbn0pXG5zZXRQcm9qZWN0T3B0aW9ucygpO1xuXG4vLyBmdW5jdGlvbiB0byBjbGVhciBsb2NhbCBzdG9yYWdlXG5mdW5jdGlvbiBjbGVhckxvY2FsU3RvcmFnZSgpIHtcbiAgICBsb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbiAgICBcbn1cbi8vIGNsZWFyTG9jYWxTdG9yYWdlKClcblxuLy8gY2FsbCBvbiBwYWdlIGxvYWQgdG8gZGlzcGxheSB0YXNrcyBpbiBsb2NhbCBzdG9yYWdlXG4vLyB1cGRhdGVUYXNrc0NvbnRhaW5lcihKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5hbGxUYXNrc0FycmF5KSlcbnVwZGF0ZVRhc2tzQ29udGFpbmVyKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJykpKVxuXG4vLyBmdW5jdGlvbiB0byBzdGFydCB0aW1lciB0aGF0IHRha2VzIG9iamVjdCBhcyBhcmd1bWVudFxuZnVuY3Rpb24gc3RhcnRUaW1lcihvYmplY3QpIHtcblxufVxuXG4vLyBldmVudCBsaXN0ZW5lciBhbmQgaGFuZGxlciBmb3IgcHJvamVjdCBmaWx0ZXIgZmVhdHVyZVxuY29uc3QgcHJvamVjdEZpbHRlclNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LWZpbHRlci1jb250YWluZXInKVxuZnVuY3Rpb24gaGFuZGxlUHJvamVjdEZpbHRlclNlbGVjdCgpIHtcbiAgICBcbiAgICAvLyBnZXQgc2VsZWN0IGVsZW1lbnRcbmNvbnN0IHNlbGVjdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1maWx0ZXInKVxuLy8gcmVtb3ZlIGNoaWxkcmVuIG9wdGlvbiBlbGVtZW50cyBcbmZvciAobGV0IGkgPSBzZWxlY3RFbGVtZW50LmNoaWxkcmVuLmxlbmd0aCAtMTsgaSA+PSAyOyBpLS0pIHtcbmNvbnN0IGNoaWxkID0gc2VsZWN0RWxlbWVudC5jaGlsZHJlbltpXTtcbnNlbGVjdEVsZW1lbnQucmVtb3ZlQ2hpbGQoY2hpbGQpXG5cbn1cblxuLy8gZ2V0IGxvY2FsIHN0b3JhZ2UgYXJyYXkgb2YgdGFzayBvYmplY3RzXG5jb25zdCBzdG9yZWREYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FsbFRhc2tzJylcbi8vIGNvbnZlcnQgc3RyaW5nZWQgYXJyYXkgdG8gbm9ybWFsIGFycmF5XG5jb25zdCBkYXRhQXJyYXkgPSBKU09OLnBhcnNlKHN0b3JlZERhdGEpO1xuXG5jb25zdCB1bmlxdWVWYWx1ZXMgPSBbXTtcbi8vIGxvb3AgdGhyb3VnaCBhcnJheSBvYmplY3QgaXRlbXMgYW5kIG91dHB1dCB0aGUgcHJvamVjdCB2YWx1ZVxuZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhQXJyYXkubGVuZ3RoOyBpKyspIHtcbmxldCBrZXkgPSBkYXRhQXJyYXlbaV0ucHJvamVjdDtcblxuaWYgKCF1bmlxdWVWYWx1ZXMuaW5jbHVkZXMoa2V5KSkge1xuXG5jb25zdCBvcHRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJylcbm9wdGlvbkVsZW1lbnQudmFsdWUgPSBrZXk7XG5vcHRpb25FbGVtZW50LnRleHQgPSBrZXk7XG5cbnNlbGVjdEVsZW1lbnQuYXBwZW5kQ2hpbGQob3B0aW9uRWxlbWVudClcbnVuaXF1ZVZhbHVlcy5wdXNoKGtleSlcblxufVxuXG59XG5cbn1cbnByb2plY3RGaWx0ZXJTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVQcm9qZWN0RmlsdGVyU2VsZWN0KVxucHJvamVjdEZpbHRlclNlbGVjdC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZXZlbnQpID0+IHtcbi8vIGdldCB0aGUgdmFsdWUgb2Ygc2VsZWN0ZWQgb3B0aW9uIGVsZW1lbnRcbiAgICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBldmVudC50YXJnZXQudmFsdWU7XG5cbi8vIGdldCB0aGUgYWxsIHRhc2tzIGFycmF5XG5jb25zdCBhbGxUYXNrc0FycmF5ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYWxsVGFza3MnKSlcblxuY29uc3QgZmlsdGVyZWRPYmplY3RzID0gW107XG4vLyBsb29wIHRocm91Z2ggYWxsIHRhc2tzIGFycmF5IFxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxUYXNrc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gY29uc3QgY3VycmVudEl0ZW0gPSBhbGxUYXNrc0FycmF5W2ldO1xuXG4gICAgLy8gY2hlY2sgaWYgc2VsZWN0ZWQgaXRlbSB2YWx1ZSBpcyBhbGwgdGFza3NcbiAgICBpZiAoc2VsZWN0ZWRJdGVtID09PSAnYWxsLXRhc2tzJykge1xuICAgICAgICAvLyBhZGQgYWxsIHRhc2tzIHRvIGZpbHRlciBhcnJheVxuICAgICAgICAvLyBmaWx0ZXJlZE9iamVjdHMucHVzaChhbGxUYXNrc0FycmF5W2ldKVxuICAgICAgICBcbiAgICAgICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpXG4gICAgICAgIHVwZGF0ZVRhc2tzQ29udGFpbmVyKGFsbFRhc2tzQXJyYXkpXG4gICAgfVxuaWYgKGFsbFRhc2tzQXJyYXlbaV0ucHJvamVjdCA9PT0gc2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIGZpbHRlcmVkT2JqZWN0cy5wdXNoKGFsbFRhc2tzQXJyYXlbaV0pXG5cbiAgICAgICAgcmVtb3ZlVGFza0l0ZW1zRnJvbUNvbnRhaW5lcigpO1xudXBkYXRlVGFza3NDb250YWluZXIoZmlsdGVyZWRPYmplY3RzKVxuICAgIH1cblxuXG59XG5cblxuICAgIFxuICAgIH0pO1xuXG5mdW5jdGlvbiBkYXlzTGVmdFVudGlsRHVlRGF0ZShkdWVEYXRlKSB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IG5ldyBEYXRlKGR1ZURhdGUpO1xuICAgIGNvbnN0IGN1cnJlbnREYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBkYXlzTGVmdCA9IGRpZmZlcmVuY2VJbkRheXModGFyZ2V0RGF0ZSwgY3VycmVudERhdGUpO1xuXG4gICAgcmV0dXJuIGRheXNMZWZ0XG59ICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuLy8gY2xlYXJMb2NhbFN0b3JhZ2UoKVxuY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuYWxsVGFza3MpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=