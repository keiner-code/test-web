import { FaSearch } from "react-icons/fa";

export default function Search(){
    return (
        <div className="flex justify-end mt-4">
            <div className="bg-gray-500 px-1 rounded-md flex items-center h-7">
              <input
                className="bg-gray-500 outline-none"
                type="text"
                placeholder="Search"
              />
              <FaSearch className="bg-transparent text-black" />
            </div>
          </div>
    )
}