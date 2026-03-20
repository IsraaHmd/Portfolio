import Card from "../UI/Card";
import CardGrid from "../UI/CardGrid";
import { EducationAndAchievementsCards, SkillsCards } from "./data/cards";

export default function EducationAndSkills() {
  return (
    <div className="flex flex-col gap-20">

      <CardGrid title="Education & Achievements">
        {EducationAndAchievementsCards.map((card, i) => (
          <Card key={i} sections={card.sections} />
        ))}
      </CardGrid>

      <CardGrid title="Technical & Other Skills">
        {SkillsCards.map((card, i) => (
          <Card key={i} sections={card.sections} />
        ))}
      </CardGrid>

    </div>
  );
}