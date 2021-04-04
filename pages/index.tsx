import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/customers", {
        method: "POST",
        body: JSON.stringify({
          limit: 100,
        }),
      });

      return response.json();
    };

    fetchData().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <div>
      <h1>Hello, Vercel!</h1>
      {!data ? "...loading" : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
