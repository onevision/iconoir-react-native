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
function SvgNetwork(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Rect, { x: 3, y: 2, width: 7, height: 5, rx: 0.6, stroke: "currentColor" }),
        React.createElement(Rect, { x: 8.5, y: 17, width: 7, height: 5, rx: 0.6, stroke: "currentColor" }),
        React.createElement(Rect, { x: 14, y: 2, width: 7, height: 5, rx: 0.6, stroke: "currentColor" }),
        React.createElement(Path, { d: "M6.5 7v3.5a2 2 0 002 2h7a2 2 0 002-2V7M12 12.5V17", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgNetwork);
export default ForwardRef;
