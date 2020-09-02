import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import doc from "rehype-document";
import format from "rehype-format";
import html from "rehype-stringify";
import raw from "rehype-raw";

export default async function markdownToHtml(markdownData: string) {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(raw)
    .use(doc)
    .use(format)
    .use(html)
    .process(markdownData);
  return result.toString();
}
