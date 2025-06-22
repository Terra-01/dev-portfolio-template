// src/components/Skills.tsx
type Skill = { name: string };
type SkillsProps = { skills: Skill[] };

export default function Skills({ skills }: SkillsProps) {
  return (
    <section id="skills" className="mb-12">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
        Skills
      </h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <div key={index} className="bg-slate-200 text-slate-700 font-medium py-1 px-3 rounded-full text-sm">
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
}