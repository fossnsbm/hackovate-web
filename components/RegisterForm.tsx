import Button from "./Button";
import Container from "./Container";

const formStyles = {
  labelStyle: "text-white md:text-lg lg:text-xl",
  inputStyle:
    "bg-black border border-gray text-white rounded-md p-1 mt-2 w-full md:p-2",
  divStyle: "mb-5",
};

const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log("HTTP");
    e.preventDefault();
    const formEle: HTMLFormElement | null = document.querySelector("form");

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
          alert("Thank you for registering. We will get back to you soon.");
        });

      formEle.reset();
    }
  };

  return (
    <>
      <Container>
        <div className="py-10">
          <h1 className="text-gray text-2xl md:text-4xl lg:text-5xl">
            Let&apos;s get <span className="text-[#F0D268]">registered.</span>
          </h1>
        </div>

        <div>
          <div className="border border-white rounded-lg p-4 md:p-6">
            <form action="#">
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Full name*</label>
                <input
                  name="name"
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Email*</label>
                <input
                  name="email"
                  type="email"
                  className={`${formStyles.inputStyle}`}
                />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>
                  GITHUB Username*
                </label>
                <input
                  name="github_username"
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>
                  Contact number*
                </label>
                <input
                  name="phone"
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>
                  Student ID*
                </label>
                <input
                  name="student_id"
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
              </div>
              <div className={`${formStyles.divStyle}`}>
                <label className={`${formStyles.labelStyle}`}>Batch*</label>
                <input
                  name="batch"
                  type="text"
                  className={`${formStyles.inputStyle}`}
                />
              </div>
              <div className="mt-6">
                {/* <button
                type="submit"
                className="text-white w-full flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button> */}
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
