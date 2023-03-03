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
import Svg, { Circle, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgRefreshCircular(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Circle, { cx: 12, cy: 12, r: 10, stroke: "currentColor" }),
        React.createElement(Path, { d: "M16.583 9.667C15.81 8.097 14.043 7 11.988 7 9.388 7 7.25 8.754 7 11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M14.494 9.722H16.4a.6.6 0 00.6-.6V7.5M7.417 13.667C8.191 15.629 9.957 17 12.012 17c2.6 0 4.736-2.193 4.988-5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M9.506 13.622H7.6a.6.6 0 00-.6.6V16.4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgRefreshCircular);
export default ForwardRef;
