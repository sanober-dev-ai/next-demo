"use client";

import { useCallback, useMemo, useState } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  program: "",
  message: "",
};

const useAdmissionForm = () => {
  const [formData, setFormData] = useState(initialState);

  const [errors, setErrors] = useState({});

  const [showNotification, setShowNotification] = useState(false);

  /* ================= Validation ================= */


  const validateField = useCallback((name, value) => {
    switch (name) {
      case "name":
        if (!value.trim()) {
          return "Name is required";
        }

        if (value.trim().length < 3) {
          return "Minimum 3 characters required";
        }

        return "";

      case "email":
        if (!value.trim()) {
          return "Email is required";
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)) {
          return "Invalid email address";
        }

        return "";

      case "phone":
        if (!value.trim()) {
          return "Phone number is required";
        }

        if (!/^[6-9]\d{9}$/.test(value)) {
          return "Enter valid 10 digit phone number";
        }

        return "";

      case "program":
        if (!value) {
          return "Please select a program";
        }

        return "";

      case "message":
        if (!value.trim()) {
          return "Message is required";
        }

        if (value.trim().length < 10) {
          return "Minimum 10 characters required";
        }

        return "";

      default:
        return "";
    }
  }, []);

  /* ================= Handle Change ================= */

  const handleChange = useCallback(
    (e) => {
      const { name, value } = e.target;

      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));

      setErrors((prev) => ({
        ...prev,
        [name]: validateField(name, value),
      }));
    },
    [validateField],
  );

  /* ================= Form Valid ================= */

  const isFormValid = useMemo(() => {
    return (
      formData.name &&
      formData.email &&
      formData.phone &&
      formData.program &&
      formData.message &&
      Object.values(errors).every((error) => error === "")
    );
  }, [formData, errors]);

  /* ================= Submit ================= */

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      const newErrors = {};

      Object.keys(formData).forEach((field) => {
        const error = validateField(field, formData[field]);

        if (error) {
          newErrors[field] = error;
        }
      });

      setErrors(newErrors);

      if (Object.keys(newErrors).length === 0) {
        setShowNotification(true);

        setFormData(initialState);

        setTimeout(() => {
          setShowNotification(false);
        }, 3000);
        return true;
      }
    },
    [formData, validateField],
  );

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
    isFormValid,
    showNotification,
    setShowNotification,
  };

};
export default useAdmissionForm