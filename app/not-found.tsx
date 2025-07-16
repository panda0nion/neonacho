export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center space-y-6 p-6">
      <h1 className="text-5xl font-bold">🌮 404 - Nacho Found</h1>
      <p className="text-lg max-w-md">Looks like this chip got lost in the salsa. Let’s get you back on track.</p>
      <a href="/" className="text-blue-400 hover:underline text-xl">
        Go Home
      </a>
    </div>
  );
}
