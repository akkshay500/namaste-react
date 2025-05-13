
const Contact = ()=>{
    //const {loggedInUser} = useContext(UserContext)
    return(
        <div>
            <h1 className="font-bold p-2 m-2">Contact Us</h1>
            <form>
                <label className="p-2 m-2">First Name</label><input className="border border-black" title="First Name"/>
                <label className="p-2 m-2">Last Name</label><input className="border border-black" title="Last Name"/>
                <button className="p-2 m-2 border border-black bg-gray-100 rounded-md">Submit</button>
            </form>
        </div>
    )
}

export default Contact;