---
to: <%= abs_path %>/<%= component_name %>.tsx
---
<% if (have_style) { -%>
import { Div } from "./<%= component_name %>.styles"
<% } -%>
<% if (have_hooks) { -%>
import { useHooks } from './hooks'
<% } -%>
<% if (have_props) { -%>
export type  <%= component_name %>Props = {
};
<% } -%>

export const <%= component_name %>=(<% if (have_props) { -%>
{ ...props }: <%= component_name %>Props
<% } -%>)=>{

<% if (have_hooks) { -%>
  const hook = useHooks<%= props %>
<% } -%>

    return (
      <>
       <% if (have_style) { -%><Div><% } -%>
          <p>this is react template</p>
      <% if (have_style) { -%></Div><% } -%>
      </>
    )
}