import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Signup = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    about: '',
    profileURL: 'https://i.stack.imgur.com/l60Hf.png',
    role: '',
  });

  const [additionalFields, setAdditionalFields] = useState({
    farmer: {
      farmName: '',
      farmLocation: '',
    },
    shopOwner: {
      shopName: '',
      shopLocation: '',
      deliveryService: '',
    },
  });

  const doSignup = async (event) => {
    event.preventDefault();
    console.log(event);
    console.log(data);

    if (data.name.trim() === '' || data.name == null) {
      toast.warning('Name is Required', {
        position: 'top-center',
      });
      toast.error('Name is Required', {
        position: 'top-center',
      });
      return;
    }

    try {
      const result = await signUp(data);
      console.log(result);
      toast.success('Your account has been created', {
        position: 'top-center',
      });
      setData({
        name: '',
        email: '',
        password: '',
        about: '',
        profileURL: 'https://i.stack.imgur.com/l60Hf.png',
        role: '',
      });
      setAdditionalFields({
        farmer: {
          farmName: '',
          farmLocation: '',
        },
        shopOwner: {
          shopName: '',
          shopLocation: '',
          deliveryService: '',
        },
      });
    } catch (error) {
      console.log(error);
      toast.error(error.message, {
        position: 'top-center',
      });
    }
  };

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      password: '',
      about: '',
      profileURL: 'https://i.stack.imgur.com/l60Hf.png',
      role: '',
    });
    setAdditionalFields({
      farmer: {
        farmName: '',
        farmLocation: '',
      },
      shopOwner: {
        shopName: '',
        shopLocation: '',
        deliveryService: '',
      },
    });
  };

  const handleRoleChange = (event) => {
    const selectedRole = event.target.value;
    setAdditionalFields({
      farmer: {
        farmName: '',
        farmLocation: '',
      },
      shopOwner: {
        shopName: '',
        shopLocation: '',
        deliveryService: '',
      },
    });

    if (selectedRole === 'Farmer') {
      setAdditionalFields({
        ...additionalFields,
        farmer: {
          farmName: '',
          farmLocation: '',
        },
      });
    } else if (selectedRole === 'Shop Owner') {
      setAdditionalFields({
        ...additionalFields,
        shopOwner: {
          shopName: '',
          shopLocation: '',
          deliveryService: '',
        },
      });
    }
  };

  return (
    <div className="grid grid-cols-12">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <h1 className="text-center">Signup Here</h1>

          <form action="" onSubmit={doSignup}>
            {/* Name-Field */}
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2 ps-1"
              >
                Username
              </label>
              <input
                type="text"
                placeholder="Enter here"
                className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                name="user_name"
                onChange={(event) => {
                  setData({
                    ...data,
                    name: event.target.value,
                  });
                }}
                value={data.name}
              />
            </div>

            {/* Email-Field */}
            <div className="mt-3">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2 ps-1"
              >
                Email
              </label>
              <input
                type="email"
                placeholder="Enter here"
                id="user_email"
                className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                name="user_email"
                onChange={(event) => {
                  setData({
                    ...data,
                    email: event.target.value,
                  });
                }}
                value={data.email}
              />
            </div>

            {/* Pasword-Field */}
            <div className="mt-3">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2 ps-1"
              >
                Password
              </label>
              <input
                type="password"
                placeholder="Enter here"
                className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                name="user_password"
                onChange={(event) => {
                  setData({
                    ...data,
                    password: event.target.value,
                  });
                }}
                value={data.password}
              />
            </div>

            {/* About-Field */}
            <div className="mt-3">
              <label
                htmlFor="user_about"
                className="block text-sm font-medium mb-2 ps-1"
              >
                About
              </label>
              <textarea
                placeholder="Enter here"
                id="user_about"
                className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                rows={8}
                name="user_about"
                onChange={(event) => {
                  setData({
                    ...data,
                    about: event.target.value,
                  });
                }}
                value={data.about}
              />
            </div>

            {/* Role Selection */}
            <div className="mt-3 flex justify-center">
              <label
                className="block text-sm font-medium mb-2 ps-1"
                htmlFor="role"
              >
                Select Role
              </label>
              <select
                id="role"
                className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                value={data.role}
                onChange={handleRoleChange}
              >
                <option value="">Select a role</option>
                <option value="Farmer">Farmer</option>
                <option value="Shop Owner">Shop Owner</option>
              </select>
            </div>

            {/* Additional Fields Based on Selected Role */}
            {data.role === 'Farmer' && (
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 ps-1"
                  htmlFor="farmName"
                >
                  Farm Name
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                  name="farmName"
                  onChange={(event) => {
                    setAdditionalFields({
                      ...additionalFields,
                      farmer: {
                        ...additionalFields.farmer,
                        farmName: event.target.value,
                      },
                    });
                  }}
                  value={additionalFields.farmer.farmName}
                />
              </div>
            )}
            {data.role === 'Farmer' && (
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 ps-1"
                  htmlFor="farmLocation"
                >
                  Farm Location
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                  name="farmLocation"
                  onChange={(event) => {
                    setAdditionalFields({
                      ...additionalFields,
                      farmer: {
                        ...additionalFields.farmer,
                        farmLocation: event.target.value,
                      },
                    });
                  }}
                  value={additionalFields.farmer.farmLocation}
                />
              </div>
            )}
            {data.role === 'Shop Owner' && (
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 ps-1"
                  htmlFor="shopName"
                >
                  Shop Name
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                  name="shopName"
                  onChange={(event) => {
                    setAdditionalFields({
                      ...additionalFields,
                      shopOwner: {
                        ...additionalFields.shopOwner,
                        shopName: event.target.value,
                      },
                    });
                  }}
                  value={additionalFields.shopOwner.shopName}
                />
              </div>
            )}
            {data.role === 'Shop Owner' && (
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 ps-1"
                  htmlFor="shopLocation"
                >
                  Shop Location
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                  name="shopLocation"
                  onChange={(event) => {
                    setAdditionalFields({
                      ...additionalFields,
                      shopOwner: {
                        ...additionalFields.shopOwner,
                        shopLocation: event.target.value,
                      },
                    });
                  }}
                  value={additionalFields.shopOwner.shopLocation}
                />
              </div>
            )}
            {data.role === 'Shop Owner' && (
              <div className="mt-3">
                <label
                  className="block text-sm font-medium mb-2 ps-1"
                  htmlFor="deliveryService"
                >
                  Delivery Service
                </label>
                <input
                  type="text"
                  placeholder="Enter here"
                  className="w-full p-0.5 rounded-2xl bg-gray-800 focus:ring-gray-400 border border-gray-800"
                  name="deliveryService"
                  onChange={(event) => {
                    setAdditionalFields({
                      ...additionalFields,
                      shopOwner: {
                        ...additionalFields.shopOwner,
                        deliveryService: event.target.value,
                      },
                    });
                  }}
                  value={additionalFields.shopOwner.deliveryService}
                />
              </div>
            )}

            <div className="mt-3 flex justify-center">
              <button
                type="submit"
                className="px-3 py-2 bg-green-600 rounded-lg hover:bg-green-400"
              >
                Signup
              </button>
              <button onClick={resetForm} type="button" className="px-3 py-2 bg-orange-600 rounded-lg hover:bg-orange-400 ms-2">
                Reset
              </button>
            </div>

            {/* {JSON.stringify(data)} */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;