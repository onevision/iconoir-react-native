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
function SvgThumbsDown(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M16.472 3.5H4.1a.6.6 0 00-.6.6v9.8a.6.6 0 00.6.6h2.768a2 2 0 011.715.971l2.71 4.517a1.631 1.631 0 002.961-1.308l-1.022-3.408a.6.6 0 01.574-.772h4.575a2 2 0 001.93-2.526l-1.91-7A2 2 0 0016.473 3.5z", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M7 14.5v-11", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgThumbsDown);
export default ForwardRef;
