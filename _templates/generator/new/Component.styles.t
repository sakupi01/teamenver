---
to: "<%= have_hooks ? `${abs_path}/${component_name}.styles.ts` : null %>"
---
import tw from "tailwind-styled-components"

export const Div = tw.div`
    flex
    items-center
    justify-center
    w-full
    h-full
    bg-primary
`