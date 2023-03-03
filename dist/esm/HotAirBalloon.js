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
function SvgHotAirBalloon(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 9.5c0 4.571 5.714 8 5.714 8h4.572S20 14.071 20 9.5s-3.582-8-8-8-8 3.429-8 8z", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M9 2c-3 6 1 15.5 1 15.5M14.884 2c3 6-1 15.5-1 15.5", stroke: "currentColor", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M13.4 23h-2.8a.6.6 0 01-.6-.6v-1.8a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6v1.8a.6.6 0 01-.6.6z", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgHotAirBalloon);
export default ForwardRef;
