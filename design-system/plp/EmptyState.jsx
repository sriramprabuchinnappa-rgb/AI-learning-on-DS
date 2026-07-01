/**
 * EmptyState — zero-results / error / no-filter feedback.
 *
 * Props:
 *   illustration {string?}            image/icon src
 *   title        {string}
 *   description  {string?}
 *   actions      {Array<{label, onClick, variant?}>?}
 *   variant      {"no-results"|"no-filters"|"error"}
 */
export function EmptyState({
  illustration,
  title,
  description,
  actions = [],
  variant = 'no-results',
}) {
  return null;
}
