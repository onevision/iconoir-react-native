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
function SvgAirplaneHelix(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M12 15a3 3 0 100-6 3 3 0 000 6z", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { clipRule: "evenodd", d: "M12 9s-1.988-1.975-2-4c.001-1.993-.05-4.001 2-4 1.948.001 1.997 1.976 2 4 .003 1.985-2 4-2 4zM15 12s1.975-1.988 4-2c1.993.001 4.001-.05 4 2-.001 1.948-1.976 1.997-4 2-1.985.003-4-2-4-2zM9 12s-1.975 1.988-4 2c-1.993-.001-4.001.05-4-2 .001-1.948 1.976-1.997 4-2 1.985-.003 4 2 4 2zM12 15s1.988 1.975 2 4c-.001 1.993.05 4.001-2 4-1.948-.001-1.997-1.976-2-4-.003-1.985 2-4 2-4z", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgAirplaneHelix);
export default ForwardRef;
