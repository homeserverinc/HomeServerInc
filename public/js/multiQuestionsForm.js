/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_Tree_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tree/Tree.vue */ "./resources/js/components/tree/Tree.vue");
/* harmony import */ var bootstrap_vue_es_components_modal_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bootstrap-vue/es/components/modal/modal */ "./node_modules/bootstrap-vue/es/components/modal/modal.js");
/* harmony import */ var bootstrap_vue_es_components_modal_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_es_components_modal_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_vue_es_directives_modal_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-vue/es/directives/modal/modal */ "./node_modules/bootstrap-vue/es/directives/modal/modal.js");
/* harmony import */ var bootstrap_vue_es_directives_modal_modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_vue_es_directives_modal_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs.js */ "./resources/js/configs.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! uuid/v4 */ "./node_modules/uuid/v4.js");
/* harmony import */ var uuid_v4__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(uuid_v4__WEBPACK_IMPORTED_MODULE_4__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





var question = Object({
  'uuid': '',
  'text': '',
  'type': 'question',
  'questionType': 1,
  'children': []
});
var answer = Object({
  'uuid': '',
  'text': '',
  'type': 'answer',
  'controlType': '',
  'children': []
});
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      'tree': [{
        "uuid": "",
        "text": "Is the area to be painted inside or outside?",
        "type": "question",
        "questionType": 1,
        "children": [{
          "uuid": "a670e263-656e-4f3d-b26e-8fa878027742",
          "text": "Inside",
          "type": "answer",
          "controlType": 3,
          "children": [{
            "uuid": "61bd3e09-67a6-4740-91b8-44e540330f37",
            "text": "What type of service do you need?",
            "type": "question",
            "questionType": 1,
            "children": [{
              "uuid": "451a5e2c-1096-4558-b07f-7f8d2103eb46",
              "text": "Standard Painting",
              "type": "answer",
              "controlType": 3,
              "children": [{
                "uuid": "327c4ffc-ede5-4be2-ba31-46b7a5779f93",
                "text": "How big is the painting job?",
                "type": "question",
                "questionType": 1,
                "children": [{
                  "uuid": "9093dd10-9eb4-480f-8313-7ce7a82b3495",
                  "text": "Less than 1 room",
                  "type": "answer",
                  "controlType": 3,
                  "children": [{
                    "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd",
                    "text": "Which parts of the room do you want to paint? Select all that apply.",
                    "type": "question",
                    "questionType": 2,
                    "children": [{
                      "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde",
                      "text": "Wall",
                      "type": "answer",
                      "controlType": 1,
                      "children": [{
                        "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0",
                        "text": "What is the approximate square footage of the area to be painted?",
                        "type": "question",
                        "questionType": 1,
                        "children": [{
                          "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1",
                          "text": "Less than 300 sq. ft.",
                          "type": "answer",
                          "controlType": 3,
                          "children": [{
                            "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                            "text": "Approximately how high are the ceilings in the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                              "text": "Under 10 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                              "text": "10-12 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                              "text": "12-14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                              "text": "Over 14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                              "text": "Im not sure",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e",
                          "text": "300-500 sq. ft.",
                          "type": "answer",
                          "controlType": 3,
                          "children": [{
                            "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                            "text": "Approximately how high are the ceilings in the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                              "text": "Under 10 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                              "text": "10-12 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                              "text": "12-14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                              "text": "Over 14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                              "text": "Im not sure",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6",
                          "text": "501-1000 sq. ft.",
                          "type": "answer",
                          "controlType": 3,
                          "children": [{
                            "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                            "text": "Approximately how high are the ceilings in the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                              "text": "Under 10 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                              "text": "10-12 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                              "text": "12-14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                              "text": "Over 14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                              "text": "Im not sure",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965",
                          "text": "1001-1500 sq. ft.",
                          "type": "answer",
                          "controlType": 3,
                          "children": [{
                            "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                            "text": "Approximately how high are the ceilings in the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                              "text": "Under 10 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                              "text": "10-12 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                              "text": "12-14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                              "text": "Over 14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                              "text": "Im not sure",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84",
                          "text": "1501-2000 sq. ft.",
                          "type": "answer",
                          "controlType": 3,
                          "children": [{
                            "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                            "text": "Approximately how high are the ceilings in the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                              "text": "Under 10 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                              "text": "10-12 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                              "text": "12-14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                              "text": "Over 14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                              "text": "Im not sure",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137",
                          "text": "More than 2000 sq. ft.",
                          "type": "answer",
                          "controlType": 3,
                          "children": [{
                            "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                            "text": "Approximately how high are the ceilings in the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                              "text": "Under 10 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                              "text": "10-12 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                              "text": "12-14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                              "text": "Over 14 feet",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }, {
                              "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                              "text": "Im not sure",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                "text": "Who will move and cover furniture in the rooms to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                  "text": "The area is unfurnished",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                  "text": "Ill move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }, {
                                  "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                  "text": "I want the pro to move and cover furniture",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": []
                                }]
                              }]
                            }]
                          }]
                        }]
                      }]
                    }, {
                      "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab",
                      "text": "Ceilings",
                      "type": "answer",
                      "controlType": 1,
                      "children": []
                    }, {
                      "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080",
                      "text": "Molding and trim",
                      "type": "answer",
                      "controlType": 1,
                      "children": []
                    }, {
                      "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42",
                      "text": "Window frames and sills",
                      "type": "answer",
                      "controlType": 1,
                      "children": []
                    }, {
                      "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313",
                      "text": "Doors",
                      "type": "answer",
                      "controlType": 1,
                      "children": []
                    }, {
                      "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f",
                      "text": "Closets",
                      "type": "answer",
                      "controlType": 1,
                      "children": []
                    }, {
                      "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9",
                      "text": "Other",
                      "type": "answer",
                      "controlType": 2,
                      "children": []
                    }]
                  }]
                }, {
                  "uuid": "de9c954c-9169-4b9f-9f48-c4a2904d4ae3",
                  "text": "1-2 rooms",
                  "type": "answer",
                  "controlType": 3,
                  "children": [{
                    "uuid": "ed471123-3617-461a-a047-b8ce61d8f4b4",
                    "text": "Which rooms do you want to paint? Select all that apply.",
                    "type": "question",
                    "questionType": 2,
                    "children": [{
                      "uuid": "6e083610-5cc4-4a90-ab80-ca32e46718c0",
                      "text": "Kitchen",
                      "type": "answer",
                      "controlType": 1,
                      "children": [{
                        "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd",
                        "text": "Which parts of the room do you want to paint? Select all that apply.",
                        "type": "question",
                        "questionType": 2,
                        "children": [{
                          "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde",
                          "text": "Wall",
                          "type": "answer",
                          "controlType": 1,
                          "children": [{
                            "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0",
                            "text": "What is the approximate square footage of the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1",
                              "text": "Less than 300 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e",
                              "text": "300-500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6",
                              "text": "501-1000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965",
                              "text": "1001-1500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84",
                              "text": "1501-2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137",
                              "text": "More than 2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab",
                          "text": "Ceilings",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080",
                          "text": "Molding and trim",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42",
                          "text": "Window frames and sills",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313",
                          "text": "Doors",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f",
                          "text": "Closets",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9",
                          "text": "Other",
                          "type": "answer",
                          "controlType": 2,
                          "children": []
                        }]
                      }]
                    }, {
                      "uuid": "46c82d13-7de6-4211-b3e5-8472579fc307",
                      "text": "Bathroom",
                      "type": "answer",
                      "controlType": 1,
                      "children": [{
                        "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd",
                        "text": "Which parts of the room do you want to paint? Select all that apply.",
                        "type": "question",
                        "questionType": 2,
                        "children": [{
                          "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde",
                          "text": "Wall",
                          "type": "answer",
                          "controlType": 1,
                          "children": [{
                            "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0",
                            "text": "What is the approximate square footage of the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1",
                              "text": "Less than 300 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e",
                              "text": "300-500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6",
                              "text": "501-1000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965",
                              "text": "1001-1500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84",
                              "text": "1501-2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137",
                              "text": "More than 2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab",
                          "text": "Ceilings",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080",
                          "text": "Molding and trim",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42",
                          "text": "Window frames and sills",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313",
                          "text": "Doors",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f",
                          "text": "Closets",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9",
                          "text": "Other",
                          "type": "answer",
                          "controlType": 2,
                          "children": []
                        }]
                      }]
                    }, {
                      "uuid": "90fadd65-bcf6-46aa-9436-a88cb876b334",
                      "text": "Bedroom",
                      "type": "answer",
                      "controlType": 1,
                      "children": [{
                        "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd",
                        "text": "Which parts of the room do you want to paint? Select all that apply.",
                        "type": "question",
                        "questionType": 2,
                        "children": [{
                          "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde",
                          "text": "Wall",
                          "type": "answer",
                          "controlType": 1,
                          "children": [{
                            "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0",
                            "text": "What is the approximate square footage of the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1",
                              "text": "Less than 300 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e",
                              "text": "300-500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6",
                              "text": "501-1000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965",
                              "text": "1001-1500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84",
                              "text": "1501-2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137",
                              "text": "More than 2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab",
                          "text": "Ceilings",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080",
                          "text": "Molding and trim",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42",
                          "text": "Window frames and sills",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313",
                          "text": "Doors",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f",
                          "text": "Closets",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9",
                          "text": "Other",
                          "type": "answer",
                          "controlType": 2,
                          "children": []
                        }]
                      }]
                    }, {
                      "uuid": "2b59e4c1-540b-4e52-b05c-51293020e18a",
                      "text": "Hallway",
                      "type": "answer",
                      "controlType": 1,
                      "children": [{
                        "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd",
                        "text": "Which parts of the room do you want to paint? Select all that apply.",
                        "type": "question",
                        "questionType": 2,
                        "children": [{
                          "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde",
                          "text": "Wall",
                          "type": "answer",
                          "controlType": 1,
                          "children": [{
                            "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0",
                            "text": "What is the approximate square footage of the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1",
                              "text": "Less than 300 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e",
                              "text": "300-500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6",
                              "text": "501-1000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965",
                              "text": "1001-1500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84",
                              "text": "1501-2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137",
                              "text": "More than 2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab",
                          "text": "Ceilings",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080",
                          "text": "Molding and trim",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42",
                          "text": "Window frames and sills",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313",
                          "text": "Doors",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f",
                          "text": "Closets",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9",
                          "text": "Other",
                          "type": "answer",
                          "controlType": 2,
                          "children": []
                        }]
                      }]
                    }, {
                      "uuid": "e64b2cc4-2280-465a-8e7b-5238d9af4165",
                      "text": "Living areas",
                      "type": "answer",
                      "controlType": 1,
                      "children": [{
                        "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd",
                        "text": "Which parts of the room do you want to paint? Select all that apply.",
                        "type": "question",
                        "questionType": 2,
                        "children": [{
                          "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde",
                          "text": "Wall",
                          "type": "answer",
                          "controlType": 1,
                          "children": [{
                            "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0",
                            "text": "What is the approximate square footage of the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1",
                              "text": "Less than 300 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e",
                              "text": "300-500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6",
                              "text": "501-1000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965",
                              "text": "1001-1500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84",
                              "text": "1501-2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137",
                              "text": "More than 2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab",
                          "text": "Ceilings",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080",
                          "text": "Molding and trim",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42",
                          "text": "Window frames and sills",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313",
                          "text": "Doors",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f",
                          "text": "Closets",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9",
                          "text": "Other",
                          "type": "answer",
                          "controlType": 2,
                          "children": []
                        }]
                      }]
                    }, {
                      "uuid": "9203778f-0ea3-4964-a653-5daabcd51ee9",
                      "text": "Stairs",
                      "type": "answer",
                      "controlType": 1,
                      "children": [{
                        "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd",
                        "text": "Which parts of the room do you want to paint? Select all that apply.",
                        "type": "question",
                        "questionType": 2,
                        "children": [{
                          "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde",
                          "text": "Wall",
                          "type": "answer",
                          "controlType": 1,
                          "children": [{
                            "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0",
                            "text": "What is the approximate square footage of the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1",
                              "text": "Less than 300 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e",
                              "text": "300-500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6",
                              "text": "501-1000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965",
                              "text": "1001-1500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84",
                              "text": "1501-2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137",
                              "text": "More than 2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab",
                          "text": "Ceilings",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080",
                          "text": "Molding and trim",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42",
                          "text": "Window frames and sills",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313",
                          "text": "Doors",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f",
                          "text": "Closets",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9",
                          "text": "Other",
                          "type": "answer",
                          "controlType": 2,
                          "children": []
                        }]
                      }]
                    }, {
                      "uuid": "e69c823b-4a30-49a8-a4f6-f58efe142628",
                      "text": "Other",
                      "type": "answer",
                      "controlType": 2,
                      "children": [{
                        "uuid": "ba4b8838-1fb7-4fef-9647-7a63c48357dd",
                        "text": "Which parts of the room do you want to paint? Select all that apply.",
                        "type": "question",
                        "questionType": 2,
                        "children": [{
                          "uuid": "57d6fbca-ab93-4e8f-b668-c8e55f921cde",
                          "text": "Wall",
                          "type": "answer",
                          "controlType": 1,
                          "children": [{
                            "uuid": "cd5cdf8f-7727-405f-a701-54032201e8f0",
                            "text": "What is the approximate square footage of the area to be painted?",
                            "type": "question",
                            "questionType": 1,
                            "children": [{
                              "uuid": "6ad833e0-5b03-428a-840b-ebe58f216bc1",
                              "text": "Less than 300 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "0ba99579-516e-4466-beac-dcfc457fbd4e",
                              "text": "300-500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "f9cf696a-1295-461e-b419-dc728bbe3de6",
                              "text": "501-1000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "4955dfa6-aedc-40c2-ada1-8f3adac15965",
                              "text": "1001-1500 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "902c41a5-3e2d-482f-b4c7-95eccac4da84",
                              "text": "1501-2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }, {
                              "uuid": "adf6c246-a0c0-4999-a569-47e09f08a137",
                              "text": "More than 2000 sq. ft.",
                              "type": "answer",
                              "controlType": 3,
                              "children": [{
                                "uuid": "d38a71fd-e4f6-48b8-a7d4-907d8a88aaa8",
                                "text": "Approximately how high are the ceilings in the area to be painted?",
                                "type": "question",
                                "questionType": 1,
                                "children": [{
                                  "uuid": "99acf705-32be-4cdd-87fe-58ae28a5812c",
                                  "text": "Under 10 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "e7c15f9b-ec25-46ba-af3d-d8b298fd4624",
                                  "text": "10-12 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "02d0be5c-689d-457e-be85-aa2ed608ff74",
                                  "text": "12-14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "2c20ecef-2461-4ea9-bb7a-c3bd32582014",
                                  "text": "Over 14 feet",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }, {
                                  "uuid": "75c953b5-2313-468c-be3b-9d495d343666",
                                  "text": "Im not sure",
                                  "type": "answer",
                                  "controlType": 3,
                                  "children": [{
                                    "uuid": "494db527-20d0-4542-8168-58c08864c1e1",
                                    "text": "Who will move and cover furniture in the rooms to be painted?",
                                    "type": "question",
                                    "questionType": 1,
                                    "children": [{
                                      "uuid": "f44c37fa-36c8-433d-908b-eba3664556d1",
                                      "text": "The area is unfurnished",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "30eb8866-ee40-4b59-b0aa-bec824935297",
                                      "text": "Ill move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }, {
                                      "uuid": "c038c0ab-7c0a-4da0-9e34-713c26f30338",
                                      "text": "I want the pro to move and cover furniture",
                                      "type": "answer",
                                      "controlType": 3,
                                      "children": []
                                    }]
                                  }]
                                }]
                              }]
                            }]
                          }]
                        }, {
                          "uuid": "bd29bb81-3a7a-4c5a-90ec-89f90dfb12ab",
                          "text": "Ceilings",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "03fa9eb3-c31a-43ff-8cc9-2534f8e05080",
                          "text": "Molding and trim",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "3a7a69cf-e458-4fa8-88c0-1b5d9bf6ff42",
                          "text": "Window frames and sills",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "edc12fbe-c62e-4fca-9d32-763cb1944313",
                          "text": "Doors",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "aedb2bc2-eebf-4bfb-901a-60d63fe7984f",
                          "text": "Closets",
                          "type": "answer",
                          "controlType": 1,
                          "children": []
                        }, {
                          "uuid": "509f6fa6-69e1-4995-9159-58e97f6591b9",
                          "text": "Other",
                          "type": "answer",
                          "controlType": 2,
                          "children": []
                        }]
                      }]
                    }]
                  }]
                }, {
                  "uuid": "36dda4f3-e700-4414-bf5c-3ff12d1c9101",
                  "text": "3-4 rooms",
                  "type": "answer",
                  "controlType": 3,
                  "children": []
                }, {
                  "uuid": "8b7745b2-b83d-448f-a644-eb8194636816",
                  "text": "5 or more rooms",
                  "type": "answer",
                  "controlType": 3,
                  "children": []
                }, {
                  "uuid": "5223d81c-60a8-4178-9684-3abdd20c7346",
                  "text": "Whole house",
                  "type": "answer",
                  "controlType": 3,
                  "children": []
                }, {
                  "uuid": "b115dfe1-091b-4097-8a86-0ec091eb4377",
                  "text": "Trim, cabinets or other objects",
                  "type": "answer",
                  "controlType": 3,
                  "children": []
                }]
              }]
            }, {
              "uuid": "c5894889-03c3-4143-90e4-efdbc943f88c",
              "text": "Faux, texture and decorative painting",
              "type": "answer",
              "controlType": 3,
              "children": []
            }, {
              "uuid": "ed61380a-f905-499a-be36-f79bebe395bb",
              "text": "Wallpaper hanging",
              "type": "answer",
              "controlType": 3,
              "children": []
            }, {
              "uuid": "87f7a339-4f42-4b08-b139-30ab8a064007",
              "text": "Other",
              "type": "answer",
              "controlType": 4,
              "children": []
            }]
          }]
        }, {
          "uuid": "4777c899-a293-4313-911d-44c02d4299e6",
          "text": "Outside",
          "type": "answer",
          "controlType": 3,
          "children": []
        }]
      }],
      'activeNode': null,
      'deleteNode': null,
      'copyNode': null,
      'isEditing': false,
      'newQuestion': question,
      'newAnswer': answer
    };
  },
  computed: {//
  },
  components: {
    'Tree': _tree_Tree_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    'b-modal': bootstrap_vue_es_components_modal_modal__WEBPACK_IMPORTED_MODULE_1___default.a
  },
  directives: {
    'b-modal': bootstrap_vue_es_directives_modal_modal__WEBPACK_IMPORTED_MODULE_2___default.a
  },
  mounted: function mounted() {//console.log(LOCAL_URLS.QUESTION.CREATE);
  },
  updated: function updated() {},
  methods: {
    doOnNodeClickAdd: function doOnNodeClickAdd(node) {
      this.activeNode = node;

      if (this.activeNode.type == 'question') {
        this.newAnswer.uuid = uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()();
        console.log(this.activeNode.questionType);
        this.newAnswer.controlType = this.activeNode.questionType == 1 ? 3 : 1;
        this.$refs.AddAnswerModal.show();
      } else {
        this.newQuestion.uuid = uuid_v4__WEBPACK_IMPORTED_MODULE_4___default()();
        this.$refs.AddQuestionModal.show();
      }
    },
    resetObjs: function resetObjs() {
      this.newQuestion = {
        'uuid': '',
        'text': '',
        'type': 'question',
        'questionType': 1,
        'children': []
      };
      this.newAnswer = {
        'uuid': '',
        'text': '',
        'type': 'answer',
        'controlType': '',
        'children': []
      };
    },
    doOnNodeClickDel: function doOnNodeClickDel(node) {
      this.deleteNode = node;
      this.$refs.ConfirmDelNodeModal.show();
    },
    doOnNodeClickEdit: function doOnNodeClickEdit(node) {
      this.isEditing = true;
      this.activeNode = node;

      if (node.type == 'question') {
        this.copyObj(node, this.newQuestion);
        this.$refs.AddQuestionModal.show();
      } else {
        this.copyObj(node, this.newAnswer);
        this.$refs.AddAnswerModal.show();
      }
    },
    doOnDeleteNode: function doOnDeleteNode() {
      var _this = this;

      this.$refs.ConfirmDelNodeModal.hide();
      this.tree.forEach(function (q, i) {
        if (q.uuid === _this.deleteNode.uuid) {
          _this.tree.splice(i, 1);
        } else {
          _this.nodeDelete(q, _this.deleteNode);
        }
      });
      this.deleteNode = null;
    },
    addNewRootQuestion: function addNewRootQuestion() {
      this.resetObjs();
      this.$refs.AddQuestionModal.show();
    },
    doOnAddNewQuestion: function doOnAddNewQuestion() {
      if (this.isEditing) {
        console.log('isEditing');
        this.copyObj(this.newQuestion, this.activeNode);
        this.isEditing = false;
      } else {
        console.log('not isEditing');

        if (this.activeNode == null) {
          this.tree.push(this.newQuestion);
        } else {
          console.log(this.activeNode);
          this.activeNode.children.push(this.newQuestion);
        }
      }

      this.activeNode = null;
      this.resetObjs();
    },
    doOnAddNewAnswer: function doOnAddNewAnswer() {
      if (this.isEditing) {
        console.log('isEditing');
        this.copyObj(this.newAnswer, this.activeNode);
        this.isEditing = false;
      } else {
        console.log('not isEditing');
        console.log(this.activeNode);
        this.activeNode.children.push(this.newAnswer);
      }

      this.activeNode = null;
      this.resetObjs();
    },
    nodeDelete: function nodeDelete(rootNode, node) {
      var _this2 = this;

      rootNode.children.forEach(function (e, i) {
        if (e.uuid === node.uuid) {
          rootNode.children.splice(i, 1);
          return;
        } else {
          _this2.nodeDelete(e, node);
        }
      });
    },
    focusModalInput: function focusModalInput() {
      this.$refs.inputTextModal.focus();
    },
    doOnNodeClickCopy: function doOnNodeClickCopy(node) {
      this.copyNode = node;
    },
    doOnNodeClickPaste: function doOnNodeClickPaste(node) {
      node.children.push(this.copyNode);
      this.resetObjs();
    },
    copyObj: function copyObj(from, to) {
      for (var p in from) {
        to[p] = from[p];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/NodeTree.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tree/NodeTree.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "node",
  props: {
    node: Object,
    handleClickAdd: Function,
    handleClickEdit: Function,
    handleClickDel: Function,
    handleClickCopy: Function,
    handleClickPaste: Function
  },
  methods: {
    nodeTypeText: function nodeTypeText() {
      if (this.node.type == 'answer') {
        switch (this.node.controlType) {
          case 1:
            return 'Checkbox';
            break;

          case 2:
            return 'Checkbox/Text';
            break;

          case 3:
            return 'Radio Buttom';
            break;

          default:
            return 'Radio Buttom/Text';
            break;
        }
      } else {
        switch (this.node.questionType) {
          case 1:
            return 'Single Choice';
            break;

          default:
            return 'Multiple Choices';
            break;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/Tree.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tree/Tree.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NodeTree__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeTree */ "./resources/js/components/tree/NodeTree.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    treeData: Object
  },
  components: {
    NodeTree: _NodeTree__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    handleClickAdd: function handleClickAdd(node) {
      this.$emit('node-click-add', node);
    },
    handleClickEdit: function handleClickEdit(node) {
      this.$emit('node-click-edit', node);
    },
    handleClickDel: function handleClickDel(node) {
      this.$emit('node-click-del', node);
    },
    handleClickCopy: function handleClickCopy(node) {
      this.$emit('node-click-copy', node);
    },
    handleClickPaste: function handleClickPaste(node) {
      this.$emit('node-click-paste', node);
    }
  }
});

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button/button-close.js":
/*!*************************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button/button-close.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var props = {
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Close'
  },
  textVariant: {
    type: String,
    default: null
  } // @vue/component

};
var _default = {
  name: 'BButtonClose',
  functional: true,
  props: props,
  render: function render(h, _ref) {
    var props = _ref.props,
        data = _ref.data,
        listeners = _ref.listeners,
        slots = _ref.slots;
    var componentData = {
      staticClass: 'close',
      class: _defineProperty({}, "text-".concat(props.textVariant), props.textVariant),
      attrs: {
        type: 'button',
        disabled: props.disabled,
        'aria-label': props.ariaLabel ? String(props.ariaLabel) : null
      },
      on: {
        click: function click(e) {
          // Ensure click on button HTML content is also disabled

          /* istanbul ignore if: bug in JSDOM still emits click on inner element */
          if (props.disabled && e instanceof Event) {
            e.stopPropagation();
            e.preventDefault();
          }
        }
      } // Careful not to override the default slot with innerHTML

    };

    if (!slots().default) {
      componentData.domProps = {
        innerHTML: '&times;'
      };
    }

    return h('button', (0, _vueFunctionalDataMerge.mergeData)(data, componentData), slots().default);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/button/button.js":
/*!*******************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/button/button.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.props = void 0;

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

var _pluckProps = __webpack_require__(/*! ../../utils/pluck-props */ "./node_modules/bootstrap-vue/es/utils/pluck-props.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _link = __webpack_require__(/*! ../link/link */ "./node_modules/bootstrap-vue/es/components/link/link.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var btnProps = {
  block: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: null
  },
  type: {
    type: String,
    default: 'button'
  },
  tag: {
    type: String,
    default: 'button'
  },
  pressed: {
    // tri-state prop: true, false or null
    // => on, off, not a toggle
    type: Boolean,
    default: null
  }
};
var linkProps = (0, _link.propsFactory)();
delete linkProps.href.default;
delete linkProps.to.default;
var linkPropKeys = (0, _object.keys)(linkProps);

var props = _objectSpread({}, linkProps, btnProps); // Focus handler for toggle buttons.  Needs class of 'focus' when focused.


exports.props = props;

function handleFocus(evt) {
  if (evt.type === 'focusin') {
    (0, _dom.addClass)(evt.target, 'focus');
  } else if (evt.type === 'focusout') {
    (0, _dom.removeClass)(evt.target, 'focus');
  }
} // Helper functons to minimize runtime memory footprint when lots of buttons on page
// Is the requested button a link?


function isLink(props) {
  // If tag prop is set to `a`, we use a b-link to get proper disabled handling
  return Boolean(props.href || props.to || props.tag && String(props.tag).toLowerCase() === 'a');
} // Is the button to be a toggle button?


function isToggle(props) {
  return typeof props.pressed === 'boolean';
} // Is the button "really" a button?


function isButton(props) {
  if (isLink(props)) {
    return false;
  } else if (props.tag && String(props.tag).toLowerCase() !== 'button') {
    return false;
  }

  return true;
} // Is the requested tag not a button or link?


function isNonStandardTag(props) {
  return !isLink(props) && !isButton(props);
} // Compute required classes (non static classes)


function computeClass(props) {
  var _ref;

  return [props.variant ? "btn-".concat(props.variant) : "btn-secondary", (_ref = {}, _defineProperty(_ref, "btn-".concat(props.size), Boolean(props.size)), _defineProperty(_ref, 'btn-block', props.block), _defineProperty(_ref, "disabled", props.disabled), _defineProperty(_ref, "active", props.pressed), _ref)];
} // Compute the link props to pass to b-link (if required)


function computeLinkProps(props) {
  return isLink(props) ? (0, _pluckProps.default)(linkPropKeys, props) : null;
} // Compute the attributes for a button


function computeAttrs(props, data) {
  var button = isButton(props);
  var link = isLink(props);
  var toggle = isToggle(props);
  var nonStdTag = isNonStandardTag(props);
  var role = data.attrs && data.attrs['role'] ? data.attrs['role'] : null;
  var tabindex = data.attrs ? data.attrs['tabindex'] : null;

  if (nonStdTag) {
    tabindex = '0';
  }

  return {
    // Type only used for "real" buttons
    type: button && !link ? props.type : null,
    // Disabled only set on "real" buttons
    disabled: button ? props.disabled : null,
    // We add a role of button when the tag is not a link or button for ARIA.
    // Don't bork any role provided in data.attrs when isLink or isButton
    role: nonStdTag ? 'button' : role,
    // We set the aria-disabled state for non-standard tags
    'aria-disabled': nonStdTag ? String(props.disabled) : null,
    // For toggles, we need to set the pressed state for ARIA
    'aria-pressed': toggle ? String(props.pressed) : null,
    // autocomplete off is needed in toggle mode to prevent some browsers from
    // remembering the previous setting when using the back button.
    autocomplete: toggle ? 'off' : null,
    // Tab index is used when the component is not a button.
    // Links are tabbable, but don't allow disabled, while non buttons or links
    // are not tabbable, so we mimic that functionality by disabling tabbing
    // when disabled, and adding a tabindex of '0' to non buttons or non links.
    tabindex: props.disabled && !button ? '-1' : tabindex
  };
} // @vue/component


var _default = {
  name: 'BButton',
  functional: true,
  props: props,
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        listeners = _ref2.listeners,
        children = _ref2.children;
    var toggle = isToggle(props);
    var link = isLink(props);
    var on = {
      click: function click(e) {
        /* istanbul ignore if: blink/button disabled should handle this */
        if (props.disabled && e instanceof Event) {
          e.stopPropagation();
          e.preventDefault();
        } else if (toggle && listeners && listeners['update:pressed']) {
          // Send .sync updates to any "pressed" prop (if .sync listeners)
          // Concat will normalize the value to an array
          // without double wrapping an array value in an array.
          (0, _array.concat)(listeners['update:pressed']).forEach(function (fn) {
            if (typeof fn === 'function') {
              fn(!props.pressed);
            }
          });
        }
      }
    };

    if (toggle) {
      on.focusin = handleFocus;
      on.focusout = handleFocus;
    }

    var componentData = {
      staticClass: 'btn',
      class: computeClass(props),
      props: computeLinkProps(props),
      attrs: computeAttrs(props, data),
      on: on
    };
    return h(link ? _link.default : props.tag, (0, _vueFunctionalDataMerge.mergeData)(data, componentData), children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/link/link.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/link/link.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.propsFactory = propsFactory;
exports.pickLinkProps = pickLinkProps;
exports.omitLinkProps = omitLinkProps;
exports.default = exports.props = void 0;

var _object = __webpack_require__(/*! ../../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ../../utils/array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _router = __webpack_require__(/*! ../../utils/router */ "./node_modules/bootstrap-vue/es/utils/router.js");

var _vueFunctionalDataMerge = __webpack_require__(/*! vue-functional-data-merge */ "./node_modules/vue-functional-data-merge/dist/lib.esm.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * The Link component is used in many other BV components.
 * As such, sharing its props makes supporting all its features easier.
 * However, some components need to modify the defaults for their own purpose.
 * Prefer sharing a fresh copy of the props to ensure mutations
 * do not affect other component references to the props.
 *
 * https://github.com/vuejs/vue-router/blob/dev/src/components/link.js
 * @return {{}}
 */
function propsFactory() {
  return {
    href: {
      type: String,
      default: null
    },
    rel: {
      type: String,
      default: null
    },
    target: {
      type: String,
      default: '_self'
    },
    active: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    // router-link specific props
    to: {
      type: [String, Object],
      default: null
    },
    append: {
      type: Boolean,
      default: false
    },
    replace: {
      type: Boolean,
      default: false
    },
    event: {
      type: [String, Array],
      default: 'click'
    },
    activeClass: {
      type: String // default: undefined

    },
    exact: {
      type: Boolean,
      default: false
    },
    exactActiveClass: {
      type: String // default: undefined

    },
    routerTag: {
      type: String,
      default: 'a'
    },
    // nuxt-link specific prop(s)
    noPrefetch: {
      type: Boolean,
      default: false
    }
  };
}

var props = propsFactory(); // Return a fresh copy of BLink props, containing only the specifeid prop(s)

exports.props = props;

function pickLinkProps(propsToPick) {
  var freshLinkProps = propsFactory(); // Normalize everything to array.

  propsToPick = (0, _array.concat)(propsToPick);
  return (0, _object.keys)(freshLinkProps).reduce(function (memo, prop) {
    if ((0, _array.arrayIncludes)(propsToPick, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
} // Return a fresh copy of BLink props, keeping all but the specified omitting prop(s)


function omitLinkProps(propsToOmit) {
  var freshLinkProps = propsFactory(); // Normalize everything to array.

  propsToOmit = (0, _array.concat)(propsToOmit);
  return (0, _object.keys)(props).reduce(function (memo, prop) {
    if (!(0, _array.arrayIncludes)(propsToOmit, prop)) {
      memo[prop] = freshLinkProps[prop];
    }

    return memo;
  }, {});
}

function clickHandlerFactory(_ref) {
  var disabled = _ref.disabled,
      tag = _ref.tag,
      href = _ref.href,
      suppliedHandler = _ref.suppliedHandler,
      parent = _ref.parent;
  return function onClick(evt) {
    if (disabled && evt instanceof Event) {
      // Stop event from bubbling up.
      evt.stopPropagation(); // Kill the event loop attached to this specific EventTarget.

      evt.stopImmediatePropagation();
    } else {
      if ((0, _router.isRouterLink)(tag) && evt.target.__vue__) {
        // Router links do not emit instance 'click' events, so we
        // add in an $emit('click', evt) on it's vue instance
        evt.target.__vue__.$emit('click', evt);
      }

      if (typeof suppliedHandler === 'function') {
        suppliedHandler.apply(void 0, arguments);
      }

      parent.$root.$emit('clicked::link', evt);
    }

    if (!(0, _router.isRouterLink)(tag) && href === '#' || disabled) {
      // Stop scroll-to-top behavior or navigation on regular links
      // when href is just '#'
      evt.preventDefault();
    }
  };
} // @vue/component


var _default = {
  name: 'BLink',
  functional: true,
  props: propsFactory(),
  render: function render(h, _ref2) {
    var props = _ref2.props,
        data = _ref2.data,
        parent = _ref2.parent,
        children = _ref2.children;
    var tag = (0, _router.computeTag)(props, parent);
    var rel = (0, _router.computeRel)(props);
    var href = (0, _router.computeHref)(props, tag);
    var eventType = (0, _router.isRouterLink)(tag) ? 'nativeOn' : 'on';
    var suppliedHandler = (data[eventType] || {}).click;
    var handlers = {
      click: clickHandlerFactory({
        tag: tag,
        href: href,
        disabled: props.disabled,
        suppliedHandler: suppliedHandler,
        parent: parent
      })
    };
    var componentData = (0, _vueFunctionalDataMerge.mergeData)(data, {
      class: {
        active: props.active,
        disabled: props.disabled
      },
      attrs: {
        rel: rel,
        target: props.target,
        tabindex: props.disabled ? '-1' : data.attrs ? data.attrs.tabindex : null,
        'aria-disabled': props.disabled ? 'true' : null
      },
      props: _objectSpread({}, props, {
        tag: props.routerTag
      })
    }); // If href attribute exists on router-link (even undefined or null) it fails working on SSR
    // So we explicitly add it here if needed (i.e. if computeHref() is truthy)

    if (href) {
      componentData.attrs.href = href;
    } // We want to overwrite any click handler since our callback
    // will invoke the user supplied handler if !props.disabled


    componentData[eventType] = _objectSpread({}, componentData[eventType] || {}, handlers);
    return h(tag, componentData, children);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/components/modal/modal.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/components/modal/modal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _button = __webpack_require__(/*! ../button/button */ "./node_modules/bootstrap-vue/es/components/button/button.js");

var _buttonClose = __webpack_require__(/*! ../button/button-close */ "./node_modules/bootstrap-vue/es/components/button/button-close.js");

var _id = __webpack_require__(/*! ../../mixins/id */ "./node_modules/bootstrap-vue/es/mixins/id.js");

var _listenOnRoot = __webpack_require__(/*! ../../mixins/listen-on-root */ "./node_modules/bootstrap-vue/es/mixins/listen-on-root.js");

var _observeDom = __webpack_require__(/*! ../../utils/observe-dom */ "./node_modules/bootstrap-vue/es/utils/observe-dom.js");

var _warn = __webpack_require__(/*! ../../utils/warn */ "./node_modules/bootstrap-vue/es/utils/warn.js");

var _keyCodes = __webpack_require__(/*! ../../utils/key-codes */ "./node_modules/bootstrap-vue/es/utils/key-codes.js");

var _bvEvent = __webpack_require__(/*! ../../utils/bv-event.class */ "./node_modules/bootstrap-vue/es/utils/bv-event.class.js");

var _html = __webpack_require__(/*! ../../utils/html */ "./node_modules/bootstrap-vue/es/utils/html.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Selectors for padding/margin adjustments
var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler' // ObserveDom config

};
var OBSERVER_CONFIG = {
  subtree: true,
  childList: true,
  characterData: true,
  attributes: true,
  attributeFilter: ['style', 'class'] // modal wrapper ZINDEX offset incrememnt

};
var ZINDEX_OFFSET = 2000; // Modal open count helpers

function getModalOpenCount() {
  return parseInt((0, _dom.getAttr)(document.body, 'data-modal-open-count') || 0, 10);
}

function setModalOpenCount(count) {
  (0, _dom.setAttr)(document.body, 'data-modal-open-count', String(count));
  return count;
}

function incrementModalOpenCount() {
  return setModalOpenCount(getModalOpenCount() + 1);
}

function decrementModalOpenCount() {
  return setModalOpenCount(Math.max(getModalOpenCount() - 1, 0));
} // Returns the current visible modal highest z-index


function getModalMaxZIndex() {
  return (0, _dom.selectAll)('div.modal')
  /* find all modals that are in document */
  .filter(_dom.isVisible)
  /* filter only visible ones */
  .map(function (m) {
    return m.parentElement;
  })
  /* select the outer div */
  .reduce(function (max, el) {
    /* compute the highest z-index */
    return Math.max(max, parseInt(el.style.zIndex || 0, 10));
  }, 0);
} // Returns the next z-index to be used by a modal to ensure proper stacking
// regardless of document order. Increments by 2000


function getModalNextZIndex() {
  return getModalMaxZIndex() + ZINDEX_OFFSET;
} // @vue/component


var _default = {
  name: 'BModal',
  components: {
    BButton: _button.default,
    BButtonClose: _buttonClose.default
  },
  mixins: [_id.default, _listenOnRoot.default],
  model: {
    prop: 'visible',
    event: 'change'
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    titleHtml: {
      type: String
    },
    titleTag: {
      type: String,
      default: 'h5'
    },
    size: {
      type: String,
      default: 'md'
    },
    centered: {
      type: Boolean,
      default: false
    },
    scrollable: {
      type: Boolean,
      default: false
    },
    buttonSize: {
      type: String,
      default: ''
    },
    noStacking: {
      type: Boolean,
      default: false
    },
    noFade: {
      type: Boolean,
      default: false
    },
    noCloseOnBackdrop: {
      type: Boolean,
      default: false
    },
    noCloseOnEsc: {
      type: Boolean,
      default: false
    },
    noEnforceFocus: {
      type: Boolean,
      default: false
    },
    headerBgVariant: {
      type: String,
      default: null
    },
    headerBorderVariant: {
      type: String,
      default: null
    },
    headerTextVariant: {
      type: String,
      default: null
    },
    headerCloseVariant: {
      type: String,
      default: null
    },
    headerClass: {
      type: [String, Array],
      default: null
    },
    bodyBgVariant: {
      type: String,
      default: null
    },
    bodyTextVariant: {
      type: String,
      default: null
    },
    modalClass: {
      type: [String, Array],
      default: null
    },
    dialogClass: {
      type: [String, Array],
      default: null
    },
    contentClass: {
      type: [String, Array],
      default: null
    },
    bodyClass: {
      type: [String, Array],
      default: null
    },
    footerBgVariant: {
      type: String,
      default: null
    },
    footerBorderVariant: {
      type: String,
      default: null
    },
    footerTextVariant: {
      type: String,
      default: null
    },
    footerClass: {
      type: [String, Array],
      default: null
    },
    hideHeader: {
      type: Boolean,
      default: false
    },
    hideFooter: {
      type: Boolean,
      default: false
    },
    hideHeaderClose: {
      type: Boolean,
      default: false
    },
    hideBackdrop: {
      type: Boolean,
      default: false
    },
    okOnly: {
      type: Boolean,
      default: false
    },
    okDisabled: {
      type: Boolean,
      default: false
    },
    cancelDisabled: {
      type: Boolean,
      default: false
    },
    visible: {
      type: Boolean,
      default: false
    },
    returnFocus: {
      // type: Object,
      default: null
    },
    headerCloseLabel: {
      type: String,
      default: 'Close'
    },
    cancelTitle: {
      type: String,
      default: 'Cancel'
    },
    cancelTitleHtml: {
      type: String
    },
    okTitle: {
      type: String,
      default: 'OK'
    },
    okTitleHtml: {
      type: String
    },
    cancelVariant: {
      type: String,
      default: 'secondary'
    },
    okVariant: {
      type: String,
      default: 'primary'
    },
    lazy: {
      type: Boolean,
      default: false
    },
    busy: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      is_hidden: this.lazy || false,
      // for lazy modals
      is_visible: false,
      // controls modal visible state
      is_transitioning: false,
      // Used for style control
      is_show: false,
      // Used for style control
      is_block: false,
      // Used for style control
      is_opening: false,
      // Semaphore for previnting incorrect modal open counts
      is_closing: false,
      // Semapbore for preventing incorrect modal open counts
      scrollbarWidth: 0,
      zIndex: ZINDEX_OFFSET,
      // z-index for modal stacking
      isTop: true,
      // If the modal is the topmost opened modal
      isBodyOverflowing: false,
      return_focus: this.returnFocus || null
    };
  },
  computed: {
    contentClasses: function contentClasses() {
      return ['modal-content', this.contentClass];
    },
    modalClasses: function modalClasses() {
      return [{
        fade: !this.noFade,
        show: this.is_show,
        'd-block': this.is_block
      }, this.modalClass];
    },
    dialogClasses: function dialogClasses() {
      var _ref;

      return [(_ref = {}, _defineProperty(_ref, "modal-".concat(this.size), Boolean(this.size)), _defineProperty(_ref, 'modal-dialog-centered', this.centered), _defineProperty(_ref, 'modal-dialog-scrollable', this.scrollable), _ref), this.dialogClass];
    },
    backdropClasses: function backdropClasses() {
      return {
        fade: !this.noFade,
        show: this.is_show || this.noFade
      };
    },
    headerClasses: function headerClasses() {
      var _ref2;

      return [(_ref2 = {}, _defineProperty(_ref2, "bg-".concat(this.headerBgVariant), Boolean(this.headerBgVariant)), _defineProperty(_ref2, "text-".concat(this.headerTextVariant), Boolean(this.headerTextVariant)), _defineProperty(_ref2, "border-".concat(this.headerBorderVariant), Boolean(this.headerBorderVariant)), _ref2), this.headerClass];
    },
    bodyClasses: function bodyClasses() {
      var _ref3;

      return [(_ref3 = {}, _defineProperty(_ref3, "bg-".concat(this.bodyBgVariant), Boolean(this.bodyBgVariant)), _defineProperty(_ref3, "text-".concat(this.bodyTextVariant), Boolean(this.bodyTextVariant)), _ref3), this.bodyClass];
    },
    footerClasses: function footerClasses() {
      var _ref4;

      return [(_ref4 = {}, _defineProperty(_ref4, "bg-".concat(this.footerBgVariant), Boolean(this.footerBgVariant)), _defineProperty(_ref4, "text-".concat(this.footerTextVariant), Boolean(this.footerTextVariant)), _defineProperty(_ref4, "border-".concat(this.footerBorderVariant), Boolean(this.footerBorderVariant)), _ref4), this.footerClass];
    },
    modalOuterStyle: function modalOuterStyle() {
      return {
        // We only set these styles on the stacked modals (ones with next z-index > 0).
        position: 'absolute',
        zIndex: this.zIndex
      };
    }
  },
  watch: {
    visible: function visible(newVal, oldVal) {
      if (newVal === oldVal) {
        return;
      }

      this[newVal ? 'show' : 'hide']();
    }
  },
  created: function created() {
    // create non-reactive property
    this._observer = null;
  },
  mounted: function mounted() {
    // Listen for events from others to either open or close ourselves
    // And listen to all modals to enable/disable enforce focus
    this.listenOnRoot('bv::show::modal', this.showHandler);
    this.listenOnRoot('bv::modal::shown', this.shownHandler);
    this.listenOnRoot('bv::hide::modal', this.hideHandler);
    this.listenOnRoot('bv::modal::hidden', this.hiddenHandler);
    this.listenOnRoot('bv::toggle::modal', this.toggleHandler); // Listen for bv:modal::show events, and close ourselves if the opening modal not us

    this.listenOnRoot('bv::modal::show', this.modalListener); // Initially show modal?

    if (this.visible === true) {
      this.show();
    }
  },
  beforeDestroy: function beforeDestroy()
  /* instanbul ignore next */
  {
    // Ensure everything is back to normal
    if (this._observer) {
      this._observer.disconnect();

      this._observer = null;
    } // Ensure our root "once" listener is gone


    this.$root.$off('bv::modal::hidden', this.doShow);
    this.setEnforceFocus(false);
    this.setResizeEvent(false);

    if (this.is_visible) {
      this.is_visible = false;
      this.is_show = false;
      this.is_transitioning = false;
      var count = decrementModalOpenCount();

      if (count === 0) {
        // Re-adjust body/navbar/fixed padding/margins (as we were the last modal open)
        this.setModalOpenClass(false);
        this.resetScrollbar();
        this.resetDialogAdjustments();
      }
    }
  },
  methods: {
    // Public Methods
    show: function show() {
      if (this.is_visible || this.is_opening) {
        // if already open, on in the process of opening, do nothing
        return;
      }

      if (this.is_closing) {
        // if we are in the process of closing, wait until hidden before re-opening
        this.$once('hidden', this.show);
        return;
      }

      this.is_opening = true;
      var showEvt = new _bvEvent.default('show', {
        cancelable: true,
        vueTarget: this,
        target: this.$refs.modal,
        modalId: this.safeId(),
        relatedTarget: null
      });
      this.emitEvent(showEvt); // Don't show if canceled

      if (showEvt.defaultPrevented || this.is_visible) {
        this.is_opening = false;
        return;
      }

      if (!this.noStacking) {
        // Find the z-index to use
        this.zIndex = getModalNextZIndex(); // Show the modal

        this.doShow();
        return;
      }

      if ((0, _dom.hasClass)(document.body, 'modal-open')) {
        // If another modal is already open, wait for it to close
        this.$root.$once('bv::modal::hidden', this.doShow);
        return;
      } // Show the modal


      this.doShow();
    },
    hide: function hide(trigger) {
      if (!this.is_visible || this.is_closing) {
        return;
      }

      this.is_closing = true;
      var hideEvt = new _bvEvent.default('hide', {
        cancelable: true,
        vueTarget: this,
        target: this.$refs.modal,
        modalId: this.safeId(),
        // this could be the trigger element/component reference
        relatedTarget: null,
        isOK: trigger || null,
        trigger: trigger || null,
        cancel: function cancel() {
          // Backwards compatibility
          (0, _warn.default)('b-modal: evt.cancel() is deprecated. Please use evt.preventDefault().');
          this.preventDefault();
        }
      });

      if (trigger === 'ok') {
        this.$emit('ok', hideEvt);
      } else if (trigger === 'cancel') {
        this.$emit('cancel', hideEvt);
      }

      this.emitEvent(hideEvt); // Hide if not canceled

      if (hideEvt.defaultPrevented || !this.is_visible) {
        this.is_closing = false;
        return;
      } // stop observing for content changes


      if (this._observer) {
        this._observer.disconnect();

        this._observer = null;
      }

      this.is_visible = false;
      this.$emit('change', false);
    },
    // Public method to toggle modal visibility
    toggle: function toggle(triggerEl) {
      if (triggerEl) {
        this.return_focus = triggerEl;
      }

      if (this.is_visible) {
        this.hide('toggle');
      } else {
        this.show();
      }
    },
    // Private method to finish showing modal
    doShow: function doShow() {
      var _this = this;

      // Place modal in DOM if lazy
      this.is_hidden = false;
      this.$nextTick(function () {
        // We do this in nextTick to ensure the modal is in DOM first before we show it
        _this.is_visible = true;
        _this.is_opening = false;

        _this.$emit('change', true); // Observe changes in modal content and adjust if necessary


        _this._observer = (0, _observeDom.default)(_this.$refs.content, _this.adjustDialog.bind(_this), OBSERVER_CONFIG);
      });
    },
    // Transition Handlers
    onBeforeEnter: function onBeforeEnter() {
      this.getScrollbarWidth();
      this.is_transitioning = true;
      this.checkScrollbar();
      var count = incrementModalOpenCount();

      if (count === 1) {
        this.setScrollbar();
      }

      this.adjustDialog();
      this.setModalOpenClass(true);
      this.setResizeEvent(true);
    },
    onEnter: function onEnter() {
      this.is_block = true;
    },
    onAfterEnter: function onAfterEnter() {
      var _this2 = this;

      this.is_show = true;
      this.is_transitioning = false;
      this.$nextTick(function () {
        var shownEvt = new _bvEvent.default('shown', {
          cancelable: false,
          vueTarget: _this2,
          target: _this2.$refs.modal,
          modalId: _this2.safeId(),
          relatedTarget: null
        });

        _this2.emitEvent(shownEvt);

        _this2.focusFirst();

        _this2.setEnforceFocus(true);
      });
    },
    onBeforeLeave: function onBeforeLeave() {
      this.is_transitioning = true;
      this.setResizeEvent(false);
    },
    onLeave: function onLeave() {
      // Remove the 'show' class
      this.is_show = false;
    },
    onAfterLeave: function onAfterLeave() {
      var _this3 = this;

      this.is_block = false;
      this.resetDialogAdjustments();
      this.is_transitioning = false;
      var count = decrementModalOpenCount();

      if (count === 0) {
        this.resetScrollbar();
        this.setModalOpenClass(false);
      }

      this.setEnforceFocus(false);
      this.$nextTick(function () {
        _this3.is_hidden = _this3.lazy || false;
        _this3.zIndex = ZINDEX_OFFSET;

        _this3.returnFocusTo();

        _this3.is_closing = false;
        var hiddenEvt = new _bvEvent.default('hidden', {
          cancelable: false,
          vueTarget: _this3,
          target: _this3.lazy ? null : _this3.$refs.modal,
          modalId: _this3.safeId(),
          relatedTarget: null
        });

        _this3.emitEvent(hiddenEvt);
      });
    },
    // Event emitter
    emitEvent: function emitEvent(bvEvt) {
      var type = bvEvt.type;
      this.$emit(type, bvEvt);
      this.$root.$emit("bv::modal::".concat(type), bvEvt, this.safeId());
    },
    // UI Event Handlers
    onClickOut: function onClickOut(evt) {
      // Do nothing if not visible, backdrop click disabled, or element that generated
      // click event is no longer in document
      if (!this.is_visible || this.noCloseOnBackdrop || !(0, _dom.contains)(document, evt.target)) {
        return;
      } // If backdrop clicked, hide modal


      if (!(0, _dom.contains)(this.$refs.content, evt.target)) {
        this.hide('backdrop');
      }
    },
    onEsc: function onEsc(evt) {
      // If ESC pressed, hide modal
      if (evt.keyCode === _keyCodes.default.ESC && this.is_visible && !this.noCloseOnEsc) {
        this.hide('esc');
      }
    },
    // Document focusin listener
    focusHandler: function focusHandler(evt) {
      // If focus leaves modal, bring it back
      var modal = this.$refs.modal;

      if (!this.noEnforceFocus && this.isTop && this.is_visible && modal && document !== evt.target && !(0, _dom.contains)(modal, evt.target)) {
        modal.focus({
          preventScroll: true
        });
      }
    },
    // Turn on/off focusin listener
    setEnforceFocus: function setEnforceFocus(on) {
      var options = {
        passive: true,
        capture: false
      };

      if (on) {
        (0, _dom.eventOn)(document, 'focusin', this.focusHandler, options);
      } else {
        (0, _dom.eventOff)(document, 'focusin', this.focusHandler, options);
      }
    },
    // Resize Listener
    setResizeEvent: function setResizeEvent(on)
    /* istanbul ignore next: can't easily test in JSDOM */
    {
      var _this4 = this;

      ;
      ['resize', 'orientationchange'].forEach(function (evtName) {
        var options = {
          passive: true,
          capture: false
        };

        if (on) {
          (0, _dom.eventOn)(window, evtName, _this4.adjustDialog, options);
        } else {
          (0, _dom.eventOff)(window, evtName, _this4.adjustDialog, options);
        }
      });
    },
    // Root Listener handlers
    showHandler: function showHandler(id, triggerEl) {
      if (id === this.id) {
        this.return_focus = triggerEl || null;
        this.show();
      }
    },
    hideHandler: function hideHandler(id) {
      if (id === this.id) {
        this.hide('event');
      }
    },
    toggleHandler: function toggleHandler(id, triggerEl) {
      if (id === this.id) {
        this.toggle(triggerEl);
      }
    },
    shownHandler: function shownHandler() {
      this.setTop();
    },
    hiddenHandler: function hiddenHandler() {
      this.setTop();
    },
    setTop: function setTop() {
      // Determine if we are the topmost visible modal
      this.isTop = this.zIndex >= getModalMaxZIndex();
    },
    modalListener: function modalListener(bvEvt) {
      // If another modal opens, close this one
      if (this.noStacking && bvEvt.vueTarget !== this) {
        this.hide();
      }
    },
    // Focus control handlers
    focusFirst: function focusFirst() {
      // Don't try and focus if we are SSR
      if (typeof document === 'undefined') {
        return;
      }

      var modal = this.$refs.modal;
      var activeElement = document.activeElement;

      if (activeElement && (0, _dom.contains)(modal, activeElement)) {
        // If activeElement is child of modal or is modal, no need to change focus
        return;
      }

      if (modal) {
        // make sure top of modal is showing (if longer than the viewport) and
        // focus the modal content wrapper
        this.$nextTick(function () {
          modal.scrollTop = 0;
          modal.focus();
        });
      }
    },
    returnFocusTo: function returnFocusTo() {
      // Prefer returnFocus prop over event specified return_focus value
      var el = this.returnFocus || this.return_focus || null;

      if (typeof el === 'string') {
        // CSS Selector
        el = (0, _dom.select)(el);
      }

      if (el) {
        el = el.$el || el;

        if ((0, _dom.isVisible)(el)) {
          el.focus();
        }
      }
    },
    // Utility methods
    getScrollbarWidth: function getScrollbarWidth() {
      var scrollDiv = document.createElement('div');
      scrollDiv.className = 'modal-scrollbar-measure';
      document.body.appendChild(scrollDiv);
      this.scrollbarWidth = (0, _dom.getBCR)(scrollDiv).width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    },
    setModalOpenClass: function setModalOpenClass(open) {
      if (open) {
        (0, _dom.addClass)(document.body, 'modal-open');
      } else {
        (0, _dom.removeClass)(document.body, 'modal-open');
      }
    },
    adjustDialog: function adjustDialog() {
      if (!this.is_visible) {
        return;
      }

      var modal = this.$refs.modal;
      var isModalOverflowing = modal.scrollHeight > document.documentElement.clientHeight;

      if (!this.isBodyOverflowing && isModalOverflowing) {
        modal.style.paddingLeft = "".concat(this.scrollbarWidth, "px");
      } else {
        modal.style.paddingLeft = '';
      }

      if (this.isBodyOverflowing && !isModalOverflowing) {
        modal.style.paddingRight = "".concat(this.scrollbarWidth, "px");
      } else {
        modal.style.paddingRight = '';
      }
    },
    resetDialogAdjustments: function resetDialogAdjustments() {
      var modal = this.$refs.modal;

      if (modal) {
        modal.style.paddingLeft = '';
        modal.style.paddingRight = '';
      }
    },
    checkScrollbar: function checkScrollbar()
    /* istanbul ignore next: getBCR can't be tested in JSDOM */
    {
      var _getBCR = (0, _dom.getBCR)(document.body),
          left = _getBCR.left,
          right = _getBCR.right,
          height = _getBCR.height; // Extra check for body.height needed for stacked modals


      this.isBodyOverflowing = left + right < window.innerWidth || height > window.innerHeight;
    },
    setScrollbar: function setScrollbar() {
      /* istanbul ignore if: get Computed Style can't be tested in JSDOM */
      if (this.isBodyOverflowing) {
        // Note: DOMNode.style.paddingRight returns the actual value or '' if not set
        //   while $(DOMNode).css('padding-right') returns the calculated value or 0 if not set
        var body = document.body;
        var scrollbarWidth = this.scrollbarWidth;
        body._paddingChangedForModal = [];
        body._marginChangedForModal = []; // Adjust fixed content padding

        (0, _dom.selectAll)(Selector.FIXED_CONTENT).forEach(function (el) {
          var actualPadding = el.style.paddingRight;
          var calculatedPadding = (0, _dom.getCS)(el).paddingRight || 0;
          (0, _dom.setAttr)(el, 'data-padding-right', actualPadding);
          el.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");

          body._paddingChangedForModal.push(el);
        }); // Adjust sticky content margin

        (0, _dom.selectAll)(Selector.STICKY_CONTENT).forEach(function (el) {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = (0, _dom.getCS)(el).marginRight || 0;
          (0, _dom.setAttr)(el, 'data-margin-right', actualMargin);
          el.style.marginRight = "".concat(parseFloat(calculatedMargin) - scrollbarWidth, "px");

          body._marginChangedForModal.push(el);
        }); // Adjust navbar-toggler margin

        (0, _dom.selectAll)(Selector.NAVBAR_TOGGLER).forEach(function (el) {
          var actualMargin = el.style.marginRight;
          var calculatedMargin = (0, _dom.getCS)(el).marginRight || 0;
          (0, _dom.setAttr)(el, 'data-margin-right', actualMargin);
          el.style.marginRight = "".concat(parseFloat(calculatedMargin) + scrollbarWidth, "px");

          body._marginChangedForModal.push(el);
        }); // Adjust body padding

        var actualPadding = body.style.paddingRight;
        var calculatedPadding = (0, _dom.getCS)(body).paddingRight;
        (0, _dom.setAttr)(body, 'data-padding-right', actualPadding);
        body.style.paddingRight = "".concat(parseFloat(calculatedPadding) + scrollbarWidth, "px");
      }
    },
    resetScrollbar: function resetScrollbar() {
      var body = document.body;

      if (body._paddingChangedForModal) {
        // Restore fixed content padding
        body._paddingChangedForModal.forEach(function (el) {
          if ((0, _dom.hasAttr)(el, 'data-padding-right')) {
            el.style.paddingRight = (0, _dom.getAttr)(el, 'data-padding-right') || '';
            (0, _dom.removeAttr)(el, 'data-padding-right');
          }
        });
      }

      if (body._marginChangedForModal) {
        // Restore sticky content and navbar-toggler margin
        body._marginChangedForModal.forEach(function (el) {
          if ((0, _dom.hasAttr)(el, 'data-margin-right')) {
            el.style.marginRight = (0, _dom.getAttr)(el, 'data-margin-right') || '';
            (0, _dom.removeAttr)(el, 'data-margin-right');
          }
        });
      }

      body._paddingChangedForModal = null;
      body._marginChangedForModal = null; // Restore body padding

      if ((0, _dom.hasAttr)(body, 'data-padding-right')) {
        body.style.paddingRight = (0, _dom.getAttr)(body, 'data-padding-right') || '';
        (0, _dom.removeAttr)(body, 'data-padding-right');
      }
    }
  },
  render: function render(h) {
    var _this5 = this;

    var $slots = this.$slots; // Modal Header

    var header = h(false);

    if (!this.hideHeader) {
      var modalHeader = $slots['modal-header'];

      if (!modalHeader) {
        var closeButton = h(false);

        if (!this.hideHeaderClose) {
          closeButton = h('b-button-close', {
            props: {
              disabled: this.is_transitioning,
              ariaLabel: this.headerCloseLabel,
              textVariant: this.headerCloseVariant || this.headerTextVariant
            },
            on: {
              click: function click(evt) {
                _this5.hide('headerclose');
              }
            }
          }, [$slots['modal-header-close']]);
        }

        modalHeader = [h(this.titleTag, {
          class: ['modal-title']
        }, [$slots['modal-title'] || this.titleHtml || (0, _html.stripTags)(this.title)]), closeButton];
      }

      header = h('header', {
        ref: 'header',
        staticClass: 'modal-header',
        class: this.headerClasses,
        attrs: {
          id: this.safeId('__BV_modal_header_')
        }
      }, [modalHeader]);
    } // Modal Body


    var body = h('div', {
      ref: 'body',
      staticClass: 'modal-body',
      class: this.bodyClasses,
      attrs: {
        id: this.safeId('__BV_modal_body_')
      }
    }, [$slots.default]); // Modal Footer

    var footer = h(false);

    if (!this.hideFooter) {
      var modalFooter = $slots['modal-footer'];

      if (!modalFooter) {
        var cancelButton = h(false);

        if (!this.okOnly) {
          cancelButton = h('b-button', {
            props: {
              variant: this.cancelVariant,
              size: this.buttonSize,
              disabled: this.cancelDisabled || this.busy || this.is_transitioning
            },
            on: {
              click: function click(evt) {
                _this5.hide('cancel');
              }
            }
          }, [$slots['modal-cancel'] || this.cancelTitleHtml || (0, _html.stripTags)(this.cancelTitle)]);
        }

        var okButton = h('b-button', {
          props: {
            variant: this.okVariant,
            size: this.buttonSize,
            disabled: this.okDisabled || this.busy || this.is_transitioning
          },
          on: {
            click: function click(evt) {
              _this5.hide('ok');
            }
          }
        }, [$slots['modal-ok'] || this.okTitleHtml || (0, _html.stripTags)(this.okTitle)]);
        modalFooter = [cancelButton, okButton];
      }

      footer = h('footer', {
        ref: 'footer',
        staticClass: 'modal-footer',
        class: this.footerClasses,
        attrs: {
          id: this.safeId('__BV_modal_footer_')
        }
      }, [modalFooter]);
    } // Assemble Modal Content


    var modalContent = h('div', {
      ref: 'content',
      class: this.contentClasses,
      attrs: {
        role: 'document',
        id: this.safeId('__BV_modal_content_'),
        'aria-labelledby': this.hideHeader ? null : this.safeId('__BV_modal_header_'),
        'aria-describedby': this.safeId('__BV_modal_body_')
      }
    }, [header, body, footer]); // Modal Dialog wrapper

    var modalDialog = h('div', {
      staticClass: 'modal-dialog',
      class: this.dialogClasses
    }, [modalContent]); // Modal

    var modal = h('div', {
      ref: 'modal',
      staticClass: 'modal',
      class: this.modalClasses,
      directives: [{
        name: 'show',
        rawName: 'v-show',
        value: this.is_visible,
        expression: 'is_visible'
      }],
      attrs: {
        id: this.safeId(),
        role: 'dialog',
        tabindex: '-1',
        'aria-hidden': this.is_visible ? null : 'true',
        'aria-modal': this.is_visible ? 'true' : null
      },
      on: {
        keydown: this.onEsc,
        click: this.onClickOut
      }
    }, [modalDialog]); // Wrap modal in transition

    modal = h('transition', {
      props: {
        enterClass: '',
        enterToClass: '',
        enterActiveClass: '',
        leaveClass: '',
        leaveActiveClass: '',
        leaveToClass: ''
      },
      on: {
        'before-enter': this.onBeforeEnter,
        enter: this.onEnter,
        'after-enter': this.onAfterEnter,
        'before-leave': this.onBeforeLeave,
        leave: this.onLeave,
        'after-leave': this.onAfterLeave
      }
    }, [modal]); // Modal Backdrop

    var backdrop = h(false);

    if (!this.hideBackdrop && (this.is_visible || this.is_transitioning)) {
      backdrop = h('div', {
        staticClass: 'modal-backdrop',
        class: this.backdropClasses,
        attrs: {
          id: this.safeId('__BV_modal_backdrop_')
        }
      }, [$slots['modal-backdrop']]);
    } // Tab trap to prevent page from scrolling to next element in tab index during enforce focus tab cycle


    var tabTrap = h(false);

    if (this.is_visible && this.isTop && !this.noEnforceFocus) {
      tabTrap = h('div', {
        attrs: {
          tabindex: '0'
        }
      });
    } // Assemble modal and backdrop in an outer div needed for lazy modals


    var outer = h(false);

    if (!this.is_hidden) {
      outer = h('div', {
        key: 'modal-outer',
        style: this.modalOuterStyle,
        attrs: {
          id: this.safeId('__BV_modal_outer_')
        }
      }, [modal, tabTrap, backdrop]);
    } // Wrap in DIV to maintain thi.$el reference for hide/show method aceess


    return h('div', {}, [outer]);
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/directives/modal/modal.js":
/*!*****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/directives/modal/modal.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _target = __webpack_require__(/*! ../../utils/target */ "./node_modules/bootstrap-vue/es/utils/target.js");

var _dom = __webpack_require__(/*! ../../utils/dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var listenTypes = {
  click: true
};
var _default = {
  // eslint-disable-next-line no-shadow-restricted-names
  bind: function bind(el, binding, vnode) {
    (0, _target.bindTargets)(vnode, binding, listenTypes, function (_ref) {
      var targets = _ref.targets,
          vnode = _ref.vnode;
      targets.forEach(function (target) {
        vnode.context.$root.$emit('bv::show::modal', target, vnode.elm);
      });
    });

    if (el.tagName !== 'BUTTON') {
      // If element is not a button, we add `role="button"` for accessibility
      (0, _dom.setAttr)(el, 'role', 'button');
    }
  },
  unbind: function unbind(el, binding, vnode) {
    (0, _target.unbindTargets)(vnode, binding, listenTypes);

    if (el.tagName !== 'BUTTON') {
      // If element is not a button, we add `role="button"` for accessibility
      (0, _dom.removeAttr)(el, 'role', 'button');
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/id.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/id.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/*
 * SSR Safe Client Side ID attribute generation
 * id's can only be generated client side, after mount.
 * this._uid is not synched between server and client.
 */
// @vue/component
var _default = {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data: function data() {
    return {
      localId_: null
    };
  },
  computed: {
    safeId: function safeId() {
      // Computed property that returns a dynamic function for creating the ID.
      // Reacts to changes in both .id and .localId_ And regens a new function
      var id = this.id || this.localId_; // We return a function that accepts an optional suffix string
      // So this computed prop looks and works like a method!!!
      // But benefits from Vue's Computed prop caching

      var fn = function fn(suffix) {
        if (!id) {
          return null;
        }

        suffix = String(suffix || '').replace(/\s+/g, '_');
        return suffix ? id + '_' + suffix : id;
      };

      return fn;
    }
  },
  mounted: function mounted() {
    var _this = this;

    // mounted only occurs client side
    this.$nextTick(function () {
      // Update dom with auto ID after dom loaded to prevent
      // SSR hydration errors.
      _this.localId_ = "__BVID__".concat(_this._uid);
    });
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/mixins/listen-on-root.js":
/*!****************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/mixins/listen-on-root.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Issue #569: collapse::toggle::state triggered too many times
 * @link https://github.com/bootstrap-vue/bootstrap-vue/issues/569
 */
// @vue/component
var _default = {
  methods: {
    /**
     * Safely register event listeners on the root Vue node.
     * While Vue automatically removes listeners for individual components,
     * when a component registers a listener on root and is destroyed,
     * this orphans a callback because the node is gone,
     * but the root does not clear the callback.
     *
     * When registering a $root listener, it also registers a listener on
     * the component's `beforeDestroy` hook to automatically remove the
     * event listener from the $root instance.
     *
     * @param {string} event
     * @param {function} callback
     * @chainable
     */
    listenOnRoot: function listenOnRoot(event, callback) {
      var _this = this;

      this.$root.$on(event, callback);
      this.$on('hook:beforeDestroy', function () {
        _this.$root.$off(event, callback);
      }); // Return this for easy chaining

      return this;
    },

    /**
     * Convenience method for calling vm.$emit on vm.$root.
     * @param {string} event
     * @param {*} args
     * @chainable
     */
    emitOnRoot: function emitOnRoot(event) {
      var _this$$root;

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      (_this$$root = this.$root).$emit.apply(_this$$root, [event].concat(args)); // Return this for easy chaining


      return this;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/array.js":
/*!******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/array.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.concat = exports.arrayIncludes = exports.isArray = exports.from = void 0;

// Production steps of ECMA-262, Edition 6, 22.1.2.1
// es6-ified by @alexsasharegan

/* istanbul ignore if */
if (!Array.from) {
  Array.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      return Math.min(Math.max(toInteger(value), 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 1. Let C be the this value.
      var C = this; // 2. Let items be ToObject(arrayLike).

      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = isCallable(C) ? Object(new C(len)) : new Array(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();
} // https://tc39.github.io/ecma262/#sec-array.prototype.find
// Needed for IE support

/* istanbul ignore if */


if (!Array.prototype.find) {
  // eslint-disable-next-line no-extend-native
  Object.defineProperty(Array.prototype, 'find', {
    value: function value(predicate) {
      // 1. Let O be ? ToObject(this value).
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      var o = Object(this); // 2. Let len be ? ToLength(? Get(O, "length")).

      var len = o.length >>> 0; // 3. If IsCallable(predicate) is false, throw a TypeError exception.

      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      } // 4. If thisArg was supplied, let T be thisArg; else let T be undefined.


      var thisArg = arguments[1]; // 5. Let k be 0.

      var k = 0; // 6. Repeat, while k < len

      while (k < len) {
        // a. Let Pk be ! ToString(k).
        // b. Let kValue be ? Get(O, Pk).
        // c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
        // d. If testResult is true, return kValue.
        var kValue = o[k];

        if (predicate.call(thisArg, kValue, k, o)) {
          return kValue;
        } // e. Increase k by 1.


        k++;
      } // 7. Return undefined.


      return undefined;
    }
  });
}
/* istanbul ignore if */


if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
} // Static


var from = Array.from;
exports.from = from;
var isArray = Array.isArray; // Instance

exports.isArray = isArray;

var arrayIncludes = function arrayIncludes(array, value) {
  return array.indexOf(value) !== -1;
};

exports.arrayIncludes = arrayIncludes;

var concat = function concat() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return Array.prototype.concat.apply([], args);
};

exports.concat = concat;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/bv-event.class.js":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/bv-event.class.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _object = __webpack_require__(/*! ../utils/object */ "./node_modules/bootstrap-vue/es/utils/object.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var BvEvent =
/*#__PURE__*/
function () {
  function BvEvent(type) {
    var eventInit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck(this, BvEvent);

    // Start by emulating native Event constructor.
    if (!type) {
      /* istanbul ignore next */
      throw new TypeError("Failed to construct '".concat(this.constructor.name, "'. 1 argument required, ").concat(arguments.length, " given."));
    } // Assign defaults first, the eventInit,
    // and the type last so it can't be overwritten.


    (0, _object.assign)(this, BvEvent.defaults(), eventInit, {
      type: type
    }); // Freeze some props as readonly, but leave them enumerable.

    (0, _object.defineProperties)(this, {
      type: (0, _object.readonlyDescriptor)(),
      cancelable: (0, _object.readonlyDescriptor)(),
      nativeEvent: (0, _object.readonlyDescriptor)(),
      target: (0, _object.readonlyDescriptor)(),
      relatedTarget: (0, _object.readonlyDescriptor)(),
      vueTarget: (0, _object.readonlyDescriptor)()
    }); // Create a private variable using closure scoping.

    var defaultPrevented = false; // Recreate preventDefault method. One way setter.

    this.preventDefault = function preventDefault() {
      if (this.cancelable) {
        defaultPrevented = true;
      }
    }; // Create 'defaultPrevented' publicly accessible prop
    // that can only be altered by the preventDefault method.


    (0, _object.defineProperty)(this, 'defaultPrevented', {
      enumerable: true,
      get: function get() {
        return defaultPrevented;
      }
    });
  }

  _createClass(BvEvent, null, [{
    key: "defaults",
    value: function defaults() {
      return {
        type: '',
        cancelable: true,
        nativeEvent: null,
        target: null,
        relatedTarget: null,
        vueTarget: null
      };
    }
  }]);

  return BvEvent;
}();

var _default = BvEvent;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/dom.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/dom.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.requestAF = exports.position = exports.offset = exports.getCS = exports.getBCR = exports.hasAttr = exports.getAttr = exports.removeAttr = exports.setAttr = exports.hasClass = exports.removeClass = exports.addClass = exports.getById = exports.contains = exports.closest = exports.matches = exports.select = exports.selectAll = exports.reflow = exports.isDisabled = exports.isVisible = exports.isElement = exports.eventOff = exports.eventOn = exports.parseEventOptions = exports.isPassiveSupported = void 0;

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _env = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/es/utils/env.js");

// Determine if the browser supports the option passive for events
var passiveEventSupported = false;
/* istanbul ignore if */

if (_env.inBrowser) {
  try {
    var options = {
      get passive() {
        // This function will be called when the browser
        // attempts to access the passive property.
        passiveEventSupported = true;
      }

    };
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, options);
  } catch (err) {
    passiveEventSupported = false;
  }
} // Exported only for testing purposes


var isPassiveSupported = function isPassiveSupported() {
  return passiveEventSupported;
}; // Normalize event options based on support of passive option
// Exported only for testing purposes


exports.isPassiveSupported = isPassiveSupported;

var parseEventOptions = function parseEventOptions(options) {
  if (!passiveEventSupported) {
    // Need to translate to actual Boolean value
    return Boolean((0, _object.isObject)(options) ? options.useCapture : options);
  }
  /* istanbul ignore next: JSDOM doesn't support above detection of passive */


  return options || {
    useCapture: false // So we can't reach this anymore for unit testing due to the above if statement

  };
}; // Attach an event listener to an element


exports.parseEventOptions = parseEventOptions;

var eventOn = function eventOn(el, evtName, handler, options) {
  if (el && el.addEventListener) {
    el.addEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Remove an event listener from an element


exports.eventOn = eventOn;

var eventOff = function eventOff(el, evtName, handler, options) {
  if (el && el.removeEventListener) {
    el.removeEventListener(evtName, handler, parseEventOptions(options));
  }
}; // Determine if an element is an HTML Element


exports.eventOff = eventOff;

var isElement = function isElement(el) {
  return Boolean(el && el.nodeType === Node.ELEMENT_NODE);
}; // Determine if an HTML element is visible - Faster than CSS check


exports.isElement = isElement;

var isVisible = function isVisible(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  if (!isElement(el) || !contains(document.body, el)) {
    return false;
  } // All browsers support getBoundingClientRect(), except JSDOM as it returns all 0's for values :(
  // So any tests that need isVisible will fail in JSDOM


  var bcr = getBCR(el);
  return Boolean(bcr && bcr.height > 0 && bcr.width > 0);
}; // Determine if an element is disabled


exports.isVisible = isVisible;

var isDisabled = function isDisabled(el) {
  return !isElement(el) || el.disabled || hasClass(el, 'disabled') || Boolean(getAttr(el, 'disabled'));
}; // Cause/wait-for an element to reflow it's content (adjusting it's height/width)


exports.isDisabled = isDisabled;

var reflow = function reflow(el) {
  // Requesting an elements offsetHight will trigger a reflow of the element content

  /* istanbul ignore next: reflow doesn't happen in JSDOM */
  return isElement(el) && el.offsetHeight;
}; // Select all elements matching selector. Returns `[]` if none found


exports.reflow = reflow;

var selectAll = function selectAll(selector, root) {
  if (!isElement(root)) {
    root = document;
  }

  return (0, _array.from)(root.querySelectorAll(selector));
}; // Select a single element, returns `null` if not found


exports.selectAll = selectAll;

var select = function select(selector, root) {
  if (!isElement(root)) {
    root = document;
  }

  return root.querySelector(selector) || null;
}; // Determine if an element matches a selector


exports.select = select;

var matches = function matches(el, selector) {
  if (!isElement(el)) {
    return false;
  } // https://developer.mozilla.org/en-US/docs/Web/API/Element/matches#Polyfill
  // Prefer native implementations over polyfill function


  var proto = Element.prototype;
  /* istanbul ignore next */

  var Matches = proto.matches || proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector || function (sel)
  /* istanbul ignore next */
  {
    var element = this;
    var m = selectAll(sel, element.document || element.ownerDocument);
    var i = m.length; // eslint-disable-next-line no-empty

    while (--i >= 0 && m.item(i) !== element) {}

    return i > -1;
  };

  return Matches.call(el, selector);
}; // Finds closest element matching selector. Returns `null` if not found


exports.matches = matches;

var closest = function closest(selector, root) {
  if (!isElement(root)) {
    return null;
  } // https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
  // Since we dont support IE < 10, we can use the "Matches" version of the polyfill for speed
  // Prefer native implementation over polyfill function


  var Closest = Element.prototype.closest || function (sel)
  /* istanbul ignore next */
  {
    var element = this;

    if (!contains(document.documentElement, element)) {
      return null;
    }

    do {
      // Use our "patched" matches function
      if (matches(element, sel)) {
        return element;
      }

      element = element.parentElement;
    } while (element !== null);

    return null;
  };

  var el = Closest.call(root, selector); // Emulate jQuery closest and return `null` if match is the passed in element (root)

  return el === root ? null : el;
}; // Returns true if the parent element contains the child element


exports.closest = closest;

var contains = function contains(parent, child) {
  if (!parent || typeof parent.contains !== 'function') {
    return false;
  }

  return parent.contains(child);
}; // Get an element given an ID


exports.contains = contains;

var getById = function getById(id) {
  return document.getElementById(/^#/.test(id) ? id.slice(1) : id) || null;
}; // Add a class to an element


exports.getById = getById;

var addClass = function addClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.add(className);
  }
}; // Remove a class from an element


exports.addClass = addClass;

var removeClass = function removeClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    el.classList.remove(className);
  }
}; // Test if an element has a class


exports.removeClass = removeClass;

var hasClass = function hasClass(el, className) {
  // We are checking for `el.classList` existence here since IE 11
  // returns `undefined` for some elements (e.g. SVG elements)
  // See https://github.com/bootstrap-vue/bootstrap-vue/issues/2713
  if (className && isElement(el) && el.classList) {
    return el.classList.contains(className);
  }

  return false;
}; // Set an attribute on an element


exports.hasClass = hasClass;

var setAttr = function setAttr(el, attr, value) {
  if (attr && isElement(el)) {
    el.setAttribute(attr, value);
  }
}; // Remove an attribute from an element


exports.setAttr = setAttr;

var removeAttr = function removeAttr(el, attr) {
  if (attr && isElement(el)) {
    el.removeAttribute(attr);
  }
}; // Get an attribute value from an element (returns `null` if not found)


exports.removeAttr = removeAttr;

var getAttr = function getAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.getAttribute(attr);
  }

  return null;
}; // Determine if an attribute exists on an element (returns `true`
// or `false`, or `null` if element not found)


exports.getAttr = getAttr;

var hasAttr = function hasAttr(el, attr) {
  if (attr && isElement(el)) {
    return el.hasAttribute(attr);
  }

  return null;
}; // Return the Bounding Client Rect of an element. Returns `null` if not an element


exports.hasAttr = hasAttr;

var getBCR = function getBCR(el) {
  /* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
  return isElement(el) ? el.getBoundingClientRect() : null;
}; // Get computed style object for an element


exports.getBCR = getBCR;

var getCS = function getCS(el) {
  /* istanbul ignore next: getComputedStyle() doesn't work in JSDOM */
  return isElement(el) ? window.getComputedStyle(el) : {};
}; // Return an element's offset with respect to document element
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.offset


exports.getCS = getCS;

var offset = function offset(el)
/* istanbul ignore next: getBoundingClientRect(), getClientRects() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el) || el.getClientRects().length === 0) {
    return _offset;
  }

  var bcr = getBCR(el);

  if (bcr) {
    var win = el.ownerDocument.defaultView;
    _offset.top = bcr.top + win.pageYOffset;
    _offset.left = bcr.left + win.pageXOffset;
  }

  return _offset;
}; // Return an element's offset with respect to to it's offsetParent
// https://j11y.io/jquery/#v=git&fn=jQuery.fn.position


exports.offset = offset;

var position = function position(el)
/* istanbul ignore next: getBoundingClientRect() doesn't work in JSDOM */
{
  var _offset = {
    top: 0,
    left: 0
  };

  if (!isElement(el)) {
    return _offset;
  }

  var parentOffset = {
    top: 0,
    left: 0
  };
  var elStyles = getCS(el);

  if (elStyles.position === 'fixed') {
    _offset = getBCR(el) || _offset;
  } else {
    _offset = offset(el);
    var doc = el.ownerDocument;
    var offsetParent = el.offsetParent || doc.documentElement;

    while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && getCS(offsetParent).position === 'static') {
      offsetParent = offsetParent.parentNode;
    }

    if (offsetParent && offsetParent !== el && offsetParent.nodeType === Node.ELEMENT_NODE) {
      parentOffset = offset(offsetParent);
      var offsetParentStyles = getCS(offsetParent);
      parentOffset.top += parseFloat(offsetParentStyles.borderTopWidth);
      parentOffset.left += parseFloat(offsetParentStyles.borderLeftWidth);
    }
  }

  return {
    top: _offset.top - parentOffset.top - parseFloat(elStyles.marginTop),
    left: _offset.left - parentOffset.left - parseFloat(elStyles.marginLeft)
  };
}; // requestAnimationFrame convenience method
// We don't have a version for cancelAnimationFrame, but we don't call it anywhere


exports.position = position;

var requestAF = function requestAF(cb) {
  var w = _env.inBrowser ? window : {};

  var rAF = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.mozRequestAnimationFrame || w.msRequestAnimationFrame || w.oRequestAnimationFrame || function (cb) {
    // Fallback, but not a true polyfill.
    // But all browsers we support (other than Opera Mini) support rAF
    // without a polyfill.

    /* istanbul ignore next */
    return setTimeout(cb, 16);
  };

  return rAF(cb);
};

exports.requestAF = requestAF;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/env.js":
/*!****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/env.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.hasPointerEvent = exports.hasTouchSupport = exports.isServer = exports.inBrowser = void 0;
// Info about the current environment
var inBrowser = typeof document !== 'undefined' && typeof window !== 'undefined';
exports.inBrowser = inBrowser;
var isServer = !inBrowser;
exports.isServer = isServer;
var hasTouchSupport = inBrowser && ('ontouchstart' in document.documentElement || navigator.maxTouchPoints > 0);
exports.hasTouchSupport = hasTouchSupport;
var hasPointerEvent = inBrowser && Boolean(window.PointerEvent || window.MSPointerEvent);
exports.hasPointerEvent = hasPointerEvent;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/html.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/html.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.htmlOrText = exports.stripTags = void 0;
var stripTagsRegex = /(<([^>]+)>)/gi; // Removes any thing that looks like an HTML tag from the supplied string

var stripTags = function stripTags() {
  var text = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return String(text).replace(stripTagsRegex, '');
}; // Generate a domProps object for either innerHTML, textContent or nothing


exports.stripTags = stripTags;

var htmlOrText = function htmlOrText(innerHTML, textContent) {
  return innerHTML ? {
    innerHTML: innerHTML
  } : textContent ? {
    textContent: textContent
  } : {};
};

exports.htmlOrText = htmlOrText;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/identity.js":
/*!*********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/identity.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var identity = function identity(x) {
  return x;
};

var _default = identity;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/key-codes.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/key-codes.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/*
 * Key Codes (events)
 */
var KEY_CODES = {
  SPACE: 32,
  ENTER: 13,
  ESC: 27,
  LEFT: 37,
  UP: 38,
  RIGHT: 39,
  DOWN: 40,
  PAGEUP: 33,
  PAGEDOWN: 34,
  HOME: 36,
  END: 35,
  TAB: 9,
  SHIFT: 16,
  CTRL: 17,
  BACKSPACE: 8,
  ALT: 18,
  PAUSE: 19,
  BREAK: 19,
  INSERT: 45,
  INS: 45,
  DELETE: 46
};
var _default = KEY_CODES;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/object.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/object.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.readonlyDescriptor = exports.omit = exports.isPlainObject = exports.isObject = exports.is = exports.isFrozen = exports.create = exports.getPrototypeOf = exports.getOwnPropertySymbols = exports.getOwnPropertyDescriptor = exports.freeze = exports.defineProperty = exports.defineProperties = exports.keys = exports.getOwnPropertyNames = exports.assign = void 0;

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Aliasing Object[method] allows the minifier to shorten methods to a single character variable,
 * as well as giving BV a chance to inject polyfills.
 * As long as we avoid
 * - import * as Object from "utils/object"
 * all unused exports should be removed by tree-shaking.
 */
// @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

/* istanbul ignore if */
if (typeof Object.assign !== 'function') {
  Object.assign = function (target, varArgs) {
    // .length of function is 2
    if (target == null) {
      // TypeError if undefined or null
      throw new TypeError('Cannot convert undefined or null to object');
    }

    var to = Object(target);

    for (var index = 1; index < arguments.length; index++) {
      var nextSource = arguments[index];

      if (nextSource != null) {
        // Skip over if undefined or null
        for (var nextKey in nextSource) {
          // Avoid bugs when hasOwnProperty is shadowed
          if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
            to[nextKey] = nextSource[nextKey];
          }
        }
      }
    }

    return to;
  };
} // @link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is#Polyfill

/* istanbul ignore if */


if (!Object.is) {
  Object.is = function (x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      // eslint-disable-next-line no-self-compare
      return x !== x && y !== y;
    }
  };
}

var assign = Object.assign;
exports.assign = assign;
var getOwnPropertyNames = Object.getOwnPropertyNames;
exports.getOwnPropertyNames = getOwnPropertyNames;
var keys = Object.keys;
exports.keys = keys;
var defineProperties = Object.defineProperties;
exports.defineProperties = defineProperties;
var defineProperty = Object.defineProperty;
exports.defineProperty = defineProperty;
var freeze = Object.freeze;
exports.freeze = freeze;
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
exports.getOwnPropertyDescriptor = getOwnPropertyDescriptor;
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
exports.getOwnPropertySymbols = getOwnPropertySymbols;
var getPrototypeOf = Object.getPrototypeOf;
exports.getPrototypeOf = getPrototypeOf;
var create = Object.create;
exports.create = create;
var isFrozen = Object.isFrozen;
exports.isFrozen = isFrozen;
var is = Object.is;
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 * Note object could be a complex type like array, date, etc.
 */

exports.is = is;

var isObject = function isObject(obj) {
  return obj !== null && _typeof(obj) === 'object';
};
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


exports.isObject = isObject;

var isPlainObject = function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}; // @link https://gist.github.com/bisubus/2da8af7e801ffd813fab7ac221aa7afc


exports.isPlainObject = isPlainObject;

var omit = function omit(obj, props) {
  return Object.keys(obj).filter(function (key) {
    return props.indexOf(key) === -1;
  }).reduce(function (result, key) {
    return _objectSpread({}, result, _defineProperty({}, key, obj[key]));
  }, {});
};

exports.omit = omit;

var readonlyDescriptor = function readonlyDescriptor() {
  return {
    enumerable: true,
    configurable: false,
    writable: false
  };
};

exports.readonlyDescriptor = readonlyDescriptor;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/observe-dom.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/observe-dom.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _dom = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var _env = __webpack_require__(/*! ./env */ "./node_modules/bootstrap-vue/es/utils/env.js");

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var eventListenerSupported = _env.inBrowser && window.addEventListener;
var MutationObserver = _env.inBrowser && (window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver); // Fallback observation for legacy browsers
// Emulate observer disconnect() method so that we can detach the events later

var fakeObserverFactory = function fakeObserverFactory(el, callback)
/* istanbul ignore next: hard to test in JSDOM */
{
  (0, _dom.eventOn)(el, 'DOMNodeInserted', callback, false);
  (0, _dom.eventOn)(el, 'DOMNodeRemoved', callback, false);
  return {
    disconnect: function disconnect() {
      (0, _dom.eventOff)(el, 'DOMNodeInserted', callback, false);
      (0, _dom.eventOff)(el, 'DOMNodeRemoved', callback, false);
    }
  };
};
/**
 * Observe a DOM element changes, falls back to eventListener mode
 * @param {Element} el The DOM element to observe
 * @param {Function} callback callback to be called on change
 * @param {object} [opts={childList: true, subtree: true}] observe options
 * @see http://stackoverflow.com/questions/3219758
 */


var observeDom = function observeDom(el, callback, opts)
/* istanbul ignore next: difficult to test in JSDOM */
{
  // Handle case where we might be passed a vue instance
  el = el ? el.$el || el : null;
  /* istanbul ignore next: difficult to test in JSDOM */

  if (!(0, _dom.isElement)(el)) {
    // We can't observe something that isn't an element
    return null;
  }

  var obs = null;

  if (MutationObserver) {
    // Define a new observer
    obs = new MutationObserver(function (mutations) {
      var changed = false; // A Mutation can contain several change records, so we loop through them to see what has changed.
      // We break out of the loop early if any "significant" change has been detected

      for (var i = 0; i < mutations.length && !changed; i++) {
        // The mutation record
        var mutation = mutations[i]; // Mutation Type

        var type = mutation.type; // DOM Node (could be any DOM Node type - HTMLElement, Text, comment, etc)

        var target = mutation.target;

        if (type === 'characterData' && target.nodeType === Node.TEXT_NODE) {
          // We ignore nodes that are not TEXT (i.e. comments, etc) as they don't change layout
          changed = true;
        } else if (type === 'attributes') {
          changed = true;
        } else if (type === 'childList' && (mutation.addedNodes.length > 0 || mutation.removedNodes.length > 0)) {
          // This includes HTMLElement and Text Nodes being added/removed/re-arranged
          changed = true;
        }
      }

      if (changed) {
        // We only call the callback if a change that could affect layout/size truely happened.
        callback();
      }
    }); // Have the observer observe foo for changes in children, etc

    obs.observe(el, _objectSpread({
      childList: true,
      subtree: true
    }, opts));
  } else if (eventListenerSupported) {
    // Legacy interface. most likely not used in modern browsers
    obs = fakeObserverFactory(el, callback);
  } // We return a reference to the observer so that obs.disconnect() can be called if necessary
  // To reduce overhead when the root element is hidden


  return obs;
};

var _default = observeDom;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/pluck-props.js":
/*!************************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/pluck-props.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _identity = __webpack_require__(/*! ./identity */ "./node_modules/bootstrap-vue/es/utils/identity.js");

/**
 * Given an array of properties or an object of property keys,
 * plucks all the values off the target object, returning a new object
 * that has props that reference the original prop values
 *
 * @param {{}|string[]} keysToPluck
 * @param {{}} objToPluck
 * @param {Function} transformFn
 * @return {{}}
 */
var pluckProps = function pluckProps(keysToPluck, objToPluck) {
  var transformFn = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _identity.default;
  return ((0, _array.isArray)(keysToPluck) ? keysToPluck.slice() : (0, _object.keys)(keysToPluck)).reduce(function (memo, prop) {
    memo[transformFn(prop)] = objToPluck[prop];
    return memo;
  }, {});
};

var _default = pluckProps;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/router.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/router.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.computeHref = exports.computeRel = exports.computeTag = exports.isRouterLink = exports.parseQuery = exports.stringifyQueryObj = void 0;

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _toString = __webpack_require__(/*! ./to-string */ "./node_modules/bootstrap-vue/es/utils/to-string.js");

var ANCHOR_TAG = 'a'; // Precompile RegExp

var commaRE = /%2C/g;
var encodeReserveRE = /[!'()*]/g; // Method to replace reserved chars

var encodeReserveReplacer = function encodeReserveReplacer(c) {
  return '%' + c.charCodeAt(0).toString(16);
}; // Fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas


var encode = function encode(str) {
  return encodeURIComponent((0, _toString.default)(str)).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

var decode = decodeURIComponent; // Stringifies an object of query parameters
// See: https://github.com/vuejs/vue-router/blob/dev/src/util/query.js

var stringifyQueryObj = function stringifyQueryObj(obj) {
  if (!(0, _object.isPlainObject)(obj)) {
    return '';
  }

  var query = (0, _object.keys)(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    } else if (val === null) {
      return encode(key);
    } else if ((0, _array.isArray)(val)) {
      return val.reduce(function (results, val2) {
        if (val2 === null) {
          results.push(encode(key));
        } else if (val2 !== undefined) {
          // Faster than string interpolation
          results.push(encode(key) + '=' + encode(val2));
        }

        return results;
      }, []).join('&');
    } // Faster than string interpolation


    return encode(key) + '=' + encode(val);
  })
  /* must check for length, as we only want to filter empty strings, not things that look falsey! */
  .filter(function (x) {
    return x.length > 0;
  }).join('&');
  return query ? "?".concat(query) : '';
};

exports.stringifyQueryObj = stringifyQueryObj;

var parseQuery = function parseQuery(query) {
  var parsed = {};
  query = (0, _toString.default)(query).trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return parsed;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (parsed[key] === undefined) {
      parsed[key] = val;
    } else if ((0, _array.isArray)(parsed[key])) {
      parsed[key].push(val);
    } else {
      parsed[key] = [parsed[key], val];
    }
  });
  return parsed;
};

exports.parseQuery = parseQuery;

var isRouterLink = function isRouterLink(tag) {
  return tag !== ANCHOR_TAG;
};

exports.isRouterLink = isRouterLink;

var computeTag = function computeTag() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      to = _ref.to,
      disabled = _ref.disabled;

  var thisOrParent = arguments.length > 1 ? arguments[1] : undefined;
  return thisOrParent.$router && to && !disabled ? thisOrParent.$nuxt ? 'nuxt-link' : 'router-link' : ANCHOR_TAG;
};

exports.computeTag = computeTag;

var computeRel = function computeRel() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      target = _ref2.target,
      rel = _ref2.rel;

  if (target === '_blank' && rel === null) {
    return 'noopener';
  }

  return rel || null;
};

exports.computeRel = computeRel;

var computeHref = function computeHref() {
  var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      href = _ref3.href,
      to = _ref3.to;

  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ANCHOR_TAG;
  var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '#';
  var toFallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '/';

  // We've already checked the $router in computeTag(), so isRouterLink() indicates a live router.
  // When deferring to Vue Router's router-link, don't use the href attribute at all.
  // We return null, and then remove href from the attributes passed to router-link
  if (isRouterLink(tag)) {
    return null;
  } // Return `href` when explicitly provided


  if (href) {
    return href;
  } // Reconstruct `href` when `to` used, but no router


  if (to) {
    // Fallback to `to` prop (if `to` is a string)
    if (typeof to === 'string') {
      return to || toFallback;
    } // Fallback to `to.path + to.query + to.hash` prop (if `to` is an object)


    if ((0, _object.isPlainObject)(to) && (to.path || to.query || to.hash)) {
      var path = (0, _toString.default)(to.path);
      var query = stringifyQueryObj(to.query);
      var hash = (0, _toString.default)(to.hash);
      hash = !hash || hash.charAt(0) === '#' ? hash : "#".concat(hash);
      return "".concat(path).concat(query).concat(hash) || toFallback;
    }
  } // If nothing is provided return the fallback


  return fallback;
};

exports.computeHref = computeHref;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/target.js":
/*!*******************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/target.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = exports.unbindTargets = exports.bindTargets = void 0;

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

var _dom = __webpack_require__(/*! ./dom */ "./node_modules/bootstrap-vue/es/utils/dom.js");

var allListenTypes = {
  hover: true,
  click: true,
  focus: true
};
var BVBoundListeners = '__BV_boundEventListeners__';

var bindTargets = function bindTargets(vnode, binding, listenTypes, fn) {
  var targets = (0, _object.keys)(binding.modifiers || {}).filter(function (t) {
    return !allListenTypes[t];
  });

  if (binding.value) {
    targets.push(binding.value);
  }

  var listener = function listener() {
    fn({
      targets: targets,
      vnode: vnode
    });
  };

  (0, _object.keys)(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      (0, _dom.eventOn)(vnode.elm, type, listener);
      var boundListeners = vnode.elm[BVBoundListeners] || {};
      boundListeners[type] = boundListeners[type] || [];
      boundListeners[type].push(listener);
      vnode.elm[BVBoundListeners] = boundListeners;
    }
  }); // Return the list of targets

  return targets;
};

exports.bindTargets = bindTargets;

var unbindTargets = function unbindTargets(vnode, binding, listenTypes) {
  (0, _object.keys)(allListenTypes).forEach(function (type) {
    if (listenTypes[type] || binding.modifiers[type]) {
      var boundListeners = vnode.elm[BVBoundListeners] && vnode.elm[BVBoundListeners][type];

      if (boundListeners) {
        boundListeners.forEach(function (listener) {
          return (0, _dom.eventOff)(vnode.elm, type, listener);
        });
        delete vnode.elm[BVBoundListeners][type];
      }
    }
  });
};

exports.unbindTargets = unbindTargets;
var _default = bindTargets;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/to-string.js":
/*!**********************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/to-string.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

var _array = __webpack_require__(/*! ./array */ "./node_modules/bootstrap-vue/es/utils/array.js");

var _object = __webpack_require__(/*! ./object */ "./node_modules/bootstrap-vue/es/utils/object.js");

/**
 * Convert a value to a string that can be rendered.
 */
var toString = function toString(val) {
  var spaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  return val === null || val === undefined ? '' : (0, _array.isArray)(val) || (0, _object.isPlainObject)(val) && val.toString === Object.prototype.toString ? JSON.stringify(val, null, spaces) : String(val);
};

var _default = toString;
exports.default = _default;

/***/ }),

/***/ "./node_modules/bootstrap-vue/es/utils/warn.js":
/*!*****************************************************!*\
  !*** ./node_modules/bootstrap-vue/es/utils/warn.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = void 0;

/**
 * Log a warning message to the console with bootstrap-vue formatting sugar.
 * @param {string} message
 */

/* istanbul ignore next */
var warn = function warn(message) {
  console.warn("[BootstrapVue warn]: ".concat(message));
};

var _default = warn;
exports.default = _default;

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.fill-questions {\n    min-height: 100vh;\n}\n.form-container {\n    position: fixed;\n    bottom: 0px;\n    width: 100%;\n}\n.outside-border {\n    border: 1px solid rgba(0, 0, 0, 0.125) !important;\n    border-radius: 0px;\n}\n.borderless {\n    border-bottom: 0 none !important;\n    border-right: 0 none !important;\n    border-radius: 0px;\n}\n.question {\n    padding: 0.45rem !important;\n}\n.question-body {\n    padding: 0 0 0 0.50rem !important;\n}\n.answer {\n    padding: 0.35rem !important;\n}\n.answer-body {\n    padding: 0 0 0 0.50rem !important;\n}\n.scrollable {\n    min-height: 100vh;\n    overflow-y: scroll;\n}\n.mb-15 {\n    margin-bottom: 15px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.node-padding {\n    padding: 0.35rem 1.25rem 0.65rem 0rem !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.tree {\n    background-color: rgb(122, 165, 190);\n}\n.list-group {\n    border-bottom: 0 none !important;\n    border-right: 0 none !important;\n    border-radius: 0px !important;\n}\n.btn-outline-secondary {\n    border: none !important;\n    border-radius: 0 !important;\n}\n.list-group-item {\n    margin-bottom: 2px;\n    padding: 0 0 0 0.55rem !important;\n    border: 0 none !important;\n    border-radius: 0px !important;\n}\n.outside-border {\n    border-bottom: 0.55rem solid rgba(0, 0, 0, 0.125) !important;\n    border-radius: 0px;\n}\n.question-bottom-border {\n    border-bottom: 0.55rem solid #d6d8db !important;\n}\n.answer-bottom-border {\n    border-bottom: 0.55rem solid rgba(255, 255, 255, 0.125) !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NodeTree.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tree.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/uuid/lib/bytesToUuid.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/bytesToUuid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([bth[buf[i++]], bth[buf[i++]], 
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]], '-',
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]],
	bth[buf[i++]], bth[buf[i++]]]).join('');
}

module.exports = bytesToUuid;


/***/ }),

/***/ "./node_modules/uuid/lib/rng-browser.js":
/*!**********************************************!*\
  !*** ./node_modules/uuid/lib/rng-browser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}


/***/ }),

/***/ "./node_modules/uuid/v4.js":
/*!*********************************!*\
  !*** ./node_modules/uuid/v4.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(/*! ./lib/rng */ "./node_modules/uuid/lib/rng-browser.js");
var bytesToUuid = __webpack_require__(/*! ./lib/bytesToUuid */ "./node_modules/uuid/lib/bytesToUuid.js");

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),

/***/ "./node_modules/vue-functional-data-merge/dist/lib.esm.js":
/*!****************************************************************!*\
  !*** ./node_modules/vue-functional-data-merge/dist/lib.esm.js ***!
  \****************************************************************/
/*! exports provided: mergeData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mergeData", function() { return mergeData; });
var __assign=function(){return(__assign=Object.assign||function(e){for(var a,s=1,t=arguments.length;s<t;s++)for(var r in a=arguments[s])Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r]);return e}).apply(this,arguments)};function mergeData(){for(var e,a,s={},t=arguments.length;t--;)for(var r=0,c=Object.keys(arguments[t]);r<c.length;r++)switch(e=c[r]){case"class":case"style":case"directives":Array.isArray(s[e])||(s[e]=[]),s[e]=s[e].concat(arguments[t][e]);break;case"staticClass":if(!arguments[t][e])break;void 0===s[e]&&(s[e]=""),s[e]&&(s[e]+=" "),s[e]+=arguments[t][e].trim();break;case"on":case"nativeOn":s[e]||(s[e]={});for(var n=0,o=Object.keys(arguments[t][e]||{});n<o.length;n++)a=o[n],s[e][a]?s[e][a]=[].concat(s[e][a],arguments[t][e][a]):s[e][a]=arguments[t][e][a];break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":s[e]||(s[e]={}),s[e]=__assign({},arguments[t][e],s[e]);break;case"slot":case"key":case"ref":case"tag":case"show":case"keepAlive":default:s[e]||(s[e]=arguments[t][e])}return s}
//# sourceMappingURL=lib.esm.js.map


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=template&id=0405b16c&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=template&id=0405b16c& ***!
  \******************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm._m(0),
      _vm._v(" "),
      _c("div", [
        _vm.tree.length > 0
          ? _c("div", { staticClass: "card card-primary" }, [
              _c("div", { staticClass: "card-header" }, [_vm._v("Questions")]),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "card-body",
                  staticStyle: { padding: "0 !important" }
                },
                _vm._l(_vm.tree, function(node, index) {
                  return _c(
                    "div",
                    {
                      key: index,
                      class: { "mb-15": index < _vm.tree.length - 1 }
                    },
                    [
                      _c("tree", {
                        attrs: { "tree-data": node },
                        on: {
                          "node-click-add": _vm.doOnNodeClickAdd,
                          "node-click-edit": _vm.doOnNodeClickEdit,
                          "node-click-del": _vm.doOnNodeClickDel,
                          "node-click-copy": _vm.doOnNodeClickCopy,
                          "node-click-paste": _vm.doOnNodeClickPaste
                        }
                      })
                    ],
                    1
                  )
                }),
                0
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "container-fluid",
            staticStyle: { "margin-top": "15px" }
          },
          [
            _c(
              "button",
              {
                staticClass: "btn btn-success",
                on: { click: _vm.addNewRootQuestion }
              },
              [
                _c("i", { staticClass: "fas fa-plus" }),
                _vm._v("\n                Create a new Question\n            ")
              ]
            )
          ]
        )
      ]),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "AddQuestionModal",
          attrs: { id: "AddQuestionModal", title: "Add a new Question" },
          on: { shown: _vm.focusModalInput, ok: _vm.doOnAddNewQuestion }
        },
        [
          !_vm.isEditing
            ? _c("div", { staticClass: "form-group" }, [
                _c("label", { attrs: { for: "parent" } }, [_vm._v("Parent")]),
                _vm._v(" "),
                _c("input", {
                  staticClass: "form-control",
                  attrs: {
                    type: "text",
                    name: "parent",
                    id: "parent",
                    disabled: ""
                  },
                  domProps: {
                    value: _vm.activeNode == null ? "" : _vm.activeNode.text
                  }
                }),
                _vm._v(" "),
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.newQuestion.uuid,
                      expression: "newQuestion.uuid"
                    }
                  ],
                  attrs: { type: "hidden", name: "uuid" },
                  domProps: { value: _vm.newQuestion.uuid },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(_vm.newQuestion, "uuid", $event.target.value)
                    }
                  }
                })
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n                Question Type\n            ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _c("div", { staticClass: "col col-sm-6" }, [
                  _c("div", { staticClass: "custom-control custom-radio" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newQuestion.questionType,
                          expression: "newQuestion.questionType"
                        }
                      ],
                      staticClass: "custom-control-input",
                      attrs: {
                        type: "radio",
                        id: "singleChoiceQuestion",
                        name: "questionType",
                        disabled: _vm.isEditing
                      },
                      domProps: {
                        value: 1,
                        checked: _vm._q(_vm.newQuestion.questionType, 1)
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.newQuestion, "questionType", 1)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label",
                        attrs: { for: "singleChoiceQuestion" }
                      },
                      [_vm._v("Single choice")]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "col col-sm-6" }, [
                  _c("div", { staticClass: "custom-control custom-radio" }, [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.newQuestion.questionType,
                          expression: "newQuestion.questionType"
                        }
                      ],
                      staticClass: "custom-control-input",
                      attrs: {
                        type: "radio",
                        id: "multipleChoiseQuestion",
                        name: "questionType",
                        disabled: _vm.isEditing
                      },
                      domProps: {
                        value: 2,
                        checked: _vm._q(_vm.newQuestion.questionType, 2)
                      },
                      on: {
                        change: function($event) {
                          return _vm.$set(_vm.newQuestion, "questionType", 2)
                        }
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "label",
                      {
                        staticClass: "custom-control-label",
                        attrs: { for: "multipleChoiseQuestion" }
                      },
                      [_vm._v("Multiple choices")]
                    )
                  ])
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "nodeText" } }, [_vm._v("Question")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newQuestion.text,
                  expression: "newQuestion.text"
                }
              ],
              ref: "inputTextModal",
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "inputQuestion",
                id: "inputQuestion"
              },
              domProps: { value: _vm.newQuestion.text },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newQuestion, "text", $event.target.value)
                }
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "AddAnswerModal",
          attrs: { id: "AddAnswerModal", title: "Add a new Answer" },
          on: { shown: _vm.focusModalInput, ok: _vm.doOnAddNewAnswer }
        },
        [
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "parent" } }, [_vm._v("Parent")]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "parent",
                id: "parent",
                disabled: ""
              },
              domProps: {
                value: _vm.activeNode == null ? "" : _vm.activeNode.text
              }
            }),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newAnswer.uuid,
                  expression: "newAnswer.uuid"
                }
              ],
              attrs: { type: "hidden", name: "uuid" },
              domProps: { value: _vm.newAnswer.uuid },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newAnswer, "uuid", $event.target.value)
                }
              }
            })
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "card" }, [
            _c("div", { staticClass: "card-header" }, [
              _vm._v("\n                Control Type Type\n            ")
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "card-body" }, [
              _c("div", { staticClass: "row" }, [
                _vm.activeNode && _vm.activeNode.questionType == 2
                  ? _c("div", { staticClass: "col col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-radio" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newAnswer.controlType,
                                expression: "newAnswer.controlType"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "checkBoxControl",
                              name: "checkBoxControl"
                            },
                            domProps: {
                              value: 1,
                              checked: _vm._q(_vm.newAnswer.controlType, 1)
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.newAnswer, "controlType", 1)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "checkBoxControl" }
                            },
                            [_vm._v("Checkbox")]
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeNode && _vm.activeNode.questionType == 2
                  ? _c("div", { staticClass: "col col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-radio" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newAnswer.controlType,
                                expression: "newAnswer.controlType"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "checkBoxTextControl",
                              name: "checkBoxTextControl"
                            },
                            domProps: {
                              value: 2,
                              checked: _vm._q(_vm.newAnswer.controlType, 2)
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.newAnswer, "controlType", 2)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "checkBoxTextControl" }
                            },
                            [_vm._v("Checkbox/Text")]
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeNode && _vm.activeNode.questionType == 1
                  ? _c("div", { staticClass: "col col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-radio" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newAnswer.controlType,
                                expression: "newAnswer.controlType"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "radioButtomControl",
                              name: "radioButtomControl"
                            },
                            domProps: {
                              value: 3,
                              checked: _vm._q(_vm.newAnswer.controlType, 3)
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.newAnswer, "controlType", 3)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "radioButtomControl" }
                            },
                            [_vm._v("Radio Button")]
                          )
                        ]
                      )
                    ])
                  : _vm._e(),
                _vm._v(" "),
                _vm.activeNode && _vm.activeNode.questionType == 1
                  ? _c("div", { staticClass: "col col-sm-6" }, [
                      _c(
                        "div",
                        { staticClass: "custom-control custom-radio" },
                        [
                          _c("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: _vm.newAnswer.controlType,
                                expression: "newAnswer.controlType"
                              }
                            ],
                            staticClass: "custom-control-input",
                            attrs: {
                              type: "radio",
                              id: "radioButtomTextControl",
                              name: "radioButtomTextControl"
                            },
                            domProps: {
                              value: 4,
                              checked: _vm._q(_vm.newAnswer.controlType, 4)
                            },
                            on: {
                              change: function($event) {
                                return _vm.$set(_vm.newAnswer, "controlType", 4)
                              }
                            }
                          }),
                          _vm._v(" "),
                          _c(
                            "label",
                            {
                              staticClass: "custom-control-label",
                              attrs: { for: "radioButtomTextControl" }
                            },
                            [_vm._v("Radio Button/Text")]
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "form-group" }, [
            _c("label", { attrs: { for: "inputAnswer" } }, [_vm._v("Answer")]),
            _vm._v(" "),
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.newAnswer.text,
                  expression: "newAnswer.text"
                }
              ],
              ref: "inputTextModal",
              staticClass: "form-control",
              attrs: { type: "text", name: "inputAnswer", id: "inputAnswer" },
              domProps: { value: _vm.newAnswer.text },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.newAnswer, "text", $event.target.value)
                }
              }
            })
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          ref: "ConfirmDelNodeModal",
          attrs: { id: "ConfirmDelNodeModal", title: "Confirmation" }
        },
        [
          _vm._v(
            "\n        \n        Do you really want to remove the " +
              _vm._s(_vm.deleteNode ? _vm.deleteNode.type : "") +
              ': "' +
              _vm._s(_vm.deleteNode ? _vm.deleteNode.text : "") +
              '"?\n\n        '
          ),
          _c(
            "div",
            {
              staticClass: "w-100",
              attrs: { slot: "modal-footer" },
              slot: "modal-footer"
            },
            [
              _c("div", { staticClass: "float-right" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-danger",
                    on: { click: _vm.doOnDeleteNode }
                  },
                  [_c("i", { staticClass: "fas fa-thumbs-up" }), _vm._v(" Yes")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "btn btn-secondary",
                    on: {
                      click: function($event) {
                        return _vm.$refs.ConfirmDelNodeModal.hide()
                      }
                    }
                  },
                  [
                    _c("i", { staticClass: "fas fa-thumbs-down" }),
                    _vm._v(" No")
                  ]
                )
              ])
            ]
          )
        ]
      )
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card div card-secondary" }, [
      _c("div", { staticClass: "card-header" }, [_vm._v("Enquirity")]),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col" }, [
            _c("label", { attrs: { for: "enquirity_name" } }, [
              _vm._v("Title")
            ]),
            _vm._v(" "),
            _c("input", {
              staticClass: "form-control",
              attrs: {
                type: "text",
                name: "enquirity_name",
                id: "enquirity_name"
              }
            })
          ])
        ])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/NodeTree.vue?vue&type=template&id=ed32b914&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tree/NodeTree.vue?vue&type=template&id=ed32b914& ***!
  \****************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "list-group-item list-group-item-action",
      class: {
        "list-group-item-secondary": _vm.node.type == "question",
        "list-group-item-light": _vm.node.type == "answer"
      }
    },
    [
      _c("div", [
        _c("div", { staticClass: "card-body text-left node-padding" }, [
          _vm._v(
            "\n              " + _vm._s(_vm.node.text) + "  \n              "
          ),
          _c(
            "span",
            {
              staticClass: "badge",
              class: {
                "badge-light": _vm.node.type == "question",
                "badge-secondary": _vm.node.type == "answer"
              }
            },
            [
              _vm._v(
                "\n                  " +
                  _vm._s(_vm.nodeTypeText()) +
                  "\n              "
              )
            ]
          ),
          _vm._v(" "),
          _c("div", { staticClass: "float-right" }, [
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-success",
                attrs: {
                  id: "btn-1",
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title:
                    _vm.node.type == "question"
                      ? "Add new Answer"
                      : "Add new Question",
                  disabled:
                    _vm.node.type == "answer" && _vm.node.children.length > 0
                },
                on: {
                  click: function($event) {
                    return _vm.handleClickAdd(_vm.node)
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-plus" })]
            ),
            _vm._v(" "),
            _c("span", { staticStyle: { width: "3em" } }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-warning",
                attrs: {
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title:
                    _vm.node.type == "question"
                      ? "Edit this Question"
                      : "Edit this Answer",
                  id: "btn-2"
                },
                on: {
                  click: function($event) {
                    return _vm.handleClickEdit(_vm.node)
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-edit" })]
            ),
            _vm._v(" "),
            _vm.node.type == "question"
              ? _c("span", { staticStyle: { width: "3em" } })
              : _vm._e(),
            _vm._v(" "),
            _vm.node.type == "question"
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-primary",
                    attrs: {
                      id: "btn-3",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: "Copy this Question"
                    },
                    on: {
                      click: function($event) {
                        return _vm.handleClickCopy(_vm.node)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-copy" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.node.type == "answer"
              ? _c("span", { staticStyle: { width: "3em" } })
              : _vm._e(),
            _vm._v(" "),
            _vm.node.type == "answer"
              ? _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-secondary",
                    attrs: {
                      id: "btn-4",
                      "data-toggle": "tooltip",
                      "data-placement": "top",
                      title: "Paste Question"
                    },
                    on: {
                      click: function($event) {
                        return _vm.handleClickPaste(_vm.node)
                      }
                    }
                  },
                  [_c("i", { staticClass: "fas fa-paste" })]
                )
              : _vm._e(),
            _vm._v(" "),
            _c("span", { staticStyle: { width: "3em" } }),
            _vm._v(" "),
            _c(
              "button",
              {
                staticClass: "btn btn-sm btn-danger",
                attrs: {
                  id: "btn-5",
                  "data-toggle": "tooltip",
                  "data-placement": "top",
                  title:
                    _vm.node.type == "question"
                      ? "Delete this Question"
                      : "Delete this Answer"
                },
                on: {
                  click: function($event) {
                    return _vm.handleClickDel(_vm.node)
                  }
                }
              },
              [_c("i", { staticClass: "fas fa-trash" })]
            )
          ])
        ]),
        _vm._v(" "),
        _vm.node.children && _vm.node.children.length
          ? _c(
              "ul",
              {
                staticClass: "list-group",
                class: {
                  "question-bottom-border": _vm.node.type == "question",
                  "answer-bottom-border": _vm.node.type == "answer"
                },
                staticStyle: { "margin-bottom": "0px !important" }
              },
              _vm._l(_vm.node.children, function(child, index) {
                return _c("node", {
                  key: index,
                  attrs: {
                    node: child,
                    "handle-click-add": _vm.handleClickAdd,
                    "handle-click-del": _vm.handleClickDel,
                    "handle-click-edit": _vm.handleClickEdit,
                    "handle-click-copy": _vm.handleClickCopy,
                    "handle-click-paste": _vm.handleClickPaste
                  }
                })
              }),
              1
            )
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/Tree.vue?vue&type=template&id=2cd47254&":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/components/tree/Tree.vue?vue&type=template&id=2cd47254& ***!
  \************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", [
      _c(
        "ul",
        { staticClass: "list-group" },
        [
          _c("node-tree", {
            attrs: {
              node: _vm.treeData,
              "handle-click-add": this.handleClickAdd,
              "handle-click-edit": this.handleClickEdit,
              "handle-click-del": this.handleClickDel,
              "handle-click-copy": this.handleClickCopy,
              "handle-click-paste": this.handleClickPaste
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./resources/js/components/MultiQuestionsFormComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/MultiQuestionsFormComponent.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MultiQuestionsFormComponent_vue_vue_type_template_id_0405b16c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MultiQuestionsFormComponent.vue?vue&type=template&id=0405b16c& */ "./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=template&id=0405b16c&");
/* harmony import */ var _MultiQuestionsFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MultiQuestionsFormComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _MultiQuestionsFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _MultiQuestionsFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MultiQuestionsFormComponent_vue_vue_type_template_id_0405b16c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MultiQuestionsFormComponent_vue_vue_type_template_id_0405b16c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/MultiQuestionsFormComponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./MultiQuestionsFormComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************!*\
  !*** ./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader!../../../node_modules/css-loader??ref--7-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-2!../../../node_modules/vue-loader/lib??vue-loader-options!./MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=template&id=0405b16c&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=template&id=0405b16c& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_template_id_0405b16c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./MultiQuestionsFormComponent.vue?vue&type=template&id=0405b16c& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/MultiQuestionsFormComponent.vue?vue&type=template&id=0405b16c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_template_id_0405b16c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MultiQuestionsFormComponent_vue_vue_type_template_id_0405b16c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tree/NodeTree.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/tree/NodeTree.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _NodeTree_vue_vue_type_template_id_ed32b914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./NodeTree.vue?vue&type=template&id=ed32b914& */ "./resources/js/components/tree/NodeTree.vue?vue&type=template&id=ed32b914&");
