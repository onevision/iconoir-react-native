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
import Svg, { Circle, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgMoonSat(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Circle, { cx: 12, cy: 12, r: 10, stroke: "currentColor" }),
        React.createElement(Path, { d: "M7.633 3.067A3.001 3.001 0 114.017 6.32M22 13.05a3.5 3.5 0 10-3 5.914", stroke: "currentColor" }),
        React.createElement(Path, { d: "M14.5 8.51l.01-.011M10 17a2 2 0 100-4 2 2 0 000 4z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgMoonSat);
export default ForwardRef;
