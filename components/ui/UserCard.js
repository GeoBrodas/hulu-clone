import Image from 'next/image';

import { signOut } from 'next-auth/client';

function UserCard({ userData }) {
  const { user } = userData;
  function logoutHandler() {
    signOut();
  }

  return (
    <div className="flex flex-row justify-center m-5 p-2 rounded-lg items-center ">
      <div>
        <p className="text-lg text-gray-50 mr-2">Welcome {user.name}</p>
        <Image
          alt={user.name}
          src={user.image}
          height={30}
          width={30}
          className="rounded-full"
        />
      </div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
}

export default UserCard;
