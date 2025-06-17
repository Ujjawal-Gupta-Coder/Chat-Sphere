import React, { useEffect, useState } from "react";

const CountdownLoader = () => {
  const [seconds, setSeconds] = useState(45);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col items-center justify-center z-50 text-white px-4">
      {/* Spinner */}
      <div className="mb-6">
        <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
      </div>

      {/* Message */}
      <h2 className="text-lg md:text-xl font-semibold mb-2 text-center">
        ChatSphere is almost ready...
      </h2>
      <p className="text-sm mb-2 text-center">
        Hang tight — we’re waking up the servers just for you!
      </p>

      {/* Countdown */}
      <p className="text-2xl font-bold mt-2 text-center">
        ⏳{seconds > 0 ? ` ${seconds} sec` : "Still waking up... almost there!"}
      </p>

      {/* Footer */}
      <footer className="absolute bottom-4 text-xs text-gray-300 text-center px-2">
        © 2025 ChatSphere • Built with ❤️ by{" "}
        <a href="https://ujjawal-gupta-coder.github.io/My-Portfolio/">
          Ujjawal Gupta{" "}
        </a>
      </footer>
    </div>
  );
};

export default CountdownLoader;
