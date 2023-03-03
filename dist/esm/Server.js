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
function SvgServer(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M6 18.01l.01-.011M6 6.01l.01-.011", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M2 9.4V2.6a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6zM2 21.4v-6.8a.6.6 0 01.6-.6h18.8a.6.6 0 01.6.6v6.8a.6.6 0 01-.6.6H2.6a.6.6 0 01-.6-.6z", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgServer);
export default ForwardRef;
