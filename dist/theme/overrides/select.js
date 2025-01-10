"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectOverrides = void 0;
var selectOverrides = exports.selectOverrides = {
  MuiSelect: {
    styleOverrides: {
      root: {
        height: 48,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#47A138",
        backgroundColor: "#FFFFFF",
        "& .MuiSelect-icon": {
          color: "#47A138"
        }
      }
    },
    defaultProps: {
      MenuProps: {
        PaperProps: {
          sx: {
            bgcolor: "#FFFFFF"
          }
        }
      }
    }
  }
};