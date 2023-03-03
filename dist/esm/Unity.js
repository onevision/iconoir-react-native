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
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgUnity(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(G, { clipPath: "url(#unity_svg__clip0)" },
            React.createElement(Path, { d: "M4 13h9.5M4 13l4 4.5M4 13l4-4.5m5.5 4.5l5-9m-5 9l5 7m0-16l-6 1m6-1L20 9.5M18.5 20l1.5-5.5M18.5 20l-6-.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement(Defs, null,
            React.createElement(ClipPath, { id: "unity_svg__clip0" },
                React.createElement(Path, { fill: "#fff", d: "M0 0h24v24H0z" })))));
}
var ForwardRef = React.forwardRef(SvgUnity);
export default ForwardRef;
