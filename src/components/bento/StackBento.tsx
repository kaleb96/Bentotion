import { Code2 } from 'lucide-react';

export default function StackBento() {
  return (
    <div className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm flex flex-col justify-between group">
      <div className="flex items-center gap-2 text-zinc-400">
        <Code2 size={18} />
        <span className="text-xs font-bold uppercase tracking-widest">
          Core Tech
        </span>
      </div>
      <div className="flex flex-wrap gap-2 my-4">
        {['Next.js', 'React', 'TS', 'Tailwind'].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 bg-zinc-50 border border-zinc-100 text-zinc-600 rounded-lg text-xs font-bold"
          >
            {tech}
          </span>
        ))}
      </div>
      <span className="text-sm text-zinc-400 group-hover:text-zinc-900 transition-colors cursor-default underline underline-offset-4">
        View all skills
      </span>
    </div>
  );
}
