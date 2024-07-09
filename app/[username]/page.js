import React from "react";

const Username = ({ params }) => {
  return (
    <>
      <div className="cover w-full relative">
        <img
          className="object-cover w-full h-[350px]"
          src="https://c10.patreonusercontent.com/4/patreon-media/p/campaign/4842667/452146dcfeb04f38853368f554aadde1/eyJ3IjoxOTIwLCJ3ZSI6MX0%3D/16.gif?token-time=1722729600&token-hash=HVKoue-XHYonEojOK1U6zV4DehD9QHYef7vSZTsQ3sI%3D"
          alt=""
        />
        <div className="absolute -bottom-14 left-[44%] border-white border-2 rounded-3xl">
          <img
            width={150}
            height={150}
            className="rounded-3xl"
            src="https://th.bing.com/th/id/OIP.cvg_MdgYsY9-fKD5eV8SpgHaE5?rs=1&pid=ImgDetMain"
            alt=""
          />
        </div>
      </div>
      <div className="info flex justify-center items-center my-16 flex-col gap-2">
        <div className="font-bold text-lg">@{params.username}</div>
        <div className="text-slate-400">Creating Animated art for VTT's</div>
        <div className="text-slate-400">
          12,113 members . 86 posts . $16,090/release
        </div>

        <div className="payment flex gap-3 w-[80%] text-white mt-10">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg pl-7 ">
            {/* Show list of all supporters as a leaderboard */}
            <h2 className="text-2xl font-bold my-4">Supporters</h2>
            <ul className=" my-4 mx-5 text-lg">
              <li className="my-4 flex gap-2 items-center">
                <img src="avatar.gif" alt="user avatar" width={33} height={33}/>
                <span>
                Shubham donated <span className="font-bold">$30</span> with the message "Love You bruh . lots of Love ♥"
                </span>
                </li>
              <li className="my-4 flex gap-2 items-center">
                <img src="avatar.gif" alt="user avatar" width={33} height={33}/>
                <span>
                Shubham donated <span className="font-bold">$30</span> with the message "Love You bruh . lots of Love ♥"
                </span>
                </li>
              <li className="my-4 flex gap-2 items-center">
                <img src="avatar.gif" alt="user avatar" width={33} height={33}/>
                <span>
                Shubham donated <span className="font-bold">$30</span> with the message "Love You bruh . lots of Love ♥"
                </span>
                </li>
              <li className="my-4 flex gap-2 items-center">
                <img src="avatar.gif" alt="user avatar" width={33} height={33}/>
                <span>
                Shubham donated <span className="font-bold">$30</span> with the message "Love You bruh . lots of Love ♥"
                </span>
                </li>
              <li className="my-4 flex gap-2 items-center">
                <img src="avatar.gif" alt="user avatar" width={33} height={33}/>
                <span>
                Shubham donated <span className="font-bold">$30</span> with the message "Love You bruh . lots of Love ♥"
                </span>
                </li>
              <li className="my-4 flex gap-2 items-center">
                <img src="avatar.gif" alt="user avatar" width={33} height={33}/>
                <span>
                Shubham donated <span className="font-bold">$30</span> with the message "Love You bruh . lots of Love ♥"
                </span>
                </li>
              <li className="my-4 flex gap-2 items-center">
                <img src="avatar.gif" alt="user avatar" width={33} height={33}/>
                <span>
                Shubham donated <span className="font-bold">$30</span> with the message "Love You bruh . lots of Love ♥"
                </span>
                </li>

            </ul>
          </div>
          <div className="makePayment w-1/2 bg-slate-900 rounded-lg pl-7">
          <h2 className="text-2xl font-bold my-4">Make Payment</h2>
            <div className="flex flex-col gap-2 mr-7">
              input for name and message
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter  your Name" />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter  your Message" />
              <input type="text" className="w-full p-3 rounded-lg bg-slate-800" placeholder="Enter  the Amount" />
              <div className="text-end">
              <button class=" w-28 relative inline-flex items-center justify-center p-1.5 mb-2  overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                <span class="relative px-5 py-1 transition-all ease-in duration-75 bg-white bg-transparent rounded-md group-hover:bg-opacity-0 text-2xl">
                  Pay
                </span>
              </button>
              </div>
            </div>
            {/* or choose from these amounts */}
            <div className="flex gap-2 mt-5 my-5">
              <button className="bg-slate-800 p-3 rounded-lg">Pay $10</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $20</button>
              <button className="bg-slate-800 p-3 rounded-lg">Pay $30</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Username;
