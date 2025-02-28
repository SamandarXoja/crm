
import {
  Angry,

  File,

} from "lucide-react";

import { NavLink, } from "react-router";

function Sidebar() {


  return (
    <>
      <div className="w-[300px] flex flex-col justify-between bg-[#212a33] min-h-screen pt-3">
        <div>
          <div className="ml-[20px] max-w-[200px] min-h-[40px] flex items-center mb-10">
            <Angry color="#FFE4C4" size={60} />
          </div>
          <div className="ml-[0px] pr-[0px]">
            <div className="flex gap-[2px] items-center">
              {/* <div className="mt-5 ml-4">{categoriesData.map(renderTree)}</div> */}
            </div>
            {/* <NavLink to={`/main`}>
          </NavLink> */}
          </div>

          <div className="mt-[40px] ml-[10px] pl-[10px] pr-[20px]">
            <NavLink
              to="/"

              className={({ isActive }) =>
                `text-[#9A9CAE] flex items-center text-[18px] cursor-pointer max-w-[230px] ${isActive
                  ? "bg-blue-500 flex gap-2 text-white rounded-md px-2 py-1"
                  : "px-2 py-1 flex gap-2"
                }`
              }
            >
              <File color="#fff" />
              ПРОФИЛЬ КЛИЕНТА

            </NavLink>
          </div>
          <NavLink
            to="/status-user"
            className={({ isActive }) =>
              `flex text-[#9A9CAE]  max-w-[230px] px-2 py-1 rounded-md items-center ml-[20px] gap-2 cursor-pointer mt-5 ${isActive ? "bg-blue-500 px-2 py-1 text-white" : ""
              }`
            }
          >
            <File color="#fff" />
            <div className="flex gap-[2px] items-center text-[18px]">СТАТУС КЛИЕНТА
            </div>
          </NavLink>
          <NavLink
            to="/call-clients"
            className={({ isActive }) =>
              `flex text-[#9A9CAE]  max-w-[230px] px-2 py-1 rounded-md items-center ml-[20px] gap-2 cursor-pointer mt-5 ${isActive ? "bg-blue-500 px-2 py-1 text-white" : ""
              }`
            }
          >
            <File color="#fff" />
            <div className="flex gap-[2px] items-center text-[18px]">ОБЗВОН КЛИЕНТА

            </div>
          </NavLink>
          <NavLink
            to="/real-estate"
            className={({ isActive }) =>
              `flex text-[#9A9CAE]  max-w-[230px] px-2 py-1 rounded-md items-center ml-[20px] gap-2 cursor-pointer mt-5 ${isActive ? "bg-blue-500 px-2 py-1 text-white" : ""
              }`
            }
          >
            <File color="#fff" />
            <div className="flex gap-[2px] items-center text-[18px]">НЕДВИЖИМОСТЬ


            </div>
          </NavLink>
          <NavLink
            to="/manager"
            className={({ isActive }) =>
              `flex text-[#9A9CAE]  max-w-[230px] px-2 py-1 rounded-md items-center ml-[20px] gap-2 cursor-pointer mt-5 ${isActive ? "bg-blue-500 px-2 py-1 text-white" : ""
              }`
            }
          >
            <File color="#fff" />
            <div className="flex gap-[2px] items-center text-[18px]">МЕНЕДЖЕР (МПП)



            </div>
          </NavLink>
          <NavLink
            to="/reports"
            className={({ isActive }) =>
              `flex text-[#9A9CAE]  max-w-[230px] px-2 py-1 rounded-md items-center ml-[20px] gap-2 cursor-pointer mt-5 ${isActive ? "bg-blue-500 px-2 py-1 text-white" : ""
              }`
            }
          >
            <File color="#fff" />
            <div className="flex gap-[2px] items-center text-[18px]">ОТЧЁТЫ




            </div>
          </NavLink>







          {/* 
          <NavLink
            to="/user-add"
            className={({ isActive }) =>
              `flex text-[#9A9CAE]  max-w-[230px] px-2 py-1 rounded-md items-center ml-[20px] gap-2 cursor-pointer mt-5 ${isActive ? "bg-blue-500 px-2 py-1 text-white" : ""
              }`
            }
          >
            <User color="#fff" size={25} />
            <div className="flex gap-[2px] items-center text-2xl">
              User Qo'shish
            </div>
          </NavLink> */}
        </div>




      </div>

      {/* <Catergories /> */}
    </>
  );
}

export default Sidebar;
