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
function SvgNetworkLeft(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Rect, { x: 2, y: 21, width: 7, height: 5, rx: 0.6, transform: "rotate(-90 2 21)", stroke: "currentColor" }),
        React.createElement(Rect, { x: 17, y: 15.5, width: 7, height: 5, rx: 0.6, transform: "rotate(-90 17 15.5)", stroke: "currentColor" }),
        React.createElement(Rect, { x: 2, y: 10, width: 7, height: 5, rx: 0.6, transform: "rotate(-90 2 10)", stroke: "currentColor" }),
        React.createElement(Path, { d: "M7 17.5h3.5a2 2 0 002-2v-7a2 2 0 00-2-2H7M12.5 12H17", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgNetworkLeft);
export default ForwardRef;
