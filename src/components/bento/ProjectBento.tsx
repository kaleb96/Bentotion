import { ArrowUpRight, FolderRoot } from 'lucide-react';

export default function ProjectBento() {
  return (
    <div className="md:col-span-2 bg-zinc-50 p-8 rounded-[2.5rem] border border-zinc-200 flex items-center justify-between group cursor-pointer hover:bg-white hover:border-zinc-300 transition-all">
      <div className="flex items-center gap-6">
        <div className="w-16 h-16 bg-white rounded-2xl border border-zinc-200 flex items-center justify-center text-zinc-400 shadow-sm">
          <FolderRoot size={32} />
        </div>
        <div>
          <h4 className="text-xl font-bold text-zinc-900">Featured Projects</h4>
          <p className="text-zinc-500 text-sm mt-1">프로젝트내용</p>
        </div>
      </div>
      <div className="hidden md:block p-4 rounded-full border border-zinc-200 text-zinc-400 group-hover:text-zinc-900 group-hover:border-zinc-900 transition-all">
        <ArrowUpRight size={24} />
      </div>
    </div>
  );
}
