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
function SvgHeadsetIssue(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M12 12v5M12 21.01l.01-.011M4 13.5V13c0-4.97 3.582-9 8-9s8 4.03 8 9v.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M2 17.439v-1.877a2 2 0 011.515-1.94L4 13.5l1.254-.314a.6.6 0 01.746.582v5.464a.6.6 0 01-.746.582l-1.74-.435A2 2 0 012 17.439zM22 17.439v-1.877a2 2 0 00-1.515-1.94L20 13.5l-1.255-.314a.6.6 0 00-.745.582v5.464a.6.6 0 00.745.582l1.74-.435A2 2 0 0022 17.439z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgHeadsetIssue);
export default ForwardRef;
