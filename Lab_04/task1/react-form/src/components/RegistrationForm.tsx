import { useState } from 'react';

/**
 * Lab 4.1: Event Handling — Form & Validation
 *
 * This component demonstrates:
 * - Controlled components (value + onChange pattern from Ch. 4)
 * - Inline event handlers using synthetic events
 * - Form validation with error messages
 * - preventDefault to prevent default form submission
 */

export function RegistrationForm() {
  // Task 1: State for form fields
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [age, setAge] = useState<string>('');

  // Task 1: State for errors
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [ageError, setAgeError] = useState<string>('');

  // Task 3: State for success message
  const [success, setSuccess] = useState<boolean>(false);

  // Task 2: Validation functions
  const validateName = (nameValue: string): string => {
    if (!nameValue.trim()) {
      return 'Name is required';
    }
    if (nameValue.trim().length < 2) {
      return 'Name must be at least 2 characters';
    }
    return '';
  };

  const validateEmail = (emailValue: string): string => {
    if (!emailValue.trim()) {
      return 'Email is required';
    }
    // Simple email regex: /[\s@]+@[\s@]+\.[\s@]+/
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailValue)) {
      return 'Email must be a valid format';
    }
    return '';
  };

  const validateAge = (ageValue: string): string => {
    if (!ageValue.trim()) {
      return 'Age is required';
    }
    const ageNum = Number(ageValue);
    if (isNaN(ageNum)) {
      return 'Age must be a number';
    }
    if (ageNum < 18) {
      return 'Age must be 18 or older';
    }
    return '';
  };

  // Task 1: onChange handlers using inline arrow functions
  // Reference Ch. 4: "Declaring inline event handlers" and "Using synthetic event objects"
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    // Task 2: Validate on change
    setNameError(validateName(value));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    // Task 2: Validate on change
    setEmailError(validateEmail(value));
  };

  const handleAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setAge(value);
    // Task 2: Validate on change
    setAgeError(validateAge(value));
  };

  // Task 3: Form submission handler with preventDefault
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission (Ch. 4, "Using synthetic event objects")

    // Validate all fields
    const nameErr = validateName(name);
    const emailErr = validateEmail(email);
    const ageErr = validateAge(age);

    setNameError(nameErr);
    setEmailError(emailErr);
    setAgeError(ageErr);

    // If any errors exist, return early
    if (nameErr || emailErr || ageErr) {
      setSuccess(false);
      return;
    }

    // If valid, show success message and clear form
    setSuccess(true);
    setName('');
    setEmail('');
    setAge('');
    setNameError('');
    setEmailError('');
    setAgeError('');
  };

  return (
    <div className="formContainer">
      <h1>User Registration</h1>
      <form onSubmit={handleSubmit} className="registrationForm">
        {/* Task 1: Name input with value and onChange */}
        <div className="formGroup">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            value={name}
            onChange={handleNameChange}
            className={nameError ? 'error' : ''}
          />
          {/* Task 2: Display validation error */}
          {nameError && <p className="errorMessage">{nameError}</p>}
        </div>

        {/* Task 1: Email input with value and onChange */}
        <div className="formGroup">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            className={emailError ? 'error' : ''}
          />
          {/* Task 2: Display validation error */}
          {emailError && <p className="errorMessage">{emailError}</p>}
        </div>

        {/* Task 1: Age input with value and onChange */}
        <div className="formGroup">
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            placeholder="Age"
            value={age}
            onChange={handleAgeChange}
            className={ageError ? 'error' : ''}
          />
          {/* Task 2: Display validation error */}
          {ageError && <p className="errorMessage">{ageError}</p>}
        </div>

        {/* Task 1: Submit button */}
        <button type="submit" className="submitButton">
          Submit
        </button>

        {/* Task 3: Display success message */}
        {success && (
          <p className="successMessage">Registration successful!</p>
        )}
      </form>
    </div>
  );
}
