"use client";

import React, { useState } from "react";
import { Badge } from "@/components/brand/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import {
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  RotateCcw,
  Sparkles,
} from "lucide-react";

interface Question {
  id: number;
  category: "Domain Depth" | "Problem Bleed" | "Tech Execution" | "Runway & Risk";
  question: string;
  context: string;
  options: {
    text: string;
    points: number;
    explanation: string;
  }[];
}

const quizQuestions: Question[] = [
  {
    id: 1,
    category: "Domain Depth",
    question: "How many years of direct operating experience do you have in your target sector?",
    context: "1008 focuses on domain-led ventures where founders possess deep structural insights.",
    options: [
      { text: "12+ Years (VP, Director, CXO, or Senior Practice Lead)", points: 25, explanation: "Exceptional domain authority and supplier/customer network." },
      { text: "6–11 Years (Senior Manager, Lead Operator)", points: 20, explanation: "Strong operational execution and industry familiarity." },
      { text: "2–5 Years (Generalist or junior operator)", points: 10, explanation: "Moderate familiarity; will need heavy domain advisory." },
      { text: "0–1 Year (New sector exploration)", points: 5, explanation: "High learning curve; recommend finding an experienced domain co-founder." },
    ],
  },
  {
    id: 2,
    category: "Problem Bleed",
    question: "Is the problem you're solving a quantifiable financial loss for target customers?",
    context: "Enterprises in India pay primarily to stop direct financial leakage or regulatory penalties.",
    options: [
      { text: "Yes, customers lose >₹15 Lakhs/year or 200+ human hours due to this specific bottleneck", points: 25, explanation: "High willingness-to-pay and fast B2B sales cycle." },
      { text: "Yes, it creates moderate measurable waste (₹3L–₹10L/year)", points: 18, explanation: "Viable ROI pitch; requires sharp value articulation." },
      { text: "It improves general team productivity or convenient workflows", points: 10, explanation: "Challenging to sell to traditional Indian conglomerates without hard savings." },
      { text: "Unsure of exact monetary metric yet", points: 5, explanation: "Needs 20+ discovery calls using our Problem Discovery Playbook." },
    ],
  },
  {
    id: 3,
    category: "Problem Bleed",
    question: "Have you conducted unbiased customer discovery interviews outside your existing employer?",
    context: "Validating intent without corporate brand bias is essential before building software.",
    options: [
      { text: "Yes, 20+ detailed discovery calls with industry peers and target buyers", points: 25, explanation: "Validated commercial pull." },
      { text: "Yes, 5–15 conversations with former colleagues and suppliers", points: 18, explanation: "Good initial signal, needs broader sample." },
      { text: "Informal discussions only", points: 10, explanation: "Danger of polite false validation." },
      { text: "Not yet started external validation", points: 5, explanation: "Start with our Discovery Sprint guidelines." },
    ],
  },
  {
    id: 4,
    category: "Tech Execution",
    question: "What is your current technical architecture and software development capacity?",
    context: "Zero-to-one startups fail when non-technical founders hire low-quality outsourced agencies.",
    options: [
      { text: "Partnering with 1008 Studio for 180-day full-stack architecture & code", points: 25, explanation: "Optimal path for domain founders needing production-grade software." },
      { text: "I have a dedicated technical co-founder (Staff Engineer / CTO)", points: 25, explanation: "Strong internal engineering capability." },
      { text: "Evaluating freelance developers or traditional IT service agencies", points: 10, explanation: "High risk of delayed delivery, bloated code, and zero venture alignment." },
      { text: "No technical capability or plan yet", points: 5, explanation: "Utilize 1008 Partner Network to find a CTO." },
    ],
  },
  {
    id: 5,
    category: "Tech Execution",
    question: "Do you have a clear plan for your initial Go-to-Market (GTM) and 3 paid pilots?",
    context: "Customer acquisition velocity determines whether a venture can raise institutional seed.",
    options: [
      { text: "Yes, I have direct relationships with 5+ potential pilot accounts ready to test", points: 25, explanation: "Instant enterprise distribution unfair advantage." },
      { text: "Yes, clear warm outreach list of 20+ relevant decision makers", points: 20, explanation: "Strong top-of-funnel conversion probability." },
      { text: "Planning purely cold digital ad campaigns", points: 10, explanation: "High CAC risk for B2B; recommend channel partnerships." },
      { text: "GTM strategy is unformulated", points: 5, explanation: "Needs GTM co-founder from 1008 Network." },
    ],
  },
  {
    id: 6,
    category: "Runway & Risk",
    question: "What is your personal runway and full-time transition timeline?",
    context: "Building a business requires 12–18 months of focused mental and financial commitment.",
    options: [
      { text: "18+ months personal runway; ready for full-time venture build", points: 25, explanation: "High resilience and zero premature cash pressure." },
      { text: "Transitioning over next 3–6 months with 12 months runway", points: 20, explanation: "Structured, de-risked transition path." },
      { text: "Exploring part-time while keeping corporate job indefinitely", points: 10, explanation: "Feasible for initial 45-day validation, but requires full commitment for studio build." },
      { text: "<6 months financial runway", points: 5, explanation: "Recommend securing seed commitments or consulting reserve first." },
    ],
  },
  {
    id: 7,
    category: "Domain Depth",
    question: "How defensible is your venture against copycats once launched?",
    context: "Moats in India come from proprietary workflows, deep customer integration, and regulatory know-how.",
    options: [
      { text: "Deep workflow integration + complex regulatory/vendor relationships", points: 25, explanation: "High defensive moat." },
      { text: "Proprietary dataset / domain heuristics that take years to accumulate", points: 20, explanation: "Strong compounding defensibility." },
      { text: "First-mover advantage primarily", points: 12, explanation: "Vulnerable to well-funded competitors; needs deeper lock-in." },
      { text: "Easily replicable UI/wrapper", points: 5, explanation: "Need to re-evaluate core technical value." },
    ],
  },
  {
    id: 8,
    category: "Runway & Risk",
    question: "Are you willing to allocate meaningful equity (15%–25%) to key co-founders and early operators?",
    context: "Greedy Day-1 cap tables repel top-tier engineers and venture studios.",
    options: [
      { text: "Yes, highly aligned on generous equity for high-conviction co-builders", points: 25, explanation: "Magnet for exceptional talent and studio backing." },
      { text: "Yes, open to standard 10%–20% equity + milestone vesting", points: 20, explanation: "Healthy venture mindset." },
      { text: "Hesitant; want to retain 95%+ of company with minimal team equity", points: 8, explanation: "Red flag: will struggle to attract world-class CTOs." },
      { text: "Unfamiliar with standard startup cap-table conventions", points: 10, explanation: "Read our ESOP & Cap Table Structuring Playbook." },
    ],
  },
];

