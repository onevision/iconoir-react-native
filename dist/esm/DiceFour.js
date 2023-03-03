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
function SvgDiceFour(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M7.5 8a.5.5 0 110-1 .5.5 0 010 1zM16.5 8a.5.5 0 110-1 .5.5 0 010 1zM7.5 17a.5.5 0 110-1 .5.5 0 010 1zM16.5 17a.5.5 0 110-1 .5.5 0 010 1z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgDiceFour);
export default ForwardRef;
