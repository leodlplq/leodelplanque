export default function Home() {
  return (
    <div className="flex min-h-screen justify-center font-sans">
      <main className="flex h-full p-4 w-full flex-col">
        <div className="w-full flex justify-between items-center">
          <h1 className="text-2xl font-black">Hello from Léo 🌸</h1>
          <span className="text-sm border border-blue-600/20 bg-blue-500/10 flex items-center justify-center px-2 py-1 rounded">
            🗼 Paris
          </span>
        </div>

        <p className="text-sm">
          Currently working at{" "}
          <a
            className="text-blue-300 hover:text-blue-400 underline"
            href="https://fentech.ai"
            target="_blank"
          >
            Fentech
          </a>{" "}
          as a Frontend Software Engineer
        </p>

        <br />
        <p>
          This is my personal website, hoping to share some thoughts with you.
        </p>
      </main>
    </div>
  );
}
