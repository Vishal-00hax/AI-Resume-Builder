import React from "react";
import { Sparkles } from "lucide-react";
import api from "../components/utils/axios";
import { useSelector } from "react-redux";
import toast from "react-hot-toast";
import { useState } from "react";

function PrfessionalSummary({ data, onChange }) {
  const [loading, setLoading] = useState(false);
  const { token } = useSelector((store) => store.auth);

  const enhancePrfessionalSummary = async () => {
    try {
      if (!data || data === "") {
        return toast.error(
          "Please enter the PrfessionalSummary first before enhancing.",
        );
      }
      setLoading(true);
      const res = await api.post(
        "/api/ai/enhance-pro-sum",
        { userContent: data },
        { headers: { Authorization: `Bearar ${token}` } },
      );
      onChange(res.data.data);
      toast.success("PrfessionalSummary Enhance");
    } catch (err) {
      const errText =
        err.response.message || err.response || "Something Went Wrong";
      toast.error(errText);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mt-5">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            Professional Summary
          </h3>
          <p className="text-sm text-gray-500 mt-0.5">
            Add a summary for your resume.
          </p>
        </div>
        <button
          onClick={enhancePrfessionalSummary}
          type="button"
          disabled={loading}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium text-purple-700 bg-purple-50 border border-purple-200 hover:bg-purple-100 transition-colors"
        >
          <Sparkles className="size-4" />
          {!loading ? "AI Enhance" : "Enhanceing..."}
        </button>
      </div>

      {/* Form field */}
      <div className="flex flex-col gap-2.5">
        <label className="text-sm font-medium text-gray-700">Summary</label>
        <textarea
          placeholder="Hello, I have a query regarding your platform…"
          value={data}
          onChange={(e) => onChange(e.target.value)}
          rows={7}
          className="w-full px-3.5 py-3 rounded-lg bg-gray-50 border border-gray-300 text-gray-700 placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all resize-none"
        />
        <p className="text-xs text-gray-400">
          Tip: Keep it concise (3-4 sentences) and focus on your most relevant
          achievements and skills.
        </p>
      </div>
    </div>
  );
}

export default PrfessionalSummary;
