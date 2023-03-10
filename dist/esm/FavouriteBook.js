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
function SvgFavouriteBook(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", strokeWidth: 1.5, height: "1.5em", viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4 19V5a2 2 0 012-2h13.4a.6.6 0 01.6.6v13.114", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M16 8.78a2.28 2.28 0 01-.662 1.606c-.976.984-1.923 2.01-2.936 2.958a.597.597 0 01-.822-.017l-2.918-2.94a2.281 2.281 0 010-3.214 2.277 2.277 0 013.232 0L12 7.28l.106-.107A2.276 2.276 0 0116 8.78z", stroke: "currentColor", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M6 17h14M6 21h14", stroke: "currentColor", strokeLinecap: "round" }),
        React.createElement(Path, { d: "M6 21a2 2 0 110-4", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgFavouriteBook);
export default ForwardRef;
