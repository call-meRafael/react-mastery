import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((curStep) => curStep - 1);
    }
  };

  {/* Sempre prefira usar uma callback function para atualizar o *estado*, desta forma, você garante que está utilizando o valor mais recente do estado, evitando comportamenteos indesejados. */}

  const handleNext = () => {
    if (step < 3) {
      setStep((curStep) => curStep + 1);
    }
  };

  return (
    <>
      <button className="close" onClick={() => setIsOpen((is) => !is)}>
        &times;
      </button>
      { isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>

          <p className="message">
            Step: {step}: {messages[step - 1]}
          </p>

          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handlePrevious}
            >
              anterior
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "#fff" }}
              onClick={handleNext}
            >
              próximo
            </button>
          </div>
        </div>
      )}
    </>
  );
}
