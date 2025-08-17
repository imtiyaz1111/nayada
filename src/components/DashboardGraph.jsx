import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  Legend,
  LineChart,
  Line,
  Area,
  AreaChart,
  RadialBarChart,
  RadialBar,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import "bootstrap/dist/css/bootstrap.min.css";

// Dummy Data
const monthlySalesData = [
  { name: "Jan", sales: 150 },
  { name: "Feb", sales: 370 },
  { name: "Mar", sales: 180 },
  { name: "Apr", sales: 280 },
  { name: "May", sales: 170 },
  { name: "Jun", sales: 180 },
  { name: "Jul", sales: 270 },
  { name: "Aug", sales: 90 },
  { name: "Sep", sales: 200 },
  { name: "Oct", sales: 360 },
  { name: "Nov", sales: 250 },
  { name: "Dec", sales: 100 },
];

const acquisitionData = [
  { name: "Jan", Direct: 50, Referral: 15, Organic: 10, Social: 15 },
  { name: "Feb", Direct: 55, Referral: 22, Organic: 13, Social: 10 },
  { name: "Mar", Direct: 45, Referral: 30, Organic: 15, Social: 10 },
  { name: "Apr", Direct: 65, Referral: 20, Organic: 15, Social: 10 },
  { name: "May", Direct: 25, Referral: 25, Organic: 15, Social: 15 },
  { name: "Jun", Direct: 45, Referral: 30, Organic: 15, Social: 10 },
  { name: "Jul", Direct: 55, Referral: 25, Organic: 15, Social: 10 },
];

const statisticsData = [
  { name: "Jan", high: 180, low: 40 },
  { name: "Feb", high: 190, low: 30 },
  { name: "Mar", high: 170, low: 50 },
  { name: "Apr", high: 160, low: 40 },
];

const activityData = [
  { name: "Desktop", value: 33, color: "#1E3AFC" },
  { name: "Mobile", value: 47, color: "#4C7DFF" },
  { name: "Tablet", value: 20, color: "#D6E4FF" },
];

const targetData = [
  { name: "Completed", value: 75.55, fill: "#4C7DFF" },
  { name: "Remaining", value: 24.45, fill: "#E5E7EB" },
];

const DashboardGraph = () => {
  return (
    <div className="container my-4">
      <div className="row g-4">
        {/* Monthly Sales */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-3">
            <h5 className="text-center mb-3">Monthly Sales</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlySalesData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#3b82f6" barSize={30} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Acquisition Channels */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-3">
            <h5 className="text-center mb-3">Acquisition Channels</h5>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={acquisitionData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Direct" stackId="a" fill="#1d4ed8" />
                <Bar dataKey="Referral" stackId="a" fill="#3b82f6" />
                <Bar dataKey="Organic" stackId="a" fill="#60a5fa" />
                <Bar dataKey="Social" stackId="a" fill="#93c5fd" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Statistics Line/Area Chart */}
        <div className="col-12">
          <div className="card shadow-sm p-3">
            <h5 className="text-center mb-3">Statistics</h5>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={statisticsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 250]} />
                <Tooltip />
                <defs>
                  <linearGradient id="colorHigh" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.6} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <Area
                  type="monotone"
                  dataKey="high"
                  stroke="#3b82f6"
                  fillOpacity={1}
                  fill="url(#colorHigh)"
                />
                <Line type="monotone" dataKey="low" stroke="#60a5fa" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Development Activity & Monthly Target */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-3">
            <h5 className="text-center mb-3">Development Activity</h5>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={activityData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={3}
                >
                  {activityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend verticalAlign="bottom" height={36} iconType="circle" />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-sm p-3">
            <h5 className="text-center mb-3">Monthly Target</h5>
            <ResponsiveContainer width="100%" height={250}>
              <RadialBarChart
                innerRadius="80%"
                outerRadius="100%"
                data={targetData}
                startAngle={180}
                endAngle={0}
              >
                <RadialBar minAngle={15} background clockWise dataKey="value" />
              </RadialBarChart>
            </ResponsiveContainer>
            <p className="text-center text-xl fw-bold" style={{ marginTop: "-40px" }}>
              75.55%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGraph;
