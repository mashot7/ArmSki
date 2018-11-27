(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _main_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main-pages/home-page/home-page.component */ "./src/app/main-pages/home-page/home-page.component.ts");
/* harmony import */ var _main_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./main-pages/about-page/about-page.component */ "./src/app/main-pages/about-page/about-page.component.ts");
/* harmony import */ var _main_pages_events_page_events_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-pages/events-page/events-page.component */ "./src/app/main-pages/events-page/events-page.component.ts");
/* harmony import */ var _main_pages_tours_page_tours_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-pages/tours-page/tours-page.component */ "./src/app/main-pages/tours-page/tours-page.component.ts");
/* harmony import */ var _main_pages_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./main-pages/gallery-page/gallery-page.component */ "./src/app/main-pages/gallery-page/gallery-page.component.ts");
/* harmony import */ var _main_pages_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-pages/videos-page/videos-page.component */ "./src/app/main-pages/videos-page/videos-page.component.ts");
/* harmony import */ var _main_pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-pages/blog-page/blog-page.component */ "./src/app/main-pages/blog-page/blog-page.component.ts");
/* harmony import */ var _main_pages_armenia_page_armenia_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-pages/armenia-page/armenia-page.component */ "./src/app/main-pages/armenia-page/armenia-page.component.ts");
/* harmony import */ var _pages_blog_blog_page01_blog_page01_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/blog/blog-page01/blog-page01.component */ "./src/app/pages/blog/blog-page01/blog-page01.component.ts");
/* harmony import */ var _pages_blog_blog_page02_blog_page02_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/blog/blog-page02/blog-page02.component */ "./src/app/pages/blog/blog-page02/blog-page02.component.ts");
/* harmony import */ var _pages_blog_blog_page03_blog_page03_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/blog/blog-page03/blog-page03.component */ "./src/app/pages/blog/blog-page03/blog-page03.component.ts");
/* harmony import */ var _pages_blog_blog_page04_blog_page04_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/blog/blog-page04/blog-page04.component */ "./src/app/pages/blog/blog-page04/blog-page04.component.ts");
/* harmony import */ var _pages_blog_blog_page05_blog_page05_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/blog/blog-page05/blog-page05.component */ "./src/app/pages/blog/blog-page05/blog-page05.component.ts");
/* harmony import */ var _pages_blog_blog_page06_blog_page06_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/blog/blog-page06/blog-page06.component */ "./src/app/pages/blog/blog-page06/blog-page06.component.ts");
/* harmony import */ var _pages_blog_blog_page07_blog_page07_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/blog/blog-page07/blog-page07.component */ "./src/app/pages/blog/blog-page07/blog-page07.component.ts");
/* harmony import */ var _pages_armenia_armenia_page01_armenia_page01_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/armenia/armenia-page01/armenia-page01.component */ "./src/app/pages/armenia/armenia-page01/armenia-page01.component.ts");
/* harmony import */ var _pages_armenia_armenia_page02_armenia_page02_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/armenia/armenia-page02/armenia-page02.component */ "./src/app/pages/armenia/armenia-page02/armenia-page02.component.ts");
/* harmony import */ var _pages_armenia_armenia_page03_armenia_page03_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/armenia/armenia-page03/armenia-page03.component */ "./src/app/pages/armenia/armenia-page03/armenia-page03.component.ts");
/* harmony import */ var _pages_armenia_armenia_page04_armenia_page04_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/armenia/armenia-page04/armenia-page04.component */ "./src/app/pages/armenia/armenia-page04/armenia-page04.component.ts");
/* harmony import */ var _pages_armenia_armenia_page05_armenia_page05_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/armenia/armenia-page05/armenia-page05.component */ "./src/app/pages/armenia/armenia-page05/armenia-page05.component.ts");
/* harmony import */ var _pages_armenia_armenia_page06_armenia_page06_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/armenia/armenia-page06/armenia-page06.component */ "./src/app/pages/armenia/armenia-page06/armenia-page06.component.ts");
/* harmony import */ var _pages_armenia_armenia_page07_armenia_page07_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/armenia/armenia-page07/armenia-page07.component */ "./src/app/pages/armenia/armenia-page07/armenia-page07.component.ts");
/* harmony import */ var _pages_armenia_armenia_page08_armenia_page08_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/armenia/armenia-page08/armenia-page08.component */ "./src/app/pages/armenia/armenia-page08/armenia-page08.component.ts");
/* harmony import */ var _pages_armenia_armenia_page09_armenia_page09_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/armenia/armenia-page09/armenia-page09.component */ "./src/app/pages/armenia/armenia-page09/armenia-page09.component.ts");
/* harmony import */ var _pages_armenia_armenia_page10_armenia_page10_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/armenia/armenia-page10/armenia-page10.component */ "./src/app/pages/armenia/armenia-page10/armenia-page10.component.ts");
/* harmony import */ var _pages_armenia_armenia_page11_armenia_page11_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/armenia/armenia-page11/armenia-page11.component */ "./src/app/pages/armenia/armenia-page11/armenia-page11.component.ts");
/* harmony import */ var _pages_armenia_armenia_page12_armenia_page12_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/armenia/armenia-page12/armenia-page12.component */ "./src/app/pages/armenia/armenia-page12/armenia-page12.component.ts");
/* harmony import */ var _pages_tours_tours_page01_tours_page01_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/tours/tours-page01/tours-page01.component */ "./src/app/pages/tours/tours-page01/tours-page01.component.ts");
/* harmony import */ var _pages_tours_tours_page02_tours_page02_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/tours/tours-page02/tours-page02.component */ "./src/app/pages/tours/tours-page02/tours-page02.component.ts");
/* harmony import */ var _pages_tours_tours_page03_tours_page03_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/tours/tours-page03/tours-page03.component */ "./src/app/pages/tours/tours-page03/tours-page03.component.ts");
/* harmony import */ var _pages_tours_tours_page04_tours_page04_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/tours/tours-page04/tours-page04.component */ "./src/app/pages/tours/tours-page04/tours-page04.component.ts");
/* harmony import */ var _pages_tours_tours_page05_tours_page05_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/tours/tours-page05/tours-page05.component */ "./src/app/pages/tours/tours-page05/tours-page05.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










// pages
























var appRoutes = [
    { path: 'about', component: _main_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_3__["AboutPageComponent"] },
    { path: '', component: _main_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_2__["HomePageComponent"] },
    { path: 'events', component: _main_pages_events_page_events_page_component__WEBPACK_IMPORTED_MODULE_4__["EventsPageComponent"] },
    { path: 'tours', component: _main_pages_tours_page_tours_page_component__WEBPACK_IMPORTED_MODULE_5__["ToursPageComponent"] },
    { path: 'gallery', component: _main_pages_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_6__["GalleryPageComponent"] },
    { path: 'videos', component: _main_pages_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_7__["VideosPageComponent"] },
    { path: 'blog', component: _main_pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_8__["BlogPageComponent"] },
    { path: 'armenia', component: _main_pages_armenia_page_armenia_page_component__WEBPACK_IMPORTED_MODULE_9__["ArmeniaPageComponent"] },
    { path: 'blog/1', component: _pages_blog_blog_page01_blog_page01_component__WEBPACK_IMPORTED_MODULE_10__["BlogPage01Component"] },
    { path: 'blog/2', component: _pages_blog_blog_page02_blog_page02_component__WEBPACK_IMPORTED_MODULE_11__["BlogPage02Component"] },
    { path: 'blog/3', component: _pages_blog_blog_page03_blog_page03_component__WEBPACK_IMPORTED_MODULE_12__["BlogPage03Component"] },
    { path: 'blog/4', component: _pages_blog_blog_page04_blog_page04_component__WEBPACK_IMPORTED_MODULE_13__["BlogPage04Component"] },
    { path: 'blog/5', component: _pages_blog_blog_page05_blog_page05_component__WEBPACK_IMPORTED_MODULE_14__["BlogPage05Component"] },
    { path: 'blog/6', component: _pages_blog_blog_page06_blog_page06_component__WEBPACK_IMPORTED_MODULE_15__["BlogPage06Component"] },
    { path: 'blog/7', component: _pages_blog_blog_page07_blog_page07_component__WEBPACK_IMPORTED_MODULE_16__["BlogPage07Component"] },
    { path: 'armenia', component: _main_pages_armenia_page_armenia_page_component__WEBPACK_IMPORTED_MODULE_9__["ArmeniaPageComponent"] },
    { path: 'armenia/1', component: _pages_armenia_armenia_page01_armenia_page01_component__WEBPACK_IMPORTED_MODULE_17__["ArmeniaPage01Component"] },
    { path: 'armenia/2', component: _pages_armenia_armenia_page02_armenia_page02_component__WEBPACK_IMPORTED_MODULE_18__["ArmeniaPage02Component"] },
    { path: 'armenia/3', component: _pages_armenia_armenia_page03_armenia_page03_component__WEBPACK_IMPORTED_MODULE_19__["ArmeniaPage03Component"] },
    { path: 'armenia/4', component: _pages_armenia_armenia_page04_armenia_page04_component__WEBPACK_IMPORTED_MODULE_20__["ArmeniaPage04Component"] },
    { path: 'armenia/5', component: _pages_armenia_armenia_page05_armenia_page05_component__WEBPACK_IMPORTED_MODULE_21__["ArmeniaPage05Component"] },
    { path: 'armenia/6', component: _pages_armenia_armenia_page06_armenia_page06_component__WEBPACK_IMPORTED_MODULE_22__["ArmeniaPage06Component"] },
    { path: 'armenia/7', component: _pages_armenia_armenia_page07_armenia_page07_component__WEBPACK_IMPORTED_MODULE_23__["ArmeniaPage07Component"] },
    { path: 'armenia/8', component: _pages_armenia_armenia_page08_armenia_page08_component__WEBPACK_IMPORTED_MODULE_24__["ArmeniaPage08Component"] },
    { path: 'armenia/9', component: _pages_armenia_armenia_page09_armenia_page09_component__WEBPACK_IMPORTED_MODULE_25__["ArmeniaPage09Component"] },
    { path: 'armenia/10', component: _pages_armenia_armenia_page10_armenia_page10_component__WEBPACK_IMPORTED_MODULE_26__["ArmeniaPage10Component"] },
    { path: 'armenia/11', component: _pages_armenia_armenia_page11_armenia_page11_component__WEBPACK_IMPORTED_MODULE_27__["ArmeniaPage11Component"] },
    { path: 'armenia/12', component: _pages_armenia_armenia_page12_armenia_page12_component__WEBPACK_IMPORTED_MODULE_28__["ArmeniaPage12Component"] },
    { path: 'tours/01', component: _pages_tours_tours_page01_tours_page01_component__WEBPACK_IMPORTED_MODULE_29__["ToursPage01Component"] },
    { path: 'tours/02', component: _pages_tours_tours_page02_tours_page02_component__WEBPACK_IMPORTED_MODULE_30__["ToursPage02Component"] },
    { path: 'tours/03', component: _pages_tours_tours_page03_tours_page03_component__WEBPACK_IMPORTED_MODULE_31__["ToursPage03Component"] },
    { path: 'tours/04', component: _pages_tours_tours_page04_tours_page04_component__WEBPACK_IMPORTED_MODULE_32__["ToursPage04Component"] },
    { path: 'tours/05', component: _pages_tours_tours_page05_tours_page05_component__WEBPACK_IMPORTED_MODULE_33__["ToursPage05Component"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    overflow-x: hidden;\r\n  }\r\n  \r\n  /* animaion of nav bar color changing */\r\n  \r\n  @keyframes example {\r\n    10% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.1),rgba(132, 176, 215, 0.1));}\r\n    20% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.2),rgba(132, 176, 215, 0.2));}\r\n    30% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.3),rgba(132, 176, 215, 0.3));}\r\n    40% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.4),rgba(132, 176, 215, 0.4));}\r\n    50% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.5),rgba(132, 176, 215, 0.5));}\r\n    60% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.6),rgba(132, 176, 215, 0.6));}\r\n    70% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.7),rgba(132, 176, 215, 0.7));}\r\n    80% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.8),rgba(132, 176, 215, 0.8));}\r\n    90% {background: linear-gradient(to bottom,rgba(124, 171, 218, 0.9),rgba(132, 176, 215, 0.9));}\r\n    100% {background: linear-gradient(to bottom,rgba(124, 171, 218, 1),rgba(132, 176, 215, 1));}\r\n  }\r\n  \r\n  @-webkit-keyframes example {\r\n    10% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.1),rgba(51, 119, 162, 0.1));}\r\n    20% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.2),rgba(51, 119, 162, 0.2));}\r\n    30% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.3),rgba(51, 119, 162, 0.3));}\r\n    40% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.4),rgba(51, 119, 162, 0.4));}\r\n    50% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.5),rgba(51, 119, 162, 0.5));}\r\n    60% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.6),rgba(51, 119, 162, 0.6));}\r\n    70% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.7),rgba(51, 119, 162, 0.7));}\r\n    80% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.8),rgba(51, 119, 162, 0.8));}\r\n    90% {background: linear-gradient(to bottom,rgba(26, 102, 149, 0.9),rgba(51, 119, 162, 0.9));}\r\n    100% {background: linear-gradient(to bottom,rgba(26, 102, 149, 1),rgba(51, 119, 162, 1));}\r\n  }\r\n  \r\n  /* Navigation bar */\r\n  \r\n  nav {\r\n    position: fixed;\r\n    width: 100%;\r\n    background: transparent;\r\n    width: 100%;\r\n    padding: 20px;\r\n    top: 0px;\r\n    text-align: right;\r\n  }\r\n  \r\n  nav ul li {\r\n    list-style: none;\r\n  }\r\n  \r\n  nav ul li a {\r\n    color: #fff;\r\n    text-decoration: none;\r\n    text-transform: uppercase;\r\n    font-family: Raleway,sans-serif;\r\n    font-size: 14px;\r\n    font-weight: 700;\r\n    font-style: italic;\r\n    line-height: normal;\r\n  }\r\n  \r\n  nav ul li a:hover {\r\n    color: rgb(51, 67, 75);\r\n  }\r\n  \r\n  .navbar ul li{\r\n    list-style-type: none;\r\n    padding: 5px 10px;\r\n    color: white;\r\n    font-size: 24px;\r\n    font-family: sans-serif;\r\n    cursor: pointer;\r\n    transition: .5s;\r\n  }\r\n  \r\n  .mainWpaper {\r\n    display: block;\r\n    width: 100%;\r\n    box-sizing: border-box;\r\n  }\r\n  \r\n  .logo {\r\n    text-align: left !important;\r\n    left: 100px;\r\n  }\r\n  \r\n  .logo.mobile {\r\n    width: 100px;\r\n    float: left;\r\n  }\r\n  \r\n  .active {\r\n    color: rgb(51, 67, 75) !important;\r\n    display: block;\r\n  }\r\n  \r\n  .header {\r\n    z-index: 100000 !important;\r\n  }\r\n  \r\n  /* Responsive navBar------------------------------------------------------- */\r\n  \r\n  .Anime{\r\n    position: fixed;\r\n    -webkit-animation-name: example;\r\n    animation-name: example;\r\n    animation-duration: 0.1s;\r\n    -webkit-animation-duration: 0.1s;\r\n    animation-fill-mode: forwards;\r\n    -webkit-animation-fill-mode: forwards;\r\n  }\r\n  \r\n  @media only screen and ( min-width: 699px) {\r\n    \r\n  \r\n    nav ul {\r\n      width: 80%;\r\n      margin: 0;\r\n      padding: 0;\r\n    }\r\n    \r\n    nav ul li {\r\n      display: inline-block;\r\n    }\r\n  \r\n    .desktop.hide {\r\n      display: none;\r\n    }\r\n  }\r\n  \r\n  @media only screen and ( max-width: 698px) {\r\n    .mobile.hide {\r\n      display: none;\r\n    }\r\n  \r\n    .logo.mobile.show {\r\n      display: block;\r\n      width: 100px;\r\n      float: left;\r\n    }\r\n  \r\n    nav ul {\r\n      background: linear-gradient(to bottom,rgba(124, 171, 218, 1),rgba(132, 176, 215, 1));\r\n      width: 100%;\r\n      margin: 0px;\r\n      padding: 0;\r\n    }\r\n  \r\n    nav ul li {\r\n      display: block;\r\n      text-align: center;\r\n    }\r\n  \r\n    header {\r\n      margin: 0px;\r\n      padding: 0px;\r\n    }\r\n  \r\n    nav {\r\n      padding: 0px;\r\n      margin: 0px;\r\n      top: 60px;\r\n    }\r\n  \r\n    .Anime{\r\n      background-color: transparent;\r\n      position: fixed;\r\n    \r\n      -webkit-animation-name: example;\r\n      animation-name: example;\r\n      animation-duration: 0.1s;\r\n      -webkit-animation-duration: 0.1s;\r\n      animation-fill-mode: forwards;\r\n      -webkit-animation-fill-mode: forwards;\r\n    }\r\n  }\r\n  \r\n  .but {\r\n    position: fixed;\r\n    text-align: right;\r\n    border-radius: 0px;\r\n    border: 0px;\r\n    padding: 15px;\r\n    width: 100%;\r\n    height: 60px;\r\n    font-size: 26px;\r\n    color: white;\r\n    background: transparent;\r\n    outline: none !important;\r\n  }\r\n  \r\n  button, nav {\r\n    z-index: 100000;\r\n  }\r\n  \r\n  .show {\r\n    display: block !important;\r\n  }\r\n  \r\n  button.but {\r\n    margin: 0px !important;\r\n  }"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"background\"></div>\r\n\r\n<header class=\"header\">\r\n    <button [ngClass]=\"{'Anime': onWindowScroll() || !menuShow()}\" class=\"but desktop hide\" (click)=\"openMainMenu()\"><i class=\"fa fa-bars\" aria-hidden=\"true\"></i></button>\r\n    <nav [ngClass]=\"{'Anime': onWindowScroll()}\" class=\"navbar\" id=\"nav\">\r\n        <div class=\"logo mobile hide\">\r\n            <a href=\"http://armski.am\">\r\n            <img style=\"max-height: 40px;\" src=\"../../assets/logo.png\" alt=\"\">\r\n            </a>\r\n        </div>\r\n        <ul [ngClass]=\"{'show': !menuShow()}\" class=\"mobile hide\">\r\n            <li><a \r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" routerLink=\"/\"\r\n                >Home</a></li>\r\n            <li><a  href=\"#{{1}}\"\r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/armenia'\"\r\n                >Armenia</a></li>\r\n            <li><a \r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/tours'\"\r\n                >Tours</a></li>\r\n            <li><a \r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/gallery'\"\r\n                >Gallery</a></li>\r\n            <li><a \r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/videos'\"\r\n                >Videos</a></li>\r\n            <!-- <li><a \r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/events'\"\r\n                >Events</a></li> -->\r\n            <li><a \r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/blog'\"\r\n                >Blog</a></li>\r\n            <li><a \r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/about'\"\r\n                >About Us</a></li>\r\n            <!-- <li><a \r\n                routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact: true}\" [routerLink]=\"'/contact-us'\"\r\n                >Contact Us</a></li> -->\r\n        </ul>\r\n    </nav>\r\n</header>\r\n<div class=\"mainWpaper\">\r\n    <img class=\"mainWpaper\" src=\"../assets/img0.png\" alt=\"\">\r\n</div>\r\n\r\n<main>\r\n    <section id=\"1\"><router-outlet></router-outlet></section>\r\n</main>\r\n\r\n<footer>\r\n    <app-footer></app-footer>\r\n</footer>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
        this.menuOpened = true;
        // this.defaulValue = this.defaulValue + 1;
        // return this.defaulValue % 2 === 0 ? true : false;
    }
    AppComponent.prototype.onWindowScroll = function () {
        return document.body.scrollTop > 1 || document.documentElement.scrollTop > 1 ? true : false;
    };
    AppComponent.prototype.openMainMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    AppComponent.prototype.menuShow = function () {
        return this.menuOpened;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "onWindowScroll", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _main_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main-pages/home-page/home-page.component */ "./src/app/main-pages/home-page/home-page.component.ts");
