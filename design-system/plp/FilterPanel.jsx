/**
 * FilterPanel — sidebar / drawer / inline filter container.
 *
 * Props:
 *   filters       {Array<FilterGroup>}  filter group definitions
 *   activeFilters {object}              { [filterId]: selectedValues }
 *   onChange      {function}            (filterId, value) => void
 *   onReset       {function}
 *   layout        {"sidebar"|"drawer"|"inline"}
 *   sticky        {boolean}
 *
 * FilterGroup shape:
 *   id            {string}
 *   label         {string}
 *   type          {"checkbox"|"radio"|"range"|"color"|"toggle"}
 *   options       {Array<{value, label, count?, color?}>}
 *   collapsible   {boolean}
 *   searchable    {boolean}
 */
export function FilterPanel({
  filters = [],
  activeFilters = {},
  onChange,
  onReset,
  layout = 'sidebar',
  sticky = false,
}) {
  return null;
}
