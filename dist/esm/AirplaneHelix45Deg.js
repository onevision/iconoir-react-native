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
function SvgAirplaneHelix45Deg(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M14.12 14.121A3 3 0 109.879 9.88a3 3 0 004.243 4.242z", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { clipRule: "evenodd", d: "M9.879 9.879s-2.803.009-4.243-1.415c-1.409-1.41-2.864-2.793-1.414-4.242 1.378-1.377 2.81-.015 4.242 1.414C9.87 7.037 9.88 9.879 9.88 9.879zM14.121 9.879s-.009-2.803 1.415-4.243c1.41-1.409 2.793-2.864 4.242-1.414 1.377 1.378.015 2.81-1.414 4.242-1.402 1.406-4.243 1.415-4.243 1.415zM9.879 14.121s.009 2.803-1.415 4.243c-1.41 1.409-2.793 2.864-4.242 1.414-1.377-1.378-.015-2.81 1.414-4.242 1.401-1.406 4.243-1.415 4.243-1.415zM14.121 14.121s2.803-.009 4.243 1.415c1.409 1.41 2.864 2.793 1.414 4.242-1.378 1.377-2.81.015-4.242-1.414-1.406-1.402-1.415-4.243-1.415-4.243z", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgAirplaneHelix45Deg);
export default ForwardRef;
