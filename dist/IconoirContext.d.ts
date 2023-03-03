import React from 'react';
import { SvgProps } from 'react-native-svg';
export declare type IconoirContextValue = Partial<SvgProps>;
export declare const IconoirContext: React.Context<Partial<SvgProps>>;
export interface IconoirProviderProps {
    iconProps?: Partial<Omit<SvgProps, 'children'>>;
    children: React.ReactElement;
}
export declare function IconoirProvider({ iconProps, children }: IconoirProviderProps): JSX.Element;
