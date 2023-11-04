import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { settingsStore } from '@/libs/state/store'

import { updateBoardDetail } from '@/services/client/UpdateBoardDetail'

type SelectorProps = {
  id: string
  label: string
  defaultValue?: string
  options?: string[]
}
export const Selector = ({
  id,
  label,
  defaultValue,
  options = ['yes', 'no', 'template'],
}: SelectorProps) => {
  const updateSettings = settingsStore((s) => s.updateSettings)

  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Select
        onValueChange={(value) => {
          updateSettings({ [label]: value })
          updateBoardDetail(label, value, true)
          window.location.reload()
        }}
      >
        <SelectTrigger id={id}>
          <SelectValue placeholder={defaultValue} />
        </SelectTrigger>
        <SelectContent position='popper'>
          {options.map((option) => (
            <SelectItem key={option} value={option}>
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </>
  )
}
