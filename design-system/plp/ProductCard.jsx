/**
 * ProductCard — core PLP card component.
 *
 * Props:
 *   id             {string}           unique product identifier
 *   title          {string}           product name
 *   description    {string?}          short blurb
 *   media          {Array<{src,alt}>} image list (first is primary)
 *   price          {number}           current price
 *   originalPrice  {number?}          strike-through price
 *   currency       {string}           ISO currency code, e.g. "USD"
 *   badge          {string?}          overlay badge text e.g. "Sale", "New"
 *   rating         {number?}          0–5
 *   reviewCount    {number?}          total reviews
 *   availability   {"in-stock"|"low-stock"|"out-of-stock"|"preorder"|"backordered"}
 *   variant        {"grid"|"list"|"compact"}
 *   actions        {Array<"add"|"wishlist"|"compare">}
 *   ctaLabel       {string}           primary CTA text
 *   onAdd          {function}
 *   onWishlist     {function}
 *   onCompare      {function}
 *   href           {string}           product detail page URL
 *   loading        {boolean}          skeleton state
 */
export function ProductCard({
  id,
  title,
  description,
  media = [],
  price,
  originalPrice,
  currency = 'USD',
  badge,
  rating,
  reviewCount,
  availability = 'in-stock',
  variant = 'grid',
  actions = ['add', 'wishlist'],
  ctaLabel = 'Add to Cart',
  onAdd,
  onWishlist,
  onCompare,
  href,
  loading = false,
}) {
  // Implementation placeholder
  return null;
}
