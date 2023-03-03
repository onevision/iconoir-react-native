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
function SvgHexagonAlt(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(G, { clipPath: "url(#hexagon-alt_svg__clip0)" },
            React.createElement(Path, { d: "M6.327 2.774a.6.6 0 01.52-.3h10.307a.6.6 0 01.52.3l5.153 8.926a.6.6 0 010 .6l-5.154 8.926a.6.6 0 01-.52.3H6.847a.6.6 0 01-.52-.3L1.174 12.3a.6.6 0 010-.6l5.154-8.926z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })),
        React.createElement(Defs, null,
            React.createElement(ClipPath, { id: "hexagon-alt_svg__clip0" },
                React.createElement(Path, { fill: "#fff", d: "M0 0h24v24H0z" })))));
}
var ForwardRef = React.forwardRef(SvgHexagonAlt);
export default ForwardRef;
