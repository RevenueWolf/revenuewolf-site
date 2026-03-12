import type { MetadataRoute } from "next";
import { fieldNotes } from "./data/fieldNotes";

export default function sitemap(): MetadataRoute.Sitemap {
  const postUrls = fieldNotes.map((post) => ({
    url: `https://revenuewolf.com/field-notes/${post.slug}`,
    lastModified: new Date(),
  }));

  return [
    {
      url: "https://revenuewolf.com",
      lastModified: new Date(),
    },
    {
      url: "https://revenuewolf.com/field-notes",
      lastModified: new Date(),
    },
    ...postUrls,
  ];
}
