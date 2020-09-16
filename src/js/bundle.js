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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/assets/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/assets/index.js":
/*!********************************!*\
  !*** ./src/js/assets/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n\r\n\r\n    const solField = document.querySelector('.solutions__field-wrapper'),\r\n          solImagesCount = document.querySelectorAll('.solutions__img').length,\r\n          solImageWidth = document.querySelector('.solutions__img').offsetWidth,\r\n          solImagesTotWidthVal = solImagesCount * solImageWidth;\r\n          let solPosition = 0;\r\n\r\n    \r\n        const headField = document.querySelector('.promo__backgrounds'),\r\n              headImagesCount = document.querySelectorAll('.promo__background').length,\r\n              headImageWidth = document.querySelector('.promo__background').offsetWidth,\r\n              headImagesTotWidthVal = (headImagesCount * headImageWidth);\r\n        const headNav = document.querySelectorAll('promo__nav-item');\r\n        let headPosition = 0; \r\n        \r\n        let currentLayerIdx = 0;\r\n\r\n        const dots = document.querySelectorAll('.promo__nav-item');\r\n\r\n        dots.forEach((dot, i) => {\r\n            dot.addEventListener('click', ()=>{\r\n                const idx = i;\r\n                \r\n                if (currentLayerIdx === idx) {\r\n                    \r\n                } else {\r\n                    const temp = idx - currentLayerIdx;\r\n                    currentLayerIdx += temp;\r\n                    console.log(temp);\r\n                    headField.style.transform = `translateX(${-(currentLayerIdx * headImageWidth)}px)`;\r\n                }\r\n\r\n                dots.forEach((dot, i) => {\r\n                    dot.classList.remove('active');\r\n                    if(i == currentLayerIdx) {\r\n                        dot.classList.add('active');\r\n                    }\r\n                });\r\n            });\r\n        })\r\n\r\n       \r\n    document.querySelector('.solutions__next').addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        solPosition -= solImageWidth;\r\n        if(Math.abs(solPosition) >= solImagesTotWidthVal) {\r\n            solPosition = 0;\r\n            solField.style.transform = `translateX(${solPosition}px)`;\r\n        }  else {\r\n            solField.style.transform = `translateX(${solPosition}px)`;\r\n        }\r\n        \r\n        \r\n    });\r\n\r\n    document.querySelector('.solutions__prev').addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n\r\n        solPosition += solImageWidth;\r\n        if(solPosition >= solImagesTotWidthVal) {\r\n            solPosition = 0;\r\n            solField.style.transform = `translateX(-${solPosition}px)`;\r\n        }  else {\r\n            solField.style.transform = `translateX(-${solPosition}px)`;\r\n        }\r\n        \r\n        \r\n    });\r\n\r\n    document.querySelector('.promo__nav-prev').addEventListener('click', (e) => { \r\n        e.preventDefault();\r\n\r\n        \r\n        currentLayerIdx += 1;\r\n        \r\n        \r\n        if(currentLayerIdx > headImagesCount - 1) {\r\n            currentLayerIdx = 0;\r\n            headField.style.transform = `translateX(${currentLayerIdx}px)`;\r\n        }  else {\r\n            headField.style.transform = `translateX(-${currentLayerIdx * headImageWidth}px)`;\r\n        }\r\n        dots.forEach((dot, i) => {\r\n            dot.classList.remove('active');\r\n            if(i ===  currentLayerIdx) {\r\n                dot.classList.add('active');\r\n            }\r\n        });\r\n        console.log(currentLayerIdx);\r\n    });\r\n\r\n    document.querySelector('.promo__nav-next').addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        \r\n        currentLayerIdx -= 1;\r\n\r\n        \r\n\r\n        console.log(currentLayerIdx);\r\n        // headPosition -= headImageWidth;\r\n        // if(Math.abs(headPosition) >= headImagesTotWidthVal) {\r\n        //     headPosition = 0;\r\n        //     headField.style.transform = `translateX(${headPosition}px)`;\r\n        // }  else {\r\n        //     headField.style.transform = `translateX(${headPosition}px)`;\r\n        // }\r\n        if(currentLayerIdx < 0) {\r\n            currentLayerIdx = headImagesCount - 1;\r\n            headField.style.transform = `translateX(-${currentLayerIdx * headImageWidth}px)`;\r\n        }  else {\r\n            headField.style.transform = `translateX(-${currentLayerIdx * headImageWidth}px)`;\r\n        }\r\n\r\n        dots.forEach((dot, i) => {\r\n            dot.classList.remove('active');\r\n            if(i == currentLayerIdx) {\r\n                dot.classList.add('active');\r\n            }\r\n        });\r\n    });\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/js/assets/index.js?");

/***/ })

/******/ });