/* harmony import */ var _main_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./main-pages/about-page/about-page.component */ "./src/app/main-pages/about-page/about-page.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _main_pages_events_page_events_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./main-pages/events-page/events-page.component */ "./src/app/main-pages/events-page/events-page.component.ts");
/* harmony import */ var _main_pages_tours_page_tours_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./main-pages/tours-page/tours-page.component */ "./src/app/main-pages/tours-page/tours-page.component.ts");
/* harmony import */ var _main_pages_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./main-pages/gallery-page/gallery-page.component */ "./src/app/main-pages/gallery-page/gallery-page.component.ts");
/* harmony import */ var _main_pages_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main-pages/videos-page/videos-page.component */ "./src/app/main-pages/videos-page/videos-page.component.ts");
/* harmony import */ var _main_pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./main-pages/blog-page/blog-page.component */ "./src/app/main-pages/blog-page/blog-page.component.ts");
/* harmony import */ var _main_pages_armenia_page_armenia_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./main-pages/armenia-page/armenia-page.component */ "./src/app/main-pages/armenia-page/armenia-page.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _infinite_carousel_infinite_carousel_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./infinite-carousel/infinite-carousel.component */ "./src/app/infinite-carousel/infinite-carousel.component.ts");
/* harmony import */ var _pages_blog_blog_page01_blog_page01_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/blog/blog-page01/blog-page01.component */ "./src/app/pages/blog/blog-page01/blog-page01.component.ts");
/* harmony import */ var _pages_blog_blog_page02_blog_page02_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/blog/blog-page02/blog-page02.component */ "./src/app/pages/blog/blog-page02/blog-page02.component.ts");
/* harmony import */ var _pages_blog_blog_page03_blog_page03_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/blog/blog-page03/blog-page03.component */ "./src/app/pages/blog/blog-page03/blog-page03.component.ts");
/* harmony import */ var _pages_blog_blog_page04_blog_page04_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/blog/blog-page04/blog-page04.component */ "./src/app/pages/blog/blog-page04/blog-page04.component.ts");
/* harmony import */ var _pages_blog_blog_page05_blog_page05_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/blog/blog-page05/blog-page05.component */ "./src/app/pages/blog/blog-page05/blog-page05.component.ts");
/* harmony import */ var _pages_blog_blog_page06_blog_page06_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/blog/blog-page06/blog-page06.component */ "./src/app/pages/blog/blog-page06/blog-page06.component.ts");
/* harmony import */ var _pages_blog_blog_page07_blog_page07_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/blog/blog-page07/blog-page07.component */ "./src/app/pages/blog/blog-page07/blog-page07.component.ts");
/* harmony import */ var _pages_armenia_armenia_page01_armenia_page01_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/armenia/armenia-page01/armenia-page01.component */ "./src/app/pages/armenia/armenia-page01/armenia-page01.component.ts");
/* harmony import */ var _pages_armenia_armenia_page02_armenia_page02_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/armenia/armenia-page02/armenia-page02.component */ "./src/app/pages/armenia/armenia-page02/armenia-page02.component.ts");
/* harmony import */ var _pages_armenia_armenia_page03_armenia_page03_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/armenia/armenia-page03/armenia-page03.component */ "./src/app/pages/armenia/armenia-page03/armenia-page03.component.ts");
/* harmony import */ var _pages_armenia_armenia_page04_armenia_page04_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/armenia/armenia-page04/armenia-page04.component */ "./src/app/pages/armenia/armenia-page04/armenia-page04.component.ts");
/* harmony import */ var _pages_armenia_armenia_page05_armenia_page05_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/armenia/armenia-page05/armenia-page05.component */ "./src/app/pages/armenia/armenia-page05/armenia-page05.component.ts");
/* harmony import */ var _pages_armenia_armenia_page06_armenia_page06_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/armenia/armenia-page06/armenia-page06.component */ "./src/app/pages/armenia/armenia-page06/armenia-page06.component.ts");
/* harmony import */ var _pages_armenia_armenia_page07_armenia_page07_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/armenia/armenia-page07/armenia-page07.component */ "./src/app/pages/armenia/armenia-page07/armenia-page07.component.ts");
/* harmony import */ var _pages_armenia_armenia_page08_armenia_page08_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/armenia/armenia-page08/armenia-page08.component */ "./src/app/pages/armenia/armenia-page08/armenia-page08.component.ts");
/* harmony import */ var _pages_armenia_armenia_page09_armenia_page09_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/armenia/armenia-page09/armenia-page09.component */ "./src/app/pages/armenia/armenia-page09/armenia-page09.component.ts");
/* harmony import */ var _pages_armenia_armenia_page10_armenia_page10_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/armenia/armenia-page10/armenia-page10.component */ "./src/app/pages/armenia/armenia-page10/armenia-page10.component.ts");
/* harmony import */ var _pages_armenia_armenia_page11_armenia_page11_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/armenia/armenia-page11/armenia-page11.component */ "./src/app/pages/armenia/armenia-page11/armenia-page11.component.ts");
/* harmony import */ var _pages_armenia_armenia_page12_armenia_page12_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/armenia/armenia-page12/armenia-page12.component */ "./src/app/pages/armenia/armenia-page12/armenia-page12.component.ts");
/* harmony import */ var _pages_tours_tours_page01_tours_page01_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/tours/tours-page01/tours-page01.component */ "./src/app/pages/tours/tours-page01/tours-page01.component.ts");
/* harmony import */ var _pages_tours_tours_page02_tours_page02_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/tours/tours-page02/tours-page02.component */ "./src/app/pages/tours/tours-page02/tours-page02.component.ts");
/* harmony import */ var _pages_tours_tours_page03_tours_page03_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/tours/tours-page03/tours-page03.component */ "./src/app/pages/tours/tours-page03/tours-page03.component.ts");
/* harmony import */ var _pages_tours_tours_page04_tours_page04_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/tours/tours-page04/tours-page04.component */ "./src/app/pages/tours/tours-page04/tours-page04.component.ts");
/* harmony import */ var _pages_tours_tours_page05_tours_page05_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/tours/tours-page05/tours-page05.component */ "./src/app/pages/tours/tours-page05/tours-page05.component.ts");
/* harmony import */ var _pages_tours_tours_page06_tours_page06_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/tours/tours-page06/tours-page06.component */ "./src/app/pages/tours/tours-page06/tours-page06.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// pages

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _main_pages_home_page_home_page_component__WEBPACK_IMPORTED_MODULE_4__["HomePageComponent"],
                _main_pages_about_page_about_page_component__WEBPACK_IMPORTED_MODULE_5__["AboutPageComponent"],
                _main_pages_events_page_events_page_component__WEBPACK_IMPORTED_MODULE_7__["EventsPageComponent"],
                _main_pages_tours_page_tours_page_component__WEBPACK_IMPORTED_MODULE_8__["ToursPageComponent"],
                _main_pages_gallery_page_gallery_page_component__WEBPACK_IMPORTED_MODULE_9__["GalleryPageComponent"],
                _main_pages_videos_page_videos_page_component__WEBPACK_IMPORTED_MODULE_10__["VideosPageComponent"],
                _main_pages_blog_page_blog_page_component__WEBPACK_IMPORTED_MODULE_11__["BlogPageComponent"],
                _main_pages_armenia_page_armenia_page_component__WEBPACK_IMPORTED_MODULE_12__["ArmeniaPageComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_13__["FooterComponent"],
                _infinite_carousel_infinite_carousel_component__WEBPACK_IMPORTED_MODULE_14__["InfiniteCarouselComponent"],
                _pages_blog_blog_page01_blog_page01_component__WEBPACK_IMPORTED_MODULE_15__["BlogPage01Component"],
                _pages_blog_blog_page02_blog_page02_component__WEBPACK_IMPORTED_MODULE_16__["BlogPage02Component"],
                _pages_blog_blog_page03_blog_page03_component__WEBPACK_IMPORTED_MODULE_17__["BlogPage03Component"],
                _pages_blog_blog_page04_blog_page04_component__WEBPACK_IMPORTED_MODULE_18__["BlogPage04Component"],
                _pages_blog_blog_page05_blog_page05_component__WEBPACK_IMPORTED_MODULE_19__["BlogPage05Component"],
                _pages_blog_blog_page06_blog_page06_component__WEBPACK_IMPORTED_MODULE_20__["BlogPage06Component"],
                _pages_blog_blog_page07_blog_page07_component__WEBPACK_IMPORTED_MODULE_21__["BlogPage07Component"],
                _pages_armenia_armenia_page01_armenia_page01_component__WEBPACK_IMPORTED_MODULE_22__["ArmeniaPage01Component"],
                _pages_armenia_armenia_page02_armenia_page02_component__WEBPACK_IMPORTED_MODULE_23__["ArmeniaPage02Component"],
                _pages_armenia_armenia_page03_armenia_page03_component__WEBPACK_IMPORTED_MODULE_24__["ArmeniaPage03Component"],
                _pages_armenia_armenia_page04_armenia_page04_component__WEBPACK_IMPORTED_MODULE_25__["ArmeniaPage04Component"],
                _pages_armenia_armenia_page05_armenia_page05_component__WEBPACK_IMPORTED_MODULE_26__["ArmeniaPage05Component"],
                _pages_armenia_armenia_page06_armenia_page06_component__WEBPACK_IMPORTED_MODULE_27__["ArmeniaPage06Component"],
                _pages_armenia_armenia_page07_armenia_page07_component__WEBPACK_IMPORTED_MODULE_28__["ArmeniaPage07Component"],
                _pages_armenia_armenia_page08_armenia_page08_component__WEBPACK_IMPORTED_MODULE_29__["ArmeniaPage08Component"],
                _pages_armenia_armenia_page09_armenia_page09_component__WEBPACK_IMPORTED_MODULE_30__["ArmeniaPage09Component"],
                _pages_armenia_armenia_page10_armenia_page10_component__WEBPACK_IMPORTED_MODULE_31__["ArmeniaPage10Component"],
                _pages_armenia_armenia_page11_armenia_page11_component__WEBPACK_IMPORTED_MODULE_32__["ArmeniaPage11Component"],
                _pages_armenia_armenia_page12_armenia_page12_component__WEBPACK_IMPORTED_MODULE_33__["ArmeniaPage12Component"],
                _pages_tours_tours_page01_tours_page01_component__WEBPACK_IMPORTED_MODULE_34__["ToursPage01Component"],
                _pages_tours_tours_page02_tours_page02_component__WEBPACK_IMPORTED_MODULE_35__["ToursPage02Component"],
                _pages_tours_tours_page03_tours_page03_component__WEBPACK_IMPORTED_MODULE_36__["ToursPage03Component"],
                _pages_tours_tours_page04_tours_page04_component__WEBPACK_IMPORTED_MODULE_37__["ToursPage04Component"],
                _pages_tours_tours_page05_tours_page05_component__WEBPACK_IMPORTED_MODULE_38__["ToursPage05Component"],
                _pages_tours_tours_page06_tours_page06_component__WEBPACK_IMPORTED_MODULE_39__["ToursPage06Component"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".clear {\r\n    clear: both;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    display: block;\r\n}\r\n\r\np.footer-gd {\r\n    color: #908F8F;\r\n    font-weight: 500;\r\n    font-size: 14px;\r\n}\r\n\r\n.footer-gd a {\r\n    color: #908F8F;\r\n}\r\n\r\n.footer-gd a:hover {\r\n    color: #b6aeae;\r\n    text-decoration: none;\r\n}\r\n\r\n.copy-right-grids {\r\n    padding-left: 2%;\r\n    background: #211E1E;\r\n}\r\n\r\n.footer-grids {\r\n    padding: 2.5em 2.5em;\r\n}\r\n\r\n@media only screen and (min-width: 699px) {\r\n    .footer.one {\r\n        margin: 35px 4%;\r\n        width: 15%;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n    .member {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .member div {\r\n        margin-bottom: 15px;\r\n        max-width: 150px; \r\n    }\r\n\r\n    .member div a img {\r\n        width: 100%;\r\n    }\r\n\r\n    \r\n    .partners div {\r\n        display: flex;\r\n        flex-direction: row;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .partners div .descrip {\r\n        padding: 0px 10px;\r\n    }\r\n\r\n    .footer.two {\r\n        width: 43%;\r\n        margin: 35px 0%;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n    }\r\n\r\n    .footer.three {\r\n        width: 26%;\r\n        margin: 4%;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n    }\r\n\r\n    .footer.three div {\r\n        margin-bottom: 15px;\r\n    }\r\n\r\n    .copy-left {\r\n        float: left;\r\n        margin: 0;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 698px) {\r\n    .footer.one {\r\n        width: 96%;\r\n        margin: 2% !important;\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .footer.one div ul li {\r\n        width: 100%;\r\n        text-align: center\r\n    }\r\n\r\n    .footer.one div {\r\n        width: 100%;\r\n        justify-content: center;\r\n    }\r\n\r\n    .member {\r\n        display: flex;\r\n        flex-direction: column;\r\n    }\r\n\r\n    .member div {\r\n        margin-bottom: 15px;\r\n        max-width: 150px; \r\n    }\r\n\r\n    .member div a img {\r\n        width: 100%;\r\n    }\r\n    \r\n    .partners div {\r\n        display: flex;\r\n        flex-direction: row;\r\n        margin-bottom: 10px;\r\n    }\r\n\r\n    .partners div .descrip {\r\n        padding: 0px 10px;\r\n    }\r\n\r\n    .footer.two {\r\n        margin: 2%;\r\n        width: 96%;\r\n    }\r\n\r\n    .footer.three {\r\n        margin: 2%;\r\n        width: 96%;\r\n    }\r\n\r\n    .copy-left {\r\n        float: left;\r\n        margin: 0;\r\n        padding: 0;\r\n        border: 0;\r\n        font-size: 100%;\r\n        font: inherit;\r\n        vertical-align: baseline;\r\n    }\r\n\r\n    .footer .member h3, .footer .partners h3, .footer h3 {\r\n        font-weight: bold;\r\n    }\r\n\r\n    p {\r\n        font-size: 12px;\r\n    }\r\n\r\n}\r\n\r\n.footer-grids {\r\n    background: #282828;\r\n    padding: 3em 3em;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer {\r\n    float: left;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer h3 {\r\n    font-size: 18px;\r\n    color: #fff;\r\n    font-weight: 500;\r\n    margin-bottom: 32px;\r\n    font-family: 'Viga', sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\nh3 {\r\n    display: block;\r\n    font-size: 1.17em;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    font-weight: bold;\r\n}\r\n\r\n.footer.one p {\r\n    color: #908F8F;\r\n    line-height: 2em;\r\n    font-size: 14px;\r\n    margin: 0;\r\n    padding: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer.one ul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    line-height: 1.5em;\r\n    font-size: 14px;\r\n    width: 200px;\r\n}\r\n\r\n.footer.one ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.footer.one ul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    line-height: 1.5em;\r\n    font-size: 14px;\r\n}\r\n\r\n.footer.one ul li a {\r\n    color: #908F8F;\r\n    display: block;\r\n}\r\n\r\n.footer.one ul li {\r\n    margin-bottom: 10px;\r\n}\r\n\r\np {\r\n    margin: 0;\r\n    display: block;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n}\r\n\r\n.footer.three .connected ul, .footer.three div ul {\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.footer.three .connected ul li, .footer.three div ul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    line-height: 1.5em;\r\n    font-size: 14px;\r\n}\r\n\r\nli {\r\n    display: list-item;\r\n    text-align: -webkit-match-parent;\r\n}\r\n\r\n.footer.three .connected ul li a.fb {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAATlBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////+QlxstAAAAGXRSTlMA4TCAj2DCWDTy7KikEw7YyohsZV5XKBwG+yAjPgAAAGRJREFUKM/djjkSgCAMAFEJcnsf+f9HBQqHiaayc6tkt0hERZyURUQQBN1goSP+HPA9zMgEX6xyTpMwZr+IJ+W05kJLZAAAWw4DrLEKHVZsXOg/hV1KabL0aQjsuz8NKnlz3OsFpFEPQ8luio0AAAAASUVORK5CYII=) no-repeat 0px 4px;\r\n    padding: 10px 0 12px 52px;\r\n    margin: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer.three .connected ul li a.yt {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAk1BMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////ROyVeAAAAMHRSTlMAQNnJ+CCXjxCg65xgPCjmwIRYUA4G4LGId2ct8tGmhnxjXU1I1LVyNzIUvZJrIxqpuVpcAAAA4klEQVQoz3XPx3KEMAyAYVEMphgWr4HQ69Y0vf/TxeOQCR6z/0EHfaODQOW8w/UCB83us70dQR56Lm0+PuG+fE+aZNjD5eTGbyfL1aBBniMJfAMSPFMJ3hGIV5DjoxwyZzUAnBCtGlMdaE2A8gcAI83+DWbtYvm2Fn6IWqEvFERoFCkIb4QQC2Wk/7tRgEUEfYey/+NfQAfs62TzFNamaFc67sGncsAwVl7iP00IvHhkmTiE6ovPGogNstrN9hDBJIHdoy4Z2AYF2uc0rUuexsHcohd3WCio0KgC1VKiVrkAwA+/ICWlL21IrQAAAABJRU5ErkJggg==) no-repeat 0px 4px;\r\n    padding: 10px 0 12px 52px;\r\n    margin: 0;\r\n    border: 0;\r\n    font-size: 100%;\r\n    font: inherit;\r\n    vertical-align: baseline;\r\n}\r\n\r\n.footer.three .connected ul li a {\r\n    color: #908F8F;\r\n    display: block;\r\n}\r\n\r\n.footer.three .connected ul li, .footer.three ul li {\r\n    list-style-type: none;\r\n}\r\n\r\n.footer.three .connected ul li a.fb:hover {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAATlBMVEUAAAAAbfAAcO8AbvAAbvEAbe8AbfAAbvEAbvEAb/EAbfEAbfAAbvAAefIAbfAAbfAAbfAAbfAAbfAAbfEAbfAAbe8AbPAAbPIAbe0AbfDFFWHoAAAAGXRSTlMA4TCAj2DyWDQRwqikCezYzsaIbGVeVygcfVUyUwAAAGRJREFUKM/djjkSgCAMAFEIcnpf+f9HBQqHiaayc6tkt0hERZydRkQQBNNgQRIfB3wPCzIhFDt5b0gYs1/Fk3LacKEl0gJAXw4DbLYKEit2LnSfwqGU0lmGNFj23Z8Gl7w+7/UCmzMPPgrjzl8AAAAASUVORK5CYII=) no-repeat 0px 4px;\r\n}\r\n\r\n.footer.three .connected ul li a.yt:hover {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAilBMVEUAAADYACfYACfYACfYACfbACTYACfYACfXACjZACbYACfZACbYACfYACfaACXYACfYACfYACfZACbZACbTAC3YACfYACfZACbYACfYACfYACfZACbrABnYACfYACfYACfZACbZACbYACfYACfYACfYACfYACfaACXZACbYACfZACbbACTYACfYACeNeQvFAAAALXRSTlMAQNnJ+A+PXyDrl6CynCjAhFhQPAbgiHdoTC0UA/Ll0aaGfGPUckc3Mr1rIxp45fauAAAA3klEQVQoz5XPx27DMAyAYXpp2LIjRXa9d1YH3//1mqgNYkG+5D8IID7xQDAFnyBOsBMN2/68BzmPw7YhX3Ctf1ZLJE5wOoT04+CFFjSoOmQJcSDDY3SH+C3I8SZmGdQOQMDRq5DbEFUMInWDTrNme4b2Nun8+ZtwtOIkMpCiU2qAnxlj3mNm03PHABYpTONjfi3/AQbgi9VXA1yaor+0yxZIdH9gXso4I60LSUwXLfNdKL8V3QVZhXILabd2PuhrOmaz9w8F+seBV0INNKE9xnTEwkCJTiWYaoFWogaAX3u+I3FzVc1SAAAAAElFTkSuQmCC) no-repeat 0px 4px;\r\n}\r\n\r\n.footer.three .connected ul li a:hover, .copy-right ul li a:hover, .footer.three ul li a:hover {\r\n    color: #2e99ff;\r\n}\r\n\r\n.footer.three .contactUs ul li:nth-child(1) {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAS1BMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////+DmQsHAAAAGHRSTlMAsQbxN5bBMPgrexXa0828qp9WJPbox4Q5dz+OAAAAkElEQVQoz43SSQ6EMAxEUccEyMBMD77/STtW0koosaBW1n9bU7MY6W5+EVm8HtduO0nrLH3FYJ8mlY+8oBtmk+QtDjuRiojDHkIWB70X6bNY7H/pLPYqbQeZa29lprV0kJXYk/arkGdKCwILlGcQzDMYOG24Az0fwoawFTgQjgK8uxbczvVxxnE89TjTEUn3A0BuFzI5qf9WAAAAAElFTkSuQmCC) no-repeat 0px 6px;\r\n    padding-left: 38px;\r\n}\r\n\r\n.footer.three .contactUs ul li:nth-child(2) {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYBAMAAAASWSDLAAAAIVBMVEUAAAD////////////////////////////////////////PIev5AAAACnRSTlMAGLfZ0T0q1b54ZlYQLQAAAD5JREFUGNNjAIKQVUDgygABXqs0J61aAuWsUAKCLihnIYiQGqacxcbmxcZWUM6qVcuyVq2CBQiQAwsQRFABAE93IJw6k0/nAAAAAElFTkSuQmCC) no-repeat 0px 6px;\r\n    padding-left: 38px;\r\n}\r\n\r\n.footer.three .contactUs ul li a {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAMAAADXqc3KAAAAdVBMVEUAAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////li2ZAAAAAJnRSTlMA6Prv94FjWkHDraOLPC8oItmGfmc489y6lo9xVk5KGgzVn3hsXGaOZO4AAAC2SURBVCjPvdDHrsIwEEBRZ1wSp1d6e+3+/yc+hghBhNhyFl742vLI5hOSN4y0ObOuHDbM8lYMXdujbL/9GRNU33YYsFUQPVVu/vIvQEJl0YBLMwvR/07fAjZLHRrU0KyhLLfesm4GmIMqzlGvQjwXPAfi5bZRXCLLMFaNB99U4yJIenLXR69DuFMqj+COB9Exg66Ho7uHVRZ4ErLVHOy0Z2E/WQ1J7WHJ1wlG6h0vdrW8//YP+AengCUjMNsUmAAAAABJRU5ErkJggg==) no-repeat 0px 6px;\r\n    padding-left: 38px;\r\n    display: block;\r\n    color: #908F8F;\r\n}\r\n\r\n.footer.three .contactUs ul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    color: #908F8F;\r\n    font-size: 14px;\r\n    line-height: 2.5em;\r\n}\r\n\r\ndiv ul li {\r\n    width: 100%;\r\n    left: 0px;\r\n}\r\n\r\n.footer h3 {\r\n    margin-bottom: 10px;\r\n}\r\n\r\ndiv.partners ul li a:hover, div.partners ul li a h6:hover {\r\n    color: rgb(66, 129, 180);\r\n}\r\n\r\np {\r\n    color: #908F8F;\r\n    font-family: Tahoma, Verdana, sans-serif;\r\n    font-size: 14px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-grids\">\n  <div class=\"container\">\n    <!-- footer ONE __________________________________________________ -->\n  <div class=\"footer one\">\n    <div class=\"member\">\n        <h3>We Are Members In</h3>\n        <div><a class=\"ismf\" href=\"http://www.ismf-ski.org/\" target=\"_blank\">\n          <img src=\"../../assets/partners-logo/ismf-logo1.png\" alt=\"International Ski Mountaineering Federation\">\n        </a></div>\n        <div><a class=\"alpE\" href=\"https://www.alpenverein-edelweiss.at/\" target=\"_blank\">\n          <img src=\"../../assets/partners-logo/LogoAlpenvereinEdelweiss-2.png\" alt=\"Alpenverein Edelweiss\">\n        </a></div>\n    </div>\n    <div class=\"clear\"></div>\n  </div>\n   <!-- footer TWO __________________________________________________ -->\n  <div class=\"footer two\">\n      <div class=\"partners\">\n          <h3>Our Partners</h3>\n          <div>\n            <div class=\"logo\"><a style=\"cursor: default;\"><img src=\"../../assets/partners-logo/gerb.png\" alt=\"\"></a></div>\n            <div class=\"descrip\"><p>STATE TOURISM COMMITTEE Ministry of Economic Development and Investments Republic of Armenia</p></div>\n          </div>\n          <div>\n            <div class=\"logo\"><a style=\"cursor: default;\"><img src=\"../../assets/partners-logo/gerb.png\" alt=\"\"></a></div>\n            <div class=\"descrip\"><p>Ministry of Sport and Youth Affairs of the Republic of Armenia</p></div>\n          </div>\n          <div>\n            <div class=\"logo\"><a href=\"https://www.biss-reisen.de\" target=\"_blank\"><img src=\"../../assets/partners-logo/bissaktiverisen-logo1.png\" alt=\"\"></a></div>\n            <div class=\"descrip\"><a style=\"text-decoration-style: none; color: #908F8F;\" href=\"https://www.biss-reisen.de\" target=\"_blank\">Biss Aktiv Reisen</a></div>\n          </div>\n          <div>\n            <div class=\"logo\"><a  href=\"http://mountainbikereisen.ch/\" target=\"_blank\"><img src=\"../../assets/partners-logo/mountainbikereisen.ch1.jpg\" alt=\"\"></a></div>\n            <div class=\"descrip\"><a style=\"text-decoration-style: none; color: #908F8F;\" href=\"http://mountainbikereisen.ch/\" target=\"_blank\">Mountain Bike Reisen</a></div>\n          </div>\n      </div>\n  </div>\n  <!-- footer THREE __________________________________________________ -->\n  <div class=\"footer three\">\n    <div class=\"contactUs\">\n        <h3>Contact Information</h3>\n        <ul>\n          <li>Armenia, Yerevan <br/> Street\tV. Hambardzumyan 7/29</li>\n          <li>(+374) 95 777 760  </li>\n          <li><a href=\"mailto:info@armski.am\">info@armski.am</a> </li>\n        </ul>\n    </div>\n    <div class=\"connected\">\n        <h3>Keep Connected</h3>\n        <ul>\n          <li><a class=\"fb\" href=\"https://www.facebook.com/ASMA4095/\" target=\"_blank\"><i></i>Follow us on Facebook</a></li>\n          <li><a class=\"yt\" href=\"https://www.youtube.com/channel/UCJsuy0JNUTlST9GIX8oUyjA/featured?view_as=subscriber\" target=\"_blank\"><i></i>Subscribe us on YouTube</a></li>\n        </ul>\n    </div>\n  </div>\n  <div class=\"clear\"></div>\n  </div>\n</div>\n\n<div class=\"copy-right-grids\">\n  <div class=\"copy-left\">\n    <p class=\"footer-gd\">© 2018 ASMA. All Rights Reserved | Design by <a href=\"https://github.com/mashot7/\" target=\"_blank\">MAshot7</a></p>\n  </div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/infinite-carousel/infinite-carousel.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/infinite-carousel/infinite-carousel.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/infinite-carousel/infinite-carousel.component.html":
/*!********************************************************************!*\
  !*** ./src/app/infinite-carousel/infinite-carousel.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"demo\" class=\"carousel slide\" data-ride=\"carousel\">\n\n  <!-- Indicators -->\n  <ul class=\"carousel-indicators\">\n    <li data-target=\"#demo\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"1\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"2\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"3\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"4\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"5\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"6\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"7\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"8\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"9\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"10\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"11\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"12\"></li>\n    <li data-target=\"#demo\" data-slide-to=\"13\"></li>\n  </ul>\n\n  <!-- The slideshow -->\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img src=\"../../assets/images/carousel/item01.jpg\" alt=\"Los Angeles\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item02.jpg\" alt=\"Chicago\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item03.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item04.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item05.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item06.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item07.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item08.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item09.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item10.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item11.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item12.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item13.jpg\" alt=\"New York\">\n    </div>\n    <div class=\"carousel-item\">\n      <img src=\"../../assets/images/carousel/item14.jpg\" alt=\"New York\">\n    </div>\n  </div>\n\n  <!-- Left and right controls -->\n  <a class=\"carousel-control-prev\" href=\"#demo\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\"></span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#demo\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\"></span>\n  </a>\n\n</div>"

/***/ }),

/***/ "./src/app/infinite-carousel/infinite-carousel.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/infinite-carousel/infinite-carousel.component.ts ***!
  \******************************************************************/
/*! exports provided: InfiniteCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfiniteCarouselComponent", function() { return InfiniteCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InfiniteCarouselComponent = /** @class */ (function () {
    function InfiniteCarouselComponent() {
    }
    InfiniteCarouselComponent.prototype.ngOnInit = function () {
    };
    InfiniteCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-infinite-carousel',
            template: __webpack_require__(/*! ./infinite-carousel.component.html */ "./src/app/infinite-carousel/infinite-carousel.component.html"),
            styles: [__webpack_require__(/*! ./infinite-carousel.component.css */ "./src/app/infinite-carousel/infinite-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InfiniteCarouselComponent);
    return InfiniteCarouselComponent;
}());



/***/ }),

/***/ "./src/app/main-pages/about-page/about-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main-pages/about-page/about-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aboutUs {\r\n    display: block;\r\n    width: 100%;\r\n    text-align: justify;\r\n    font-family: Raleway,sans-serif;\r\n    font-size: 18px;\r\n}\r\n\r\n.cont {\r\n    width: 95%;\r\n    margin: 25px 2.5%;\r\n    padding: 10px;\r\n}\r\n\r\n.about {\r\n    width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-pages/about-page/about-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main-pages/about-page/about-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n  <div class=\"about\">\n    <div class=\"aboutFix aboutUs\">\n        <p>Armenian ski mountaineer’s association has been established in 2016,\n          although he has been working as a club for more than 10 years․\n          The Association seeks to promote and ensure a large influx of people into the mountains of Armenia.\n          The Association's mission is to gather ski lovers, professionals and experts around it to find\n          ways to improve this type of sport in Armenia. The founding member of the Association is\n          Hovhannes Martirosyan. The Armenian ski mountaineers’ association (ASMA) is a unique,\n          skillful association, which successfully participated in different state projects implemented by the\n          State Tourism Committee of the Ministry of Economic Development and Investments of the\n          Republic of Armenia. <br/><br/>\n          \n          The implemented projects concern the development of the ski touring in Armenia and \n          mong them is GPS trails development. <br/><br/>\n          \n          The Ministry of Sport and Youth Affairs of RA, represented by Hrachya Rostomyan, the Minister of the Sport and Youth Affairs of RA, warrants the Armenian ski mountaineers’ association (ASMA), as the only institution of ski mountaineers in Armenia, to become a full member of the International Ski Mountaineering Federation (ISMF). <br/><br/>\n          The Ministry of Sport and Youth Affairs of RA appreciates the commitment of the ASMA, that developed the ski touring in Armenia. <br/><br/>\n          The Ministry of Sport and Youth Affairs of RA confirms that the Armenia ski mountaineers’ association (ASMA) is the only institution of ski mountaineers authorized to develop GPS trails in Armenia.\n        </p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-pages/about-page/about-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main-pages/about-page/about-page.component.ts ***!
  \***************************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutPageComponent = /** @class */ (function () {
    function AboutPageComponent() {
    }
    AboutPageComponent.prototype.ngOnInit = function () {
    };
    AboutPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-page',
            template: __webpack_require__(/*! ./about-page.component.html */ "./src/app/main-pages/about-page/about-page.component.html"),
            styles: [__webpack_require__(/*! ./about-page.component.css */ "./src/app/main-pages/about-page/about-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutPageComponent);
    return AboutPageComponent;
}());



/***/ }),

/***/ "./src/app/main-pages/armenia-page/armenia-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main-pages/armenia-page/armenia-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 699px) {\r\n    .card {\r\n        /* Add shadows to create the \"card\" effect */\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n        transition: 0.3s;\r\n        width: 90%;\r\n        position: relative;\r\n        margin: 25px 5%;\r\n        display: flex;\r\n        flex-direction: row;\r\n        padding: 5px;\r\n    }\r\n    \r\n    /* On mouse-over, add a deeper shadow */\r\n    .card:hover {\r\n        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .avatar img {\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    .avatar {\r\n        width: 40%;\r\n        display: block;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    div.content {\r\n        padding: 0 10px;\r\n        float: right;\r\n        width: 60% !important;\r\n        box-sizing: border-box;\r\n        text-align: justify;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 698px) {\r\n    .card {\r\n        /* Add shadows to create the \"card\" effect */\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n        transition: 0.3s;\r\n        width: 90%;\r\n        position: relative;\r\n        margin: 25px 5%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        padding: 5px;\r\n    }\r\n    \r\n    /* On mouse-over, add a deeper shadow */\r\n    .card:hover {\r\n        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .avatar img {\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    .avatar {\r\n        width: 100%;\r\n        display: block;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    div.content {\r\n        padding: 0 10px;\r\n        float: right;\r\n        width: 100% !important;\r\n        box-sizing: border-box;\r\n        text-align: justify;\r\n    }\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  font-family: Raleway,sans-serif;\r\n  color: #424242;\r\n}\r\n\r\na:hover {\r\n    color: #9c9c9c;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-pages/armenia-page/armenia-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main-pages/armenia-page/armenia-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/02.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/2'\"><h4><b>East Summit of Mount Aragats</b></h4></a>\n      <p>To start skiing on the slopes of the East Summit of Mount Aragats, you need to set off to the Aragatsotn province. The nearest settlement is the village of Aragats (1,970m): this is where the skiing begins. The piste runs over a series of small hills that overlook deep gorges on the right hand side and stretch up to ‘merge’ into the Eastern Summit. When following this ski run, you will have reached the surroundings of the Aragats Summit. The Eastern Summit is the third highest peak of Mount Aragats. </p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/03.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/3'\"><h4><b>Byurakan</b></h4></a>\n      <p>The South Summit of Mount Aragats is in the Aragatsotn province of Armenia. It is the lowest summit (3,887. 8m) of Aragats. We recommend taking the trail in spring (March, April, May) as the difficulties of reaching the South Summit of Aragats are less during this time of the year. You should get to the Physics Institute (the ‘Aragats’ Scientific Station) on the slopes of Aragats by car, and then start walking uphill using the marked trail. The snow is partially melted at this time of the year, so you can see Stone Lake (Kari Lich), one of the crystal-clear mountain lakes of Armenia.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/04.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/4'\"><h4><b>West Summit of Mount Aragats</b></h4></a>\n      <p> West Summit of Mount AragatsTo get to the west summit of the Mount Aragats ski trail, you should first reach Geghadzor village, in the province of Aragatsotn. In case of any adverse weather, we do not recommend this trail, because of the possible difficulties of traveling through the high mountains. It is only possible to bypass these obstacles in clear weather, the ski trail is rather complicated and possibly dangerous. You should climb up to the vicinity of the west summit (3,650m) using the marked trail. The trail is long, with no stops, and the area is usually covered with snow powder. The West Summit is the second highest summit (3,995.3m) of Mount Aragats.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/06.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/6'\"><h4><b>Hatis</b></h4></a>\n      <p>Hatis is a volcanic massif in the Kotayk province of Armenia.  The mountain has a conical structure indented with numerous gorges, which can be seen in winter as well. There are a lot of rocky formations in the higher spots of the Mountain. The ski trail begins in the village of Hatis, on the northern slopes of the mountain. You can enjoy the ski trail at Mount Hatis from January to April. The climate is mild here due to the geographical location of the trail. Most of the winter is sunny, and the sky is blue. Yerevan is 30km away from the trail. Please, check the weather conditions before attempting the ski trail. The best time for skiing downhill is midday, as the snow is frozen during morning and evening hours.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/07.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/7'\"><h4><b>North Summit of Mount Ara</b></h4></a>\n      <p>Mount Ara, with its sliced, steep, timbered slopes, is located on the borders of the Kotayk and Aragatsotn provinces, 33km north of Yerevan. Besides housing a skiing, biking and hiking trail, the Mountain is also a launching place for paragliding pilots. The ski trail begins on the north of the mountain, at the edge of a summer resort. The road leading to the summer resort may be covered with heavy snow in January and February. In this case, you should start skiing from Yernjatap village to reach the resort, which will add 2km to the route.The snow is mostly solid here, but the surface is always melted a few centimeters, which is very favorable for skiing. The road runs through pine and oak forests, which make for a beautiful combination in the winter. From the top of Mount Ara, you can view the four highest mountains of Armenia: Aragats, Azhdahak, Teghenis 1, and Hatis. You can return using the same trail.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/08.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/8'\"><h4><b>South North Summit of Mount Ara</b></h4></a>\n      <p>Mount Ara is located on the borders of the Kotayk and Aragatsotn provinces. The mountain is 2,577m high and 40km away from Yerevan. The mountain takes its name after Ara the Beautiful (Ara Geghetsik), an Armenian mythological God and king. The Mountain is also a jump off point for paragliding pilots. The ski trail begins at a red apple orchard. This is considered a traditional trail, as it is used by both skiers and paragliding pilots. In winter, Mt. Ara is a great tourist destination, as the weather here is clear and sunny, and the snow is soft and silky.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/09.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/9'\"><h4><b>South – West Summit of the Mount Teghenis</b></h4></a>\n      <p>Teghenis 1 Mountain is located on the border of the Aragatsotn and Kotayk provinces. To start skiing on the slopes of the mountain, you need to set off to Shoghakn village, which is covered by 1-2 meters of snow in January and February. The skiing trail begins at the edge of the village and leads up to the nearby hill. The slopes of Mount Teghenis 1 are covered with birches, firs, and Siberian pine trees. From the top of the Mountain, you can admire the beautiful mountains of the Armenian plateau: the Pambak Mountain in the north, Mount Ara in the south, the Geghama Mountains in the east, Aragats in the West, and Ararat in the southwest. An aeration center operates on the top of Mount Teghenis 1, and is inhabited throughout the year.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/11.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/11'\"><h4><b>Silk Road - Orbelian's Caravanserai - Vardenyats Mountain Pass</b></h4></a>\n      <p>This trail is found in the province of Gegharkunik, on the Vardenyats Mountain Pass road. From this trail one can see the ravishingly beautiful winter scenes of Armenia’s highlands. The highest point of the Mountain Pass is 2,410m. One can reach Orbelian’s Caravanserai (2,040m) by car, then descending down the bend, one will reach the start of the ski trail, because skiing up would take much longer. The trail begins at a height of 2,300m, enjoy the quality snow while descending down to the marked trail. While skiing you will be able to see the white peaks of Armenian mountains and the image of Mount Ararat in the distance.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/12.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/12'\"><h4><b>Vorotan Mountain Pass</b></h4></a>\n      <p>This ski trail is found in the south of Armenia, in the Vayots Dzor province, near the territory known as 'Zanger' ( Bells), in Syunik. The trail begins at the Vorotan Mountain pass (2,344m). The peculiarity of the trail is that the ascent up the mountain is shorter than the descent. The 8km long trail is situated between the villages of Saravan and Gorayk. There are no mountain peaks along the way, just skiing in the Vorotan Mountains with its’ wonderful views.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/01.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a [routerLink]=\"'/armenia/1'\"><h4><b>North Summit of Mount Aragats</b></h4></a>\n      <p>The North Summit of Mount Aragats is in the Aragatsotn province of Armenia. It is the highest summit (4,090m) of Aragats. The Mountain has a huge crater, with a 400m depth and 3km diameter, and the ruins of its decayed walls form the four summits of Mount Aragats. The crater is open from the southeast and is in harmony with its’ surroundings. Geghadzor is the nearest residence, and is where the ski trail begins. If you have decided to take this trail, we recommend booking accommodation for an overnight stay in one of the guest houses in the village. You can also ask for a car (Jeep or Vilis) from the farmers and start the ski trail early in the morning. Usually, the trail on the North Summit of Aragats takes 8-10 hours (climbing up and down). You need to take a car (Jeep) and begin the trail with an expectation of a light, long descent, soft snow and marvelous sights. The territory is mostly covered with an abundance of powdered snow.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/05.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/5'\"><h4><b>Bujakan Mountain</b></h4></a>\n      <p>This ski trail is located in the Bujakan mountains, 5.5km northwest of the village of Bujakan, in Kotayk province. The journey will start as a walk down a marked trail, from the Surb Astvatsatsin Church in Yeghipatrush village, of Aragatsotn province. Numerous skiers visiting Armenia have traversed this trail and were very pleased with the quality of the snow.Heading for Bujakan Mountain from Yerevan or vice versa, you can visit: The Surb Astvatsatsin Church (Holy Mother of God Church) in Yeghipatrush village The Church was constructed between the 10th and 13th centuries. There are several khachkars (cross-stones) from the 7th -8th centuries found near the church. During construction, tombs from the 3-2nd millennium BC, were found and opened, near the village of Yeghipatrush, on both sides of the gorge.</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/armenia-page/10.jpg\" alt=\"\">\n    </div>\n    <div class=\"content\" >\n      <a  [routerLink]=\"'/armenia/10'\"><h4><b>Mount Teghenis from the East – Aghveran National Park</b></h4></a>\n      <p>The trail is covered with soft snow, it is safe and will fill you with pleasant feelings. Our team has traversed this trail several times during the winter, and we suggest several trails from the different sides of this mountain. All of them are perfect, with stunning natural views from the top.The pagan temple of Garni is situated in the village of Garni, in Kotayk province, on the right bank of the Azat River. The temple was founded by Patriarch Hayk’s great grandson, Gegham, and was named Garni in honor of his grandson. Garni was also known as the Temple of the Sun, as it was dedicated to the God of the Sun, Mihr. King Trdat the First, on a high triangular cape in 76 BC, constructed the fortress as a Hellenistic building. Garni fortress was damaged several times over the centuries. However, the kings of Armenia reconstructed the fortress using it as a house, a place for military exercises and an Episcopal residence.</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/main-pages/armenia-page/armenia-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main-pages/armenia-page/armenia-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: ArmeniaPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPageComponent", function() { return ArmeniaPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPageComponent = /** @class */ (function () {
    function ArmeniaPageComponent() {
    }
    ArmeniaPageComponent.prototype.ngOnInit = function () {
    };
    ArmeniaPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page',
            template: __webpack_require__(/*! ./armenia-page.component.html */ "./src/app/main-pages/armenia-page/armenia-page.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page.component.css */ "./src/app/main-pages/armenia-page/armenia-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPageComponent);
    return ArmeniaPageComponent;
}());



/***/ }),

