import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [posteInput, setPosteInput] = useState("");
  const [diplomeInput, setDiplomeInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ poste: posteInput, diplome: diplomeInput }),
    });
    const data = await response.json();
    setResult(data.result);

  }

  return (
    <div>
      <Head>
        <title>OpenAI Quickstart</title>
        <link rel="icon" />
      </Head>

      <main className={styles.main}>
        <h3>Lettre de motivation</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="poste"
            placeholder="Quel est l'intitulé du poste ?"
            value={posteInput}
            onChange={(e) => setPosteInput(e.target.value)}
          />
          <input
            type="text"
            name="diplome"
            placeholder="Quel est ton dernier diplôme ?"
            value={diplomeInput}
            onChange={(e) => setDiplomeInput(e.target.value)}
          />
          <input type="submit" value="Generer une lettre" />
        </form>
        <div className={styles.result}>{result}</div>
      </main>
    </div>
  );
}
