"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Heart, MapPin, BedDouble, Bath, Zap } from "lucide-react";
import { useState } from "react";

interface PropertyImage {
  id: string;
  imageUrl: string;
}

interface Landlord {
  id: string;
  name: string;
  email: string;
  phone: string;
  profilePhoto: string;
}

interface Amenity {
  propertyId: string;
  amenityId: string;
  amenity: {
    id: string;
    name: string;
  };
}

interface PropertyCardProps {
  id: string;
  title: string;
  description: string;
  address: string;
  city: string;
  area: string;
  rentPrice: number;
  bedrooms: number;
  bathrooms: number;
  isAvailable: boolean;
  landlord: Landlord;
  amenities: Amenity[];
  images: PropertyImage[];
  viewType?: "card" | "list";
}

export function PropertyCard({
  id,
  title,
  description,
  address,
  city,
  rentPrice,
  area,
  bedrooms,
  bathrooms,
  isAvailable,
  landlord,
  amenities,
  images,
  viewType = "card",
}: PropertyCardProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const mainImage = images?.[0]?.imageUrl || "/placeholder.jpg";

  if (viewType === "list") {
    return (
      <div className="flex gap-4 p-4 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow">
        {/* Image */}
        <div className="relative w-48 h-32 shrink-0 rounded-lg overflow-hidden">
          <Image src={mainImage} alt={title} fill className="object-cover" />
          {isAvailable && (
            <Badge className="absolute top-2 left-2 bg-green-500">
              Available
            </Badge>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-gray-900 truncate">
            {title}
          </h3>
          <div className="flex items-center text-gray-600 text-sm mt-1 gap-1">
            <MapPin className="w-4 h-4" />
            <span>{address}</span>
          </div>
          <p className="text-gray-600 text-sm mt-2 line-clamp-2">
            {description}
          </p>

          <div className="flex items-center gap-6 mt-3">
            <div className="flex items-center gap-1 text-gray-700">
              <BedDouble className="w-4 h-4" />
              <span className="text-sm">{bedrooms}</span>
            </div>
            <div className="flex items-center gap-1 text-gray-700">
              <Bath className="w-4 h-4" />
              <span className="text-sm">{bathrooms}</span>
            </div>
            <div className="text-sm text-gray-600">{area}</div>
          </div>

          {amenities.length > 0 && (
            <div className="flex gap-2 mt-3 flex-wrap">
              {amenities.slice(0, 2).map((amenity) => (
                <Badge
                  key={amenity.amenityId}
                  variant="outline"
                  className="text-xs"
                >
                  {amenity.amenity.name}
                </Badge>
              ))}
              {amenities.length > 2 && (
                <Badge variant="outline" className="text-xs">
                  +{amenities.length - 2}
                </Badge>
              )}
            </div>
          )}
        </div>

        {/* Price and Actions */}
        <div className="flex flex-col items-end justify-between py-2">
          <button
            onClick={() => setIsFavorite(!isFavorite)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <Heart
              className={`w-5 h-5 ${
                isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
              }`}
            />
          </button>
          <div>
            <p className="text-2xl font-bold text-gray-900">
              ৳{rentPrice.toLocaleString()}
            </p>
            <p className="text-xs text-gray-500">/month</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300 group cursor-pointer">
      {/* Image Container */}
      <div className="relative w-full h-64 overflow-hidden bg-gray-100">
        <Image
          src={mainImage}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        <div className="absolute top-3 left-3 z-10">
          {isAvailable ? (
            <Badge className="bg-green-500 hover:bg-green-600">Available</Badge>
          ) : (
            <Badge className="bg-red-500 hover:bg-red-600">Rented</Badge>
          )}
        </div>

        {/* Image Count */}
        {images.length > 1 && (
          <div className="absolute bottom-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded">
            {images.length} photos
          </div>
        )}

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className="absolute top-3 right-3 p-2 bg-white/80 hover:bg-white rounded-full transition-all backdrop-blur-sm"
        >
          <Heart
            className={`w-5 h-5 ${
              isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Title */}
        <h3 className="font-bold text-lg text-gray-900 line-clamp-2 mb-2">
          {title}
        </h3>

        {/* Location */}
        <div className="flex items-start gap-2 text-sm text-gray-600 mb-3">
          <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
          <span>{address}</span>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{description}</p>

        {/* Specs */}
        <div className="flex justify-between py-3 border-t border-gray-200 border-b">
          <div className="flex flex-col items-center gap-1">
            <BedDouble className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-medium text-gray-700">
              {bedrooms} Bed
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Bath className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-medium text-gray-700">
              {bathrooms} Bath
            </span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <Zap className="w-4 h-4 text-gray-600" />
            <span className="text-xs font-medium text-gray-700">{area}</span>
          </div>
        </div>

        {/* Amenities */}
        {amenities.length > 0 && (
          <div className="flex gap-2 mt-3 flex-wrap">
            {amenities.slice(0, 2).map((amenity) => (
              <Badge
                key={amenity.amenityId}
                variant="secondary"
                className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100"
              >
                {amenity.amenity.name}
              </Badge>
            ))}
            {amenities.length > 2 && (
              <Badge variant="outline" className="text-xs">
                +{amenities.length - 2} more
              </Badge>
            )}
          </div>
        )}

        {/* Landlord */}
        <div className="flex items-center gap-2 mt-3 pt-3 border-t border-gray-100">
          <Image
            src={landlord.profilePhoto}
            alt={landlord.name}
            width={32}
            height={32}
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <p className="text-xs font-medium text-gray-900">{landlord.name}</p>
            <p className="text-xs text-gray-500 truncate">{landlord.phone}</p>
          </div>
        </div>

        {/* Price */}
        <div className="mt-4 pt-3 border-t border-gray-200">
          <p className="text-xs text-gray-500 mb-1">Rent Price</p>
          <p className="text-2xl font-bold text-gray-900">
            ৳{rentPrice.toLocaleString()}
            <span className="text-xs text-gray-500 font-normal ml-1">
              /month
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
