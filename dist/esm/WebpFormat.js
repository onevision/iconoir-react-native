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
function SvgWebpFormat(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 6V3.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6V6M4 18v2.4a.6.6 0 00.6.6h14.8a.6.6 0 00.6-.6V18", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M13.5 15V9h2.4a.6.6 0 01.6.6v.9A1.5 1.5 0 0115 12v0", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M13.5 15h2.4a.6.6 0 00.6-.6v-.9A1.5 1.5 0 0015 12v0h-1.5M19.5 15v-3m0 0V9h3v3h-3zM1.5 9v6L3 12l1.5 3V9M10.5 9h-3v6h3M7.5 12h2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgWebpFormat);
export default ForwardRef;
