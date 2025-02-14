import React, { useState } from 'react';
import {
  Brain,
  MessageSquareText,
  BarChart3,
  ArrowRight,
  Link as LinkIcon,
  Target,
  Users,
  TrendingUp,
  ChevronRight,
} from 'lucide-react';

function App() {
  const [activeAgent, setActiveAgent] = useState<string>('ads');

  const agents = {
    ads: {
      title: 'Ads & Execution Agent',
      icon: <Target className="w-12 h-12 text-blue-600" />,
      description: 'Intelligent ad generation and multi-channel distribution',
      features: [
        'Dynamic ad content generation based on user behavior',
        'Platform-specific content adaptation',
        'Automated posting schedules',
        'A/B testing capabilities',
        'Audience targeting optimization'
      ]
    },
    engagement: {
      title: 'Engagement Agent',
      icon: <Users className="w-12 h-12 text-green-600" />,
      description: 'Cultural-aware engagement and community building',
      features: [
        'AI-powered comment generation',
        'Story creation and curation',
        'Cultural context awareness',
        'Trend-based content creation',
        'Multi-platform engagement management'
      ]
    },
    analytics: {
      title: 'Analytics Agent',
      icon: <TrendingUp className="w-12 h-12 text-purple-600" />,
      description: 'Comprehensive data analysis and optimization',
      features: [
        'Cross-channel performance tracking',
        'Predictive analytics',
        'ROI optimization suggestions',
        'Trend identification',
        'Real-time performance monitoring'
      ]
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Next-Gen AI Agents for Educational Marketing
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              An interconnected ecosystem of AI agents designed to revolutionize educational institution marketing and student engagement.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <Brain className="w-8 h-8 text-blue-600" />
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <MessageSquareText className="w-8 h-8 text-green-600" />
              <ArrowRight className="w-6 h-6 text-gray-400" />
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        {/* Agent Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {Object.entries(agents).map(([key, agent]) => (
            <button
              key={key}
              onClick={() => setActiveAgent(key)}
              className={`p-6 rounded-xl transition-all ${
                activeAgent === key
                  ? 'bg-white shadow-lg scale-105'
                  : 'bg-white/50 hover:bg-white hover:shadow-md'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                {agent.icon}
                <ChevronRight className={`w-5 h-5 ${
                  activeAgent === key ? 'text-blue-600' : 'text-gray-400'
                }`} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
              <p className="text-gray-600">{agent.description}</p>
            </button>
          ))}
        </div>

        {/* Agent Details */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              {agents[activeAgent as keyof typeof agents].icon}
              <h2 className="text-3xl font-bold ml-4">
                {agents[activeAgent as keyof typeof agents].title}
              </h2>
            </div>
            
            <div className="space-y-6">
              <ul className="space-y-4">
                {agents[activeAgent as keyof typeof agents].features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-100 flex items-center justify-center mt-0.5">
                      <span className="text-sm text-blue-600 font-semibold">{index + 1}</span>
                    </div>
                    <span className="ml-3 text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Integration Visualization */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-8">Seamless Integration</h2>
          <div className="flex items-center justify-center space-x-4">
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Target className="w-8 h-8 text-blue-600 mx-auto" />
              <p className="mt-2 text-sm font-medium">Ads Agent</p>
            </div>
            <LinkIcon className="w-6 h-6 text-gray-400" />
            <div className="p-4 bg-white rounded-lg shadow-md">
              <Users className="w-8 h-8 text-green-600 mx-auto" />
              <p className="mt-2 text-sm font-medium">Engagement Agent</p>
            </div>
            <LinkIcon className="w-6 h-6 text-gray-400" />
            <div className="p-4 bg-white rounded-lg shadow-md">
              <TrendingUp className="w-8 h-8 text-purple-600 mx-auto" />
              <p className="mt-2 text-sm font-medium">Analytics Agent</p>
            </div>
          </div>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            Our agents work in perfect harmony, creating a powerful feedback loop that continuously optimizes marketing performance and student engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;