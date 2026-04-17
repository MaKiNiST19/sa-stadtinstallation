import type { MetadataRoute } from "next";
import { FIRMA } from "@/lib/company";
import { LEISTUNGEN } from "@/lib/leistungen";
import { BEZIRKE } from "@/lib/bezirke";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = FIRMA.url;
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/leistungen`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/bezirke`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/preise`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/ueber-uns`, lastModified: now, changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/kontakt`, lastModified: now, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/impressum`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/datenschutz`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
    { url: `${base}/agb`, lastModified: now, changeFrequency: "yearly", priority: 0.2 },
  ];

  const leistungPages: MetadataRoute.Sitemap = LEISTUNGEN.map((l) => ({
    url: `${base}/leistungen/${l.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: l.emergency ? 0.95 : 0.85,
  }));

  const bezirkPages: MetadataRoute.Sitemap = BEZIRKE.map((b) => ({
    url: `${base}/bezirke/${b.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const intersectionPages: MetadataRoute.Sitemap = [];
  for (const b of BEZIRKE) {
    for (const l of LEISTUNGEN) {
      intersectionPages.push({
        url: `${base}/bezirke/${b.slug}/${l.slug}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: l.emergency ? 0.75 : 0.65,
      });
    }
  }

  return [...staticPages, ...leistungPages, ...bezirkPages, ...intersectionPages];
}
