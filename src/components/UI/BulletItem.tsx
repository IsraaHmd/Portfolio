import "./styles/BulletItem.css";
interface BulletItemProps {
  title?: string;
  description: string | string[];
}

export default function BulletItem({ title, description }: BulletItemProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="bullet flex-shrink-0 mt-1.5" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        {title && <h4 className="bullet-title">{title}</h4>}
        {Array.isArray(description) ? (
          <div className="flex flex-col gap-1">
            {description.map((desc, i) => (
              <p key={i} className="bullet-desc">
                {title && <span className="bullet-dash">— </span>}
                {desc}
              </p>
            ))}
          </div>
        ) : (
          <p className="bullet-desc">
            {title && <span className="bullet-dash">— </span>}
            {description}
          </p>
        )}
      </div>
    </div>
  );
}