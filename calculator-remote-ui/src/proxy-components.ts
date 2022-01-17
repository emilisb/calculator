import React from "react";

/**
 * tag list copied from node_modules/@types/react/index.d.ts (interface ReactHTML)
 */
const ALL_HTML_COMPONENTS = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "slot",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "template",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  "webview",
];

const ALL_SVG_COMPONENTS = [
  "animate",
  "circle",
  "clipPath",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tspan",
  "use",
  "view",
];

const ALL_PROXY_COMPONENTS = [
  ...ALL_HTML_COMPONENTS,
  ...ALL_SVG_COMPONENTS,
].reduce(
  (acc, tag) => ({
    ...acc,
    [tag]: null,
  }),
  {}
);

const OMIT_PROPS = ["preventDefault", "stopPropagation"];

const shouldTriggerAction = (
  actionProp: boolean | Array<string>,
  event: string
) => {
  const alwaysTrigger = typeof actionProp === "boolean";
  const actionEvents = (Array.isArray(actionProp) && actionProp) || [];

  return alwaysTrigger || actionEvents.includes(event);
};

const processProps = (props: Record<string, any>) =>
  Object.entries(props).reduce((acc, [key, val]) => {
    if (typeof val === "function") {
      acc[key] = (...args: any) => {
        const isDomEvent = typeof args[0] === "object" && args[0].target;

        if (isDomEvent) {
          const event = args[0];

          if (shouldTriggerAction(props.preventDefault, key)) {
            event.preventDefault();
          }

          if (shouldTriggerAction(props.stopPropagation, key)) {
            event.stopPropagation();
          }

          const preventDefault = () => {
            console.error(
              "event.defaultPrevent() has no effect in Velo. Pass `preventDefault` prop to you element instead."
            );
          };

          const stopPropagation = () => {
            console.error(
              "event.stopPropagation() has no effect in Velo. Pass `stopPropagation` prop to you element instead."
            );
          };

          return val({
            preventDefault,
            stopPropagation,
          });
        }

        return val(...args);
      };
    } else if (!OMIT_PROPS.includes(key)) {
      acc[key] = val;
    }
    return acc;
  }, {} as typeof props);

const aReactComponent =
  (compType: string): React.ComponentType<any> =>
  ({ children, ...props }) => {
    return React.createElement(compType, processProps(props), children);
  };

export default function proxyComponentsFactory() {
  return new Proxy(ALL_PROXY_COMPONENTS, {
    get(_target, compType) {
      if (typeof compType !== "string") {
        throw new Error(
          `cannot render component of type ${compType.toString()}`
        );
      }
      return aReactComponent(compType);
    },
  });
}
