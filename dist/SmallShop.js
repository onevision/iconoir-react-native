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
function SvgSmallShop(passedProps, svgRef) {
    var context = React.useContext(IconoirContext_1.IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(react_native_svg_1.default, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(react_native_svg_1.Path, { d: "M21.818 9.364l-1.694-5.929A.6.6 0 0019.547 3H15.5l.475 5.704a.578.578 0 00.278.45c.39.233 1.152.663 1.747.846 1.016.313 2.5.2 3.346.096a.57.57 0 00.472-.732z", stroke: "currentColor" }),
        React.createElement(react_native_svg_1.Path, { d: "M14 10c.568-.175 1.288-.574 1.69-.812a.578.578 0 00.28-.549L15.5 3h-7l-.47 5.639a.578.578 0 00.28.55c.402.237 1.122.636 1.69.811 1.493.46 2.507.46 4 0z", stroke: "currentColor" }),
        React.createElement(react_native_svg_1.Path, { d: "M3.876 3.435l-1.694 5.93a.57.57 0 00.472.73c.845.105 2.33.217 3.346-.095.595-.183 1.358-.613 1.747-.845a.578.578 0 00.278-.451L8.5 3H4.453a.6.6 0 00-.577.435z", stroke: "currentColor" }),
        React.createElement(react_native_svg_1.Path, { d: "M3 10v9a2 2 0 002 2h14a2 2 0 002-2v-9", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgSmallShop);
exports.default = ForwardRef;
