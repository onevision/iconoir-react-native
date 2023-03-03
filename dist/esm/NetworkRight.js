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
import Svg, { Rect, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgNetworkRight(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Rect, { width: 7, height: 5, rx: 0.6, transform: "matrix(0 -1 -1 0 22 21)", stroke: "currentColor" }),
        React.createElement(Rect, { width: 7, height: 5, rx: 0.6, transform: "matrix(0 -1 -1 0 7 15.5)", stroke: "currentColor" }),
        React.createElement(Rect, { width: 7, height: 5, rx: 0.6, transform: "matrix(0 -1 -1 0 22 10)", stroke: "currentColor" }),
        React.createElement(Path, { d: "M17 17.5h-3.5a2 2 0 01-2-2v-7a2 2 0 012-2H17M11.5 12H7", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgNetworkRight);
export default ForwardRef;
