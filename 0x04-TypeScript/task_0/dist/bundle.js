/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("{\nconst student1 = {\n    firstName: 'John',\n    lastName: 'Doe',\n    age: 20,\n    location: 'New York'\n};\nconst student2 = {\n    firstName: 'Jane',\n    lastName: 'Smith',\n    age: 22,\n    location: 'Los Angeles'\n};\nconst studentsList = [student1, student2];\nfunction renderTable() {\n    const container = document.createElement('div');\n    const table = document.createElement('table');\n    const thead = document.createElement('thead');\n    const tbody = document.createElement('tbody');\n    // Create header row\n    const headerRow = document.createElement('tr');\n    ['First Name', 'Location'].forEach(headerText => {\n        const th = document.createElement('th');\n        th.textContent = headerText;\n        headerRow.appendChild(th);\n    });\n    thead.appendChild(headerRow);\n    // Create student rows\n    studentsList.forEach(student => {\n        const row = document.createElement('tr');\n        const firstNameCell = document.createElement('td');\n        firstNameCell.textContent = student.firstName;\n        const locationCell = document.createElement('td');\n        locationCell.textContent = student.location;\n        row.appendChild(firstNameCell);\n        row.appendChild(locationCell);\n        tbody.appendChild(row);\n    });\n    table.appendChild(thead);\n    table.appendChild(tbody);\n    container.appendChild(table);\n    document.body.appendChild(container);\n}\n// Render table when page loads\ndocument.addEventListener('DOMContentLoaded', renderTable);\n\n\n//# sourceURL=webpack://task_0/./js/main.ts?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;