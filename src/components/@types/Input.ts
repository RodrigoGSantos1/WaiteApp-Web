export interface IInput extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string
  label: string
  placeholder?: string
  error?: string
  password?: boolean
  disabled?: boolean
}
