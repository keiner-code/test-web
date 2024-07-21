import Image from "next/image";
import { MdDelete, MdAdd, MdEdit } from "react-icons/md";
interface TableData {
  title: string;
  header: string[];
  data: any[];
}

export default function DataTable({ title, header, data }: TableData) {
  return (
    <div className="w-full mt-4 overflow-x-auto hide-scrollbar pr-4">
      <h1 className="text-2xl mb-2">{title}</h1>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            {header.map((title) => (
              <th
                key={title}
                className="border border-gray-500 px-2 text-center py-1 w-48"
              >
                {title}
              </th>
            ))}
            <th className="border border-gray-500 px-2 text-center py-1">
              Acciones
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => {
            const values = Object.values(row);
            return (
              <tr key={rowIndex}>
                {values.map((value, colIndex) => (
                  <td
                    key={colIndex}
                    className="border border-gray-500 px-2 text-center py-1 w-48"
                  >
                    <div className="flex justify-center">
                      {String(value).includes("https") ? (
                        <Image
                          width={100}
                          height={100}
                          src={String(value)}
                          alt={String(value)}
                        />
                      ) : (
                        String(value)
                      )}
                    </div>
                  </td>
                ))}
                <td className="border border-gray-500 text-center py-1 w-48">
                  <div className="flex justify-center gap-1 text-lg">
                    <MdDelete className="text-red-500 text-xl" />
                    <MdAdd className="text-green-500 text-xl" />
                    <MdEdit className="text-blue-500 text-xl" />
                  </div>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
