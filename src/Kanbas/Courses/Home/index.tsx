import ModuleList from "../Modules/List";
import Status from "./Status";

function Home() {
    return (
        <div className="d-flex">
            <div style={{ marginRight: '40px' }}> {/* Added inline style for space */}
                <ModuleList />
            </div>
            <div>
                <Status />
            </div>
        </div>
    );
}

export default Home;
