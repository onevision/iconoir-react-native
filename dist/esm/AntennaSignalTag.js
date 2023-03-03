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
function SvgAntennaSignalTag(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M2 15V9a6 6 0 016-6h8a6 6 0 016 6v6a6 6 0 01-6 6H8a6 6 0 01-6-6z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M15 9s1 1.125 1 3-1 3-1 3M12 12.01l.01-.011M17 7s2 1.786 2 5-2 5-2 5M9 9s-1 1.125-1 3 1 3 1 3M7 7s-2 1.786-2 5 2 5 2 5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgAntennaSignalTag);
export default ForwardRef;
