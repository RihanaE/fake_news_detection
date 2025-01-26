// import React, { useState } from "react";
// import { Button } from "./components/Button";
// import { Input } from "./components/Input";
// import { Card } from "./components/Card";
// import { CardContent } from "./components/CardContent";
// import Footer from "./components/Footer";
// import NavBar from "./components/Navbar";
// import About from "./components/About";
// import HowItWork from "./components/HowItWork";

// const FakeNewsDetection = () => {
//   const [input, setInput] = useState("");
//   const [result, setResult] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleAnalyze = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       const response = await fetch("https://api-url.com/analyze", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ text: input }),
//       });

//       if (!response.ok) {
//         throw new Error("Failed to analyze the article. Please try again.");
//       }

//       const data = await response.json();
//       setResult(data.result); // "fake" or "real"
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#FAFBFC] flex flex-col justify-between">
//       {/* Header */}
//       <NavBar />

//       {/* Hero Section */}
//       <section className="text-center mt-12">
//         <h2 className="text-4xl font-bold text-gray-800 flex flex-col justify-center text-center">
//           <span className="absolute  left-1/2 transform -translate-x-1/2  text-center">
//             Detect Fake News Instantly
//           </span>
//           <div className="flex justify-between items-center">
//             <img
//               src="/Looper BG.svg"
//               alt="FactCheck AI"
//               className="w-1/2 h-auto"
//             />
//             <img
//               src="/Looper BG.svg"
//               alt="FactCheck AI"
//               className="w-1/2 h-auto transform scale-x-[-1]" // Flip the image horizontally
//             />
//           </div>
//         </h2>
//       </section>

//       {/* Detection Section */}
//       <section className="mt-12 flex-1 max-w-4xl mx-auto bg-white p-6 rounded-lg sm:w-3/4 lg:w-full">
//         <h3 className="text-2xl font-semibold text-gray-800 mb-4">
//           Analyze News
//         </h3>
//         <div className="flex gap-4">
//           <Input
//             className="flex-grow"
//             placeholder="Enter an Amharic article"
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             required
//           />
//           <Button
//             className="bg-blue-600 text-white"
//             onClick={handleAnalyze}
//             disabled={!input || isLoading}
//           >
//             {isLoading ? "Analyzing..." : "Analyze"}
//           </Button>
//         </div>

//         {error && <p className="text-red-600 text-center mt-4">{error}</p>}

//         {result && (
//           <Card className="mt-6">
//             <CardContent className="text-center">
//               {result === "fake" ? (
//                 <p className="text-red-600 text-xl font-bold">
//                   Fake News Detected
//                 </p>
//               ) : (
//                 <p className="text-green-600 text-xl font-bold">
//                   This News is True
//                 </p>
//               )}
//             </CardContent>
//           </Card>
//         )}
//       </section>
//       <section className="mt-36 mx-12" id="howitworks">
//         <HowItWork />
//       </section>

//       <section className="m-12" id="about">
//         <About />
//       </section>

//       {/* Footer */}
//       <Footer />
//     </div>
//   );
// };

// export default FakeNewsDetection;

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Button } from "./components/Button";
import { Input } from "./components/Input";
import { Card } from "./components/Card";
import { CardContent } from "./components/CardContent";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import About from "./components/About";
import HowItWork from "./components/HowItWork";

const FakeNewsDetection = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleAnalyze = async () => {
    if (!input.trim()) {
      toast.error("Please enter an article before analyzing!", {
        position: "top-right",
        autoClose: 3000,
      });
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://api-url.com/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: input }),
      });

      if (!response.ok) {
        throw new Error("Failed to analyze the article. Please try again.");
      }

      const data = await response.json();
      setResult(data.result); // "fake" or "real"
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAFBFC] via-purple-50 to-teal-50 animate-gradient-y flex flex-col justify-between">
      {/* Toast Container */}
      <ToastContainer />

      {/* Header */}
      <NavBar />

      {/* Hero Section */}
      <section className="text-center mt-12">
        <h2 className="text-4xl font-bold text-gray-800 flex flex-col justify-center text-center">
          <span className="absolute  left-1/2 transform -translate-x-1/2  text-center">
            Detect Fake News Instantly
          </span>
          <div className="flex justify-between items-center">
            <img
              src="/Looper BG.svg"
              alt="FactCheck AI"
              className="w-1/2 h-auto"
            />
            <img
              src="/Looper BG.svg"
              alt="FactCheck AI"
              className="w-1/2 h-auto transform scale-x-[-1]" // Flip the image horizontally
            />
          </div>
        </h2>
      </section>

      {/* Detection Section */}
      <section className="mt-12 flex-1 max-w-4xl mx-auto bg-white p-6 rounded-lg sm:w-3/4 lg:w-full">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Analyze News
        </h3>
        <div className="flex gap-4">
          <Input
            className="flex-grow"
            placeholder="Enter an Amharic article"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button
            className="bg-blue-600 text-white"
            onClick={handleAnalyze}
            disabled={isLoading}
          >
            {isLoading ? "Analyzing..." : "Analyze"}
          </Button>
        </div>

        {error && <p className="text-red-600 text-center mt-4">{error}</p>}

        {result && (
          <Card className="mt-6">
            <CardContent className="text-center">
              {result === "fake" ? (
                <p className="text-red-600 text-xl font-bold">
                  Fake News Detected
                </p>
              ) : (
                <p className="text-green-600 text-xl font-bold">
                  This News is True
                </p>
              )}
            </CardContent>
          </Card>
        )}
      </section>
      <section className="mt-36 mx-12" id="howitworks">
        <HowItWork />
      </section>

      <section className="m-12" id="about">
        <About />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default FakeNewsDetection;
