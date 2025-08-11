import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="bubble small"></div>
      <div className="bubble medium"></div>
      <div className="bubble large"></div>

      <h1>Welcome to Employee Management System</h1>
      <p>Manage your workforce effortlessly with an intuitive and efficient system.</p>

      <ul className="home-features">
        <li>Add, view, update, and delete employees with ease</li>
        <li>Auto-generated unique employee IDs</li>
        <li>Clean and responsive user interface</li>
        <li>Fast and reliable backend with Node.js & MongoDB</li>
        <li>Seamless sidebar navigation</li>
      </ul>
    </div>
  );
}
