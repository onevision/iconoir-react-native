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
function SvgBook(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", strokeWidth: 1.5, height: "1.5em", viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114M6 17h14M6 21h14", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M6 21a2 2 0 110-4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M9 7h6", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgBook);
export default ForwardRef;
