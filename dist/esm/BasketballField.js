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
function SvgBasketballField(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M12 5h9.4a.6.6 0 01.6.6v12.8a.6.6 0 01-.6.6H12m0-14H2.6a.6.6 0 00-.6.6v12.8a.6.6 0 00.6.6H12m0-14v14", stroke: "currentColor" }),
        React.createElement(Path, { d: "M12 15a3 3 0 110-6 3 3 0 010 6zM2 17A5 5 0 002 7M22 17a5 5 0 010-10", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgBasketballField);
export default ForwardRef;
