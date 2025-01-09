import { useState } from "react";
import rules from "../assets/images/image-rules.svg";
import close from "../assets/images/icon-close.svg";

export default function RulesModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Bouton pour ouvrir la modal */}
      <button
        onClick={handleButton}
        className="px-6 py-2 text-xl border-Header-outline border-2 text-text-primary tracking-widest rounded-lg hover:opacity-80 fixed left-1/2 transform -translate-x-1/2 bottom-10 md:left-auto md:right-10 md:bottom-10"
      >
        Rules
      </button>

      {/* Overlay + Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-text-primary flex flex-col items-center justify-center md:max-h-[30rem] md:max-w-[30rem] md:mx-auto md:my-auto md:rounded-lg md:justify-center md:pt-16">
          <h2 className="text-4xl text-dark-text font-bold text-center mb-4 absolute top-16 md:top-6 md:left-6">
            RULES
          </h2>
          <div>
            <img src={rules} alt="Image des règles" />
          </div>
          <div className="absolute bottom-16 md:top-6 md:right-6">
            <button onClick={() => setIsOpen(false)}>
              <img src={close} alt="Logo-fermeture" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
