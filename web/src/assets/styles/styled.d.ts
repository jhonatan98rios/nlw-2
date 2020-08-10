import 'styled-components'

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;
        colors: {
            colorBackground: string;
            colorPrimaryLighter: string;
            colorPrimaryLight: string;
            colorPrimary: string;
            colorPrimaryDark: string;
            colorPrimaryDarker: string;
            colorSecondary: string;
            colorSecondaryDark: string;
            colorTitleInPrimary: string;
            colorTextInPrimary: string;
            colorTextTitle: string;
            colorTextComplement: string;
            colorTextBase: string;
            colorLineInWhite: string;
            colorInputBackground: string;
            colorButtonText: string;
            colorBoxBase: string;
            colorBoxFooter: string;
        }
    }
}