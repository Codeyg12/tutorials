"use client";

import { CldUploadButton } from "next-cloudinary";
import { Upload } from "lucide-react";

const UploadButton = () => {
  return (
    <CldUploadButton
      signatureEndpoint={"/api/sign-cloudinary-params"}
      options={{ autoMinimize: true }}
    >
      <span className="flex gap-2 items-center">
        <Upload className="w-4 h-4" /> Upload
      </span>
    </CldUploadButton>
  );
};

export default UploadButton;
