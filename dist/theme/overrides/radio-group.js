"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.radioGroupOverrides = void 0;
var radioGroupOverrides = exports.radioGroupOverrides = {
  MuiFormLabel: {
    styleOverrides: {
      root: {
        color: "#DEE9EA",
        fontWeight: 600,
        fontSize: "16px",
        marginBottom: "14px",
        "&.Mui-focused": {
          color: "#DEE9EA"
        }
      }
    }
  },
  MuiFormControlLabel: {
    styleOverrides: {
      label: {
        fontSize: "14px !important"
      }
    }
  }
};