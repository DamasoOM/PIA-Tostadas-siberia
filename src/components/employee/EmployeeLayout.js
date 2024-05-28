import EmployeeNav from "./EmployeeNav"


const EmployeeLayout = ({children}) => {
    return (
        <body class="bodyAdmin1">
            <div class="container-fluid">
                <div class="row">
                    <EmployeeNav/>
                    {children}
                    
                </div>
            </div>

            
            {

            }

            <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
            <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
            <script src="https://unpkg.com/feather-icons"></script>
            <script src="jsadmin/Script1.js"></script>
        </body>
    )
}

export default EmployeeLayout