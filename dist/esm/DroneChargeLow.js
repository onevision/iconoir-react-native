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
function SvgDroneChargeLow(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M14.25 14.75l.25-2.25.426-3.834A.6.6 0 0014.33 8H9.67a.6.6 0 00-.596.666l.867 7.8a.6.6 0 00.596.534H11", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M4.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M4.5 4.5L9 8M4.5 19.5l5-4M19.5 4.5L15 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M4.5 22a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM19.5 7a2.5 2.5 0 100-5 2.5 2.5 0 000 5z", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M23 19v2M15 19v2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M13 22.4v-4.8a.6.6 0 01.6-.6h6.8a.6.6 0 01.6.6v4.8a.6.6 0 01-.6.6h-6.8a.6.6 0 01-.6-.6z", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgDroneChargeLow);
export default ForwardRef;
