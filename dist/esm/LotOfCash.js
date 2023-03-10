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
function SvgLotOfCash(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 18v-8a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2H6a2 2 0 01-2-2zM18.5 14.01l.01-.011M7.5 14.01l.01-.011", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M4 16H3a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v2M13 16a2 2 0 110-4 2 2 0 010 4z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgLotOfCash);
export default ForwardRef;
