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
function SvgFrame(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M4.998 2.001H2v2.998h2.998V2.001zM4.998 10.502H2V13.5h2.998v-2.998zM20.498 5v5.503M3.5 5v5.503M20.498 13.502v5.502M3.5 13.502v5.502M4.999 20.502h5.5", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M4.999 3.503h5.5", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M13.498 20.499h5.5", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M13.498 3.501h5.5", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M4.998 19.001H2v2.998h2.998v-2.998zM21.997 2.002H19V5h2.998V2.002zM13.497 2H10.5v2.998h2.998V2zM21.997 10.503H19V13.5h2.998v-2.998zM21.997 19.002H19V22h2.998v-2.998zM13.497 19H10.5v2.998h2.998V19z", stroke: "currentColor", strokeMiterlimit: 1.5, strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgFrame);
export default ForwardRef;
