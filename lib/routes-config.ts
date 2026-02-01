// for page navigation & to sort on leftbar

export type EachRoute = {
  title: string;
  href: string;
  noLink?: true; // noLink will create a route segment (section) but cannot be navigated
  items?: EachRoute[];
};

export const ROUTES: EachRoute[] = [
  {
    title: "Getting Started",
    href: "/getting-started",
    noLink: true,
    items: [
      { title: "Introduction", href: "/introduction" },
      {
        title: "Setup",
        href: "/setup",
      },
      {
        title: "Components",
        href: "/components",
        items: [
          {
            title: "Project Structure",
            href: "/project-structure",
          },
          { title: "Node", href: "/node" },
          { title: "Connection", href: "/connection" },
          { title: "Graph", href: "/graph" },
          { title: "Parser", href: "/parser" },
          { 
            title: "Advanced features", 
            href: "/advanced-features",
            items: [
              {
                title: "Conditional Execution",
                href: "/conditional-execution",
              },
              {
                title: "Loop Subgraph",
                href: "/loop-subgraph",
              },
              {
                title: "Send & Recv without id", 
                href: "/send-recv-without-id",
              },
              {
                title: "Typed Action", 
                href: "/typed-action",
              },
            ],
          },
        ],
      },
    ],
  },
];

export const EXAMPLE_ROUTES : EachRoute[] = [
  { title: "Example - hello-dagrs", href: "/hello-dagrs" },
  { title: "Example - custom-node", href: "/custom-node" },
  { title: "Example - macro `auto-node`", href: "/macro-auto-node" },
  { title: "Example - macro `dependencies!`", href: "/macro-auto-relay" },
  { title: "Example - compute dag", href: "/compute-dag" },
  { title: "Example - Conditional Execution", href: "/conditional-execution" },
  { title: "Example - Dynamic Router", href: "/dynamic-router" },
  { title: "Example - Loop Subgraph", href: "/loop-subgraph" },
  { title: "Example - Loop Node", href: "/loop-node" },
  { title: "Example - Checkpoint", href: "/checkpoint" },
  { title: "Example - Execution Hooks", href: "/execution-hooks" },
  { title: "Example - State Subscription", href: "/state-subscription" },
  { title: "Example - receive any & broadcast & typed action", href: "/receive-any-typed-action" },
]

type Page = { title: string; href: string };

function getRecurrsiveAllLinks(node: EachRoute) {
  const ans: Page[] = [];
  if (!node.noLink) {
    ans.push({ title: node.title, href: node.href });
  }
  node.items?.forEach((subNode) => {
    const temp = { ...subNode, href: `${node.href}${subNode.href}` };
    ans.push(...getRecurrsiveAllLinks(temp));
  });
  return ans;
}

export const page_routes = ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
export const example_page_routes = EXAMPLE_ROUTES.map((it) => getRecurrsiveAllLinks(it)).flat();
