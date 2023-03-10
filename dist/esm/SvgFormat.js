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
import Svg, { Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgSvgFormat(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4.5 15h2A1.5 1.5 0 008 13.5v0A1.5 1.5 0 006.5 12H6a1.5 1.5 0 01-1.5-1.5v0A1.5 1.5 0 016 9h1.5M10.5 9l1.5 6 1.5-6M19.5 9h-3v6h3v-2.4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M4 6V3.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6V6M4 18v2.4a.6.6 0 00.6.6h14.8a.6.6 0 00.6-.6V18", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgSvgFormat);
export default ForwardRef;
