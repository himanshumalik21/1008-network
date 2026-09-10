import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { initialKnowledgeResources } from "@/data/knowledgeResources";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { ArticleContentRenderer } from "@/components/knowledge/ArticleContentRenderer";
import {
  Clock,
  BookOpen,
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Share2,
  Calendar,
  Sparkles,
  ArrowUpRight,
  Target,
  Rocket,
  Users,
  Building2,
  Tag,
  ShieldCheck,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initialKnowledgeResources.map((resource) => ({
    slug: resource.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = initialKnowledgeResources.find((r) => r.slug === slug);

  if (!resource) {
    return {
      title: "Knowledge Resource Not Found | 1008 Network",
    };
  }

  const keywords = [
    resource.primaryKeyword || "how to start a business in India without wasting money",
    ...(resource.secondaryKeywords || []),
    ...(resource.sectorTags || []),
    "1008 Network",
    "venture builder India",
    "startup playbook India",
  ];

  return {
    title: `${resource.title} | 1008 Network`,
    description: resource.subtitle || resource.summary,
    keywords: keywords.join(", "),
    openGraph: {
      title: resource.title,
      description: resource.subtitle,
      type: "article",
      publishedTime: resource.publishedAt,
      authors: [resource.authorOrSource],
      tags: resource.sectorTags,
    },
    twitter: {
      card: "summary_large_image",
      title: resource.title,
      description: resource.subtitle,
    },
  };
}

export default async function KnowledgeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = initialKnowledgeResources.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  return (
    <div className="pt-28 pb-20 bg-[#FDFDFE]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Navigation */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[#627D98] hover:text-[#0A2540] transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Knowledge Hub
          </Link>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[#829AB1]">
            <span>Series: Founder Playbooks</span>
            <span>•</span>
            <span className="text-[#635BFF] font-semibold">Day 1 Edition</span>
          </div>
        </div>

        {/* Header Block */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 text-[11px] font-mono font-bold uppercase tracking-wider rounded-md bg-[#635BFF]/10 text-[#635BFF] border border-[#635BFF]/20">
              1008 FOUNDER PLAYBOOK (DAY 1)
            </span>
            <Badge variant="indigo" size="sm">
              {resource.category.replace("_", " ").toUpperCase()}
            </Badge>
            <span className="text-xs text-[#627D98] flex items-center gap-1 font-medium">
              <Clock className="h-3 w-3 text-[#635BFF]" /> {resource.readOrWatchTime}
            </span>
            <span className="text-xs text-[#CBD5E1]">•</span>
            <span className="text-xs text-[#627D98] flex items-center gap-1 font-medium">
              <Calendar className="h-3 w-3 text-[#627D98]" /> {resource.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-[1.15]">
            {resource.title}
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed font-normal">
            {resource.subtitle}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-[#627D98] border-t border-[#E6E8EB]/80 pt-4">
            <div>
              <span className="text-[#829AB1]">Authored by:</span>{" "}
              <strong className="text-[#0A2540] font-semibold">{resource.authorOrSource}</strong>
            </div>
            {resource.targetAudience && (
              <div className="flex items-center gap-1.5">
                <Target className="h-3.5 w-3.5 text-[#635BFF]" />
                <span>
                  Target: <span className="text-[#0A2540] font-semibold">{resource.targetAudience}</span>
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Key Takeaways Highlight Box (Executive Summary) */}
        <div className="rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 space-y-4 mb-10 shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#635BFF] font-bold flex items-center gap-1.5">
            <Sparkles className="h-4 w-4 text-[#635BFF]" />
            <span>Executive Summary & Key Takeaways</span>
          </div>
          <div className="space-y-3">
            {resource.keyTakeaways.map((point, idx) => (
              <div key={idx} className="flex items-start gap-3 text-sm text-[#0A2540]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span className="leading-snug">{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Article Body Rendered Richly */}
        <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 mb-10 shadow-xs">
          <ArticleContentRenderer content={resource.contentMarkdown} />
        </div>

        {/* Actionable Founder Checklist */}
        {resource.actionableChecklist && resource.actionableChecklist.length > 0 && (
          <div className="rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] p-6 sm:p-8 space-y-4 mb-10 shadow-xs">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase tracking-wider text-[#059669] font-bold flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#059669]" />
                <span>Actionable Founder Checklist</span>
              </div>
              <span className="text-[11px] font-mono text-[#059669] font-semibold">
                Turnaround Protocol
              </span>
            </div>
            <div className="space-y-3">
              {resource.actionableChecklist.map((check, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#0A2540]">
                  <span className="h-5 w-5 rounded-full bg-[#059669] text-white shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold font-mono shadow-xs">
                    {idx + 1}
                  </span>
                  <span className="leading-snug">{check}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Dual Next Step Options (Option A & Option B) */}
        <div className="space-y-6 mb-12">
          <div className="text-center space-y-2">
            <Badge variant="indigo" size="sm">Actionable Next Steps</Badge>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] tracking-tight">
              Take the Next Step with 1008 Network
            </h3>
            <p className="text-xs sm:text-sm text-[#425466] max-w-lg mx-auto">
              Choose your path to eliminate cash retainers and build with full venture alignment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Option A Card */}
            <div className="rounded-2xl bg-white border-2 border-[#635BFF]/30 p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:border-[#635BFF] transition-all relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#635BFF]/5 rounded-bl-full pointer-events-none" />
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#635BFF] text-white">
                    OPTION A
                  </span>
                  <span className="text-xs font-bold text-[#635BFF] uppercase tracking-wider">
                    Venture Co-Building
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#0A2540] leading-snug">
                  Have an Idea or a Struggling Business?
                </h4>
                <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                  Whether you are a corporate leader launching your first enterprise or a founder fighting for operational traction, 1008 Network acts as your operational co-founder. We deploy enterprise digital ERPs, manage ground-level manufacturing setup, match vetted talent, and provide seed capital—<strong>for shared equity with ₹0 consulting retainers</strong>.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  href="/studio"
                  variant="primary"
                  size="md"
                  className="w-full font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <span>Apply to Build with 1008</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Option B Card */}
            <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-7 flex flex-col justify-between space-y-5 shadow-sm hover:border-[#CBD5E1] transition-all relative overflow-hidden group">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-[#0A2540] text-white">
                    OPTION B
                  </span>
                  <span className="text-xs font-bold text-[#627D98] uppercase tracking-wider">
                    Partner Network
                  </span>
                </div>
                <h4 className="text-lg font-bold text-[#0A2540] leading-snug">
                  Need an Operational or Technical Co-Founder?
                </h4>
                <p className="text-xs sm:text-sm text-[#425466] leading-relaxed">
                  Connect directly with seasoned, execution-driven operators, CTOs, and supply-chain leads ready to build full-time for shared equity. Stop searching unvetted job boards and partner with true builders.
                </p>
              </div>

              <div className="pt-2">
                <Button
                  href="/network"
                  variant="secondary"
                  size="md"
                  className="w-full font-semibold flex items-center justify-center gap-2"
                >
                  <span>Join Co-Founder Network</span>
                  <Users className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* SEO Keywords & Tags */}
        <div className="rounded-xl bg-[#F6F9FC] border border-[#E6E8EB] p-5 mb-8 text-xs text-[#627D98] space-y-2">
          <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-[#0A2540] text-[11px]">
            <Tag className="h-3.5 w-3.5 text-[#635BFF]" />
            <span>Topics & Keywords</span>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {resource.sectorTags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[#0A2540] font-medium text-[11px]"
              >
                #{tag}
              </span>
            ))}
            {resource.secondaryKeywords?.map((kw) => (
              <span
                key={kw}
                className="px-2 py-0.5 rounded-md bg-white border border-[#E2E8F0] text-[#635BFF] font-medium text-[11px]"
              >
                {kw}
              </span>
            ))}
          </div>
        </div>

        {/* Back Link */}
        <div className="pt-6 border-t border-[#E6E8EB] text-center">
          <Link
            href="/knowledge"
            className="text-xs font-semibold text-[#635BFF] hover:underline inline-flex items-center gap-1"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Knowledge Hub
          </Link>
        </div>
      </div>
    </div>
  );
}
