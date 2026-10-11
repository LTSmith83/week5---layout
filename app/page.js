import Card from "../components/Card";
import { projects } from "../projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="mx-auto max-w-6xl bg-white">
        <header className="bg-[#203B60] px-8 py-6">
          <h1 className="text-2xl font-bold text-white">
            Learning Dashboard
          </h1>
        </header>

        <section className="grid grid-cols-1 gap-10 p-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card
              key={project.id}
              title={project.title}
              category={project.category}
              difficulty={project.difficulty}
            />
          ))}
        </section>
      </div>
    </main>
  );
}