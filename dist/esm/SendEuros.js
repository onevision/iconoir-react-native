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
function SvgSendEuros(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M13 12h8m0 0l-3.84-4M21 12l-3.84 4M11 7.503A4.746 4.746 0 008.87 7C6.18 7 4 9.239 4 12s2.18 5 4.87 5c.764 0 1.487-.18 2.13-.503M3 11h6M3 13h6", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgSendEuros);
export default ForwardRef;
