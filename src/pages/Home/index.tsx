import { useNavigate } from "react-router-dom";






function Home() {
  const navigate = useNavigate();
  const data = [
    {
      id: 1,
      title: 'Category 1',
      users: [
        { id: 1, name: 'User 1', description: 'Description for User 1' },
        { id: 2, name: 'User 2', description: 'Description for User 2' },
      ]
    },
    {
      id: 2,
      title: 'Category 2',
      users: [
        { id: 3, name: 'User 3', description: 'Description for User 3' },
        { id: 4, name: 'User 4', description: 'Description for User 4' },
      ]
    },
    {
      id: 3,
      title: 'Category 3',
      users: [
        { id: 5, name: 'User 5', description: 'Description for User 5' },
        { id: 6, name: 'User 6', description: 'Description for User 6' },
      ]
    },
    {
      id: 4,
      title: 'Category 4',
      users: [
        { id: 7, name: 'User 7', description: 'Description for User 7' },
        { id: 8, name: 'User 8', description: 'Description for User 8' },
      ]
    },
    {
      id: 5,
      title: 'Category 5',
      users: [
        { id: 9, name: 'User 9', description: 'Description for User 9' },
        { id: 10, name: 'User 10', description: 'Description for User 10' },
      ]
    },

  ];
  const handleClick = (id: number) => {
    navigate(`/detail-clients/${id}`);
  };

  return (
    <div className="p-7 flex justify-between">
      {data.map((category) => (
        <div key={category.id} className="mb-8  ">
          {/* Категория */}
          <h2 className="text-xl font-bold mb-4">{category.title}</h2>

          {/* Пользователи в категории */}
          <div className="flex flex-col">
            {category.users.map((user) => (
              <div
                key={user.id}
                className="flex flex-col w-[300px] mb-5 cursor-pointer"
                onClick={() => handleClick(user.id)}
              >
                <div className="p-4 rounded-md min-h-[200px] shadow-lg bg-white border border-[#e9e9e9]">
                  <h3 className="font-semibold">{user.name}</h3>
                  <p>{user.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}


      {/* <Button className="bg-red-600">sdasd</Button>/ */}
    </div>
  )
}


export default Home