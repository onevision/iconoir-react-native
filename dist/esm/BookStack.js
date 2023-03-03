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
function SvgBookStack(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", strokeWidth: 1.5, height: "1.5em", viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M5 19.5V5a2 2 0 012-2h11.4a.6.6 0 01.6.6V21M9 7h6M6.5 15H19M6.5 18H19M6.5 21H19", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M6.5 18c-1 0-1.5-.672-1.5-1.5S5.5 15 6.5 15M6.5 21c-1 0-1.5-.672-1.5-1.5S5.5 18 6.5 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgBookStack);
export default ForwardRef;
