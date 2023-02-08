const Education = (props) => {
  const education = props.education

  return ( 
    <>
      <h1>Education Component</h1> 
      <p>Institution: {education.institution}</p>
      <p>Degree: {education.degree}</p>
      <p>Major: {education.major}</p>
      <p>Graduated: {education.graduated ? "Yes" : "No"}</p>
      <p>Year: {education.year}</p>
      <form onSubmit={()=> props.handleDeleteEducation(props.talentId, education._id)}>
        <button type='submit'>Delete</button>
      </form>
    </>
  );
}
 
export default Education;