"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_svg_1 = __importStar(require("react-native-svg"));
var IconoirContext_1 = require("./IconoirContext");
function SvgOpenVpn(passedProps, svgRef) {
    var context = React.useContext(IconoirContext_1.IconoirContext);
    var props = __assign(__assign({}, context), passedProps);
    return (React.createElement(react_native_svg_1.default, __assign({ width: "1.5em", height: "1.5em", strokeWidth: 1.5, viewBox: "0 0 24 24", fill: "none", color: "currentColor", ref: svgRef }, props),
        React.createElement(react_native_svg_1.Path, { d: "M10.835 15.29l.738.136-.738-.137zm-.358-.708l.381-.646-.38.646zm-.275 7.247l.138-.738-.138.738zm-.452-.678l.738.136-.738-.136zm7.099-1.337l.737-.139-.737.14zm.872.378l-.43-.615.43.615zm-9.85-4.208l-.736-.139.737.14zm-.139-.52l-.581.474.581-.474zm5.791-.882l.382.646-.382-.646zm-.358.707l.738-.136-.738.136zm3.103.175l-.581-.473.581.473zm-.14.52l.737-.139-.737.14zm-1.878 5.167l-.737.137.737-.137zm-.453.679l.138.737-.138-.737zM6.28 20.192l-.43.614.43-.614zM2.75 12A9.25 9.25 0 0112 2.75v-1.5C6.062 1.25 1.25 6.062 1.25 12h1.5zm3.959 7.577C4.315 17.902 2.75 15.137 2.75 12h-1.5c0 3.65 1.824 6.865 4.599 8.806l.86-1.229zm.426-3.732l-.721 3.83 1.474.278.72-3.83-1.473-.278zM5.75 12c0 1.494.526 2.865 1.4 3.938l1.163-.947A4.713 4.713 0 017.25 12h-1.5zM12 5.75A6.25 6.25 0 005.75 12h1.5A4.75 4.75 0 0112 7.25v-1.5zM18.25 12A6.25 6.25 0 0012 5.75v1.5A4.75 4.75 0 0116.75 12h1.5zm-1.4 3.938A6.213 6.213 0 0018.25 12h-1.5a4.713 4.713 0 01-1.063 2.99l1.162.948zm.736 3.737l-.72-3.83-1.475.278.72 3.83 1.475-.277zM21.25 12c0 3.137-1.565 5.902-3.959 7.577l.86 1.23C20.926 18.864 22.75 15.65 22.75 12h-1.5zM12 2.75A9.25 9.25 0 0121.25 12h1.5c0-5.938-4.812-10.75-10.75-10.75v1.5zM15.75 12A3.75 3.75 0 0012 8.25v1.5A2.25 2.25 0 0114.25 12h1.5zm-1.845 3.228A3.745 3.745 0 0015.75 12h-1.5c0 .823-.443 1.544-1.108 1.936l.763 1.292zm1.083 5.787l-1.085-5.862-1.475.273 1.085 5.862 1.475-.273zM12 22.75c.665 0 1.31-.067 1.935-.183l-.275-1.474a9.036 9.036 0 01-1.66.157v1.5zm-1.937-.184c.625.117 1.271.184 1.937.184v-1.5a8.958 8.958 0 01-1.66-.159l-.277 1.475zm.035-7.413l-1.085 5.861 1.475.273 1.085-5.861-1.475-.273zM8.25 12c0 1.377.744 2.578 1.846 3.228l.762-1.292A2.245 2.245 0 019.75 12h-1.5zM12 8.25A3.75 3.75 0 008.25 12h1.5A2.25 2.25 0 0112 9.75v-1.5zm-.427 7.176c.122-.662-.259-1.22-.715-1.49l-.762 1.292a.053.053 0 01.01.008c.003.003.002.003 0-.001a.1.1 0 01-.009-.03.153.153 0 010-.052l1.476.273zm-1.233 5.665c.119.023.16.129.148.196l-1.475-.273c-.129.694.305 1.412 1.05 1.552l.277-1.474zm5.772-1.138c.168.892 1.212 1.432 2.04.853l-.86-1.229a.21.21 0 01.197-.019c.052.023.088.07.097.117l-1.474.278zm-7.503-3.83c.08-.423-.051-.833-.296-1.133l-1.162.948c-.007-.008-.026-.04-.016-.093l1.474.278zm4.533-2.187c-.456.27-.837.828-.714 1.49l1.475-.273a.153.153 0 010 .053.1.1 0 01-.009.029c-.002.004-.003.004 0 .001a.05.05 0 01.01-.008l-.762-1.292zm2.545 1.055c-.245.3-.375.709-.296 1.132l1.474-.278c.01.054-.009.085-.016.093l-1.162-.947zm-2.174 6.297a.174.174 0 01.147-.195l.275 1.474c.745-.139 1.181-.857 1.053-1.552l-1.475.273zm-7.664-.482c.827.579 1.871.038 2.04-.853l-1.475-.277a.166.166 0 01.097-.118.21.21 0 01.198.02l-.86 1.228z", fill: "currentColor" })));
}
var ForwardRef = React.forwardRef(SvgOpenVpn);
exports.default = ForwardRef;
