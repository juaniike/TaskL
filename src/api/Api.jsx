import { useState, useEffect } from "react";

export const Api = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then(res => {
        if (!res.ok) throw new Error("Error al obtener la frase");
        return res.json();
      })
      .then(data => {
        setQuote(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Cargando frase motivadora...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <blockquote style={{ fontStyle: "italic", margin: "20px", textAlign: "center" }}>
      “{quote.content}” — <strong>{quote.author}</strong>
    </blockquote>
  );
};