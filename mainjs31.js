async function fetchUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("Error dhacay");
    }

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchUsers();