import Input from "./components/Input";
import classes from "./styles/App.module.scss";

import dollar from "./images/icon-dollar.svg";
import person from "./images/icon-person.svg";
import TipSection from "./components/TipSection";
import { useState } from "react";

const App = () => {
    const [bill, setBill] = useState("");
    const [personCount, setPersonCount] = useState("");
    const [tipPercent, setTipPercent] = useState(0);

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
                    <div>hello</div>
                </section>
            </section>
        </div>
    );
};

export default App;
