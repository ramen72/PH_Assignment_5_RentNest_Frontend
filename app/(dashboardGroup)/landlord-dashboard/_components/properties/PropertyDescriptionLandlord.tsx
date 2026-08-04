"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

interface PropertyDescriptionProps {
  description: string;
}

export default function PropertyDescriptionLandlord({
  description,
}: PropertyDescriptionProps) {
  const [expanded, setExpanded] = useState(false);

  const MAX_LENGTH = 250;
  const shouldTruncate = description?.length > MAX_LENGTH;

  const displayText =
    expanded || !shouldTruncate
      ? description
      : `${description?.slice(0, MAX_LENGTH)}...`;

  return (
    <Card className="border shadow-sm transition-all duration-300 hover:shadow-md">
      <CardHeader className="flex flex-row items-center gap-3 border-b pb-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
          <FileText className="h-5 w-5" />
        </div>

        <div>
          <h2 className="text-xl font-semibold">Property Description</h2>
          <p className="text-sm text-muted-foreground">
            Learn more about this property.
          </p>
        </div>
      </CardHeader>

      <CardContent className="space-y-4 pt-6">
        <p className="text-[15px] leading-8 text-muted-foreground whitespace-pre-line">
          {displayText}
        </p>

        {shouldTruncate && (
          <Button
            variant="ghost"
            className="px-0 font-semibold"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Read More"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}
