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
function SvgBrightStar(passedProps, svgRef) {
    var context = React.useContext(IconoirContext_1.IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(react_native_svg_1.default, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(react_native_svg_1.G, { clipPath: "url(#bright-star_svg__clip0_3057_14628)", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement(react_native_svg_1.Path, { d: "M9.952 9.623l1.559-3.305a.535.535 0 01.978 0l1.559 3.305 3.485.533c.447.068.625.644.302.974l-2.522 2.57.595 3.631c.077.467-.391.822-.791.602L12 16.218l-3.117 1.715c-.4.22-.868-.135-.791-.602l.595-3.63-2.522-2.571c-.323-.33-.145-.906.302-.974l3.485-.533zM22 12h1M12 2V1M12 23v-1M20 20l-1-1M20 4l-1 1M4 20l1-1M4 4l1 1M1 12h1" })),
        React.createElement(react_native_svg_1.Defs, null,
            React.createElement(react_native_svg_1.ClipPath, { id: "bright-star_svg__clip0_3057_14628" },
                React.createElement(react_native_svg_1.Path, { fill: "#fff", d: "M0 0h24v24H0z" })))));
}
var ForwardRef = React.forwardRef(SvgBrightStar);
exports.default = ForwardRef;
