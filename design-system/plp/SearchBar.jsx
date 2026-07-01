/**
 * SearchBar — keyword search with optional suggestions.
 *
 * Props:
 *   value       {string}
 *   placeholder {string}
 *   onSearch    {function}              (value) => void
 *   onClear     {function}
 *   suggestions {Array<{label, href?}>?}
 *   loading     {boolean}
 */
export function SearchBar({
  value = '',
  placeholder = 'Search...',
  onSearch,
  onClear,
  suggestions = [],
  loading = false,
}) {
  return null;
}
