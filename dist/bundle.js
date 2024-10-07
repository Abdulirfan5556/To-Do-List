/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("document.addEventListener('DOMContentLoaded', () => {\r\n  const projectInput = document.getElementById('project-name');\r\n  const projectList = document.getElementById('project-list');\r\n  const addProjectBtn = document.getElementById('add-project');\r\n  const deleteProjectBtn = document.getElementById('delete-project');\r\n\r\n  const taskInput = document.getElementById('task-name');\r\n  const descInput = document.getElementById('task-desc');\r\n  const dateInput = document.getElementById('task-date');\r\n  const addTaskBtn = document.getElementById('add-task');\r\n  const taskList = document.getElementById('task-list');\r\n  const deleteTaskBtn = document.getElementById('delete-task');\r\n\r\n  addProjectBtn.addEventListener('click', () => {\r\n    const projectName = projectInput.value;\r\n    if (projectName) {\r\n      const projectItem = document.createElement('li');\r\n      projectItem.textContent = projectName;\r\n      projectList.appendChild(projectItem);\r\n      projectInput.value = '';\r\n    }\r\n  });\r\n\r\n  addTaskBtn.addEventListener('click', () => {\r\n    const taskName = taskInput.value;\r\n    const taskDesc = descInput.value;\r\n    const taskDate = dateInput.value;\r\n    const taskPriority = document.querySelector('input[name=\"priority\"]:checked').value;\r\n\r\n    if (taskName && taskDate) {\r\n      const taskItem = document.createElement('li');\r\n      taskItem.innerHTML = `\r\n          <span>${taskName}</span>\r\n          <span>Due in ${Math.ceil((new Date(taskDate) - new Date()) / (1000 * 60 * 60 * 24))} days</span>\r\n        `;\r\n      taskList.appendChild(taskItem);\r\n\r\n      taskInput.value = '';\r\n      descInput.value = '';\r\n      dateInput.value = '';\r\n    }\r\n  });\r\n\r\n  deleteTaskBtn.addEventListener('click', () => {\r\n    console.log(\"entered\")\r\n    taskList.innerHTML = '';\r\n  });\r\n\r\n  deleteProjectBtn.addEventListener('click', () => {\r\n    console.log(\"clicked\")\r\n    projectList.innerHTML = '';\r\n  });\r\n\r\n}); \n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;