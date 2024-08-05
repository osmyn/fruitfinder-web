import { MetadataRoute } from "next";

// https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://wheresthefruit.com",
      lastModified: new Date(),
      changeFrequency: "yearly", // always, hourly, daily, weekly, monthly, yearly, never
      priority: 1,
    },
  ];
}
