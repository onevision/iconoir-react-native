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
function SvgVerifiedBadge(passedProps, svgRef) {
    var context = React.useContext(IconoirContext_1.IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(react_native_svg_1.default, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(react_native_svg_1.Path, { d: "M11.528 1.6a.6.6 0 01.944 0l1.809 2.3a.6.6 0 00.635.207l2.815-.798a.6.6 0 01.764.554l.11 2.925a.6.6 0 00.393.54l2.747 1.01a.6.6 0 01.292.897l-1.63 2.431a.6.6 0 000 .668l1.63 2.431a.6.6 0 01-.292.897l-2.747 1.01a.6.6 0 00-.392.54l-.111 2.925a.6.6 0 01-.764.554l-2.815-.798a.6.6 0 00-.636.206L12.473 22.4a.6.6 0 01-.944 0L9.72 20.1a.6.6 0 00-.635-.207l-2.815.798a.6.6 0 01-.764-.554l-.11-2.925a.6.6 0 00-.393-.54l-2.747-1.01a.6.6 0 01-.292-.897l1.63-2.431a.6.6 0 000-.668l-1.63-2.431a.6.6 0 01.292-.897l2.747-1.01a.6.6 0 00.392-.54l.111-2.925a.6.6 0 01.764-.554l2.815.798A.6.6 0 009.72 3.9L11.53 1.6z", stroke: "currentColor" }),
        React.createElement(react_native_svg_1.Path, { d: "M9 12l2 2 4-4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgVerifiedBadge);
exports.default = ForwardRef;
