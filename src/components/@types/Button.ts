export interface IButton extends React.InputHTMLAttributes<HTMLButtonElement> {
  type: 'primary' | 'border' | 'text'
  disabled?: boolean
  loading?: boolean
  title: string
}
