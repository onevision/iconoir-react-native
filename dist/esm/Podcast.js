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
function SvgPodcast(passedProps, svgRef) {
    var context = React.useContext(IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(Svg, __assign({ width: "1.5em", height: "1.5em", viewBox: "0 0 24 24", strokeWidth: 1.5, fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(Path, { d: "M6 19a9.985 9.985 0 01-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.985 9.985 0 01-4 8", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M6 19a9.985 9.985 0 01-4-8C2 5.477 6.477 1 12 1s10 4.477 10 10a9.985 9.985 0 01-4 8M7.528 15a6 6 0 118.944 0", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }),
        React.createElement(Path, { d: "M12 13a2 2 0 100-4 2 2 0 000 4zM10.076 16.283l.815-.543a2 2 0 012.218 0l.815.543a2 2 0 01.863 1.993l-.509 3.053A2 2 0 0112.306 23h-.612a2 2 0 01-1.973-1.671l-.508-3.053a2 2 0 01.863-1.993z", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" })));
}
var ForwardRef = React.forwardRef(SvgPodcast);
export default ForwardRef;