/* harmony import */ var _NodeTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NodeTree.vue?vue&type=script&lang=js& */ "./resources/js/components/tree/NodeTree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _NodeTree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NodeTree.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _NodeTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _NodeTree_vue_vue_type_template_id_ed32b914___WEBPACK_IMPORTED_MODULE_0__["render"],
  _NodeTree_vue_vue_type_template_id_ed32b914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tree/NodeTree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tree/NodeTree.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/tree/NodeTree.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./NodeTree.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/NodeTree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************!*\
  !*** ./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./NodeTree.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/NodeTree.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/tree/NodeTree.vue?vue&type=template&id=ed32b914&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/tree/NodeTree.vue?vue&type=template&id=ed32b914& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_template_id_ed32b914___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./NodeTree.vue?vue&type=template&id=ed32b914& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/NodeTree.vue?vue&type=template&id=ed32b914&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_template_id_ed32b914___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_NodeTree_vue_vue_type_template_id_ed32b914___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/components/tree/Tree.vue":
/*!***********************************************!*\
  !*** ./resources/js/components/tree/Tree.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tree_vue_vue_type_template_id_2cd47254___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tree.vue?vue&type=template&id=2cd47254& */ "./resources/js/components/tree/Tree.vue?vue&type=template&id=2cd47254&");
