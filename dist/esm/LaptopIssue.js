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
function SvgLaptopIssue(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M3.2 14.222V4a2 2 0 012-2h13.6a2 2 0 012 2v10.222m-17.6 0h17.6m-17.6 0l-1.48 5.234A2 2 0 003.644 22h16.712a2 2 0 001.924-2.544l-1.48-5.234", stroke: "currentColor" }),
        React.createElement(Path, { d: "M12 5v3M12 11.01l.01-.011M11 19h2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgLaptopIssue);
export default ForwardRef;
