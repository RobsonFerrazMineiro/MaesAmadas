* {
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', sans-serif;
  background: linear-gradient(to bottom, #fff0f5, #fcefee);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background-color: white;
  padding: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  text-align: center;
  width: 90%;
  max-width: 500px;
  animation: fadeIn 1.5s ease-in-out;
}

h1 {
  color: #5e2b5b;
  margin-bottom: 1rem;
}

p {
  color: #555;
  font-size: 1.1rem;
  margin-bottom: 1rem;
}

input {
  padding: 0.7rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 80%;
  margin-bottom: 1rem;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.05);
}

button {
  padding: 0.7rem 1.5rem;
  background-color: #ffb6c1;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  color: #5e2b5b;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #f291a3;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
