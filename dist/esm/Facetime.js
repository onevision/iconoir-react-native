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
function SvgFacetime(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M2 16V8a6 6 0 016-6h8a6 6 0 016 6v8a6 6 0 01-6 6H8a6 6 0 01-6-6z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M6 13v-2a2 2 0 012-2h3a2 2 0 012 2v2a2 2 0 01-2 2H8a2 2 0 01-2-2z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M17.04 9.22l-3.067 2.3a.6.6 0 000 .96l3.067 2.3a.6.6 0 00.96-.48V9.7a.6.6 0 00-.96-.48z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgFacetime);
export default ForwardRef;
