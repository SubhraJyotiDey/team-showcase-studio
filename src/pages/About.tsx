import { motion } from "framer-motion";
import { ArrowLeft, Users, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import TeamCard from "@/components/TeamCard";
import Footer from "@/components/Footer";

import member1 from "@/assets/team/member1.png";
import member2 from "@/assets/team/member2.png";
import member3 from "@/assets/team/member3.png";
import member4 from "@/assets/team/member4.png";
import member5 from "@/assets/team/member5.png";

const team = [
  {
    name: "Member 1",
    role: "Full Stack Developer",
    bio: "Passionate about building scalable healthcare platforms. Leads the technical architecture and ensures seamless user experiences.",
    image: member1,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Member 2",
    role: "Data Scientist",
    bio: "Transforms raw patient data into actionable insights. Specializes in healthcare analytics and machine learning models.",
    image: member2,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Member 3",
    role: "Backend Engineer",
    bio: "Architects robust APIs and database systems. Ensures data privacy and HIPAA-compliant infrastructure.",
    image: member3,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Member 4",
    role: "UX Designer",
    bio: "Crafts intuitive interfaces that make healthcare data accessible. Advocates for patient-first design thinking.",
    image: member4,
    linkedin: "https://linkedin.com/in/",
  },
  {
    name: "Member 5",
    role: "Product Manager",
    bio: "Bridges the gap between technology and healthcare needs. Drives product strategy and stakeholder alignment.",
    image: member5,
    linkedin: "https://linkedin.com/in/",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-page-gradient flex flex-col">
      {/* Floating particles background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20"
            style={{ left: `${15 + i * 15}%`, top: `${10 + i * 12}%` }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <nav className="glass-strong sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
          <h2 className="text-lg font-bold font-heading text-gradient">ClearMed</h2>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero section */}
        <section className="container mx-auto px-6 pt-20 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Meet the Team</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-extrabold font-heading leading-tight">
              The people behind
              <br />
              <span className="text-gradient">ClearMed</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-6 leading-relaxed">
              We're a team of passionate builders, designers, and healthcare enthusiasts committed to making healthcare decisions transparent and data-driven.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-6 mt-10"
          >
            {[
              { label: "Team Members", value: "5" },
              { label: "Hackathon Project", value: "🏆" },
              { label: "Powered by", value: "Real Data" },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-xl px-6 py-3 flex items-center gap-3">
                <span className="text-xl font-bold text-primary">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </section>

        {/* Team grid */}
        <section className="container mx-auto px-6 pb-24">
          <div className="flex items-center gap-3 mb-10">
            <Users className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold font-heading">Our Team</h2>
          </div>

          {/* Top row: 3 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {team.slice(0, 3).map((member, i) => (
              <TeamCard key={member.name} member={member} index={i} />
            ))}
          </div>

          {/* Bottom row: 2 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {team.slice(3).map((member, i) => (
              <TeamCard key={member.name} member={member} index={i + 3} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
