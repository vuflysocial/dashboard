import Link from 'next/link'


export const Overview = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 p-4 gap-4">
      <div className="bg-slate-100 rounded-md flex items-center justify-center pl-3 text-slate-700 font-medium group">
        <Link className="text-center block w-full relative " href="/">
          <span>Dashboard</span>
          <span className="block text-xs text-gray-500">Version 1.0.0 | Melo Inu</span>
        </Link>
      </div>

      <div className="bg-white rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border transition-all duration-300 transform group-hover:rotate-12">
        <i className="ri-twitter-line"></i>
        </div>

        <div className="text-right">
          <p className="text-2xl">...</p>
          <small>...</small>
        </div>
      </div>

      <div className="bg-white rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border transition-all duration-300 transform group-hover:rotate-12">
        <i className="ri-twitter-line"></i>
        </div>
        <div className="text-right">
          <p className="text-2xl">...</p>
          <small>...</small>
        </div>
      </div>

      <div className="bg-white rounded-md flex items-center justify-between p-3 text-slate-700 font-medium group">
        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full border transition-all duration-300 transform group-hover:rotate-12">
        <i className="ri-twitter-line"></i>
        </div>
        <div className="text-right">
          <p className="text-2xl">...</p>
          <small>...</small>
        </div>
      </div>


    </div>
  );
}