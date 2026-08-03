import { getMyRentalRequests } from "../../_actions/getMyRentalRequests";
import {  getMyRentalRequestsForLandlord } from '../../_actions/landlordAction';
import RentalRequestLandlordView from "../_components/rental-request-landlord_view";

const TenantMyRequestPage = async () => {
  const rentalRequests = await getMyRentalRequestsForLandlord();

  if (!rentalRequests.success || !rentalRequests.data.length) {
    return (
      <p className="py-12 text-center text-muted-foreground">
        You haven&apos;t created any posts yet.
      </p>
    );
  }

  return (
    <>
      <div className="container mx-auto py-8">
        <RentalRequestLandlordView rentalRequests={rentalRequests} />
      </div>
    </>
  );
};

export default TenantMyRequestPage;
