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
function SvgBishop(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M7 17h10M9 12h6M12 3V2M11.554 3.582c-.921 1.251-2.916 4.243-2.497 6.168C9.451 11.558 11.02 12 12 12c.981 0 2.549-.442 2.943-2.25.42-1.925-1.576-4.917-2.497-6.168a.548.548 0 00-.892 0zM17.8 22H6.2a.617.617 0 01-.5-.97c1.316-1.866 4.063-5.986 4.493-8.434.057-.326.326-.596.657-.596h2.3c.331 0 .6.27.657.596.43 2.448 3.177 6.568 4.492 8.434a.617.617 0 01-.499.97z", stroke: "currentColor", strokeLinecap: "round" })));
}
var ForwardRef = React.forwardRef(SvgBishop);
export default ForwardRef;
