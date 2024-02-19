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
    display: flex;
    flex-direction: column;
}
.task-item-element {
    border: 3px solid white;
    height: 100px;
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,uBAAuB;IACvB,YAAY;AAChB;AACA;IACI,uBAAuB;IACvB,aAAa;IACb,YAAY;IACZ,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,uBAAuB;IACvB,aAAa;AACjB;AACA;IACI,wBAAwB;IACxB,kBAAkB;IAClB,eAAe;IACf,SAAS;IACT,QAAQ;IACR,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":["body {\n    background-color: black;\n    color: white;\n}\n#task-items-container {\n    border: 3px solid white;\n    height: 600px;\n    width: 600px;\n    display: flex;\n    flex-direction: column;\n}\n.task-item-element {\n    border: 3px solid white;\n    height: 100px;\n}\n#start-stop-button {\n    border: 5px solid purple;\n    border-radius: 50%;\n    position: fixed;\n    bottom: 0;\n    right: 0;\n    height: 200px;\n    width: 200px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}"],"sourceRoot":""}]);
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
/* harmony export */   createTaskObject: () => (/* binding */ createTaskObject)
/* harmony export */ });
class Task {
constructor(description,project,timeSpent) {
    this.description = description
    this.project = project
    this.timeSpent = timeSpent
    // this.element = document.createElement('div');
    // this.element.addEventListener('click', this.handleClick.bind(this));

}    
// handleClick() {
//     console.log('Object clicked');
// }
// addToDom(targetElement) {
//     targetElement.appendChild(this.element)
// }
}


function createTaskObject(description,project,startTime) {
    const task = new Task(description,project,startTime)
    
    return task
}
function addTaskToAnArray(object, arrayName) {
    arrayName.push(object)
}

function createArrayFactory() {
    const array = [];
    let currentTaskIndex; 

    function getArray() {
        return array;
    }
    function addItem(item) {
        array.push(item);
    }
    function downShiftIdToArrayIndex(id) {
        const element = id;
        let shiftedId = parseInt((element) -1);


return shiftedId;

    }
function getArrayItem(index) {
    return array[index]
}
// function to update task object by array index
// function updateCurrentTaskObject(index) {
//  array[0].description = 'you changed';

// }
function setCurrentTaskIndex(index) {
    currentTaskIndex = index;
}
function getCurrentTaskIndex() {
    return currentTaskIndex;
}

return {
    getArray,
    addItem,
    downShiftIdToArrayIndex,
    getArrayItem,
    setCurrentTaskIndex,
    getCurrentTaskIndex,

};
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
/* harmony export */   closeUpdateDialog: () => (/* binding */ closeUpdateDialog),
/* harmony export */   createFormDialog: () => (/* binding */ createFormDialog),
/* harmony export */   createTaskItem: () => (/* binding */ createTaskItem),
/* harmony export */   getCurrentHourAndMinute: () => (/* binding */ getCurrentHourAndMinute),
/* harmony export */   openCreateFormDialog: () => (/* binding */ openCreateFormDialog),
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
    const currentHourAndMinute = currentHour + ':' + currentMinute;

    return currentHourAndMinute;
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
        div3.textContent = item.timeSpent;

        taskItemElement.appendChild(div)
        taskItemElement.appendChild(div2)
        taskItemElement.appendChild(div3)
        
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

const h2 = document.createElement('h2')
h2.innerHTML = 'New Task';

const form = document.createElement('form');
form.id = 'create-form'
const label1 = createLabel('create-description', 'Deez asian nutz');
const input1 = createInput('create-description', 'text')

const label2 = createLabel('create-project','Project');
const input2 = createInput('create-project','text');

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
allTasksArray.addItem(
            {
            description: 'build task item component',
            project: 'Javascript',
            timeSpent: (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.getCurrentHourAndMinute)(),
    
        }
);
allTasksArray.addItem(
                {
                description: 'build to do task app',
                project: 'Javascript',
                timeSpent: (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.getCurrentHourAndMinute)(),
            }
)


// all dom related functions go here
// append task items container to output
const output = document.getElementById('output')
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.taskItemsContainer)())
// append task items to task items container
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createTaskItem)(allTasksArray.getArray()))
// append form to html
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.createFormDialog)())
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateFormDialog)())
// append start stop button to body 
output.appendChild((0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.startStopButton)())

// start btn event handler
;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.startBtnEventHandler)()

// event handler for updating task elements
function updateTaskElementEventHandler() {
    const parentElement = document.getElementById('task-items-container')
parentElement.addEventListener('click', (event) => {
    if (event.target.matches('.task-item')) {
const currentTask = allTasksArray.downShiftIdToArrayIndex(event.target.parentNode.id)
allTasksArray.setCurrentTaskIndex(currentTask)

;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.openUpdateFormDialog)()
populateFormInputs(currentTask)

    }
})
}
updateTaskElementEventHandler()

