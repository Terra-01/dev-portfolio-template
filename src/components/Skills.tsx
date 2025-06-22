// src/components/Skills.tsx
type SkillCategory = {
  name: string;
  skills: string[];
};

type SkillsProps = {
  categories: SkillCategory[];
};

export default function Skills({ categories }: SkillsProps) {
  return (
    <section id="skills">
      <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Skills</h2>
      <div className="bg-slate-800/50 rounded-md p-6">
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="[&:not(:last-child)]:mb-6">
            <h3 className="text-md font-semibold text-slate-300 mb-3">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-slate-700 text-teal-300 font-medium py-1 px-3 rounded-full text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}