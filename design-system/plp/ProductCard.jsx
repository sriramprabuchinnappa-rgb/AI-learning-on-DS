/**
 * ProductCard — core PLP card component.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * IDENTITY
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {string}   id
 *   Unique product identifier used as the card's root key and aria anchor.
 *   Example: "sku-90210", "prod_abc123"
 *
 * @param {string}   title
 *   Primary product name. Rendered as the card heading (h2/h3 depending on
 *   page hierarchy). Required.
 *   Example: "Nike Air Max 270 — Men's Running Shoe"
 *
 * @param {string}   [description]
 *   Short marketing blurb or subtitle (1–2 lines). Hidden in "compact" variant.
 *   Example: "Lightweight mesh upper with full-length Air unit"
 *
 * @param {string}   [sku]
 *   Stock Keeping Unit code shown in B2B / wholesale contexts.
 *   Example: "NKE-AM270-BLK-10"
 *
 * @param {string}   [brand]
 *   Brand / manufacturer name. Shown above the title.
 *   Example: "Nike"
 *
 * @param {string[]} [categories]
 *   Category breadcrumb trail for this product.
 *   Example: ["Footwear", "Running", "Neutral"]
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * MEDIA
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {Array<{ src: string, alt: string, type?: "image"|"video" }>} [media=[]]
 *   Ordered list of product visuals. First item is the primary display image.
 *   Subsequent items appear as thumbnail strip or on hover swap.
 *   - src    : absolute or relative URL
 *   - alt    : descriptive alt text (required per WCAG)
 *   - type   : "image" (default) | "video" — video renders a muted autoplay loop
 *   Example: [{ src: "/imgs/shoe-front.jpg", alt: "Front view", type: "image" }]
 *
 * @param {"1/1"|"4/3"|"3/4"|"16/9"} [imageAspectRatio="4/3"]
 *   CSS aspect-ratio of the image container.
 *   Values: "1/1" | "4/3" | "3/4" | "16/9"
 *   Default: "4/3"
 *
 * @param {boolean} [hoverSwap=false]
 *   If true and media has 2+ items, swaps to the second image on mouse-enter.
 *
 * @param {boolean} [lazyLoad=true]
 *   Applies loading="lazy" to the <img> element. Set false for above-the-fold cards.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * PRICING
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {number}   price
 *   Current selling price (numeric). Required.
 *   Example: 129.99
 *
 * @param {number}   [originalPrice]
 *   Pre-discount / RRP price rendered as strikethrough.
 *   Example: 159.99
 *
 * @param {string}   [currency="USD"]
 *   ISO 4217 currency code. Used with Intl.NumberFormat for locale-aware display.
 *   Values: "USD" | "EUR" | "GBP" | "INR" | "JPY" | "AUD" | "CAD" | … (any ISO code)
 *   Default: "USD"
 *
 * @param {string}   [locale]
 *   BCP 47 locale tag for number/currency formatting.
 *   Example: "en-US", "de-DE", "ja-JP"
 *   Default: inherits from browser navigator.language
 *
 * @param {number}   [discountPercent]
 *   Pre-computed discount percentage. If omitted it is derived from price vs
 *   originalPrice. Shown inside the badge when badgeVariant="discount".
 *   Example: 20  (means 20% off)
 *
 * @param {string}   [pricePerUnit]
 *   Unit label appended to price for volume / weight-based pricing.
 *   Example: "/ kg", "/ sqft", "/ night"
 *
 * @param {string}   [taxLabel]
 *   Tax clarification appended below price.
 *   Example: "excl. VAT", "incl. GST"
 *
 * @param {Array<{ minQty: number, price: number }>} [bulkPricing]
 *   Tier pricing table for B2B / wholesale contexts. Shown in a popover or
 *   inline table below the main price.
 *   Example: [{ minQty: 10, price: 119.99 }, { minQty: 50, price: 109.99 }]
 *
 * @param {boolean}  [priceOnRequest=false]
 *   Hides numeric price and shows "Request a Quote" CTA instead.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * BADGE / LABELS
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {string}   [badge]
 *   Short overlay label on the image corner.
 *   Example: "Sale", "New", "Trending", "Sponsored", "Exclusive", "-20%"
 *
 * @param {"sale"|"new"|"trending"|"sponsored"|"info"|"warning"|"custom"} [badgeVariant="custom"]
 *   Controls badge colour scheme.
 *   - "sale"       : accent/danger colour (red family)
 *   - "new"        : success/positive colour (green family)
 *   - "trending"   : highlight colour (orange/amber family)
 *   - "sponsored"  : neutral grey with italic style
 *   - "info"       : informational blue
 *   - "warning"    : caution yellow
 *   - "custom"     : uses badgeColor token directly
 *   Default: "custom"
 *
 * @param {"top-left"|"top-right"|"bottom-left"|"bottom-right"} [badgePosition="top-left"]
 *   Corner placement of the badge overlay.
 *   Default: "top-left"
 *
 * @param {string[]} [tags]
 *   Additional keyword tags shown as chips below the title.
 *   Example: ["Waterproof", "Vegan", "Bestseller"]
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * RATING & REVIEWS
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {number}   [rating]
 *   Aggregate star rating on a 0–5 scale (decimals allowed).
 *   Example: 4.3
 *
 * @param {number}   [reviewCount]
 *   Total number of submitted reviews shown next to the stars.
 *   Example: 248
 *
 * @param {boolean}  [showRatingNumeric=false]
 *   If true, renders "4.3 / 5" alongside the star icons.
 *
 * @param {function} [onRatingClick]
 *   Click handler for the rating row — typically scrolls to reviews on PDP.
 *   Signature: () => void
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * AVAILABILITY & STOCK
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {"in-stock"|"low-stock"|"out-of-stock"|"preorder"|"backordered"} [availability="in-stock"]
 *   Stock status used for the StockIndicator colour and label.
 *   - "in-stock"    : available now (green indicator)
 *   - "low-stock"   : limited quantity remaining (amber indicator)
 *   - "out-of-stock": unavailable (red indicator); disables add-to-cart CTA
 *   - "preorder"    : not yet released but orderable (blue indicator)
 *   - "backordered" : sold out but can still be ordered (orange indicator)
 *   Default: "in-stock"
 *
 * @param {number}   [stockQuantity]
 *   Exact unit count. Shown only when availability === "low-stock".
 *   Example: 3
 *
 * @param {number}   [lowStockThreshold=5]
 *   Quantity below which "low-stock" messaging triggers.
 *   Default: 5
 *
 * @param {string}   [expectedDate]
 *   ISO 8601 date string for preorder / backorder expected availability.
 *   Example: "2026-09-01"
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * VARIANTS / SWATCHES
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {Array<{
 *   id:      string,
 *   label:   string,
 *   type:    "color"|"size"|"material"|"style",
 *   value:   string,
 *   swatch?: string,          hex code or image URL for color swatches
 *   inStock?: boolean,
 * }>} [swatches]
 *   Inline swatch/option selector shown on the card.
 *   Selecting a swatch updates the primary image and price if they differ.
 *   Example: [{ id:"v1", label:"Black", type:"color", value:"#000", inStock:true }]
 *
 * @param {number}   [maxSwatchesVisible=5]
 *   Limits visible swatches; overflow shows "+N more" chip.
 *   Default: 5
 *
 * @param {string}   [selectedSwatchId]
 *   Controlled selected swatch id.
 *
 * @param {function} [onSwatchChange]
 *   Callback when user picks a swatch.
 *   Signature: (swatchId: string) => void
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * LAYOUT VARIANT
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {"grid"|"list"|"compact"} [variant="grid"]
 *   Controls the card's layout mode.
 *   - "grid"    : vertical stack — image top, info below. Default PLP layout.
 *   - "list"    : horizontal — image left, info + actions right. Full-width row.
 *   - "compact" : minimal — small image, title, price only. Used in carousels.
 *   Default: "grid"
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * ACTIONS
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {Array<"add"|"wishlist"|"compare"|"quickview"|"notify">} [actions=["add","wishlist"]]
 *   Which action controls to render on the card.
 *   - "add"       : primary Add-to-Cart / Add-to-Bag CTA button
 *   - "wishlist"  : heart icon toggle (save for later)
 *   - "compare"   : checkbox to add product to comparison tray
 *   - "quickview" : opens a modal with PDP content without page navigation
 *   - "notify"    : "Notify me" for out-of-stock products (shows email form)
 *   Default: ["add", "wishlist"]
 *
 * @param {string}   [ctaLabel="Add to Cart"]
 *   Text for the primary add action button.
 *   Industry examples: "Add to Cart" | "Add to Bag" | "Book Now" |
 *   "Request a Quote" | "Apply" | "Get Started" | "Reserve"
 *   Default: "Add to Cart"
 *
 * @param {"button"|"icon-only"|"hidden"} [ctaStyle="button"]
 *   Rendering style of the primary CTA on the card.
 *   - "button"    : full labelled button below the product info
 *   - "icon-only" : floating icon button overlaid on the image corner
 *   - "hidden"    : CTA appears only on hover/focus
 *   Default: "button"
 *
 * @param {function} [onAdd]
 *   Handler for Add-to-Cart action.
 *   Signature: (productId: string, selectedSwatchId?: string) => void
 *
 * @param {boolean}  [wishlistActive=false]
 *   Controlled wishlist toggle state (filled vs outline heart).
 *
 * @param {function} [onWishlist]
 *   Handler for wishlist toggle.
 *   Signature: (productId: string, active: boolean) => void
 *
 * @param {boolean}  [compareActive=false]
 *   Controlled compare checkbox state.
 *
 * @param {function} [onCompare]
 *   Handler for compare toggle.
 *   Signature: (productId: string, active: boolean) => void
 *
 * @param {function} [onQuickView]
 *   Handler to open quick-view modal.
 *   Signature: (productId: string) => void
 *
 * @param {function} [onNotify]
 *   Handler for "Notify me when back in stock" — receives email address.
 *   Signature: (productId: string, email: string) => void
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * NAVIGATION
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {string}   [href]
 *   URL of the Product Detail Page. Wraps the card image and title in an <a>.
 *   Example: "/products/nike-air-max-270-black"
 *
 * @param {"_self"|"_blank"} [target="_self"]
 *   Link target attribute. Use "_blank" for marketplace external listings.
 *   Default: "_self"
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * SELLER / MARKETPLACE (optional)
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {{ name: string, rating?: number, verified?: boolean }} [seller]
 *   Marketplace seller info block shown below the product title.
 *   - name     : seller display name
 *   - rating   : 0–5 seller rating
 *   - verified : shows a verified badge if true
 *
 * @param {"new"|"like-new"|"good"|"fair"|"poor"} [condition]
 *   Product condition for secondhand / resale contexts.
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * LOADING & ACCESSIBILITY
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {boolean}  [loading=false]
 *   Replaces card content with animated skeleton placeholders while data loads.
 *   Default: false
 *
 * @param {string}   [ariaLabel]
 *   Accessible label for the card root element.
 *   Auto-generated from title if not provided.
 *   Example: "Nike Air Max 270, $129.99, In stock"
 *
 * @param {string}   [dataTestId]
 *   Testing hook applied as data-testid on the card root.
 *   Example: "product-card-sku-90210"
 *
 * @param {string}   [className]
 *   Additional CSS class names for consumer-side overrides.
 *
 * @param {object}   [style]
 *   Inline style overrides (use sparingly; prefer tokens).
 *
 * ─────────────────────────────────────────────────────────────────────────────
 * INDUSTRY PRESETS  (via the `preset` prop — sets sensible defaults per domain)
 * ─────────────────────────────────────────────────────────────────────────────
 * @param {"ecommerce"|"b2b"|"real-estate"|"automotive"|"hospitality"|"healthcare"|"marketplace"|"media"} [preset]
 *   Convenience shorthand that configures ctaLabel, actions, and visible sections
 *   for common industry patterns. Individual props still override preset values.
 *
 *   Preset defaults:
 *   ┌────────────────┬─────────────────────┬────────────────────────────────┐
 *   │ preset         │ ctaLabel            │ actions                        │
 *   ├────────────────┼─────────────────────┼────────────────────────────────┤
 *   │ ecommerce      │ "Add to Cart"       │ ["add","wishlist","compare"]    │
 *   │ b2b            │ "Request a Quote"   │ ["add","compare"]              │
 *   │ real-estate    │ "View Property"     │ ["wishlist","compare"]         │
 *   │ automotive     │ "View Details"      │ ["compare","quickview"]        │
 *   │ hospitality    │ "Book Now"          │ ["wishlist"]                   │
 *   │ healthcare     │ "View Product"      │ ["add","notify"]               │
 *   │ marketplace    │ "Buy Now"           │ ["add","wishlist","compare"]   │
 *   │ media          │ "Get Access"        │ ["wishlist"]                   │
 *   └────────────────┴─────────────────────┴────────────────────────────────┘
 */
