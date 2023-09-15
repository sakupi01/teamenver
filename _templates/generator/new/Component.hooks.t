---
to: "<%= have_hooks ? `${abs_path}/hooks.ts` : null %>"
---
<% if (have_props) { -%>
import type { <%= component_name %>Props } from "./<%= component_name %>"
// ______________________________________________________
//
export function useHooks(props: Props) {
  return {}
}
<% } else { -%>
export function useHooks() {
  return {}
}
<% } -%>


