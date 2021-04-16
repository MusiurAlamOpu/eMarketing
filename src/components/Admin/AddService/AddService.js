import { Button } from "@material-ui/core";
import React from "react";
import { useForm } from "react-hook-form";
import "./AddService.css";

const AddService = () => {
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
    lineHeight: "1",
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
        <div style={{textAlign: 'center', borderBottom: '1px solid lightgrey', color: '#171C2A', fontWeight: '500'}}>
        <h5>Add Service</h5>
        </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={{ display: "flex" }}>
          <div style={{ width: "50%", padding: '0% 2%'}}>
            <label>Name</label>
            <input
              style={inputStyle}
              name="title"
              defaultValue="name"
              {...register("name")}
            />
            <label>Description</label>
            <input
              style={inputStyle}
              id="description"
              name="description"
              defaultValue="description"
              {...register("description")}
            />
          </div>
          <div style={{ width: "50%", padding: '0% 2%'}}>
            <label>Price</label>
            <input
              style={inputStyle}
              name="price"
              defaultValue="1000"
              {...register("price")}
            />
            <label>Upload photo</label>
            <input
              style={inputStyle}
              name="picture"
              type="file"
              // onChange={handleImageUpload}
              // style={{ color: "grey", width: "90%" }}
            />
            <br/><br/>
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
        </div>
      </form>
    </div>
  );
};

export default AddService;