export function ProductCard({
  // Identity
  id,
  title,
  description,
  sku,
  brand,
  categories = [],

  // Media
  media = [],
  imageAspectRatio = '4/3',
  hoverSwap = false,
  lazyLoad = true,

  // Pricing
  price,
  originalPrice,
  currency = 'USD',
  locale,
  discountPercent,
  pricePerUnit,
  taxLabel,
  bulkPricing = [],
  priceOnRequest = false,

  // Badge / Labels
  badge,
  badgeVariant = 'custom',
  badgePosition = 'top-left',
  tags = [],

  // Rating & Reviews
  rating,
  reviewCount,
  showRatingNumeric = false,
  onRatingClick,

  // Availability & Stock
  availability = 'in-stock',
  stockQuantity,
  lowStockThreshold = 5,
  expectedDate,

  // Variants / Swatches
  swatches = [],
  maxSwatchesVisible = 5,
  selectedSwatchId,
  onSwatchChange,

  // Layout
  variant = 'grid',

  // Actions
  actions = ['add', 'wishlist'],
  ctaLabel = 'Add to Cart',
  ctaStyle = 'button',
  onAdd,
  wishlistActive = false,
  onWishlist,
  compareActive = false,
  onCompare,
  onQuickView,
  onNotify,

  // Navigation
  href,
  target = '_self',

  // Seller / Marketplace
  seller,
  condition,

  // Industry preset
  preset,

  // Loading & A11y
  loading = false,
  ariaLabel,
  dataTestId,
  className,
  style,
}) {
  // Implementation placeholder
  return null;
}
