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
function SvgEmojiSingLeftNote(passedProps, svgRef) {
    var context = React.useContext(IconoirContext_1.IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(react_native_svg_1.default, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(react_native_svg_1.Path, { d: "M2.8 8.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0z", fill: "currentColor" }),
        React.createElement(react_native_svg_1.Path, { d: "M2.8 8.1a.9.9 0 11-1.8 0 .9.9 0 011.8 0zm0 0V3.6a.6.6 0 01.6-.6H5", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(react_native_svg_1.Path, { d: "M8 17a2 2 0 100-4 2 2 0 000 4z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(react_native_svg_1.Path, { d: "M2.05 13c.501 5.053 4.765 9 9.95 9 5.523 0 10-4.477 10-10S17.523 2 12 2a9.966 9.966 0 00-4 .832", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(react_native_svg_1.Path, { d: "M15.5 9a.5.5 0 100-1 .5.5 0 000 1zM8.5 9a.5.5 0 100-1 .5.5 0 000 1z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgEmojiSingLeftNote);
exports.default = ForwardRef;
