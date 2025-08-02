import React from "react";


export type ToastActionElement = React.ReactElement;

export interface ToastProps {
  id?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  action?: ToastActionElement;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  message?: string;
  onClose?: () => void;
}


const Toast: React.FC<ToastProps> = ({ message, open = true, onClose, title, description, action}) => {
  if (open === false) return null;
  return (
    <div
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        background: "#333",
        color: "#fff",
        padding: "12px 24px",
        borderRadius: 8,
        zIndex: 9999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        minWidth: 280,
      }}
      role="alert"
      aria-live="assertive"
    >
      {title && <div style={{ fontWeight: 'bold', marginBottom: 4 }}>{title}</div>}
      {description && <div style={{ marginBottom: 4 }}>{description}</div>}
      {message && <div style={{ marginBottom: 4 }}>{message}</div>}
      {action}
      {onClose && (
        <button
          onClick={onClose}
          style={{ marginLeft: 16, background: "none", color: "#fff", border: "none", cursor: "pointer" }}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default Toast;
