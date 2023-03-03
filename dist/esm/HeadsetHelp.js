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
function SvgHeadsetHelp(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M20 11a8 8 0 10-16 0", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M2 15.438v-1.876a2 2 0 011.515-1.94l1.74-.436a.6.6 0 01.745.582v5.463a.6.6 0 01-.746.583l-1.74-.435A2 2 0 012 15.439zM22 15.438v-1.876a2 2 0 00-1.515-1.94l-1.74-.436a.6.6 0 00-.745.582v5.463a.6.6 0 00.745.583l1.74-.435A2 2 0 0022 15.439zM20 18v.5a2 2 0 01-2 2h-3.5", stroke: "currentColor" }),
        React.createElement(Path, { d: "M13.5 22h-3a1.5 1.5 0 010-3h3a1.5 1.5 0 010 3z", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgHeadsetHelp);
export default ForwardRef;
