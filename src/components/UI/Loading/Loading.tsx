import SpinnerIcon from '@/assets/icons/interface/loading.svg'
import styles from './Loading.module.css'
import { LoadingProps } from '@/components/@types/Loading'

export function Loading({ strokeColor = '#D73035' }: LoadingProps) {
  return (
    <div className={styles.spinnerWrapper}>
      <SpinnerIcon className={styles.spinner} style={{ stroke: strokeColor }} />
    </div>
  )
}
