import { useNavigate } from "react-router-dom";

interface CircleButtonProps {
    label: string;
    to?: string;
    onClick?: () => void;
}

export default function CircleButton({ label, to, onClick }: CircleButtonProps) {
  const navigate = useNavigate();
  const handleClick = () => {
    if(onClick){
        onClick()
    } else if(to){
        navigate(to)
    }
  }
  return (
    <button
      className="relative flex items-center justify-center w-40 h-40 bg-transparent border-none cursor-pointer p-0 group"
      onClick={handleClick}
      aria-label={label}
    >
      {/* Outer dashed rotating ring */}
      <span
        className="spin-ring absolute inset-0 rounded-full border border-dashed border-white/20 group-hover:-inset-1.5 group-hover:border-white/35 transition-all duration-600"
        aria-hidden="true"
      />

      {/* Inner solid circle */}
      <span className="relative flex items-center justify-center w-[120px] h-[120px] rounded-full border border-white/50 bg-[#0a0a0a] group-hover:w-[110px] group-hover:h-[110px] group-hover:border-white transition-all duration-600">
        <span className="font-mono text-[14px] tracking-[0.2em] uppercase text-white/85 transition-colors duration-600 group-hover:text-white">
          {label}
        </span>
      </span>
    </button>
  );
}