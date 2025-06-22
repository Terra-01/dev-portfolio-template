// src/components/Education.tsx

type Degree = {
    degree: string;
    institution: string;
    location: string;
    period: string;
  };
  
  type EducationProps = {
    degrees: Degree[];
  };
  
  export default function Education({ degrees }: EducationProps) {
    return (
      <section id="education">
        <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-6">Education</h2>
        <div className="bg-slate-800/50 rounded-md p-6">
          {degrees.map((degree, index) => (
            // Use a class to add space between entries if there are multiple degrees
            <div key={index} className="[&:not(:last-child)]:mb-6">
              
              {/* 1. The Degree is now the main heading */}
              <h3 className="text-lg font-medium text-slate-200">{degree.degree}</h3>
              
              {/* 2. The Institution is now below it */}
              <p className="text-md text-slate-400 mt-1">{degree.institution}</p>
              
              {/* 3. Location and Period are combined on the last line */}
              <p className="text-sm text-slate-500 mt-1">
                {degree.location} | {degree.period}
              </p>
  
            </div>
          ))}
        </div>
      </section>
    );
  }