import classes from "./ResultItem.module.scss";

const ResultItem = ({ label, amount }) => {
    return (
        <div className={classes.result}>
            <div className={classes.label}>
                <div className={classes.text}>{label}</div>
                <div className={classes.text2}>/ person</div>
            </div>

            <div className={classes.amount}>
                <span>$</span>
                {amount.toFixed(2)}
            </div>
        </div>
    );
};

export default ResultItem;
