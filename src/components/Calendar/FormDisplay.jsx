import styles from "./FormDisplay.module.css";

const FormDisplay = ({ type, name, value }) => {

    return (
        <div class="col">
            <div class="form-floating mb-3">
                <input
                    type={type}
                    className={`${styles.input} form-control`}
                    placeholder={name}
                    name={name}
                    id={name}
                    value={value ? value : null}
                />
                <label for={name} >{name}</label>
            </div>
        </div>
    );
}

export default FormDisplay;