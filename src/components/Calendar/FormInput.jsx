import { useState } from "react";
import BookingCalendar from "./BookingCalendar";

const FormInput = ({ type, name }) => {
    const [value, setValue] = useState("");

    const onValueChange = (e) => {
        setValue(e.target.value);
    };

    if (type === "textarea") {
        return (
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">{name}</span>
                </div>
                <textarea
                    type={type}
                    className="textarea textarea-bordered placeholder:italic"
                    placeholder={name}
                    name={name}
                    id={name}
                    value={value}
                    onChange={(e) => onValueChange(e)}
                    required
                    rows="6"
                />
            </label>
        );
    } else if (type === "calendar") {
        return (
            <label className="form-control w-full max-w-xs">
                <div className="label">
                    <span className="label-text">{name}</span>
                </div>
                <BookingCalendar client:load />
            </label>
        );
    } else {
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
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    required
                />
            </label>
        );
    }
};

export default FormInput;
