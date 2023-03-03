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
function SvgDoubleCheck(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M1.5 12.5l4.076 4.076a.6.6 0 00.848 0L9 14M16 7l-4 4", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M7 12l4.576 4.576a.6.6 0 00.848 0L22 7", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgDoubleCheck);
export default ForwardRef;
