/// <reference types="react" />

declare namespace JSX {
  interface IntrinsicElements {
    // HTML Elements
    main: React.HTMLAttributes<HTMLElement>;
    div: React.HTMLAttributes<HTMLDivElement>;
    h1: React.HTMLAttributes<HTMLHeadingElement>;
    h2: React.HTMLAttributes<HTMLHeadingElement>;
    h3: React.HTMLAttributes<HTMLHeadingElement>;
    h4: React.HTMLAttributes<HTMLHeadingElement>;
    p: React.HTMLAttributes<HTMLParagraphElement>;
    input: React.InputHTMLAttributes<HTMLInputElement>;
    button: React.ButtonHTMLAttributes<HTMLButtonElement>;
    code: React.HTMLAttributes<HTMLElement>;
    strong: React.HTMLAttributes<HTMLElement>;
    a: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    img: React.ImgHTMLAttributes<HTMLImageElement>;
    span: React.HTMLAttributes<HTMLSpanElement>;
    // SVG Elements
    svg: React.SVGProps<SVGSVGElement>;
    rect: React.SVGProps<SVGRectElement>;
    circle: React.SVGProps<SVGCircleElement>;
    path: React.SVGProps<SVGPathElement>;
    text: React.SVGProps<SVGTextElement>;
    g: React.SVGProps<SVGGElement>;
    defs: React.SVGProps<SVGDefsElement>;
    linearGradient: React.SVGProps<SVGLinearGradientElement>;
    stop: React.SVGProps<SVGStopElement>;
    filter: React.SVGProps<SVGFilterElement>;
    feDropShadow: React.SVGProps<SVGFEDropShadowElement>;
    feGaussianBlur: React.SVGProps<SVGFEGaussianBlurElement>;
    feMerge: React.SVGProps<SVGFEMergeElement>;
    feMergeNode: React.SVGProps<SVGFEMergeNodeElement>;
    feOffset: React.SVGProps<SVGFEOffsetElement>;
  }
}

