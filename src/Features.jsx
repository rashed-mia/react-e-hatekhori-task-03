import Search from "./Search";
import Sorting from "./Sorting";

export default function Features(){
    return (
        <div className="flex justify-start items-center space-x-4 m-4">
            <Search />
            <Sorting />
        </div>
    );
}