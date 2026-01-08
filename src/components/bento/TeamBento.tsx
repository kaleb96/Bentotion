import { usePortfolioStore } from '@/store/usePortfolioStore';
import { Sparkles, Users } from 'lucide-react';

export default function TeamBento() {
  const toggleTeamModal = usePortfolioStore((state) => state.toggleTeamModal);
  return (
    <div
      onClick={() => toggleTeamModal(true)}
      className="md:row-span-2 bg-zinc-900 p-8 rounded-[2.5rem] text-white flex flex-col justify-between cursor-pointer hover:scale-[0.98] transition-transform relative overflow-hidden group shadow-xl shadow-zinc-200"
    >
      <div className="z-10 bg-white/10 w-fit p-4 rounded-2xl backdrop-blur-md">
        <Users size={28} className="text-blue-400" />
      </div>
      <div className="z-10">
        <div className="flex items-center gap-2 text-blue-400 mb-2">
          <Sparkles size={16} />
          <span className="text-xs font-bold uppercase tracking-widest">
            Special Thanks
          </span>
        </div>
        <h3 className="text-2xl font-bold">The Dream Team</h3>
        <p className="text-zinc-400 text-sm mt-3 font-light leading-relaxed">
          BE, FE, UI/UX 디자인까지 <br />
          1인 5역을 수행하는 저의 페르소나들을 소개합니다.
        </p>
      </div>
      {/* 장식용 그라데이션 */}
      <div className="absolute -right-10 -bottom-10 w-60 h-60 bg-blue-600/30 rounded-full blur-[80px] group-hover:bg-blue-600/50 transition-all" />
    </div>
  );
}
