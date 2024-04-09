import { axiosT } from "@/src/api/axios";
import { useEffect, useState } from "react";

type UserType = {
  avatar: string;
  last_name: string;
  first_name: string;
  email: string;
  id: number;
};
const User = () => {
  const [users, setUsers] = useState<UserType[]>([]);

  console.log(process.env.BASE_URL);

  useEffect(() => {
    axiosT.get("/api/users").then((res) => {
      if (res.status === 200) {
        console.log(res);
        setUsers(res?.data?.data);
      }
    });
  }, []);
  return (
    <div>
      <h1 className="text-xl font-bold my-2">Users</h1>
      <div>
        {users.map((item) => {
          return <div key={item.id}>{item.id}. {item.first_name} {item.last_name}</div>;
        })}
      </div>
    </div>
  );
};

export default User;
