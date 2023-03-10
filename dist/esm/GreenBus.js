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
function SvgGreenBus(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M7 16.01l.01-.011M21 12H3v7a1 1 0 001 1h9M17 23s.9-3.118 3-5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M19.802 21.424l-.134.013a3.094 3.094 0 01-3.366-2.774 3.06 3.06 0 012.761-3.35l2.986-.28a.35.35 0 01.381.314l.255 2.58a3.194 3.194 0 01-2.883 3.497zM21 8V6a4 4 0 00-4-4H7a4 4 0 00-4 4v2M7 8h10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M4.5 20v1.9a.6.6 0 00.6.6h2.8a.6.6 0 00.6-.6V20", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgGreenBus);
export default ForwardRef;
