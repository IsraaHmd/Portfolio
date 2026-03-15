import { useNavigate } from "react-router-dom";
import "./styles/PillButton.css";

interface RectButtonProps {
  label: string;
  to?: string;
  onClick?: () => void;
}

export default function RectButton({ label, to, onClick }: RectButtonProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (to) {
      navigate(to);
    }
  };

  return (
    <button className="rect-btn" onClick={handleClick} aria-label={label}>
      <span className="rect-btn__label">{label}</span>
    </button>
  );
}