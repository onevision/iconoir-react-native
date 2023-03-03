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
function SvgWindows(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 16.986V7.014a.6.6 0 01.507-.593l14.8-2.313a.6.6 0 01.693.593v14.598a.6.6 0 01-.693.593l-14.8-2.313A.6.6 0 014 16.986zM4 12h16M10.5 5.5v13", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgWindows);
export default ForwardRef;
