// import React from "react";
// import { getAllProperty } from "../../_actions/propertyActions";
// import PropertyGallery from "../../_components/_property/PropertyGallery";
// import PropertyInfo from "../../_components/_property/PropertyInfo";
// import { Images } from "lucide-react";
// import Amenities from "../../_components/_property/Amenities";
// import PropertiesPage from "../../_components/_property/PropertiesPage";

// const page = async () => {
//   const properties = await getAllProperty();
//   console.log(properties?.data);
// return (
<>
  {/* <h1>properties</h1> */}
  {/* <PropertyGallery/> */}
  {/* {properties?.data.map((item: any) => (
        <PropertyInfo key={item.id} property={item} />
      ))}

      {properties?.data.map(
        (item: any) =>
          item.amenities.length > 0 && (
            <Amenities key={item.id} amenities={item?.amenities} />
          ),
      )} */}
  {/* <PropertiesPage properties={properties?.data} /> */}
</>;
// );
// };

// export default page;
// [{
//     "id": "147e4625-c489-4692-959f-0e04b2a7d217",
//     "title": "Modern 3-Bedroom Apartment in Bashundhara R/A",
//     "description": "A spacious, well-lit apartment featuring modern fittings, 24/7 security, and a beautiful balcony view.",
//     "address": "Block D, Road 4, Bashundhara Residential Area",
//     "city": "Khulna",
//     "area": "1800 sqft",
//     "rentPrice": 45000,
//     "bedrooms": 3,
//     "bathrooms": 3,
//     "isAvailable": true,
//     "landlordId": "75552ead-8b8b-49d0-8c0c-2eddb5f41f38",
//     "categoryId": "67c79800-6f38-4539-845c-2fe2dc36c328",
//     "createdAt": "2026-07-08T10:56:56.664Z",
//     "updatedAt": "2026-07-08T10:56:56.664Z",
//     "landlord": {
//         "id": "75552ead-8b8b-49d0-8c0c-2eddb5f41f38",
//         "name": "LANDLORD",
//         "email": "LANDLORD@gmail.com",
//         "phone": "01234567802",
//         "profilePhoto": "https://images.pexels.com/photos/10031556/pexels-photo-10031556.jpeg?_gl=1*y2lxdn*_ga*MTA5MTkyOTE1LjE3ODU0MDY1NzQ.*_ga_8JE65Q40S6*czE3ODU0MDk1NzAkbzIkZzEkdDE3ODU0MDk1NzckajUzJGwwJGgw",
//         "role": "LANDLORD",
//         "status": "ACTIVE",
//         "stripeCustomerId": null,
//         "createdAt": "2026-07-07T14:25:09.714Z",
//         "updatedAt": "2026-07-07T14:25:09.714Z"
//     },
//     "category": {
//         "id": "67c79800-6f38-4539-845c-2fe2dc36c328",
//         "name": "Apartment",
//         "createdAt": "2026-07-08T09:01:36.776Z",
//         "updatedAt": "2026-07-08T09:01:36.776Z"
//     },
//     "amenities": [
//         {
//             "propertyId": "147e4625-c489-4692-959f-0e04b2a7d217",
//             "amenityId": "051a5e86-8d26-4ad7-a0f6-bff94aca8f0f",
//             "amenity": {
//                 "id": "051a5e86-8d26-4ad7-a0f6-bff94aca8f0f",
//                 "name": "Generator Backup",
//                 "createdAt": "2026-07-08T10:00:36.112Z"
//             }
//         },
//         {
//             "propertyId": "147e4625-c489-4692-959f-0e04b2a7d217",
//             "amenityId": "5f400c12-ead6-488a-9024-54833c01eb09",
//             "amenity": {
//                 "id": "5f400c12-ead6-488a-9024-54833c01eb09",
//                 "name": "Gym",
//                 "createdAt": "2026-07-08T10:00:13.846Z"
//             }
//         },
//         {
//             "propertyId": "147e4625-c489-4692-959f-0e04b2a7d217",
//             "amenityId": "7e748b90-60dd-48c4-98c9-32d6b48bec5e",
//             "amenity": {
//                 "id": "7e748b90-60dd-48c4-98c9-32d6b48bec5e",
//                 "name": "Interco",
//                 "createdAt": "2026-07-08T09:59:49.847Z"
//             }
//         }
//     ],
//     "images": [
//         {
//             "id": "63871cd5-c503-42fb-8e43-dc858ed7fb56",
//             "imageUrl": "https://hips.hearstapps.com/hmg-prod/images/ceara-donnelley-charleston-house-tour-bedroom-jpg-1618427139.jpg?crop=0.8781275221953189xw:1xh;center,top&resize=1200.",
//             "propertyId": "147e4625-c489-4692-959f-0e04b2a7d217",
//             "createdAt": "2026-07-08T13:08:30.764Z"
//         },
//         {
//             "id": "48c286af-8531-4965-9646-13d470a2c6f5",
//             "imageUrl": "https://images.unsplash.com/photo-1560185007-cde436f6a4d0",
//             "propertyId": "147e4625-c489-4692-959f-0e04b2a7d217",
//             "createdAt": "2026-07-08T13:08:34.374Z"
//         },
//         {
//             "id": "52e811ec-b8e7-488d-9e01-cac0e71c67a4",
//             "imageUrl": "https://images.pexels.com/photos/18285942/pexels-photo-18285942.jpeg?_gl=1*t2ildl*_ga*MTA5MTkyOTE1LjE3ODU0MDY1NzQ.*_ga_8JE65Q40S6*czE3ODU0MDY1NzQkbzEkZzEkdDE3ODU0MDY1OTQkajQwJGwwJGgw",
//             "propertyId": "147e4625-c489-4692-959f-0e04b2a7d217",
//             "createdAt": "2026-07-08T13:06:12.357Z"
//         },
//         {
//             "id": "c73fdcd3-e432-4e85-9bbd-7185ab673c57",
//             "imageUrl": "https://images.pexels.com/photos/33560232/pexels-photo-33560232.jpeg?_gl=1*hd6fhq*_ga*MTA5MTkyOTE1LjE3ODU0MDY1NzQ.*_ga_8JE65Q40S6*czE3ODU0MDY1NzQkbzEkZzEkdDE3ODU0MDY3ODQkajE2JGwwJGgw",
//             "propertyId": "147e4625-c489-4692-959f-0e04b2a7d217",
//             "createdAt": "2026-07-08T13:06:41.188Z"
//         }
//     ]
// }
// ]

// =====================================================
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

export default function Page() {
  return (
    <main className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800">
      {/* Navigation */}
      <nav className="bg-white/5 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <Home className="w-6 h-6" />
            <span className="text-xl font-bold">RentHub</span>
          </div>
          <Link href="/properties">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              View Properties
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
            Find Your Perfect <span className="text-blue-400">Home</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover a wide range of rental properties with modern amenities,
            trusted landlords, and flexible terms.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Link href="/properties">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white gap-2"
              >
                Browse Properties
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10"
            >
              Learn More
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">250+</div>
            <p className="text-gray-300 mt-2">Available Properties</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">5K+</div>
            <p className="text-gray-300 mt-2">Happy Renters</p>
          </div>
          <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 text-center">
            <div className="text-4xl font-bold text-blue-400">50+</div>
            <p className="text-gray-300 mt-2">Verified Landlords</p>
          </div>
        </div>
      </div>
    </main>
  );
}
