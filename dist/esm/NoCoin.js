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
function SvgNoCoin(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4.623 5.248A9.964 9.964 0 002 12c0 5.523 4.477 10 10 10a9.962 9.962 0 006.615-2.5M21.302 15.678A9.974 9.974 0 0022 12c0-5.523-4.477-10-10-10-1.231 0-2.41.223-3.5.63", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M9 15c.644.86 1.843 1.35 3 1.391 1.114.04 2.19-.336 2.697-1.198M12 16.391V18.5M9.5 9.5c0 1.181.852 1.665 1.886 2M15 8.5c-.685-.685-1.891-1.161-3-1.191V5.5M3 3l18 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgNoCoin);
export default ForwardRef;
