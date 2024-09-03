export default function Home() {
  return (
    <div>
      <h1 className="text-5xl font-bold text-center p-10">
        @vercel/postgres localhost example
      </h1>
      <ul className="text-center">
        <li className="p-10">
          <a
            href="/api/insert"
            target="_blank"
            className="text-2xl font-bold underline"
          >
            Insert Data
          </a>
        </li>
        <li className="p-10">
          <a
            href="/api/read"
            target="_blank"
            className="text-2xl font-bold underline"
          >
            Read Data
          </a>
        </li>
      </ul>
    </div>
  );
}
