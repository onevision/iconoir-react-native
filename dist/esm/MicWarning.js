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
import * as React from "react";
import Svg, { Path, Rect } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMicWarning(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M21 14v4M21 22.01l.01-.011", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Rect, { x: 7, y: 2, width: 6, height: 12, rx: 3, stroke: "currentColor" }),
        React.createElement(Path, { d: "M3 10v1a7 7 0 007 7v0a7 7 0 007-7v-1M10 18v4m0 0H7m3 0h3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgMicWarning);
export default ForwardRef;
