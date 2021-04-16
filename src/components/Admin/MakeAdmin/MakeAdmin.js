import { Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import "../AddService/AddService.css";

const MakeAdmin = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    console.log("Clicked!");
  };
  const inputStyle = {
    border: "2px solid grey",
    borderRadius: "6px",
    margin: "1%",
    color: "grey",
    width: "98%",
  };
  return (
    <div
      style={{
        margin: "4%",
        backgroundColor: "white",
        padding: "4%",
        borderRadius: "10px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          borderBottom: "1px solid lightgrey",
          color: "#171C2A",
          fontWeight: "500",
        }}
      >
        <h5>Make Admin</h5>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
          <div style={{ width: "100%", padding: "0% 2%" }}>
            <label>Name</label>
            <input
              style={inputStyle}
              name="email"
              defaultValue="hello@hello.hello"
              {...register("email")}
            />
            <Button
              style={{
                border: "1px solid green",
                backgroundColor: "#BFE7CC",
                color: "green",
              }}
              type="submit"
            >
              SUBMIT
            </Button>
        </div>
      </form>
    </div>
  );
};

export default MakeAdmin;

// export default MakeAdmin;
