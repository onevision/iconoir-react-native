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
function SvgPenConnectWifi(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M8 9.76l.01-.011M3 6.25c2.5-3 7.5-3 10 0M5 8.25c1.5-2 4.5-2 6 0M17.5 6.5l1-1a2.121 2.121 0 013 0v0a2.121 2.121 0 010 3l-1 1m-3-3L6.696 17.304a1 1 0 00-.263.465L5.5 21.5l3.731-.933a1 1 0 00.465-.263L20.5 9.5m-3-3l3 3", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgPenConnectWifi);
export default ForwardRef;
