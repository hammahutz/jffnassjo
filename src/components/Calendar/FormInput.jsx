import { useState } from "react";

const FormInput = ({ type, name }) => {
    const [value, setValue] = useState();

    return (
        <label class="form-control w-full max-w-xs">
            <div class="label">
                <span class="label-text">{name}</span>
            </div>
            <input
                type={type}
                class={`${type === "file" ? "file-" : ""}input ${type === "file" ? "file-" : ""}input-bordered w-full max-w-xs`}
                placeholder={name}
                name={name}
                id={name}
                value={value ? value : null}
                onChange={(e) => setValue(e.target.value)}
                required
            />
        </label>
    );
};

export default FormInput;
