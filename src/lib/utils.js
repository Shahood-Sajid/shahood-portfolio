import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function scrollToSection(elementId) {
  document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' });
}

export function formatDateRange(start, end) {
  return `${start} - ${end}`;
}
