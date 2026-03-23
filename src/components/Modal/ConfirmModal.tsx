import { AlertTriangle } from "lucide-react";

interface ConfirmModalProps {
  isOpen: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  title?: string;
  message?: string;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onConfirm,
  onCancel,
  title = "Подтверждение действия",
  message = "Вы уверены, что хотите продолжить?",
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full mx-auto">
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle size={24} className="text-yellow-600" />
          </div>
          <h3 className="text-xl font-bold text-text-main mb-2">{title}</h3>
          <p className="text-text-main/80 mb-6">{message}</p>

          <div className="flex gap-4 justify-center">
            <button
              type="button"
              onClick={onCancel}
              className="px-6 py-3 rounded-full border border-green-muted/20 text-text-main hover:border-primary hover:text-primary transition flex items-center gap-2"
            >
              Отмена
            </button>
            <button
              type="button"
              onClick={onConfirm}
              className="px-6 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary-dark transition-all hover:scale-105"
            >
              Начать заново
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
