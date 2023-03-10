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
function SvgView360(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 8.5h1.75m0 0a1.75 1.75 0 110 3.5H3m2.75-3.5a1.75 1.75 0 100-3.5H3M21 15c0 3.314-4.03 6-9 6s-9-2.686-9-6M14 5h-1a3 3 0 00-3 3v2m4.5-.5v.5a2 2 0 01-2 2H12a2 2 0 01-2-2v-.5a2 2 0 012-2h.5a2 2 0 012 2zM17 8.5V7a2 2 0 012-2h.5a2 2 0 012 2v3a2 2 0 01-2 2H19a2 2 0 01-2-2V8.5z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgView360);
export default ForwardRef;
