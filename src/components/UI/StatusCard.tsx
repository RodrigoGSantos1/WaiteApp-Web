import { IStatusCard } from '../@types/StatusCard'

export function StatusCard({ icon, title }: IStatusCard) {
  return (
    <div className="rounded-md border border-gray-300/40 bg-white-200 flex flex-col items-center justify-center p-4">
      <div className="flex items-center mb-8">
        {icon}
        <h5 className="text-h5 mx-5">{title}</h5>
        <div className="bg-gray-300/20 py-1 px-2 rounded">1</div>
      </div>
      <div className="bg-white-100 w-full h-[128px] rounded-md border border-gray-300/40 flex flex-col items-center justify-center">
        <span className="text-medium">Messa 2</span>
        <p className="text-small text-gray-700">2 items</p>
      </div>
    </div>
  )
}
