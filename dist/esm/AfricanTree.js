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
function SvgAfricanTree(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(G, { clipPath: "url(#african-tree_svg__clip0_2032_8254)", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" },
            React.createElement(Path, { d: "M12 22V12m0-4v4m0 0l3-3M12.424 18.576l6.169-6.169a5.502 5.502 0 00-.513-8.234 9.904 9.904 0 00-12.16 0 5.502 5.502 0 00-.513 8.234l6.169 6.169a.6.6 0 00.848 0z" })),
        React.createElement(Defs, null,
            React.createElement(ClipPath, { id: "african-tree_svg__clip0_2032_8254" },
                React.createElement(Path, { fill: "#fff", d: "M0 0h24v24H0z" })))));
}
var ForwardRef = React.forwardRef(SvgAfricanTree);
export default ForwardRef;
