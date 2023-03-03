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
function SvgCornerTopRight(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M20.01 16.01l-.01-.011M20.01 20.01l-.01-.011M16.01 20.01l-.01-.011M12.01 20.01l-.01-.011M8.01 20.01L8 19.999M4.01 20.01L4 19.999M4.01 16.01L4 15.999M4.01 12.01L4 11.999M4.01 8.01L4 7.999M4.01 4.01L4 3.999M8.01 4.01L8 3.999M20.01 12V4h-8v8h8z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgCornerTopRight);
export default ForwardRef;
