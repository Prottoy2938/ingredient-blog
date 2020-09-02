import unified from "unified";
import markdown from "remark-parse";
import remark2rehype from "remark-rehype";
import doc from "rehype-document";
import format from "rehype-format";
import html from "rehype-stringify";
import raw from "rehype-raw";
import slug from "rehype-slug";
import heading from "rehype-autolink-headings";
import emoji from "remark-emoji";

export default async function markdownToHtml(markdownData: string) {
  const result = await unified()
    .use(markdown)
    .use(remark2rehype, { allowDangerousHtml: true })
    .use(slug)
    .use(heading)
    .use(raw)
    .use(emoji, {
      padSpaceAfter: false, // defaults to false
      emoticon: true, // defaults to false
    })
    .use(doc)
    .use(format)
    .use(html)
    .process(markdownData);
  return result.toString();
}
