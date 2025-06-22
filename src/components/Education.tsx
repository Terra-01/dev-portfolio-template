// src/components/Education.tsx
type Degree = {
    institution: string;
    degree: string;
    period: string;
  };
  type EducationProps = { degrees: Degree[] };
  
  export default function Education({ degrees }: EducationProps) {
    return (
      <section id="education" className="mb-12">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">
          Education
        </h2>
        {degrees.map((degree, index) => (
          <div key={index}>
            <h3 className="text-lg font-medium text-slate-800">{degree.institution}</h3>
            <p className="text-md text-slate-600">{degree.degree}</p>
            <p className="text-sm text-slate-400 mt-1">{degree.period}</p>
          </div>
        ))}
      </section>
    );
  }