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
function SvgVideoProjector(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 19h2M18 19h2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M2 16.4V7.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v8.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M5 10.01l.01-.011M8 10.01l.01-.011M11 10.01l.01-.011M5 14.01l.01-.011M8 14.01l.01-.011M11 14.01l.01-.011M17 14a2 2 0 100-4 2 2 0 000 4z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgVideoProjector);
export default ForwardRef;
