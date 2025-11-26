import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import InputField from '../components/InputField';
import PrimaryButton from '../components/buttons/PrimaryBtn';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        destination: '',
        inquiry: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitMessage, setSubmitMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitMessage('');

        // EmailJS parameters
        const templateParams = {
            from_name: `${formData.firstName} ${formData.lastName}`,
            from_email: formData.email,
            destination: formData.destination,
            message: formData.inquiry,
            to_email: 'umemahee@gmail.com'
        };

        try {
            await emailjs.send(
                'service_wwuc7gf',
                'template_508tptp',
                templateParams,
                '9S8bC7ikup2gLjI78'
            );

            setSubmitMessage('Thank you! Your message has been sent successfully.');

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                destination: '',
                inquiry: ''
            });
        } catch (error) {
            console.error('EmailJS Error:', error);
            setSubmitMessage('Oops! Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-16 px-6 md:px-12 bg-background">
            <div className="max-w-7xl mx-auto">

                <h3 className="text-primary text-sm md:text-base font-bold uppercase tracking-wider mb-12">
                    CONTACT US
                </h3>


                <div className="rounded-3xl" style={{ backgroundColor: '#E8E8E8' }}>
                    <div className="px-8 md:px-16 py-12">
                        <form onSubmit={handleSubmit} className="space-y-6">

                            <div className="flex flex-col md:flex-row gap-6">
                                <InputField
                                    label="First Name"
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                                <InputField
                                    label="Last Name"
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                            </div>


                            <div className="flex flex-col md:flex-row gap-6">
                                <InputField
                                    label="Email"
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                                <InputField
                                    label="Preferred Destination"
                                    type="text"
                                    name="destination"
                                    value={formData.destination}
                                    onChange={handleChange}
                                    placeholder=""
                                />
                            </div>


                            <InputField
                                label="Inquiry"
                                type="textarea"
                                name="inquiry"
                                value={formData.inquiry}
                                onChange={handleChange}
                                placeholder=""
                                fullWidth={true}
                                rows={6}
                            />


                            <div className="pt-4">
                                <PrimaryButton
                                    text={isSubmitting ? "SENDING..." : "SUBMIT"}
                                    onClick={() => { }}
                                />
                            </div>


                            {submitMessage && (
                                <div className={`mt-4 p-4 rounded-lg text-center ${submitMessage.includes('successfully')
                                    ? 'bg-green-100 text-green-700'
                                    : 'bg-red-100 text-red-700'
                                    }`}>
                                    {submitMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;