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
function SvgCalculator(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M1 21V3a2 2 0 012-2h18a2 2 0 012 2v18a2 2 0 01-2 2H3a2 2 0 01-2-2z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M15 7h4M15 15.5h4M15 18.5h4M5 7h2m2 0H7m0 0V5m0 2v2M5.586 18.414L7 17m1.415-1.414L7 17m0 0l-1.414-1.414M7 17l1.415 1.414", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgCalculator);
export default ForwardRef;
