import './StudentListItem.css'
export default function StudentListItem({student}) {

    
  return (
    <div>
        <h2>{student.name}</h2>
        <h2>{student.bio}</h2>
        <h2>{student.score}</h2>
        <h2>{student.score}</h2>

    </div>
  )
}