/***/ "./src/app/main-pages/blog-page/blog-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main-pages/blog-page/blog-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media only screen and (min-width: 899px) {\r\n    .card {\r\n        /* Add shadows to create the \"card\" effect */\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n        transition: 0.3s;\r\n        width: 80%;\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: row;\r\n        margin: 15px 10%;\r\n        padding: 10px;\r\n    }\r\n    \r\n    /* On mouse-over, add a deeper shadow */\r\n    .card:hover {\r\n        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .avatar img {\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    .avatar {\r\n        width: 45%;\r\n        display: block;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    div.content {\r\n        float: right;\r\n        padding: 0 10px;\r\n        width: 55% !important;\r\n        box-sizing: border-box;\r\n        text-align: justify;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 898px) {\r\n    .card {\r\n        /* Add shadows to create the \"card\" effect */\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n        transition: 0.3s;\r\n        width: 80%;\r\n        position: relative;\r\n        display: flex;\r\n        flex-direction: column;\r\n        margin: 15px 10%;\r\n        padding: 10px;\r\n    }\r\n    \r\n    /* On mouse-over, add a deeper shadow */\r\n    .card:hover {\r\n        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n        cursor: pointer;\r\n    }\r\n    \r\n    .avatar img {\r\n        width: 100%;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    .avatar {\r\n        width: 100%;\r\n        display: block;\r\n        box-sizing: border-box;\r\n    }\r\n    \r\n    div.content {\r\n        float: right;\r\n        padding: 0 10px;\r\n        width: 100% !important;\r\n        box-sizing: border-box;\r\n        text-align: justify;\r\n    }\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    font-family: Raleway,sans-serif;\r\n    color: #424242;\r\n}\r\n\r\na:hover {\r\n    color: #9c9c9c;\r\n}\r\n"

/***/ }),

/***/ "./src/app/main-pages/blog-page/blog-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main-pages/blog-page/blog-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cont\">\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/01.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a [routerLink]=\"'/blog/1'\"><h4><b>Armenian Currency and Prices</b></h4></a>\n      <p>Whether you are a tourist or in a long or short business trip, it is always useful to have some preliminary idea about the currency of the host country before you visit. In order to understand how much you can spend on products or services in Armenia, or what is the cash value of...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/02.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a [routerLink]=\"'/blog/2'\"><h4><b>Walking Route in Yerevan</b></h4></a>\n      <p>First time in Armenia? Wish to explore the city and don’t know where to start? Here is your cheat sheet! Grigor Lusavorich church You can start your tour from Grigor Lusavorich church, which is located in Yervand Kochar street. The church was built by Catholicos Vazgen the...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/03.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a [routerLink]=\"'/blog/3'\"><h4><b>World’s Oldest Shoe Found in Armenia</b></h4></a>\n      <p>One more time in a history world’s attention was driven into the small mountainous country located in Eastern Europe. The reason was the ancient shoe found in one of the villages of Armenia. The shoe, which was found in September 2008 in Areni village, dates back to...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/04.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a [routerLink]=\"'/blog/4'\"><h4><b>7 of the Unique Armenian Traditions</b></h4></a>\n      <p>1.  February 13 – Trndez Trndez is a holiday with pagan origin and was originally dedicated to Mihr or Tyr, the gods of fire and knowledge, respectively. It was connected with sun/fire worship in ancient pre-Christian Armenia, symbolizing the coming of the spring and...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/05.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a [routerLink]=\"'/blog/5'\"><h4><b>4 Wineries of Armenia</b></h4></a>\n      <p>Armenia is a small, landlocked country, located at the southern end of the Eurasian Caucasus. Since Noah’s times the inhabitants of Armenia cultivated wineyards and squizzed the most possible from the land and the fruitage. Among all other achievements Armenians pride...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/06.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a [routerLink]=\"'/blog/6'\"><h4><b>7 most Beautiful Monasteries in Armenia</b></h4></a>\n      <p>Armenia is a home to a complex culture and some of the world’s greatest religious shrines. While planning your trip to Armenia, you will definitely think of including some of the heritages of Armenia’s culture, the bright examples of which are our world famous...</p>\n    </div>\n  </div>\n  <div class=\"card\">\n    <div class=\"avatar\">\n        <img src=\"../../assets/blog-page/07.jpg\" alt=\"North Summit of Mount Aragats image\">\n    </div>\n    <div class=\"content\" >\n      <a [routerLink]=\"'/blog/7'\"><h4><b>Annual Festivals in Armenia</b></h4></a>\n      <p>During last few years Armenia has developed a strategy of outlining its cultural or traditional events and food peculiarities through festivals. Each year a new unique festival is added to the list of existing ones causing creativity and innovations. The interest among locals and...</p>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-pages/blog-page/blog-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-pages/blog-page/blog-page.component.ts ***!
  \*************************************************************/
/*! exports provided: BlogPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPageComponent", function() { return BlogPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPageComponent = /** @class */ (function () {
    function BlogPageComponent() {
    }
    BlogPageComponent.prototype.ngOnInit = function () {
    };
    BlogPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page',
            template: __webpack_require__(/*! ./blog-page.component.html */ "./src/app/main-pages/blog-page/blog-page.component.html"),
            styles: [__webpack_require__(/*! ./blog-page.component.css */ "./src/app/main-pages/blog-page/blog-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPageComponent);
    return BlogPageComponent;
}());



/***/ }),

/***/ "./src/app/main-pages/events-page/events-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/main-pages/events-page/events-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-pages/events-page/events-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main-pages/events-page/events-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  events-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/main-pages/events-page/events-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main-pages/events-page/events-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: EventsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsPageComponent", function() { return EventsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EventsPageComponent = /** @class */ (function () {
    function EventsPageComponent() {
    }
    EventsPageComponent.prototype.ngOnInit = function () {
    };
    EventsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-events-page',
            template: __webpack_require__(/*! ./events-page.component.html */ "./src/app/main-pages/events-page/events-page.component.html"),
            styles: [__webpack_require__(/*! ./events-page.component.css */ "./src/app/main-pages/events-page/events-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EventsPageComponent);
    return EventsPageComponent;
}());



/***/ }),

/***/ "./src/app/main-pages/gallery-page/gallery-page.component.css":
/*!********************************************************************!*\
  !*** ./src/app/main-pages/gallery-page/gallery-page.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gallery\r\n{\r\n    display: inline-block;\r\n    margin-top: 20px;\r\n}"

/***/ }),

/***/ "./src/app/main-pages/gallery-page/gallery-page.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/main-pages/gallery-page/gallery-page.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/9q8MGX9.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img01-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/41EtZUe.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img02-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/TfLaJ5X.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img03-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/fHiDPJN.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img04-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/6OqIZPf.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img05-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/XeaGZU6.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img06-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/0drtbrJ.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img07-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/GU8for9.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img08-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/kX7WJG6.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img09-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/CC9Lm9J.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img10-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/NUHhSMc.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img11-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/dbIW67A.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img12-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/8maWdOI.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img13-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/HU9e5i1.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img14-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/LmUrDMZ.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img15-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/CPJvJ8h.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img16-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/zg5KElH.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img17-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/ESUsty5.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img18-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/Qdv1dKP.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img19-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/Hf7fB1L.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img20-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/4MRu3AX.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img21-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/G278xm3.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img22-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/ftEyGGa.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img23-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/o9ZSbHJ.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img24-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/CWZYMKx.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img25-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/dP1PAjJ.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img26-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/rZLVh8y.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img27-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/zXOtoDh.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img28-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/Qd2rgbQ.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img29-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/CkdvQvh.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img30-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/8Dj9jEL.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img31-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/Ba6NYpt.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img32-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/lRWYJ2e.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img33-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/amoqMk1.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img34-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/qBHM870.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img35-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/gP4Hjb7.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img36-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/lYKtYfR.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img37-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/tcyax0s.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img38-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/0wt4NVN.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img39-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/FOn3Kee.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img40-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/8lZXwn7.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img41-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/3r1cd6e.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img42-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/pEBPDQN.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img43-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/rziUjeM.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img44-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/NXjeJpR.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img45-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/J6nXIdN.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img46-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/db4dQCu.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img47-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/t3ux0pZ.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img48-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/l4dcCKF.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img49-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/TDf495M.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img50-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/liaUI4n.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img51-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n          <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 mt-4\">\n              <a class=\"img-fluid thumbnail fancybox\" rel=\"ligthbox\" href=\"https://i.imgur.com/HACy8LC.jpg\">\n                  <img class=\"img-fluid thumbnail\" alt=\"\" src=\"../../../assets/gallery/thum/img52-thumbnail.jpg\" />\n              </a>\n          </div> <!-- col-6 / end -->\n      </div> <!-- list-group / end -->\n      <hr>\n</div> <!-- container / end -->"

/***/ }),

/***/ "./src/app/main-pages/gallery-page/gallery-page.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/main-pages/gallery-page/gallery-page.component.ts ***!
  \*******************************************************************/
/*! exports provided: GalleryPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPageComponent", function() { return GalleryPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GalleryPageComponent = /** @class */ (function () {
    function GalleryPageComponent() {
    }
    GalleryPageComponent.prototype.ngOnInit = function () {
    };
    GalleryPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-gallery-page',
            template: __webpack_require__(/*! ./gallery-page.component.html */ "./src/app/main-pages/gallery-page/gallery-page.component.html"),
            styles: [__webpack_require__(/*! ./gallery-page.component.css */ "./src/app/main-pages/gallery-page/gallery-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GalleryPageComponent);
    return GalleryPageComponent;
}());



/***/ }),

/***/ "./src/app/main-pages/home-page/home-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/main-pages/home-page/home-page.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n@media only screen and (min-width: 899px) {\r\n    .aboutFix {\r\n      display: inline-block;\r\n    }\r\n  \r\n    .carouselAbout {\r\n      float: right;\r\n      margin-left: 5%;\r\n      width: 45%;\r\n      height: 70%;\r\n    }\r\n  \r\n    .aboutUs {\r\n      display: inline-block;\r\n      width: 50%;\r\n      text-align: justify;\r\n      font-family: Raleway,sans-serif;\r\n      font-size: 18px;\r\n    }\r\n  \r\n    .cont {\r\n      width: 90%;\r\n      margin: 0 5%;\r\n    }\r\n    \r\n    .about {\r\n      width: 100%;\r\n      margin: 15px 0;\r\n      padding: 0px;\r\n      display: inline-block;\r\n    }\r\n  \r\n    .activity div {\r\n      width: 50%;\r\n    }\r\n  }\r\n  \r\n  @media only screen and (max-width: 898px) {\r\n    .carouselAbout {\r\n      width: 100%;\r\n    }\r\n  \r\n    .aboutUs {\r\n      display: block;\r\n      width: 100%;\r\n      text-align: justify;\r\n      font-family: Raleway,sans-serif;\r\n      font-size: 18px;\r\n    }\r\n  \r\n    .cont {\r\n      width: 95%;\r\n      margin: 0 2.5%;\r\n    }\r\n    \r\n    .about {\r\n      width: 100%;\r\n      margin: 15px 0;\r\n      padding: 0px;\r\n      display: inline-block;\r\n    }\r\n  \r\n    .activity div {\r\n      width: 100%;\r\n    }\r\n  }\r\n  \r\n  .activity {\r\n    margin: 30px 0;\r\n  }\r\n  \r\n  .activity div ul li:hover {\r\n    cursor: pointer;\r\n    background-color: rgba(0,0,0,.075);\r\n  }"

/***/ }),

/***/ "./src/app/main-pages/home-page/home-page.component.html":
/*!***************************************************************!*\
  !*** ./src/app/main-pages/home-page/home-page.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"about\">\n    <div class=\"aboutFix aboutUs\">\n        <h2>About US</h2>\n        <p> &emsp;Armenian ski mountaineer’s association has been established in 2016,\n          although he has been working as a club for more than 10 years․\n          The Association seeks to promote and ensure a large influx of people into the mountains of Armenia.\n          The Association's mission is to gather ski lovers, professionals and experts around it to find\n          ways to improve this type of sport in Armenia. The founding member of the Association is\n          Hovhannes Martirosyan. The Armenian ski mountaineers’ association (ASMA) is a unique,\n          skillful association, which successfully participated in different state projects implemented by the\n          State Tourism Committee of the Ministry of Economic Development and Investments of the\n          Republic of Armenia. <br/>\n          &emsp;The implemented projects concern the development of the ski touring in Armenia and \n          mong them is GPS trails development.\n           </p>\n    </div>\n    <div class=\"carouselAbout\">\n      <app-infinite-carousel></app-infinite-carousel>\n    </div>\n  </div>\n\n  <div class=\"activity\">\n    <h2>Activity</h2>\n      <div>\n        <ul class=\"list-group\">\n          <li class=\"list-group-item\">Ski touring</li>\n          <li class=\"list-group-item\">Ski lessons</li>\n          <li class=\"list-group-item\">Mountain biking</li>\n          <li class=\"list-group-item\">Trecking</li>\n          <li class=\"list-group-item\">Climbing</li>\n        </ul>\n      </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/main-pages/home-page/home-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/main-pages/home-page/home-page.component.ts ***!
  \*************************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomePageComponent = /** @class */ (function () {
    function HomePageComponent() {
    }
    HomePageComponent.prototype.ngOnInit = function () {
    };
    HomePageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-page',
            template: __webpack_require__(/*! ./home-page.component.html */ "./src/app/main-pages/home-page/home-page.component.html"),
            styles: [__webpack_require__(/*! ./home-page.component.css */ "./src/app/main-pages/home-page/home-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomePageComponent);
    return HomePageComponent;
}());



/***/ }),

/***/ "./src/app/main-pages/tours-page/tours-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/main-pages/tours-page/tours-page.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n    /* Add shadows to create the \"card\" effect */\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n    transition: 0.3s;\r\n    width: 30%;\r\n    margin: 45px auto;\r\n}\r\n\r\n/* On mouse-over, add a deeper shadow */\r\n\r\n.card:hover {\r\n    box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);\r\n}\r\n\r\na, a:hover {\r\n    text-decoration: none;\r\n}\r\n\r\n/* Add some padding inside the card container */\r\n\r\n.container {\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n}\r\n\r\nul {\r\n    display: block;\r\n    list-style-type: disc;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    -webkit-padding-start: 40px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n    display: block;\r\n    font-size: 12px;\r\n    line-height: 2.5em;\r\n    width: 100%;\r\n}\r\n\r\nul li {\r\n    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBAwQESvLTXBxAAAAt0lEQVQoz43RMW7CQBCF4c8WDW0u4ALJTcrNZcIBoHXLhSJRIxe+gYu4SxWZgktsuxSBxTgQ5a9GO+/taN4UrtTWgoDB4MO3CYVGlIz29kZJ1Chu7VbSqbKh0knaq6SR7C6tre2l2kman9lRl729PtedqC6tLW08YmPpvRQcnR4KTo7eSsFw9/yq12u9YBAWM9fX748ORs8YHUqD1SSBKZWVz/maUzpRPQ/qRg7qH1H/eayseXbuM31iQ0YKoAlrAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE4LTA0LTEyVDE2OjE3OjQzKzAyOjAwK0e88wAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOC0wNC0xMlQxNjoxNzo0MyswMjowMFoaBE8AAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC) no-repeat 0px 7px;\r\n    padding-left: 20px;\r\n}\r\n\r\n@media only screen and (max-width: 898px) {\r\n    .container {\r\n        display: flex;\r\n        flex-flow: column wrap;\r\n    } \r\n\r\n    .card {\r\n        /* Add shadows to create the \"card\" effect */\r\n        box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n        transition: 0.3s;\r\n        width: 100%;\r\n        margin: 45px auto;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/main-pages/tours-page/tours-page.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/main-pages/tours-page/tours-page.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"card\">\n    <img src=\"../../../assets/tours-page/01_01.jpg\" alt=\"Avatar\">\n    <div class=\"container\">\n      <a [routerLink]=\"'/tours/01'\" ><h4><b>Mountain Biking Tour in Armenia</b></h4></a> \n      <ul>\n        <li> 11 DAYS / 10 NIGHTS </li>\n      </ul> \n    </div>\n  </div>\n  <div class=\"card\">\n    <img src=\"../../../assets/tours-page/02_01.jpg\" alt=\"Avatar\">\n    <div class=\"container\">\n      <a [routerLink]=\"'/tours/02'\" ><h4><b>Climbing Mount Kazbegi</b></h4></a> \n      <ul class=\"time-ul\">\n        <li>5 DAYS / 4 NIGHTS </li>\n      </ul> \n    </div>\n  </div>\n  <div class=\"card\">\n    <img src=\"../../../assets/tours-page/03_01.jpg\" alt=\"Avatar\">\n    <div class=\"container\">\n      <a [routerLink]=\"'/tours/03'\" ><h4><b>Climbing mount Kazbegi and mount Elbrus</b></h4></a> \n      <ul>\n        <li> 11 DAYS / 10 NIGHTS </li>\n      </ul> \n    </div>\n  </div>\n  <div class=\"card\">\n    <img src=\"../../../assets/tours-page/04_01.jpg\" alt=\"Avatar\">\n    <div class=\"container\">\n      <a [routerLink]=\"'/tours/04'\" ><h4><b>Ski mountaineering tour in Armenia</b></h4></a> \n      <ul>\n        <li> 9 DAYS / 8 NIGHTS </li>\n      </ul> \n    </div>\n  </div>\n  <div class=\"card\">\n    <img src=\"../../../assets/tours-page/05_01.jpg\" alt=\"Avatar\">\n    <div class=\"container\">\n      <a [routerLink]=\"'/tours/05'\" ><h4><b>Trekking Between Ararat and Kazbeg</b></h4></a> \n      <ul>\n        <li> 17 DAYS / 16 NIGHTS </li>\n      </ul> \n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/main-pages/tours-page/tours-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/main-pages/tours-page/tours-page.component.ts ***!
  \***************************************************************/
/*! exports provided: ToursPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPageComponent", function() { return ToursPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursPageComponent = /** @class */ (function () {
    function ToursPageComponent() {
    }
    ToursPageComponent.prototype.ngOnInit = function () {
    };
    ToursPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tours-page',
            template: __webpack_require__(/*! ./tours-page.component.html */ "./src/app/main-pages/tours-page/tours-page.component.html"),
            styles: [__webpack_require__(/*! ./tours-page.component.css */ "./src/app/main-pages/tours-page/tours-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToursPageComponent);
    return ToursPageComponent;
}());



/***/ }),

/***/ "./src/app/main-pages/videos-page/videos-page.component.css":
/*!******************************************************************!*\
  !*** ./src/app/main-pages/videos-page/videos-page.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/main-pages/videos-page/videos-page.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/main-pages/videos-page/videos-page.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"row\">\n      <div class=\"col-sm-12 col-md-6 col-lg-6 mt-4\">\n          <div class=\"embed-responsive embed-responsive-4by3\">\n              <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/3F_UHtIYniE\"></iframe>\n          </div>\n      </div>\n      <div class=\"col-sm-12 col-md-6 col-lg-6 mt-4\">\n          <div class=\"embed-responsive embed-responsive-4by3\">\n              <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/Q7kW-9GwdZs\"></iframe>\n          </div>\n      </div>\n      <div class=\"col-sm-12 col-md-6 col-lg-6 mt-4\">\n          <div class=\"embed-responsive embed-responsive-4by3\">\n              <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/d6wKlN8w8sQ\"></iframe>\n          </div>\n          </div>\n      <div class=\"col-sm-12 col-md-6 col-lg-6 mt-4\">\n          <div class=\"embed-responsive embed-responsive-4by3\">\n              <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/ccG2VeV48Fc\"></iframe>\n          </div>\n      </div>\n      <div class=\"col-sm-12 col-md-6 col-lg-6 mt-4 mb-4 mx-auto\">\n          <div class=\"embed-responsive embed-responsive-4by3\">\n              <iframe class=\"embed-responsive-item\" src=\"https://www.youtube.com/embed/mmROL-uIVvk\"></iframe>\n          </div>\n      </div>\n  </div>\n  \n</div>"

/***/ }),

/***/ "./src/app/main-pages/videos-page/videos-page.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/main-pages/videos-page/videos-page.component.ts ***!
  \*****************************************************************/
