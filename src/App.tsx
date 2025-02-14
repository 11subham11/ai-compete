import React, { useState } from "react";
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
  CheckCircle,
  Settings,
  Calendar,
  BarChart,
  MessageCircle,
  Book,
  TrendingDown,
  LineChart,
  PieChart,
} from "lucide-react";

function App() {
  const [activeAgent, setActiveAgent] = useState<string>("ads");

  const agents = {
    ads: {
      title: "Ads & Execution Agent",
      icon: <Target className="w-12 h-12 text-blue-600" />,
      description: "Intelligent ad generation and multi-channel distribution",
      features: [
        {
          text: "Dynamic ad content generation based on user behavior",
          icon: <Brain className="w-5 h-5 text-teal-500" />,
        },
        {
          text: "Platform-specific content adaptation",
          icon: <Settings className="w-5 h-5 text-purple-500" />,
        },
        {
          text: "Automated posting schedules",
          icon: <Calendar className="w-5 h-5 text-orange-500" />,
        },
        {
          text: "A/B testing capabilities",
          icon: <BarChart className="w-5 h-5 text-teal-500" />,
        },
        {
          text: "Audience targeting optimization",
          icon: <Target className="w-5 h-5 text-purple-500" />,
        },
      ],
    },
    engagement: {
      title: "Engagement Agent",
      icon: <Users className="w-12 h-12 text-purple-500" />,
      description: "Cultural-aware engagement and community building",
      features: [
        {
          text: "AI-powered comment generation",
          icon: <MessageCircle className="w-5 h-5 text-teal-500" />,
        },
        {
          text: "Story creation and curation",
          icon: <Book className="w-5 h-5 text-purple-500" />,
        },
        {
          text: "Cultural and language-aware context awareness",
          icon: <Users className="w-5 h-5 text-orange-500" />,
        },
        {
          text: "Trend-based content creation",
          icon: <TrendingUp className="w-5 h-5 text-teal-500" />,
        },
        {
          text: "Multi-platform engagement management",
          icon: <Settings className="w-5 h-5 text-purple-500" />,
        },
      ],
    },
    analytics: {
      title: "Analytics Agent",
      icon: <TrendingUp className="w-12 h-12 text-orange-500" />,
      description: "Comprehensive data analysis and optimization",
      features: [
        {
          text: "Cross-channel performance tracking",
          icon: <LineChart className="w-5 h-5 text-teal-500" />,
        },
        {
          text: "Predictive analytics",
          icon: <PieChart className="w-5 h-5 text-purple-500" />,
        },
        {
          text: "ROI optimization suggestions",
          icon: <TrendingUp className="w-5 h-5 text-orange-500" />,
        },
        {
          text: "Trend identification",
          icon: <TrendingDown className="w-5 h-5 text-teal-500" />,
        },
        {
          text: "Real-time performance monitoring",
          icon: <BarChart3 className="w-5 h-5 text-purple-500" />,
        },
      ],
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      {/* Hero Section */}
      <div className="bg-white shadow-lg border-blue-500">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Next-Gen AI Agents for Educational Marketing
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              An interconnected ecosystem of AI agents designed to revolutionize
              educational institution marketing and student engagement.
            </p>
            <div className="flex items-center justify-center space-x-4">
              {/* <Brain className="w-8 h-8 text-blue-600" /> */}
              <Target className="w-12 h-12 text-blue-600" />
              <ArrowRight className="w-6 h-6 text-teal-500" />
              <Users className="w-12 h-12 text-purple-500" />
              {/* <MessageSquareText className="w-8 h-8 text-purple-500" /> */}
              <ArrowRight className="w-6 h-6 text-teal-500" />
              <TrendingUp className="w-12 h-12 text-orange-500" />
              {/* <BarChart3 className="w-8 h-8 text-orange-500" /> */}
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
                  ? "bg-white shadow-lg scale-105 border-2 border-blue-500"
                  : "bg-white/50 hover:bg-white hover:shadow-md hover:border-2 hover:border-blue-300"
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                {agent.icon}
                <ChevronRight
                  className={`w-5 h-5 ${
                    activeAgent === key ? "text-blue-600" : "text-teal-400"
                  }`}
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
              <p className="text-gray-600">{agent.description}</p>
            </button>
          ))}
        </div>

        {/* Active Agent Details */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              {agents[activeAgent as keyof typeof agents].icon}
              <h2 className="text-3xl font-bold ml-4 text-black">
                {agents[activeAgent as keyof typeof agents].title}
              </h2>
            </div>
            <p className="text-xl text-gray-600 mb-8">
              {agents[activeAgent as keyof typeof agents].description}
            </p>
            <div className="space-y-4">
              {agents[activeAgent as keyof typeof agents].features.map(
                (feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    {feature.icon}
                    <span className="text-gray-700">{feature.text}</span>
                  </div>
                )
              )}
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
              <Users className="w-8 h-8 text-purple-500 mx-auto" />
              <p className="mt-2 text-sm font-medium">Engagement Agent</p>
            </div>
            <LinkIcon className="w-6 h-6 text-gray-400" />
            <div className="p-4 bg-white rounded-lg shadow-md">
              <TrendingUp className="w-8 h-8 text-orange-500 mx-auto" />
              <p className="mt-2 text-sm font-medium">Analytics Agent</p>
            </div>
          </div>
          <p className="mt-8 text-gray-600 max-w-2xl mx-auto">
            Our agents work in perfect harmony, creating a powerful feedback
            loop that continuously optimizes marketing performance and student
            engagement.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
