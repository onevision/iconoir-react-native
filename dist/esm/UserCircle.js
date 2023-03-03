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
import Svg, { Path, Circle } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgUserCircle(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M7 18v-1a5 5 0 015-5v0a5 5 0 015 5v1", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M12 12a3 3 0 100-6 3 3 0 000 6z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Circle, { cx: 12, cy: 12, r: 10, stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgUserCircle);
export default ForwardRef;
