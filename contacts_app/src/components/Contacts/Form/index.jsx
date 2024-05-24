import React, { useEffect, useState } from 'react'
const initialFormValues = { fullname: "", phone_number: "" }
function Form({ addContact, contacts }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts])

    const onChangeInput = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const onSubmit = (e) => {
        e.preventDefault();
        if (form.fullname === "" || form.phone_number === "") {
            return false;
        }
        addContact([...contacts, form]);
        console.log(form)

    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input placeholder='Full Name' name='fullname' onChange={onChangeInput} value={form.fullname} />
            </div>
            <div>
                <input placeholder='Phone Number' name='phone_number' onChange={onChangeInput} value={form.phone_number} />
            </div>
            <div>
                <button  >Add</button>
            </div>
        </form>
    )
}

export default Form