import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
      <div className="flex justify-center flex-col items-center text-white h-[44vh] gap-4">
        <div className="font-bold text-3xl">Buy Me a Water</div>
        <p>
          A Crowdfunding platform for creators. Get funded by your fans and
          followers.
        </p>
        <div>
        <button
          type="button"
          class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Start Here!
        </button>
        <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Know More
          </span>
        </button>
        </div>
      </div>
    </div>
    <div className="h-1 opacity-40 bg-white"></div>
    </>
    
  );
}
