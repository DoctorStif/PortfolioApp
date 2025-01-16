"use client";

import { useState } from "react";
import Image from "next/image";
import { ProfilePlaceholderIcon } from "./AboutIcons";

export default function ProfileImage() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="relative">
      <div className="relative h-[400px] md:h-[500px] w-full rounded-2xl overflow-hidden bg-gray-800">
        {!imageError ? (
          <Image
            src="/images/profile/profile.jpg"
            alt="Your Name"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 p-4">
            <ProfilePlaceholderIcon />
            <span className="text-sm text-center">Profile image not found</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-400/10 rounded-full blur-3xl" />
      <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary-400/10 rounded-full blur-3xl" />
    </div>
  );
}
