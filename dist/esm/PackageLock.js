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
function SvgPackageLock(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M14 20H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v6M12 9V4M21.167 18.5h.233a.6.6 0 01.6.6v2.3a.6.6 0 01-.6.6h-3.8a.6.6 0 01-.6-.6v-2.3a.6.6 0 01.6-.6h.233m3.334 0v-1.75c0-.583-.334-1.75-1.667-1.75s-1.667 1.167-1.667 1.75v1.75m3.334 0h-3.334", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgPackageLock);
export default ForwardRef;
