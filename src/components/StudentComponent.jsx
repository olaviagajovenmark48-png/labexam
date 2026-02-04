import { useState } from 'react'
import './StudentComponent.css'

function initials(name) {
  if (!name) return ''
  return name
    .split(' ')
    .map((s) => s[0])
    .slice(0, 2)
    .join('')
    .toUpperCase()
}

export default function StudentComponent({ name, course, year }) {
  const [show, setShow] = useState(false)

  return (
    <article className="student-card modern">
      <div className="avatar" aria-hidden>
        {initials(name)}
      </div>

      <div className="student-main">
        <div className="student-row">
          <h3 className="student-name">{name}</h3>
          <div className="badges">
            <span className="badge course">{course}</span>
            <span className="badge year">Y{year}</span>
          </div>
        </div>

        {show && (
          <p className="student-details">This is a sample student card. You can add more fields (email, phone) when available.</p>
        )}
      </div>

      <div className="student-actions">
        <button className="btn small" onClick={() => setShow((s) => !s)}>
          {show ? 'Hide' : 'Details'}
        </button>
        <button className="btn outline small" onClick={() => alert(`Open profile for ${name}`)}>
          Profile
        </button>
      </div>
    </article>
  )
}
