import About from '@/components/about';
import Intro from '@/components/intro';
import SectionDivider from '@/components/section-divider';
import Skills from '@/components/skills';

export default function Home() {
  return (
    <main className="flex flex-col items-center px-5">
      <Intro></Intro>
      <SectionDivider></SectionDivider>
      <About></About>
      <Skills></Skills>
    </main>
  );
}
