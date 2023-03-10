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
function SvgMetro(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M14 16.01l.01-.011M10 16.01l.01-.011M22 12v3a5 5 0 01-5 5H7a5 5 0 01-5-5v-3C2 6.477 6.477 2 12 2s10 4.477 10 10z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M18 12v3a5 5 0 01-5 5h-2a5 5 0 01-5-5v-3a5 5 0 015-5h2a5 5 0 015 5z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M10.5 20l-2 2.5M13.5 20l2 2.5M16.5 20l2 2.5M7.5 20l-2 2.5", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M11.786 10h.428C13.2 10 14 10.8 14 11.786a.214.214 0 01-.214.214h-3.572a.214.214 0 01-.214-.214C10 10.8 10.8 10 11.786 10z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgMetro);
export default ForwardRef;
