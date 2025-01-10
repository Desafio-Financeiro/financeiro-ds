"use strict";

var _vitest = require("vitest");
var _iconNameParser = require("./iconNameParser");
(0, _vitest.describe)("iconNameParser", function () {
  (0, _vitest.it)("should return legacy name to iconify", function () {
    (0, _vitest.expect)((0, _iconNameParser.iconNameParser)("mdiRocketLaunch")).toBe("mdi:rocket-launch");
  });
  (0, _vitest.it)("should return original name to iconify", function () {
    (0, _vitest.expect)((0, _iconNameParser.iconNameParser)("mdi:rocket-launch")).toBe("mdi:rocket-launch");
  });
});