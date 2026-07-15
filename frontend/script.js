document.querySelector("#btn").addEventListener("click", async () => {
  const output = document.querySelector("#output");

  try {
    const response = await fetch("http://localhost:3000/api/hello");
	if (!response.ok) {
		throw new Error('HTTP-Fehler: ${response.status}');
	}
    const data = await response.json();
    output.textContent = "Antwort vom Backend: " + data.message;
  } catch (err) {
    output.textContent = "Fehler: " + err.message;
  }
});
