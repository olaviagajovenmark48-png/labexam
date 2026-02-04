import { useEffect, useState } from 'react'
import StudentComponent from '../components/StudentComponent'

export default function Students() {
  const [students, setStudents] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchStudents = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      if (!res.ok) throw new Error('Network response was not ok')
      const data = await res.json()
      // map placeholder data to student-like objects
      const mapped = data.map((u, i) => ({
        id: u.id,
        name: u.name,
        course: u.company?.bs ? u.company.bs.split(' ')[0] : 'N/A',
        year: 1 + (i % 4),
      }))
      setStudents(mapped)
    } catch (err) {
      setError(err.message || 'Failed to fetch')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchStudents()
  }, [])

  return (
    <section>
      <h2>Students</h2>
      <div style={{ marginBottom: 12 }}>
        <button onClick={fetchStudents}>Refresh</button>
      </div>
      {loading && <p>Loading students...</p>}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {!loading && !error && (
        <div className="students-grid">
          {students.map((s) => (
            <StudentComponent
              key={s.id}
              name={s.name}
              course={s.course}
              year={s.year}
            />
          ))}
        </div>
      )}
    </section>
  )
}
