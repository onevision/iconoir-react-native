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
function SvgColorPicker(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M7 13.161l5.464-5.464a1 1 0 011.415 0l2.12 2.12a1 1 0 010 1.415l-1.928 1.929m-7.071 0l-2.172 2.172a.999.999 0 00-.218.327l-1.028 2.496c-.508 1.233.725 2.466 1.958 1.959l2.497-1.028c.122-.05.233-.125.326-.218l5.708-5.708m-7.071 0h7.071M13.878 3.454l2.121 2.121m4.243 4.243l-2.121-2.121m-2.122-2.122l1.414-1.414a1 1 0 011.415 0l.707.707a1 1 0 010 1.414L18.12 7.697m-2.122-2.122l2.122 2.122", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgColorPicker);
export default ForwardRef;
