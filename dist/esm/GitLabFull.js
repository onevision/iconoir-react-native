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
function SvgGitLabFull(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { clipRule: "evenodd", d: "M17.057 2.544a.2.2 0 01.378-.008l3.114 8.31 1.398 3.73a.2.2 0 01-.07.232l-9.76 7.106a.2.2 0 01-.235 0l-9.76-7.106a.2.2 0 01-.069-.231l1.398-3.73.167-.45 2.944-7.861a.2.2 0 01.378.008l2.47 7.6a.2.2 0 00.19.137h4.8a.2.2 0 00.19-.138l2.467-7.599z", stroke: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgGitLabFull);
export default ForwardRef;
