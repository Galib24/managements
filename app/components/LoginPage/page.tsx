// export default function LoginPage() {
//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-200 p-6">
      
//       <div className="w-full max-w-6xl grid grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">

//         {/* LEFT SIDE LOGIN */}
//         <div className="flex items-center justify-center p-12 bg-gray-50">
//           <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">
            
//             <h2 className="text-2xl font-bold text-center mb-2">
//               Login
//             </h2>
//             <p className="text-gray-500 text-center mb-6">
//               Enter your details to continue
//             </p>

//             <form className="space-y-4">

//               <div>
//                 <label className="text-sm text-gray-600">Email</label>
//                 <input
//                   type="email"
//                   placeholder="example@email.com"
//                   className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>

//               <div>
//                 <label className="text-sm text-gray-600">Password</label>
//                 <input
//                   type="password"
//                   placeholder="Enter your password"
//                   className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
//                 />
//               </div>

//               <div className="flex items-center justify-between text-sm">
//                 <label className="flex items-center gap-2">
//                   <input type="checkbox" />
//                   Remember me
//                 </label>

//                 <a href="#" className="text-orange-500">
//                   Forgot password?
//                 </a>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
//               >
//                 Log in
//               </button>
//             </form>

//             <p className="text-center text-sm text-gray-500 mt-6">
//               Don’t have an account?{" "}
//               <a href="#" className="text-orange-500">
//                 Sign up
//               </a>
//             </p>
//           </div>
//         </div>

//         {/* RIGHT SIDE DESIGN PANEL */}
//         <div className="relative hidden md:block">
//           <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-orange-500 to-yellow-300"></div>

//           <div className="absolute inset-0 opacity-40">
//             <svg
//               viewBox="0 0 800 600"
//               className="w-full h-full"
//               preserveAspectRatio="none"
//             >
//               <path
//                 d="M0 300 Q200 200 400 300 T800 300 V600 H0 Z"
//                 fill="#fff"
//                 opacity="0.2"
//               />
//             </svg>
//           </div>
//         </div>

//       </div>
//     </div>
//   );
// }

import Image from "next/image";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-200 p-6 relative">

      {/* TOP LEFT LOGO */}
      <div className="absolute top-6 left-6 flex items-center gap-2">
        <Image
          src="https://i.postimg.cc/tChXs8SX/Clip-path-group.png"
          alt="Obliq Logo"
          width={36}
          height={36}
        />
        <span className="text-lg font-semibold text-gray-800">Obliq</span>
      </div>

      {/* MAIN CONTENT */}
      <div className="min-h-screen flex items-center justify-center">

        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 bg-white rounded-2xl shadow-xl overflow-hidden">

          {/* LEFT SIDE LOGIN */}
          <div className="flex items-center justify-center p-12 bg-gray-50">
            <div className="w-full max-w-sm bg-white p-8 rounded-xl shadow-md">

              <h2 className="text-2xl font-bold text-center mb-2">
                Login
              </h2>

              <p className="text-gray-500 text-center mb-6">
                Enter your details to continue
              </p>

              <form className="space-y-4">

                {/* EMAIL */}
                <div>
                  <label className="text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* PASSWORD */}
                <div>
                  <label className="text-sm text-gray-600">Password</label>
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full mt-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />
                </div>

                {/* REMEMBER + FORGOT */}
                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center gap-2">
                    <input type="checkbox" />
                    Remember me
                  </label>

                  <a href="#" className="text-orange-500 hover:underline">
                    Forgot password?
                  </a>
                </div>

                {/* BUTTON */}
                <button
                  type="submit"
                  className="w-full py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
                >
                  Log in
                </button>
              </form>

              {/* SIGNUP */}
              <p className="text-center text-sm text-gray-500 mt-6">
                Don’t have an account?{" "}
                <a href="#" className="text-orange-500 hover:underline">
                  Sign up
                </a>
              </p>

            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="relative hidden md:block bg-orange-50">
            <Image
              src="https://i.postimg.cc/DyYcbYSV/Frame.png"
              alt="Dashboard Preview"
              fill
              className="object-cover"
            />
          </div>

        </div>

      </div>
    </div>
  );
}