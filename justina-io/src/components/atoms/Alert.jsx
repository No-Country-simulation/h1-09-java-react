import React from 'react';

const Alert = ({ type = 'default', message }) => {
  const alertStyles = {
    default: {
      alert: 'bg-blue-50 border-blue-400',
      icon: 'bi:info-circle-fill text-blue-500',
      msg: 'text-blue-600',
    },
    info: {
      alert: 'bg-yellow-50 border-yellow-400',
      icon: 'mingcute:alert-fill text-yellow-500',
      msg: 'text-yellow-600',
    },
    success: {
      alert: 'bg-emerald-50 border-emerald-400',
      icon: 'material-symbols:check-circle text-emerald-500',
      msg: 'text-emerald-600',
    },
    error: {
      alert: 'bg-red-50 border-red-400',
      icon: 'mdi:close-circle text-red-500',
      msg: 'text-red-600',
    },
  };

  const styles = alertStyles[type];

  return (
    <div className={`p-4 border rounded-md transition duration-300 ${styles.alert}`} role="alert">
      <div className="flex items-center">
        <div className="flex-shrink-0 self-start">
          <span className={`iconify w-5 h-5 mt-0.5 ${styles.icon}`} />
        </div>
        <div className="ml-3">
          <span className={`text-sm font-medium ${styles.msg}`}>
            {message}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Alert;