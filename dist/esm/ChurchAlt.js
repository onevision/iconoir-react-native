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
function SvgChurchAlt(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M7.576 7.424a.6.6 0 01.848 0l3.4 3.4a.6.6 0 01.176.425V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6V11.249a.6.6 0 01.176-.425l3.4-3.4zM8 7V4m0-2v2m0 0H6m2 0h2", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M12 22h7.4a.6.6 0 00.6-.6V10.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0016.252 7H8M8 22v-5M8 13.01l.01-.011", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgChurchAlt);
export default ForwardRef;
