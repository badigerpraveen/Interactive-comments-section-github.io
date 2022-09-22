import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import userImg from "../images/avatars/image-juliusomo.png";
//import Otherscomments from "./Otherscomments";
import { Grid } from "@mui/material";
function Comment() {
  const [message, setMessage] = useState();
  const [isMessage, isSetMessage] = useState([]);
  const [isEditMessage, isSetEdtMessage] = useState(false);

  const userData = {
    id: isMessage.length + 1,
    userMessage: message,
    userImg: userImg,
  };

  const deletMessag = (id) => {
    console.log(id, "ID");
    const deletMessage = isMessage.filter((msgId) => {
      console.log(msgId.id !== id);
      return msgId.id !== id;
    });
    isSetMessage(deletMessage);
  };

  const editMessag = (id) => {
    isSetEdtMessage(!isEditMessage);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    isSetMessage([...isMessage, userData]);
    setMessage("");
    isEditMessage(false);
  };
  const oninputChange = (e) => {
    setMessage(e.target.value);
  };

  console.log(isEditMessage, "isEditMessage");
  return (
    <>
      {isMessage.map((i) => {
        return (
          <Grid container>
            <Grid item>
              {i.id} {<img src={i.userImg} alt="img" />}
            </Grid>
            <Grid item> {i.userMessage}</Grid>
            <Grid item>
              <Button
                variant="contained"
                color="error"
                onClick={() => deletMessag(i.id)}
              >
                Delete
              </Button>
              <Button variant="contained" onClick={() => editMessag(i.id)}>
                {isEditMessage ? "Cancel" : "Edit"}
              </Button>
              {isEditMessage && i.id ? (
                <form>
                  <textarea
                    type="text"
                    name="message"
                    rows="10"
                    cols="106"
                    placeholder="Add a comment"
                  />
                  <Button type="submit" variant="contained">
                    Update
                  </Button>
                </form>
              ) : (
                ""
              )}
            </Grid>
          </Grid>
        );
      })}
      <Grid container> 
      <Grid item>
      <form onSubmit={onSubmit}>
        <img src={userImg} alt="img" />
        <textarea
          type="text"
          name="message"
          value={message}
          rows="10"
          cols="106"
          placeholder="Add a comment"
          onChange={oninputChange}
        />
        <Button type="submit" variant="contained">
          Send
        </Button>
      </form>  
      </Grid>
      </Grid>
    </>
  );
}

export default Comment;
