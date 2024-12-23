"use client";

import { EXAMPLE_ROUTES } from "@/lib/routes-config";
import SubLink from "./sublink";
import { usePathname } from "next/navigation";

export default function ExamplesMenu({ isSheet = false }) {
  const pathname = usePathname();
  if (!pathname.startsWith("/examples")) return null;

  return (
    <div className="flex flex-col gap-3.5 mt-5 pr-2 pb-6">
      {EXAMPLE_ROUTES.map((item, index) => {
        const modifiedItems = {
          ...item,
          href: `/examples${item.href}`,
          level: 0,
          isSheet,
        };
        return <SubLink key={item.title + index} {...modifiedItems} />;
      })}
    </div>
  );
}


import { ScrollArea } from "@/components/ui/scroll-area";

export function Leftbar() {
  return (
    <aside className="md:flex hidden flex-[1.5] min-w-[238px] sticky top-16 flex-col h-[93.75vh] overflow-y-auto">
      <ScrollArea className="py-4">
        <ExamplesMenu />
      </ScrollArea>
    </aside>
  );
}