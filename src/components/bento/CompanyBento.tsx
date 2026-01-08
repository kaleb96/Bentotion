import { ArrowUpRight, Briefcase } from 'lucide-react';
import Image from 'next/image';

export default function CompanyBento() {
  return (
    <div className="md:col-span-2 md:row-span-2 bg-white p-8 rounded-[2.5rem] border border-zinc-100 shadow-sm flex flex-col justify-between group cursor-pointer hover:border-zinc-300 transition-all relative overflow-hidden">
      <div>
        <div className="flex items-center gap-2 text-zinc-400 mb-6">
          <Briefcase size={18} />
          <span className="text-sm font-semibold uppercase tracking-wider">
            Career
          </span>
        </div>
      </div>

      <div className="flex items-end justify-between mt-8">
        <div className="flex flex-col">
          <div className="flex flex-row items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 shrink-0 bg-white rounded-lg border border-zinc-100 shadow-[0_1px_2px_rgba(0,0,0,0.05)] overflow-hidden p-1.5">
              <Image
                src="/icons/ipactory.png"
                width={24}
                height={24}
                alt="Company Logo"
                className="object-contain" // 이미지가 박스 안에서 찌그러지지 않게 함
              />
            </div>
            <span className="text-xl font-bold text-zinc-900 leading-none">
              아이팩토리
            </span>
          </div>
          <span className="text-zinc-400 text-sm mt-2">
            Frontend Developer / 2022.05 - Present
          </span>
        </div>
        <div className="p-4 bg-zinc-900 text-white rounded-2xl group-hover:bg-blue-600 transition-colors">
          <ArrowUpRight size={20} />
        </div>
      </div>
    </div>
  );
}
