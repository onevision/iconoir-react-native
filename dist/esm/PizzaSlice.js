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
function SvgPizzaSlice(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M14 9.01l.01-.011M8 8.01l.01-.011M8 14.01l.01-.011", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M6 19L2.236 3.004a.6.6 0 01.754-.713L19 7", stroke: "currentColor" }),
        React.createElement(Path, { d: "M22.198 8.425a1.75 1.75 0 00-3.396-.85c-.391 1.568-1.9 4.05-4.227 6.375-2.3 2.301-5.148 4.194-7.968 4.845a1.75 1.75 0 10.787 3.41c3.68-.849 7.082-3.206 9.656-5.78 2.549-2.549 4.54-5.568 5.148-8z", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgPizzaSlice);
export default ForwardRef;
