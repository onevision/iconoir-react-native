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
function SvgSettingsProfiles(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M11.607 2.342a.6.6 0 01.787 0l1.948 1.692a.6.6 0 00.445.145l2.572-.224a.6.6 0 01.636.463l.582 2.514a.6.6 0 00.275.38l2.212 1.33a.6.6 0 01.243.748l-1.008 2.376a.6.6 0 000 .468l1.008 2.376a.6.6 0 01-.243.749l-2.212 1.33a.6.6 0 00-.275.379l-.582 2.514a.6.6 0 01-.636.463l-2.572-.224a.6.6 0 00-.445.144l-1.949 1.693a.6.6 0 01-.787 0l-1.948-1.693a.6.6 0 00-.445-.144l-2.572.224a.6.6 0 01-.636-.463l-.582-2.514a.6.6 0 00-.275-.38l-2.212-1.33a.6.6 0 01-.243-.748l1.008-2.376a.6.6 0 000-.468L2.693 9.39a.6.6 0 01.243-.749l2.212-1.33a.6.6 0 00.275-.379l.582-2.514a.6.6 0 01.636-.463l2.572.224a.6.6 0 00.445-.145l1.949-1.692z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M9 13l2 2 5-5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgSettingsProfiles);
export default ForwardRef;
