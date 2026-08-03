import React from 'react';
import { getAllRentalRequests } from '../../_actions/adminAction';
import RentalRequestAdminView from './_components/rental-request-admin-view';

const page = async () => {
    const rentalRequests = await getAllRentalRequests();
    console.log(rentalRequests)
      if (!rentalRequests.success || !rentalRequests.data.length) {
        return (
          <p className="py-12 text-center text-muted-foreground">
            You haven&apos;t created any posts yet.
          </p>
        );
      }
    return (
        <>
            <h1>rent-requests</h1>
            <RentalRequestAdminView rentalRequests={rentalRequests} />
        </>
    );
};

export default page;