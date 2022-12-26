import { createGlobalStyle } from 'styled-components';
import resetCSS from './styles/resetStyles';
import { themeObject } from '../../../pages/_app';
export type ThemeProps = {
  theme: typeof themeObject;
};

const GlobalStyle = createGlobalStyle<ThemeProps>`
    ${resetCSS}
    *,
    *::before,
    *::after {
        box-sizing: border-box;
        min-height: 0;
        min-width: 0;
        max-width: 100%;
    }

    html {
        background-color: ${({ theme }) => theme.colors.primaryBackground};
        box-sizing: border-box;
        font-size: 16px;
    }

    body {
        color: #2b2d32;
        font-size: 1rem;
        margin: 0;
        ${({ theme }) => theme.fonts.inter.style}
    }

    input,
    textarea {
        font-family:  ${({ theme }) => theme.fonts.inter.style.fontFamily};
        font-weight: 400;
    }

    .wrapper {
        min-height: 100vh;
        overflow: hidden;
        position: relative;
    }

    a {
        color: #0d58a9;
        text-decoration: underline;
    }

    a:hover {
        text-decoration: none;
    }

    a:focus {
        outline: none;
    }

    p {
        font-size: 1rem;
        font-weight: 500;
        line-height: 1.625;
    }

    img {
        height: auto;
        max-width: 100%;
    }

    h1,
    h2,
    h3 {
    }

    h1 {
        font-size: 3.25rem;
        line-height: 3.9375rem;
    }

    h2 {
        font-size: 2.8125rem;
        line-height: 1.2;
    }

    h3 {
        font-size: 1.125rem;
        line-height: 1.39;
    }

    h4 {
        font-size: 1rem;
    }

    .container {
        margin: 0 auto;
        max-width: 76.125rem;
        padding: 0 1rem;
        width: 100%;
    }

    .container.container-large {
        max-width: 92rem;
    }

    pre {
        white-space: break-spaces;
        word-break: break-word;
    }
`;

export default GlobalStyle;
