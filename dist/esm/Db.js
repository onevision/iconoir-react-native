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
function SvgDb(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M5 12v6s0 3 7 3 7-3 7-3v-6", stroke: "currentColor" }),
        React.createElement(Path, { d: "M5 6v6s0 3 7 3 7-3 7-3V6", stroke: "currentColor" }),
        React.createElement(Path, { d: "M12 3c7 0 7 3 7 3s0 3-7 3-7-3-7-3 0-3 7-3z", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgDb);
export default ForwardRef;
