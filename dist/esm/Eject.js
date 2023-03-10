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
function SvgEject(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M5 14l-.592-.46A.75.75 0 005 14.75V14zm14 0v.75a.75.75 0 00.592-1.21L19 14zm-14 .75h14v-1.5H5v1.5zm5.619-9.196L4.408 13.54l1.184.92 6.21-7.985-1.183-.92zm8.973 7.986l-6.21-7.986-1.185.921 6.211 7.986 1.184-.921zm-7.79-7.065a.25.25 0 01.395 0l1.184-.92c-.7-.901-2.062-.901-2.762 0l1.184.92zM5 17.25a.75.75 0 000 1.5v-1.5zm14 1.5a.75.75 0 000-1.5v1.5zm-14 0h14v-1.5H5v1.5z", fill: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgEject);
export default ForwardRef;
