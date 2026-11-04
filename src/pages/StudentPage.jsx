import FormContainer from "../components/FormContainer";
import HeaderContainer from "../components/HeaderContainer";
import ListContainer from "../components/ListContainer";

const StudentPage = () => {
    const students = [
        {id: 1, srCode: "12-12345", name: "Anita Job", program: "BSIT"},
        {id: 2, srCode: "12-12345", name: "Left Job", program: "BSIT"},
        {id: 3, srCode: "12-12345", name: "Right Job", program: "BSIT"},
    ];
    return(
        <> 
            <HeaderContainer />
            <FormContainer />
            <ListContainer data={students}/>
        </>
    )
}

export default StudentPage;