import { MetadataRoute } from "next";
import { initialKnowledgeResources } from "@/data/knowledgeResources";
import { initialOpportunities } from "@/data/opportunities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://1008.network";

  const staticRoutes = [
    "",
    "/studio",
    "/network",
    "/network/post",
    "/knowledge",
    "/capital",
    "/readiness",
    "/manifesto",
    "/about",
    "/contact",
    "/terms",
    "/privacy",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const dynamicKnowledge = initialKnowledgeResources.map((res) => ({
    url: `${baseUrl}/knowledge/${res.slug}`,
    lastModified: res.publishedAt,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const dynamicNetwork = initialOpportunities.map((opp) => ({
    url: `${baseUrl}/network/${opp.id}`,
    lastModified: opp.createdAt,
    changeFrequency: "daily" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...dynamicKnowledge, ...dynamicNetwork];
}
