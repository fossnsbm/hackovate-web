import { useState } from "react";
import Button from "./Button";
import Container from "./Container";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const formStyles = {
  labelStyle: "text-white md:text-lg lg:text-xl",
  formErrorStyle: "text-red-600 mt-2 font-semibold",
  inputStyle:
    "bg-black border border-gray text-white rounded-md p-1 mt-2 w-full md:p-2",
  divStyle: "mb-5",
};

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    github_username: "",
    phone: "",
    student_id: "",
    batch: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    github_username: "",
    phone: "",
    student_id: "",
    batch: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      const formEle: HTMLFormElement | null = document.querySelector("form");

      if (formEle) {
        if (formEle) {
          const formData = new FormData(formEle);

          fetch(
            "https://script.google.com/macros/s/AKfycbxNvV4X3a-Vml9d84hFr6Jll573YgEoLkQLCy0AI4qTQ8GomXjMb9XPZRbtvG75MjBLxA/exec",
            {
              method: "POST",
              body: formData,
            }
          )
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
            })
            .catch((err) => {
              console.log(err);
              Swal.fire(
                "Thank you for registering!",
                "We will get back to you soon.",
                "success"
              ).then(() => {
                // redirect to home page
                router.push("/events/hackovate");
              });

              setFormData({
                name: "",
                email: "",
                github_username: "",
                phone: "",
                student_id: "",
                batch: "",
              });

              setFormErrors({
                name: "",
                email: "",
                github_username: "",
                phone: "",
                student_id: "",
                batch: "",
              });
            });
        }
      }
    }
  };

  const validateForm = () => {
    const errors: any = {};
    let isValid = true;

    // Validate name
    if (!formData.name) {
      errors.name = "Name is required";
      isValid = false;
    }

    // Validate github_username
    if (!formData.github_username) {
      errors.github_username = "Github username is required";
      isValid = false;
    }

    // Validate phone
    if (!formData.phone) {
      errors.phone = "Phone is required";
      isValid = false;
    } else if (formData.phone.length !== 10) {
      errors.phone = "Phone number should be 10 digits long";
      isValid = false;
    }

    // Validate student_id
    if (!formData.student_id) {
      errors.student_id = "Student ID is required";
      isValid = false;
    } else if (formData.student_id.length !== 5) {
      errors.student_id = "Student ID should be 5 characters long";
      isValid = false;
    }

    // Validate batch
    if (!formData.batch) {
      errors.batch = "Batch is required";
      isValid = false;
    }

    // Validate email
    if (!formData.email) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!isValidEmail(formData.email)) {
      errors.email = "Invalid email format";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const isValidEmail = (email: any) => {
    // You can implement a more complex email validation regex here
    const emailPattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
    return emailPattern.test(email);
  };

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <Container>
        <div className="pb-14 pt-32 md:pt-44">
          <h1 className="text-gray text-2xl md:text-4xl lg:text-5xl font-semibold">
            Let&apos;s get <span className="text-[#F0D268]">registered.</span>
          </h1>
        </div>

        <div>
          <div className="border border-white rounded-lg p-4 md:py-10 md:px-20">
            <form action="#">
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Full name*</label>
                <input
                  value={formData.name}
                  onChange={handleInputChange}
                  name="name"
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
                {formErrors.name && (
                  <div className={`${formStyles.formErrorStyle}`}>
                    {formErrors.name}
                  </div>
                )}
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Email*</label>
                <input
                  value={formData.email}
                  onChange={handleInputChange}
                  name="email"
                  type="email"
                  className={`${formStyles.inputStyle}`}
                />
                {formErrors.email && (
                  <div className={`${formStyles.formErrorStyle}`}>
                    {formErrors.email}
                  </div>
                )}
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>
                  GITHUB Username*
                </label>
                <input
                  name="github_username"
                  value={formData.github_username}
                  onChange={handleInputChange}
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
                {formErrors.github_username && (
                  <div className={`${formStyles.formErrorStyle}`}>
                    {formErrors.github_username}
                  </div>
                )}
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>
                  Contact number*
                </label>
                <input
                  value={formData.phone}
                  onChange={handleInputChange}
                  name="phone"
                  maxLength={10}
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
                {formErrors.phone && (
                  <div className={`${formStyles.formErrorStyle}`}>
                    {formErrors.phone}
                  </div>
                )}
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>
                  NSBM Student ID*
                </label>
                <input
                  value={formData.student_id}
                  onChange={handleInputChange}
                  name="student_id"
                  maxLength={5}
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
                {formErrors.student_id && (
                  <div className={`${formStyles.formErrorStyle}`}>
                    {formErrors.student_id}
                  </div>
                )}
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Batch*</label>
                <input
                  name="batch"
                  value={formData.batch}
                  onChange={handleInputChange}
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
                {formErrors.batch && (
                  <div className={`${formStyles.formErrorStyle}`}>
                    {formErrors.batch}
                  </div>
                )}
              </div>
              <div className="mt-6">
                <Button label="Register" onClick={handleSubmit as any} long />
              </div>
            </form>
          </div>
        </div>
      </Container>
    </>
  );
};

export default RegisterForm;
