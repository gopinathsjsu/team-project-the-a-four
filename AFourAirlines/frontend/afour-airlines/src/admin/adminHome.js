import AdminOptions from "./adminOptions";
import NavBar from "../common/navbar";

export default function AdminHome(){
    let username = localStorage.getItem("userName");

    return(
        <div>
            <NavBar props={username}></NavBar>
            <AdminOptions/>
        </div>
        
    );
}