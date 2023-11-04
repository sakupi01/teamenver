import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

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
  return (
    <>
      <Label htmlFor={id}>{label}</Label>
      <Select>
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
