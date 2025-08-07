body {
  font-family: Arial, sans-serif;
  background: linear-gradient(to right, #89f7fe, #66a6ff);
  color: #333;
  margin: 0;
  padding: 0;
}

.weather-app {
  max-width: 400px;
  margin: 100px auto;
  background: #fff;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
}

input[type="text"] {
  padding: 10px;
  width: 70%;
  border: 1px solid #ccc;
  border-radius: 6px;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  margin-left: 5px;
}

button:hover {
  background-color: #2980b9;
}

.weather-result {
  margin-top: 20px;
}

.weather-result.hidden {
  display: none;
}

#weatherIcon {
  width: 64px;
  height: 64px;
  margin-top: 10px;
}
