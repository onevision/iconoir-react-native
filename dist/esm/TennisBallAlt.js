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
function SvgTennisBallAlt(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M20.66 7c2.762 4.783 1.123 10.899-3.66 13.66C12.217 23.422 6.101 21.783 3.34 17 .578 12.217 2.217 6.1 7 3.34 11.783.578 17.899 2.217 20.66 7zM21.46 15.242c-4.986-3.303-7.582-7.8-7.538-13.056M10.078 21.814C9.71 15.844 7.114 11.347 2.54 8.758", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgTennisBallAlt);
export default ForwardRef;
