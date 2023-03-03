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
function SvgTextBox(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M12 8v8m0-8H8m4 0h4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M21 13.5V19a2 2 0 01-2 2H5a2 2 0 01-2-2v-5.5m18-3V5a2 2 0 00-2-2H5a2 2 0 00-2 2v5.5M19.5 13.5v-3h3v3h-3zM1.5 13.5v-3h3v3h-3z", stroke: "currentColor", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgTextBox);
export default ForwardRef;
