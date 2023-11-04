import { Input as InputTemplate } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type InputProps = {
  label: string
  defaultValue?: string
}
export const Input = ({ label, defaultValue }: InputProps) => {
  return (
    <>
      <Label htmlFor={label}>{label}</Label>
      <InputTemplate type='text' id={label} defaultValue={defaultValue} disabled />
    </>
  )
}
