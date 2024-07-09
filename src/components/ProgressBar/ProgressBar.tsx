import styles from "./ProgressBar.module.css";

export default function ProgressBar({ max, value, step, onChange }) {
  return (
    <input
      className={styles.styledProgressInput} // Применение стилей к ползунку
      type="range" // Тип элемента - ползунок
      min="0" // Минимальное значение ползунка
      max={max} // Максимальное значение, зависит от длительности аудио
      value={value} // Текущее значение ползунка
      step={step} // Шаг изменения значения
      onChange={onChange} // Обработчик события изменения
    />
  );
}
