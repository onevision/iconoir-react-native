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
function SvgHistoricShield(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 15.528V2.6a.6.6 0 01.6-.6h14.8a.6.6 0 01.6.6v12.928a4 4 0 01-2.211 3.578l-5.52 2.76a.6.6 0 01-.537 0l-5.52-2.76A4 4 0 014 15.528z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgHistoricShield);
export default ForwardRef;
