import React from "react";
import { FileText, Clock, CheckCircle, Brain, Upload } from "lucide-react";

export default function DashboardOverview() {
  return (
    <div className="p-8 space-y-10 bg-white min-h-screen">
      {/* Title */}
      <h1 className="text-3xl font-semibold text-black">Dashboard Overview</h1>

      {/* --- Overview Cards --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Papers Processed */}
        <div className="bg-white border border-[#4E6BC2]/30 p-6 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <h2 className="text-sm uppercase tracking-wide text-black/70 font-medium">
              Papers Processed
            </h2>
            <p className="text-4xl font-bold text-[#4E6BC2] mt-1">8</p>
          </div>
          <FileText className="w-10 h-10 text-[#4E6BC2]/70" />
        </div>

        {/* Last Upload */}
        <div className="bg-white border border-[#4E6BC2]/30 p-6 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-md transition">
          <div>
            <h2 className="text-sm uppercase tracking-wide text-black/70 font-medium">
              Last Upload
            </h2>
            <p className="text-2xl font-semibold text-[#4E6BC2] mt-1">Nov 3, 2025</p>
          </div>
          <Clock className="w-10 h-10 text-[#4E6BC2]/70" />
        </div>
      </div>

      {/* --- Recent Activity --- */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-4">Recent Activity</h2>

        <table className="w-full text-sm text-gray-700">
          <thead>
            <tr className="text-left border-b border-gray-200">
              <th className="pb-2">Date</th>
              <th className="pb-2">Action</th>
              <th className="pb-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-100 hover:bg-[#4E6BC2]/5 transition">
              <td className="py-2">Nov 3</td>
              <td>
                Uploaded <span className="font-medium text-[#4E6BC2]">huang_2017_densenet.pdf</span>
              </td>
              <td className="flex items-center gap-1 text-green-600">
                <CheckCircle size={16} /> Completed
              </td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-[#4E6BC2]/5 transition">
              <td className="py-2">Nov 2</td>
              <td>Applied Storybook module</td>
              <td className="flex items-center gap-1 text-[#4E6BC2]">
                <Brain size={16} /> Processed
              </td>
            </tr>
            <tr className="border-b border-gray-100 hover:bg-[#4E6BC2]/5 transition">
              <td className="py-2">Nov 1</td>
              <td>Added Comparison analysis</td>
              <td className="flex items-center gap-1 text-yellow-600">
                <Clock size={16} /> Running
              </td>
            </tr>
            <tr className="hover:bg-[#4E6BC2]/5 transition">
              <td className="py-2">Oct 30</td>
              <td>
                Uploaded <span className="font-medium text-[#4E6BC2]">miller_2018_hot_hand.pdf</span>
              </td>
              <td className="flex items-center gap-1 text-green-600">
                <CheckCircle size={16} /> Completed
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* --- How to Use --- */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-xl font-semibold text-black mb-4">How to Use Paper2Notebook</h2>

        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: <Upload className="w-6 h-6 text-[#4E6BC2]" />,
              title: "Upload",
              text: "Add your research paper (PDF, text, or markdown).",
            },
            {
              icon: <Brain className="w-6 h-6 text-[#4E6BC2]" />,
              title: "AI Extraction",
              text: "Automatically identify claims, methods, and results.",
            },
            {
              icon: <FileText className="w-6 h-6 text-[#4E6BC2]" />,
              title: "Generate Notebook",
              text: "Create structured Jupyter-ready notebooks.",
            },
            {
              icon: <CheckCircle className="w-6 h-6 text-[#4E6BC2]" />,
              title: "Apply Modules",
              text: "Add analysis modules like Storybook or Summary.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#4E6BC2]/5 p-4 rounded-xl border border-[#4E6BC2]/10 hover:border-[#4E6BC2]/30 transition"
            >
              <div className="flex items-center gap-3 mb-2">
                {item.icon}
                <h3 className="font-semibold text-black">{item.title}</h3>
              </div>
              <p className="text-gray-600 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
