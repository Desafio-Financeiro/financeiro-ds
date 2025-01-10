"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.iconNameParser = iconNameParser;
function iconNameParser(name) {
  if (name.match(/([A-Z])/)) {
    return name.replace(/([A-Z])/g, "-$1").toLowerCase().replace("mdi-", "mdi:");
  }
  return name;
}