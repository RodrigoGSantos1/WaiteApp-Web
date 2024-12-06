import { IStatusCard } from '../@types/StatusCard'

export function StatusCard({ icon, title }: IStatusCard) {
  return (
    <div className="rounded-xl border border-gray-300/40 flex flex-col items-center justify-center">
      <div className="flex">
        {icon}
        <h5 className="text-h5">{title}</h5>
        <div className="bg-gray-300/20">1</div>
      </div>
      <div>conteudo</div>
    </div>
  )
}
