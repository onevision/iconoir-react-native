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
function SvgUserLove(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M12 12a4 4 0 100-8 4 4 0 000 8z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M22 17.28a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.823-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.233 0l.106.107.106-.107A2.277 2.277 0 0122 17.28z", stroke: "currentColor", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M5 20v-1a7 7 0 0110-6.326", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgUserLove);
export default ForwardRef;
