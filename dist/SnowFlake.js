"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_svg_1 = __importStar(require("react-native-svg"));
var IconoirContext_1 = require("./IconoirContext");
function SvgSnowFlake(passedProps, svgRef) {
    var context = React.useContext(IconoirContext_1.IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(react_native_svg_1.default, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(react_native_svg_1.Path, { d: "M3 7l3.5 2M21 17l-3.5-2M12 12L6.5 9m5.5 3l-5.5 3m5.5-3V5m0 7v6.5m0-6.5l5.5 3M12 12l5.5-3M12 2v3m0 17v-3.5M21 7l-3.5 2M3 17l3.5-2m0-6L3 10m3.5-1L6 5.5m.5 9.5L3 14m3.5 1L6 18.5M12 5L9.5 4M12 5l2.5-1M12 18.5l2.5 1.5M12 18.5L9.5 20m8-5l.5 3.5m-.5-3.5l3.5-1m-3.5-5l3.5 1m-3.5-1l.5-3.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgSnowFlake);
exports.default = ForwardRef;
