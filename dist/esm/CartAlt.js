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
function SvgCartAlt(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M19.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM9.5 22a1.5 1.5 0 100-3 1.5 1.5 0 000 3z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M16.5 4H22l-2 11h-4.5m1-11l-1 11m1-11h-5.75m4.75 11h-4m-.75-11H5l2 11h4.5m-.75-11l.75 11M5 4c-.167-.667-1-2-3-2M20 15H5.23c-1.784 0-2.73.781-2.73 2 0 1.219.946 2 2.73 2H19.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgCartAlt);
export default ForwardRef;
