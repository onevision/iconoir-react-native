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
function SvgRotateCameraLeft(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M2.05 3v4.497c0 .278.226.503.504.503v0c.2 0 .38-.119.466-.3A10.001 10.001 0 0112.05 2c5.186 0 9.45 3.947 9.951 9M22.001 21v-4.497a.503.503 0 00-.503-.503v0a.52.52 0 00-.465.3A10.001 10.001 0 0112 22c-5.185 0-9.448-3.947-9.95-9", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M6 16.4V9.394a.6.6 0 01.6-.6h1.173a.6.6 0 00.504-.275l1.446-2.244A.6.6 0 0110.227 6h3.546a.6.6 0 01.504.275l1.446 2.244a.6.6 0 00.504.275H17.4a.6.6 0 01.6.6V16.4a.6.6 0 01-.6.6H6.6a.6.6 0 01-.6-.6z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M12 14a2 2 0 100-4 2 2 0 000 4z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgRotateCameraLeft);
export default ForwardRef;
