import {
  Briefcase,
  Globe,
  Link,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import React from "react";
import { useState } from "react";

function PersonalInfoForm({
  data,
  onChange,
  removeBackground,
  setRemoveBackground,
}) {
  const handleChange = (field, value) => {
    onChange({ ...data, [field]: value });
  };

  // for set the image to url
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      // reader.result is a base64 data URL
      onChange({ ...data, image: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const fields = [
    {
      key: "full_name",
      label: "Full Name",
      icon: User,
      type: "text",
      required: true,
    },
    {
      key: "email",
      label: "Email Addresh",
      icon: Mail,
      type: "email ",
      required: true,
    },
    { key: "phone", label: "Phone Number", icon: Phone, type: "tel" },
    { key: "location", label: "Location", icon: MapPin, type: "text" },
    { key: "profession", label: "Profession", icon: Briefcase, type: "tel" },
    { key: "linked", label: "Linked Profile", icon: Link, type: "url" },
    { key: "website", label: "Persssional Website", icon: Globe, type: "url" },
  ];

  return (
    <div className="space-y-6">
      {/* Header – aligned with summary section styling */}
      <div className="mt-2">
        <h3 className="text-lg font-semibold text-gray-800">
          Personal Information
        </h3>
        <p className="text-sm text-gray-500 mt-0.5">
          Get started with personal information
        </p>
      </div>

      {/* Avatar + Toggle */}
      <div className="flex items-center gap-4 flex-wrap">
        <label className="cursor-pointer group flex items-center justify-center">
          {data?.image ? (
            <img
              src={
                typeof data?.image === "string"
                  ? data?.image
                  : URL.createObjectURL(data?.image)
              }
              alt="User"
              className="w-16 h-16 rounded-full object-cover ring-2 ring-slate-200 group-hover:ring-slate-300 transition-all"
            />
          ) : (
            <div className="flex items-center gap-2 text-slate-500 hover:text-slate-700 cursor-pointer">
              <User className="size-10 p-2.5 border rounded-full" />
              <span>Upload Photo</span>
            </div>
          )}
          <input
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {typeof data?.image === "object" && (
          <div className="flex items-center gap-3 text-sm bg-slate-50 px-3 py-2 rounded-full border border-slate-200">
            <span className="text-gray-600">Remove Background</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setRemoveBackground((prev) => !prev)}
                checked={removeBackground}
              />
              <div className="w-9 h-5 bg-gray-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200 after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:after:translate-x-4 peer-checked:after:border-white"></div>
            </label>
          </div>
        )}
      </div>

      {/* Form Fields – Grid */}
      <div className="space-y-4">
        {fields.map((field) => {
          const Icon = field.icon;
          return (
            <div key={field.key} className="space-y-1.5">
              <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Icon className="size-4 text-gray-400" />
                {field.label}
                {field.required && <span className="text-red-500">*</span>}
              </label>
              <input
                type={field.type}
                value={data[field.key] ?? ""}
                onChange={(e) => handleChange(field.key, e.target.value)}
                className="w-full px-4 py-2.5 bg-gray-50 border border-gray-300 rounded-lg focus:bg-white focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none transition-all placeholder:text-gray-400 hover:border-gray-400"
                placeholder={`Enter ${field.label.toLowerCase()}`}
                required={field.required}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PersonalInfoForm;
