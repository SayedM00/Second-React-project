const message = [
    "Learn React *",
    "Apply for jobs 💼",
    "Invest your new income 🤑"
]

export default function App () {
    let step = 1;
    function pervious() {
        if(step > 1) step -= 1
    }
    function next() {
        if(step < 3) step += 1
        console.log(step)
    }
    return <section className="container">
        <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
        </div>
        <p className="message">Step {step}: {message[step - 1]}</p>
        <div className="buttons">
            <button onClick={pervious}>Pervious</button>
            <button onClick={next}>Next</button>
        </div>
    </section>
}