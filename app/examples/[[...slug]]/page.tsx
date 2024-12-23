import DocsBreadcrumb from "@/components/docs-breadcrumb";
import { ExamplePagination } from "@/components/pagination";
import { ExampleToc } from "@/components/toc";
import { notFound } from "next/navigation";
import { getExamplsForSlug } from "@/lib/markdown";
import { Typography } from "@/components/typography";

type PageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function ExamplesPage(props: PageProps) {
  const params = await props.params;

  const {
    slug = []
  } = params;

  const pathName = slug.join("/");
  const res = await getExamplsForSlug(pathName);

  if (!res) notFound();
  return (
    <div className="flex items-start gap-10">
      <div className="flex-[4.5] pt-10">
        <DocsBreadcrumb paths={slug} />
        <Typography>
          <h1 className="text-3xl !-mt-0.5">{res.frontmatter.title}</h1>
          <p className="-mt-4 text-muted-foreground text-[16.5px]">
            {res.frontmatter.description}
          </p>
          <div>{res.content}</div>
          <ExamplePagination pathname={pathName}/>
        </Typography>
      </div>
      <ExampleToc path={pathName} />
    </div>
  );
}
