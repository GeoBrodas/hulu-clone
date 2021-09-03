import Image from 'next/image';

import { signOut } from 'next-auth/client';

function UserCard({ userData }) {
  const { user } = userData;
  function logoutHandler() {
    signOut();
  }

  return (
    <div className="flex flex-row justify-center m-5 p-2 rounded-lg items-center ">
      <div className="p-4 lg:w-1/3">
        <div className="flex bg-gray-800 rounded-lg hover:scale-105 transition duration-100 transform ease-in-out border-2 border-opacity-40  p-8 sm:flex-row flex-col items-center">
          <div className="w-13 h-13 sm:w-20 sm:h-20 sm:mr-5">
            <Image
              alt={user.name}
              src={user.image}
              height={100}
              width={100}
              className="rounded-full"
            />
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-xl">Welcome {user.name}</p>
            <button
              className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              onClick={logoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