export function ReadinessQuiz() {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, { points: number; optionIdx: number }>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const currentQ = quizQuestions[currentIdx];

  const handleSelectOption = (optIdx: number, points: number) => {
    setAnswers({
      ...answers,
      [currentQ.id]: { points, optionIdx: optIdx },
    });
  };

  const handleNext = () => {
    if (currentIdx < quizQuestions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handlePrev = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentIdx(0);
    setIsCompleted(false);
  };

  // Score Calculation
  const totalScore = Object.values(answers).reduce((acc, curr) => acc + curr.points, 0);
  const maxScore = quizQuestions.length * 25;
  const percentage = Math.round((totalScore / maxScore) * 100);

  let recommendationTier: {
    title: string;
    color: string;
    badgeVariant: "amber" | "cyan" | "slate" | "emerald" | "outline";
    summary: string;
    action: string;
    href: string;
  } = {
    title: "1008 Studio Cohort Candidate",
    color: "amber",
    badgeVariant: "amber",
    summary: "Your domain depth, problem clarity, and venture mindset place you in the top 10% of candidates. You are prime for the 180-Day Build With 1008 Studio cohort.",
    action: "Schedule 30-min Studio Intake Diagnostic",
    href: "/studio",
  };

  if (percentage < 60) {
    recommendationTier = {
      title: "Problem Discovery & Co-Founder Search Required",
      color: "slate",
      badgeVariant: "slate",
      summary: "Your venture idea needs further customer pain quantification and a complementary technical or commercial co-founder before entering an intensive studio sprint.",
      action: "Explore 1008 Partner Network",
      href: "/network",
    };
  } else if (percentage < 80) {
    recommendationTier = {
      title: "Partner Network & Validation Gate",
      color: "cyan",
      badgeVariant: "cyan",
      summary: "Strong domain insights with high potential. We recommend posting your requirement on the 1008 Partner Network to find a CTO while completing our 45-day Discovery sprint.",
      action: "Post Opportunity on Network",
      href: "/network/post",
    };
  }

  return (
    <div className="max-w-3xl mx-auto">
      {!isCompleted ? (
        <div className="rounded-2xl bg-surface-50 border border-border p-6 sm:p-10 shadow-lg backdrop-blur-xl relative">
          {/* Progress Header */}
          <div className="flex items-center justify-between gap-4 border-b border-border pb-4 mb-6 text-xs font-mono">
            <div className="flex items-center gap-2">
              <Badge variant="amber" size="sm">
                Question {currentIdx + 1} of {quizQuestions.length}
              </Badge>
              <span className="text-muted-foreground">• {currentQ.category}</span>
            </div>
            <span className="text-amber-500 font-semibold">
              {Math.round(((currentIdx + 1) / quizQuestions.length) * 100)}% Completed
            </span>
          </div>

          {/* Question Body */}
          <div className="space-y-3 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-foreground font-sans leading-snug">
              {currentQ.question}
            </h3>
            <p className="text-xs text-muted-foreground leading-relaxed font-mono">
              {currentQ.context}
            </p>
          </div>

          {/* Options */}
          <div className="space-y-3 mb-8">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = answers[currentQ.id]?.optionIdx === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectOption(optIdx, opt.points)}
                  className={cn(
                    "w-full p-4 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between group shadow-xs",
                    isSelected
                      ? "bg-amber-500/10 border-amber-500 shadow-md"
                      : "bg-surface-100 border-border hover:border-border-hover hover:bg-surface-200"
                  )}
                >
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <span className={cn("text-sm font-medium", isSelected ? "text-amber-600 dark:text-amber-300 font-bold" : "text-foreground")}>
                      {opt.text}
                    </span>
                    <span
                      className={cn(
                        "h-4 w-4 rounded-full border shrink-0 flex items-center justify-center mt-0.5",
                        isSelected
                          ? "border-amber-500 bg-amber-500 text-black"
                          : "border-border group-hover:border-foreground"
                      )}
                    >
                      {isSelected && <span className="h-1.5 w-1.5 rounded-full bg-slate-950" />}
                    </span>
                  </div>
                  <span className="text-[11px] text-muted-foreground leading-relaxed font-mono">
                    {opt.explanation}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quiz Navigation */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={handlePrev}
              disabled={currentIdx === 0}
              leftIcon={<ArrowLeft className="h-4 w-4" />}
            >
              Previous
            </Button>

            <Button
              variant="primary"
              size="md"
              disabled={answers[currentQ.id] === undefined}
              onClick={handleNext}
              className="font-semibold shadow-sm"
              rightIcon={<ArrowRight className="h-4 w-4" />}
            >
              {currentIdx === quizQuestions.length - 1 ? "Calculate Venture Score" : "Next Question"}
            </Button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="rounded-2xl bg-surface-50 border border-border p-6 sm:p-10 shadow-2xl backdrop-blur-xl relative text-center space-y-6 animate-in zoom-in-95">
          <Badge variant={recommendationTier.badgeVariant} size="md" pulse>
            Evaluation Complete
          </Badge>

          <div className="space-y-2">
            <h3 className="text-3xl sm:text-4xl font-extrabold text-foreground font-sans">
              Your Venture Readiness Score: <span className="text-amber-500 font-mono">{percentage}/100</span>
            </h3>
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Diagnostic tier: <strong className="text-foreground">{recommendationTier.title}</strong>
            </p>
          </div>

          {/* Score Gauge */}
          <div className="max-w-md mx-auto p-5 rounded-xl bg-surface-100 border border-border space-y-3 text-left shadow-xs">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-muted-foreground">Venture Viability Matrix</span>
              <span className="text-amber-500 font-bold">{percentage}% High-Signal</span>
            </div>
            <div className="w-full h-3 rounded-full bg-surface-200 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-amber-400 to-emerald-400 rounded-full"
                style={{ width: `${percentage}%` }}
              />
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed font-sans pt-1">
              {recommendationTier.summary}
            </p>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              href={recommendationTier.href}
              variant="primary"
              size="lg"
              rightIcon={<ArrowRight className="h-4 w-4" />}
              className="w-full sm:w-auto shadow-md font-semibold"
            >
              {recommendationTier.action}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={handleReset}
              leftIcon={<RotateCcw className="h-4 w-4" />}
              className="w-full sm:w-auto"
            >
              Retake Evaluation
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
