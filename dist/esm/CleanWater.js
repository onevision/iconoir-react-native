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
function SvgCleanWater(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(G, { clipPath: "url(#clean-water_svg__clip0_2032_8261)", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement(Path, { d: "M13 21.57A8.132 8.132 0 016.25 7.75l5.326-5.326a.6.6 0 01.848 0L17.75 7.75A8.131 8.131 0 0119.74 16M16 20l2 2 4-4" })),
        React.createElement(Defs, null,
            React.createElement(ClipPath, { id: "clean-water_svg__clip0_2032_8261" },
                React.createElement(Path, { fill: "#fff", d: "M0 0h24v24H0z" })))));
}
var ForwardRef = React.forwardRef(SvgCleanWater);
export default ForwardRef;
