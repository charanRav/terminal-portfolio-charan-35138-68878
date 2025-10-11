import { BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import { Code, Database, Cloud, Brain, TrendingUp } from 'lucide-react';

const skillsData = [
  { name: 'Python', level: 95, category: 'Programming' },
  { name: 'Machine Learning', level: 92, category: 'AI/ML' },
  { name: 'AWS Cloud', level: 88, category: 'Cloud' },
  { name: 'Power BI', level: 90, category: 'Analytics' },
  { name: 'SQL/MySQL', level: 85, category: 'Database' },
  { name: 'Data Analytics', level: 93, category: 'Analytics' },
  { name: 'Java', level: 82, category: 'Programming' },
  { name: 'Deep Learning', level: 89, category: 'AI/ML' }
];

const toolsDistribution = [
  { name: 'Programming', value: 30, color: '#3b82f6' },
  { name: 'AI/ML', value: 28, color: '#8b5cf6' },
  { name: 'Cloud', value: 20, color: '#10b981' },
  { name: 'Analytics', value: 22, color: '#06b6d4' }
];

const projectMetrics = [
  { project: 'Traffic Mgmt', accuracy: 93 },
  { project: 'Malware Det.', accuracy: 96 },
  { project: 'Movement Det.', accuracy: 90 },
  { project: 'AI Chatbot', accuracy: 88 }
];

export const SkillsVisualization = () => {
  return (
    <section id="skills-viz" className="py-20 px-6 bg-gradient-to-br from-slate-950 via-blue-950/50 to-slate-950 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-blue-400"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `ambient-float ${15 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent mb-4">
            Skills & Expertise Dashboard
          </h2>
          <p className="text-lg text-slate-300">
            Interactive visualization of technical competencies and project performance
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Skills Proficiency Bar Chart */}
          <div className="glass rounded-3xl p-8 backdrop-blur-2xl border-2 border-blue-500/20 hover:border-blue-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Skills Proficiency</h3>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={skillsData} layout="vertical">
                <XAxis type="number" domain={[0, 100]} stroke="#94a3b8" />
                <YAxis type="category" dataKey="name" width={120} stroke="#94a3b8" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #3b82f6',
                    borderRadius: '12px',
                    color: '#fff'
                  }} 
                />
                <Bar dataKey="level" radius={[0, 8, 8, 0]}>
                  {skillsData.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`}
                      fill={`url(#gradient${index})`}
                    />
                  ))}
                </Bar>
                <defs>
                  {skillsData.map((entry, index) => (
                    <linearGradient key={index} id={`gradient${index}`} x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#3b82f6" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                  ))}
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Technology Distribution Pie Chart */}
          <div className="glass rounded-3xl p-8 backdrop-blur-2xl border-2 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Technology Distribution</h3>
            </div>
            <ResponsiveContainer width="100%" height={350}>
              <PieChart>
                <Pie
                  data={toolsDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {toolsDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: '1px solid #8b5cf6',
                    borderRadius: '12px',
                    color: '#fff'
                  }} 
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Project Accuracy Metrics */}
        <div className="glass rounded-3xl p-8 backdrop-blur-2xl border-2 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white">Project Performance Metrics</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={projectMetrics}>
              <XAxis dataKey="project" stroke="#94a3b8" />
              <YAxis domain={[0, 100]} stroke="#94a3b8" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#1e293b', 
                  border: '1px solid #06b6d4',
                  borderRadius: '12px',
                  color: '#fff'
                }} 
              />
              <Bar dataKey="accuracy" fill="url(#accuracyGradient)" radius={[8, 8, 0, 0]} />
              <defs>
                <linearGradient id="accuracyGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="100%" stopColor="#3b82f6" />
                </linearGradient>
              </defs>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <div className="glass rounded-2xl p-6 backdrop-blur-2xl border border-blue-500/20 text-center">
            <Brain className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-blue-400">8+</div>
            <div className="text-sm text-slate-400 mt-1">Core Skills</div>
          </div>
          <div className="glass rounded-2xl p-6 backdrop-blur-2xl border border-purple-500/20 text-center">
            <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-purple-400">95%</div>
            <div className="text-sm text-slate-400 mt-1">Avg Proficiency</div>
          </div>
          <div className="glass rounded-2xl p-6 backdrop-blur-2xl border border-cyan-500/20 text-center">
            <Cloud className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-cyan-400">5+</div>
            <div className="text-sm text-slate-400 mt-1">Certifications</div>
          </div>
          <div className="glass rounded-2xl p-6 backdrop-blur-2xl border border-green-500/20 text-center">
            <TrendingUp className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-3xl font-bold text-green-400">92%</div>
            <div className="text-sm text-slate-400 mt-1">Project Success</div>
          </div>
        </div>
      </div>
    </section>
  );
};