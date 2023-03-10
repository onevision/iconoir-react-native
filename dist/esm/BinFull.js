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
function SvgBinFull(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M19.262 17.038l1.676-12.575a.6.6 0 00-.372-.636L16 2h-5.5l-.682 1.5L5 2 3.21 3.79a.6.6 0 00-.17.504l1.698 12.744a4 4 0 001.98 2.944l.32.183a10 10 0 009.923 0l.32-.183a4 4 0 001.98-2.944zM16 2l-2 5M9 6.5l.818-3M3 5c2.571 2.667 15.429 2.667 18 0", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgBinFull);
export default ForwardRef;
