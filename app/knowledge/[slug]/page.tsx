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
            <Badge variant="amber" size="sm">
              {resource.category.replace("_", " ").toUpperCase()}
            </Badge>
            <span className="text-xs font-mono text-muted flex items-center gap-1">
              <Clock className="h-3 w-3" /> {resource.readOrWatchTime}
            </span>
            <span className="text-xs font-mono text-muted">•</span>
            <span className="text-xs font-mono text-muted flex items-center gap-1">
              <Calendar className="h-3 w-3" /> {resource.publishedAt}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white font-sans leading-tight">
            {resource.title}
          </h1>

          <p className="text-base sm:text-lg text-muted leading-relaxed font-normal">
            {resource.subtitle}
          </p>

          <div className="pt-2 text-xs font-mono text-amber-400">
            Source / Author: {resource.authorOrSource}
          </div>
        </div>

        {/* Key Takeaways Highlight Box */}
        <div className="rounded-2xl bg-surface-100/90 border border-amber-500/20 p-6 sm:p-8 space-y-4 mb-10 shadow-xl">
          <div className="text-xs font-mono uppercase tracking-wider text-amber-400 font-semibold flex items-center gap-1.5">
            <Sparkles className="h-4 w-4" />
            <span>Key Executive Takeaways</span>
          </div>
          <div className="space-y-2.5">
            {resource.keyTakeaways.map((point, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main Article Body (Clean Typography) */}
        <div className="rounded-2xl bg-surface-100/50 border border-white/[0.08] p-6 sm:p-10 text-foreground text-sm sm:text-base leading-relaxed space-y-6 font-sans mb-10">
          <div className="prose prose-invert max-w-none space-y-4">
            <div className="whitespace-pre-line leading-relaxed text-muted font-normal">
              {resource.contentMarkdown}
            </div>
          </div>
        </div>

        {/* Actionable Checklist (if available) */}
        {resource.actionableChecklist && resource.actionableChecklist.length > 0 && (
          <div className="rounded-2xl bg-surface-100/80 border border-cyan-500/20 p-6 sm:p-8 space-y-4 mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-semibold">
              Actionable Founder Checklist
            </div>
            <div className="space-y-2">
              {resource.actionableChecklist.map((check, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-foreground">
                  <span className="h-4 w-4 rounded border border-cyan-400/60 shrink-0 mt-0.5 flex items-center justify-center text-[10px] text-cyan-300 font-mono">
                    {idx + 1}
                  </span>
                  <span>{check}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Resources Carousel */}
        <div className="space-y-4 pt-8 border-t border-white/[0.08]">
          <h3 className="text-lg font-bold text-white font-sans">
            Related Playbooks & Media
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {related.map((rel) => (
              <Link
                key={rel.slug}
                href={`/knowledge/${rel.slug}`}
                className="p-5 rounded-xl bg-surface-100/70 border border-white/[0.08] hover:border-amber-400/30 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="text-[10px] font-mono text-muted mb-1 uppercase">{rel.category}</div>
                  <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors">
                    {rel.title}
                  </h4>
                </div>
                <div className="pt-3 text-xs text-muted flex items-center justify-between">
                  <span>{rel.readOrWatchTime}</span>
                  <span className="text-white group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Read <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
