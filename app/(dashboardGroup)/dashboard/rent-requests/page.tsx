import { getMyRentalRequests } from "../../_actions/getMyRentalRequests";
import RentalRequestView from "../../_components/_dashboard/rental-request-view";

const TenantMyRequestPage = async () => {
  const rentalRequests = await getMyRentalRequests();
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
        <RentalRequestView rentalRequests={rentalRequests} />
      </div>
    </>
  );
};

export default TenantMyRequestPage;
