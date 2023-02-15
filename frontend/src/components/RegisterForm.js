import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../styles.css";
import axios from "axios";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState(null);
  const [city, setCity] = useState("");
  const [userState, setUserState] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [tandc, setTandC] = useState(false);

  const numberInputOnWheelPreventChange = (e) => {
    e.target.blur()
    e.stopPropagation()
      setTimeout(() => {
      e.target.focus()
    }, 0)
  }
  

  const validateForm = () => {
    if (!name) {
      toast.error("Name is Required", { theme: "colored" });
      return false;
    } else if (!email) {
      toast.error("Email is Required", { theme: "colored" });
      return false;
    } else if (!phone) {
      toast.error("Phone Number is Required", { theme: "colored" });
      return false;
    } else if (!city) {
      toast.error("City is Required", { theme: "colored" });
      return false;
    } else if (!userState) {
      toast.error("State is Required", { theme: "colored" });
      return false;
    } else if (!password) {
      toast.error("Password is Required", { theme: "colored" });
      return false;
    } else if (!confirmPassword) {
      toast.error("Please enter the password again", { theme: "colored" });
      return false;
    } else if (!tandc) {
      toast.error("Please accept the terms and conditions", {
        theme: "colored",
      });
      return false;
    }
    if (phone.length !== 10) {
      toast.error("Please enter a valid phone number", {
        theme: "colored",
      });
      return false;
    }
    if (!(password === confirmPassword)) {
      toast.error("Passwords do not match", {
        theme: "colored",
      });
      return false;
    }
    if (confirmPassword.length < 6) {
      toast.error("Password should be of more than or equal to 6 characters", {
        theme: "colored",
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      await axios
        .post("/register", {
          name: name,
          email: email,
          phone: phone,
          city: city,
          state: userState,
          password: confirmPassword,
        })
        .then((res) => {
          if (res.status === 200) {
            toast.success("Form Submitted Successfully", {
              theme: "colored",
            });
            setName("");
            setEmail("");
            setPhone("");
            setCity("");
            setUserState("");
            setPassword("");
            setConfirmPassword("");
            setTandC(false);
          }
        })
        .catch((error) => {
          if (error.response.status === 400) {
            toast.error(error.response.data.message, {
              theme: "colored",
            });
            console.log(error.response.data);
          } else {
            toast.error(error.response, {
              theme: "colored",
            });
            console.log(error.message);
          }
        });
    }
  };

  return (
    <div>
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div class="w-full bg-white rounded-lg shadow dark:border md:my-10 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Registration Form
              </h1>
              <form
                class="space-y-4 md:space-y-6"
                action="#"
                onSubmit={handleSubmit}
              >
                <div>
                  <label
                    for="name"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your name"
                    required=""
                    onChange={(event) => {
                      setName(event.target.value);
                    }}
                    value={name}
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(event) => {
                      setEmail(event.target.value);
                    }}
                    value={email}
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Phone Number
                  </label>
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                   onWheel={numberInputOnWheelPreventChange}
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your phone number"
                    required=""
                    onChange={(event) => {
                      setPhone(event.target.value);
                    }}
                    value={phone}
                  />
                </div>
                <div>
                  <label
                    for="city"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    id="city"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your city"
                    required=""
                    onChange={(event) => {
                      setCity(event.target.value);
                    }}
                    value={city}
                  />
                </div>
                <div>
                  <label
                    for="userState"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    name="userState"
                    id="userState"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="your userState"
                    required=""
                    onChange={(event) => {
                      setUserState(event.target.value);
                    }}
                    value={userState}
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(event) => {
                      setPassword(event.target.value);
                    }}
                    value={password}
                  />
                </div>
                <div>
                  <label
                    for="confirm-password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Confirm password
                  </label>
                  <input
                    type="password"
                    name="confirm-password"
                    id="confirm-password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                    onChange={(event) => {
                      setConfirmPassword(event.target.value);
                    }}
                    value={confirmPassword}
                  />
                </div>
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input
                      id="terms"
                      aria-describedby="terms"
                      type="checkbox"
                      class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required=""
                      onChange={(event) => {
                        setTandC(!tandc);
                      }}
                      checked={tandc}
                    />
                  </div>
                  <div class="ml-3 text-sm">
                    <label
                      for="terms"
                      class="font-light text-gray-500 dark:text-gray-300"
                    >
                      I accept the{" "}
                      <a
                        class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        href="/#"
                      >
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Register
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="/#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </div>
  );
};

export default RegisterForm;
