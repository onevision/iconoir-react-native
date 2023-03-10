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
function SvgClipboardCheck(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M8.5 4H6a2 2 0 00-2 2v14a2 2 0 002 2h6M15.5 4H18a2 2 0 012 2v9", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M8 6.4V4.5a.5.5 0 01.5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 01.5.5v1.9a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6z", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M15.5 20.5l2 2 5-5", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgClipboardCheck);
export default ForwardRef;
