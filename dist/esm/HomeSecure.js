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
function SvgHomeSecure(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M14 12h.4a.6.6 0 01.6.6v2.8a.6.6 0 01-.6.6H9.6a.6.6 0 01-.6-.6v-2.8a.6.6 0 01.6-.6h.4m4 0v-2c0-.667-.4-2-2-2s-2 1.333-2 2v2m4 0h-4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M2 8l9.732-4.866a.6.6 0 01.536 0L22 8M20 11v8a2 2 0 01-2 2H6a2 2 0 01-2-2v-8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgHomeSecure);
export default ForwardRef;
