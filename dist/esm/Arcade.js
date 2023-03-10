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
function SvgArcade(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M11 8.5L9.8 9l-7.448 3.386a.6.6 0 00-.352.546v.136a.6.6 0 00.352.546l8.82 4.01a2 2 0 001.656 0l8.82-4.01a.6.6 0 00.352-.546v-.136a.6.6 0 00-.352-.546L14.2 9 13 8.5", stroke: "currentColor" }),
        React.createElement(Path, { d: "M22 13v4.112a.6.6 0 01-.354.547l-8.825 3.972a2 2 0 01-1.642 0l-8.825-3.972A.6.6 0 012 17.112V13", stroke: "currentColor" }),
        React.createElement(Path, { d: "M12 8a3 3 0 110-6 3 3 0 010 6z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M11 8v5a1 1 0 001 1v0a1 1 0 001-1V8", stroke: "currentColor" }),
        React.createElement(Path, { d: "M16 13h1", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgArcade);
export default ForwardRef;
