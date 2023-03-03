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
function SvgTwitterVerifiedBadge(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M10.521 2.624a2 2 0 012.958 0l1.02 1.12a2 2 0 001.572.651l1.513-.07a2 2 0 012.092 2.09l-.071 1.514a2 2 0 00.651 1.572l1.12 1.02a2 2 0 010 2.958l-1.12 1.02a2 2 0 00-.651 1.572l.07 1.513a2 2 0 01-2.09 2.092l-1.514-.071a2 2 0 00-1.572.651l-1.02 1.12a2 2 0 01-2.958 0l-1.02-1.12a2 2 0 00-1.572-.651l-1.513.07a2 2 0 01-2.092-2.09l.071-1.514a2 2 0 00-.651-1.572l-1.12-1.02a2 2 0 010-2.958l1.12-1.02a2 2 0 00.651-1.572l-.07-1.513a2 2 0 012.09-2.092l1.514.071a2 2 0 001.572-.651l1.02-1.12z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M9 12l2 2 4-4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgTwitterVerifiedBadge);
export default ForwardRef;
