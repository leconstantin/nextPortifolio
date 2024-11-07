import Hero from "@/components/home/hero";
import Projects from "@/components/home/projects";
import Skills from "@/components/home/skills";
import TicTacToe from "@/components/home/tictactoe";
import Work from "@/components/home/work";

export default function Home() {
  return (
    <main>
      <Hero />
      <Skills />
      <Projects />
      <div>
        <div className="py-16 sm:mt-20 ">
          <div className="flex flex-wrap lg:flex-nowrap items-center justify-center gap-10">
            <div>
              <TicTacToe />
            </div>
            <Work />
          </div>
        </div>
      </div>
    </main>
  );
}
