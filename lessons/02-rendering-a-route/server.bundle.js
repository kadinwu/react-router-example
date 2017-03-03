/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _express = __webpack_require__(1);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(2);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(3);

	var _compression2 = _interopRequireDefault(_compression);

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(5);

	var _reactRouter = __webpack_require__(6);

	var _routes = __webpack_require__(7);

	var _routes2 = _interopRequireDefault(_routes);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// and these to match the url to routes and then render
	var app = (0, _express2.default)();
	// we'll use this to render our app to an html string


	app.use((0, _compression2.default)());

	app.use(_express2.default.static(_path2.default.join('./', 'public')));

	app.get('*', function (req, res) {
		//res.sendFile(path.join('./', 'public', 'index.html'));
		(0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {
			// in here we can make some decisions all at once
			if (err) {
				// there was an error somewhere during route matching
				res.status(500).send(err.message);
			} else if (redirect) {
				// we haven't talked about `onEnter` hooks on routes, but before a
				// route is entered, it can redirect. Here we handle on the server.
				res.redirect(redirect.pathname + redirect.search);
			} else if (props) {
				// if we got props then we matched a route and can render
				var appHtml = (0, _server.renderToString)(_react2.default.createElement(_reactRouter.RouterContext, props));
				res.send(renderPage(appHtml));
			} else {
				// no errors, no redirect, we just didn't match anything
				res.status(404).send('Not Found 404');
			}
		});
	});

	function renderPage(html) {
		return '\n\t<!doctype html public="storage">\n\t<html>\n\t<meta charset=utf-8/>\n\t<title>My First React Router App</title>\n\t<link rel=stylesheet href=\'/index.css\'>\n\t<div id=app>' + html + '</div>\n\t<script src="/bundle.js"></script>\n\t';
	}

	var PORT = process.env.PORT || 8080;

	app.listen(PORT, function () {
		console.log('Production Express server running at localhost:' + PORT);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("compression");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(8);

	var _App = __webpack_require__(9);

	var _App2 = _interopRequireDefault(_App);

	var _About = __webpack_require__(10);

	var _About2 = _interopRequireDefault(_About);

	var _Repos = __webpack_require__(11);

	var _Repos2 = _interopRequireDefault(_Repos);

	var _Repo = __webpack_require__(12);

	var _Repo2 = _interopRequireDefault(_Repo);

	var _Home = __webpack_require__(13);

	var _Home2 = _interopRequireDefault(_Home);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	module.exports = _react2.default.createElement(
		_reactRouter.Route,
		{ path: '/', component: _App2.default },
		_react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
		_react2.default.createElement(
			_reactRouter.Route,
			{ path: '/repos', component: _Repos2.default },
			_react2.default.createElement(_reactRouter.Route, { path: '/repos/:userName/:repoName', component: _Repo2.default })
		),
		_react2.default.createElement(_reactRouter.Route, { path: '/about', component: _About2.default })
	);

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = require("react-dom");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
			value: true
	});

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _react2.default.createClass({
			displayName: 'App',
			render: function render() {
					return _react2.default.createElement(
							'div',
							null,
							_react2.default.createElement(
									'h1',
									null,
									'React Router Tutorial'
							),
							_react2.default.createElement(
									'ul',
									null,
									_react2.default.createElement(
											'li',
											null,
											_react2.default.createElement(
													_reactRouter.Link,
													{ to: '/', onlyActiveOnIndex: true },
													'Home'
											)
									),
									_react2.default.createElement(
											'li',
											null,
											_react2.default.createElement(
													_reactRouter.Link,
													{ to: '/about', activeClassName: 'active' },
													'About'
											)
									),
									_react2.default.createElement(
											'li',
											null,
											_react2.default.createElement(
													_reactRouter.Link,
													{ to: '/repos', activeClassName: 'active' },
													'Repos'
											)
									)
							),
							this.props.children
					);
			}
	});

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var About = function (_Component) {
		_inherits(About, _Component);

		function About() {
			_classCallCheck(this, About);

			return _possibleConstructorReturn(this, (About.__proto__ || Object.getPrototypeOf(About)).apply(this, arguments));
		}

		_createClass(About, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					'About'
				);
			}
		}]);

		return About;
	}(_react.Component);

	exports.default = About;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Repos = function (_Component) {
		_inherits(Repos, _Component);

		function Repos() {
			_classCallCheck(this, Repos);

			return _possibleConstructorReturn(this, (Repos.__proto__ || Object.getPrototypeOf(Repos)).apply(this, arguments));
		}

		_createClass(Repos, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/repos/reactjs/react-router' },
								'React Router'
							)
						),
						_react2.default.createElement(
							'li',
							null,
							_react2.default.createElement(
								_reactRouter.Link,
								{ to: '/repos/facebook/react' },
								'React'
							)
						)
					),
					this.props.children
				);
			}
		}]);

		return Repos;
	}(_react.Component);

	exports.default = Repos;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Repo = function (_Component) {
		_inherits(Repo, _Component);

		function Repo() {
			_classCallCheck(this, Repo);

			return _possibleConstructorReturn(this, (Repo.__proto__ || Object.getPrototypeOf(Repo)).apply(this, arguments));
		}

		_createClass(Repo, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'ul',
						null,
						_react2.default.createElement(
							'li',
							null,
							this.props.params.repoName
						),
						_react2.default.createElement(
							'li',
							null,
							this.props.params.userName
						)
					)
				);
			}
		}]);

		return Repo;
	}(_react.Component);

	exports.default = Repo;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(4);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(6);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Home = function (_Component) {
		_inherits(Home, _Component);

		function Home() {
			_classCallCheck(this, Home);

			return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
		}

		_createClass(Home, [{
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					null,
					'Home'
				);
			}
		}]);

		return Home;
	}(_react.Component);

	exports.default = Home;

/***/ }
/******/ ]);