import { useState } from 'react';

export default function Forms() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        newsletter: false,
        newsletterType: '',
        language: ''
    })

    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === 'checkbox' ? checked : value
                // ES6 - computed property []
                // https://eloquentcode.com/computed-property-names-in-javascript
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(`Your form has been submitted, see submitted data below`)
        console.log(formData)
        // submitToApi(formData)
    }
    return (
        <div className="form--container">
            <div className="form--message">
                If you have any question please do not hesitate to get in touch with us. You can do that using the form below.
            </div>
            <form onSubmit={handleSubmit} >
                <section className="form--input-container">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        autoComplete="name"
                        />
                </section>

                <section className="form--input-container">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        onChange={handleChange}
                        value={formData.email}
                        autoComplete="email"
                        />
                </section>
               <section className="form--input-container form--textarea">
                    <label htmlFor="message">Your Message</label>
                    <textarea 
                        id="message"
                        name="message"
                        onChange={handleChange}
                        value={formData.message}
                        rows="15" cols="50"
                    />
               </section>
                <section className="form--input-container form--checkbox-container">
                    <input
                        type="checkbox"
                        id="newsletter"
                        name="newsletter"
                        onChange={handleChange}
                        checked={formData.newsletter}

                    />
                    <label htmlFor="newsletter">Sign up to newsletter</label>
                </section>

                <fieldset>
                    <legend>Newsletter Type</legend>

                    <div className='newsletter--selector-container'>
                        <section className="newsletter--radio-btn-container">
                            <input
                                type="radio"
                                id="weekly"
                                name="newsletterType"
                                value="weekly"
                                onChange={handleChange}
                                checked={formData.newsletterType === 'weekly'}
                            />
                            <label htmlFor='weekly'>Weekly</label>
                        </section>
    
                        <section className='newsletter--radio-btn-container'>
                            <input
                                type="radio"
                                id="Monthly"
                                name="newsletterType"
                                value="monthly"
                                onChange={handleChange}
                                checked={formData.newsletterType === 'Monthly'}
                            />
                            <label htmlFor='Monthly'>Monthly</label>
                        </section>
    
                        <section className='newsletter--radio-btn-container'>
                            <input
                                type="radio"
                                id="quarterly"
                                name="newsletterType"
                                value="quarterly"
                                onChange={handleChange}
                                checked={formData.newsletterType === 'quarterly'}
                            />
                            <label htmlFor='quarterly'>Quaterly</label>
                        </section>
                    </div>
                    
                </fieldset>


                <section className='form--language-selector'>
                    <label htmlFor='language'>Select Newsletter's Language</label>
                    <select 
                        id='language'
                        name='language'
                        onChange={handleChange}
                        value={formData.language}
                    >
                        <option value="fav color is not choosen">-- Choose --</option>
                        <option value="english">English</option>
                        <option value="hungarian">Hungarian</option>
                        <option value="german">German</option>
                        <option value="french">French</option>
                        <option value="welsh">Welsh</option>
                    </select>
                </section>
                <button className="form--submit-btn ">Submit</button>



            </form>
       </div>
    )
}