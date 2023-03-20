function DevFooter() {
  return (
    <div className="p-2 bg-white">
      <hr></hr>
      <div>
        <p className="p-3 text-gray-700 text-center text-xs">
          Made with ☕ + 👨‍💻 <br />
          by{" "}
          <a
            className="hover:text-gray-400 hover: cursor-pointer"
            href="https://github.com/AthN3090"
          >
            {" "}
            Aman Dev Chowdhary{" "}
          </a>
        </p>
      </div>
    </div>
  );
}

export default DevFooter;
