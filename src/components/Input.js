import classes from "./Input.module.scss";

const Input = ({ label, icon, state, setState, onFocus }) => {
    const inputChangeHandler = (e) => {
        setState(e.target.value);
    };

    return (
        <div className={classes.inputGroup}>
            <label htmlFor={label}>{label}</label>
            <div>
                <label htmlFor={label}>
                    <img src={icon} alt="icons" />
                </label>
                <input
                    type="number"
                    id={label}
                    placeholder={0}
                    onChange={inputChangeHandler}
                    value={state === 0 ? "" : state}
                    onFocus={onFocus}
                />
            </div>
        </div>
    );
};

export default Input;
