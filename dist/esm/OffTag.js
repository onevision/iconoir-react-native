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
function SvgOffTag(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M1 15V9a6 6 0 016-6h10a6 6 0 016 6v6a6 6 0 01-6 6H7a6 6 0 01-6-6z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M7 9a3 3 0 110 6 3 3 0 010-6z", stroke: "currentColor" }),
        React.createElement(Path, { d: "M12 15V9h3M17 15V9h3M12 12h2.572M17 12h2.572", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgOffTag);
export default ForwardRef;