// function to handle form submit

        function handleCreateFormSubmit(event) {
            event.preventDefault();
            
            (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.removeTaskItemsFromContainer)();
            
            // get form input values
            const input1 = document.getElementById('create-description');
            const description = input1.value;
            const input2 = document.getElementById('create-project');
            const project = input2.value;
            const startTime = (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.getCurrentHourAndMinute)();
        
        // create new task object
        const task = (0,_task_object_component__WEBPACK_IMPORTED_MODULE_2__.createTaskObject)(description,project, startTime)
        // addTaskToAnArray(task,allTasksArray)
        allTasksArray.addItem(task)
        alert('creation event handler')
            
            ;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(allTasksArray.getArray())
        
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
                const startTime = (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.getCurrentHourAndMinute)();
            
// update task object
const currentTaskIndex = allTasksArray.getCurrentTaskIndex();
allTasksArray.getArrayItem(currentTaskIndex).description = description;
allTasksArray.getArrayItem(currentTaskIndex).project = project;
alert('update event handler')

        ;(0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.updateTasksContainer)(allTasksArray.getArray())
            
            input1.value = '';
            input2.value = '';        
    
            (0,_user_interface__WEBPACK_IMPORTED_MODULE_1__.closeUpdateDialog)();
            
                }

// write logic to determine which submit event handler to use
    
    const createForm =document.getElementById('create-form');
    createForm.addEventListener("submit", handleCreateFormSubmit)    
    const updateForm = document.getElementById('update-form');
updateForm.addEventListener("submit", handleUpdateFormSubmit)
    
