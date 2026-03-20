import "./styles/TransparentButton.css";

interface TransparentButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
}

export default function TransparentButton({ text, href, onClick }: TransparentButtonProps) {
  if (href) {
    return (
      <a href={href} className="transparent-btn" target="_blank" rel="noopener noreferrer">
        {text}
      </a>
    );
  }

  return (
    <button className="transparent-btn" onClick={onClick}>
      {text}
    </button>
  );
}