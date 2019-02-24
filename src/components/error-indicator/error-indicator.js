import React from 'react';
import './error-indicator.css';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator card text-white bg-danger mb-3">
      <div className="card-header">Ошибка</div>
      <div className="card-body">
        <h4 className="card-title">Что то пошло не так</h4>
        <p className="card-text">Мы уже знаем об этом и скоро починим</p>
      </div>
    </div>
  )
}

export default ErrorIndicator;