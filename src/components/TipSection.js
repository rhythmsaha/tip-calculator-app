import classes from "./Tip.module.scss";

const TipSection = ({ label, state, setState }) => {
    const percent = [5, 10, 15, 25, 50];

    const setPercentHandler = (e) => {
         setState(e);
    };

    const setCustomHandler = (e) => {
        setState(e.target.value);
    };

    return (
        <>
            <label className={classes.label}>{label}</label>
            <div className={classes.btnGroup}>
                {percent.map((p) => (
                    <button
                        onClick={setPercentHandler.bind(null, p)}
                        className={state === p ? classes.active : undefined}
                        key={p}
                    >
                        {p}%
                    </button>
                ))}
                <input
                    type="number"
                    className={classes.custom}
                    placeholder="Custom"
                    onChange={setCustomHandler}
                />
            </div>
        </>
    );
};

export default TipSection;
