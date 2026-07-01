/**
 * Pagination — page navigation control.
 *
 * Props:
 *   total    {number}                   total item count
 *   page     {number}                   current page (1-indexed)
 *   perPage  {number}                   items per page
 *   onChange {function}                 (page) => void
 *   variant  {"numbered"|"prev-next"|"dots"}
 *   siblings {number}                   pages shown either side of current
 *   boundaries {number}                 pages shown at start and end
 */
export function Pagination({
  total,
  page = 1,
  perPage = 24,
  onChange,
  variant = 'numbered',
  siblings = 1,
  boundaries = 1,
}) {
  return null;
}
