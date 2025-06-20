import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate
import {
  Sun,
  Moon,
  GraduationCap,
  TrendingUp,
  Target,
  Users,
  ArrowRight,
  ArrowLeft, // ✅ Import missing icon
} from 'lucide-react';

function ProjectAPPProject() {
  const [isDark, setIsDark] = useState(false);
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const appImages = [
    { src: "/app0.jpg", alt: "CareerAnalyzer Welcome", title: "Welcome" },
    { src: "/app3.jpg", alt: "Dashboard", title: "Dashboard" },
    { src: "/app4.jpg", alt: "Skill Tests", title: "Skill Tests" },
    { src: "/app6.jpg", alt: "Resume", title: "Resume Analysis" },
    { src: "/app9.jpg", alt: "Profile", title: "Profile" },
    { src: "/app7.jpg", alt: "Insights", title: "Insights" },
    { src: "/app8.jpg", alt: "Results", title: "Results" },
    { src: "/app9.jpg", alt: "Recommendations", title: "Recommendations" },
  ];

  const features = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "ATS Score Analysis",
      description: "AI resume analysis with optimization tips"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Skill Assessment",
      description: "Test in JavaScript, React, DSA & more"
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: "Career Recommendations",
      description: "Guidance based on skills & industry trends"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Progress Tracking",
      description: "Dashboard to track tests and learning"
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

        {/* Back Button */}
        <div className="fixed top-4 left-4 z-50">
          <button
            className="flex items-center text-purple-600 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow hover:bg-gray-100 dark:hover:bg-gray-700 transition"
            onClick={() => navigate('/Projects')}
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back
          </button>
        </div>

        {/* Header */}
        <section className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white py-20">
          <div className="max-w-6xl mx-auto text-center px-4">
            <div className="mb-6">
              <div className="inline-flex p-4 bg-gray-100 dark:bg-white/10 rounded-xl">
                <GraduationCap className="w-14 h-14 text-purple-600 dark:text-white" />
              </div>
            </div>
            <h1 className="text-4xl font-bold mb-4">CareerAnalyzer</h1>
            <p className="text-lg text-gray-700 dark:text-gray-300 max-w-xl mx-auto mb-6">
              Your AI-powered career companion. Analyze resumes, assess skills, and receive personalized career insights.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
                View Project Details
                <ArrowRight className="inline-block ml-2 w-4 h-4" />
              </button>
              <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-600 hover:text-white transition">
                Download App
              </button>
            </div>
          </div>
        </section>

        {/* Screenshots */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">App Screenshots</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {appImages.map((image, index) => (
                <div key={index} className="bg-white dark:bg-gray-700 p-2 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
                  <img src={image.src} alt={image.alt} className="rounded-md w-full h-40 object-cover mb-2" />
                  <p className="text-sm text-center">{image.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => (
                <div key={idx} className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg shadow hover:shadow-md transition">
                  <div className="flex items-start space-x-4">
                    <div className="bg-purple-600 text-white p-2 rounded-md">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-10">Technology Stack</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {['React Native', 'JavaScript', 'Node.js', 'Express', 'MongoDB', 'AI/ML'].map((tech, index) => (
                <div key={index} className="text-center bg-white dark:bg-gray-700 p-3 rounded-md shadow hover:shadow-lg transition">
                  <div className="w-8 h-8 bg-purple-600 rounded mx-auto mb-2"></div>
                  <p className="text-sm font-medium">{tech}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}

export default ProjectAPPProject;