/* harmony import */ var _Tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tree.vue?vue&type=script&lang=js& */ "./resources/js/components/tree/Tree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Tree.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Tree_vue_vue_type_template_id_2cd47254___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Tree_vue_vue_type_template_id_2cd47254___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/tree/Tree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/components/tree/Tree.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/components/tree/Tree.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tree.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/Tree.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tree.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/Tree.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/components/tree/Tree.vue?vue&type=template&id=2cd47254&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/tree/Tree.vue?vue&type=template&id=2cd47254& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_template_id_2cd47254___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Tree.vue?vue&type=template&id=2cd47254& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/components/tree/Tree.vue?vue&type=template&id=2cd47254&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_template_id_2cd47254___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tree_vue_vue_type_template_id_2cd47254___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/configs.js":
/*!*********************************!*\
  !*** ./resources/js/configs.js ***!
  \*********************************/
/*! exports provided: LOCAL_URLS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOCAL_URLS", function() { return LOCAL_URLS; });
var LOCAL_URLS = Object.freeze({
  QUESTION: Object.freeze({
    CREATE: '/admin/question',
    RETRIEVE: '/admin/question/{uuid}',
    UPDATE: '/admin/question',
    DELETE: '/admin/question'
  }),
  ANSWER: Object.freeze({
    CREATE: '/admin/answer',
    RETRIEVE: '/admin/answer/{uuid}',
    UPDATE: '/admin/answer',
    DELETE: '/admin/answer'
  })
});

/***/ }),

/***/ "./resources/js/multiQuestionsForm.js":
/*!********************************************!*\
  !*** ./resources/js/multiQuestionsForm.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_MultiQuestionsFormComponent_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/MultiQuestionsFormComponent.vue */ "./resources/js/components/MultiQuestionsFormComponent.vue");

var questionsForm = new Vue({
  el: '#questions-form',
  components: {
    'multi-questions-form': _components_MultiQuestionsFormComponent_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  }
});

/***/ }),

/***/ 8:
/*!**************************************************!*\
  !*** multi ./resources/js/multiQuestionsForm.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /mnt/7EDAA7EFDAA7A1BF/Desenvolvimento/Web/homeserver/resources/js/multiQuestionsForm.js */"./resources/js/multiQuestionsForm.js");


/***/ })

/******/ });