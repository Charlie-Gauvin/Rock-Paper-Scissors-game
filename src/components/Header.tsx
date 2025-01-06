import Counter from "./Counter.tsx";

export default function Header() {
  return (
    <header className="lg:mx-auto max-w-4xl p-4 md:p-10 mx-8 border-2 md:border-4 border-Header-outline rounded-2xl border-white flex justify-between">
      <div className="flex flex-col text-text-primary md:text-4xl text-2xl">
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </div>
      <Counter />
    </header>
  );
}
