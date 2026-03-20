
interface ExperienceItem {
  title?: string;
  description: string | string[];
}
export const TUTORING_ITEMS : ExperienceItem[] = [
{
    title: "Programming teacher (Classroom) - Innovators Academy (2025-Present)",
    description: ["Taught programming fundamentals using Scratch, Python (from basic to advanced), and web development (HTML, CSS). Students were aged 11–17.",]
  },
  {
    title: "Private Tutoring", 
    description:[
        "Taught Arabic to a 7-year-old foreign student from scratch; the student became able to read and write in Arabic within 5 months.",
        "Tutored a middle school student in math. Identified the student’s weaknesses, taught strategies to overcome them, and provided targeted exercises."
    ]

  },
];

export const FULLSTACK_ITEMS : ExperienceItem[] = [
  {
    description: ["Started my full-stack web development journey with HTML, CSS, JavaScript, MySQL, Bootstrap, and PHP."]
  },
  {
    description:["Learned Python and Django, and built a few projects with them."]
  },
  {
    description: ["Now learning and building with React, Node.js, Express, TypeScript, Tailwind CSS, and more.",]
  },
];