/*! exports provided: VideosPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosPageComponent", function() { return VideosPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var VideosPageComponent = /** @class */ (function () {
    function VideosPageComponent() {
    }
    VideosPageComponent.prototype.ngOnInit = function () {
    };
    VideosPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-videos-page',
            template: __webpack_require__(/*! ./videos-page.component.html */ "./src/app/main-pages/videos-page/videos-page.component.html"),
            styles: [__webpack_require__(/*! ./videos-page.component.css */ "./src/app/main-pages/videos-page/videos-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VideosPageComponent);
    return VideosPageComponent;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page01/armenia-page01.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page01/armenia-page01.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page01/armenia-page01.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page01/armenia-page01.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>North Summit (4,090m) of Mount Aragats</h1><br>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/01_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>\n    The North Summit of Mount Aragats is in the Aragatsotn province of Armenia. It is the highest summit (4,090m) of Aragats. The Mountain has a huge crater, with a 400m depth and 3km diameter, and the ruins of its decayed walls form the four summits of Mount Aragats. The crater is open from the southeast and is in harmony with its’ surroundings.\n  </p>\n  <p>\n    Geghadzor is the nearest residence, and is where the ski trail begins. If you have decided to take this trail, we recommend booking accommodation for an overnight stay in one of the guest houses in the village.  You can also ask for a car (Jeep or Vilis) from the farmers and start the ski trail early in the morning. Usually, the trail on the North Summit of Aragats takes 8-10 hours (climbing up and down). You need to take a car (Jeep) and begin the trail with an expectation of a light, long descent, soft snow and marvelous sights. The territory is mostly covered with an abundance of powdered snow.\n  </p>\n  <h3>The Aragats massif</h3>\n  <p>Mount Aragats is considered the highest peak in Armenia (4,090m). It is an isolated shield-like massif of about 200km in circumference. Together with its fan-shaped slopes, it covers 4,000m², and is situated in both the Aragatsotn and Shirak provinces. Aragats used to be one of the world’s largest volcanos. It has a gigantic 400m-deep crater, 3km in diameter, and 4 peaks. The highest point is the North Summit- 4,090m; the West Summit is second with 3,995.3m and is followed by the East -3,908.2m and South Summits- 3,887.8m.</p>\n  <h3>Description of the Monuments</h3>\n  <p> Ohanavank (5th-13th centuries)</p>\n  <p>Ohanavank Monastery is located in Ohanavan village, in the Aragatsotn province, of Armenia. It is beautifully perched on a gorge, high above the right bank of the Kasagh River. The monastery overlooks Mount Ara and the Geghama Mountains in the southeast. Over different periods of time, the monastery used to maintain vast plowlands, gardens, pastures, mills, and villages. It also used to be a significant center for Armenian writing, with a rich library; some of the manuscripts created there have been still been preserved to this day.</p>\n  <h3>Saghmosavank</h3>\n  <p>Saghmosavank is located in Saghmosavan village, of Aragatsotn province, Armenia, at the edge of the deep Kasagh River gorge, and is ‘backed’ by gigantic Mount Ara from behind. On the other sides, the monastery overlooks Mount Aragats (4,095m) and Mount Ararat (5,165m). The monastery was built in the 13th century by Prince Vache I Vachutyan and his noble family. The complex is comprised of the Church of Zion, the Church of Holy Mother of God, a book depository and a narthex. The Church of Zion is the main church of the complex. It is a cross-shaped and domed church and differs from other churches built in that epoch by the layout of the narthex. The eastern part of the church features an altar and niches inside the walls. The Saghmosavank manuscript repository was built in 1,255.  It neighbors the ancient khachkars (cross-stones) on the western facade of the church.</p>\n  <h3>The Armenian Alphabet Monument after M. Mashtots</h3>\n  <p>The Armenian Alphabet Monument is located on the eastern slope of Mount Aragats, near Artashavan village, in Aragatsotn province, on the left side of the Yerevan-Aparan highway. The Armenian alphabet was created between 405-406, by Mesrop Mashtots, a prominent linguist, religious and political leader, and has been used for Armenian writing ever since. The monument was built in 2,005 to commemorate the 1,600th anniversary of the creation of the Armenian alphabet. It features 39 beautifully ornamented letters of the alphabet and statues of key Armenian figures. Each letter is 1.5m-2m high. According to tradition, anyone who visits this monument takes a photo with the first letter of their name. By the Monument, you can see the statues of the great minds of Armenia – Mesrop Mashtots (with the letters in his hands), Grigor Lusavorich (holding the cross beyond), Anania Shirakatsi (a symbol of the earth and the universe in his left hand), Mkhitar Gosh (with “Datastanagirk”, the Book of Reprisal, in his hands), Khachatur Abovyan and Hovhannes Tumanyan.</p>\n  <h3>Fauna</h3>\n  <p>On the slopes of Mt. Aragats, animals rest under the thick layers of snow. While descending down the route, you are likely to see traces of animals more often than yours. While skiing in this territory, you’ll most probably come across evidence of wolves, foxes, wild rabbits and dogs in rural areas. Birds are also rare in this territory.</p>\n  <h3>Safety</h3>\n  <p>The Ucom and VivaCell-MTS networks are almost always available between Geghadzor village and the Northern Summit of Mount Aragats. In case of emergency, call 911, a service available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            February-May\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n            22km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n            10 hours.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 2,200-3,890m above sea level.\n          </td>\n          <td>\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page01/armenia-page01.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page01/armenia-page01.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage01Component", function() { return ArmeniaPage01Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage01Component = /** @class */ (function () {
    function ArmeniaPage01Component() {
    }
    ArmeniaPage01Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage01Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page01',
            template: __webpack_require__(/*! ./armenia-page01.component.html */ "./src/app/pages/armenia/armenia-page01/armenia-page01.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page01.component.css */ "./src/app/pages/armenia/armenia-page01/armenia-page01.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage01Component);
    return ArmeniaPage01Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page02/armenia-page02.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page02/armenia-page02.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page02/armenia-page02.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page02/armenia-page02.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>East Summit of Mount Aragats: Ski Run</h1><br>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/02_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>To start skiing on the slopes of the East Summit of Mount Aragats, you need to set off to the Aragatsotn province. The nearest settlement is the village of Aragats (1,970m): this is where the skiing begins. The piste runs over a series of small hills that overlook deep gorges on the right hand side and stretch up to ‘merge’ into the Eastern Summit. When following this ski run, you will have reached the surroundings of the Aragats Summit. The Eastern Summit is the third highest peak of Mount Aragats.</p>\n  <h3>The Aragats massif</h3>\n  <p>Mount Aragats is considered the highest peak in Armenia (4,090m). It is an isolated shield-like massif of about 200km in circumference. Together with its fan-shaped slopes, it covers 4,000m², and is situated in both the Aragatsotn and Shirak provinces. Aragats used to be one of the world’s largest volcanos. It has a gigantic 400m-deep crater, 3km in diameter, and 4 peaks. The highest point is the North Summit- 4,090m; the West Summit is second with 3,995.3m and is followed by the East -3,908.2m and South Summits- 3,887.8m.</p>\n  <h3>Nearby Attractions:</h3>\n  <p>Traveling between the East Summit of Aragats and Yerevan, you can visit:</p>\n  <h3>Ohanavank (5th-13th centuries)</h3>\n  <p>Ohanavank Monastery is located in the village of Ohanavan, within the Aragatsotn province of Armenia. It is beautifully perched on the edge of a gorge, high above the right bank of the Kasagh River. The monastery overlooks Mount Ara and the Geghama Mountain range from the southeast. In the past, the monastery owned vast plow-lands, gardens, pastures, oil mills, mills and villages. It also used to be a significant center of Armenian literature, containing a rich library; some of the manuscripts created there have been preserved up to this day.</p>\n  <h3>Saghmosavank</h3>\n  <p>Saghmosavank is located in Saghmosavan village, of Aragatsotn province, Armenia, at the edge of the deep Kasagh River gorge, and is ‘backed’ by gigantic Mount Ara from behind. On the other sides, the monastery overlooks Mount Aragats (4,095m) and Mount Ararat (5,165m). The monastery was built in the 13th century by Prince Vache I Vachutyan and his noble family. The complex is comprised of the Church of Zion, the Church of Holy Mother of God, a book depository and a narthex. The Church of Zion is the main church of the complex. It is a cross-shaped and domed church and differs from other churches built in that epoch by the layout of the narthex. The eastern part of the church features an altar and niches inside the walls. The Saghmosavank manuscript repository was built in 1,255.  It neighbors the ancient khachkars (cross-stones) on the western facade of the church.</p>\n  <h3>The Armenian Alphabet Monument after M. Mashtots</h3>\n  <p>The Armenian Alphabet Monument is located on the eastern slope of Mount Aragats, near Artashavan village, in Aragatsotn province, on the left side of the Yerevan-Aparan highway. The Armenian alphabet was created between 405-406, by Mesrop Mashtots, a prominent linguist, religious and political leader, and has been used for Armenian writing ever since. The monument was built in 2,005 to commemorate the 1,600th anniversary of the creation of the Armenian alphabet. It features 39 beautifully ornamented letters of the alphabet and statues of key Armenian figures. Each letter is 1.5m-2m high. According to tradition, anyone who visits this monument takes a photo with the first letter of their name. By the Monument, you can see the statues of the great minds of Armenia – Mesrop Mashtots (with the letters in his hands), Grigor Lusavorich (holding the cross beyond), Anania Shirakatsi (a symbol of the earth and the universe in his left hand), Mkhitar Gosh (with “Datastanagirk”, the Book of Reprisal, in his hands), Khachatur Abovyan and Hovhannes Tumanyan.</p>\n  <h3>Fauna</h3>\n  <p>On the slopes of Mt. Aragats, animals rest under the thick layers of snow. While descending down the route, you are likely to see traces of animals more often than yours. While skiing in this territory, you’ll most probably come across evidence of wolves, foxes, wild rabbits and dogs in rural areas. Birds are also rare in this territory.</p>\n  <h3>Safety</h3>\n  <p>The Ucom and VivaCell-MTS networks are almost always available between Geghadzor village and the Northern Summit of Mount Aragats. In case of emergency, call 911, a service available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            January, February, March, April\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n            18 km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n            8 hours.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 1,970-3,408.2 meters above sea level\n          </td>\n          <td>\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page02/armenia-page02.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page02/armenia-page02.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage02Component", function() { return ArmeniaPage02Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage02Component = /** @class */ (function () {
    function ArmeniaPage02Component() {
    }
    ArmeniaPage02Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage02Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page02',
            template: __webpack_require__(/*! ./armenia-page02.component.html */ "./src/app/pages/armenia/armenia-page02/armenia-page02.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page02.component.css */ "./src/app/pages/armenia/armenia-page02/armenia-page02.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage02Component);
    return ArmeniaPage02Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page03/armenia-page03.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page03/armenia-page03.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page03/armenia-page03.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page03/armenia-page03.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Byurakan - South Summit of Mount Aragats</h1><br>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/03_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>The South Summit of Mount Aragats is in the Aragatsotn province of Armenia. It is the lowest summit (3,887. 8m) of Aragats. We recommend taking the trail in spring (March, April, May) as the difficulties of reaching the South Summit of Aragats are less during this time of the year. You should get to the Physics Institute (the ‘Aragats’&nbsp;Scientific Station) on the slopes of Aragats by car, and then start walking uphill using the marked trail. The snow is partially melted at this time of the year, so you can see Stone Lake (Kari Lich), one of the crystal-clear mountain lakes of Armenia.</p>\n  <h3>The Aragats massif</h3>\n  <p>Mount Aragats is considered the highest peak in Armenia (4,090m). It is an isolated shield-like massif of about 200km in circumference. Together with its fan-shaped slopes, it covers 4,000m², and is situated in both the Aragatsotn and Shirak provinces. Aragats used to be one of the world’s largest volcanos. It has a gigantic 400m-deep crater, 3km in diameter, and 4 peaks. The highest point is the North Summit- 4,090m; the West Summit is second with 3,995.3m and is followed by the East -3,908.2m and South Summits- 3,887.8m.</p>\n  <h3>Nearby Attractions:</h3>\n  <p>Traveling between the East Summit of Aragats and Yerevan, you can visit:</p>\n  <h3>Ohanavank (5th-13th centuries)</h3>\n  <p>Ohanavank Monastery is located in the village of Ohanavan, within the Aragatsotn province of Armenia. It is beautifully perched on the edge of a gorge, high above the right bank of the Kasagh River. The monastery overlooks Mount Ara and the Geghama Mountain range from the southeast. In the past, the monastery owned vast plow-lands, gardens, pastures, oil mills, mills and villages. It also used to be a significant center of Armenian literature, containing a rich library; some of the manuscripts created there have been preserved up to this day.</p>\n  <h3>Saghmosavank</h3>\n  <p>Saghmosavank is located in Saghmosavan village, of Aragatsotn province, Armenia, at the edge of the deep Kasagh River gorge, and is ‘backed’ by gigantic Mount Ara from behind. On the other sides, the monastery overlooks Mount Aragats (4,095m) and Mount Ararat (5,165m). The monastery was built in the 13th century by Prince Vache I Vachutyan and his noble family. The complex is comprised of the Church of Zion, the Church of Holy Mother of God, a book depository and a narthex. The Church of Zion is the main church of the complex. It is a cross-shaped and domed church and differs from other churches built in that epoch by the layout of the narthex. The eastern part of the church features an altar and niches inside the walls. The Saghmosavank manuscript repository was built in 1,255.  It neighbors the ancient khachkars (cross-stones) on the western facade of the church.</p>\n  <h3>The Armenian Alphabet Monument after M. Mashtots</h3>\n  <p>The Armenian Alphabet Monument is located on the eastern slope of Mount Aragats, near Artashavan village, in Aragatsotn province, on the left side of the Yerevan-Aparan highway. The Armenian alphabet was created between 405-406, by Mesrop Mashtots, a prominent linguist, religious and political leader, and has been used for Armenian writing ever since. The monument was built in 2,005 to commemorate the 1,600th anniversary of the creation of the Armenian alphabet. It features 39 beautifully ornamented letters of the alphabet and statues of key Armenian figures. Each letter is 1.5m-2m high. According to tradition, anyone who visits this monument takes a photo with the first letter of their name. By the Monument, you can see the statues of the great minds of Armenia – Mesrop Mashtots (with the letters in his hands), Grigor Lusavorich (holding the cross beyond), Anania Shirakatsi (a symbol of the earth and the universe in his left hand), Mkhitar Gosh (with “Datastanagirk”, the Book of Reprisal, in his hands), Khachatur Abovyan and Hovhannes Tumanyan.</p>\n  <h3>Fauna</h3>\n  <p>On the slopes of Mt. Aragats, animals rest under the thick layers of snow. While descending down the route, you are likely to see traces of animals more often than yours. While skiing in this territory, you’ll most probably come across evidence of wolves, foxes, wild rabbits and dogs in rural areas. Birds are also rare in this territory.</p>\n  <h3>Safety</h3>\n  <p>The Ucom and VivaCell-MTS networks are almost always available in the South Summit of Mount Aragats. In case of emergency, call 911, a service available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            March, April, May\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n            18.3 km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n            2 hours.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 3,250-3,888m above sea level\n          </td>\n          <td>\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n\n\n\n\n\n\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page03/armenia-page03.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page03/armenia-page03.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage03Component", function() { return ArmeniaPage03Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage03Component = /** @class */ (function () {
    function ArmeniaPage03Component() {
    }
    ArmeniaPage03Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage03Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page03',
            template: __webpack_require__(/*! ./armenia-page03.component.html */ "./src/app/pages/armenia/armenia-page03/armenia-page03.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page03.component.css */ "./src/app/pages/armenia/armenia-page03/armenia-page03.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage03Component);
    return ArmeniaPage03Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page04/armenia-page04.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page04/armenia-page04.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page04/armenia-page04.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page04/armenia-page04.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>West Summit of Mount Aragats</h1>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/04_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>To get to the west summit of the Mount Aragats ski trail, you should first reach Geghadzor village, in the province of Aragatsotn. In case of any adverse weather, we do not recommend this trail, because of the possible difficulties of traveling through the high mountains. It is only possible to bypass these obstacles in clear weather, the ski trail is rather complicated and possibly dangerous. You should climb up to the vicinity of the west summit (3,650m) using the marked trail. The trail is long, with no stops, and the area is usually covered with snow powder. The West Summit is the second highest summit (3,995.3m) of Mount Aragats.</p>\n  <h3>The Legend</h3>\n  <p>According to legend, the name ‘Aragats’ originated from the name ‘Ara’, and the word ‘gah’ (throne): that is to say ‘Ara’s throne’ (the Armenian king Ara Geghetsik, meaning Ara the Beautiful).</p>\n  <h3>Description of the monuments</h3>\n  <p>Heading for the West Summit of Aragats from Yerevan or vice versa, you can visit:</p>\n  <h3>The Aragats massif</h3>\n  <p>Mount Aragats is considered the highest peak in Armenia (4,090m). It is an isolated shield-like massif of about 200km in circumference. Together with its fan-shaped slopes, it covers 4,000m², and is situated in both the Aragatsotn and Shirak provinces. Aragats used to be one of the world’s largest volcanos. It has a gigantic 400m-deep crater, 3km in diameter, and 4 peaks. The highest point is the North Summit- 4,090m; the West Summit is second with 3,995.3m and is followed by the East -3,908.2m and South Summits- 3,887.8m.</p>\n  <h3>Nearby Attractions:</h3>\n  <p>Traveling between the East Summit of Aragats and Yerevan, you can visit:</p>\n  <h3>Ohanavank (5th-13th centuries)</h3>\n  <p>Ohanavank Monastery is located in the village of Ohanavan, within the Aragatsotn province of Armenia. It is beautifully perched on the edge of a gorge, high above the right bank of the Kasagh River. The monastery overlooks Mount Ara and the Geghama Mountain range from the southeast. In the past, the monastery owned vast plow-lands, gardens, pastures, oil mills, mills and villages. It also used to be a significant center of Armenian literature, containing a rich library; some of the manuscripts created there have been preserved up to this day.</p>\n  <h3>Saghmosavank</h3>\n  <p>Saghmosavank is located in Saghmosavan village, of Aragatsotn province, Armenia, at the edge of the deep Kasagh River gorge, and is ‘backed’ by gigantic Mount Ara from behind. On the other sides, the monastery overlooks Mount Aragats (4,095m) and Mount Ararat (5,165m). The monastery was built in the 13th century by Prince Vache I Vachutyan and his noble family. The complex is comprised of the Church of Zion, the Church of Holy Mother of God, a book depository and a narthex. The Church of Zion is the main church of the complex. It is a cross-shaped and domed church and differs from other churches built in that epoch by the layout of the narthex. The eastern part of the church features an altar and niches inside the walls. The Saghmosavank manuscript repository was built in 1,255.  It neighbors the ancient khachkars (cross-stones) on the western facade of the church.</p>\n  <h3>The Armenian Alphabet Monument after M. Mashtots</h3>\n  <p>The Armenian Alphabet Monument is located on the eastern slope of Mount Aragats, near Artashavan village, in Aragatsotn province, on the left side of the Yerevan-Aparan highway. The Armenian alphabet was created between 405-406, by Mesrop Mashtots, a prominent linguist, religious and political leader, and has been used for Armenian writing ever since. The monument was built in 2,005 to commemorate the 1,600th anniversary of the creation of the Armenian alphabet. It features 39 beautifully ornamented letters of the alphabet and statues of key Armenian figures. Each letter is 1.5m-2m high. According to tradition, anyone who visits this monument takes a photo with the first letter of their name. By the Monument, you can see the statues of the great minds of Armenia – Mesrop Mashtots (with the letters in his hands), Grigor Lusavorich (holding the cross beyond), Anania Shirakatsi (a symbol of the earth and the universe in his left hand), Mkhitar Gosh (with “Datastanagirk”, the Book of Reprisal, in his hands), Khachatur Abovyan and Hovhannes Tumanyan.</p>\n  <h3>Fauna</h3>\n  <p>On the slopes of Mt. Aragats, animals rest under the thick layers of snow. While descending down the route, you are likely to see traces of animals more often than yours. While skiing in this territory, you’ll most probably come across evidence of wolves, foxes, wild rabbits and dogs in rural areas. Birds are also rare in this territory.</p>\n  <h3>Safety</h3>\n  <p>The Ucom and VivaCell-MTS networks are almost always available between Geghadzor village and the Northern Summit of Mount Aragats. In case of emergency, call 911, a service available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            January - April\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n            28  km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n            10 hours and 48min.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 2,200- 3,995.3m above sea level\n          </td>\n          <td>\n            The West Summit is the second highest summit (3,995.3m) of Aragats.\n          </td>\n          <td>os\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page04/armenia-page04.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page04/armenia-page04.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage04Component", function() { return ArmeniaPage04Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage04Component = /** @class */ (function () {
    function ArmeniaPage04Component() {
    }
    ArmeniaPage04Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage04Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page04',
            template: __webpack_require__(/*! ./armenia-page04.component.html */ "./src/app/pages/armenia/armenia-page04/armenia-page04.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page04.component.css */ "./src/app/pages/armenia/armenia-page04/armenia-page04.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage04Component);
    return ArmeniaPage04Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page05/armenia-page05.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page05/armenia-page05.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page05/armenia-page05.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page05/armenia-page05.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>West Summit of Mount Aragats</h1><br>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/05_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>This ski trail is located in the Bujakan mountains, 5.5km northwest of the village of Bujakan, in Kotayk province. The journey will start as a walk down a marked trail, from the Surb Astvatsatsin Church in Yeghipatrush village, of Aragatsotn province. Numerous skiers visiting Armenia have traversed this trail and were very pleased with the quality of the snow.</p>\n  <h3>Description of the Monument</h3>\n  <p>Heading for Bujakan Mountain from Yerevan or vice versa, you can visit:</p>\n  <h3>The Surb Astvatsatsin Church (Holy Mother of God Church) in Yeghipatrush village</h3>\n  <p>The Church was constructed between the 10th and 13th centuries. There are several khachkars (cross-stones) from the 7th -8th centuries found near the church. During construction, tombs from the 3-2nd millennium BC, were found and opened, near the village of Yeghipatrush, on both sides of the gorge. Clay pots and jewellery from the period were also found nearby. The Catholicos of All Armenians, Yesai A. Yeghipatrushetsi (ruling between 775-788), was born in this village in 696, and later the village was named after him. </p>\n  <h3>The Holy Cross Church in Aparan town</h3>\n  <p>The Holy Cross Church is situated in the town of Aparan, in the Aragatsotn province. It was built at the end of the 4th century, and was renovated in 1,877. The church received its name due to the relic of the Lord True Cross kept there. This chapel functioned till the 40's of the 20th century, even during the Soviet times.</p>\n  <h3>Fauna</h3>\n  <p>While traversing the Bujakan Mountain ski trail, we came across wolves and saw numerous traces of animals, probably foxes, rabbits, and/or rodents. But you may also come across a bear. In case you meet a bear, you should just give way to the animal.</p>\n  <h3>Safety</h3>\n  <p>The Ucom and VivaCell-MTS networks are almost always available between Geghadzor village and the Northern Summit of Mount Aragats. In case of emergency, call 911, a service available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            January - April\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n              9.2 km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n            3 hours and 28min.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 1,965-2,806m above sea level\n          </td>\n          <td>\n            The West Summit is the second highest summit (3,995.3m) of Aragats.\n          </td>\n          <td>os\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page05/armenia-page05.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page05/armenia-page05.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage05Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage05Component", function() { return ArmeniaPage05Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage05Component = /** @class */ (function () {
    function ArmeniaPage05Component() {
    }
    ArmeniaPage05Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage05Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page05',
            template: __webpack_require__(/*! ./armenia-page05.component.html */ "./src/app/pages/armenia/armenia-page05/armenia-page05.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page05.component.css */ "./src/app/pages/armenia/armenia-page05/armenia-page05.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage05Component);
    return ArmeniaPage05Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page06/armenia-page06.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page06/armenia-page06.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page06/armenia-page06.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page06/armenia-page06.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Mount Hatis (2,528m): Ski Trail</h1><br>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/06_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>Hatis is a volcanic massif in the Kotayk province of Armenia.&nbsp; The mountain has a conical structure indented with numerous gorges, which can be seen in winter as well.  There are a lot of rocky formations in the higher spots of the Mountain. The ski trail begins in the village of Hatis, on the northern slopes of the mountain. You can enjoy the ski trail at Mount Hatis from January to April. The climate is mild here due to the geographical location of the trail. Most of the winter is sunny, and the sky is blue. Yerevan is 30km away from the trail. Please, check the weather conditions before attempting the ski trail. The best time for skiing downhill is midday, as the snow is frozen during morning and evening hours.</p>\n  <h3>Description of the monument</h3>\n  <p>Heading for Mount Hatis from Yerevan or vice versa, you can visit:</p>\n  <h3>Surp Poghos-Petros Church (St. Paul and Peter Church)</h3>\n  <p>The church is located nearby Zar village, at the foot of Mount Hatis, in the Kotayk province. Poghos-Petros chapel-sanctuary was originally built in the 13th century. In 1930, a foreman named Grigor (Gregory) had a dream in which he saw the grand design of the church and continued its entire construction. Two churches were built next to the chapel named Poghos and Petros. Now it has also become a place of pilgrimage. Each year, two weeks after Holy Easter, people go on&nbsp;pilgrimage to the Church to celebrate Saint Poghos-Petros Day. In 1969, and later in 1989, the two chapels were reconstructed, and the remodelers were later buried in the Churchyard after their deaths.</p>\n  <h3>Saint Hovhannes Mkrtich Church (Saint John the Baptist Church) in the town of Abovyan, Kotayk province</h3>\n  <p>This church is a new construction, being completed in 2006, and was then consecrated in 2013. It is in the town of&nbsp;Abovyan,&nbsp;in the Kotayk Province of&nbsp;Armenia. The architectural team of the church consisted of around 40 painters, sculptors and architects.</p>\n  <h3>Temple of Garni</h3>\n  <p>The pagan temple of Garni is situated in the Kotayk province, in the village of Garni, on the right bank of the Azat River. The temple was founded by Patriarch Hayk’s great grandson Gegham, and was named Garni in honor of his grandson. Garni was also called the Temple of the Sun, as it was dedicated to the God of the Sun, Mihr. King Trdat the First, on a high triangular cape in 76 BC, constructed the fortress as a Hellenistic building. Garni fortress was damaged several times over the centuries. However, the kings of Armenia reconstructed the fortress using it as a house, a place for military exercises and an Episcopal residence. Now, we can see the Temple of Garni with its majestic architecture attracting numerous tourists and visitors with its’ beauty. The temple is open to everyone all year round and is illuminated at night.</p>\n  <h3>Geghard Monastery (village of Geghard)</h3>\n  <p>Geghard Monastery is one of the ancient monasteries of Armenia. It includes two-storied stone temples and a church. It’s located 35km from Yerevan, and is situated on the right bank of the Azat River, in the historical gorge of Geghardadzor.</p>\n  <hr>\n  <p>The Geghard Monastery, is a complex of cave structures consisting of a main temple, two vestibules and two churches. It also has several chambers and tombs. The entrance of the cave building, indoor walls and columns are decorated with ornate carvings. High rocks surrounding the Monastery make the site uniquely attractive and majestic. Geghardavank was founded during the early years after declaring Christianity as the state religion (IV c.). It was founded by Grigori Lusavorich (Gregory the Illuminator). Geghardavank is one of the religious and cultural centers of medieval Armenia. Numerous manuscripts were found here, some of which are kept in the M. Mashtots Institute of Ancient Manuscripts&nbsp;(Matenadaran) of Yerevan, even though the Monastery was repeatedly raided over the centuries. Geghardavank has been recognized as a UNESCO World Heritage site and is one of the top sights of Armenia.</p>\n  <h3>Fauna</h3>\n  <p>In the territory of Mount Hatis you’ll most probably come across wolves, Armenian yellow foxes, and wild rabbits searching for food.</p>\n  <h3>Safety</h3>\n  <p>No mobile connection is available between the village of Hatis up to the summit of Mount Hatis, Ucom and VivaCell-MTS networks are available only at the top of Mount Hatis. In case of emergency, call 911 services, which are available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            January- mid April\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n            4.5km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n            1.5 hours.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 2,022-2,528m meters above sea level\n          </td>\n          <td>\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page06/armenia-page06.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page06/armenia-page06.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage06Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage06Component", function() { return ArmeniaPage06Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage06Component = /** @class */ (function () {
    function ArmeniaPage06Component() {
    }
    ArmeniaPage06Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage06Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page06',
            template: __webpack_require__(/*! ./armenia-page06.component.html */ "./src/app/pages/armenia/armenia-page06/armenia-page06.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page06.component.css */ "./src/app/pages/armenia/armenia-page06/armenia-page06.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage06Component);
    return ArmeniaPage06Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page07/armenia-page07.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page07/armenia-page07.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page07/armenia-page07.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page07/armenia-page07.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>North Summit of Mount Ara</h1>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/07_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>Mount Ara, with its sliced, steep, timbered slopes, is located on the borders of the Kotayk and Aragatsotn provinces, 33km north of Yerevan. Besides housing a skiing, biking and hiking trail, the Mountain is also a launching place for paragliding pilots.</p>\n  <hr>\n  <p>The ski trail begins on the north of the mountain, at the edge of a summer resort. The road leading to the summer resort may be covered with heavy snow in January and February. In this case, you should start skiing from Yernjatap village to reach the resort, which will add 2km to the route.</p>\n  <hr>\n  <p>The snow is mostly solid here, but the surface is always melted a few centimeters, which is very favorable for skiing. The road runs through pine and oak forests, which make for a beautiful combination in the winter. From the top of Mount Ara, you can view the four highest mountains of Armenia: Aragats, Azhdahak, Teghenis 1, and Hatis. You can return using the same trail.</p>\n  <h3>Nearby Attractions:</h3>\n  <p>Heading for Mount Ara from Yerevan or vice versa, you can visit:</p>\n  <h3>Ohanavank (5th-13th centuries)</h3>\n  <p>Ohanavank Monastery is located in the village of Ohanavan, within the Aragatsotn province of Armenia. It is beautifully perched on the edge of a gorge, high above the right bank of the Kasagh River. The monastery overlooks Mount Ara and the Geghama Mountain range from the southeast. In the past, the monastery owned vast plow-lands, gardens, pastures, oil mills, mills and villages. It also used to be a significant center of Armenian literature, containing a rich library; some of the manuscripts created there have been preserved up to this day.</p>\n  <h3>Saghmosavank</h3>\n  <p>Saghmosavank is located in Saghmosavan village, of Aragatsotn province, Armenia, at the edge of the deep Kasagh River gorge, and is ‘backed’ by gigantic Mount Ara from behind. On the other sides, the monastery overlooks Mount Aragats (4,095m) and Mount Ararat (5,165m). The monastery was built in the 13th century by Prince Vache I Vachutyan and his noble family. The complex is comprised of the Church of Zion, the Church of Holy Mother of God, a book depository and a narthex. The Church of Zion is the main church of the complex. It is a cross-shaped and domed church and differs from other churches built in that epoch by the layout of the narthex. The eastern part of the church features an altar and niches inside the walls. The Saghmosavank manuscript repository was built in 1,255.  It neighbors the ancient khachkars (cross-stones) on the western facade of the church.</p>\n  <h3>The Armenian Alphabet Monument after M. Mashtots</h3>\n  <p>The Armenian Alphabet Monument is located on the eastern slope of Mount Aragats, near Artashavan village, in Aragatsotn province, on the left side of the Yerevan-Aparan highway. The Armenian alphabet was created between 405-406, by Mesrop Mashtots, a prominent linguist, religious and political leader, and has been used for Armenian writing ever since. The monument was built in 2,005 to commemorate the 1,600th anniversary of the creation of the Armenian alphabet. It features 39 beautifully ornamented letters of the alphabet and statues of key Armenian figures. Each letter is 1.5m-2m high.According to tradition, anyone who visits this monument takes a photo with the first letter of their name. By the Monument, you can see the statues of the great minds of Armenia – Mesrop Mashtots (with the letters in his hands), Grigor Lusavorich (holding the cross beyond), Anania Shirakatsi (a symbol of the earth and the universe in his left hand), Mkhitar Gosh (with “Datastanagirk”, the Book of Reprisal, in his hands), Khachatur Abovyan and Hovhannes Tumanyan.</p>\n  <h3>Fauna</h3>\n  <p>In the territory of Mount Ara you’ll most probably come across wolves, gray or yellow foxes and rabbits. You may also meet a bear that has woken early from hibernation.</p>\n  <h3>Safety</h3>\n  <p>All the networks operating in Armenia are always available from the Mount Ara summer resort to the top of mountain. In case of emergency, call 911, a service which is available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            January- mid April\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n            6.6km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n            3hr. 46m.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 1,873-2,528m meters above sea level\n          </td>\n          <td>\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page07/armenia-page07.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page07/armenia-page07.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage07Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage07Component", function() { return ArmeniaPage07Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage07Component = /** @class */ (function () {
    function ArmeniaPage07Component() {
    }
    ArmeniaPage07Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage07Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page07',
            template: __webpack_require__(/*! ./armenia-page07.component.html */ "./src/app/pages/armenia/armenia-page07/armenia-page07.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page07.component.css */ "./src/app/pages/armenia/armenia-page07/armenia-page07.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage07Component);
    return ArmeniaPage07Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page08/armenia-page08.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page08/armenia-page08.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page08/armenia-page08.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page08/armenia-page08.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Tsaghkavank - Mount Ara (2,577m): Ski Trail</h1>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/08_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>Mount Ara is located on the borders of the Kotayk and Aragatsotn provinces. The mountain is 2,577m high and 40km away from Yerevan. The mountain takes its name after Ara the Beautiful (Ara Geghetsik), an Armenian mythological God and king. The Mountain is also a jump off point for paragliding pilots</p>\n  <hr>\n  <p>The ski trail begins at a red apple orchard. This is considered a traditional trail, as it is used by both skiers and paragliding pilots. In winter, Mt. Ara is a great tourist destination, as the weather here is clear and sunny, and the snow is soft and silky.</p>\n  <hr>\n  <h3>Description of the monuments</h3>\n  <p>Tsaghkavank&nbsp;(Flower Monastery) or Kuys Varvara&nbsp;(the Virgin Barbara) is a cave shrine on the slopes of Mount Ara. The residents here celebrate Christian and sometimes even pagan holidays. There is a healing water source inside this mossy monastery that is especially used for sight ailments. The water is healing due to its zinc content, which is also helpful for diseases of the joints and muscle spasms. </p>\n  <h3>Nearby Attractions:</h3>\n  <p>Heading for Mount Ara from Yerevan or vice versa, you can visit:</p>\n  <h3>Ohanavank (5th-13th centuries)</h3>\n  <p>Ohanavank Monastery is located in the village of Ohanavan, within the Aragatsotn province of Armenia. It is beautifully perched on the edge of a gorge, high above the right bank of the Kasagh River. The monastery overlooks Mount Ara and the Geghama Mountain range from the southeast. In the past, the monastery owned vast plow-lands, gardens, pastures, oil mills, mills and villages. It also used to be a significant center of Armenian literature, containing a rich library; some of the manuscripts created there have been preserved up to this day.</p>\n  <h3>Saghmosavank</h3>\n  <p>Saghmosavank is located in Saghmosavan village, of Aragatsotn province, Armenia, at the edge of the deep Kasagh River gorge, and is ‘backed’ by gigantic Mount Ara from behind. On the other sides, the monastery overlooks Mount Aragats (4,095m) and Mount Ararat (5,165m). The monastery was built in the 13th century by Prince Vache I Vachutyan and his noble family. The complex is comprised of the Church of Zion, the Church of Holy Mother of God, a book depository and a narthex. The Church of Zion is the main church of the complex. It is a cross-shaped and domed church and differs from other churches built in that epoch by the layout of the narthex. The eastern part of the church features an altar and niches inside the walls. The Saghmosavank manuscript repository was built in 1,255.  It neighbors the ancient khachkars (cross-stones) on the western facade of the church.</p>\n  <h3>The Armenian Alphabet Monument after M. Mashtots</h3>\n  <p>The Armenian Alphabet Monument is located on the eastern slope of Mount Aragats, near Artashavan village, in Aragatsotn province, on the left side of the Yerevan-Aparan highway. The Armenian alphabet was created between 405-406, by Mesrop Mashtots, a prominent linguist, religious and political leader, and has been used for Armenian writing ever since. The monument was built in 2,005 to commemorate the 1,600th anniversary of the creation of the Armenian alphabet. It features 39 beautifully ornamented letters of the alphabet and statues of key Armenian figures. Each letter is 1.5m-2m high. According to tradition, anyone who visits this monument takes a photo with the first letter of their name. By the Monument, you can see the statues of the great minds of Armenia – Mesrop Mashtots (with the letters in his hands), Grigor Lusavorich (holding the cross beyond), Anania Shirakatsi (a symbol of the earth and the universe in his left hand), Mkhitar Gosh (with “Datastanagirk”, the Book of Reprisal, in his hands), Khachatur Abovyan and Hovhannes Tumanyan.</p>\n  <h3>Fauna</h3>\n  <p>In the territory of Mount Ara you’ll most probably come across wolves, gray or yellow foxes and rabbits. You may also meet a bear that has woken early from hibernation.</p>\n  <h3>Safety</h3>\n  <p>Beeline, Ucom and VivaCell-MTS networks are always available between Tsaghkavank&nbsp;(Flower Monastery) to Mount Ara. In case of emergency, call 911, a service which is available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            January- April 10\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n            9.4km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n            3hr. 56m.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 1,314-2,577m meters above sea level\n          </td>\n          <td>\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page08/armenia-page08.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page08/armenia-page08.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage08Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage08Component", function() { return ArmeniaPage08Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage08Component = /** @class */ (function () {
    function ArmeniaPage08Component() {
    }
    ArmeniaPage08Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage08Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page08',
            template: __webpack_require__(/*! ./armenia-page08.component.html */ "./src/app/pages/armenia/armenia-page08/armenia-page08.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page08.component.css */ "./src/app/pages/armenia/armenia-page08/armenia-page08.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage08Component);
    return ArmeniaPage08Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page09/armenia-page09.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page09/armenia-page09.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page09/armenia-page09.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page09/armenia-page09.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>South – West Summit of the Mount Teghenis 1 (2,851m) Ski Trail</h1>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/09_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>Teghenis 1 Mountain is located on the border of the Aragatsotn and Kotayk provinces. To start skiing on the slopes of the mountain, you need to set off to Shoghakn village, which is covered by 1-2 meters of snow in January and February. The skiing trail begins at the edge of the village and leads up to the nearby hill. The slopes of Mount Teghenis 1 are covered with birches, firs, and Siberian pine trees.</p>\n  <p>From the top of the Mountain, you can admire the beautiful mountains of the Armenian plateau: the Pambak Mountain in the north, Mount Ara in the south, the Geghama Mountains in the east, Aragats in the West, and Ararat in the southwest. An aeration center operates on the top of Mount Teghenis 1, and is inhabited throughout the year.</p>\n  <hr>\n  <h3>Description of the monuments</h3>\n  <p>Heading for Mount Teghenis 1 from Yerevan or vice versa, you can visit:</p>\n  <h3>Ohanavank (5th-13th centuries)</h3>\n  <p>Ohanavank Monastery is located in the village of Ohanavan, within the Aragatsotn province of Armenia. It is beautifully perched on the edge of a gorge, high above the right bank of the Kasagh River. The monastery overlooks Mount Ara and the Geghama Mountain range from the southeast. In the past, the monastery owned vast plow-lands, gardens, pastures, oil mills, mills and villages. It also used to be a significant center of Armenian literature, containing a rich library; some of the manuscripts created there have been preserved up to this day.</p>\n  <h3>Saghmosavank</h3>\n  <p>Saghmosavank is located in Saghmosavan village, of Aragatsotn province, Armenia, at the edge of the deep Kasagh River gorge, and is ‘backed’ by gigantic Mount Ara from behind. On the other sides, the monastery overlooks Mount Aragats (4,095m) and Mount Ararat (5,165m). The monastery was built in the 13th century by Prince Vache I Vachutyan and his noble family. The complex is comprised of the Church of Zion, the Church of Holy Mother of God, a book depository and a narthex. The Church of Zion is the main church of the complex. It is a cross-shaped and domed church and differs from other churches built in that epoch by the layout of the narthex. The eastern part of the church features an altar and niches inside the walls. The Saghmosavank manuscript repository was built in 1,255.  It neighbors the ancient khachkars (cross-stones) on the western facade of the church.</p>\n  <h3>The Armenian Alphabet Monument after M. Mashtots</h3>\n  <p>The Armenian Alphabet Monument is located on the eastern slope of Mount Aragats, near Artashavan village, in Aragatsotn province, on the left side of the Yerevan-Aparan highway. The Armenian alphabet was created between 405-406, by Mesrop Mashtots, a prominent linguist, religious and political leader, and has been used for Armenian writing ever since. The monument was built in 2,005 to commemorate the 1,600th anniversary of the creation of the Armenian alphabet. It features 39 beautifully ornamented letters of the alphabet and statues of key Armenian figures. Each letter is 1.5m-2m high. According to tradition, anyone who visits this monument takes a photo with the first letter of their name. By the Monument, you can see the statues of the great minds of Armenia – Mesrop Mashtots (with the letters in his hands), Grigor Lusavorich (holding the cross beyond), Anania Shirakatsi (a symbol of the earth and the universe in his left hand), Mkhitar Gosh (with “Datastanagirk”, the Book of Reprisal, in his hands), Khachatur Abovyan and Hovhannes Tumanyan.</p>\n  <h3>Fauna</h3>\n  <p>While passing the Teghenis 1 Mountain piste, at a height of 2,500m, you’ll most probably come across wolves and bears. </p>\n  <h3>Safety</h3>\n  <p>Ucom and VivaCell-MTS networks are almost always available while climbing up the Teghenis 1 Mountain. In case of emergency, call 911, a service which is available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th>Technical specifications of the ski trail</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr>\n          <td>The best time:</td>\n          <td>\n            January, February, March\n          </td>\n        </tr>\n        <tr>\n          <td>\n            Location\n          </td>\n          <td>\n            Aragatsotn province\n          </td>\n        </tr>\n        <tr>\n          <td>The distance of the skiing tread </td>\n          <td>\n            12km.\n          </td>\n        </tr>\n        <tr>\n          <td>The duration of skiing</td>\n          <td>\n             5h.\n          </td>\n        </tr>\n        <tr>\n          <td>\n            The area is located 1,950-2,751m meters above sea level\n          </td>\n          <td>\n            The best drink to have on hand is warm tea.\n          </td>\n        </tr>\n      </tbody>\n    </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page09/armenia-page09.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page09/armenia-page09.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage09Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage09Component", function() { return ArmeniaPage09Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage09Component = /** @class */ (function () {
    function ArmeniaPage09Component() {
    }
    ArmeniaPage09Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage09Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page09',
            template: __webpack_require__(/*! ./armenia-page09.component.html */ "./src/app/pages/armenia/armenia-page09/armenia-page09.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page09.component.css */ "./src/app/pages/armenia/armenia-page09/armenia-page09.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage09Component);
    return ArmeniaPage09Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page10/armenia-page10.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page10/armenia-page10.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page10/armenia-page10.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page10/armenia-page10.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Mount Teghenis 1 from the East</h1>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/10_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>This ski trail starts at ‘Arthur’s Resort’, in the Aghveran National Park, of Kotayk province. The trail is covered with soft snow, it is safe and will fill you with pleasant feelings. Our team has traversed this trail several times during the winter, and we suggest several trails from the different sides of this mountain. All of them are perfect, with stunning natural views from the top.</p>\n  <h3>Heading for Mount Teghenis 1 from Yerevan or vice versa, you can visit along the way:</h3>\n  <h3>Temple of Garni</h3>\n  <p>The pagan temple of Garni is situated in the Kotayk province, in the village of Garni, on the right bank of the Azat River. The temple was founded by Patriarch Hayk’s great grandson Gegham, and was named Garni in honor of his grandson. Garni was also called the Temple of the Sun, as it was dedicated to the God of the Sun, Mihr. King Trdat the First, on a high triangular cape in 76 BC, constructed the fortress as a Hellenistic building. Garni fortress was damaged several times over the centuries. However, the kings of Armenia reconstructed the fortress using it as a house, a place for military exercises and an Episcopal residence. Now, we can see the Temple of Garni with its majestic architecture attracting numerous tourists and visitors with its’ beauty. The temple is open to everyone all year round and is illuminated at night.</p>\n  <h3>Geghard Monastery (village of Geghard)</h3>\n  <p>Geghard Monastery is one of the ancient monasteries of Armenia. It includes two-storied stone temples and a church. It’s located 35km from Yerevan, and is situated on the right bank of the Azat River, in the historical gorge of Geghardadzor.</p>\n  <hr>\n  <p>The Geghard Monastery, is a complex of cave structures consisting of a main temple, two vestibules and two churches. It also has several chambers and tombs. The entrance of the cave building, indoor walls and columns are decorated with ornate carvings. High rocks surrounding the Monastery make the site uniquely attractive and majestic. Geghardavank was founded during the early years after declaring Christianity as the state religion (IV c.). It was founded by Grigori Lusavorich (Gregory the Illuminator). Geghardavank is one of the religious and cultural centers of medieval Armenia. Numerous manuscripts were found here, some of which are kept in the M. Mashtots Institute of Ancient Manuscripts&nbsp;(Matenadaran) of Yerevan, even though the Monastery was repeatedly raided over the centuries. Geghardavank has been recognized as a UNESCO World Heritage site and is one of the top sights of Armenia.</p>\n  <h3>Fauna</h3>\n  <p>While passing through the Teghenis 1 Mountain ski trail, at a height of 2,500m, you’ll might come across evidence of wolves and bears.</p>\n  <h3>Safety</h3>\n  <p>Ucom and VivaCell-MTS networks are partially available between ‘Arthur’s Resort’ and the Teghenis 1 Mountain. In the case of an emergency, call 911, a service available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Technical specifications of the ski trail</th>\n        </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>The best time:</td>\n        <td>\n          January- April\n        </td>\n      </tr>\n      <tr>\n        <td>\n          Location\n        </td>\n        <td>\n          Aragatsotn province\n        </td>\n      </tr>\n      <tr>\n        <td>The distance of the skiing tread </td>\n        <td>\n          10.8km.\n        </td>\n      </tr>\n      <tr>\n        <td>The duration of skiing</td>\n        <td>\n          5 hours and 12min.\n        </td>\n      </tr>\n      <tr>\n        <td>\n          The area is located 1,950-2,851m meters above sea level\n        </td>\n        <td>\n          The best drink to have on hand is warm tea.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page10/armenia-page10.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page10/armenia-page10.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage10Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage10Component", function() { return ArmeniaPage10Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage10Component = /** @class */ (function () {
    function ArmeniaPage10Component() {
    }
    ArmeniaPage10Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage10Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page10',
            template: __webpack_require__(/*! ./armenia-page10.component.html */ "./src/app/pages/armenia/armenia-page10/armenia-page10.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page10.component.css */ "./src/app/pages/armenia/armenia-page10/armenia-page10.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage10Component);
    return ArmeniaPage10Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page11/armenia-page11.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page11/armenia-page11.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page11/armenia-page11.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page11/armenia-page11.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Vardenyats Mountain Pass (Selim, 2,410m): Ski Trail</h1>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/11_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>This trail is found in the province of Gegharkunik, on the Vardenyats Mountain Pass road. From this trail one can see the ravishingly beautiful winter scenes of Armenia’s highlands.  The highest point of the Mountain Pass is 2,410m. One can reach Orbelian’s Caravanserai (2,040m) by car, then descending down the bend, one will reach the start of the ski trail, because skiing up would take much longer. The trail begins at a height of 2,300m, enjoy the quality snow while descending down to the marked trail. While skiing you will be able to see the white peaks of Armenian mountains and the image of Mount Ararat in the distance.</p>\n  <h3>Description of the monuments</h3>\n  <h4>Vardenyats Mountain Pass (Selim Mountain Pass)</h4>\n  <p>The Vardenyats Mountain Pass (previously known as the Selim mountain pass, or Hayots Dzor Pass) is located in the Gegharkunik province, west of the Vardenis mountain range, at an altitude of 2,410m. Nearby, 5km away, is Mount Armaghan, with a height of 2,829m. The Vardenyats Mountain Pass serves as a link between the Argichi valley, the Sevan Basin, and Vayk. The Martuni – Yeghegnadzor highway passes through the Vardenyats Mountain Pass. Orbelian's Caravanserai (aka the Selim Caravanserai) was built along the&nbsp;Vardenyats Mountain Pass in the 13th century.</p>\n  <h3>‘Metaksi Chanaparh’ (Silk Road)</h3>\n  <p>The Silk Road was an ancient network of trade routes connecting China with regions in Asia and Europe. It operated between the 2nd millennium, BC up to the 16th century, AD. The Silk Road derives its name from the lucrative Chinese&nbsp;silk&nbsp;trade. Initially silk was the main good being transferred. The Road was more than 7 thousand km long, with a subsequent marine path being built much later. These old and new worlds bartered in intermediary countries as well. The Armenian Highland was a bridge between Europe and West Asia. These international trade routes linked Armenia with the Black and Mediterranean sea-ports, crossing the Highlands of Armenia. Commercial transactions were carried out in Iran, Mesopotamia, Egypt, India and China through these routes. Plutarch testifies that Artashat (the capital of Armenia) had a wide range of important trade and economic relations during the 1st century BC. Strabon and other historians of Ancient History write about Armenia’s crucial intermediary role in Roman-Parthian trade relations.</p>\n  <h3>Orbelian's Caravanserai</h3>\n  <p>Vardenyats is the best preserved mountain passageway of medieval Armenian passes. Orbelian’s Caravanserai (14th century) in the Vardenyats Mounatian Pass served as an inn for traders passing by way of the Silk Road, in the territory of Armenia. Marco Polo described how Armenians lived in these rugged mountains after he passed through this area.</p>\n  <h3>Fauna</h3>\n  <p>There are bears, wild boars, wolves, red foxes, wild rabbits, rodents, and more found in the forests.</p>\n  <h3>Safety</h3>\n  <p>Throughout the Vardenyats Mountain Pass, all the networks operating in Armenia are always available.  In case of an emergency, call 911, a service available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Technical specifications of the ski trail</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>The best time:</td>\n        <td>\n          January, February, March\n        </td>\n      </tr>\n      <tr>\n        <td>The distance of the skiing tread </td>\n        <td>\n          8.8km\n        </td>\n      </tr>\n      <tr>\n        <td>The duration of skiing</td>\n        <td>\n           2 hours and 52min.\n        </td>\n      </tr>\n      <tr>\n        <td>\n          The area is located 2,410-2,030m meters above sea level\n        </td>\n        <td>\n          The best drink to have on hand is warm tea.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page11/armenia-page11.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page11/armenia-page11.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage11Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage11Component", function() { return ArmeniaPage11Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage11Component = /** @class */ (function () {
    function ArmeniaPage11Component() {
    }
    ArmeniaPage11Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage11Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page11',
            template: __webpack_require__(/*! ./armenia-page11.component.html */ "./src/app/pages/armenia/armenia-page11/armenia-page11.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page11.component.css */ "./src/app/pages/armenia/armenia-page11/armenia-page11.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage11Component);
    return ArmeniaPage11Component;
}());



/***/ }),

