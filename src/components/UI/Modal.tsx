import { IoCloseOutline } from "react-icons/io5";
import BulletItem from "./BulletItem";
import "./Modal.css";

interface BulletItemData {
  title?: string;
  description: string;
}

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  items: BulletItemData[];
}

export default function Modal({ isOpen, onClose, title, items }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="modal-overlay fixed inset-0 z-50 flex items-center justify-center p-6"
      onClick={onClose}
    >
      <div
        className="modal w-full max-w-xl max-h-[80vh] overflow-y-auto p-8 rounded-lg relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-7">
          <h2 className="modal__title">{title}</h2>
          <button
            className="modal__close flex items-center justify-center p-1"
            onClick={onClose}
            aria-label="Close modal"
          >
            <IoCloseOutline size={26} />
          </button>
        </div>

        {/* Items */}
        <div className="flex flex-col gap-5">
          {items.map((item, i) => (
            <BulletItem
              key={i}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </div>
  );
}