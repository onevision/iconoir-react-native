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
function SvgMouseScrollWheel(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M12 5l.53-.53a.75.75 0 00-1.06 0L12 5zm0 8l-.53.53a.75.75 0 001.06 0L12 13zM9.47 6.47a.75.75 0 001.06 1.06L9.47 6.47zm4 1.06a.75.75 0 101.06-1.06l-1.06 1.06zm-2.94 2.94a.75.75 0 10-1.06 1.06l1.06-1.06zm4 1.06a.75.75 0 10-1.06-1.06l1.06 1.06zM3.25 10v4h1.5v-4h-1.5zm17.5 4v-4h-1.5v4h1.5zm-9.5-9v8h1.5V5h-1.5zm.22-.53l-2 2 1.06 1.06 2-2-1.06-1.06zm0 1.06l2 2 1.06-1.06-2-2-1.06 1.06zm1.06 6.94l-2-2-1.06 1.06 2 2 1.06-1.06zm0 1.06l2-2-1.06-1.06-2 2 1.06 1.06zM20.75 10A8.75 8.75 0 0012 1.25v1.5A7.25 7.25 0 0119.25 10h1.5zM12 22.75A8.75 8.75 0 0020.75 14h-1.5A7.25 7.25 0 0112 21.25v1.5zM3.25 14A8.75 8.75 0 0012 22.75v-1.5A7.25 7.25 0 014.75 14h-1.5zm1.5-4A7.25 7.25 0 0112 2.75v-1.5A8.75 8.75 0 003.25 10h1.5z", fill: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgMouseScrollWheel);
export default ForwardRef;
