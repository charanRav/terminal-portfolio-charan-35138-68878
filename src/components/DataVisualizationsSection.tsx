
import { BarChart3, TrendingUp, PieChart, LineChart, Database, Eye } from "lucide-react";
import { useState } from "react";

export const DataVisualizationsSection = () => {
  const [selectedViz, setSelectedViz] = useState<string | null>(null);

  const visualizations = [
    {
      id: "sales-dashboard",
      title: "Sales Performance Dashboard",
      description: "Interactive Power BI dashboard tracking KPIs, regional performance, and trend analysis",
      tool: "Power BI",
      category: "Business Intelligence",
      metrics: ["Revenue Growth: +23%", "Customer Retention: 94%", "Market Share: 15%"],
      icon: BarChart3,
      color: "from-blue-500 to-cyan-500",
      image: "/api/placeholder/400/250"
    },
    {
      id: "customer-analytics",
      title: "Customer Behavior Analytics",
      description: "Deep dive analysis of customer journey, segmentation, and lifetime value predictions",
      tool: "Python + Matplotlib",
      category: "Predictive Analytics",
      metrics: ["Churn Prediction: 89% accuracy", "CLV Increase: +31%", "Segments: 8 clusters"],
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
      image: "/api/placeholder/400/250"
    },
    {
      id: "financial-modeling",
      title: "Financial Risk Assessment",
      description: "Monte Carlo simulation for portfolio risk analysis and optimization strategies",
      tool: "Excel + VBA",
      category: "Financial Analytics",
      metrics: ["Risk Reduction: 18%", "ROI Improvement: +12%", "Scenarios: 10K simulations"],
      icon: PieChart,
      color: "from-purple-500 to-pink-500",
      image: "/api/placeholder/400/250"
    },
    {
      id: "operations-kpi",
      title: "Operations KPI Dashboard",
      description: "Real-time monitoring of operational efficiency, resource utilization, and performance metrics",
      tool: "SAP Analytics Cloud",
      category: "Operations Analytics",
      metrics: ["Efficiency Gain: +27%", "Cost Reduction: 15%", "Uptime: 99.7%"],
      icon: LineChart,
      color: "from-orange-500 to-red-500",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <section id="data-visualizations" className="py-20 px-6 bg-gradient-to-br from-background via-muted/5 to-background">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            Data Visualizations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transforming complex data into actionable insights through compelling visualizations
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {visualizations.map((viz, index) => (
            <div
              key={viz.id}
              className="group glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 bg-gradient-to-br from-muted/20 to-muted/40 flex items-center justify-center">
                <viz.icon className="w-16 h-16 text-muted-foreground/40" />
                <div className="absolute inset-0 bg-gradient-to-br opacity-20" 
                     style={{ background: `linear-gradient(135deg, ${viz.color.split(' ')[1]}, ${viz.color.split(' ')[3]})` }}>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-background/80 backdrop-blur-sm rounded-full text-xs font-medium">
                    {viz.tool}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {viz.title}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-primary/10 text-primary rounded-md">
                    {viz.category}
                  </span>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {viz.description}
                </p>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Database className="w-4 h-4 text-blue-500" />
                    <span className="text-sm font-medium">Key Metrics:</span>
                  </div>
                  <div className="grid gap-1">
                    {viz.metrics.map((metric, idx) => (
                      <div key={idx} className="text-xs text-muted-foreground flex items-center gap-2">
                        <div className="w-1 h-1 bg-primary rounded-full"></div>
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 rounded-lg transition-all duration-300 text-sm font-medium">
                  <Eye className="w-4 h-4" />
                  View Dashboard
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
