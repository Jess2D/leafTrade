import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";

export default function User(user_id) {
  const [item, setitem] = useState({
    name: "",
    _id: "",
    photo: "",
    users: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const id = user_id;
      const response = await fetch(`http://localhost:5000/user/${id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const user = await response.json();
      if (!user) {
        window.alert(`user with id ${id} not found`);
        navigate("/");
        return;
      }

      setitem(user);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // This following section will display the item that takes input from the user to update the data.
  return item;
}
