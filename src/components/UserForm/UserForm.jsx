import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/slice/userSlice';
import "./UserForm.css";

const UserForm = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    company: '',
    telephone: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({ show: false, message: '', type: '' });

  useEffect(() => {
    if (toast.show) {
      const timer = setTimeout(() => {
        setToast({ ...toast, show: false });
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  const showToast = (message, type) => {
    setToast({ show: true, message, type });
  };

  const validateForm = () => {
    const newErrors = {};
    const patterns = {
      firstName: /^[A-Za-z\s]{5,20}$/,
      lastName: /^[A-Za-z\s]{5,20}$/,
      telephone: /^\d{10}$/
    };

    // First Name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    } else if (!patterns.firstName.test(formData.firstName.trim())) {
      newErrors.firstName = 'First name should be 5-20 characters and contain only letters';
    }

    // Last Name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    } else if (!patterns.lastName.test(formData.lastName.trim())) {
      newErrors.lastName = 'Last name should be 5-20 characters and contain only letters';
    }

    // Address validation
    if (!formData.address.trim()) {
      newErrors.address = 'Address is required';
    } else if (formData.address.trim().length < 10) {
      newErrors.address = 'Address should be at least 10 characters long';
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = 'Company is required';
    } else if (formData.company.trim().length < 2) {
      newErrors.company = 'Company name should be at least 2 characters long';
    }

    // Telephone validation
    if (!formData.telephone.trim()) {
      newErrors.telephone = 'Telephone is required';
    } else if (!patterns.telephone.test(formData.telephone.trim())) {
      newErrors.telephone = 'Please enter a valid 10-digit telephone number';
    }

    return newErrors;
  };

  const handleBlur = (e) => {
    setTouched({ ...touched, [e.target.name]: true });
    const validationErrors = validateForm();
    setErrors(validationErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const validationErrors = validateForm();
    
    if (Object.keys(validationErrors).length === 0) {
      try {
        dispatch(addUser(formData));
        showToast('User successfully added!', 'success');
        setFormData({
          firstName: '',
          lastName: '',
          address: '',
          company: '',
          telephone: ''
        });
        setErrors({});
        setTouched({});
      } catch (error) {
        showToast('Error adding user. Please try again.', 'error');
      }
    } else {
      showToast('Please fix the errors in the form.', 'error');
      setErrors(validationErrors);
      const touchedFields = {};
      Object.keys(formData).forEach(key => touchedFields[key] = true);
      setTouched(touchedFields);
    }
    setIsSubmitting(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    if (touched[name]) {
      const validationErrors = validateForm();
      setErrors(validationErrors);
    }
  };

  return (
    <div className="form-container">
      {toast.show && (
        <div className={`toast ${toast.type}`}>
          {toast.message}
        </div>
      )}
      
      <h2 className="form-title">Add New User</h2>
      <form onSubmit={handleSubmit} className="form-content">
        <div className="form-section">
          <div className={`form-group ${errors.firstName && touched.firstName ? 'error' : ''}`}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your first name"
              className="input-field"
            />
            {touched.firstName && errors.firstName && 
              <p className="error-message">{errors.firstName}</p>
            }
          </div>

          <div className={`form-group ${errors.lastName && touched.lastName ? 'error' : ''}`}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your last name"
              className="input-field"
            />
            {touched.lastName && errors.lastName && 
              <p className="error-message">{errors.lastName}</p>
            }
          </div>
        </div>

        <div className={`form-group ${errors.address && touched.address ? 'error' : ''}`}>
          <label>Address</label>
          <textarea
            name="address"
            value={formData.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Enter your full address"
            className="input-field"
          />
          {touched.address && errors.address && 
            <p className="error-message">{errors.address}</p>
          }
        </div>

        <div className="form-section">
          <div className={`form-group ${errors.company && touched.company ? 'error' : ''}`}>
            <label>Company</label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter company name"
              className="input-field"
            />
            {touched.company && errors.company && 
              <p className="error-message">{errors.company}</p>
            }
          </div>

          <div className={`form-group ${errors.telephone && touched.telephone ? 'error' : ''}`}>
            <label>Telephone Number</label>
            <input
              type="tel"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter 10-digit phone number"
              className="input-field"
            />
            {touched.telephone && errors.telephone && 
              <p className="error-message">{errors.telephone}</p>
            }
          </div>
        </div>

        <button 
          type="submit" 
          className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default UserForm;