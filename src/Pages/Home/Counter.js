import CountUp, { useCountUp } from "react-countup";

export default function App() {
    useCountUp({
        ref: "counter",
        enableScrollSpy: true,
        end: 30

    });

    return (
        <div className="App lg:flex items-center justify-around my-16 bg-gradient-to-r from-blue-500 to-cyan-500 p-16">
            <div className="p-8 text-3xl">
                <CountUp end={50} enableScrollSpy />
                <h2>Projects Completed</h2>
            </div>
            <div className="p-8 text-3xl">
                <CountUp end={20} enableScrollSpy />
                <h2>Happy Clients</h2>
            </div>
            <div className="p-8 text-3xl">
                <span id="counter" />
                <h2>Cups of Coffee</h2>
            </div>
        </div>
    );
}