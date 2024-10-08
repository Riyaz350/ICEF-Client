
const Form1 = ({ int, label, state, setState, placeholder, selected, setSelected, errors, setErrors,type, value }) => {

    const Field = () => {
        return (<div className="label text-xl">
            <span className="label-text text-red-500">This field is required</span>
        </div>)
    }

    const Label = ({ text, ind }) => {
        return (<div className="label text-xl">
            <span className={errors.includes(parseInt(ind)) ? " text-red-500" : selected == parseInt(ind) ? " text-purple-500" : " text-black-500"}>{text}</span>
        </div>)
    }
    const addError = (e) => {
        setErrors(prevErrors => [...prevErrors, e]);
    }
    return (
        <div className={`    form-control w-full`}>
            <Label ind={int} text={label} />
            <div className={`border-2 rounded-lg   ${errors?.includes(int) ? ' border-red-500 focus:border-red-500' : selected == int ? 'border-purple-500' : 'border-gray-400'}`}>
                <input onFocus={() => setSelected(int)} onBlur={() => {
                    setSelected(0)
                }} onChange={e => {
                    setSelected(int)
                    setErrors((prevItems) => prevItems.filter(item => item !== int))
                    setState(e.target.value)
                }} value={value && value } type={type} placeholder={placeholder} className={`p-2 outline-none h-[60px] placeholder:text-xl text-xl rounded-lg w-full  `} />
            </div>
            {errors.includes(int) ? <Field /> : <></>}
        </div>
    );
};

export default Form1;