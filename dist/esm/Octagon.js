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
function SvgOctagon(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M11.77 1.095a.6.6 0 01.46 0l7.319 3.032a.6.6 0 01.324.324l3.032 7.32a.6.6 0 010 .459l-3.032 7.319a.6.6 0 01-.324.324l-7.32 3.032a.6.6 0 01-.459 0l-7.319-3.032a.6.6 0 01-.324-.324l-3.032-7.32a.6.6 0 010-.459l3.032-7.319a.6.6 0 01.324-.324l7.32-3.032z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgOctagon);
export default ForwardRef;
