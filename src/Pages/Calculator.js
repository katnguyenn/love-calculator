import React, { useState, useEffect } from 'react';
import Result from "../Components/Result";
import '../scss/components/calculator.scss';

const API_KEY = process.env.REACT_APP_API_KEY

const Calculator = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [state, setState] = useState({
        fname: "",
        sname: "",
        percentage: "",
        result: ""
    });

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        console.log(state)
    }, [state]);

    const fetchData = async () => {
        await fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${state.fname}&sname=${state.sname}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "love-calculator.p.rapidapi.com",
                "x-rapidapi-key": API_KEY
            }
        }).then(response => {
            response.json().then(res => {
                setState(res);
            });
        }).catch(error => {
            setError(error);
            console.error(error);
        });
    }

    if (error) return "Error!";

    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });

    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await fetchData();
        setIsLoaded(true);
    }

    const handleReset = (event) => {
        event.preventDefault();
        setState({
            fname: "",
            sname: ""
        })
        setIsLoaded(false);
    }

    return (
        <div className="container">
            <div className="intro-column">
                <div className="intro">
                    <h1>Love Calculator</h1>
                    <p>Enter your name and the name of your partner/lover/crush to find love compatibility and chances of successful relationship.</p>
                </div>
            </div>
            <div className="input-column">
                <form>
                    <label id="your-name">
                        Your Name:
                    <input
                            type="text"
                            name="fname"
                            value={state.fname || ''}
                            onChange={handleChange} />
                    </label>
                    <label id="their-name">
                        Their Name:
                    <input
                            type="text"
                            name="sname"
                            value={state.sname || ''}
                            onChange={handleChange} />

                    </label>
                    <div className="btns">
                        <button
                            className="compatibility-btn"
                            onClick={handleSubmit}
                        >
                            Analyze Compatibility
                     </button>
                        <button
                            className="reset-btn"
                            onClick={handleReset}
                        >
                            Reset
                    </button>
                    </div>
                        {isLoaded ?
                            <Result
                                fname={state.fname}
                                sname={state.sname}
                                percentage={state.percentage}
                                result={state.result}
                            />
                            : null
                        }
                   
                </form>
            </div>
        </div>
    )
}


export default Calculator;