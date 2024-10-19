"use client";
import { Button } from "@/components/ui/button";
import { createUser } from "@/actions/action";

export default function Debug() {
  const addUser = () => {
    console.log("Adding user");
    const user = {
      id: 123,
      name: "John Doe",
      email: "john@gmail.com",
      oid: "123",
      zipCode: "123",
    };
    const result = createUser(user).then((result) => {
      console.log("Result", result);
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Button onClick={addUser}>Add User</Button>
    </main>
  );
}
