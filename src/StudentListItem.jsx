import './StudentListItem.css'
import Score from './Score';
export default function StudentListItem({student}) {

    
  return (
    <div>
        <h2>{student.name}</h2>
        <h2>{student.bio}</h2>
        <h2>Scores:</h2>
        {student.scores.map((score, index) => (
      <Score key={index} score={score} />
    ))}
    </div>
  )
}
