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
function SvgMoreVert(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M12 12.5a.5.5 0 100-1 .5.5 0 000 1zM12 18.5a.5.5 0 100-1 .5.5 0 000 1zM12 6.5a.5.5 0 100-1 .5.5 0 000 1z", fill: "currentColor", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgMoreVert);
export default ForwardRef;
