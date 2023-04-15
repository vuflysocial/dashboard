import Link from 'next/link'
import Head from 'next/head'
import styles from '../styles/Home.module.css'


export const Sidebar = () => {
  return (



    <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-white h-full transition-all duration-300 border-r z-10 sidebar">
      <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
        <ul className="flex flex-col py-4 space-y-1">

          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center h-8">
              <div className="text-sm tracking-wide text-gray-400 uppercase">Main</div>
            </div>
          </li>
          <Head>
    <link href="https://cdn.remixicon.com/releases/v1.3.0/remixicon.css" rel="stylesheet" />
  </Head>
          <li>
  <Link href="https://twitter.com/meloinu" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M13 4.05493C17.5 4.55237 21 8.36745 21 13V22H3V13C3 8.36745 6.50005 4.55237 11 4.05493V1H13V4.05493ZM19 20V13C19 9.13401 15.866 6 12 6C8.13401 6 5 9.13401 5 13V20H19ZM12 18C9.23858 18 7 15.7614 7 13C7 10.2386 9.23858 8 12 8C14.7614 8 17 10.2386 17 13C17 15.7614 14.7614 18 12 18ZM12 16C13.6569 16 15
    14.6569 15 13C15 11.3431 13.6569 10 12 10C10.3431 10 9 11.3431 9 13C9 14.6569 10.3431 16 12 16ZM12 14C11.4477 14 11 13.5523 11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14Z" fill="#000"></path>
    </svg>
    </span>
    <span className="ml-2 text-sm tracking-wide truncate">use Melo GPT</span>
  </Link>
</li>
          <li>
  <Link href="https://twitter.com/meloinu" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M16 21L11.2381 12.2698L15 6L23
     21H16ZM8 10L14 21H2L8 10ZM5.5 8C4.11929 8 3 6.88071 3 5.5C3 4.11929 4.11929 3 5.5 3C6.88071 3 8 4.11929 8 5.5C8 6.88071 6.88071 8 5.5 8Z" fill="#000"></path>
     </svg>
    </span>
    <span className="ml-2 text-sm tracking-wide truncate">Like Melo NFT Mint</span>
  </Link>
</li>
          <li>
  <Link href="https://twitter.com/meloinu" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M6.96407 3H17.0358C17.2844 4.72201 18.7601 6 20.5 6 20.8321 6 21.1626 5.95272 21.4814 5.85957 21.2972 7.64386 19.7937 9 18 9H5.99997C4.20619 9 2.70278 7.64386 2.51849 5.85957 2.83733 5.95272 3.16781 6 3.49997 6 5.23982 6 6.71552 4.72201 6.96407 3ZM16.8994 6.65761C16.3391 6.1724 15.902 5.61986 15.5881 5H8.41184C8.09793 5.61986 7.66084 6.1724 7.10057 6.65761 6.9591 6.78013 6.8145 6.89426 6.66678 7H17.3331C17.1855 6.89426 17.0409 6.78013 16.8994 6.65761ZM21.5 11.5005C22.0376 11.5005 22.5422 11.3591 22.9786 11.1114 22.9927 11.2391 23 11.369 23 11.5005 23 12.8967 22.1825 14.1019 21 14.6637V21H14V19C14 17.8954 13.1046 17 12 17 10.8954 17 10 17.8954 10 19V21H3V14.6637C1.81753 14.1019 1 12.8967 1 11.5005 1 11.369 1.00725 11.2391 1.02138 11.1114 1.45778 11.3591 1.96237 11.5005 2.5 11.5005 3.61042 11.5005 4.57994 10.8972 5.09865 10.0005H18.9013C19.4201 10.8972 20.3896
    11.5005 21.5 11.5005ZM18.9632 12.8097C18.5756 12.5812 18.2296 12.3115 17.9252 12.0005H6.07479C5.77042 12.3115 5.42443 12.5812 5.03683 12.8097 4.834 12.9293 4.62683 13.0333 4.41532 13.1218L5 13.3996V19H8C8 17.8954 8.39052 16.9526 9.17157 16.1716 9.95262 15.3905 10.8954 15 12 15 13.1046 15 14.0474 15.3905 14.8284 16.1716 15.6095 16.9526 16 17.8954 16 19H19V13.3996L19.5847 13.1218C19.3732 13.0333 19.166 12.9293 18.9632 12.8097Z" fill="#000"></path>
    </svg>
    </span>
    <span className="ml-2 text-sm tracking-wide truncate">NFT GATED DAPP</span>
  </Link>
</li>
          <li>
  <Link href="https://twitter.com/meloinu" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.6909 12.9146L17.4587 14.6823C11.4482 20.6927 6.4985 20.6927 2.25586 19.2785L17.8122 3.72217L21.3477 7.2577L15.6909 12.9146ZM12.8625 12.9146L18.5193
    7.2577L17.8122 6.55059L6.3145 18.0483C9.04606 18.1557 11.6722 17.1419 14.5808 14.6329L12.8625 12.9146Z" fill="#000"></path>
    </svg>
    </span>
    <span className="ml-2 text-sm tracking-wide truncate">STAKING DAPP</span>
  </Link>
</li>
          <li>
  <Link href="https://twitter.com/meloinu" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M15.3499 5.5498C13.7681 5.5498 12.4786 6.81785 12.4504 8.39633L12.4223 9.97138C12.4164 10.3027 12.143 10.5665 11.8117 10.5606C11.7881 10.5602 11.7646 10.5584 11.7413 10.5552L10.1805 10.3423C8.12699 10.0623 6.15883 9.11711 4.27072 7.54387C3.67275 10.8535 4.84 13.147 7.65342 14.9157L9.40041 16.014C9.68095 16.1904 9.7654 16.5608 9.58903 16.8413C9.54861 16.9056 9.49636 16.9616 9.43504 17.0064L7.84338 18.1693C8.78973 18.2288 9.68938 18.1873 10.435 18.0385C15.1526 17.097 18.2897 13.5468 18.2897 7.69084C18.2897 7.21275 17.2774 5.5498 15.3499 5.5498ZM10.4507 8.36066C10.4983 5.69559 12.6735 3.5498 15.3499 3.5498C16.7132 3.5498 17.9465 4.10658 18.8348 5.00515C19.5462 4.9998 20.1514 5.17966 21.5035 4.35943C21.1693 5.9998 21.0034 6.71177 20.2897 7.69084C20.2897 15.3324 15.5926 19.0487 10.8264 19.9998C7.5587 20.6519 2.80646 19.5812 1.44531 18.1584C2.13874 18.1051 4.95928 17.8018 6.58895
     16.6089C5.20994 15.6984 -0.278631 12.4679 3.32772 3.78617C5.02119 5.76283 6.73797 7.10831 8.47807 7.82262C9.63548 8.29774 9.91978 8.28825 10.4507 8.36066Z" fill="#000"></path>
     </svg>
    </span>
    <span className="ml-2 text-sm tracking-wide truncate">Twitter</span>
  </Link>
</li>


<li>
  <Link href="https://twitter.com/meloinu" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M12.001 20C16.4193 20 20.001 16.4183 20.001 12C20.001 7.58172 16.4193 4 12.001 4C7.5827 4 4.00098 7.58172 4.00098 12C4.00098 16.4183 7.5827 20 12.001 20ZM12.001 22C6.47813 22 2.00098 17.5228 2.00098 12C2.00098 6.47715 6.47813 2 12.001 2C17.5238 2 22.001 6.47715 22.001 12C22.001 17.5228 17.5238 22 12.001 22ZM8.89113 13.1708L6.39308 12.3911C5.85317 12.2255 5.84996 11.854 6.51397 11.5871L16.247 7.82754C16.8115 7.59644 17.1325 7.88842 16.9495 8.61641L15.2917 16.4377C15.1763 16.9941 14.8407 17.1266 14.3759 16.8698L11.825 14.9823L10.6361
    16.1297C10.5139 16.2476 10.4145 16.3489 10.2273 16.3743C10.04 16.3996 9.88564 16.3442 9.77337 16.0337L8.90378 13.1628L8.89113 13.1708Z" fill="#000"></path>
    </svg>
    </span>
    <span className="ml-2 text-sm tracking-wide truncate">Telegram</span>
  </Link>
</li>

<li>
  <Link href="https://twitter.com/meloinu" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
    <span className="inline-flex justify-center items-center ml-4">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path d="M17 17V19C17 19.5523 17.4477 20 18 20C18.5523 20 19 19.5523
    19 19V4H5V15H3V3C3 2.44772 3.44772 2 4 2H20C20.5523 2 21 2.44772 21 3V19C21 20.6569 19.6569 22 18 22H4C2.34315 22 1 20.6569 1 19V17H17Z" fill="#000"></path>
    </svg>
    </span>
    <span className="ml-2 text-sm tracking-wide truncate">Whitepaper V2</span>
  </Link>
</li>

          <li className="px-5 hidden md:block">
            <div className="flex flex-row items-center mt-5 h-8">
              <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
            </div>
          </li>
          <li>
            <Link href="/" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
              <i className="ri-twitter-line"></i>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">...</span>
            </Link>
          </li>
          <li>
            <Link href="/" className="relative flex flex-row items-center h-11 text-slate-800 focus:outline-none hover:text-white hover:bg-blue-600 hover:border-blue-900 border-l-4 border-transparent  pr-6">
              <span className="inline-flex justify-center items-center ml-4">
              <i className="ri-twitter-line"></i>
              </span>
              <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
            </Link>
          </li>
        </ul>



        <div className="px-3 hidden md:block">
          <div className="overflow-hidden group relative rounded-lg flex justify-center items-center">
            <Link className="block w-full relative z-10 rounded-lg bg-slate-100 sm:p-6" href="/">
              <p className="mt-2 text-slate-500 text-sm">Powered by:</p>
              <h1>MELO INU</h1>
              <div className="mt-8">
                <p className="text-sm text-gray-500">
                  Melo Inu Dashboad gives you the best experience with all the features you need for
                  to access the Melo Inu ecosytem.
                </p>
              </div>
            </Link>
          </div>
        </div>

        <p className="mb-14 px-5 py-3 hidden md:block text-center text-xs text-gray-500">Copyright @2023</p>
      </div>
    </div>
  );
}
