const FormInput = ({type, name, value}) => {

    return (
        <div class="col">
            <div class="form-floating mb-3">
                <input
                    type={type}
                    class="form-control"
                    placeholder={name}
                    name={name}
                    id={name}
                    value={value? value : null}
                    required
                />
                <label for={name}>{name}</label>
            </div>
        </div>
    );
}

export default FormInput;