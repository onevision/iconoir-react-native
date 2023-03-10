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
function SvgMultiWindow(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M7 19v-8a2 2 0 012-2h11a2 2 0 012 2v8a2 2 0 01-2 2H9a2 2 0 01-2-2z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M6.5 16H4a2 2 0 01-2-2V6a2 2 0 012-2h11a2 2 0 012 2v3", stroke: "currentColor" }),
        React.createElement(Path, { d: "M10 12h1M5 7h1", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgMultiWindow);
export default ForwardRef;
