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
function SvgSettingsCloud(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M3 20.4V3.6a.6.6 0 01.6-.6h16.8a.6.6 0 01.6.6v16.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M12 8c-3.273 0-3.273 2-3.273 3C7.818 11 6 11.5 6 13.5S7.818 16 8.727 16h6.546c.909 0 2.727-.5 2.727-2.5S16.182 11 15.273 11c0-1 0-3-3.273-3z", stroke: "currentColor", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgSettingsCloud);
export default ForwardRef;
