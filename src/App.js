import Input from "./components/Input";
import classes from "./styles/App.module.scss";

import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import TipSection from "./components/TipSection";
import { useEffect, useState } from "react";
import ResultItem from "./components/ResultItem";

const App = () => {
    const [bill, setBill] = useState(0);
    const [tipPercent, setTipPercent] = useState(0);
    const [personCount, setPersonCount] = useState(0);

    const [result, setResult] = useState({
        tipAmount: 0,
        totalAmount: 0,
    });

    const resetResult = () => {
        setResult({
            tipAmount: 0,
            totalAmount: 0,
        });

        setBill(0);
        setPersonCount(0);
        setTipPercent(0);
    };

    const calculateTipAmount = (bill, tipPercent, personCount) => {
        if (bill > 0 && tipPercent > 0 && personCount > 0) {
            const total = +bill + (+bill * +tipPercent) / 100;
            const amountPerPerson = total / personCount;
            setResult({
                tipAmount: amountPerPerson,
                totalAmount: total,
            });
        }
    };

    useEffect(() => {
        if (tipPercent === 0) return;
        if (personCount === 0) return;
        if (bill === 0) return;
        calculateTipAmount(bill, tipPercent, personCount);
    }, [tipPercent, personCount, bill]);

    return (
        <div className={classes.Main}>
            <h1>
                SPLI <br /> TTER
            </h1>

            <section className={classes.container}>
                <section className={classes.formGroup}>
                    <div className={classes.bill}>
                        <Input
                            label="Bill"
                            icon={dollar}
                            state={bill}
                            setState={setBill}
                        />
                    </div>

                    <div className={classes.tipButtons}>
                        <TipSection
                            label="Select Tip %"
                            state={tipPercent}
                            setState={setTipPercent}
                        />
                    </div>

                    <div className={classes.person}>
                        <Input
                            label="Number of Person"
                            icon={person}
                            state={personCount}
                            setState={setPersonCount}
                        />
                    </div>
                </section>

                <section className={classes.result}>
                    <div className={classes.res_container}>
                        <ResultItem
                            label="Tip Amount"
                            amount={result.tipAmount}
                        />
                        <ResultItem label="Total" amount={result.totalAmount} />

                        <button
                            onClick={resetResult}
                            disabled={
                                result.tipAmount === 0 &&
                                result.totalAmount === 0
                            }
                            className={classes.resetBtn}
                        >
                            RESET
                        </button>
                    </div>
                </section>
            </section>
        </div>
    );
};

export default App;
