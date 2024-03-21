import { ScaleLoader } from "react-spinners";

const Loader = () => {
    return (
        <div className="flex items-center justify-center min-h-[calc(100vh-120px)]">
           <ScaleLoader size={100} color="pink" ></ScaleLoader> 
        </div>
    );
};

export default Loader;