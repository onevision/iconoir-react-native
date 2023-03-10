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
function SvgKeyframesCouple(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M15.819 13.329l-5.324 5.99a2 2 0 01-2.99 0l-5.324-5.99a2 2 0 010-2.658l5.324-5.99a2 2 0 012.99 0l5.324 5.99a2 2 0 010 2.658z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M12 6.375l1.505-1.693a2 2 0 012.99 0l5.324 5.99a2 2 0 010 2.657l-5.324 5.99a2 2 0 01-2.99 0L12 17.624", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgKeyframesCouple);
export default ForwardRef;
