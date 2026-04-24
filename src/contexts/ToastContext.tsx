import { createContext, useContext, useState, useCallback, useEffect, useRef, type ReactNode } from 'react';

interface ToastContextType {
  showToast: (message: string, type?: 'info' | 'success' | 'error') => void;
}

const ToastContext = createContext<ToastContextType>({
  showToast: () => {},
});

let toastId = 0;

function ToastItem({ toast, onRemove }: { toast: any; onRemove: (id: number) => void }) {
  const [exiting, setExiting] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    timerRef.current = setTimeout(() => setExiting(true), 3000);
    return () => clearTimeout(timerRef.current);
  }, []);

  useEffect(() => {
    if (exiting) {
      const t = setTimeout(() => onRemove(toast.id), 300);
      return () => clearTimeout(t);
    }
  }, [exiting, toast.id, onRemove]);

  const handleClose = () => {
    clearTimeout(timerRef.current);
    setExiting(true);
  };

  const icon = toast.type === 'success'
    ? 'fa-solid fa-circle-check'
    : toast.type === 'error'
      ? 'fa-solid fa-circle-xmark'
      : 'fa-solid fa-circle-info';

  return (
    <div className={`toast toast-${toast.type} ${exiting ? 'toast-exit' : ''}`} role="alert">
      <i className={`toast-icon ${icon}`} />
      <span className="toast-message">{toast.message}</span>
      <button className="toast-close" onClick={handleClose} aria-label="닫기">
        <i className="fa-solid fa-xmark" />
      </button>
    </div>
  );
}

function ToastContainer({ toasts, onRemove }: { toasts: any[]; onRemove: (id: number) => void }) {
  if (toasts.length === 0) return null;
  return (
    <div className="toast-container" aria-live="polite">
      {toasts.map(toast => (
        <ToastItem key={toast.id} toast={toast} onRemove={onRemove} />
      ))}
    </div>
  );
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<any[]>([]);

  const showToast = useCallback((message: string, type: 'info' | 'success' | 'error' = 'info') => {
    const id = ++toastId;
    setToasts(prev => [...prev, { id, message, type }]);
  }, []);

  const removeToast = useCallback((id: number) => {
    setToasts(prev => prev.filter(t => t.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <ToastContainer toasts={toasts} onRemove={removeToast} />
    </ToastContext.Provider>
  );
}

export const useToast = (): ToastContextType => useContext(ToastContext);
