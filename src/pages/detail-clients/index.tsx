import { Link, useParams } from 'react-router-dom';

const DetailClient = () => {
    const { id } = useParams();

    // Логика получения данных с бэкенда, если нужно
    // Например:
    // const [data, setData] = useState(null);
    // useEffect(() => {
    //   fetch(`/api/data/${id}`)
    //     .then((response) => response.json())
    //     .then((data) => setData(data));
    // }, [id]); 

    const users = [
        { id: 1, name: 'Anton', description: 'Description for User 1' },
        { id: 2, name: 'Rakashiviliy', description: 'Description for User 2' },
        { id: 3, name: 'SardorTashkentsky', description: 'Description for User 3' },
        { id: 4, name: 'Murod Nazarov', description: 'Description for User 4' },
        { id: 5, name: 'Alisher Usmonov', description: 'Description for User 5' },
        // другие пользователи...
    ];
    const user = users.find((user) => user.id.toString() === id);


    // if (!user) {
    //     return <div>User not found</div>;
    // }

    return (
        <div className='p-3'>
            <div className='flex items-center justify-between'>
                <div>
                    <h2 className='mb-5'>Detail Page</h2>


                    <h3 className='text-2xl font-semibold mb-4'>{user?.name}</h3>

                </div>

                <Link to={'/'} className='bg-red-600 max-w-[100px] w-full block py-1 text-center rounded-md text-white'>Назад</Link>
            </div>

            <div className='flex gap-5 pr-2'>
                <div className='shadow-md border p-7 rounded-[10px]'>
                    <h3 className='mb-5'>Персональные данные</h3>
                    <div className='flex gap-[30px] flex-wrap'>
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />
                        <input type="text" className='border max-w-[300px] w-full py-2 px-2' />

                    </div>

                </div>



                <div className='min-h-[300px] shadow-md border p-7 rounded-[10px]'>
                    <h2 className='text-2xl font-semibold mb-3'>История клиента</h2>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque tempora aut vero sit magnam quae reiciendis cum! In ducimus nesciunt tempora esse quasi iste obcaecati dolor temporibus provident incidunt quo dignissimos repellat commodi suscipit vitae, autem ad natus hic eligendi reprehenderit quas? Assumenda, facilis quas!

                </div>

            </div>


        </div>
    );
};

export default DetailClient;
