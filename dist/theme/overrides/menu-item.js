"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.menuItemOverrides = void 0;
var menuItemOverrides = exports.menuItemOverrides = {
  MuiMenuItem: {
    styleOverrides: {
      root: {
        fontWeight: 400,
        "&.Mui-selected": {
          fontWeight: 700
        },
        "&.menu-item-menu-component": {
          "&.active": {
            borderBottom: "1px solid #47A138",
            color: "#47A138",
            fontWeight: 700,
            background: "transparent",
            pointerEvents: "none"
          },
          "&:hover": {
            borderBottom: "1px solid #47A138",
            color: "#47A138",
            fontWeight: 700,
            background: "transparent"
          }
        }
      }
    }
  }
};