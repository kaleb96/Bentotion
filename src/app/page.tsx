import BentoGrid from '@/components/BentoGrid';
import ProfileSection from '@/components/ProfileSection';

export default function Home() {
  return (
    <div className="flex flex-col md: flex-row min-h-screen bg-sky-50 rounded-4xl p-4 md: p-8 gap-6 max-w-[1400px] mx-auto">
      {/** 좌측 고정 프로필 */}
      <aside className="w-full md:w-1/4 lg:w-[22%] shrink-0">
        <ProfileSection />
      </aside>
      <main className="flex-1">
        <BentoGrid />
      </main>
    </div>
  );
}
