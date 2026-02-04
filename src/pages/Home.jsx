import { Link } from 'react-router-dom'
import StudentComponent from '../components/StudentComponent'
import './Home.css'

export default function Home() {
  return (
    <section className="home-hero">
      <div className="hero-content">
        <h2>Welcome to Student Info App</h2>
        <p className="lead">Browse students, view details, and fetch live sample data from a public API.</p>
        <div className="hero-ctas">
          <Link to="/students" className="btn primary">View Students</Link>
          <Link to="#features" className="btn">Learn More</Link>
        </div>
      </div>

      <aside className="hero-preview">
        <StudentComponent name="Jane Doe" course="Computer Science" year={2} />
        <StudentComponent name="John Smith" course="Information Tech" year={3} />
      </aside>

      <div id="features" className="features">
        <div className="feature">
          <h3>Live Data</h3>
          <p>Fetches users from JSONPlaceholder and maps them to student entries.</p>
        </div>
        <div className="feature">
          <h3>Reusable Components</h3>
          <p>Header and Student cards are implemented as reusable components with props and state.</p>
        </div>
        <div className="feature">
          <h3>Client Routing</h3>
          <p>Navigate between Home and Students using client-side routing.</p>
        </div>
      </div>
    </section>
  )
}
