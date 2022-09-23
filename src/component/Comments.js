import { Button, TextField } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete'; 
import EditIcon from '@mui/icons-material/Edit'; 
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import { useState } from "react";
import userImg from "../images/avatars/image-juliusomo.png";
//import Otherscomments from "./Otherscomments";
import { Grid } from "@mui/material";
import { Style } from "@material-ui/icons";
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
     <div className="over"> 
      {isMessage.map((i) => {
        return ( 
            
          <Grid container spacing={2}   bgcolor="white"
          p={1}
          marginTop="10px"
          marginLeft="10px"
          borderRadius={3}>
            <Grid item xs={9} display="flex" gap={2} >
            <item>  {<img src={i.userImg} alt="img"  width="40px" height="auto"/>} </item>
            <item> { <b>juliusomo </b>} </item>
            </Grid>
            <Grid item sx={2} >
            <Button
                variant="text"
                color="error"
                onClick={() => deletMessag(i.id)} 
                startIcon={isEditMessage ? " " : <DeleteIcon />} 
                
              >
              {isEditMessage ? " " :"Delet" }
                
              </Button>
              <Button variant="text" onClick={() => editMessag(i.id)}  
               color={isEditMessage ? "error": "info" }
               startIcon={isEditMessage ? <CloseIcon/>  :<EditIcon/>}>
                {isEditMessage ? "Cancel" : "Edit"  }
              </Button> 
              </Grid> 
            <Grid item sx={6}>
            
              {i.userMessage}
            </Grid> 
            <Grid item xs={11} p={1}>
              
              {isEditMessage && i.id ? (
                <form>
                  <TextField 
                    type="text"
                    name="message"
                    fullWidth
                    placeholder="Add a comment"
                  />
                  <Button type="submit" style={{marginTop:"10px"}} variant="contained">
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
      </div>
      <form onSubmit={onSubmit}>
        <Grid
          container
          spacing={2}
          bgcolor="white"
          p={1}
          m={1}
          borderRadius={3}
        >
          <Grid item sx={1}>
            <img src={userImg} alt="img"  width="40px" height="auto" />
          </Grid>
          <Grid item xs={9}>
            <TextField
              type="text"
              name="message"
              value={message}
              fullWidth
              placeholder="Add a comment"
              onChange={oninputChange}
            />{" "}
          </Grid>
          <Grid item sx={1}>
            <Button type="submit" variant="contained" fullWidth>
              Send
            </Button>
          </Grid>
        </Grid>
      </form>
    </>
  );
}

export default Comment;