// function to populate form dialog with clicked task
function populateFormInputs(arrayIndex) {
let input1 = document.getElementById('update-description');
input1.value = allTasksArray.getArrayItem(arrayIndex).description;

let input2 = document.getElementById('update-project');
input2.value = allTasksArray.getArrayItem(arrayIndex).project;

console.log(allTasksArray.getArray());
}





})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUM1RGE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xFaUM7OztBQUdqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLGtCQUFrQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNEJBQTRCOztBQUU1QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDRCQUE0Qjs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsMkNBQTJDLFFBQVE7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOzs7Ozs7Ozs7O0FBMkJDOzs7Ozs7O1VDaFFEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7OztBQ0FvQjtBQWtCSzs7QUFFekI7QUFPZ0M7OztBQUdoQyxzQkFBc0IsMEVBQWtCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHdFQUF1QjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3RUFBdUI7QUFDbEQ7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLG1FQUFrQjtBQUNyQztBQUNBLG1CQUFtQiwrREFBYztBQUNqQztBQUNBLG1CQUFtQixpRUFBZ0I7QUFDbkMsbUJBQW1CLGlFQUFnQjtBQUNuQztBQUNBLG1CQUFtQixnRUFBZTs7QUFFbEM7QUFDQSxzRUFBb0I7O0FBRXBCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNFQUFvQjtBQUNwQjs7QUFFQTtBQUNBLENBQUM7QUFDRDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFlBQVksNkVBQTRCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3RUFBdUI7QUFDckQ7QUFDQTtBQUNBLHFCQUFxQix3RUFBZ0I7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHNFQUFvQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUEsUUFBUSxrRUFBaUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZFQUE0QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0Msd0VBQXVCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxRQUFRLHNFQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksa0VBQWlCO0FBQzdCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL3Rhc2stb2JqZWN0LWNvbXBvbmVudC5qcyIsIndlYnBhY2s6Ly90by1kby1hcHAvLi9zcmMvdXNlci1pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWFwcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4jdGFzay1pdGVtcy1jb250YWluZXIge1xuICAgIGJvcmRlcjogM3B4IHNvbGlkIHdoaXRlO1xuICAgIGhlaWdodDogNjAwcHg7XG4gICAgd2lkdGg6IDYwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi50YXNrLWl0ZW0tZWxlbWVudCB7XG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XG4gICAgaGVpZ2h0OiAxMDBweDtcbn1cbiNzdGFydC1zdG9wLWJ1dHRvbiB7XG4gICAgYm9yZGVyOiA1cHggc29saWQgcHVycGxlO1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGhlaWdodDogMjAwcHg7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSx1QkFBdUI7SUFDdkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7QUFDakI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFNBQVM7SUFDVCxRQUFRO0lBQ1IsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuI3Rhc2staXRlbXMtY29udGFpbmVyIHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogNjAwcHg7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuLnRhc2staXRlbS1lbGVtZW50IHtcXG4gICAgYm9yZGVyOiAzcHggc29saWQgd2hpdGU7XFxuICAgIGhlaWdodDogMTAwcHg7XFxufVxcbiNzdGFydC1zdG9wLWJ1dHRvbiB7XFxuICAgIGJvcmRlcjogNXB4IHNvbGlkIHB1cnBsZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGhlaWdodDogMjAwcHg7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjbGFzcyBUYXNrIHtcbmNvbnN0cnVjdG9yKGRlc2NyaXB0aW9uLHByb2plY3QsdGltZVNwZW50KSB7XG4gICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uXG4gICAgdGhpcy5wcm9qZWN0ID0gcHJvamVjdFxuICAgIHRoaXMudGltZVNwZW50ID0gdGltZVNwZW50XG4gICAgLy8gdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgLy8gdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcblxufSAgICBcbi8vIGhhbmRsZUNsaWNrKCkge1xuLy8gICAgIGNvbnNvbGUubG9nKCdPYmplY3QgY2xpY2tlZCcpO1xuLy8gfVxuLy8gYWRkVG9Eb20odGFyZ2V0RWxlbWVudCkge1xuLy8gICAgIHRhcmdldEVsZW1lbnQuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KVxuLy8gfVxufVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tPYmplY3QoZGVzY3JpcHRpb24scHJvamVjdCxzdGFydFRpbWUpIHtcbiAgICBjb25zdCB0YXNrID0gbmV3IFRhc2soZGVzY3JpcHRpb24scHJvamVjdCxzdGFydFRpbWUpXG4gICAgXG4gICAgcmV0dXJuIHRhc2tcbn1cbmZ1bmN0aW9uIGFkZFRhc2tUb0FuQXJyYXkob2JqZWN0LCBhcnJheU5hbWUpIHtcbiAgICBhcnJheU5hbWUucHVzaChvYmplY3QpXG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFycmF5RmFjdG9yeSgpIHtcbiAgICBjb25zdCBhcnJheSA9IFtdO1xuICAgIGxldCBjdXJyZW50VGFza0luZGV4OyBcblxuICAgIGZ1bmN0aW9uIGdldEFycmF5KCkge1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEl0ZW0oaXRlbSkge1xuICAgICAgICBhcnJheS5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkb3duU2hpZnRJZFRvQXJyYXlJbmRleChpZCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gaWQ7XG4gICAgICAgIGxldCBzaGlmdGVkSWQgPSBwYXJzZUludCgoZWxlbWVudCkgLTEpO1xuXG5cbnJldHVybiBzaGlmdGVkSWQ7XG5cbiAgICB9XG5mdW5jdGlvbiBnZXRBcnJheUl0ZW0oaW5kZXgpIHtcbiAgICByZXR1cm4gYXJyYXlbaW5kZXhdXG59XG4vLyBmdW5jdGlvbiB0byB1cGRhdGUgdGFzayBvYmplY3QgYnkgYXJyYXkgaW5kZXhcbi8vIGZ1bmN0aW9uIHVwZGF0ZUN1cnJlbnRUYXNrT2JqZWN0KGluZGV4KSB7XG4vLyAgYXJyYXlbMF0uZGVzY3JpcHRpb24gPSAneW91IGNoYW5nZWQnO1xuXG4vLyB9XG5mdW5jdGlvbiBzZXRDdXJyZW50VGFza0luZGV4KGluZGV4KSB7XG4gICAgY3VycmVudFRhc2tJbmRleCA9IGluZGV4O1xufVxuZnVuY3Rpb24gZ2V0Q3VycmVudFRhc2tJbmRleCgpIHtcbiAgICByZXR1cm4gY3VycmVudFRhc2tJbmRleDtcbn1cblxucmV0dXJuIHtcbiAgICBnZXRBcnJheSxcbiAgICBhZGRJdGVtLFxuICAgIGRvd25TaGlmdElkVG9BcnJheUluZGV4LFxuICAgIGdldEFycmF5SXRlbSxcbiAgICBzZXRDdXJyZW50VGFza0luZGV4LFxuICAgIGdldEN1cnJlbnRUYXNrSW5kZXgsXG5cbn07XG59XG5cblxuZXhwb3J0IHtcbiAgICBcbmNyZWF0ZVRhc2tPYmplY3QsXG5hZGRUYXNrVG9BbkFycmF5LFxuY3JlYXRlQXJyYXlGYWN0b3J5XG5cblxuXG59IiwiaW1wb3J0IHtcbiAgICBjcmVhdGVUYXNrT2JqZWN0LFxuYWRkVGFza1RvQW5BcnJheSxcbn0gZnJvbSAnLi90YXNrLW9iamVjdC1jb21wb25lbnQnO1xuXG5cbi8vIGdldCB0aGUgY3VycmVudCB0aW1lIGluIGhvdXJzIGFuZCBtaW51dGVzXG5jb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuY29uc3QgY3VycmVudEhvdXIgPSBub3cuZ2V0SG91cnMoKTtcbmNvbnN0IGN1cnJlbnRNaW51dGUgPSBub3cuZ2V0TWludXRlcygpO1xuZnVuY3Rpb24gZ2V0Q3VycmVudEhvdXJBbmRNaW51dGUoKSB7XG4gICAgY29uc3QgY3VycmVudEhvdXJBbmRNaW51dGUgPSBjdXJyZW50SG91ciArICc6JyArIGN1cnJlbnRNaW51dGU7XG5cbiAgICByZXR1cm4gY3VycmVudEhvdXJBbmRNaW51dGU7XG59XG5cbi8vIGNsaWNrIGV2ZW50IGxpc3RlbmVyIGZvciBzdGFydCBidXR0b25cbmZ1bmN0aW9uIHN0YXJ0QnRuRXZlbnRIYW5kbGVyKCkge1xuY29uc3Qgc3RhcnRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQtc3RvcC1idXR0b24nKVxuICAgIHN0YXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIG9wZW5DcmVhdGVGb3JtRGlhbG9nKCk7XG4gICAgXG4gICAgfSlcbiAgICB9XG5cbi8vIGNyZWF0ZSB0YXNrIGl0ZW1zIGNvbnRhaW5lciBcbmZ1bmN0aW9uIHRhc2tJdGVtc0NvbnRhaW5lcigpIHtcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICAgIGNvbnRhaW5lci5pZCA9ICd0YXNrLWl0ZW1zLWNvbnRhaW5lcidcblxucmV0dXJuIGNvbnRhaW5lcjtcbn1cbi8vIGNyZWF0ZSB0YXNrIGl0ZW1cbmZ1bmN0aW9uIGNyZWF0ZVRhc2tJdGVtKGFycmF5KSB7XG5jb25zdCB0YXNrSXRlbXNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAndGFzay1pdGVtcy1jb250YWluZXInKTtcbiAgIGZvciAobGV0IGkgPSAwO2kgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBpdGVtID0gYXJyYXlbaV07XG4gICAgXG4gICAgICAgIGNvbnN0IHRhc2tJdGVtRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtLWVsZW1lbnQnKVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuaWQgPSBpICsxO1xuXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzay1pdGVtJyk7XG4gICAgICAgIGRpdi5pZCA9ICd0YXNrLWRlc2NyaXB0aW9uJztcbiAgICAgICAgZGl2LnRleHRDb250ZW50ID0gaXRlbS5kZXNjcmlwdGlvbjtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGl2Mi5jbGFzc0xpc3QuYWRkKCd0YXNrLWl0ZW0nKTtcbiAgICAgICAgZGl2Mi5pZCA9ICd0YXNrLXByb2plY3QnO1xuICAgICAgICBkaXYyLnRleHRDb250ZW50ID0gaXRlbS5wcm9qZWN0O1xuICAgICAgICBcbiAgICAgICAgY29uc3QgZGl2MyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkaXYzLmNsYXNzTGlzdC5hZGQoJ3Rhc2staXRlbScpO1xuICAgICAgICBkaXYzLmlkID0gJ3Rhc2stdGltZS1zcGVudCc7XG4gICAgICAgIGRpdjMudGV4dENvbnRlbnQgPSBpdGVtLnRpbWVTcGVudDtcblxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2KVxuICAgICAgICB0YXNrSXRlbUVsZW1lbnQuYXBwZW5kQ2hpbGQoZGl2MilcbiAgICAgICAgdGFza0l0ZW1FbGVtZW50LmFwcGVuZENoaWxkKGRpdjMpXG4gICAgICAgIFxuICAgICAgICB0YXNrSXRlbXNDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza0l0ZW1FbGVtZW50KVxuICAgIH1cbiAgICAgICAgXG4gICAgcmV0dXJuIHRhc2tJdGVtc0NvbnRhaW5lcjtcbn1cblxuLy8gY3JlYXRlIHN0YXJ0IGFuZCBzdG9wIGJ1dHRvbiBjb21wb25lbnRcbmZ1bmN0aW9uIHN0YXJ0U3RvcEJ1dHRvbigpIHtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBidXR0b24uaWQgPSAnc3RhcnQtc3RvcC1idXR0b24nO1xuY29uc3QgaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpXG5oMy50ZXh0Q29udGVudCA9ICdTdGFydCc7XG5cbmJ1dHRvbi5hcHBlbmRDaGlsZChoMylcblxuICAgIHJldHVybiBidXR0b247XG59XG5cbi8vIGNyZWF0ZSBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gY3JlYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaWFsb2cnKVxuZGlhbG9nLmNsYXNzTGlzdC5hZGQoJ2RpYWxvZycpXG5kaWFsb2cuaWQgPSAnY3JlYXRlLWRpYWxvZyc7XG5cbmNvbnN0IGRpYWxvZ0NvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuZGlhbG9nQ29udGVudC5jbGFzc0xpc3QuYWRkKCdkaWFsb2ctY29udGVudCcpXG5cbmNvbnN0IGNsb3NlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuY2xvc2UuY2xhc3NMaXN0LmFkZCgnY2xvc2UnKVxuY2xvc2UudGV4dENvbnRlbnQgPSAnJnRpbWVzOyc7XG5cbmNvbnN0IGgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKVxuaDIuaW5uZXJIVE1MID0gJ05ldyBUYXNrJztcblxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvcm0nKTtcbmZvcm0uaWQgPSAnY3JlYXRlLWZvcm0nXG5jb25zdCBsYWJlbDEgPSBjcmVhdGVMYWJlbCgnY3JlYXRlLWRlc2NyaXB0aW9uJywgJ0RlZXogYXNpYW4gbnV0eicpO1xuY29uc3QgaW5wdXQxID0gY3JlYXRlSW5wdXQoJ2NyZWF0ZS1kZXNjcmlwdGlvbicsICd0ZXh0JylcblxuY29uc3QgbGFiZWwyID0gY3JlYXRlTGFiZWwoJ2NyZWF0ZS1wcm9qZWN0JywnUHJvamVjdCcpO1xuY29uc3QgaW5wdXQyID0gY3JlYXRlSW5wdXQoJ2NyZWF0ZS1wcm9qZWN0JywndGV4dCcpO1xuXG5jb25zdCBpbnB1dDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcbmlucHV0My5pZCA9ICdjcmVhdGUtc3RhcnQtdGltZSdcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbnN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG5zdWJtaXQuaWQgPSAnY3JlYXRlLXN1Ym1pdC1idXR0b24nO1xuc3VibWl0LnRleHRDb250ZW50ID0gJ0RvbmUnXG5cbi8vIGFwcGVuZCBlbGVtZW50cyBzdGFydCBmcm9tIGxvd2VzdCBjaGlsZFxuZGlhbG9nLmFwcGVuZENoaWxkKGRpYWxvZ0NvbnRlbnQpXG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGNsb3NlKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoaDIpO1xuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChmb3JtKTtcbmZvcm0uYXBwZW5kQ2hpbGQobGFiZWwxKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQxKVxuZm9ybS5hcHBlbmRDaGlsZChsYWJlbDIpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDIpXG4vLyBmb3JtLmFwcGVuZENoaWxkKGxhYmVsMyk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MylcbmZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KVxuXG5yZXR1cm4gZGlhbG9nO1xufVxuXG4vLyB1cGRhdGUgZm9ybSBkaWFsb2dcbmZ1bmN0aW9uIHVwZGF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGlhbG9nJylcbmRpYWxvZy5jbGFzc0xpc3QuYWRkKCdkaWFsb2cnKVxuZGlhbG9nLmlkID0gJ3VwZGF0ZS1kaWFsb2cnO1xuXG5jb25zdCBkaWFsb2dDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbmRpYWxvZ0NvbnRlbnQuY2xhc3NMaXN0LmFkZCgnZGlhbG9nLWNvbnRlbnQnKVxuXG5jb25zdCBjbG9zZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmNsb3NlLmNsYXNzTGlzdC5hZGQoJ2Nsb3NlJylcbmNsb3NlLnRleHRDb250ZW50ID0gJyZ0aW1lczsnO1xuXG5jb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJylcbmgyLmlubmVySFRNTCA9ICdVcGRhdGUgVGFzayc7XG5cbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG5mb3JtLmlkID0gJ3VwZGF0ZS1mb3JtJ1xuY29uc3QgbGFiZWwxID0gY3JlYXRlTGFiZWwoJ3VwZGF0ZS1kZXNjcmlwdGlvbicsICdEZWV6IGFzaWFuIG51dHonKTtcbmNvbnN0IGlucHV0MSA9IGNyZWF0ZUlucHV0KCd1cGRhdGUtZGVzY3JpcHRpb24nLCAndGV4dCcpXG5cbmNvbnN0IGxhYmVsMiA9IGNyZWF0ZUxhYmVsKCd1cGRhdGUtcHJvamVjdCcsJ1Byb2plY3QnKTtcbmNvbnN0IGlucHV0MiA9IGNyZWF0ZUlucHV0KCd1cGRhdGUtcHJvamVjdCcsJ3RleHQnKTtcblxuY29uc3QgaW5wdXQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXG5pbnB1dDMuaWQgPSAndXBkYXRlLXN0YXJ0LXRpbWUnXG5cbmNvbnN0IHN1Ym1pdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG5zdWJtaXQudHlwZSA9ICdzdWJtaXQnO1xuc3VibWl0LmlkID0gJ3VwZGF0ZS1zdWJtaXQtYnV0dG9uJztcbnN1Ym1pdC50ZXh0Q29udGVudCA9ICdEb25lJ1xuXG4vLyBhcHBlbmQgZWxlbWVudHMgc3RhcnQgZnJvbSBsb3dlc3QgY2hpbGRcbmRpYWxvZy5hcHBlbmRDaGlsZChkaWFsb2dDb250ZW50KVxuZGlhbG9nQ29udGVudC5hcHBlbmRDaGlsZChjbG9zZSk7XG5kaWFsb2dDb250ZW50LmFwcGVuZENoaWxkKGgyKTtcbmRpYWxvZ0NvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybSk7XG5mb3JtLmFwcGVuZENoaWxkKGxhYmVsMSk7XG5mb3JtLmFwcGVuZENoaWxkKGlucHV0MSlcbmZvcm0uYXBwZW5kQ2hpbGQobGFiZWwyKTtcbmZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQyKVxuLy8gZm9ybS5hcHBlbmRDaGlsZChsYWJlbDMpO1xuZm9ybS5hcHBlbmRDaGlsZChpbnB1dDMpXG5mb3JtLmFwcGVuZENoaWxkKHN1Ym1pdClcblxucmV0dXJuIGRpYWxvZztcbn1cblxuXG5cbmZ1bmN0aW9uIGNyZWF0ZUxhYmVsKGZvckF0dHJpYnV0ZSx0ZXh0Q29udGVudCkge1xuICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKVxuICAgIGxhYmVsLmh0bWxGb3IgPSBmb3JBdHRyaWJ1dGU7XG5sYWJlbC50ZXh0Q29udGVudCA9IHRleHRDb250ZW50O1xuXG5yZXR1cm4gbGFiZWw7XG59XG5mdW5jdGlvbiBjcmVhdGVJbnB1dChpZEF0dHJpYnV0ZSx0eXBlQXR0cmlidXRlKXtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuaW5wdXQuaWQgPSBpZEF0dHJpYnV0ZTtcbmlucHV0LnR5cCA9IHR5cGVBdHRyaWJ1dGU7XG5cbnJldHVybiBpbnB1dDsgXG59XG5cbi8vIGZ1bmN0aW9uIHRvIGNyZWF0ZSBhbmQgb3BlbiBmb3JtIGRpYWxvZ1xuZnVuY3Rpb24gb3BlbkNyZWF0ZUZvcm1EaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1kaWFsb2cnKVxuICAgIGRpYWxvZy5zaG93TW9kYWwoKVxuICAgIHJldHVybiBkaWFsb2c7XG59XG5mdW5jdGlvbiBvcGVuVXBkYXRlRm9ybURpYWxvZygpIHtcbiAgICBjb25zdCBkaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRpYWxvZycpXG4gICAgZGlhbG9nLnNob3dNb2RhbCgpXG4gICAgcmV0dXJuIGRpYWxvZztcbn1cbmZ1bmN0aW9uIGNsb3NlQ3JlYXRlRGlhbG9nKCkge1xuICAgIGNvbnN0IGRpYWxvZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtZGlhbG9nJylcbiAgICBkaWFsb2cuY2xvc2UoKVxufVxuZnVuY3Rpb24gY2xvc2VVcGRhdGVEaWFsb2coKSB7XG4gICAgY29uc3QgZGlhbG9nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kaWFsb2cnKVxuICAgIGRpYWxvZy5jbG9zZSgpXG59XG5cbi8vIGZ1bmN0aW9uIHRvIHJlbW92ZSB0YXNrIGl0ZW1zIGZyb20gY29udGFpbmVyXG5mdW5jdGlvbiByZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyKCkge1xuY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2staXRlbXMtY29udGFpbmVyJylcblxuZm9yIChsZXQgaSA9IGNvbnRhaW5lci5jaGlsZHJlbi5sZW5ndGggLTE7IGkgPj0gMDsgaS0tKSB7XG5jb25zdCBjaGlsZCA9IGNvbnRhaW5lci5jaGlsZHJlbltpXTtcbmNvbnRhaW5lci5yZW1vdmVDaGlsZChjaGlsZClcblxufVxufVxuLy8gZnVuY3Rpb24gdG8gdXBkYXRlIHRoZSB0YXNrcyBjb250YWluZXIgZWxlbWVudHNcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tzQ29udGFpbmVyKGFycmF5TmFtZSkge1xuY29uc3QgdXBkYXRlID0gb3V0cHV0LmFwcGVuZENoaWxkKGNyZWF0ZVRhc2tJdGVtKGFycmF5TmFtZSkpXG5cbnJldHVybiB1cGRhdGU7XG5cbn1cblxuXG5cblxuXG5cblxuXG5cbmV4cG9ydCB7XG4gICAgc3RhcnRCdG5FdmVudEhhbmRsZXIsXG50YXNrSXRlbXNDb250YWluZXIsXG5jcmVhdGVUYXNrSXRlbSxcbnN0YXJ0U3RvcEJ1dHRvbixcbmNyZWF0ZUZvcm1EaWFsb2csXG51cGRhdGVGb3JtRGlhbG9nLFxub3BlbkNyZWF0ZUZvcm1EaWFsb2csXG5vcGVuVXBkYXRlRm9ybURpYWxvZyxcbmNsb3NlQ3JlYXRlRGlhbG9nLFxuY2xvc2VVcGRhdGVEaWFsb2csXG5nZXRDdXJyZW50SG91ckFuZE1pbnV0ZSxcbnJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIsXG51cGRhdGVUYXNrc0NvbnRhaW5lcixcblxuXG5cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQge1xuICAgIHN0YXJ0QnRuRXZlbnRIYW5kbGVyLFxuICAgIHRhc2tJdGVtc0NvbnRhaW5lcixcbmNyZWF0ZVRhc2tJdGVtLFxuc3RhcnRTdG9wQnV0dG9uLFxuY3JlYXRlRm9ybURpYWxvZyxcbm9wZW5Gb3JtRGlhbG9nLFxuZ2V0Q3VycmVudEhvdXJBbmRNaW51dGUsXG5yZW1vdmVUYXNrSXRlbXNGcm9tQ29udGFpbmVyLFxudXBkYXRlVGFza0VsZW1lbnRzLFxudXBkYXRlVGFza3NDb250YWluZXIsXG5jbG9zZURpYWxvZyxcbnVwZGF0ZUZvcm1EaWFsb2csXG5jbG9zZUNyZWF0ZURpYWxvZyxcbmNsb3NlVXBkYXRlRGlhbG9nLFxub3BlblVwZGF0ZUZvcm1EaWFsb2csXG5cbn0gZnJvbSAnLi91c2VyLWludGVyZmFjZSdcblxuLy8gaW1wb3J0IG9iamVjdCByZWxhdGVkIG1vZHVsZXNcbmltcG9ydCB7XG5jcmVhdGVUYXNrT2JqZWN0LFxuICAgIGFkZFRhc2tUb0FuQXJyYXksXG4gICAgY3JlYXRlQXJyYXlGYWN0b3J5LFxuICAgIFxuXG59IGZyb20gJy4vdGFzay1vYmplY3QtY29tcG9uZW50J1xuXG5cbmNvbnN0IGFsbFRhc2tzQXJyYXkgPSBjcmVhdGVBcnJheUZhY3RvcnkoKTtcbmFsbFRhc2tzQXJyYXkuYWRkSXRlbShcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYnVpbGQgdGFzayBpdGVtIGNvbXBvbmVudCcsXG4gICAgICAgICAgICBwcm9qZWN0OiAnSmF2YXNjcmlwdCcsXG4gICAgICAgICAgICB0aW1lU3BlbnQ6IGdldEN1cnJlbnRIb3VyQW5kTWludXRlKCksXG4gICAgXG4gICAgICAgIH1cbik7XG5hbGxUYXNrc0FycmF5LmFkZEl0ZW0oXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnYnVpbGQgdG8gZG8gdGFzayBhcHAnLFxuICAgICAgICAgICAgICAgIHByb2plY3Q6ICdKYXZhc2NyaXB0JyxcbiAgICAgICAgICAgICAgICB0aW1lU3BlbnQ6IGdldEN1cnJlbnRIb3VyQW5kTWludXRlKCksXG4gICAgICAgICAgICB9XG4pXG5cblxuLy8gYWxsIGRvbSByZWxhdGVkIGZ1bmN0aW9ucyBnbyBoZXJlXG4vLyBhcHBlbmQgdGFzayBpdGVtcyBjb250YWluZXIgdG8gb3V0cHV0XG5jb25zdCBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnb3V0cHV0Jylcbm91dHB1dC5hcHBlbmRDaGlsZCh0YXNrSXRlbXNDb250YWluZXIoKSlcbi8vIGFwcGVuZCB0YXNrIGl0ZW1zIHRvIHRhc2sgaXRlbXMgY29udGFpbmVyXG5vdXRwdXQuYXBwZW5kQ2hpbGQoY3JlYXRlVGFza0l0ZW0oYWxsVGFza3NBcnJheS5nZXRBcnJheSgpKSlcbi8vIGFwcGVuZCBmb3JtIHRvIGh0bWxcbm91dHB1dC5hcHBlbmRDaGlsZChjcmVhdGVGb3JtRGlhbG9nKCkpXG5vdXRwdXQuYXBwZW5kQ2hpbGQodXBkYXRlRm9ybURpYWxvZygpKVxuLy8gYXBwZW5kIHN0YXJ0IHN0b3AgYnV0dG9uIHRvIGJvZHkgXG5vdXRwdXQuYXBwZW5kQ2hpbGQoc3RhcnRTdG9wQnV0dG9uKCkpXG5cbi8vIHN0YXJ0IGJ0biBldmVudCBoYW5kbGVyXG5zdGFydEJ0bkV2ZW50SGFuZGxlcigpXG5cbi8vIGV2ZW50IGhhbmRsZXIgZm9yIHVwZGF0aW5nIHRhc2sgZWxlbWVudHNcbmZ1bmN0aW9uIHVwZGF0ZVRhc2tFbGVtZW50RXZlbnRIYW5kbGVyKCkge1xuICAgIGNvbnN0IHBhcmVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1pdGVtcy1jb250YWluZXInKVxucGFyZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGlmIChldmVudC50YXJnZXQubWF0Y2hlcygnLnRhc2staXRlbScpKSB7XG5jb25zdCBjdXJyZW50VGFzayA9IGFsbFRhc2tzQXJyYXkuZG93blNoaWZ0SWRUb0FycmF5SW5kZXgoZXZlbnQudGFyZ2V0LnBhcmVudE5vZGUuaWQpXG5hbGxUYXNrc0FycmF5LnNldEN1cnJlbnRUYXNrSW5kZXgoY3VycmVudFRhc2spXG5cbm9wZW5VcGRhdGVGb3JtRGlhbG9nKClcbnBvcHVsYXRlRm9ybUlucHV0cyhjdXJyZW50VGFzaylcblxuICAgIH1cbn0pXG59XG51cGRhdGVUYXNrRWxlbWVudEV2ZW50SGFuZGxlcigpXG5cbi8vIGZ1bmN0aW9uIHRvIGhhbmRsZSBmb3JtIHN1Ym1pdFxuXG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUNyZWF0ZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gZ2V0IGZvcm0gaW5wdXQgdmFsdWVzXG4gICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3JlYXRlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGlucHV0MS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0MiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGUtcHJvamVjdCcpO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IGdldEN1cnJlbnRIb3VyQW5kTWludXRlKCk7XG4gICAgICAgIFxuICAgICAgICAvLyBjcmVhdGUgbmV3IHRhc2sgb2JqZWN0XG4gICAgICAgIGNvbnN0IHRhc2sgPSBjcmVhdGVUYXNrT2JqZWN0KGRlc2NyaXB0aW9uLHByb2plY3QsIHN0YXJ0VGltZSlcbiAgICAgICAgLy8gYWRkVGFza1RvQW5BcnJheSh0YXNrLGFsbFRhc2tzQXJyYXkpXG4gICAgICAgIGFsbFRhc2tzQXJyYXkuYWRkSXRlbSh0YXNrKVxuICAgICAgICBhbGVydCgnY3JlYXRpb24gZXZlbnQgaGFuZGxlcicpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHVwZGF0ZVRhc2tzQ29udGFpbmVyKGFsbFRhc2tzQXJyYXkuZ2V0QXJyYXkoKSlcbiAgICAgICAgXG4gICAgICAgIGlucHV0MS52YWx1ZSA9ICcnO1xuICAgICAgICBpbnB1dDIudmFsdWUgPSAnJzsgICAgICAgIFxuXG4gICAgICAgIGNsb3NlQ3JlYXRlRGlhbG9nKCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgICAgICAvLyBldmVudCBoYW5kbGVyIGZvciBzdWJtaXQgdXBkYXRlXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVVcGRhdGVGb3JtU3VibWl0KGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHJlbW92ZVRhc2tJdGVtc0Zyb21Db250YWluZXIoKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBnZXQgZm9ybSBpbnB1dCB2YWx1ZXNcbiAgICAgICAgICAgICAgICBjb25zdCBpbnB1dDEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWRlc2NyaXB0aW9uJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBpbnB1dDEudmFsdWU7XG4gICAgICAgICAgICAgICAgY29uc3QgaW5wdXQyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1wcm9qZWN0Jyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdCA9IGlucHV0Mi52YWx1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBnZXRDdXJyZW50SG91ckFuZE1pbnV0ZSgpO1xuICAgICAgICAgICAgXG4vLyB1cGRhdGUgdGFzayBvYmplY3RcbmNvbnN0IGN1cnJlbnRUYXNrSW5kZXggPSBhbGxUYXNrc0FycmF5LmdldEN1cnJlbnRUYXNrSW5kZXgoKTtcbmFsbFRhc2tzQXJyYXkuZ2V0QXJyYXlJdGVtKGN1cnJlbnRUYXNrSW5kZXgpLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG5hbGxUYXNrc0FycmF5LmdldEFycmF5SXRlbShjdXJyZW50VGFza0luZGV4KS5wcm9qZWN0ID0gcHJvamVjdDtcbmFsZXJ0KCd1cGRhdGUgZXZlbnQgaGFuZGxlcicpXG5cbiAgICAgICAgdXBkYXRlVGFza3NDb250YWluZXIoYWxsVGFza3NBcnJheS5nZXRBcnJheSgpKVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpbnB1dDEudmFsdWUgPSAnJztcbiAgICAgICAgICAgIGlucHV0Mi52YWx1ZSA9ICcnOyAgICAgICAgXG4gICAgXG4gICAgICAgICAgICBjbG9zZVVwZGF0ZURpYWxvZygpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuXG4vLyB3cml0ZSBsb2dpYyB0byBkZXRlcm1pbmUgd2hpY2ggc3VibWl0IGV2ZW50IGhhbmRsZXIgdG8gdXNlXG4gICAgXG4gICAgY29uc3QgY3JlYXRlRm9ybSA9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NyZWF0ZS1mb3JtJyk7XG4gICAgY3JlYXRlRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIGhhbmRsZUNyZWF0ZUZvcm1TdWJtaXQpICAgIFxuICAgIGNvbnN0IHVwZGF0ZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLWZvcm0nKTtcbnVwZGF0ZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCBoYW5kbGVVcGRhdGVGb3JtU3VibWl0KVxuICAgIFxuLy8gZnVuY3Rpb24gdG8gcG9wdWxhdGUgZm9ybSBkaWFsb2cgd2l0aCBjbGlja2VkIHRhc2tcbmZ1bmN0aW9uIHBvcHVsYXRlRm9ybUlucHV0cyhhcnJheUluZGV4KSB7XG5sZXQgaW5wdXQxID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3VwZGF0ZS1kZXNjcmlwdGlvbicpO1xuaW5wdXQxLnZhbHVlID0gYWxsVGFza3NBcnJheS5nZXRBcnJheUl0ZW0oYXJyYXlJbmRleCkuZGVzY3JpcHRpb247XG5cbmxldCBpbnB1dDIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndXBkYXRlLXByb2plY3QnKTtcbmlucHV0Mi52YWx1ZSA9IGFsbFRhc2tzQXJyYXkuZ2V0QXJyYXlJdGVtKGFycmF5SW5kZXgpLnByb2plY3Q7XG5cbmNvbnNvbGUubG9nKGFsbFRhc2tzQXJyYXkuZ2V0QXJyYXkoKSk7XG59XG5cblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==