'use client'
import { mySocials } from "../constants/data";
const Footer = () => {
  const date = new Date()
    return (
        <section id="footer" className="flex flex-wrap items-center justify-between gap-5 pb-3 text-sm text-neutral-400 c-space">
            <div className="mb-4 bg-linear-to-r from-transparent via-neutral-700 to-transparent h-px w-full" />
            <div className="flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                {mySocials.map((social, index) => (
                    <a href={social.href} key={index} target="_blank" title={social.name}>
                        <img src={social.icon} className="w-5 h-5 object-cover" alt={social.name} />
                    </a>
                ))}
            </div>
            <p>© {date.getFullYear()} Frd. All rights reserved.</p>
        </section>
    );
};

export default Footer;