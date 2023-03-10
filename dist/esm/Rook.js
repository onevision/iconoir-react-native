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
function SvgRook(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M7 16h10M9 11h6M10 4v2M14 4v2M17.4 9H6.6a.6.6 0 01-.6-.6V4.6a.6.6 0 01.6-.6h10.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6zM17.901 21H6.099a.615.615 0 01-.521-.932C6.792 18.06 9.5 13.328 9.5 11V9.6a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6V11c0 2.327 2.708 7.061 3.922 9.068a.615.615 0 01-.521.932z", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgRook);
export default ForwardRef;
