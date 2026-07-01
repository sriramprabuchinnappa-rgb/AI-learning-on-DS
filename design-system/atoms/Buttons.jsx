/**
 * Button — polymorphic action trigger.
 *
 * Props:
 *   variant      {"primary"|"secondary"|"ghost"|"danger"|"link"}
 *   size         {"sm"|"md"|"lg"}
 *   disabled     {boolean}
 *   loading      {boolean}
 *   icon         {ReactNode?}          leading or trailing icon
 *   iconPosition {"start"|"end"}
 *   as           {string|Component}    polymorphic element, default "button"
 *   onClick      {function}
 *   children     {ReactNode}
 *   'aria-label' {string?}
 *   'data-testid'{string?}
 */
export function Button({
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'start',
  as: Tag = 'button',
  onClick,
  children,
  ...rest
}) {
  return null;
}
