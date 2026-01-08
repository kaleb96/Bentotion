'use client';
import CompanyBento from './bento/CompanyBento';
import TeamBento from './bento/TeamBento';
import StackBento from './bento/StackBento';
import ProjectBento from './bento/ProjectBento';

export default function BentoGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
      {/* 1. 커리어 (Career): 가장 큰 비중 (가로 2칸, 세로 2칸) */}
      <CompanyBento />

      {/* 2. '나의 분신들' (The Dream Team) 카드 (세로 2칸) */}
      <TeamBento />

      {/* 3. 주요 기술 (Core Stack) */}
      <StackBento />

      {/* 4. 프로젝트 (Projects): 가로 2칸 */}
      <ProjectBento />
    </div>
  );
}
