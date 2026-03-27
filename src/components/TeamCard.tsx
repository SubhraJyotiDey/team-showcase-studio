import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  linkedin: string;
}

const TeamCard = ({ member, index }: { member: TeamMember; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect behind card */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />

      <div className="relative glass-strong rounded-2xl p-6 flex flex-col items-center text-center transition-all duration-500 group-hover:glow-primary overflow-hidden">
        {/* Decorative gradient orb */}
        <div className="absolute -top-16 -right-16 w-32 h-32 rounded-full bg-primary/5 blur-2xl group-hover:bg-primary/10 transition-all duration-700" />

        {/* Profile image */}
        <div className="relative mb-5">
          <div className="w-28 h-28 rounded-full overflow-hidden ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all duration-500">
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
          </div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-primary/20 glass flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-xl font-bold font-heading text-foreground group-hover:text-gradient transition-all duration-300">
          {member.name}
        </h3>

        {/* Role */}
        <p className="text-primary text-sm font-semibold mt-1 tracking-wide uppercase">
          {member.role}
        </p>

        {/* Bio */}
        <p className="text-muted-foreground text-sm mt-3 leading-relaxed line-clamp-3">
          {member.bio}
        </p>

        {/* LinkedIn button */}
        <motion.a
          href={member.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-primary/30 text-primary text-sm font-medium hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
        >
          <Linkedin className="w-4 h-4" />
          Connect
        </motion.a>
      </div>
    </motion.div>
  );
};

export default TeamCard;
