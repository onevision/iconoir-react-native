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
function SvgCardWallet(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", strokeWidth: 1.5, height: "1.5em", viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M19 20H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v9a2 2 0 01-2 2zM7 7V3.6a.6.6 0 01.6-.6h8.8a.6.6 0 01.6.6V7M10 3v4M12 3v4", stroke: "currentColor" }),
        React.createElement(Path, { d: "M16.5 14a.5.5 0 110-1 .5.5 0 010 1z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgCardWallet);
export default ForwardRef;
