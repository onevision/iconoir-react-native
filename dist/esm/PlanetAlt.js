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
import Svg, { Circle, Path } from "react-native-svg";
import { IconoirContext } from "./IconoirContext";
function SvgPlanetAlt(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Circle, { cx: 12, cy: 12, r: 8, stroke: "currentColor" }),
        React.createElement(Path, { d: "M19.812 12.99c1.813 1.51 2.755 2.864 2.362 3.651-.731 1.467-5.805.42-11.333-2.336C5.312 11.55 1.423 8.126 2.154 6.66c.392-.786 2.033-.85 4.322-.315", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgPlanetAlt);
export default ForwardRef;
