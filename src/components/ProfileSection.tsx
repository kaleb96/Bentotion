import { Github, Linkedin, Mail, FileText } from 'lucide-react';

export default function ProfileSection() {
  return (
    <section className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm flex flex-col h-full items-center md:items-start text-center md:text-left">
      {/* 프로필 이미지 (나중에 이미지 넣으시면 됩니다) */}
      <div className="w-32 h-32 bg-zinc-200 rounded-3xl mb-6 overflow-hidden ring-4 ring-zinc-50" />

      <h1 className="text-2xl font-bold tracking-tight text-zinc-900">
        내 이름
      </h1>
      <p className="text-zinc-500 mt-2 leading-relaxed">
        사용자 경험을 고민하고
        <br />
        비즈니스 가치를 창출하는
        <br />
        <strong>프론트엔드 개발자</strong>입니다.
      </p>

      {/* 소셜 링크 */}
      <div className="flex gap-3 mt-8">
        <a
          href="#"
          className="p-3 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-colors"
        >
          <Github size={20} className="text-zinc-700" />
        </a>
        <a
          href="#"
          className="p-3 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-colors"
        >
          <Mail size={20} className="text-zinc-700" />
        </a>
        <a
          href="#"
          className="p-3 bg-zinc-50 rounded-2xl hover:bg-zinc-100 transition-colors"
        >
          <Linkedin size={20} className="text-zinc-700" />
        </a>
      </div>

      <button className="w-full mt-10 py-4 bg-zinc-900 text-white rounded-2xl font-medium flex items-center justify-center gap-2 hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200">
        <FileText size={18} />
        Resume Download
      </button>
    </section>
  );
}
