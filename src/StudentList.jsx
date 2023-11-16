import StudentListItem from './StudentListItem'
export default function StudentList({students}) {

    const StudentListItems = students.map((student, idx) => <StudentListItem student={student} index={idx} key={idx}/>
    ) 



  return (
    <ul>
     {StudentListItems}
    </ul>
  )
}