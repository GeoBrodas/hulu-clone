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
        <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col items-center">
          <div className="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <Image
              alt={user.name}
              src={user.image}
              height={30}
              width={30}
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
