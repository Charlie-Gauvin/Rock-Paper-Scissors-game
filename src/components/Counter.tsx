export default function Counter() {
    return (
        <section className="flex flex-col items-center justify-center md:px-10 px-6 bg-text-primary rounded-2xl">
            <h2 className="text-score-text text-sm md:text-lg">SCORE</h2>
            <span className="text-dark-text md:text-4xl lg:text-6xl text-2xl font-bold">12</span>
        </section>
    );
};