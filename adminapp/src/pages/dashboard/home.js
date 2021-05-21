
const HomeSectionPage = () => {  
    return (
        <>
            <h1>Home</h1>
            <h3> Welcome In Admin DashBoard </h3>
            <img alt='' src={localStorage.getItem('profilePicture')} width="300" height="300" />
            <p> Your Email : {localStorage.getItem('email')} </p>
            <p> Your User Role in Admin DashBoard  : {localStorage.getItem('userRole')} </p>
        </>
    )
}
export default HomeSectionPage;