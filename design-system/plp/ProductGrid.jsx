/**
 * ProductGrid — responsive layout shell for ProductCard lists.
 *
 * Props:
 *   items         {Array}              product data array
 *   columns       {"auto"|2|3|4|5}
 *   gap           {string}             spacing token key
 *   layout        {"grid"|"list"}
 *   loading       {boolean}
 *   skeletonCount {number}             skeleton cards to show when loading
 *   renderItem    {function}           (item, index) => ReactNode
 */
export function ProductGrid({
  items = [],
  columns = 'auto',
  gap = '4',
  layout = 'grid',
  loading = false,
  skeletonCount = 12,
  renderItem,
}) {
  return null;
}
