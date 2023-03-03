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
function SvgPharmacyCrossCircle(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M13.9 18h-3.8a.6.6 0 01-.6-.6v-2.3a.6.6 0 00-.6-.6H6.6a.6.6 0 01-.6-.6v-3.8a.6.6 0 01.6-.6h2.3a.6.6 0 00.6-.6V6.6a.6.6 0 01.6-.6h3.8a.6.6 0 01.6.6v2.3a.6.6 0 00.6.6h2.3a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-2.3a.6.6 0 00-.6.6v2.3a.6.6 0 01-.6.6z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgPharmacyCrossCircle);
export default ForwardRef;
