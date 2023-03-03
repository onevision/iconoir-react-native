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
function SvgDialpad(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M5.5 5a.5.5 0 110-1 .5.5 0 010 1zM5.5 10a.5.5 0 110-1 .5.5 0 010 1zM5.5 15a.5.5 0 110-1 .5.5 0 010 1zM12 5a.5.5 0 110-1 .5.5 0 010 1zM12 10a.5.5 0 110-1 .5.5 0 010 1zM12 15a.5.5 0 110-1 .5.5 0 010 1zM12 20a.5.5 0 110-1 .5.5 0 010 1zM18.5 5a.5.5 0 110-1 .5.5 0 010 1zM18.5 10a.5.5 0 110-1 .5.5 0 010 1zM18.5 15a.5.5 0 110-1 .5.5 0 010 1z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgDialpad);
export default ForwardRef;
