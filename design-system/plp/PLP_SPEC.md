# PLP Design System Specification

> Industry-agnostic Product Listing Page component library.

## Architecture

```
design-system/
├── tokens/
│   └── tokens.js            Design tokens (color, spacing, typography…)
├── atoms/
│   └── Buttons.jsx          Button primitive
├── plp/
│   ├── ProductCard.jsx      Core product tile
│   ├── ProductGrid.jsx      Responsive layout shell
│   ├── FilterPanel.jsx      Filter sidebar / drawer / inline
│   ├── SortSelector.jsx     Sort order control
│   ├── Pagination.jsx       Page navigation
│   ├── Breadcrumb.jsx       Category trail
│   ├── SearchBar.jsx        Keyword search + suggestions
│   ├── EmptyState.jsx       Zero results / error state
│   └── index.js             Barrel export
└── PLP_SPEC.md              This file
```

## Component Inventory

### Foundation
| Token Group | Purpose |
|---|---|
| Color | Brand, semantic, neutral scale |
| Typography | Size, weight, line-height, font-family |
| Spacing | 4pt grid scale |
| Radius | Corner rounding |
| Shadow | Elevation levels |
| Motion | Duration + easing |
| Breakpoints | Responsive layout thresholds |

### Atomic Elements
| Component | Key Parameters |
|---|---|
| Button | variant, size, disabled, loading, icon, iconPosition |
| Badge | variant, color, size, icon |
| Chip/Tag | label, removable, selected, color |
| Icon | name, size, color, ariaLabel |
| Image | src, alt, aspectRatio, objectFit, placeholder, lazy |
| Input | type, placeholder, value, disabled, error, prefix, suffix |
| Select | options, value, searchable, multi |
| Skeleton | variant, width, height, animated |
| Slider/Range | min, max, step, value, range |
| Switch | checked, disabled, label |
| Tooltip | content, placement, trigger |
| Rating Stars | value, count, max, interactive |

### PLP Components
| Component | Key Parameters |
|---|---|
| ProductCard | id, title, media, price, originalPrice, badge, rating, availability, variant, actions |
| ProductGrid | items, columns, gap, layout, loading, renderItem |
| PricingBlock | price, originalPrice, currency, discount, taxLabel, bulkPricing |
| StockIndicator | status, quantity, threshold |
| WishlistButton | active, count, onToggle |
| CompareButton | active, disabled, onToggle |
| QuickAddButton | productId, variants, onAdd |
| SwatchGroup | options, selected, onChange, type |

### Filter & Search
| Component | Key Parameters |
|---|---|
| FilterPanel | filters, activeFilters, onChange, layout, sticky |
| FilterGroup | label, type, options, collapsible, searchable |
| ActiveFilterPills | filters, onRemove, onClearAll |
| RangeFilter | min, max, step, value, unit, histogram |
| ColorFilter | colors, selected, onChange |
| SearchBar | value, placeholder, onSearch, suggestions |

### Sort & View Controls
| Component | Key Parameters |
|---|---|
| SortSelector | options, value, onChange, variant |
| ViewToggle | views, active, onChange |
| ResultsCount | total, showing, filtered, unit |
| PerPageSelector | options, value, onChange |

### Pagination
| Component | Key Parameters |
|---|---|
| Pagination | total, page, perPage, onChange, variant, siblings |
| InfiniteScroll | onLoadMore, hasMore, loading, threshold |
| LoadMoreButton | onClick, loading, hasMore, remaining |

### Navigation
| Component | Key Parameters |
|---|---|
| Breadcrumb | items, separator, maxItems |
| CategoryTree | nodes, selected, onChange, multiSelect |
| QuickNav | categories, sticky, variant |

### Promotional / Merchandising
| Component | Key Parameters |
|---|---|
| HeroBanner | title, subtitle, media, cta, overlay, align |
| PromoStrip | message, icon, countdown, dismissible, variant |
| BundleCard | products, bundlePrice, savings, onAdd |
| ComparisonTable | products, attributes, sticky |
| RecentlyViewed | items, maxItems |
| CrossSellRail | title, items, scrollable |

### States
| Component | Key Parameters |
|---|---|
| EmptyState | illustration, title, description, actions, variant |
| ErrorState | code, title, description, retry |
| LoadingGrid | columns, count, variant |

## Industry Variant Presets

| Industry | Specific Needs |
|---|---|
| E-commerce / Retail | Add-to-cart prominence, stock urgency, promo badges |
| B2B / Wholesale | Bulk pricing tiers, MOQ indicator, quote request CTA |
| Real Estate | Map toggle, property spec table, agent contact |
| Automotive | Spec comparison, trim/colour selector, dealer locator |
| Healthcare / Pharma | Formulary badge, dosage field, prescription flag |
| Hospitality / Travel | Availability calendar, rate plans, amenity chips |
| Marketplace | Seller info, trust badge, condition filter |
| Media / Content | Content-type chip, paywall badge, duration tag |

## Accessibility Requirements

All components must support:
- Semantic HTML via `as` prop
- `aria-label`, `aria-describedby`, `aria-live`, `role`
- Full keyboard navigation (`tabIndex`, `onKeyDown`)
- `data-testid` hooks
- `ref` forwarding
- Sufficient colour contrast (WCAG AA minimum)
