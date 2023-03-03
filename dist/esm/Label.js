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
function SvgLabel(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M3 17.4V6.6a.6.6 0 01.6-.6h13.079c.2 0 .388.1.5.267l3.6 5.4a.6.6 0 010 .666l-3.6 5.4a.6.6 0 01-.5.267H3.6a.6.6 0 01-.6-.6z", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgLabel);
export default ForwardRef;
