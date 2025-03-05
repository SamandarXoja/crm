import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useState } from 'react';
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

    const [inputCount, setInputCount] = useState([1])


    function createInput() {
        if (inputCount.length > 2) {
            return
        }

        setInputCount([...inputCount, 1])


    }




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
                    <div className=' w-[1000px]'>
                        <label>Ник Name</label>
                        <Input />

                        <div className='flex flex-wrap gap-[20px] mt-8'>
                            <div className='max-w-[320px] w-full'>
                                <label>Имя</label>
                                <Input className='max-w-[320px] w-full' />
                            </div>
                            <div className='max-w-[320px] w-full'>
                                <label>Фамилия</label>
                                <Input className='max-w-[320px] w-full' />
                            </div>
                            <div className='max-w-[320px] w-full'>
                                <label>Отчество</label>
                                <Input className='max-w-[320px] w-full' />
                            </div>

                            <div className='max-w-[320px] w-full'>
                                <label>ПНФЛ</label>
                                <Input className='max-w-[320px] w-full' />
                            </div>
                            <div className='max-w-[320px] w-full'>
                                <label>Женат</label>
                                <Select>
                                    <SelectTrigger className="w-[320px]">
                                        <SelectValue placeholder="выбор" />
                                    </SelectTrigger>
                                    <SelectContent className='bg-white'>
                                        <SelectItem value="да">да</SelectItem>
                                        <SelectItem value="нет">нет</SelectItem>

                                    </SelectContent>
                                </Select>
                            </div>

                            <div className='max-w-[320px]   w-full relative'>
                                <label>контакты</label>
                                {inputCount.map((item, i) => (
                                    <div className='flex max-w-[320px] w-full mb-2' key={i}>
                                        <div className='max-w-[320px] w-full'>
                                            <Input className='max-w-[320px] w-full' />
                                            <button onClick={() => createInput()} className='absolute right-[-19px] top-[25px] text-2xl text-slate-500'>+</button>
                                        </div>
                                    </div>
                                ))}





                            </div>
                        </div>


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
