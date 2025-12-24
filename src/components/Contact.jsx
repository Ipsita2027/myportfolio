import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

function Contact() {
  return (
    <section className="px-6 py-16">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-slate-600 mb-4">
        Open to internship opportunities and collaborative projects.
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <a
          href="mailto:ipsitag2004@gmail.com"
          className="text-blue-600 underline"
        >
          <div class="flex items-center gap-2">
            <FaEnvelope class="text-[#EA4335] transition-colors"/>
            <span>Email</span>
          </div>
        </a>
        <a
          href="https://github.com/Ipsita2027"
          className="text-blue-600 underline"
          target="_blank"
        >
          <div class="flex items-center gap-2">
            <FaGithub class="text-[#181717] transition-colors" />
            <span>GitHub</span>
          </div>
        </a>
        <a
          href="https://leetcode.com/u/IpsitaGayatri/"
          className="text-blue-600 underline"
          target="_blank"
        >
          <div class="flex items-center gap-2">
            <SiLeetcode class="text-[#FFA116] transition-colors" />
            <span>Leetcode</span>
          </div>
        </a>
        <a
          href="https://codeforces.com/profile/IpsitaGayatri"
          className="text-blue-600 underline"
          target="_blank"
        >
          <div class="flex items-center gap-2">
            <SiCodeforces class="text-[#1F8ACB] transition-colors" />
            <span>Codeforces</span>
          </div>
        </a>
        <a
          href="https://www.linkedin.com/in/ipsita-gayatri-3b1058281/"
          className="text-blue-600 underline"
          target="_blank"
        >
          <div class="flex items-center gap-2">
            <FaLinkedin class="text-[#0A66C2] transition-colors"/>
            <span>LinkedIn</span>
          </div>
        </a>
      </div>
    </section>
  );
}
export default Contact;