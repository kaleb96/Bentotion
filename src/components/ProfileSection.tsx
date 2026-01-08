import { Mail, Phone, Github, BookText, FileText } from 'lucide-react';

export default function ProfileSection() {
  const GIT_HUB_BASE_URL = 'https://github.com/kaleb96';
  const BLOG_BASE_URL = 'https://meerkat127.tistory.com/';
  return (
    <section className="bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm flex flex-col h-full">
      {/* 1. 사진 영역 */}
      <div className="relative w-full aspect-square bg-zinc-100 rounded-[2rem] overflow-hidden mb-6 group">
        {/* 임시 이미지 또는 실제 본인 사진 경로 */}
        <div className="absolute inset-0 flex items-center justify-center text-zinc-400 group-hover:scale-110 transition-transform duration-500">
          {/* <Image src="/my-profile.jpg" alt="Profile" fill className="object-cover" /> */}
          <span className="text-xs uppercase tracking-widest">Your Photo</span>
        </div>
      </div>

      {/* 2. 이름 및 짧은 소개 */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tighter text-zinc-900">
          박기윤
        </h1>
        <p className="text-zinc-500 mt-3 leading-relaxed break-keep">
          사용자 중심의 가치를 실현하는 <br />
          <span className="text-zinc-900 font-semibold">프론트엔드 개발자</span>
          입니다.
        </p>
      </div>

      {/* 3. 연락처 정보 (Contact) */}
      <div className="space-y-4 mb-8 border-t border-zinc-100 pt-8">
        <div className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 transition-colors group cursor-pointer">
          <div className="p-2 bg-zinc-50 rounded-lg group-hover:bg-zinc-100">
            <Mail size={18} />
          </div>
          <span className="text-sm font-medium">yes505304@naver.com</span>
        </div>
        <div className="flex items-center gap-3 text-zinc-600 hover:text-zinc-900 transition-colors group cursor-pointer">
          <div className="p-2 bg-zinc-50 rounded-lg group-hover:bg-zinc-100">
            <Phone size={18} />
          </div>
          <span className="text-sm font-medium">010-2802-4618</span>
        </div>
      </div>

      {/* 4. 아카이브 (Archive - Blog, Github) */}
      <div className="grid grid-cols-2 gap-3">
        <a
          href={GIT_HUB_BASE_URL}
          target="_blank"
          className="flex items-center text-white justify-center gap-2 p-3 bg-zinc-900 rounded-2xl hover:bg-blue-600 transition-all duration-300"
        >
          <Github size={18} />
          <span className="text-sm font-bold">Github</span>
        </a>
        <a
          href={BLOG_BASE_URL}
          target="_blank"
          className="flex items-center text-white justify-center gap-2 p-3 bg-zinc-900 rounded-2xl hover:bg-blue-600 transition-all duration-300"
        >
          <BookText size={18} />
          <span className="text-sm font-bold">Blog</span>
        </a>
      </div>

      <div className="mt-auto">
        {/* 5. 이력서 다운로드 버튼 (강조) */}
        <button className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all shadow-lg shadow-zinc-200 active:scale-95">
          <FileText size={18} />
          Resume PDF
        </button>
      </div>
    </section>
  );
}
