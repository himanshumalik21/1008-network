import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function calculateDaysRemaining(createdAt: string, maxDays = 60): number {
  const created = new Date(createdAt).getTime();
  const now = new Date().getTime();
  const elapsedDays = Math.floor((now - created) / (1000 * 60 * 60 * 24));
  const remaining = maxDays - elapsedDays;
  return remaining > 0 ? remaining : 0;
}

export function formatCurrencyINR(amountInLakhs: number): string {
  if (amountInLakhs >= 100) {
    const crores = (amountInLakhs / 100).toFixed(1);
    return `₹${crores} Cr`;
  }
  return `₹${amountInLakhs} Lakhs`;
}
