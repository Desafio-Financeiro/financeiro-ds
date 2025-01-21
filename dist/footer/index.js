"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Footer = Footer;
var _material = require("@mui/material");
var _illustration = require("../illustration");
var _iconButton = require("../iconButton");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function Footer() {
  var theme = (0, _material.useTheme)();
  return /*#__PURE__*/React.createElement(_material.Box, {
    component: "footer",
    sx: {
      backgroundColor: theme.palette.common.black,
      width: "100%",
      padding: "24px 60px"
    }
  }, /*#__PURE__*/React.createElement(_material.Box, {
    maxWidth: "1200px",
    display: "flex",
    justifyContent: "space-between",
    margin: "0 auto",
    sx: _defineProperty({
      gap: "24px",
      flexDirection: "row"
    }, "@media (max-width: ".concat(theme.breakpoints.values.sm, "px)"), {
      gap: "32px",
      flexDirection: "column"
    })
  }, /*#__PURE__*/React.createElement(_material.Box, {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    fontWeight: "bold",
    color: "common.white"
  }, "Servi\xE7os"), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    color: "common.white"
  }, "Conta corrente"), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    color: "common.white"
  }, "Conta PJ"), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    color: "common.white"
  }, "Cart\xE3o de cr\xE9dito")), /*#__PURE__*/React.createElement(_material.Box, {
    display: "flex",
    flexDirection: "column",
    gap: "16px"
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    fontWeight: "bold",
    color: "common.white"
  }, "Contato"), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    color: "common.white"
  }, "0800 004 250 08"), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    color: "common.white"
  }, "meajuda@bytebank.com.br"), /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    color: "common.white"
  }, "ouvidoria@bytebank.com.br")), /*#__PURE__*/React.createElement(_material.Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    gap: "24px"
  }, /*#__PURE__*/React.createElement(_material.Typography, {
    variant: "body1",
    fontWeight: "bold",
    color: "common.white"
  }, "Desenvolvido por Alura"), /*#__PURE__*/React.createElement(_illustration.Illustration, {
    name: "logoWhite"
  }), /*#__PURE__*/React.createElement(_material.Box, {
    display: "flex",
    gap: "24px"
  }, /*#__PURE__*/React.createElement(_iconButton.IconButton, {
    variant: "dark",
    icon: "mdiInstagram",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(_iconButton.IconButton, {
    variant: "dark",
    icon: "mdiWhatsapp",
    onClick: function onClick() {}
  }), /*#__PURE__*/React.createElement(_iconButton.IconButton, {
    variant: "dark",
    icon: "mdiYoutube",
    onClick: function onClick() {}
  })))));
}