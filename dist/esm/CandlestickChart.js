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
function SvgCandlestickChart(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M5 16v-2M12 21v-2M19 13v-2M5 8V6M12 13v-2M19 5V3M7 8.6v4.8a.6.6 0 01-.6.6H3.6a.6.6 0 01-.6-.6V8.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6zM14 13.6v4.8a.6.6 0 01-.6.6h-2.8a.6.6 0 01-.6-.6v-4.8a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6zM21 5.6v4.8a.6.6 0 01-.6.6h-2.8a.6.6 0 01-.6-.6V5.6a.6.6 0 01.6-.6h2.8a.6.6 0 01.6.6z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgCandlestickChart);
export default ForwardRef;
