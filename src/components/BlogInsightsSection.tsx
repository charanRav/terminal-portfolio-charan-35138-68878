
import { BookOpen, Calendar, ArrowRight, TrendingUp, Users, Target, Clock, BarChart3, Database, Brain, ExternalLink } from "lucide-react";

export const BlogInsightsSection = () => {
  const insights = [
    {
      id: "power-bi-dashboard-optimization",
      title: "Optimizing Power BI Dashboards for Better Performance",
      excerpt: "Best practices for creating high-performance Power BI dashboards that load quickly and provide actionable insights. Learn about data modeling, DAX optimization, and visual design principles.",
      category: "Business Intelligence",
      readTime: "6 min read",
      publishDate: "Dec 28, 2024",
      icon: BarChart3,
      color: "text-blue-500",
      tags: ["Power BI", "Performance", "Data Modeling"],
      url: "https://medium.com/@ravulacharan/optimizing-power-bi-dashboards-for-better-performance"
    },
    {
      id: "predictive-analytics-business",
      title: "Implementing Predictive Analytics in Business Decision Making",
      excerpt: "How organizations can leverage machine learning algorithms to forecast trends, predict customer behavior, and make data-driven strategic decisions that drive growth.",
      category: "Predictive Analytics",
      readTime: "8 min read",
      publishDate: "Dec 25, 2024",
      icon: Brain,
      color: "text-purple-500",
      tags: ["Machine Learning", "Forecasting", "Business Strategy"],
      url: "https://medium.com/@ravulacharan/implementing-predictive-analytics-in-business"
    },
    {
      id: "sap-data-integration",
      title: "SAP Data Integration: Connecting Enterprise Systems",
      excerpt: "A comprehensive guide to integrating SAP systems with modern analytics platforms, ensuring seamless data flow and maintaining data quality across enterprise applications.",
      category: "Enterprise Systems",
      readTime: "7 min read",
      publishDate: "Dec 22, 2024",
      icon: Database,
      color: "text-green-500",
      tags: ["SAP", "Data Integration", "Enterprise"],
      url: "https://medium.com/@ravulacharan/sap-data-integration-guide"
    },
    {
      id: "cybersecurity-data-analytics",
      title: "Using Data Analytics for Cybersecurity Threat Detection",
      excerpt: "Exploring how machine learning and statistical analysis can identify security anomalies, predict threats, and strengthen organizational cybersecurity posture.",
      category: "Cybersecurity Analytics",
      readTime: "5 min read",
      publishDate: "Dec 20, 2024",
      icon: Target,
      color: "text-red-500",
      tags: ["Cybersecurity", "Anomaly Detection", "ML"],
      url: "https://medium.com/@ravulacharan/cybersecurity-threat-detection-analytics"
    },
    {
      id: "real-time-analytics",
      title: "Building Real-Time Analytics Pipelines",
      excerpt: "Step-by-step guide to creating real-time data processing pipelines that enable instant insights and automated decision-making for modern businesses.",
      category: "Data Engineering",
      readTime: "9 min read",
      publishDate: "Dec 18, 2024",
      icon: TrendingUp,
      color: "text-orange-500",
      tags: ["Real-time", "Data Pipeline", "Automation"],
      url: "https://medium.com/@ravulacharan/real-time-analytics-pipelines"
    },
    {
      id: "data-storytelling",
      title: "The Art of Data Storytelling: Making Numbers Compelling",
      excerpt: "Transform raw data into compelling narratives that drive action. Learn visualization techniques, narrative structures, and presentation strategies for data professionals.",
      category: "Data Visualization",
      readTime: "4 min read",
      publishDate: "Dec 15, 2024",
      icon: Users,
      color: "text-cyan-500",
      tags: ["Storytelling", "Visualization", "Communication"],
      url: "https://medium.com/@ravulacharan/data-storytelling-guide"
    }
  ];

  const handleArticleClick = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleViewAllClick = () => {
    window.open('https://medium.com/@ravulacharan', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="insights" className="py-20 px-6 bg-muted/10">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Insights & Articles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Sharing knowledge and insights about data analytics, business intelligence, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {insights.map((article, index) => (
            <article
              key={article.id}
              className="group glass rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 animate-slide-up cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleArticleClick(article.url)}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br from-${article.color.replace('text-', '')}/10 to-${article.color.replace('text-', '')}/20`}>
                    <article.icon className={`w-6 h-6 ${article.color}`} />
                  </div>
                  <span className="text-xs px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                    {article.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {article.title}
                </h3>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md">
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/20">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {article.publishDate}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={handleViewAllClick}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-primary/20 hover:from-primary/20 hover:to-primary/30 rounded-xl transition-all duration-300 font-medium"
          >
            <BookOpen className="w-5 h-5" />
            View All Articles
            <ArrowRight className="w-4 h-4" />
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>
    </section>
  );
};
