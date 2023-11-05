import { Input } from '@/components/atoms/Input'
import { Selector } from '@/components/atoms/Selector'
import { CardContent } from '@/components/ui/card'

import { selectSettingsStore } from '@/libs/state/selector'

export const SelectCardContent = ({ isAdmin }: { isAdmin: boolean }) => {
  const settingsData = selectSettingsStore.use.settings()
  const { framework, css_library, ui_library, ...mutableSettings } = settingsData
  const iterableMutableSettings = Object.entries(mutableSettings)
  return (
    <CardContent>
      <form>
        <div className='grid w-full items-center gap-4'>
          <div className='flex flex-col space-y-1.5'>
            <Input label='framework' defaultValue={framework || ''} />
            <Input label='css_library' defaultValue={css_library || ''} />
            <Input label='ui_library' defaultValue={ui_library || ''} />
            {iterableMutableSettings.map((kv) => {
              const [label, value] = kv
              if (label == 'manager') {
                return (
                  <Selector
                    key={label}
                    label={label}
                    id={label}
                    defaultValue={value || ''}
                    options={['npm', 'yarn', 'pnpm', 'bun']}
                    isAdmin={isAdmin}
                  />
                )
              } else if (label == 'isGit') {
                return (
                  <Selector
                    key={label}
                    label={label}
                    id={label}
                    defaultValue={value || ''}
                    options={['true', 'false']}
                    isAdmin={isAdmin}
                  />
                )
              } else {
                return (
                  <Selector
                    key={label}
                    label={label}
                    id={label}
                    defaultValue={value || ''}
                    isAdmin={isAdmin}
                  />
                )
              }
            })}
          </div>
        </div>
      </form>
    </CardContent>
  )
}
