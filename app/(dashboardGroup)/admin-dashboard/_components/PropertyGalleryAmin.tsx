"use client";

import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Images } from "lucide-react";

interface PropertyImage {
  imageUrl: string;
}

interface PropertyGalleryProps {
  title: string;
  images: PropertyImage[];
}

export default function PropertyGalleryAmin({
  title,
  images,
}: PropertyGalleryProps) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  

  if (!images?.length) {
    return (
      <div className="flex h-112.5 items-center justify-center rounded-2xl bg-muted">
        <p className="text-muted-foreground">No Images Available</p>
      </div>
    );
  }

  const nextImage = () => {
    setSelected((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setSelected((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const openViewer = (index: number) => {
    setSelected(index);
    setOpen(true);
  };

  return (
    <>
      <div className="overflow-hidden rounded-3xl">
        {/* Desktop */}

        <div className="hidden h-130 gap-2 lg:grid lg:grid-cols-4">
          {/* Hero Image */}

          <div
            className={`group relative col-span-2 cursor-pointer overflow-hidden`}
            onClick={() => openViewer(0)}
          >
            <Image
              src={images[0].imageUrl}
              unoptimized
              alt={title}
              fill
              priority
              className="object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          {/* Right Grid */}

          <div className="col-span-2 grid grid-cols-2 gap-2">
            {images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="group relative cursor-pointer overflow-hidden"
                onClick={() => openViewer(index + 1)}
              >
                <Image
                  src={image.imageUrl}
                  unoptimized
                  alt={title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                {index === 3 && images.length > 5 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/55">
                    <div className="text-center text-white">
                      <Images className="mx-auto mb-2 h-8 w-8" />

                      <p className="text-xl font-bold">+{images.length - 5}</p>

                      <p className="text-sm">More Photos</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile */}

        <div
          className="relative h-75 cursor-pointer overflow-hidden rounded-3xl lg:hidden"
          onClick={() => openViewer(0)}
        >
          <Image
            src={images[0].imageUrl}
            alt={title}
            fill
            priority
            className="object-cover"
          />

          <Button variant="secondary" className="absolute bottom-4 right-4">
            <Images className="mr-2 h-4 w-4" />
            {images?.length} Photos
          </Button>
        </div>
      </div>

      {/* Viewer */}

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-7xl border-none bg-black p-4">
          <DialogTitle className="sr-only">Property Gallery</DialogTitle>

          <div className="relative h-[80vh]">
            <Image
              src={images[selected].imageUrl}
              unoptimized
              alt={title}
              fill
              className="object-contain"
            />

            {/* Previous */}

            <Button
              size="icon"
              variant="secondary"
              className="absolute left-5 top-1/2 -translate-y-1/2"
              onClick={prevImage}
            >
              <ChevronLeft />
            </Button>

            {/* Next */}

            <Button
              size="icon"
              variant="secondary"
              className="absolute right-5 top-1/2 -translate-y-1/2"
              onClick={nextImage}
            >
              <ChevronRight />
            </Button>

            {/* Counter */}

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-sm text-white">
              {selected + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnails */}

          <div className="mt-4 flex gap-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelected(index)}
                className={`relative h-24 w-36 shrink-0 overflow-hidden rounded-xl border-2 transition
                  ${
                    selected === index
                      ? "border-white"
                      : "border-transparent opacity-70"
                  }`}
              >
                <Image
                  src={image?.imageUrl}
                  unoptimized
                  alt=""
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
