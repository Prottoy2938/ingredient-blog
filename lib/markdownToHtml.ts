import remark from "remark";
import html from "remark-html";
import emoji from "remark-emoji";

export default async function markdownToHtml(markdown: string) {
  const result = await remark()
    .use(emoji, {
      padSpaceAfter: false, // defaults to false
      emoticon: true, // defaults to false
    })
    .use(html)
    .process(markdown);
  return result.toString();
}
