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
function SvgRemoveLink(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M7.143 16.995c-.393 0-.775-.043-1.143-.123-2.29-.506-4-2.496-4-4.874 0-2.714 2.226-4.923 5-4.996M13.318 9.634A5.517 5.517 0 0011 7.5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M16.857 7c.393 0 .775.043 1.143.124 2.29.505 4 2.495 4 4.874 0 2.76-2.302 4.997-5.143 4.997h-1.714c-2.826 0-5.143-2.506-5.143-4.997 0 0 0-.998.5-1.498M3 3l18 18", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgRemoveLink);
export default ForwardRef;
