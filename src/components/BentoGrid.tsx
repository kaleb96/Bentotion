'use client';

import { usePortfolioStore } from '@/store/usePortfolioStore';
import { ArrowUpRight, Users, Code2, Rocket } from 'lucide-react';

export default function BentoGrid() {
  const toggleTeamModal = usePortfolioStore((state) => state.toggleTeamModal);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[180px]">
      {/* 1. 직전 회사 경력 (가로 2칸, 세로 2칸) */}
      <div className="md:col-span-2 md:row-span-2 bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm flex flex-col justify-between group cursor-pointer hover:border-zinc-300 transition-all">
        <div className="flex justify-between items-start">
          <div className="w-14 h-14 bg-zinc-100 rounded-2xl flex items-center justify-center font-bold text-zinc-400">
            LOGO
          </div>
          <ArrowUpRight className="text-zinc-300 group-hover:text-zinc-900 transition-colors" />
        </div>
        <div>
          <span className="text-sm font-medium text-zinc-400">
            2023 - Present
          </span>
          <h2 className="text-2xl font-bold mt-1 text-zinc-900 leading-tight">
            직전 회사명 및 직무
          </h2>
          <p className="text-zinc-500 mt-2 line-clamp-2">
            주요 성과 한 줄 요약: 사용자 이탈률 20% 감소 및 프론트엔드 아키텍처
            개선
          </p>
        </div>
      </div>

      {/* 2. '나의 분신들' 팀 카드 (클릭 시 모달) */}
      <div
        onClick={() => toggleTeamModal(true)}
        className="md:row-span-2 bg-zinc-900 p-8 rounded-[2.5rem] text-white flex flex-col justify-between cursor-pointer hover:scale-[0.98] transition-transform relative overflow-hidden group"
      >
        <div className="z-10 bg-white/10 w-fit p-3 rounded-2xl backdrop-blur-md">
          <Users size={24} />
        </div>
        <div className="z-10">
          <h3 className="text-xl font-bold">The Dream Team</h3>
          <p className="text-zinc-400 text-sm mt-2 font-light italic">
            {'결국은 제가 다 합니다.'}
          </p>
        </div>
        {/* 장식용 원형 배경 */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl group-hover:bg-blue-500/40 transition-all" />
      </div>

      {/* 3. 핵심 기술 스택 (가로 1칸, 세로 1칸) */}
      <div className="bg-white p-6 rounded-[2rem] border border-zinc-100 shadow-sm flex flex-col justify-center gap-3">
        <div className="flex items-center gap-2 text-zinc-900 font-bold uppercase text-xs tracking-widest">
          <Code2 size={14} className="text-blue-500" /> Core Stack
        </div>
        <div className="flex flex-wrap gap-2">
          {['Next.js', 'TypeScript', 'Tailwind'].map((s) => (
            <span
              key={s}
              className="px-3 py-1 bg-zinc-50 text-zinc-600 rounded-lg text-xs font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>

      {/* 4. 개인 작업물 / Playground (가로 2칸, 세로 1칸) */}
      <div className="md:col-span-2 bg-blue-50 p-6 rounded-[2rem] border border-blue-100 flex items-center justify-between group cursor-pointer overflow-hidden">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-blue-500 text-white rounded-2xl">
            <Rocket size={20} />
          </div>
          <div>
            <h4 className="font-bold text-blue-900">Personal Playground</h4>
            <p className="text-blue-600/70 text-sm">
              실험적인 프로젝트와 R&D 기록
            </p>
          </div>
        </div>
        <div className="translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all text-blue-500">
          <ArrowUpRight size={24} />
        </div>
      </div>
    </div>
  );
}
