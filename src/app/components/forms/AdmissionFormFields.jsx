"use client";

import Input from "../customElement/Input";

const AdmissionFormFields = ({
  formData,
  errors,
  handleChange,
  isFormValid,
}) => {
  return (
    <>
      {/* Name */}

      <div>
        <Input
          type="text"
          name="name"
          value={formData?.name}
          onChange={handleChange}
          placeholder="Enter your full name"
        />

        {errors?.name && (
          <p className="text-red-500 text-sm mt-1 ml-2">{errors?.name}</p>
        )}
      </div>

      {/* Email */}

      <div>
        <Input
          type="email"
          name="email"
          value={formData?.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        {errors?.email && (
          <p className="text-red-500 text-sm mt-1 ml-2">{errors?.email}</p>
        )}
      </div>

      {/* Phone */}

      <div>
        <Input
          type="tel"
          name="phone"
          value={formData?.phone}
          onChange={handleChange}
          placeholder="Enter your phone number"
        />

        {errors?.phone && (
          <p className="text-red-500 text-sm mt-1 ml-2">{errors?.phone}</p>
        )}
      </div>

      {/* Program */}

      <div>
        <select
          name="program"
          value={formData?.program}
          onChange={handleChange}
          className="
            w-full
            px-5
            py-3
            mt-2
            rounded-2xl
            border
            border-gray-200
            focus:outline-none
            focus:ring-2
            focus:ring-red-500
            transition
            bg-white
            text-gray-600
          "
        >
          <option value="">Select Program</option>

          <option>B.Tech</option>
          <option>MBA</option>
          <option>BCA</option>
          <option>MCA</option>
          <option>PhD</option>
        </select>

        {errors?.program && (
          <p className="text-red-500 text-sm mt-1 ml-2">{errors?.program}</p>
        )}
      </div>

      {/* Message */}

      <div>
        <textarea
          rows={4}
          name="message"
          value={formData?.message}
          onChange={handleChange}
          placeholder="Write your query..."
          className="
            w-full
            px-5
            py-3
            mt-2
            rounded-2xl
            border
            border-gray-200
            focus:outline-none
            focus:ring-2
            focus:ring-red-500
            transition
            resize-none
          "
        />

        {errors?.message && (
          <p className="text-red-500 text-sm mt-1 ml-2">{errors?.message}</p>
        )}
      </div>

      {/* Submit */}

      <button
        type="submit"
        disabled={!isFormValid}
        className={`
          w-full
          py-4
          mt-2
          rounded-2xl
          font-semibold
          transition-all
          duration-300
          ${
            isFormValid
              ? "bg-[#16214a] text-white hover:scale-[1.02]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }
        `}
      >
        Submit Enquiry
      </button>
    </>
  );
};

export default AdmissionFormFields;
