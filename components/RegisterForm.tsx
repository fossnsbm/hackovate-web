const RegisterForm = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formEle: HTMLFormElement | null = document.querySelector("form");

    if (formEle) {
      const formData = new FormData(formEle);

      fetch(
        "https://script.google.com/macros/s/AKfycbw6Acobc4GrkONNHb9zSbwErUekmwivK354epB5P3-3eNvyWLnB2MbbeX1Qhyz8c6lyHw/exec",
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
      <div className="container md:mx-auto mt-10">
        <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Full Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="batch"
                className="block mb-2 text-sm font-medium text-white"
              >
                Slect Batch
              </label>
              <select
                name="batch"
                id="batch"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option defaultValue={0}>Please Select</option>
                <option value="21.1">21.1</option>
                <option value="21.2">21.2</option>
                <option value="22.1">22.1</option>
                <option value="22.2">22.2</option>
                <option value="23.1">23.1</option>
                <option value="23.2">23.2</option>
              </select>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="The email address you used to register for the github account"
                pattern="\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}\b"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Contact number
              </label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="123-45-678"
                required
              />
            </div>
            <div>
              <label
                htmlFor="github_username"
                className="block mb-2 text-sm font-medium text-white dark:text-white"
              >
                Github Username
              </label>
              <input
                type="text"
                name="github_username"
                id="github_username"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Your Github Username"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="text-white w-full flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default RegisterForm;
