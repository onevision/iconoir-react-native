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
function SvgHerSlips(passedProps, svgRef) {
    var context = React.useContext(IconoirContext_1.IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(react_native_svg_1.default, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(react_native_svg_1.Path, { d: "M1 4.6a.6.6 0 01.6-.6h20.8a.6.6 0 01.6.6v3.912c0 .284-.199.53-.476.595-1.052.247-3.635.914-5.524 1.893-3.444 1.786-3.93 6.655-3.993 8.382a.637.637 0 01-.627.618h-.76a.637.637 0 01-.627-.618C10.93 17.655 10.443 12.786 7 11c-1.889-.98-4.472-1.646-5.524-1.893A.614.614 0 011 8.512V4.6z", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgHerSlips);
exports.default = ForwardRef;
