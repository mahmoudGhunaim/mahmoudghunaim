import { profile } from "@/data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="section-container flex flex-wrap items-center justify-between gap-4 text-sm text-white/40">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>Built with Next.js, React Three Fiber &amp; Remotion</p>
      </div>
    </footer>
  );
}
