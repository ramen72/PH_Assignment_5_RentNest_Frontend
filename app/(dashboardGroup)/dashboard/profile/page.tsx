import React from "react";
import ProfileDetails from "../../_components/_profile/ProfileDetails";
import { getLandlordProfile } from "../../_actions/profileAction";

const UserProfilePage = async () => {
  const user = await getLandlordProfile();
  return (
    <>
      <div className="mx-auto max-w-5xl p-6">
        <h2 className="mb-4 text-lg font-semibold">Profile</h2>
        <ProfileDetails user={user?.data} />
      </div>
    </>
  );
};

export default UserProfilePage;
