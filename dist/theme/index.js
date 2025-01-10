"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _styles = require("@mui/material/styles");
var _button = require("./overrides/button");
var _select = require("./overrides/select");
var _menuItem = require("./overrides/menu-item");
var _radioGroup = require("./overrides/radio-group");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var theme = (0, _styles.createTheme)({
  palette: {
    primary: {
      main: "#47A138",
      light: "#E4EDE3",
      dark: "#004D61"
    },
    secondary: {
      main: "#FF5031"
    },
    common: {
      black: "#000000",
      white: "#FFFFFF"
    },
    grey: {
      100: "#F5F5F5",
      200: "#F8F8F8",
      300: "#DEE9EA",
      400: "#CBCBCB",
      500: "#767676"
    },
    background: {
      "default": "#E4EDE3",
      paper: "linear-gradient(180deg, #004D61 0%, #FFFFFF 100%)"
    },
    action: {
      active: "#004D61"
    }
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: {
      fontSize: "25px",
      fontWeight: 600
    },
    subtitle1: {
      fontSize: "20px",
      fontWeight: 600
    },
    body1: {
      fontSize: "16px"
    },
    caption: {
      fontSize: "13px"
    },
    button: {
      fontSize: "16px",
      fontWeight: 600
    }
  },
  spacing: function spacing(value) {
    var spacingValues = {
      small: 8,
      medium: 16,
      large: 24
    };
    return "".concat(spacingValues[value], "px");
  },
  components: _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, _button.buttonOverrides), _select.selectOverrides), _menuItem.menuItemOverrides), _radioGroup.radioGroupOverrides), {}, {
    MuiSkeleton: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(255, 255, 255, 0.15)"
        }
      }
    }
  })
});
var _default = exports["default"] = theme;