/***/ "./src/app/pages/armenia/armenia-page12/armenia-page12.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page12/armenia-page12.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page12/armenia-page12.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page12/armenia-page12.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Vardenyats Mountain Pass (Selim, 2,410m): Ski Trail</h1>\n  <div class=\"w3-card-4\"><img src=\"../../../../assets/armenia-page/pages/12_01.jpg\" alt=\"\"></div>\n  <h3>Description of the ski trail</h3>\n  <p>This ski trail is found in the south of Armenia, in the Vayots Dzor province, near the territory known as 'Zanger' ( Bells), in Syunik. The trail begins at the Vorotan Mountain pass (2,344m). The peculiarity of the trail is that the ascent up the mountain is shorter than the descent. The 8km long trail is situated between the villages of Saravan and Gorayk. There are no mountain peaks along the way, just skiing in the Vorotan Mountains with its’ wonderful views.</p>\n  <h3>You can also visit:</h3>\n  <p>Khor Virap (Ararat province), and Noravank (Vayots Dzor province).The Vorotan Mountain Pass is situated in the Vayots Dzor province of Armenia, north of the Zangezur Mountain range. Amulsar Mountain (2,988m) is located near the Vorotan Mountain Pass. The Yerevan-Yeghegnadzor-Sisian highway also crosses through the Vorotan Mountain Pass.</p>\n  <h3>Khor Virap</h3>\n  <p>Historical city of Artashat.  As stated by Agatangeghos, King Trdat III had sent Grigor (Gregory) Lusavorich to the Artashat royal prison during the persecution of Christians, where he stayed for about 14 years. After leaving Khor Virap, with the support of the King, G. Lusavorich declared Christianity as the state religion. In the 5th century, a monastery was founded on Virap. Since the 13th century, Khor Virap has also been used as a pan-Armenian education and science center, along with being a valuable sanctuary. It now houses more than 10 written manuscripts</p>\n  <h3>Noravank</h3>\n  <p>At the beginning of the 13th century, Noravank was the spiritual center of Syunik, and the family mausoleum of the Orbelyan dynasty. The architect, Siranes, worked in the monastery during the second half of the 13th century, and the famous miniaturist painter, sculptor and architect, Momik, worked there at the beginning of the 14th century.</p>\n  <h6>A fact</h6>\n  <p><em>The oldest one-piece leather shoe found in Areni </em> In 2008, the oldest single-piece of leather shoe in the world was found in the Areni-1 cave, in Vayots Dzor province. The shoe is about 5,500 years old. Similar shoes were used by Irish natives up until about 50 years ago. Scientists from Armenia, Ireland, the USA, Israel and the UK have examined the shoe. The age of the shoe was determined in the laboratories of Oxford and California, and showed that the shoe was made around 3,500 BC, during the&nbsp;Chalcolithic&nbsp;period or&nbsp;Copper&nbsp;Age. During the examination, the shoe was filled with dry grass, the purpose of which is still not clear to scientists yet. The shoe is of a European size 37. It is already housed in the History Museum of Armenia, and is in need of conservation. Older shoes (sandals) have been found in a Missouri cave, in the USA, but they were made of plant material.</p>\n  <h3>Fauna</h3>\n  <p>During the winter, you may come across bears, wolves, foxes and wild rabbits on the slopes of the mountains. At the end of winter, you will probably see eagles, flying very low. There are many eagles during the summer and autumn months, here.</p>\n  <h3>Safety</h3>\n  <p>Ucom and Viva Cell-MTS networks are partially available between the highway to the peak of the Vorotan Mountain Pass. In case of emergency, call 911, a service available throughout Armenia.</p>\n  <table class=\"table table-hover\">\n    <thead>\n      <tr>\n        <th>Technical specifications of the ski trail</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>The best time:</td>\n        <td>\n          January, February, March\n        </td>\n      </tr>\n      <tr>\n        <td>The distance of the skiing tread </td>\n        <td>\n        8km.\n        </td>\n      </tr>\n      <tr>\n        <td>The duration of skiing</td>\n        <td>\n         2 hours and 19min.\n        </td>\n      </tr>\n      <tr>\n        <td>\n          The area is located 2,330-2,730m meters above sea level\n        </td>\n        <td>\n          The best drink to have on hand is warm tea.\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>"

/***/ }),

/***/ "./src/app/pages/armenia/armenia-page12/armenia-page12.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/armenia/armenia-page12/armenia-page12.component.ts ***!
  \**************************************************************************/
