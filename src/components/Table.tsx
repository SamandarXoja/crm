import { useNavigate } from 'react-router-dom';

interface TableRowProps {
    id: number;
    title: string;
    content: string;
}

const TableRow = ({ id, title, content }: TableRowProps) => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/detail-clients/${id}`); // Переход на страницу с детальной информацией
    };

    return (
        <tr className="flex flex-col cursor-pointer" onClick={handleClick}>
            <th className="mb-5">{title}</th>
            <td className="w-[300px] mb-5 p-2 rounded-md min-h-[200px] shadow-lg bg-white border border-[#e9e9e9]">
                {content}
            </td>
            {/* Повторите для других ячеек, если нужно */}
        </tr>
    );
};

export default TableRow;