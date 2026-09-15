import { MetadataRoute } from "next";
import { initialKnowledgeResources } from "@/data/knowledgeResources";
import { initialOpportunities } from "@/data/opportunities";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://1008.network";
  const now = new Date().toISOString();

  // Tier 1: Core Landing & Primary Value Engines (Priority 1.0 & 0.9)
  const coreRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/network`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/studio`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
  ];

  // Tier 2: Interactive Intake Portals & Knowledge Resources (Priority 0.8)
  const portalRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/network/join`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/network/post`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/knowledge`,
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/capital`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/readiness`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Tier 3: Supporting Company Pages (Priority 0.7 & 0.5)
  const supportingRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/manifesto`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
  ];

  // Dynamic Tier: In-depth Playbooks & Knowledge Articles (Priority 0.8)
  const dynamicKnowledge: MetadataRoute.Sitemap = initialKnowledgeResources.map((res) => ({
    url: `${baseUrl}/knowledge/${res.slug}`,
    lastModified: res.publishedAt || now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  // Dynamic Tier: Active Co-Founder & Partner Opportunities (Priority 0.8)
  const dynamicNetwork: MetadataRoute.Sitemap = initialOpportunities.map((opp) => ({
    url: `${baseUrl}/network/${opp.id}`,
    lastModified: opp.createdAt || now,
    changeFrequency: "daily",
    priority: 0.8,
  }));

  return [
    ...coreRoutes,
    ...portalRoutes,
    ...supportingRoutes,
    ...dynamicKnowledge,
    ...dynamicNetwork,
  ];
}
