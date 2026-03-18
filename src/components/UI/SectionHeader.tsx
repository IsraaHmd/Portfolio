import "./styles/SectionHeader.css";
export default function SectionHeader({ text }: { text: string }) {
    return (
        <div className="section__header">
        <h2 className="section__title">{text}</h2>
      </div>
    )
}