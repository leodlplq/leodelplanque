import type { MDXComponents } from "mdx/types";

const components: MDXComponents = {
  h1: (props) => <h1 className="text-3xl font-bold" {...props} />,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
