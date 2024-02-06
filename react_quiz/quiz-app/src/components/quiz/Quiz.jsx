import './Quiz.css'

const Quiz = () => {
    return (
        <>
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            <h2>What device is needed to connect to the internet?</h2>
            <ul>
                <li>Modem</li>
                <li>Router</li>
                <li>LAN Cable</li>
                <li>Pen Drive</li>
            </ul>
            <button>Next</button>
            <div className="index">1 of 5 questions</div>
        </div>
        </>
    )
}

export default Quiz