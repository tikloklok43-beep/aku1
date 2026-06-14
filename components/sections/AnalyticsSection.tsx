"use client";

import { motion } from "framer-motion";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
  PieChart, Pie, Cell, Legend,
} from "recharts";
import { chartData, skillsData } from "@/lib/data";

const CustomBarTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="clay-card rounded-2xl p-3 text-xs shadow-clay">
        <p className="font-semibold text-purple-800 mb-1">{label}</p>
        {payload.map((entry: any) => (
          <p key={entry.name} style={{ color: entry.fill }} className="capitalize">
            {entry.name}: <strong>{entry.value}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const CustomPieTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="clay-card rounded-2xl p-3 text-xs shadow-clay">
        <p className="font-semibold text-purple-800">
          {payload[0].name}: <strong>{payload[0].value}%</strong>
        </p>
      </div>
    );
  }
  return null;
};

export default function AnalyticsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
      {/* Bar Chart */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5 }}
        className="lg:col-span-3 clay-card rounded-3xl p-5"
      >
        <div className="mb-4">
          <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-base">
            Portfolio Overview
          </h3>
          <p className="text-xs text-purple-400 mt-0.5">Monthly activity across categories</p>
        </div>

        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={chartData} barSize={8} barGap={4}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(196,168,232,0.2)" vertical={false} />
            <XAxis
              dataKey="month"
              tick={{ fontSize: 11, fill: "#9B7EC8" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis tick={{ fontSize: 11, fill: "#9B7EC8" }} axisLine={false} tickLine={false} width={24} />
            <Tooltip content={<CustomBarTooltip />} cursor={{ fill: "rgba(196,168,232,0.1)", radius: 8 }} />
            <Bar dataKey="books" fill="#C4A8E8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="nasyid" fill="#F5C6D9" radius={[4, 4, 0, 0]} />
            <Bar dataKey="web" fill="#FDDCCA" radius={[4, 4, 0, 0]} />
            <Bar dataKey="awards" fill="#C8EAD8" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>

        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-3">
          {[
            { label: "Books", color: "#C4A8E8" },
            { label: "Nasyid", color: "#F5C6D9" },
            { label: "Web", color: "#FDDCCA" },
            { label: "Awards", color: "#C8EAD8" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
              <span className="text-xs text-purple-500">{item.label}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Donut Chart */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.55 }}
        className="lg:col-span-2 clay-card rounded-3xl p-5"
      >
        <div className="mb-2">
          <h3 className="font-display font-semibold text-purple-900 dark:text-purple-100 text-base">
            Skills Distribution
          </h3>
          <p className="text-xs text-purple-400 mt-0.5">My expertise breakdown</p>
        </div>

        <ResponsiveContainer width="100%" height={160}>
          <PieChart>
            <Pie
              data={skillsData}
              cx="50%"
              cy="50%"
              innerRadius={45}
              outerRadius={70}
              paddingAngle={4}
              dataKey="value"
            >
              {skillsData.map((entry, index) => (
                <Cell key={index} fill={entry.color} strokeWidth={0} />
              ))}
            </Pie>
            <Tooltip content={<CustomPieTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        <div className="space-y-2 mt-1">
          {skillsData.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                <span className="text-xs text-purple-700 dark:text-purple-300">{item.name}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-20 h-1.5 rounded-full bg-purple-100 dark:bg-purple-900/40 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.value}%` }}
                    transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: item.color }}
                  />
                </div>
                <span className="text-xs font-semibold text-purple-600 w-8 text-right">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
