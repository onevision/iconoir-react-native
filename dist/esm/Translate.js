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
function SvgTranslate(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M2 5h7m7 0h-2.5M9 5h4.5M9 5V3m4.5 2c-.82 2.735-2.539 5.32-4.5 7.593M4 17.5c1.585-1.359 3.376-3.026 5-4.907m0 0C8 11.5 6.4 9.3 6 8.5m3 4.093l3 2.907M13.5 21l1.143-3m6.857 3l-1.143-3m-5.714 0l2.857-7.5 2.857 7.5m-5.714 0h5.714", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgTranslate);
export default ForwardRef;
