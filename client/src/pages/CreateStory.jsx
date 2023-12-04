import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";


const CreateStory = () => {
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [description, setDescription] = useState("");
  const token = localStorage.getItem("token");
  const navigate = useNavigate()


  const post = {
    title,
    tags,
    description,
  };

  const handlePost = async (e) => {
    e.preventDefault()
    try {
      const fetchData = await fetch("http://localhost:4343/api/posts", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,

          "Content-type": "application/json",
        },
        body: JSON.stringify(post),
      });
      const res = await fetchData.json();
      console.log(res);
      if(res.message === 'post created successfully'){
        // alert(res.message)
        toast.success(res.message)
        navigate('/')
      }

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    // fetchPost();
  }, []);
  return (
    <main>
      <h2> CreateStory </h2>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          {/* <Form.Label>Title</Form.Label> */}
          <Form.Control type="text" placeholder="   Title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>
        <Form.Select
          aria-label="Default select example"
          className="mb-3"
          placeholder="Tags"
          value={tags}
          onChange={(e)=>setTags(e.target.value)}
        >
          <option>Tags</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          <option value="Nature">Nature</option>
          <option value="Entertainment">Entertainment</option>
        </Form.Select>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          {/* <Form.Label>Write a story</Form.Label> */}
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="    Write yor story..."
            value={description}
            onChange={(e)=>setDescription(e.target.value)}
          />
        </Form.Group>

        <Button onClick={handlePost} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </main>
  );
};

export default CreateStory;
