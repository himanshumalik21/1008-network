import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { initialKnowledgeResources } from "@/data/knowledgeResources";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import {
  Clock,
  BookOpen,
  ArrowLeft,
  CheckCircle2,
  Share2,
  Calendar,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return initialKnowledgeResources.map((resource) => ({
    slug: resource.slug,
  }));
}

export default async function KnowledgeDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = initialKnowledgeResources.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  const related = initialKnowledgeResources
    .filter((r) => r.slug !== slug)
    .slice(0, 2);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-6">
          <Link
            href="/knowledge"
            className="inline-flex items-center gap-1.5 text-xs font-mono text-muted hover:text-white transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to Knowledge Hub
          </Link>
        </div>

        {/* Header Block */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="indigo" size="sm">
              {resource.category.replace("_", " ").toUpperCase()}
            </Badge>
            <span className="text-xs text-[#627D98] flex items-center gap-1 font-medium">
              <Clock className="h-3 w-3" /> {resource.readOrWatchTime}
            </span>
            <span className="text-xs text-[#CBD5E1]">•</span>
            <span className="text-xs text-[#627D98] flex items-center gap-1 font-medium">
              <Calendar className="h-3 w-3" /> {resource.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#0A2540] font-sans leading-tight">
            {resource.title}
          </h1>

          <p className="text-base sm:text-lg text-[#425466] leading-relaxed font-normal">
            {resource.subtitle}
          </p>

          <div className="pt-2 text-xs font-semibold text-[#635BFF]">
            Published by: {resource.authorOrSource}
          </div>
        </div>

        {/* Key Takeaways Highlight Box */}
        <div className="rounded-2xl bg-[#F6F9FC] border border-[#E6E8EB] p-6 sm:p-8 space-y-4 mb-10 shadow-xs">
          <div className="text-xs uppercase tracking-wider text-[#635BFF] font-bold flex items-center gap-1.5">
            <Sparkles className="h-4 w-4" />
            <span>Key Executive Takeaways</span>
          </div>
          <div className="space-y-2.5">
            {resource.keyTakeaways.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-[#0A2540]">
                <CheckCircle2 className="h-4 w-4 text-[#059669] shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Article Body (Clean Typography) */}
        <div className="rounded-2xl bg-white border border-[#E6E8EB] p-6 sm:p-10 text-[#0A2540] text-sm sm:text-base leading-relaxed space-y-6 font-sans mb-10 shadow-xs">
          <div className="prose max-w-none space-y-4">
            <div className="whitespace-pre-line leading-relaxed text-[#425466] font-normal">
              {resource.contentMarkdown}
            </div>
          </div>
        </div>

        {/* Actionable Checklist (if available) */}
        {resource.actionableChecklist && resource.actionableChecklist.length > 0 && (
          <div className="rounded-2xl bg-[#F0FDF4] border border-[#BBF7D0] p-6 sm:p-8 space-y-4 mb-10">
            <div className="text-xs uppercase tracking-wider text-[#059669] font-bold">
              Actionable Founder Checklist
            </div>
            <div className="space-y-2">
              {resource.actionableChecklist.map((check, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#0A2540]">
                  <span className="h-4 w-4 rounded-full bg-[#059669] text-white shrink-0 mt-0.5 flex items-center justify-center text-[10px] font-bold font-mono">
                    {idx + 1}
                  </span>
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Callout & Action Box */}
        <div className="rounded-2xl bg-[#F0F0FF] border border-[#E0E0FF] p-6 sm:p-8 mb-10 space-y-4 text-center">
          <Badge variant="indigo" size="sm">Co-Building Partnership</Badge>
          <h3 className="text-xl sm:text-2xl font-bold text-[#0A2540]">
            Ready to Build or Rescue Your Business?
          </h3>
          <p className="text-xs sm:text-sm text-[#425466] max-w-xl mx-auto leading-relaxed">
            Partner with 1008 Network for turnkey physical setup, digital ERP deployment, vetted talent matching, and seed syndication—<strong>for shared equity with ₹0 consulting retainers</strong>.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href="/studio"
              variant="primary"
              size="md"
              className="w-full sm:w-auto font-semibold px-6"
            >
              Apply to Build With Us
            </Button>
            <Button
              href="/network"
              variant="secondary"
              size="md"
              className="w-full sm:w-auto font-semibold px-6"
            >
              Find a Co-Founder
            </Button>
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
