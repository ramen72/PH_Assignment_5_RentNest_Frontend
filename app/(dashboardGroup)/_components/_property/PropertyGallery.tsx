"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Images } from "lucide-react";

interface PropertyImage {
  id: string;
  imageUrl: string;
}

interface PropertyGalleryProps {
  images: PropertyImage[];
  title: string;
}

export default function PropertyGallery({
  images,
  title,
}: PropertyGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  console.log(images);
  console.log(title);
  images = [
    {
      id: "1",
      imageUrl:
        "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg",
    },
    {
      id: "2",
      imageUrl:
        "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg",
    },
    {
      id: "3",
      imageUrl:
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
    },
    {
      id: "4",
      imageUrl:
        "https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg",
    },
    {
      id: "5",
      imageUrl:
        "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg",
    },
    {
      id: "6",
      imageUrl:
        "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg",
    },
    {
      id: "7",
      imageUrl:
        "https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg",
    },
    {
      id: "8",
      imageUrl:
        "https://images.pexels.com/photos/534151/pexels-photo-534151.jpeg",
    },
  ];

  if (!images?.length) {
    return (
      <div className="flex h-112.5 items-center justify-center rounded-3xl border bg-muted">
        <p className="text-muted-foreground">No Images Available</p>
      </div>
    );
  }

  const displayImages = images.slice(0, 5);

  return (
    <>
      <div className="relative">
        {/* Image Count */}
        <Badge
          variant="secondary"
          className="absolute bottom-4 right-4 z-20 rounded-full px-4 py-2 shadow-lg backdrop-blur"
        >
          <Images className="mr-2 h-4 w-4" />
          {images.length} Photos
        </Badge>

        <div className="grid h-137.5 gap-2 overflow-hidden rounded-3xl md:grid-cols-4 md:grid-rows-2">
          {/* Main Image */}
          <div
            className="relative col-span-2 row-span-2 cursor-pointer overflow-hidden"
            onClick={() => setSelectedImage(0)}
          >
            <Image
              src={displayImages[0].imageUrl}
              alt={title}
              fill
              priority
              className="object-cover transition duration-500 hover:scale-105"
            />
          </div>

          {/* Side Images */}
          {displayImages.slice(1).map((image, index) => (
            <div
              key={image.id}
              onClick={() => setSelectedImage(index + 1)}
              className="group relative cursor-pointer overflow-hidden"
            >
              <Image
                src={image.imageUrl}
                alt={title}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              {/* Overlay on last image */}
              {index === 3 && images.length > 5 && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/60 text-xl font-semibold text-white">
                  +{images.length - 5} More
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen Gallery */}
      <Dialog
        open={selectedImage >= 0}
        onOpenChange={(open) => {
          if (!open) setSelectedImage(-1);
        }}
      >
        <DialogContent className="max-w-6xl border-0 bg-black/95 p-3">
          <DialogTitle className="sr-only">Property Image Gallery</DialogTitle>

          <div className="space-y-4">
            {/* Large Image */}
            <div className="relative h-[75vh] overflow-hidden rounded-xl">
              <Image
                src={images[selectedImage]?.imageUrl}
                alt={title}
                fill
                className="object-contain"
              />
            </div>

            {/* Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(index)}
                  className={`relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                    selectedImage === index
                      ? "border-primary"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    src={image.imageUrl}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
