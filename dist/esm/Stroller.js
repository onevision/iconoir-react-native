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
function SvgStroller(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(G, { clipPath: "url(#stroller_svg__clip0)", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement(Path, { d: "M11.5 3a8.5 8.5 0 00-7.212 13M18.712 16A8.46 8.46 0 0020 11.5v-2h2.5M8 21a2 2 0 110-4 2 2 0 010 4zM15 21a2 2 0 110-4 2 2 0 010 4zM11.5 3v9M3.5 12h16" })),
        React.createElement(Defs, null,
            React.createElement(ClipPath, { id: "stroller_svg__clip0" },
                React.createElement(Path, { fill: "#fff", d: "M0 0h24v24H0z" })))));
}
var ForwardRef = React.forwardRef(SvgStroller);
export default ForwardRef;
