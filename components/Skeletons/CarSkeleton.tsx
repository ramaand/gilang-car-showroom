'use client'

const CarSkeleton = () => {
  return (
    <div className="w-full bg-slate-300 rounded-3xl p-4">
      <div className="w-full flex justify-between items-start gap-2">
        <div className="h-6 w-48 animate-pulse bg-slate-500 rounded-lg"></div>
      </div>
      <div className="h-40 w-full animate-pulse bg-slate-500 rounded-lg my-3"></div>

      <div className="flex w-full justify-between animate-pulse">
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="h-6 w-6 bg-slate-500 rounded-lg"></div>
          <div className="h-4 bg-slate-500 rounded-md w-14"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="h-6 w-6 bg-slate-500 rounded-lg"></div>
          <div className="h-4 bg-slate-500 rounded-md w-14"></div>
        </div>
        <div className="flex flex-col justify-center items-center gap-2">
          <div className="h-6 w-6 bg-slate-500 rounded-lg"></div>
          <div className="h-4 bg-slate-500 rounded-md w-14"></div>
        </div>
      </div>
    </div>
  )
}

export default CarSkeleton