/*! exports provided: ArmeniaPage12Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArmeniaPage12Component", function() { return ArmeniaPage12Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ArmeniaPage12Component = /** @class */ (function () {
    function ArmeniaPage12Component() {
    }
    ArmeniaPage12Component.prototype.ngOnInit = function () {
    };
    ArmeniaPage12Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-armenia-page12',
            template: __webpack_require__(/*! ./armenia-page12.component.html */ "./src/app/pages/armenia/armenia-page12/armenia-page12.component.html"),
            styles: [__webpack_require__(/*! ./armenia-page12.component.css */ "./src/app/pages/armenia/armenia-page12/armenia-page12.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ArmeniaPage12Component);
    return ArmeniaPage12Component;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-page01/blog-page01.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page01/blog-page01.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImage img {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.defaultImage {\r\n    margin: 15px 0;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page01/blog-page01.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page01/blog-page01.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mainImage\">\n    <img src=\"../../../../assets/blog-page/pages/01_1.png\" alt=\"\">\n  </div>\n  <h2>Armenian Currency and Prices</h2> <br>\n  <p>Whether you are a tourist or in a long or short business trip, it is always useful to have some preliminary idea about the currency of the host country before you visit.<br>\n  In order to understand how much you can spend on products or services in Armenia, or what is the cash value of this or that monetary unit, we have made this special article with visual appearances and appropriate values of each unit.<br>\n  According to the online reviews in different forums, Armenia is in the list of the most affordable countries of the worrld.<br> \n  So let’s see what is the difference between Armenia and rest of the world in terms of prices.<br><br>\n  Armenian money is called Dram. Like any other country we have coins and banknotes. The first series of Armenian coins was introduced in 1994 including the smallest amount Luma. The second series was introduced in 2004 and excluded Lumas. The only coin unit since 1994 that remained in circulation till now is 10 AMD.<br>\n  The first series of banknotes was issued in November 1993. It was withdrawn from circulation by 2005. The second series was issued from 1998 which is still in use at present.<br><br></p>\n  <h4>10 Drams</h4>\n  <p>10 AMD almost equals to 0.020 USD. Being the smallest unit, it is not of a great value and the only thing you will buy with it is the single match, that hasn’t changed its price for the last 20 years. We have two types of this coins both of which are in use and are made of aluminum alloy. The coin has been used since 1994 and on the obverse side there is the Armenian Coat of Arms.</p><br>\n  <div class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_2.jpg\" alt=\"\"></div>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_3.png\" alt=\"\"></div>\n  <h3>20 Drams</h3>\n  <p>20 AMD almost equals to 0.04 USD. It is the second smallest unit of Armenian Drams. There is nothing among products corresponding to this price, except 2 matches. :)It is made of copper plated steel and has the Armenian Coat of Arms on the obverse side. It has been in the circulation since 2004.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_4.jpg\" alt=\"\"> </div>\n  <h3>50 Drams</h3>\n  <p>50 AMD equals to 10 cents. There are few thing with this price: a single chewing gum, or a balloon, disposable plates or cups. Usually this coin has the Armenian Coat of Arms on the obverse side, but the new editions have also come with cultural monuments like Khor Virap, a prominent Armenian monastery, or Sanahin monastery, as well as famous statues of Yerevan. The coin has been released in 2003 and is made of brass plated steel.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_5.jpg\" alt=\"\"> </div>  \n  <h3>100 Drams</h3>\n  <p>100 AMD equals to 20 cents. What can you do in Armenia with 100 AMD? First of all you can transfer from one place to another using public transportation inside the city. Both minibuses and metro will cost you 100 AMD per seat, per way and you will have the advantage to use them from early morning till late at night.  The smallest size of bread, pies, cookies, a bottle of water, cold coffee or tea in supermarkets can also be bought for 100 AMD. It is made of nickel plated steel and on the obverse side has the Armenian Coat of Arms.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_6.jpg\" alt=\"\"> </div>  \n  <h3>200 Drams</h3>\n  <p>200 AMD equals to 40 cents. It is enough to buy soft drinks, yogurt, big size bread, candies, cookies, pack of chewing gum, pocket napkins wet or dry, round trip metro tickets, etc. It is in circulation since 2003 and is made of alloy of copper, aluminum and nickel. Like most of the coins it has the Coat of Arms from back.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_7.jpg\" alt=\"\"> </div>\n  <h3>500 Drams</h3>\n  <p>500 Drams is the closest equivalent of 1 American dollar. It has a very unique design being made of different subtracts. The inner ring is a mixture of copper and nickel, the outer ring is an alloy of copper, aluminum and nickel. The best example of what you can buy with 500 AMD in Armenia will be either a regular pack of cigarette or a bottle of bear. A pack of rise, pasta, 1 kg of sugar, a milk, 6 eggs or a good candy bar will also be possible to buy with 500 AMD. You can order a portion of french fries in some cafes or have an ice cream in the ice cream shop. It is in use since 2003 and the coat of Arm covers only the inner ring of the coin.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_8.jpg\" alt=\"\"> </div>  \n  <h3>1000 Drams</h3>\n  <p>The banknote equivalent to 1000 AMD is almost equal to 2 American Dollars. It will be enough to buy a Shawarma and a coke. The front page represents a picture of old Yerevan and on obverse side famous Armenian writer Yeghishe Charets is pictured. It was issued on 1999.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_9.jpg\" alt=\"\"> </div>  \n  <h3>5000 Drams</h3>\n  <p>The banknote equivalent to 5000 AMD is almost equal to 10 American Dollars. A regular hostel with or without breakfast can be booked for this amount in Yerevan (per night per person). Among entertainment activities you can afford playing a bowling for an hour with 5000 AMD. On the front page you can see the picture of another prominent Armenian writer Hovhannes Toumanyan. The obverse side introduces a landscape from Lori from Martiros Saryan’s paintings. The banknote was issued on 2000.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_10.jpg\" alt=\"\"> </div>  \n  <h3>10000 Drams</h3>\n  <p>The banknote equivalent to 10000 AMD is almost equal to 20 American Dollars. In the front page is the image of Avetik Isahakyan: a writer, story teller and a great Armenian poet. The obverse side is introduced through the glimpse of second largest Armenian city-Gyumri. The banknote is in use since late 2003.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_11.jpg\" alt=\"\"> </div>  \n  <h3>20000 Drams</h3>\n  <p>The banknote equivalent to 20000 AMD is almost equal to 50 American Dollars. First page is covered with the image of famous Armenian painter Martiros Saryan, and the opposite side is introduced through an episode from his Armenia landscape. It was released on late 2003.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_12.jpg\" alt=\"\"> </div>  \n  <h3>50000 Drams</h3>\n  <p>The banknote equivalent to 50000 AMD is almost equal to 100 American Dollars. On the first page you will see the Ejmiatsin Cathedral and symbols of Christianity. The obverse side is represented through the scene of St. Gregory the Illuminator and king Tiridates who rise up the Armenian Church and on the right you will notice a khachkar from Kecharis Monastery. The banknote was issued in 2001.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_13.jpg\" alt=\"\"> </div>  \n  <h3>100000 Drams</h3>\n  <p>The banknote equivalent to 100.000 AMD is almost equal to 200 American Dollars. It the most recent released edition among all banknotes. The front page is represented by the picture of historical Armenian ruler Abgar V of the Edessa, and on the backward you will see a scene from bible, where St. Thaddeus transfers the painting of Jesus Christ (painted alive) to Abgar V of Edessa. The banknote was released on 2009.</p>\n  <div  class=\"\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/01_14.jpg\" alt=\"\"> </div>  \n</div>"

/***/ }),

/***/ "./src/app/pages/blog/blog-page01/blog-page01.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/blog/blog-page01/blog-page01.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogPage01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage01Component", function() { return BlogPage01Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BlogPage01Component = /** @class */ (function () {
    function BlogPage01Component(route) {
        this.route = route;
    }
    BlogPage01Component.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.header = this.route.snapshot.params['header'];
    };
    BlogPage01Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page01',
            template: __webpack_require__(/*! ./blog-page01.component.html */ "./src/app/pages/blog/blog-page01/blog-page01.component.html"),
            styles: [__webpack_require__(/*! ./blog-page01.component.css */ "./src/app/pages/blog/blog-page01/blog-page01.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BlogPage01Component);
    return BlogPage01Component;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-page02/blog-page02.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page02/blog-page02.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImage img {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.defaultImage {\r\n    margin: 10px 0;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page02/blog-page02.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page02/blog-page02.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mainImage\"> <img src=\"../../../../assets/blog-page/pages/02_01.jpg\" alt=\"\"> </div>\n  <h2>Walking Route in Yerevan</h2><br>\n  <p>First time in Armenia? Wish to explore the city and don’t know where to start? Here is your cheat sheet!</p><br>\n  <h4>Grigor Lusavorich church</h4><br>\n  <p>You can start your tour from Grigor Lusavorich church, which is located in Yervand Kochar street.</p><br>\n  <p>The church was built by Catholicos Vazgen the First’s initiative and was dedicated to the 1700th anniversary of adopting Christianity as a state religion. Catholicos has personally put a plaque at the site of construction of the cathedral. <br>\n    The monastery consists of three churches. In front of the entrance of the church you will see the belfry and vestibule with more than 30 arches. Vestibule houses the relics of St. Gregory the Illuminator, which Garegin II brought from St. Gregory Armenian church of Naples. The halls for receptions and church-related activities are in the lower floor of the church. It is the biggest among the churches of Armenia having approximately 3,822 square meter complex area, and the highest point of the cathedral cross the floor is 54 meters high. <br>\n    The opening ceremony of the church took place in 2001.\n  </p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_02.jpg\" alt=\"\"></div>\n  <p>Down the church toward Tigran Mets street there is a small entertainment park and the statue of Zoravar Andranik. As your route passes through the park you may want to have a quick look around and shot few nice photos on this marvelous background.</p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_03.jpg\" alt=\"\"></div>\n  <p>Continuing your route through Tigran Mets you will enter Republic Square in 5-7 minutes.</p>\n  <h4>Republic Square</h4>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_04.jpg\" alt=\"\"></div>  \n  <p>Main project of the Square was created by the architect Alexander Tamanyan in 1924, constructed in 1926-1958, and from 1940 to 1990 was called Lenin Square. <br><br>\n    The Square is imposed by 5 magnificent buildings. Those are the Government Building, Ministery of Trade and Communications, Ministry of Foreign Affairs, Armenia Marriott hotel and the building of History Museum and National Art Gallery of Armenia. <br>\n    Behind the fountain stands the building of  History Museum and National Art Gallery of Armenia. Facade and colonnade show off with their symmetry. The first floor was built by Tamanyan and includes the History Museum of Armenia. The collection of prehistoric and Asia Minor artifacts gathered under this roof can be classified as the best in the world. The upper floors of the building were constructed in later period. <br>\n    This is how the Square looks.\n  </p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_05.jpg\" alt=\"\"></div>\n  <p>You might want to come back in the evening to enjoy the beautiful songs and erratic fountain jumps along with locals and tourists from all over the world.</p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_06.jpg\" alt=\"\"></div>\n  <h2>Vernisaj</h2><br>\n  <p>Are you one of those who grab a souvenir in every country visited? If yes, then this is the high time! <br>\n    Turn right on the corner of the building with clock in the facade and in 3 minutes you will see the market where you will find all Armenian style, handmade or other creative gifts, decors with flexible prices and  for any taste. <br>\n    After you get your memento from Armenia, turn back and walk toward Republic square untill you get to Abovyan street. Rising up through Abovyan you will enter Northern avenue in 3 minutes.\n  </p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_07.jpg\" alt=\"\"></div>\n  <h2>Northern avenue</h2><br>\n  <p>Northern Avenue is a 500 meter street in downtown Yerevan. It links the Opera House and the Republic Square.  Avenue includes apartments, restaurants, shops and offices. The main architect of the Northern Avenue was Alexander Tamanyan. Later it was redrafted by the architect Jim Torosyan. <br>\n    Even from the other side of the Avenue you will notice the grave building of Opera house, where you are heading to.\n  </p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_08.jpg\" alt=\"\"></div>\n  <h2>Opera house</h2><br>\n  <p>The Armenian National Opera &amp; Ballet Theatre after Alexander Spendiaryan was founded in 1933.&nbsp;The chief architect was again Alexander Tamanyan.&nbsp;It consists of two concert halls: the Aram Khatchaturian concert hall&nbsp;with 1,400 seats and the Alexander Spendiaryan Opera and Ballet National Theatre with 1,200 seats. The first performance was &nbsp;“Almast” opera by Alexander Spendiaryan, which premiered on January 20, 1933.&nbsp;Since it was opened, the Armenian National Opera &amp; Ballet Theatre has performed more than 200 different operas and ballets by Armenian, Russian and Western European composers. The theatre was represented in more than 20 countries. </p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_09.jpg\" alt=\"\"></div>\n  <p>After having a look to this excellent conformation, you can turn righ and face to a small spiffy lake in the heart of Yerevan.</p>\n  <h4>Swan Lake</h4><br>\n  <p>Peaceful place, lot of youth and many colors. This is what makes this place so unique in the city hassle. It is also the place where Kyne West performed his amazing show while being in Armenia.</p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_10.jpg\" alt=\"\"></div>\n  <p>On the other side of the lake you will find the statue of famous Armenian composer and pianist Arno Babajanyan.</p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_11.jpg\" alt=\"\"></div>\n  <p>Bypassing the opera house either from left or right you will get to the French Squar</p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_12.jpeg\" alt=\"\"></div>\n  <p>Turning left and crossing the street you will find yourself in front of the Cascade. First thing you will see in Cascade is the statue of Alexander Tamanyan.</p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_13.jpg\" alt=\"\"></div>\n  <h4>Cascade</h4><br>\n  <p>The Cascade&nbsp;is a giant stairway in Yerevan. It links the downtown Kentron area of Yerevan with the Monument neighborhood. The construction of the cascade designed by architects Jim Torosyan,&nbsp;Aslan Mkhitaryan, Sargis Gurzadyan was launched in 1971 and completed in 1980. On the first floor of the stairs&nbsp;indide the building&nbsp;you can find Cafesjian Museum of Art. You may rise up the stairs or use the elevator inside to get to the top. In case you use the elevator, come out in each floor to enjoy the aesthetic pleasure of the design and have the magnificent view of the city.</p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_14.jpg\" alt=\"\"></div>\n  <h4>Mother Armenia</h4><br>\n  <p>Perhaps you noticed a statue in the distance while you were in French Square. It was mother Armenia –&nbsp;a female personification of Armenia in a&nbsp;visual rendering of a monumental statue. In the end of cascade stairs you will find another entertainment park on the end of which you will see&nbsp;the statue proudly looking at the city.<br>\n    The Mother Armenia statue symbolizes peace through strength.&nbsp;Its location on a hill overlooking Yerevan makes it look like a guardian of the Armenian capital. Mother statue is there since&nbsp;spring 1962, replacing&nbsp;the statue of Stalin. The statue&nbsp;is&nbsp;designed by Ara Harutyunyan.\n  </p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_15.jpg\" alt=\"\"></div>\n  <p>Tired and impressed by what you have seen during your city trip? You are lucky to be on the right place. There is a small cozy cafe called EL Garden on the park. You can enjoy your evening meal there and if you still have the energy to go on with the trip, you can take the random taxi and return back to Republic Square to enjoy Arno Babajanyan’s music and the daft dance of fountains. Taxi will cost you no more than 3 usd.</p>\n  <div class=\"defaultImage\" ><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/02_16.jpg\" alt=\"\"></div>\n  \n</div>"

/***/ }),

/***/ "./src/app/pages/blog/blog-page02/blog-page02.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/blog/blog-page02/blog-page02.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogPage02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage02Component", function() { return BlogPage02Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPage02Component = /** @class */ (function () {
    function BlogPage02Component() {
    }
    BlogPage02Component.prototype.ngOnInit = function () {
    };
    BlogPage02Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page02',
            template: __webpack_require__(/*! ./blog-page02.component.html */ "./src/app/pages/blog/blog-page02/blog-page02.component.html"),
            styles: [__webpack_require__(/*! ./blog-page02.component.css */ "./src/app/pages/blog/blog-page02/blog-page02.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPage02Component);
    return BlogPage02Component;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-page03/blog-page03.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page03/blog-page03.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImage img {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.defaultImage {\r\n    margin: 15px 0;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page03/blog-page03.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page03/blog-page03.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mainImage\"><img src=\"../../../../assets/blog-page/pages/03_01.jpg\" alt=\"\"></div>\n  <h2>World’s Oldest Shoe Found in Armenia</h2><br>\n  <p>&nbsp;</p>\n  <p>One more time in a history world’s attention was driven into the small mountainous country located in Eastern Europe. The reason was the ancient shoe found in one of the villages of Armenia.<br>\n    The shoe, which was found in September 2008 in Areni village, dates back to more than five thousand five hundred years. This is evidenced by independent expert studies carried out by four different research centers.&nbsp;The archaeologists said that the shoe is&nbsp;most likely&nbsp;made from the &nbsp;single piece of&nbsp;cowhide. There are lot of ancient shoes in the world, and although we can not say that ours is the oldest, but for sure it is &nbsp;the only complete&nbsp;sole&nbsp;leather-made oldest model in the world. Shoes found in Europe are totally&nbsp;different from&nbsp;the one found in Areni.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/03_02.jpg\" alt=\"\"></div>\n  <p>The world famous&nbsp;shoe was found by Diana Zardaryan, who was a PhD student at the Institute of Archaeology and Ethnography. Diana remembers that&nbsp;on 16 September 2008 she entered the cave with strange intuition. Later on that day she became the first man who picked up oldest shoe in the world.<br>\n    The Archaeological excavations in Bird’s cave had started in&nbsp;summer&nbsp;2007.&nbsp;They were carried out &nbsp;by the Institute of&nbsp;Archaeology and Ethnography of the National Academy of Sciences, and by American and Irish archaeologists.&nbsp;During&nbsp;the next &nbsp;three years archaeologists found dried fruits, vegetable residues, textiles, pottery, wine casks that date back to BC 4200-3500. &nbsp;All this findings had survived thanks to the favorable micro climate of the cave.\n  </p>\n  <p>On the day of discovery archaeologists first found large amount of reeds at the bottom of the cave, then noticed a hole with about 45 cm radius, the inner side of which was covered with fine yellow clay. In the hole there were also goat’s horns&nbsp;placed crosswise and an orange pot with&nbsp;50 cm radius placed&nbsp;upside down, 1/3 of which was broken. Under it laid the shoe which would later be considered the oldest in the world.</p>\n  <p>The shoe has an oval shape, made of a single piece of cowhide. The back and front parts of the special cords attached to humans leg.<br>\n    According to scientists, it is sewn into the leg. Its length is 24.5 cm and corresponds to the 37 size by current numbering. The shoe is staffed&nbsp;with grass in order not to lose the form.\n  </p>\n  <p>Archaeologists immediately sent the&nbsp;samples from the&nbsp;shoe to 2 different universities in Oxford and California for examinations. A year later came the sensational results of radiocarbon analysis. Shoe found in Armenia &nbsp;was 5637-5387 years old, much older than the Egyptian pyramids.<br>\n    Previously, the oldest known closed-toe shoes were those belonging to Ötzi, the “Iceman” found in the Austrian Alps in 1991, who died around 5,300 years ago.&nbsp;His shoes were about 300 years younger than the Armenian shoe and had bearskin soles, deerskin panels, tree-bark netting and grass socks.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/03_03.jpg\" alt=\"\"></div>\n  <p>Now the shoe is preserved in the&nbsp;History Museum of Armenia and attracts many of the tourists attention visiting the country. Although the conditions in the museum are maximally tailored to the conditions of the cave, the shoe has dried up a little.<br>\n    It can be found in an exposition with this note on the signboard\n  </p>\n  <h2 style=\"text-align: center;\">THE UNIQUE FIND A<br>\n    5500 -YEAR-OLD LEATHER SHOE</h2>\n  <h3 style=\"text-align: center;\">Areni-1 Cave Complex, Trench 3</h3>\n  <h3 style=\"text-align: center;\">Copper Age, 3600-3500 BC</h3>\n  <p>&nbsp;</p>\n  <div class=\"clear\"></div>\n</div>"

/***/ }),

/***/ "./src/app/pages/blog/blog-page03/blog-page03.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/blog/blog-page03/blog-page03.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogPage03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage03Component", function() { return BlogPage03Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPage03Component = /** @class */ (function () {
    function BlogPage03Component() {
    }
    BlogPage03Component.prototype.ngOnInit = function () {
    };
    BlogPage03Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page03',
            template: __webpack_require__(/*! ./blog-page03.component.html */ "./src/app/pages/blog/blog-page03/blog-page03.component.html"),
            styles: [__webpack_require__(/*! ./blog-page03.component.css */ "./src/app/pages/blog/blog-page03/blog-page03.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPage03Component);
    return BlogPage03Component;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-page04/blog-page04.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page04/blog-page04.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImage img {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.defaultImage {\r\n    margin: 15px 0;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page04/blog-page04.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page04/blog-page04.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mainImage\"><img src=\"../../../../assets/blog-page/pages/04_01.jpg\" alt=\"\"></div>\n  <h2>7 of the Unique Armenian Traditions</h2><br>\n  <h4>1. &nbsp;February 13 – Trndez</h4>\n  <p>Trndez is a holiday with pagan origin and was originally&nbsp;dedicated to Mihr or Tyr, the gods of fire and knowledge, respectively. It was&nbsp;connected with&nbsp;sun/fire worship&nbsp;in ancient pre-Christian&nbsp;Armenia, symbolizing the coming of the spring and fertility.<br>\n    Traditionally, Armenians make a bonfire, go around it and jump over the fire on the evening of February 13 or early on February 14.&nbsp;This is a joyful holiday in all provinces and villages of Armenia, as well as in capital Yerevan, celebrated by young adults, newly-weds and all families in general.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/04_02.jpg\" alt=\"\"></div>\n  <h4>2.&nbsp;February&nbsp;– St. Sargis Holiday</h4>\n  <p>While the whole world celebrates St Valentines day, Armenians have their own holiday called St Sargis, which&nbsp;is celebrated 63 days before the Easter, on a Saturday between the January 18 and February 23. On the morning of the holiday the saint liturgy takes place in all the churches that are named St. Sargis where the ceremony of blessing the youth takes place as well.<br>\n    This&nbsp;is the beloved holiday of young unmarried boys or girls. The process of the holiday is the following: on the eve of February 14th young people eat specifically prepared salty bread and restrain themselves of drinking water. At the night they should see a guy or girl bringing them water in their dreams, who is believed to be their future husband or wife.&nbsp;Although St. Sargis is said to visit the dreams of both sexes, the tradition is more popular among girls and women.<br>\n    According to another tradition it is accepted to put a tray with flour or porridge made from fried flour in the balcony or on the roof of the house waiting for Saint Sargis to come on his white horse and leave the trace of horse-shoe. The person whose tray will have the trace of the horse-shoe, is believed to be lucky on that year and his/her&nbsp;cherished dream will come true in the same year.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/04_03.jpg\" alt=\"\"></div>\n  <h4>3. &nbsp;April 1 – Palm&nbsp;Sunday Tsaghkazard</h4>\n  <p>Armenian Church celebrates Palm Sunday or Tsaghkazard on the previous Sunday of Holy Resurrection, which symbolizes Jesus&nbsp;Christ’s triumphal entry into Jerusalem.<br>\n    People accepted&nbsp;Jesus’es entry with enthusiasm, laying their clothes on the road with olive and palm branches and cheerful shouting.&nbsp;Laying the clothes for Jesus Christ symbolized confessing the sins committed toward him. Trees and branches symbolized special honors and acceptance among people. Olive perceived wisdom, peace, victory and glory.<br>\n    In the morning of Palm Sunday church blesses the olive and willow trees and divides people. Willow twigs are fruitless and symbolize the pagans who became fertile&nbsp;only after&nbsp;accepting Jesus&nbsp;Christ. Softness of the twigs symbolizes humility of Christ’s followers.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/04_04.jpg\" alt=\"\"></div>\n  <h4>4. April&nbsp;– Easter</h4>\n  <p>The Armenian Church calls the final week of Christ’s life on earth Great Week or Holy Week. Holy Sunday is also called Easter Sunday&nbsp;expresses the joy of the Resurrection and the promise of salvation for all humanity. Armenian Christians around the world exchange the Easter greeting:&nbsp;Christ is risen from the dead! Blessed is the resurrection of Christ!&nbsp;Easter Sunday is followed by a period of 40 days, during which there are no saints’ days or fasting days. This period is dedicated to the glory of Christ’s Resurrection and to the 40 days he spent on earth after His Resurrection. The 40th day after the Resurrection is Ascension Day, commemorating his&nbsp;entry into heaven.<br>\n    The symbols of the day are red painted eggs which are special joys for kids.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/04_05.jpg\" alt=\"\"></div>\n  <h4>5.&nbsp;May- Ascension Day (Hambartsum) Navasard</h4>\n  <p>This is a Christian holiday that commemorates Jesus Christ’s ascension into heaven.&nbsp;Ascension Day (Hampartsoum) is the holiday of love and enjoyment, which is celebrated outdoors in the blossom of May, 40 days after Easter.&nbsp;The celebration is also called Jangyulum (‘gyul’ means rose) in Armenia.</p>\n  <p>In ancient times on this day the young ladies were allowed to walk freely in the fields, sing songs, and make acquaintances, which often became crucial in their lives. According to people’s imagination this is the night of miracle. It was celebrated with special songs, flower gatherings, tricky games among youth.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/04_06.jpg\" alt=\"\"></div>\n  <h4>6.&nbsp;July –&nbsp;Transfiguration – Vardavar</h4>\n  <p>Vardavar is a festival in Armenia where people drench each other with water. Although now a Christian tradition, Vardavar’s history dates back to pagan times. I&nbsp;is currently celebrated 98 days (14 weeks) after Easter.<br>\n    As it is common to pour water on everyone around, people are&nbsp;&nbsp;prepared to get to their&nbsp;dates wet and funny.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/04_07.jpg\" alt=\"\"></div>\n  <h4>7.&nbsp;August- Grape Blessing Day</h4>\n  <p>There is this weird holiday in Armenia celebrated on the nearest Sunday of August 15. The grape is the only fruit that has the honor to be blessed before people will start eating it. There is a special ceremony held in churches for blessing.&nbsp;In the Armenian Church grapes are given preference over other fruits as the first fruit of the harvest. This is conditioned by a number of historical and religious circumstances. After the devastating flood, our ancestor Noah planted a vineyard in the valley on the slopes of Mt. Ararat and grew grapes.<br>\n    The rules&nbsp;of the Armenian Church do not prohibit eating grapes before the Blessing, and the tradition of abstaining from eating grapes before the ceremony is rooted in the people, and has become a national habit.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/04_08.jpg\" alt=\"\"></div>\n  <p>&nbsp;</p>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page04/blog-page04.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/blog/blog-page04/blog-page04.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogPage04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage04Component", function() { return BlogPage04Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPage04Component = /** @class */ (function () {
    function BlogPage04Component() {
    }
    BlogPage04Component.prototype.ngOnInit = function () {
    };
    BlogPage04Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page04',
            template: __webpack_require__(/*! ./blog-page04.component.html */ "./src/app/pages/blog/blog-page04/blog-page04.component.html"),
            styles: [__webpack_require__(/*! ./blog-page04.component.css */ "./src/app/pages/blog/blog-page04/blog-page04.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPage04Component);
    return BlogPage04Component;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-page05/blog-page05.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page05/blog-page05.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImage img {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.defaultImage {\r\n    margin: 15px 0;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page05/blog-page05.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page05/blog-page05.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>4 Wineries of Armenia</h2><br>\n  <p>Armenia is a small, landlocked country, located at the southern end of the Eurasian Caucasus. Since Noah’s times the inhabitants of Armenia cultivated wineyards and squizzed&nbsp;the most possible from the land and the fruitage. Among all other achievements Armenians pride themselves with the traditional wine making techniques&nbsp;and their being the owners of the world’s oldest wine.<br>\n    The village that is best known for his wine making traditions&nbsp;is Areni&nbsp;situated in the southwest of Armenia.&nbsp;While exploring caves in Areni in 2011 the archaeologists uncovered a wine press, storage vessels, cups, shriveled grape vines and cultivated seeds which dated back as far as 6000 years.<br>\n    Armenian wine is made from a mix of local grapes and &nbsp;the process of making it completely differs from those in Europe.\n  </p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/05_01.jpg\" alt=\"\"></div>\n  <p>For centuries&nbsp;wine in Armenia was produced using the same painstaking methods, and stored in the traditional karas—a ceramic vessel that is still employed to this day.</p>\n  <p>The peculiarity of Armenian Wine is that you feel what you can not express in words.<br>\n    – Charles Aznavour\n  </p>\n  <p>A quick overview about Armenia’s wineries will give you a clear idea about Armenia’s wine making history.</p>\n  <h4>Armenia Wine</h4>\n  <p>Armenia Wine&nbsp;factory is located in Sasunik village in Aragatsotn and covers 50.000 square feet area. The entire process from grape selection to wine profuction&nbsp;is performed here. Armenia Wine’s sales area network covers&nbsp;the whole RA territory.</p>\n  <p>The address:<br>\n    Nor Sasunik, Aragatsotn Region, Armenia<br>\n    http://www.armeniawine.am<br>\n    info@armeniawine.am\n  </p>\n  <p>How to get there:<br>\n    *<span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\">Take </span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line renderable-component-bold\">Paronyan St</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\"> and </span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line renderable-component-bold\">Victory Bridge</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\"> to </span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line renderable-component-bold\">Athens St</span></span><br>\n    *Take M1 and drive toward Ashtarak<br>\n    *Pass Ashtarak and turn left in 3 minutes<br>\n    *Arrive Sasunik\n  </p>\n  <p><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\">Drive from </span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line renderable-component-bold\">Ashtarak Highway</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\">/</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line renderable-component-bold\">AH81</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\">/</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line renderable-component-bold\">E117</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\">/</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line renderable-component-bold\">M1</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\"> and</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line renderable-component-bold\">M3</span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\"> to </span></span><span class=\"renderable-component\"><span class=\"renderable-component-text renderable-component-text-not-line\">Sasunik</span></span></p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/05_02.jpg\" alt=\"\"></div>\n  <h4>Areni Winery</h4>\n  <p>Areni Wine Factory is a local landmark, producing large quantities of local Areni Wine. The&nbsp;factory was founded on the initiative of The Simonians in the Areni village of Vayots Dzor province with the aim of continuing and enriching ancestral wine making traditions. Since 1994 it has represented to the world number of remarkable wines&nbsp;made&nbsp;of different sorts of grapes.&nbsp; Annually 250,000 bottles are produced in Areni , the half are exported to Russia.</p>\n  <p>The address:<br>\n    Areni village, Vayots Dzor\n  </p>\n  <p>How to get there:</p>\n  <div id=\"group_0_0\" class=\"directions-mode-group closed\" data-groupindex=\"0\" data-hideableid=\"hideable_nontransit_0_0\" data-pathindex=\"0\">\n    <div class=\"directions-mode-group-summary\" data-groupid=\"group_0_0\">\n      <div class=\"directions-mode-group-title\">\n        <div class=\"have_cols\">\n          <div class=\"have_cols__right\">\n            <div class=\"txt__tmp2\">* Take Artashat highway toward Vedi<br>\n            * Take&nbsp;H8 up to Aralez village<br>\n            * Pass Urtsadzor, Shaghap, Lusashogh, Zangakatun, Chiva And Rind villages<br>\n            * Arrive Areni\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/05_03.jpg\" alt=\"\"></div>\n  <h4>Armas Winery</h4>\n  <p>Golden Grape ArmAs was founded in 2007 by Armenak Aslanian, who repatriated to his motherland for the realization of goals that involve the intertwined aspects of family, heritage, culture, and progress, with personal values and responsibilities he maintains as a father, an entrepreneur, and as an Armenian. Alongside his daughters, he preserves an 80-year-old family tradition of wine, naming ArmAs in honor of his grandfather Armenak Aslanian Sr., the original winemaker in the family. He continues to develop ArmAs Estate with a vision to partake in upholding and revitalizing Armenia’s winemaking legacy, in the oldest known area for viticulture and enology.<br>\n    The series of Armas wines are available in most of the supermarkets, hotels, cafes and restaurant’s and pubs of Yerevan.\n  </p>  \n  <p>The address:</p>\n  <div class=\"txt__tmp2\">Golden Grape ArmAs, LLC<br>\n    Nor Yedesia, Aragatsotn Province<br>\n    Legal Address: 18 Aram Khachatryan, 61 apt., Yerevan, RA, 0015<br>\n    Email: info@armas.am<br>\n    Office Phone: +374 11 773774<br>\n    For sales and inquiries: +374 99 009262, +374 55 030442\n  </div>\n  <div class=\"txt__tmp2\"></div>\n  <div class=\"txt__tmp2\">\n    <p>How to get there:</p>\n    <div class=\"have_cols\">\n      <div class=\"have_cols__right\">\n        <div class=\"txt__tmp2\">* Take Ashtarak highway toward Gyumri<br>\n          * Pass Udjan village<br>\n          * On arrival at Nor Yedesia village sign, turn left<br>\n          * Pass under the arch, then take the left turn again<br>\n          * Continue straight until you see ArmAs poster on your right<br>\n          * Turn right and take the red sand road straight to ArmAs Estate gates\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n  </div>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/05_04.jpg\" alt=\"\"></div>\n  <h4>Zorah Winery</h4>\n  <p>Zorah founder – Zorik Gharibian moved to Armenia from Italy in 1998. After long examinations of the ground, territory and grapes he decided to establish his winery in Rind village. The first product was released in 2010 and immediately got world’s attention being marked as one of the 10 best wines in the world. &nbsp;Today the Karasi Areni Noir is the winery’s only wine that is available for purchase. It is exported to the UK, Germany, the Netherlands, Italy, France, the US, the Baltic states, and Russia, and will soon be sold also in Australia and Greece. Among these countries, Gharibian considers the sale to Italy his personal victory. In Armenia, the wine is sold in specialized shops and in a few restaurants, where one bottle costs $80.<br>\n    In Armenia it is only available in&nbsp;“Noah’s House” sales network.\n  </p>\n  <p>The Address:</p>\n  <p>Rind village,&nbsp;Armenia<br>\n    info@zorahwines.com\n  </p>\n  <p>How to get there:</p>\n  <div id=\"group_0_0\" class=\"directions-mode-group closed\" data-groupindex=\"0\" data-hideableid=\"hideable_nontransit_0_0\" data-pathindex=\"0\">\n    <div class=\"directions-mode-group-summary\" data-groupid=\"group_0_0\">\n      <div class=\"directions-mode-group-title\">\n        <div class=\"have_cols\">\n          <div class=\"have_cols__right\">\n            <div class=\"txt__tmp2\">* Take Artashat highway toward Vedi<br>\n              * Take&nbsp;H8 up to Aralez village<br>\n              * Pass Urtsadzor, Shaghap, Lusashogh, Zangakatun and Chiva villages<br>\n              * Arrive Rind\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/05_05.jpg\" alt=\"\"></div>\n  <div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page05/blog-page05.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/blog/blog-page05/blog-page05.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogPage05Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage05Component", function() { return BlogPage05Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPage05Component = /** @class */ (function () {
    function BlogPage05Component() {
    }
    BlogPage05Component.prototype.ngOnInit = function () {
    };
    BlogPage05Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page05',
            template: __webpack_require__(/*! ./blog-page05.component.html */ "./src/app/pages/blog/blog-page05/blog-page05.component.html"),
            styles: [__webpack_require__(/*! ./blog-page05.component.css */ "./src/app/pages/blog/blog-page05/blog-page05.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPage05Component);
    return BlogPage05Component;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-page06/blog-page06.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page06/blog-page06.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImage img {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.defaultImage {\r\n    margin: 15px 0;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page06/blog-page06.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page06/blog-page06.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n<div class=\"mainImage\"><img src=\"../../../../assets/blog-page/pages/06_01.jpg\" alt=\"\"></div>\n<h2>7 most Beautiful Monasteries in Armenia</h2><br>\n<p class=\"sub-head\">Armenia is a home to a complex culture and some of the world’s greatest religious shrines.&nbsp;While planning your trip to Armenia, you will definitely think of&nbsp;including some of the heritages of Armenia’s culture, the bright examples of which are our world famous monasteries. Having this information&nbsp;in your&nbsp;pocket, you will noticeably ease&nbsp;your selection process.</p>\n<h4>Tatev Monastery</h4>\n<div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/06_02.jpg\" alt=\"\"></div>\n<p>Tatev Monastery</p>\n<p>Tatev is a medieval Monastery&nbsp;in Syunik Region, 280 km away from Yerevan. These unique impregnable masterpiece merged with fathomless nature conquers your heart from the very first visit.&nbsp;The fortified Tatev monastery was built between 9-13 centuries and consists of three churches (St. Paul and Peter, St. Gregory the Illuminator and St. Mary), a library, dining hall, belfry, mausoleum as well as other administrative and auxiliary buildings.&nbsp;Aside from the buildings, the monastery boasts an upright pendulum,&nbsp;known as the Gavazan (staff). The Legend tells us that &nbsp;Gavazan sustained even the 1931 earthquake when everything around&nbsp;— the cathedral, St. Grigor Lusavorich Church, the porch and the belfry were destroyed.</p>\n<h4>Noravank Monastery</h4>\n<div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/06_03.jpg\" alt=\"\"></div>\n<p>Noravank is another medieval Armenian monastery&nbsp;located 122 km away from Yerevan&nbsp;and standing at the end of the canyon, surrounded by impressive brick-red cliffs. Even though the name is literally translated as “New Monastery”, it is a 7 centuries old&nbsp;monastic complex, which includes the church of S. Karapet, S. Grigor chapel with an arced hall, and the church of S. Astvatsatsin (Holy Mother of God).<br>\n  A legend tells as a story about Noravank’s origin. According to it there was an architect in Syunik region named Momik, who fell in&nbsp;love with the daugher of Syunik’s governor.&nbsp;As the later was worried about this love between Momik and his daughter, he tried to give him an impossible task, thus trying to get rid of poor architect. He ordered Momik to build a magnificent church within 3 years, and if successfully completed,&nbsp;he would get his daughter as his wife. Momik started building&nbsp;the church eagerly. The years passed and Momik built this divine church complex. The governor&nbsp;was worried about the successful completion of the task and before Momik would finish the construction, he sent a murderer to kill him. The unsuspecting architect&nbsp;was pushed from the roof and died.\n</p>\n<h4>Khor Virap Monastery</h4>\n<div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/06_04.jpg\" alt=\"\"></div>\n<p>Khor Virap Monastery is located on a hillock&nbsp;in Ararat Region about 30km south of Yerevan. Its history dates back from 6th to 17th centuries. It is composed of a deep dungeon where according to the legend Trdat the 3rd imprisoned Grigory the Illuminator for 13 years for preaching Christianity. According to the Legend&nbsp;God then&nbsp;punished Trdat misdeeds by depriving him sanity. Trdat&nbsp;adopted the behavior of a wild boar, aimlessly wandering around in the forest. In her sleep Khosrovidukht, Trdat’s&nbsp;sister had a dream where appeared to her a vision from God telling her to get back from the prison Gregory who will teach the remedy&nbsp;of Trdats ills. This vision is repeated for five times. But no one believed that Gregory would be alive after so many years at the very sight of the snakes. But a Christian woman had taken care of Trdat bringing him a piece of bread each day. So Trdat released Grigori the Illuminator and immediately got recovered from his ills. Trdat rewarded Grigori sending him to Caesaria to be consecrated a bishop. Thus Armenia became the first country to adopt Christianity in 301 AD.&nbsp;Later in 642 Catholicos Nerses built a chapel over the jail-dungeon. From here the most wonderful view of the Mount Ararat can be admired.</p>\n<h4>Geghard Monastery</h4>\n<div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/06_05.jpg\" alt=\"\"></div>\n<h4>Goshavank&nbsp;Monastery</h4>\n<div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/06_06.jpg\" alt=\"\"></div>\n<p>Goshavank is a bright example of Armenain medieval arcitect. Goshavank was built in 1188, adjacent to Getik monastery that was ruined during an earthquake.&nbsp;Nestled in the village of Gosh, it is named after Mkhitar Gosh, who was the founder of the monastery and an Armenian scholar. Afterhis death he was&nbsp;burried in a chapel overlooking to the main church.<br>\n  Goshavank features a main church (Surp Astvatsatsin) and smaller churches to St Gregory of Narek and St Gregory the Illuminator. The tower on the matenadaran (library) was once taller than the main church. With a school attached, the library is said to have held 15,000 books before it was burned by Timur’s army in the 13th century.\n</p>\n<h4>Haghartsin Monastery</h4>\n<div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/06_07.jpg\" alt=\"\"></div>\n<p>Haghartsin is a 13th-century monastery nestled in the woodlands of Dilijan, Tavoush Region.&nbsp; The territory of the medieval monastery is vast and is occupied by St. Gregory church (11 th century), St. Astvatsatsin church (1281), St. Stepanos church (1244), the 13 th – century chapel, the tomb of Bagratids (12 th century), the refectory (1248) and various premises built in the 12 th – 13 th centuries.&nbsp;Located 2 km from the monastery are the ruins of medieval village of Haghartsin.<br>\n  According to the legend&nbsp;the monastery’s name has the roots “hagh” meaning game and “artsiv” meaning an eagle. Going back to the origins, it is said at the monastery’s dedication an eagle was soaring above its dome as if playing around it, and there came the name of the monastery.\n</p>\n<h4>Sevanavank Monastery</h4>\n<div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/06_08.jpg\" alt=\"\"></div>\n<p>Sevanavank is a 9 century monastic complex located in the northwestern shore of Sevan Peninsula. It&nbsp;is comprised of two churches, Surb Arakelots (Holy Apostles) and Surb Astvatsamayr (Holy Mother of God). The architecture of both churches is almost the same; they are made of black tuff in the form of a cross. Surb Astvatsamayr Church used to preserve the most important gifts to the monastery, including 200 manuscripts, 400 printed books, jewelry, crosses, and many other items.<br>\n  According to an inscription found in the territory, the monastery was built by Armenian princess Mariam, daughter of Ashot I, who later became the king of Armenia and the founder of Bagratuni dynasty. Sevanavank is one of the 30 churches that Princess Mariam vowed to build in the memory of her husband. King Ashot I, in his turn, presented six villages and gardens in the territory of today’s Garni and Yerevan to the monastery.\n</p>\n<p>&nbsp;</p>\n<div class=\"clear\"></div>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page06/blog-page06.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/blog/blog-page06/blog-page06.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogPage06Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage06Component", function() { return BlogPage06Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPage06Component = /** @class */ (function () {
    function BlogPage06Component() {
    }
    BlogPage06Component.prototype.ngOnInit = function () {
    };
    BlogPage06Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page06',
            template: __webpack_require__(/*! ./blog-page06.component.html */ "./src/app/pages/blog/blog-page06/blog-page06.component.html"),
            styles: [__webpack_require__(/*! ./blog-page06.component.css */ "./src/app/pages/blog/blog-page06/blog-page06.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPage06Component);
    return BlogPage06Component;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog-page07/blog-page07.component.css":
/*!******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page07/blog-page07.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainImage img {\r\n    width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.defaultImage {\r\n    margin: 15px 0;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/blog/blog-page07/blog-page07.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pages/blog/blog-page07/blog-page07.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"mainImage\"><img src=\"../../../../assets/blog-page/pages/07_01.jpg\" alt=\"\"></div>\n  <h2>Annual Festivals in Armenia</h2><br>\n  <p>During last few years Armenia has developed a strategy of outlining its cultural or traditional events and food peculiarities through festivals. Each year a new unique festival is added to the list of existing ones causing creativity and innovations. The interest among locals and foreigners toward festival is growing parallely with the speed of light. Below is the list of festivals to be held in Armenia in 2016.</p>\n  <p>February 26-27 –&nbsp;«Snowland 2016», skiing festival held in Tsaghkadzor. Organised by Bliss Events.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_02.jpg\" alt=\"\"></div>\n  <p>April – Fish Festival in Abovyan. Organized by the “Development and Preservation of Armenian Culinary Traditions” NGO</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_03.jpg\" alt=\"\"></div>\n  <p>May – Tolma Festival in Armavir, Sardarapat. The goal is to draw attention to&nbsp;Armenian dishes and traditional cuisine. Organized by the&nbsp;“Development and Preservation of Armenian Culinary Traditions” NGO</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_04.jpg\" alt=\"\"></div>\n  <p>June – Ecotourism Festival in Gomq&nbsp;and&nbsp;Martiros communities, Vayots Dzor Region. The aim of the festival is to promote eco-tourism development in Vayots Dzor and raise public awareness about it.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_05.jpg\" alt=\"\"></div>\n  <p>June – sheep shearing festival in Halidzor village. Organized by&nbsp;IDeA Foundation.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_06.jpg\" alt=\"\"></div>\n  <p>June- “Bread in the Mountains” festival. The goal is to get to know the culture and history of baking bread and the rituals connected with the Armenian people. Organized by the “Development and Preservation of Armenian Culinary Traditions” NGO</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_07.jpg\" alt=\"\"></div>\n  <p>June &nbsp;– Mulberry Festival. 3rd Saturday of June, near the Amaras monastery in Artsakh. Beginning at 5:00 pm. Organized by Areni Foundation.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_08.jpg\" alt=\"\"></div>\n  <p>July &nbsp;– “Syunik’s Goods” festival in Goris. &nbsp;Will be held in the first Saturday of July (02.07.2016), starts&nbsp;at 1:00 pm. During the festival different communities present their products, traditional dishes. Organized by Areni Foundation.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_09.jpg\" alt=\"\"></div>\n  <p>July -Will be held in the first week of July in Goris, Syunik Region. The aim&nbsp;is the introduction of mulberry vodka and tasting.</p>\n  <p>July – Armenian&nbsp;Taraz&nbsp;festival. Sarnaghbyur village. The participants will be introducing traditional clothes, costumes.</p>\n  <p>July- Golden Apricot International Film Festival held in Yerevan. Organized by&nbsp;Golden Apricot International Film Festival http://www.gaiff.am/hy/regulations:</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_10.jpg\" alt=\"\"></div>\n  <p>August- Navasard festival. The aim is to celebrate the pagan New Year. Organized by the “Development and Preservation of Armenian Culinary Traditions” NGO</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_11.jpg\" alt=\"\"></div>\n  <p>August –&nbsp;Carpet Festival held Dilijan, Tavush region. Will take place&nbsp;in the second Saturday of August. The aim of the Festival is to exhibit and trade carpets and other works of folk artists.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_12.jpg\" alt=\"\"></div>\n  <p>August – Honey and Berry Festival held in Berd, Tavush region. The goal is to savor and sell various types of honey and berries, as well as drinks made of them.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_13.jpg\" alt=\"\"></div>\n  <p>September – Barbecue Festival held in Akhtala, Lori region. Organized by “Development and Preservation of Armenian Culinary Traditions” NGO</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_14.jpg\" alt=\"\"></div>\n  <p>September – “Gata” festival held on the last Saturday of September in Khachik village, Vayots Dzor region. It will start at 12:00, (residents will present traditional dishes of national cuisine, you can taste the most toothsome&nbsp;gata, enjoy songs, folk dances). Organized by Areni Foundation.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_15.jpg\" alt=\"\"></div>\n  <p>September – “Wine” festival held in Rind village Vayots Dzor Region on the&nbsp;last week of September. It will start at 5:00 pm. Festival will illustrate&nbsp;traditional method of grape processing, homemade vodka tasting, folk songs, dances.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_16.jpg\" alt=\"\"></div>\n  <p>October – International Theater Festival held in Yerevan. Theater groups from different countries take active part in this annual festival. It has been organised for 7 times by now.</p>\n  <p>October – Wine Festival held in Areni village, Vayots Dzor. It will start at 1:00 pm. The aim of the festival is to introduce home-made wine, folk dances, songs, games, traditional methods of wine making, flashmob dance, wine production in the parade. Festival will last until 20:00. Organized by Areni Foundation.</p>\n  <p>&nbsp;</p>\n  <p>October – Duduk Festival. Gyumri.</p>\n  <div class=\"defaultImage\"><img class=\"w3-border w3-padding\" src=\"../../../../assets/blog-page/pages/07_17.jpg\" alt=\"\"></div>\n  <p>October &nbsp;– Erebuni-Yerevan Festival.&nbsp;In 2016 Yerevan celebrates its 2798 anniversary.</p>\n  <div class=\"clear\"></div>\n</div>"

/***/ }),

/***/ "./src/app/pages/blog/blog-page07/blog-page07.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/blog/blog-page07/blog-page07.component.ts ***!
  \*****************************************************************/
/*! exports provided: BlogPage07Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogPage07Component", function() { return BlogPage07Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BlogPage07Component = /** @class */ (function () {
    function BlogPage07Component() {
    }
    BlogPage07Component.prototype.ngOnInit = function () {
    };
    BlogPage07Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-blog-page07',
            template: __webpack_require__(/*! ./blog-page07.component.html */ "./src/app/pages/blog/blog-page07/blog-page07.component.html"),
            styles: [__webpack_require__(/*! ./blog-page07.component.css */ "./src/app/pages/blog/blog-page07/blog-page07.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BlogPage07Component);
    return BlogPage07Component;
}());



/***/ }),

/***/ "./src/app/pages/tours/tours-page01/tours-page01.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page01/tours-page01.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\nul {\r\n    display: block;\r\n    list-style-type: disc;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    -webkit-padding-start: 40px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/tours/tours-page01/tours-page01.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page01/tours-page01.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Mountain Biking Tour in Armenia</h1>\n  <div class=\"pt-2\"><img class=\"img-fluid\" src=\"../../../../assets/tours-page/01_02.jpg\" alt=\"\"></div>  \n  <ul class=\"gdl-tab-content\">\n    <li data-tab=\"tab-0\" class=\"active\" style=\"display: list-item;\">\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n\n\n    <hr>\n\n    <p><strong>Overview</strong></p>\n\n    <p><strong>Duration:&nbsp;</strong>11 days/10 nights<br>\n    <strong>Beginning:</strong> Yerevan<br>\n    <strong>Ending:</strong> Yerevan<br>\n    <strong>Best season: </strong>From June to September<b><br>\n    <strong>Location:&nbsp;</strong></b>Armenia<br>\n    <strong>Price:&nbsp;</strong>€1150 per person ( In case of 2 persons)<br>\n    <strong>Accommodation:&nbsp;</strong>Tourist hotels,<br>\n    <strong>Food:&nbsp;</strong>Breakfasts, Lunches<br>\n    <strong>Mode of travel:&nbsp;</strong>&nbsp;4WD vehicles, minibuses/biking<br>\n    <strong>Number of people:</strong> Tour is available starting from 2 person<br>\n    <strong>Included:&nbsp;</strong>Accommodation for tourist hotels<br>\n    Breakfasts, lunches<br>\n    All transfers,<br>\n    All activities as per itinerary with all entry fees<br>\n    Travel permits in protected areas<br>\n    Guiding service, local guides in museums<br>\n    <strong>Excluded:&nbsp;</strong>Optional activities</p>\n    </li>\n\n    <hr>\n\n    <p><strong>Package Details</strong></p>\n\n    <li data-tab=\"tab-1\" class=\"\">\n    <p><strong>Day 1,</strong></p>\n    <p><span style=\"color: #000000;\"><strong>Arival and Meeting at Zvartnots Airport. Transfer to hotel.</strong></span></p>\n    <p><span style=\"color: #000000;\"><strong>Day 2: Yerevan – Garni – Geghard – “Khosrov” national park – Yerevan</strong></span></p>\n    <p><span style=\"color: #000000;\">Breakfast at hotel. cycling to Garni Pagan Temple and Geghard Monastery.</span></p>\n    <p><span style=\"color: #000000;\">The pagan temple of Garni was built in 1st. c. AC. After Armenia converted to Christianity in the 4th c., the rulers of the country used the temple as their summer residence. We will see the renovated temple of Sun, ruins of the palace and Roman baths. Proceed to Geghard Monastery (UNESCO World Heritage site). We continue on bikes to “Khosrov” national park.We reach Khosrov reserve where there are more than 1,800 plant species worthy of protection and there are 30 species of reptiles. Endemic animals like the Armenian mouflon and &nbsp;bezoar &nbsp;goats here are on the verge of extinction. We walk through picturesque places along Azat river to nearly overgrown paths, surrounded by thorny bushes. Here you cannot stay indifferent to the colorful butterflies which will lead us to the next natural watercourse river which is perfect for swimming. We see wild birds and admire the colorful lizards on the rocks. Overnight at hotel in Yerevan.</span></p>\n    <p><span style=\"color: #000000;\">Bike ride 60km, bus transfer 40km, Altitude 900-1700-900m</span></p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    <p><span style=\"color: #000000;\"><strong>Day 3.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Yerevan-Sevaberd-Gavar-Sevan&nbsp; (Bike from Sevaberd to Gavar)</strong></span></p>\n    <p><span style=\"color: #000000;\">After breakfast we trip by bus to Sevaberd village and stop near ancient castle in Sevaberd&nbsp; which is call Black castle (10<sup>th</sup> century). We start our bike trip at the foot of Geghama Mountains. The road passes through alpine meadows covered with colorful flowers, whose aroma spreads everywhere. Our trip accompanied by songs of different birds, sometimes we will heard nomad’s songs and will look sheep’s and cows unhurried steps. Later we have a beautiful view from the hidden lake Akna where we will stop for lunch. &nbsp;In the afternoon, we will continue our bike tour throw mountain way to the Lake Sevan. Overnight at hotel Blue Sevan.</span></p>\n    <p><span style=\"color: #000000;\">Bike ride 40km, bus transfer 80km, Altitude 2200-3050-1925m</span></p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    <p><span style=\"color: #000000;\"><strong>Day 4</strong>&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;<strong>Sevan-Dilijan -Ijevan mountain</strong> <strong>range</strong>–<strong>Dilij</strong><strong>a</strong><strong>n</strong></span></p>\n    <p><span style=\"color: #000000;\">After breakfast at the hotel we will start our biking trip to the Ijevan mountain range. The road runs along a lake,&nbsp; after the&nbsp; winding throw forest&nbsp; way we descend to the town of Dilijan, which is consider little Switzerland. We take our bikes with big track to the closer of mountain and will continue from there by bike to the top of the Ijevan mountain range. From here you will hear low-flying eagles cry, the sounds of the rivers and waterfalls. Also, from the top it will open picturesque view to the Dlijan National Park, deep and rocky gorges. Overnight at Dilijan (Guesthouse).</span></p>\n    <p><span style=\"color: #000000;\">Bike ride 50km, bus transfer 50km, Altitude 1925-2300-1300m</span></p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    <p><span style=\"color: #000000;\"><strong>Day 5 Dilijan -Geghaqar-Mets Al Lake- Jermuk</strong></span></p>\n    <p><span style=\"color: #000000;\">After a delicious breakfast we will take the bus to the Geghakar village, where we start our biking trip to the Al lakes. The road runs through a notch in the mountain Porak lava plateau, where you will “feel” the smell of the fight of fire and water. Throw the mountains unexpectedly will open the silvery scene of Al lakes. Admiring the scenery and turn around the lakes we will ride down to Jermuk, which is considered &nbsp;summer and winter resort in Armenia.We have the opportunity to swim in the hot springs of Jermuk. Accommodation in Jermuk.</span></p>\n    <p><span style=\"color: #000000;\">Bike ride 45km, bus transfer 120km, Altitude 1300-2850-2100m</span></p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    <p><span style=\"color: #000000;\"><strong>Day 6 Jermuk –Sisian</strong></span></p>\n    <p><span style=\"color: #000000;\">Today&nbsp; our trip passes &nbsp;through the main highways, ups and downs and it due to the transition to Vorotan Pass (2344m),&nbsp; then our road passes&nbsp; through the&nbsp; snow covered mountains , whereupon&nbsp; we will reach to Sisian. Overnight in Sisian.</span></p>\n    <p><span style=\"color: #000000;\">Bike ride 70km, bus transfer 0 km, altitude 2100-2344-1600m</span></p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    <p><span style=\"color: #000000;\"><strong>Day 7.Jermuk-Shenatagh -Svarants-Tatev-Goris</strong></span></p>\n    <p><span style=\"color: #000000;\">After breakfast we have a little&nbsp; transfer by bus, then we continue our trip to the high slopes of Bargushat mountain range where you will see small villages, plantations spread&nbsp; in the mountains. Turning the nice slopes of &nbsp;Mount Aramazd (3379m) we ride down to the Tatev Monastery, founded in the IV century, is considered the spiritual and cultural education center in the Middle Ages. Overnight in Goris.</span></p>\n    <p><span style=\"color: #000000;\">Bike ride 40km, bus transfer 15 km, altitude 1600-2500-1330m</span></p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    <p><span style=\"color: #000000;\"><strong>Day 8&nbsp; Goris-Noravank-Khor Virap-Yerevan</strong></span></p>\n    <p><span style=\"color: #000000;\">In the morning, we will continue our trip partly by bike and partly by bus until we reach the Noravank Monastery. Noravank monastery church was founded in XIII-XIV centuries, this complex architecture and sculptures by well-known architect Momik. It is considered the spiritual center of Syunik 14th centuries. We continue our tour to Ararat region and we will find Khor Virap’s monastery, which is notability as a monastery and pilgrimage site is attributed to the fact that Grigor Lusavorich, who later became&nbsp;<a style=\"color: #000000;\" href=\"https://en.wikipedia.org/wiki/Saint_Gregory_the_Illuminator\">Saint Gregory the Illuminator</a>, was initially imprisoned here for 14 years by King&nbsp;<a style=\"color: #000000;\" href=\"https://en.wikipedia.org/wiki/Tiridates_III_of_Armenia\">Tiridates III of Armenia</a>.&nbsp;Overnight in Yerevan.</span></p>\n    <p><span style=\"color: #000000;\">Bike ride 60km, bus transfer 180km, altitude 1330-900m</span></p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    <p><span style=\"color: #000000;\"><strong>Day 9 Yerevan-Kari Lake- Amberd</strong></span></p>\n    <p><span style=\"color: #000000;\">After arranging of breakfast, we will reach by bus to the&nbsp; Park of Letters(Armenian alphabet ), where we&nbsp; start our biking tour to the Lake Kari (3200) m: you will can see and admire the image of Mount Aragats. Then ride&nbsp; down to Amberd fortress taking the right side of the Amberd river. Amberd medieval fortress&nbsp; was built in the 10th century. The road will continue to the highway, from where by bus we return to Yerevan. Overnight in Yerevan.</span></p>\n    <p><span style=\"color: #000000;\">Bike ride 40km, bus transfer 100km, altitude 900-3200-900m</span></p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n    <div class=\"scroll-top\"></div>\n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    <p><span style=\"color: #000000;\"><strong>Day 10 City tour in Yerevan </strong></span></p>\n    <p><span style=\"color: #000000;\">&nbsp;After breakfast we will start our wonderful trip around the capital of Armenia, Yerevan. The first day includes visiting Museum of history of Armenia which is the national museum of&nbsp;Armenia founded in 1919.Then we will have a walk in Yerevan and we will just admire the beauty of Yerevan which stretches under the gaze of biblical mountain Ararat. Our tour also includes visiting Erebuni fortress-museum which is a fortified city from the ancient kingdom of&nbsp;Urartu, located in&nbsp;Yerevan. It was one of several fortresses built along the northern Urartian border and was one of the most important political, economical and cultural centers of the vast kingdom. The name Yerevan itself is derived from Erebuni.</span><br>\n    <span style=\"color: #000000;\"> Overnight at hotel in Yerevan.</span></p>\n    <p><span style=\"color: #000000;\"><strong>Day 11 Fly Back</strong></span></p>\n    <p>&nbsp;</p>\n    <div class=\"clear\"></div>\n    <div class=\"gdl-divider gdl-border-x top\">\n      <hr>\n\n      <section class=\"bg-light\">\n          <div class=\"container pb-5\">\n              <div class=\"row\">\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-03.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-03-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-04.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-04-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-05.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-05-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-06.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-06-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-07.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-07-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-08.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-08-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-09.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-09-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-10.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-10-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-11.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-11-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-12.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-12-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-13.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-13-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/01/img-t01-14.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/01/img-t01-14-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n              </div>\n              <hr>\n          </div>\n      </section>\n      \n    </div>\n    <div class=\"clear\" style=\" height:20px;\"></div>\n    </li>\n    </ul>\n</div>"

/***/ }),

/***/ "./src/app/pages/tours/tours-page01/tours-page01.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page01/tours-page01.component.ts ***!
  \********************************************************************/
/*! exports provided: ToursPage01Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPage01Component", function() { return ToursPage01Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursPage01Component = /** @class */ (function () {
    function ToursPage01Component() {
    }
    ToursPage01Component.prototype.ngOnInit = function () {
    };
    ToursPage01Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tours-page01',
            template: __webpack_require__(/*! ./tours-page01.component.html */ "./src/app/pages/tours/tours-page01/tours-page01.component.html"),
            styles: [__webpack_require__(/*! ./tours-page01.component.css */ "./src/app/pages/tours/tours-page01/tours-page01.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToursPage01Component);
    return ToursPage01Component;
}());



/***/ }),

/***/ "./src/app/pages/tours/tours-page02/tours-page02.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page02/tours-page02.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\nul {\r\n    display: block;\r\n    list-style-type: disc;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    -webkit-padding-start: 40px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/tours/tours-page02/tours-page02.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page02/tours-page02.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Climbing Mount Kazbegi</h1>\n    <div class=\"pt-2\"><img class=\"img-fluid\" src=\"../../../../assets/tours-page/02_02.jpg\" alt=\"\"></div>  \n    <ul class=\"gdl-tab-content\">\n      <li data-tab=\"tab-0\" class=\"active\" style=\"display: list-item;\">\n      <div class=\"clear\"></div>\n      <div class=\"gdl-divider gdl-border-x top\">\n      <div class=\"scroll-top\"></div>\n      </div>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n  \n  \n      <hr>\n  \n      <p><strong>Overview</strong></p>\n  \n      <p><strong>Duration:&nbsp;</strong>5 days / 4 nights<br>\n      <strong>Beginning:</strong> Tbilisi<br>\n      <strong>Ending:</strong> Tbilisi<br>\n      <strong>Best season: </strong>From July to 15<sup>th</sup> of September<b><br>\n      <strong>Location:&nbsp;</strong></b>Georgia<br>\n      <strong>Price:&nbsp;</strong>€980 per person ( In case of 2 persons)<br>\n      <strong>Accommodation:&nbsp;</strong>Tourist hotels, mountain shelter<br>\n      <strong>Food:&nbsp;</strong>Breakfasts, lunches, dinner<br>\n      <strong>Mode of travel:&nbsp;</strong>&nbsp;4WD vehicles, minibuses<br>\n      <strong>Number of people:</strong> Tour is available starting from 2 person<br>\n      <strong>Included:&nbsp;</strong> Accommodation for tourist hotels<br>\n      Breakfasts, lunches, dinners <br>\n      All transfers,<br>\n      All activities as per itinerary with all entry fees <br>\n      Travel permits in protected areas <br>\n      English knowing climbing guide <br>\n      Horses for the luggage <br>\n      <strong>Excluded:&nbsp;</strong>Optional activities</p>\n      </li>\n  \n      <hr>\n  \n      <p><strong>Package Details</strong></p>\n  \n      <li data-tab=\"tab-1\" class=\"\">\n      <p><strong>Day 1: Tbilisi to Kazbegi</strong></p>\n      <p><span style=\"color: #000000;\">Transfer from Tbilisi to Stepantsminda (also known as village Kazbegi) located 157 km to the north of Tbilisi at 1740 m above sea level, along the banks of Thergi River. The most notable mountain here is <strong>Mount Kazbeg</strong> that lies to the west of the town. Mt. Shani, 4451m above sea level, is the second most prominent peak, 9 km to the east of Stepantsminda. The climate of the region is known for its relatively dry, cold winters and long, cool summers. The coldest month is January (-5.2 degrees Celsius) and the warmest month is July (14.1 degrees). Stepantsminda is a center for trekkers and mountain climbers, who are looking for adventures in the Grand Caucasus Mountains, especially climbing Mount Kazbek. Mount Kazbek, the 3rd highest mountain of Georgia, is a dormant stratovolcano with elevation of 5033m. It is located in the Khokh Range, which runs north to the Greater Caucasus Range. The name of the mount is given by Russians, who inhabited this part of the <strong>Caucasian Mountain Range.</strong></span></p>\n      <p><span style=\"color: #000000;\"><strong>Day 2: Trek to Meteo Station</strong></span></p>\n      <p><span style=\"color: #000000;\">Our phased conquest of the proud peak of the Caucasus begins with a climb from the village of Kazbeghi up by Darial Gorge to the weather station (we start at 7.00). Transfer by jeep to Sameba Church (2200m) and then walk up to Meteorological Station situated at 3,650 meters, total trekking time from the village to the meteo station is 7-8 h, the degree of difficulty is medium. The weather station is a mountain refuge, a base camp used for overnight and acclimatization (basic amenities).</span></p>\n      <div class=\"clear\"></div>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 3: Acclimatization Treks at Kazbek</strong></span></p>\n      <p><span style=\"color: #000000;\">Before starting the climb of the summit we will have an acclimatization day. Our guide will also help us practice the use of climbing equipment. Acclimatization takes place at the altitude of 4100-4200 meters. The group, accompanied by the mountain guide, will adapt and enjoy the truly incredible views and the healing energy of the mountains. After checking climbing equipment, the team is ready for the climb of the next day.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 4: Mount Kazbek Summit Day</strong></span></p>\n      <p><span style=\"color: #000000;\">The most exciting part of the trip, climbing to the summit of Mount Kazbek (total trekking time 10-12 h, start at the height of 3600 meters, level of difficulty high). The upper slopes of Kazbek are permanently snow-covered and present a challenging objective for every mountaineer. Start at 2am and walk to the Plateau at 4500m (4 hours), then Plateau to Saddle (4900m at 30 degrees), from Saddle to Summit at 40-45 degrees, use of ice axes and fixed ropes. Return to Meteorological Station. During the walk from 3900m to the summit and back to 3900m, the group will be roped by crevasses.</span></p>\n      <div class=\"clear\"></div>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 5: Back to the Valley</strong></span></p>\n      <p><span style=\"color: #000000;\">After the peak of the mountain is conquered the adventures prepare to move down to village Kazbeghi. The landscape changes as we progress back to civilization. Glaciers and moraines are replaced by rocks; a marked trail can already be seen. We reach the village and on to the comfort and warmth of our hostel.</span></p>\n      <p><span style=\"color: #000000;\">After breakfast, we drive back to Tbilisi.</span></p>\n      <hr>\n\n      <section class=\"bg-light\">\n          <div class=\"container pb-5\">\n              <div class=\"row\">\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/02/img-02-03.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/02/img-02-03-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/02/img-02-04.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/02/img-02-04-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/02/img-02-05.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/02/img-02-05-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/02/img-02-06.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/02/img-02-06-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/02/img-02-07.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/02/img-02-07-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/02/img-02-08.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/02/img-02-08-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/02/img-02-09.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/02/img-02-09-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n              </div>\n              <hr>\n          </div>\n      </section>\n    \n      <div class=\"clear\" style=\" height:20px;\"></div>\n      </li>\n      </ul>\n  </div>\n  "

/***/ }),

/***/ "./src/app/pages/tours/tours-page02/tours-page02.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page02/tours-page02.component.ts ***!
  \********************************************************************/
/*! exports provided: ToursPage02Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPage02Component", function() { return ToursPage02Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursPage02Component = /** @class */ (function () {
    function ToursPage02Component() {
    }
    ToursPage02Component.prototype.ngOnInit = function () {
    };
    ToursPage02Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tours-page02',
            template: __webpack_require__(/*! ./tours-page02.component.html */ "./src/app/pages/tours/tours-page02/tours-page02.component.html"),
            styles: [__webpack_require__(/*! ./tours-page02.component.css */ "./src/app/pages/tours/tours-page02/tours-page02.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToursPage02Component);
    return ToursPage02Component;
}());



/***/ }),

/***/ "./src/app/pages/tours/tours-page03/tours-page03.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page03/tours-page03.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\nul {\r\n    display: block;\r\n    list-style-type: disc;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    -webkit-padding-start: 40px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/tours/tours-page03/tours-page03.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page03/tours-page03.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Climbing mount Kazbegi and mount Elbrus</h1>\n    <div class=\"pt-2\"><img class=\"img-fluid\" src=\"../../../../assets/tours-page/03_02.jpg\" alt=\"\"></div>  \n    <ul class=\"gdl-tab-content\">\n      <li data-tab=\"tab-0\" class=\"active\" style=\"display: list-item;\">\n      <div class=\"clear\"></div>\n      <div class=\"gdl-divider gdl-border-x top\">\n      <div class=\"scroll-top\"></div>\n      </div>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n  \n  \n      <hr>\n  \n      <p><strong>Overview</strong></p>\n  \n      <p><strong>Duration:&nbsp;</strong>11 days / 10 nights<br>\n      <strong>Beginning:</strong> Nalchik<br>\n      <strong>Ending:</strong> Tbilisi<br>\n      <strong>Best season: </strong>From July to 15<sup>th</sup> of September<b><br>\n      <strong>Location:&nbsp;</strong></b>Russia, Georgia<br>\n      <strong>Price:&nbsp;</strong>€1200 per person ( In case of 2 persons)<br>\n      <strong>Accommodation:&nbsp;</strong>Tourist hotels, mountain shelter<br>\n      <strong>Food:&nbsp;</strong>Breakfasts, lunches, dinner<br>\n      <strong>Mode of travel:&nbsp;</strong>&nbsp;4WD vehicles, minibuses<br>\n      <strong>Number of people:</strong> Tour is available starting from 2 person<br>\n      <strong>Included:&nbsp;</strong>Accommodation for tourist hotels <br>W\n      Breakfasts, lunches, dinners <br>\n      All transfers <br>\n      All activities as per itinerary with all entry fees <br>\n      Travel permits in protected areas <br>\n      English knowing climbing guide <br>\n      Horses for the luggage <br>\n      The tickets of cable car <br>      \n      <strong>Excluded:&nbsp;</strong>Optional activities</p>\n      </li>\n  \n      <hr>\n  \n      <p><strong>Package Details</strong></p>\n  \n      <li data-tab=\"tab-1\" class=\"\">\n      <p><strong>Day 1: Tbilisi to Kazbeghi</strong></p>\n      <p><span style=\"color: #000000;\"><strong>Depends on the flight time we can organize city tour in Tbilisi.</strong></span></p>\n      <p><span style=\"color: #000000;\">Transfer from Tbilisi to Stepantsminda (also known as village Kazbeghi) located 157 km to the north of Tbilisi at 1740 m above sea level, along the banks of Thergi River. The most notable mountain here is Mount Kazbek that lies to the west of the town. Mt. Shani, 4451m above sea level, is the second most prominent peak, 9 km to the east of Stepantsminda. The climate of the region is known for its relatively dry, cold winters and long, cool summers. The coldest month is January (-5.2 degrees Celsius) and the warmest month is July (14.1 degrees). Stepantsminda is a center for trekkers and mountain climbers, who are looking for adventures in the Grand Caucasus Mountains, especially climbing Mount Kazbek. Mount Kazbek, the 3rd highest mountain of Georgia, is a dormant stratovolcano with elevation of 5033m. It is located in the Khokh Range, which runs north to the Greater Caucasus Range. The name of the mount is given by Russians, who inhabited this part of the Caucasian Mountain Range.</span></p>\n      <p><span style=\"color: #000000;\"><strong>Day 2: Trek to Meteo Station</strong></span></p>\n      <p><span style=\"color: #000000;\">Our phased conquest of the proud peak of the Caucasus begins with a climb from the village of Kazbeghi up by Darial Gorge to the weather station (we start at 7.00). Transfer by jeep to Sameba Church (2200m) and then walk up to Meteorological Station situated at 3,650 meters, total trekking time from the village to the meteo station is 7-8 h, the degree of difficulty is medium. The weather station is a mountain refuge, a base camp used for overnight and acclimatization (basic amenities).</span></p>\n      <div class=\"clear\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 3: Acclimatization Treks at Kazbek</strong></span></p>\n      <p><span style=\"color: #000000;\">Before starting the climb of the summit we will have an acclimatization day. Our guide will also help us practice the use of climbing equipment. Acclimatization takes place at the altitude of 4100-4200 meters. The group, accompanied by the mountain guide, will adapt and enjoy the truly incredible views and the healing energy of the mountains. After checking climbing equipment, the team is ready for the climb of the next day.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 4: Mount Kazbek Summit Day</strong></span></p>\n      <p><span style=\"color: #000000;\">The most exciting part of the trip, climbing to the summit of Mount Kazbek (total trekking time 10-12 h, start at the height of 3600 meters, level of difficulty high). The upper slopes of Kazbek are permanently snow-covered and present a challenging objective for every mountaineer. Start at 2am and walk to the Plateau at 4500m (4 hours), then Plateau to Saddle (4900m at 30 degrees), from Saddle to Summit at 40-45 degrees, use of ice axes and fixed ropes. Return to Meteorological Station. During the walk from 3900m to the summit and back to 3900m, the group will be roped by crevasses.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 5: Back to the Valley</strong></span></p>\n      <p><span style=\"color: #000000;\">After the peak of the mountain is conquered the adventures prepare to move down to village Kazbeghi. The landscape changes as we progress back to civilization. Glaciers and moraines are replaced by rocks; a marked trail can already be seen. We reach the village and on to the comfort and warmth of our hotel.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 6:  Transfer to Russia Azau</strong></span></p>\n      <p><span style=\"color: #000000;\">After breakfast we start our trip to Russia,  passing Georgian –Russian border which is just 20 km far from Stepantsminda.</span></p>\n      <p><span style=\"color: #000000;\">En route we will stop sometimes to have a little rest. In the evening we reach Azau ,(2400m )  first station of cable car.</span></p>\n      <p><span style=\"color: #000000;\">Overnight at the hotel in Azau.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 7: Priut 11 hut</strong></span></p>\n      <p><span style=\"color: #000000;\">After breakfast we start from the mountain hotel with all necessary climbing gear. You can leave your unnecessary gear at the hotel. We set our base camp at the Priut 11 (4100 m). From the last station (3700m) we make transfer our gear by snow machine</span></p>\n      <p><span style=\"color: #000000;\">You will carry your own equipment/clothes from hotel to lifts (5 minutes).</span></p>\n      <p><span style=\"color: #000000;\">During the day we can walk around and depends on whether go more higher and return. Overnight at Priut 11 hut. We have electricity here.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 8: Acclimatization day. </strong></span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 9: Summit day </strong></span></p>\n      <p><span style=\"color: #000000;\">We stand up early in the morning (at about 2am) and leave The Priut 11  after breakfast at about 3am. The idea is to meet sunrise somewhere over the Pastuckhov rocks. It is possible to hire a snow-cat (Ratrak) for a group. This vehicle carries climbers (12 people) up to Pastuckhov rocks 4800m and saves 2 hours and a lot of energy, even up to the 5100m. We will decide about transfer there! </span></p>\n      <p><span style=\"color: #000000;\">After the summit we return to the hut, and if we back before 3 o’clock  we can descend by lift to the Azau hotel.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span style=\"color: #000000;\"><strong>Day 10: Reserve day for summit.</strong></span></p>\n      <p><span style=\"color: #000000;\"><strong>Day 11: Transfer to Nalchik airport, departure.</strong></span></p>\n      <hr>\n\n      <section class=\"bg-light\">\n          <div class=\"container pb-5\">\n              <div class=\"row\">\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/03/img-t03-03.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/03/img-t03-03-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/03/img-t03-04.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/03/img-t03-04-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/03/img-t03-05.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/03/img-t03-05-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/03/img-t03-06.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/03/img-t03-06-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/03/img-t03-07.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/03/img-t03-07-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/03/img-t03-08.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/03/img-t03-08-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n              </div>\n              <hr>\n          </div>\n      </section>\n    \n      <div class=\"clear\" style=\" height:20px;\"></div>\n      </li>\n      </ul>\n  </div>"

/***/ }),

/***/ "./src/app/pages/tours/tours-page03/tours-page03.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page03/tours-page03.component.ts ***!
  \********************************************************************/
/*! exports provided: ToursPage03Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPage03Component", function() { return ToursPage03Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursPage03Component = /** @class */ (function () {
    function ToursPage03Component() {
    }
    ToursPage03Component.prototype.ngOnInit = function () {
    };
    ToursPage03Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tours-page03',
            template: __webpack_require__(/*! ./tours-page03.component.html */ "./src/app/pages/tours/tours-page03/tours-page03.component.html"),
            styles: [__webpack_require__(/*! ./tours-page03.component.css */ "./src/app/pages/tours/tours-page03/tours-page03.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToursPage03Component);
    return ToursPage03Component;
}());



/***/ }),

/***/ "./src/app/pages/tours/tours-page04/tours-page04.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page04/tours-page04.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\nul {\r\n    display: block;\r\n    list-style-type: disc;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    -webkit-padding-start: 40px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/tours/tours-page04/tours-page04.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page04/tours-page04.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>Ski mountaineering tour in Armenia</h1>\n    <div class=\"pt-2\"><img class=\"img-fluid\" src=\"../../../../assets/tours-page/04_02.jpg\" alt=\"\"></div>  \n    <ul class=\"gdl-tab-content\">\n      <li data-tab=\"tab-0\" class=\"active\" style=\"display: list-item;\">\n      <div class=\"clear\"></div>\n      <div class=\"gdl-divider gdl-border-x top\">\n      <div class=\"scroll-top\"></div>\n      </div>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n  \n  \n      <hr>\n  \n      <p><strong>Overview</strong></p>\n  \n      <p><strong>Duration:&nbsp;</strong>9 days / 8 nights<br>\n      <strong>Beginning:</strong> Yerevan<br>\n      <strong>Ending:</strong> Yerevan<br>\n      <strong>Best season: </strong>From January to 15<sup>th</sup> of April<b><br>\n      <strong>Location:&nbsp;</strong></b>Armenia<br>\n      <strong>Price:&nbsp;</strong>€1020 per person ( In case of 2 persons)<br>\n      <strong>Accommodation:&nbsp;</strong>Tourist hotels,<br>\n      <strong>Food:&nbsp;</strong>Breakfasts, dinner<br>\n      <strong>Mode of travel:&nbsp;</strong>&nbsp;4WD vehicles, minibuses<br>\n      <strong>Number of people:</strong> Tour is available starting from 2 person<br>\n      <strong>Included:&nbsp;</strong>Accommodation for tourist hotels<br>\n      Breakfasts, dinners<br>\n      All transfers,<br>\n      All activities as per itinerary with all entry fees<br>\n      Travel permits in protected areas<br>\n      English knowing skiing guide<br>\n      Local guide in the museums<br>\n      <strong>Excluded:&nbsp;</strong>Optional activities</p>\n      </li>\n  \n      <hr>\n  \n      <p><strong>Package Details</strong></p>\n  \n      <li data-tab=\"tab-1\" class=\"\">\n      <p><strong>Day 1: Night flight to Armenia</strong></p>\n      <p><span >Flight to Yerevan.</span></p>\n      <p><span ><strong>Day 2: Mount Hatis (2537m) - to the valley of flowers</strong></span></p>\n      <p><span >From the airport you will be picked up and transferred to your hotel.</span></p>\n      <p><span >After breakfast, we head towards Sevan Lake, in the alpine wooded north-east of the country, to the blue pearl of Armenia and is one of the largest mountain lakes in the world (located about 1900m above sea level).</span></p>\n      <p><span >On the way we climb the mountain Hatis (2.537m). Wide views and even flanks promise a great ski tour. From the summit of Mount Hatis, we will see almost all the destinations of our journey. Afterwards drive to the valley of the flowers - to the city Aghveran, which is located in the area of the famous ski resort of Armenia.</span></p>\n      <p><span >Overnight in Aghveran, Hotel Arthurs.</span></p>\n      <p><span >BL</span></p>\n      <p><span >Approx. 530 m Distance: approx. 4,5 km Time: approx. 2 hrs.</span></p>\n      <div class=\"clear\"></div>\n      <p><span ><strong>Day 3: Mount Istok (2851m)</strong></span></p>\n      <p><span >Our goal for today is Mount Istok, which was named after a skier from which the mountain was first climbed. From here we will enjoy the great peaks of the Tsaghkunyaz mountain range.</span></p>\n      <p><span >Overnight in Aghveran.</span></p>\n      <p><span >BL.</span></p>\n      <p><span >1900-2851 m Distance: approx. 6 km Time: approx. 3 hrs.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 4: Mount Ara (2581m) - the lying king</strong></span></p>\n      <p><span >Today we go  a very nice ski trip on Mount Ara. This is a significant mountain for the Armenians, a mountain associated with a well-known legend. According to the legend, here on the top of the mountain we find the Armenian king Ara, who was in love with Queen Semiramis, whose form the mountain got. After skiing we continue to the north-west of the country, to the province of Shirak. On the way, we will visit beautiful examples of the architecture of the old Armenian Church from the 5th to the 7th centuries.</span></p>\n      <p><span >Overnight in a guest house in Pemzashen.</span></p>\n      <p><span ></span>BL.</p>\n      <p><span ></span>Ca. 1750-2581 m Distance: approx. 10 km Time: approx. 4 hrs.</p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 5: The highest mountain of Armenia (4095m) - Aragats</strong></span></p>\n      <p><span >The ascent of the highest summit of today's Armenia: Mount Aragats with its impressive four peaks. We climbed the summit of 4000 m and, in clear weather, gaze at the Ararat, the Ararat valley between Ararat and Aragats. Continue to the famous health resort Dilidshan, which is totally in the forests of Armenia.</span></p>\n      <p><span ></span>Overnight stay at a guesthouse in Dilijan.</p>\n      <p><span ></span>BL.</p>\n      <p><span ></span>2200-4000 m Distance: approx. 12 km Time: approx. 7 hrs.</p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 6: At the Gorges Vorotan</strong></span></p>\n      <p><span >We will visit Sevanavanq (9th century) situated on the peninsula of Sevan Lake.  Drive over the Selimpass to the south. Drive to the entrance of the Syunik region at Vorotan Pass. On the way we visit the only well-preserved caravanserai of Armenia, which is about 2350 m high. The summit of 2496 m is waiting for us. In front of us is a magnificent landscape with picturesque mountain chains and rocks, deep ravines, beautiful brooks and numerous churches.</span></p>\n      <p><span >Overnight in Goris</span></p>\n      <p><span >BL.</span></p>\n      <p><span >2496-2700 m. Distance: approx. 5 km. Time: approx. 2,5 hrs.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 7: Mount Ischkhanasar (3557m) - the mountain of the prince</strong></span></p>\n      <p><span >Today we climb the beautiful mountain of the Prince, which rises very picturesque over a canyon. The path to the summit begins in a deep ravine which will open up great views of the mountains suspended in the sky.</span></p>\n      <p><span >Overnight in Goris.</span></p>\n      <p><span >FPA.</span></p>\n      <p><span >Approx. 1800-3557 m Distance: approx. 6 km. Time: approx. 4 hrs.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 8: The pearl of Armenian Church architecture</strong></span></p>\n      <p><span ></span>Visit of the Noravank monastery at the end of the beautiful Amaghu gorge, which is characterized by its special exterior reliefs and its reddish façade with a sun that is barely distinguishable from its rocky surroundings. Today, we also explore the Ararat plain, where Noah has planted the first vine after descent of Mount Ararat. The Ararat level plays an important role in the winegrowing of the country.</p>\n      <p><span ></span>Return to Yerevan. </p>\n      <p><span ></span>Dinner in a typical Armenian restaurant with folklore.</p>\n      <p><span ></span>Overnight in Yerevan.</p>\n      <p><span ></span>BL.</p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong> Day 9: Early return journey </strong></span></p>\n      <p><span >Early morning transfer to the airport.</span></p>\n      <p><span >Services and prices.</span></p>\n      <p><span >Number of participants: from 2 to 15pax.</span></p>\n      <hr>\n\n      <section class=\"bg-light\">\n          <div class=\"container pb-5\">\n              <div class=\"row\">\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-03.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-03-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-04.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-04-thumbnail.png\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-05.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-05-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-06.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-06-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-07.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-07-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-08.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-08-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-09.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-09-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-10.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-10-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-11.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-11-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-12.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-12-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/04/img-t04-13.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/04/img-t04-13-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n              </div>\n              <hr>\n          </div>\n      </section>\n    \n      <div class=\"clear\" style=\" height:20px;\"></div>\n      </li>\n    </ul>\n  </div>"

/***/ }),

/***/ "./src/app/pages/tours/tours-page04/tours-page04.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page04/tours-page04.component.ts ***!
  \********************************************************************/
/*! exports provided: ToursPage04Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPage04Component", function() { return ToursPage04Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursPage04Component = /** @class */ (function () {
    function ToursPage04Component() {
    }
    ToursPage04Component.prototype.ngOnInit = function () {
    };
    ToursPage04Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tours-page04',
            template: __webpack_require__(/*! ./tours-page04.component.html */ "./src/app/pages/tours/tours-page04/tours-page04.component.html"),
            styles: [__webpack_require__(/*! ./tours-page04.component.css */ "./src/app/pages/tours/tours-page04/tours-page04.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToursPage04Component);
    return ToursPage04Component;
}());



/***/ }),

/***/ "./src/app/pages/tours/tours-page05/tours-page05.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page05/tours-page05.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pages/tours/tours-page05/tours-page05.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page05/tours-page05.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <h1>Trekking Between Ararat and Kazbeg</h1>\n        <div class=\"pt-2\"><img  class=\"img-fluid\" src=\"../../../../assets/tours-page/05_02.jpg\" alt=\"\"></div>  \n          <div class=\"clear\"></div>\n          <div class=\"gdl-divider gdl-border-x top\">\n          <div class=\"scroll-top\"></div>\n          </div>\n          <div class=\"clear\" style=\" height:20px;\"></div>\n      \n      \n          <hr>\n      \n        <div class=\"accordion\" id=\"accordion\">\n                <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingOne\">\n                    <h5 class=\"mb-0\">\n                      <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"true\" aria-controls=\"collapseOne\">\n                            <p><strong>Overview</strong></p>\n                      </button>\n                    </h5>\n                  </div>\n              \n                  <div id=\"collapseOne\" class=\"collapse show\" aria-labelledby=\"headingOne\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                            <p><strong>Duration:</strong>&nbsp;17 days / 16 nights<br>\n                                <strong>Beginning:&nbsp;</strong>Yerevan<br>\n                                <strong>Finish:&nbsp;</strong>Tbilisi<br>\n                                <strong>Best Season:&nbsp;</strong>From June to September<br>\n                                <strong>Accommodation:&nbsp;</strong>Tourist hotels, camping tents<br>\n                                <strong>Food:&nbsp;</strong>Breakfasts, meals in the mountains<br>\n                                <strong>Mode of travel:&nbsp;</strong>&nbsp;4WD vehicles, minibuses/ hiking<br>\n                                <strong>Tour Support:&nbsp;</strong>&nbsp;&nbsp;If group size is 1-3 persons, English knowing guide-driver, 4WD vehicles, horses carrying luggage. If group size is more than 3 persons, bus or minibus, guide required language, English knowing trekking guide, horses carrying luggage.<br>\n                                <strong>Included:&nbsp;</strong>Accommodation for tourist hotels and camping tents<br>\n                                Breakfasts, meals in the mountains<br>\n                                All transfers, rent of horses<br>\n                                All activities as per itinerary with all entry fees<br>\n                                Travel permits in protected areas<br>\n                                Guiding service, local guides in museums<br>\n                                <strong>Excluded:&nbsp;</strong>Optional activities\n                              </p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" id=\"headingTwo\">\n                    <h5 class=\"mb-0\">\n                      <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapseTwo\">\n                            <p><strong>Package Details</strong></p>\n                      </button>\n                    </h5>\n                  </div>\n                  <div id=\"collapseTwo\" class=\"collapse\" aria-labelledby=\"headingTwo\" data-parent=\"#accordion\">\n                    <div class=\"card-body\">\n                            <p><strong>Day 1 – 2 – Arrival, Matenadaran</strong></p>\n                            <p><span >Early morning arrival at the hotel in the city center. After having a little rest we will have a wonderful city tour in Yerevan. The day will include visit to Matenadaran museum where  the oldest and most valuable collections of manuscripts are presented.</span></p>\n                            <p><span ><strong>Day 3 – Lake Akna</strong></span></p>\n                            <p><span >It goes up to 3.035m. Here then we will put our tents. To admire the nature we will take a walk around the lake. Horses will carry our bags.</span></p>\n                            <p><span >Overnight in camping tents. (Trekking 5 hrs. 12km, altitude 1000m up)</span></p>\n                            <div class=\"clear\"></div>\n                            <p><span ><strong>Day 4 – On the top of Azhdahak</strong></span></p>\n                            <p><span >We hike to the top of Azhdahak (3.597m). In clear weather conditions, we have a fantastic view on Lake Sevan. The highest mountain in Armenia is Aragats (4.090m).</span></p>\n                            <p><span >Overnight on the base of the mountain in the camping tents. (Trekking 7 hrs. 9km, altitude 500m up and down)</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 5 – Hike to Lake Vank</strong></span></p>\n                            <p><span >Today we hike to Lake Vank (2,600 m). We take pleasure in colorful summer meadows and crossing small rivers. Along the way we admire 5000 years old Petroglyphs and Wishapstones . These are images on rocks having more than 2 meter height. The images are about pagan “Gods of Water” (Trekking 5 hrs. 9km, altitude 200m down).</span></p>\n                            <p><span >Overnight in camping tents.</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 6 – Kakavaberd</strong></span></p>\n                            <p><span >We reach Khosrov reserve where there are more than 1,800 plant species worthy of protection and there are 30 species of reptiles. Endemic animals like the Armenian mouflon and  bezoar  goats here are on the verge of extinction. We walk through picturesque places along Azat river to nearly overgrown paths, surrounded by thorny bushes. Here you cannot stay indifferent to the colorful butterflies which will lead us to the next natural watercourse river which is perfect for swimming. We see wild birds and admire the colorful lizards on the rocks. We will finish the day with a night in a cave near the gorge. (Trekking  7 hrs.  11km, altitude 700m down).</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 7 – Glan</strong></span></p>\n                            <p><span >We continue our tour on the 7th day and further downhill. Thanks to our expert and well trained guides we discover an old Ingrown Church (7th century). The path is going along the gorge through the deserted villages and Imerzek Geghamahovit. Not far from Glan we rise again into the depths of the gorge and swim in the waterfall. We reach the plateau of the glans, inhabited by 3 families from farming and beekeeping. We witness the ceremony of baking lavash. Lavash is a thin bread of Armenians from early times. We will not only taste it but will see how the whole family work and make lavash. We visit the monastery of St. Stephen (13th century), which is about 30 minutes from the village Glan. In the evening we will have delicious meal of home-made dishes. (Trekking 3 hrs., 7km, altitude -200m up and down).</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 8 – Garni Temple, basalt columns, Monastery Geghard</strong></span></p>\n                            <p><span >In the morning we start our way to Garni . In the valley of Gocht river we visit the “Symphony of Stones” – huge basalt columns formed by volcanic activity. Garni is a pagan temple of sun and cave monastery Geghard(UNESCO World Heritage Site, 7th century) fascinates us with its architecture and with many small monastic caves. We continue our tour to Lake Sevan. Here we visit Sevan Monastery (9th century).(Transfer 90km ).</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 9 – Rest day at Lake Sevan</strong></span></p>\n                            <p><span ></span>Today we enjoy the comforts of our hotel, relax in the hotel swimming pool, the sauna, swim in the lake in summer and taste seafood. On the large terrace we have a fantastic panoramic view. Then we will have a short hike in the area.</p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 10 – Hiking and culture – the Armenian Switzerland</strong></span></p>\n                            <p><span ></span>Transfer by bus, on the Sevan passport. At the end of the tunnel, the color will be changed; we can admire the view of thick woods and luxuriant green. Passing the small health resort of Dilijan, we visit Goshavank Monastery (12th-13th centuries) . Then we continue through the village of Ijevan Enokavan. From here our trek day starts: rising up on a wide road, surrounded by lush summer meadows and shady trees. The way goes in a narrow path surrounded by luxurious meadows thick wood, which will make a romantic atmosphere. We will see a cave, which was used in per-Christian times for religious purposes, and ancient rock inscriptions. After a short stop, we reach camp Lastiver with bar, fireplace, stone huts and tree houses, near the rushing river for climbing and swimming. Way back. Overnight in a guesthouse in Dilijan. (Trekking  3 hrs.  10km, altitude 400m up and down, transfer 120km).</p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 11 – New language, new characters – Georgia</strong></span></p>\n                            <p><span >From Vanadzor Dilijan we drive to the village of Molokans Lermontowo (old Russian religious minority Molokans, milk drinkers), an early Christian nation. Vanadzor was hardly damaged by the earthquake in 1988. We will visit the monasteries of Sanahin Haghpat and the spiritual center in the Middle Ages (10th century). Many monuments of Armenia are embedded in a great, desolate landscape. Then we continue our way to the Georgian border, it is not too far. New language, new characters. We reach Tbilisi in the evening. (Transfer 180km).</span></p>\n                            <p><span >Overnight at hotel.</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 12</strong></span></p>\n                            <p><span >Trip to Mtskheta, the 3000 year old capital of Georgia’s (UNESCO Heritage), the center of the Georgian Orthodox Church. We visit “sticky” Jvari Church (6th century) and Svetitskhoveli Cathedral (11th century). After lunch, we enjoy the magnificent panorama while having a short hike on Basaletisee .Then we continue our way from the Georgian Military Highway to the monastery fortress Ananuri (17 JH.) admiring the picturesque views of the Schinwali reservoir. Overnight in Gudauri. (Transfer 140km).</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 13 – Trekking near Kazbegi region</strong></span></p>\n                            <p><span >Further along the highway, it goes through the Cross Pass, 2,400 m altitude, after this pass we move  to the Sno village, which is the starting point of our hike today. Through flowering fields we walk up the gorge (3.032m) and enjoy our first view of the great mountain giants Kazbek (5.047m).Overnight in Stephanzminda (former Kazbegi) (Trekking  4 hrs.  10km, altitude 1000m up and down, transfer 30km).</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 14 – Trekking near Kazbegi region</strong></span></p>\n                            <p><span >In the morning we visit pilgrimage church Zminda Sameba Trinity Church (2,000 m) and hike in the foothills of Kazbek. In 4-5 hours we reach the glacier Gergeti , we cross the glacier and enjoy fantastic views of the high snow-capped mountains in the area. Overnight in tents. ( Trekking 3 hrs. 7km, altitude 700m up, transfer 7km).</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 15</strong></span></p>\n                            <p><span >The next day we come to a short, steep climb to the hut Bethlemi (former Meteo Center, first base camp at 3,670 m) where we will stay. From there we continue towards the summit up to the higher glacier field .On the way back to the lodge we visit the small chapel of Kazbek (Trekking  3 hrs.  4km, altitude 900m up).</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 16 – Farewell to the mountainsd</strong></span></p>\n                            <p><span >Early in the morning we descent to Stephanzminda (Kazbegi) and from there ride to Tbilisi. Overnight at hotel. (Trekking 5 hrs. 11km, altitude 1500m down, transfer 150km).</span></p>\n                            <div class=\"clear\" style=\" height:20px;\"></div>\n                            <p><span ><strong>Day 17 – Tbilisi</strong></span></p>\n                            <p><span ></span>City tour. Mineral Baths. Farewell dinner.</p>\n                            <p><span ></span>Departure</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n\n\n      <section class=\"bg-light\">\n            <div class=\"container pb-5\">\n                <div class=\"row\">\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-03.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-03-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-04.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-04-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-05.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-05-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-06.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-06-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-07.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-07-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-08.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-08-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-09.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-09-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-10.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-10-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-11.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-11-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-12.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-12-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-13.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-13-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                    <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                        <a  href=\"../../../../assets/tours-page/05/img-t05-14.jpg\">\n                            <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-14-thumbnail.jpg\" alt=\"\">\n                        </a>\n                    </div>\n                </div>\n                <hr>\n            </div>\n        </section>\n        \n        <div class=\"clear\" style=\" height:20px;\"></div>\n</div>"

/***/ }),

/***/ "./src/app/pages/tours/tours-page05/tours-page05.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page05/tours-page05.component.ts ***!
  \********************************************************************/
/*! exports provided: ToursPage05Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPage05Component", function() { return ToursPage05Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursPage05Component = /** @class */ (function () {
    function ToursPage05Component() {
    }
    ToursPage05Component.prototype.ngOnInit = function () {
    };
    ToursPage05Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tours-page05',
            template: __webpack_require__(/*! ./tours-page05.component.html */ "./src/app/pages/tours/tours-page05/tours-page05.component.html"),
            styles: [__webpack_require__(/*! ./tours-page05.component.css */ "./src/app/pages/tours/tours-page05/tours-page05.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToursPage05Component);
    return ToursPage05Component;
}());



/***/ }),

/***/ "./src/app/pages/tours/tours-page06/tours-page06.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page06/tours-page06.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    margin-top: 15px;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.w3-card-4 img {\r\n    max-width: 100%;\r\n}\r\n\r\nul {\r\n    display: block;\r\n    list-style-type: disc;\r\n    -webkit-margin-before: 1em;\r\n    -webkit-margin-after: 1em;\r\n    -webkit-margin-start: 0px;\r\n    -webkit-margin-end: 0px;\r\n    -webkit-padding-start: 40px;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\nul li {\r\n    list-style-type: none;\r\n}\r\n\r\n.w3-card-4 {\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.defaultImage img {\r\n    max-width: 100%;\r\n    margin: 20px 0;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n    display: block;\r\n    overflow: hidden;\r\n    visibility: hidden;\r\n    width: 0;\r\n    height: 0;\r\n}\r\n\r\n.table {\r\n    width: 100%;\r\n    max-width: 100%;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntable {\r\n    border-spacing: 0;\r\n    border-collapse: collapse;\r\n    background-color: transparent;\r\n}\r\n\r\nthead {\r\n    display: table-header-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\n.table-hover {\r\n    cursor: pointer;\r\n}\r\n\r\ntr {\r\n    display: table-row;\r\n    vertical-align: inherit;\r\n    border-color: inherit;\r\n}\r\n\r\nth {\r\n    vertical-align: bottom;\r\n    border-bottom: 2px solid #ddd;\r\n}\r\n\r\ntbody {\r\n    display: table-row-group;\r\n    vertical-align: middle;\r\n    border-color: inherit;\r\n}\r\n\r\ntd, th {\r\n    display: table-cell;\r\n}\r\n"

/***/ }),

/***/ "./src/app/pages/tours/tours-page06/tours-page06.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page06/tours-page06.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Trekking Between Ararat and Kazbeg</h1>\n    <div class=\"pt-2\"><img class=\"img-fluid\" src=\"../../../../assets/tours-page/05_02.jpg\" alt=\"\"></div>  \n    <ul class=\"gdl-tab-content\">\n      <li data-tab=\"tab-0\" class=\"active\" style=\"display: list-item;\">\n      <div class=\"clear\"></div>\n      <div class=\"gdl-divider gdl-border-x top\">\n      <div class=\"scroll-top\"></div>\n      </div>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n  \n  \n      <hr>\n  \n      <p><strong>Overview</strong></p>\n  \n      <p><strong>Duration:</strong>&nbsp;17 days / 16 nights<br>\n        <strong>Beginning:&nbsp;</strong>Yerevan<br>\n        <strong>Finish:&nbsp;</strong>Tbilisi<br>\n        <strong>Best Season:&nbsp;</strong>From June to September<br>\n        <strong>Accommodation:&nbsp;</strong>Tourist hotels, camping tents<br>\n        <strong>Food:&nbsp;</strong>Breakfasts, meals in the mountains<br>\n        <strong>Mode of travel:&nbsp;</strong>&nbsp;4WD vehicles, minibuses/ hiking<br>\n        <strong>Tour Support:&nbsp;</strong>&nbsp;&nbsp;If group size is 1-3 persons, English knowing guide-driver, 4WD vehicles, horses carrying luggage. If group size is more than 3 persons, bus or minibus, guide required language, English knowing trekking guide, horses carrying luggage.<br>\n        <strong>Included:&nbsp;</strong>Accommodation for tourist hotels and camping tents<br>\n        Breakfasts, meals in the mountains<br>\n        All transfers, rent of horses<br>\n        All activities as per itinerary with all entry fees<br>\n        Travel permits in protected areas<br>\n        Guiding service, local guides in museums<br>\n        <strong>Excluded:&nbsp;</strong>Optional activities\n      </p>\n      </li>\n  \n      <hr>\n  \n      <p><strong>Package Details</strong></p>\n  \n      <li data-tab=\"tab-1\" class=\"\">\n      <p><strong>Day 1 – 2 – Arrival, Matenadaran</strong></p>\n      <p><span >Early morning arrival at the hotel in the city center. After having a little rest we will have a wonderful city tour in Yerevan. The day will include visit to Matenadaran museum where  the oldest and most valuable collections of manuscripts are presented.</span></p>\n      <p><span ><strong>Day 3 – Lake Akna</strong></span></p>\n      <p><span >It goes up to 3.035m. Here then we will put our tents. To admire the nature we will take a walk around the lake. Horses will carry our bags.</span></p>\n      <p><span >Overnight in camping tents. (Trekking 5 hrs. 12km, altitude 1000m up)</span></p>\n      <div class=\"clear\"></div>\n      <p><span ><strong>Day 4 – On the top of Azhdahak</strong></span></p>\n      <p><span >We hike to the top of Azhdahak (3.597m). In clear weather conditions, we have a fantastic view on Lake Sevan. The highest mountain in Armenia is Aragats (4.090m).</span></p>\n      <p><span >Overnight on the base of the mountain in the camping tents. (Trekking 7 hrs. 9km, altitude 500m up and down)</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 5 – Hike to Lake Vank</strong></span></p>\n      <p><span >Today we hike to Lake Vank (2,600 m). We take pleasure in colorful summer meadows and crossing small rivers. Along the way we admire 5000 years old Petroglyphs and Wishapstones . These are images on rocks having more than 2 meter height. The images are about pagan “Gods of Water” (Trekking 5 hrs. 9km, altitude 200m down).</span></p>\n      <p><span >Overnight in camping tents.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 6 – Kakavaberd</strong></span></p>\n      <p><span >We reach Khosrov reserve where there are more than 1,800 plant species worthy of protection and there are 30 species of reptiles. Endemic animals like the Armenian mouflon and  bezoar  goats here are on the verge of extinction. We walk through picturesque places along Azat river to nearly overgrown paths, surrounded by thorny bushes. Here you cannot stay indifferent to the colorful butterflies which will lead us to the next natural watercourse river which is perfect for swimming. We see wild birds and admire the colorful lizards on the rocks. We will finish the day with a night in a cave near the gorge. (Trekking  7 hrs.  11km, altitude 700m down).</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 7 – Glan</strong></span></p>\n      <p><span >We continue our tour on the 7th day and further downhill. Thanks to our expert and well trained guides we discover an old Ingrown Church (7th century). The path is going along the gorge through the deserted villages and Imerzek Geghamahovit. Not far from Glan we rise again into the depths of the gorge and swim in the waterfall. We reach the plateau of the glans, inhabited by 3 families from farming and beekeeping. We witness the ceremony of baking lavash. Lavash is a thin bread of Armenians from early times. We will not only taste it but will see how the whole family work and make lavash. We visit the monastery of St. Stephen (13th century), which is about 30 minutes from the village Glan. In the evening we will have delicious meal of home-made dishes. (Trekking 3 hrs., 7km, altitude -200m up and down).</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 8 – Garni Temple, basalt columns, Monastery Geghard</strong></span></p>\n      <p><span >In the morning we start our way to Garni . In the valley of Gocht river we visit the “Symphony of Stones” – huge basalt columns formed by volcanic activity. Garni is a pagan temple of sun and cave monastery Geghard(UNESCO World Heritage Site, 7th century) fascinates us with its architecture and with many small monastic caves. We continue our tour to Lake Sevan. Here we visit Sevan Monastery (9th century).(Transfer 90km ).</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 9 – Rest day at Lake Sevan</strong></span></p>\n      <p><span ></span>Today we enjoy the comforts of our hotel, relax in the hotel swimming pool, the sauna, swim in the lake in summer and taste seafood. On the large terrace we have a fantastic panoramic view. Then we will have a short hike in the area.</p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 10 – Hiking and culture – the Armenian Switzerland</strong></span></p>\n      <p><span ></span>Transfer by bus, on the Sevan passport. At the end of the tunnel, the color will be changed; we can admire the view of thick woods and luxuriant green. Passing the small health resort of Dilijan, we visit Goshavank Monastery (12th-13th centuries) . Then we continue through the village of Ijevan Enokavan. From here our trek day starts: rising up on a wide road, surrounded by lush summer meadows and shady trees. The way goes in a narrow path surrounded by luxurious meadows thick wood, which will make a romantic atmosphere. We will see a cave, which was used in per-Christian times for religious purposes, and ancient rock inscriptions. After a short stop, we reach camp Lastiver with bar, fireplace, stone huts and tree houses, near the rushing river for climbing and swimming. Way back. Overnight in a guesthouse in Dilijan. (Trekking  3 hrs.  10km, altitude 400m up and down, transfer 120km).</p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 11 – New language, new characters – Georgia</strong></span></p>\n      <p><span >From Vanadzor Dilijan we drive to the village of Molokans Lermontowo (old Russian religious minority Molokans, milk drinkers), an early Christian nation. Vanadzor was hardly damaged by the earthquake in 1988. We will visit the monasteries of Sanahin Haghpat and the spiritual center in the Middle Ages (10th century). Many monuments of Armenia are embedded in a great, desolate landscape. Then we continue our way to the Georgian border, it is not too far. New language, new characters. We reach Tbilisi in the evening. (Transfer 180km).</span></p>\n      <p><span >Overnight at hotel.</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 12</strong></span></p>\n      <p><span >Trip to Mtskheta, the 3000 year old capital of Georgia’s (UNESCO Heritage), the center of the Georgian Orthodox Church. We visit “sticky” Jvari Church (6th century) and Svetitskhoveli Cathedral (11th century). After lunch, we enjoy the magnificent panorama while having a short hike on Basaletisee .Then we continue our way from the Georgian Military Highway to the monastery fortress Ananuri (17 JH.) admiring the picturesque views of the Schinwali reservoir. Overnight in Gudauri. (Transfer 140km).</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 13 – Trekking near Kazbegi region</strong></span></p>\n      <p><span >Further along the highway, it goes through the Cross Pass, 2,400 m altitude, after this pass we move  to the Sno village, which is the starting point of our hike today. Through flowering fields we walk up the gorge (3.032m) and enjoy our first view of the great mountain giants Kazbek (5.047m).Overnight in Stephanzminda (former Kazbegi) (Trekking  4 hrs.  10km, altitude 1000m up and down, transfer 30km).</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 14 – Trekking near Kazbegi region</strong></span></p>\n      <p><span >In the morning we visit pilgrimage church Zminda Sameba Trinity Church (2,000 m) and hike in the foothills of Kazbek. In 4-5 hours we reach the glacier Gergeti , we cross the glacier and enjoy fantastic views of the high snow-capped mountains in the area. Overnight in tents. ( Trekking 3 hrs. 7km, altitude 700m up, transfer 7km).</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 15</strong></span></p>\n      <p><span >The next day we come to a short, steep climb to the hut Bethlemi (former Meteo Center, first base camp at 3,670 m) where we will stay. From there we continue towards the summit up to the higher glacier field .On the way back to the lodge we visit the small chapel of Kazbek (Trekking  3 hrs.  4km, altitude 900m up).</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 16 – Farewell to the mountainsd</strong></span></p>\n      <p><span >Early in the morning we descent to Stephanzminda (Kazbegi) and from there ride to Tbilisi. Overnight at hotel. (Trekking 5 hrs. 11km, altitude 1500m down, transfer 150km).</span></p>\n      <div class=\"clear\" style=\" height:20px;\"></div>\n      <p><span ><strong>Day 17 – Tbilisi</strong></span></p>\n      <p><span ></span>City tour. Mineral Baths. Farewell dinner.</p>\n      <p><span ></span>Departure</p>\n      <hr>\n  \n      <section class=\"bg-light\">\n          <div class=\"container pb-5\">\n              <div class=\"row\">\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-03.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-03-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-04.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-04-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-05.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-05-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-06.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-06-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-07.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-07-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-08.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-08-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-09.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-09-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-10.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-10-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-11.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-11-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-12.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-12-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-13.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-13-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n                  <div class=\"col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12 pt-3\">\n                      <a  href=\"../../../../assets/tours-page/05/img-t05-14.jpg\">\n                          <img class=\"img-fluid img-thumbnail\" src=\"../../../../assets/tours-page/05/img-t05-14-thumbnail.jpg\" alt=\"\">\n                      </a>\n                  </div>\n              </div>\n              <hr>\n          </div>\n      </section>\n      \n      <div class=\"clear\" style=\" height:20px;\"></div>\n      </li>\n    </ul>\n  </div>\n  "

/***/ }),

/***/ "./src/app/pages/tours/tours-page06/tours-page06.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/tours/tours-page06/tours-page06.component.ts ***!
  \********************************************************************/
/*! exports provided: ToursPage06Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToursPage06Component", function() { return ToursPage06Component; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToursPage06Component = /** @class */ (function () {
    function ToursPage06Component() {
    }
    ToursPage06Component.prototype.ngOnInit = function () {
    };
    ToursPage06Component = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tours-page06',
            template: __webpack_require__(/*! ./tours-page06.component.html */ "./src/app/pages/tours/tours-page06/tours-page06.component.html"),
            styles: [__webpack_require__(/*! ./tours-page06.component.css */ "./src/app/pages/tours/tours-page06/tours-page06.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ToursPage06Component);
    return ToursPage06Component;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Ashot\Desktop\Angular\asma\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map