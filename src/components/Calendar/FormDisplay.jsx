import styles from "./FormDisplay.module.css";

const FormDisplay = ({ type, name, value }) => {
    return (
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text">{name}</span>
            </div>
            <input
                type={type}
                className={`${type === "file" ? "file-" : ""}input ${
                    type === "file" ? "file-" : ""
                }input-bordered w-full max-w-xs placeholder:italic`}
                placeholder={name}
                name={name}
                id={name}
                defaultValue={value}
                disabled
            />
        </label>
    );
};

export default FormDisplay;
