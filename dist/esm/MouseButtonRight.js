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
function SvgMouseButtonRight(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 10v4a8 8 0 1016 0V9a7 7 0 00-7-7h-1a8 8 0 00-8 8z", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M12 2v6.4a.6.6 0 00.6.6H20", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgMouseButtonRight);
export default ForwardRef;
