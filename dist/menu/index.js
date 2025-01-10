"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _material = require("@mui/material");
var _react = _interopRequireWildcard(require("react"));
var _menuItem = require("../menuItem");
var _menu = require("./menu.styles");
var _iconButton = require("../iconButton");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var MOBILE_SIZE = 720;
function Menu(_ref) {
  var variant = _ref.variant,
    children = _ref.children,
    anchorElem = _ref.anchorElem,
    _ref$iconColor = _ref.iconColor,
    iconColor = _ref$iconColor === void 0 ? "primary" : _ref$iconColor,
    sx = _ref.sx;
  var theme = (0, _material.useTheme)();
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobile = _useState2[0],
    setIsMobile = _useState2[1];
  var _useState3 = (0, _react.useState)(anchorElem || null),
    _useState4 = _slicedToArray(_useState3, 2),
    anchorEl = _useState4[0],
    setAnchorEl = _useState4[1];
  var _useState5 = (0, _react.useState)(false),
    _useState6 = _slicedToArray(_useState5, 2),
    menuIsOpen = _useState6[0],
    setMenuIsOpen = _useState6[1];
  var handleClick = function handleClick(event) {
    setAnchorEl(event.currentTarget);
    setMenuIsOpen(true);
  };
  var handleClose = function handleClose() {
    setAnchorEl(null);
    setMenuIsOpen(false);
  };
  var liStyles = (0, _react.useMemo)(function () {
    return variant === "compact" || isMobile ? {
      "&:last-child": {
        borderBottom: "1px solid transparent"
      }
    } : {
      borderBottom: "1px solid transparent"
    };
  }, [isMobile]);
  (0, _react.useEffect)(function () {
    var handleResize = function handleResize() {
      setIsMobile(window.innerWidth < MOBILE_SIZE);
    };
    window.addEventListener("resize", handleResize);
    return function () {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, isMobile && /*#__PURE__*/_react["default"].createElement(_iconButton.IconButton, {
    "aria-label": "open menu",
    id: "open-menu-button",
    "aria-controls": menuIsOpen ? "menu" : undefined,
    "aria-expanded": menuIsOpen ? "true" : undefined,
    "aria-haspopup": "true",
    onClick: handleClick,
    icon: "mdiMenu",
    iconColor: theme.palette[iconColor].main,
    iconSize: 32,
    variant: "dark"
  }), /*#__PURE__*/_react["default"].createElement(_material.Menu, {
    sx: sx,
    id: "menu",
    MenuListProps: {
      "aria-labelledby": "".concat(menuIsOpen ? "open" : "close", "-menu-button")
    },
    anchorEl: anchorElem || anchorEl,
    open: menuIsOpen,
    onClose: isMobile ? handleClose : undefined,
    slotProps: {
      paper: {
        sx: _objectSpread(_objectSpread({}, _menu.menuOverrides), {}, _defineProperty({
          li: _objectSpread(_objectSpread({}, _menu.menuOverrides.li), liStyles)
        }, "@media (min-width: ".concat(MOBILE_SIZE, "px)"), {
          ul: {
            display: "flex",
            flexDirection: variant === "full" ? "row" : "column"
          }
        }))
      }
    }
  }, isMobile && /*#__PURE__*/_react["default"].createElement(_iconButton.IconButton, {
    "aria-label": "close menu",
    id: "close-menu-button",
    "aria-controls": menuIsOpen ? "menu" : undefined,
    "aria-expanded": menuIsOpen ? "true" : undefined,
    "aria-haspopup": "true",
    onClick: handleClose,
    icon: "mdiClose",
    iconColor: theme.palette.primary.main,
    iconSize: 24,
    variant: "dark",
    sx: {
      alignSelf: "flex-end",
      padding: "0px"
    }
  }), children));
}
Menu.MenuItem = _menuItem.MenuItem;
var _default = exports["default"] = Menu;