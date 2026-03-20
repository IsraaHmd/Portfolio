import "./styles/Card.css";

function Pill({ text }: {text: string}) {
  return <span className="card-pill">{text}</span>;
}

interface CardSectionProps {
    title: string;
    pills?: string[];
    texts?: string[];
    highlight?: string; // For highlighted piece of text like GPA

}    
function CardSection({ title, pills, texts, highlight }:CardSectionProps){
    return (
    <div className="card-section">
      <h3 className="card-section__title">{title}</h3>
      {texts && texts.map((t, i) => (
        <p key={i} className="card-section__text">{t}</p>
      ))}
      {highlight && <p className="card-section__highlight">{highlight}</p>}
      {pills && pills.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-2">
          {pills.map((pill, i) => <Pill key={i} text={pill} />)}
        </div>
      )}
    </div>
  );
}
interface CardProps {
    sections: CardSectionProps[];
}

export default function Card({sections}: CardProps){
    return(
        <div className="card">
            {sections.map((section, i) => (
                <CardSection key={i} {...section} />
            ))}
        </div>
    )
}

export { CardSection, Pill };
export type { CardSectionProps };