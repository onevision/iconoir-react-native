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
function SvgPageEdit(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M20 12V5.749a.6.6 0 00-.176-.425l-3.148-3.148A.6.6 0 0016.252 2H4.6a.6.6 0 00-.6.6v18.8a.6.6 0 00.6.6H11M8 10h8M8 6h4m-4 8h3M17.954 16.94l1-1a1.121 1.121 0 011.586 0v0a1.121 1.121 0 010 1.585l-1 1m-1.586-1.586l-2.991 2.991a1 1 0 00-.28.553l-.244 1.557 1.557-.243a1 1 0 00.553-.28l2.99-2.992m-1.585-1.586l1.586 1.586", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M16 2v3.4a.6.6 0 00.6.6H20", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgPageEdit);
export default ForwardRef;
