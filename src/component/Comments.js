import { Button, TextField } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CloseIcon from "@mui/icons-material/Close";
import React from "react";
import { useState } from "react";
import userImg from "../images/avatars/image-juliusomo.png";
import Otherscomments from "./Otherscomments";
import { Grid } from "@mui/material";
import { Style } from "@material-ui/icons";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import { margin } from "@mui/system";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 280,
  bgcolor: "background.paper",
  border: "2px solid gray",
  borderRadius: "4px",
  boxShadow: 24,
  p: 2,
  color: "gray",
};  

const styleDeletComent = {
    color: "#324152" ,
}
 
const styleBtnDelet = {
    bgcolor: "#ed6468",
    '&:hover':{
     backgroundColor: '#ed6468',
    }
} 

const styleBtnCancel = {
    bgcolor: "#6c757d",
    '&:hover':{
     backgroundColor: '#6c757d',
    }
}

function Comment() {
  const [message, setMessage] = useState();
  const [isMessage, isSetMessage] = useState([]);
  const [isEditMessage, isSetEdtMessage] = useState(false);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
    setOpen(false);
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
        <Otherscomments
          isEditMessage={isEditMessage}
          isSetEdtMessage={isSetEdtMessage}
        />
        {isMessage.map((i) => {
          return (
            <Grid
              container
              spacing={2}
              bgcolor="white"
              p={1}
              marginTop="10px"
              marginLeft="10px"
              borderRadius={3}
            >
              <Grid item xs={9} display="flex" gap={2}>
                <item>
                  {" "}
                  {
                    <img src={i.userImg} alt="img" width="40px" height="auto" />
                  }{" "}
                </item>
                <item> {<b>juliusomo </b>} </item>
              </Grid>
              <Grid item sx={2}>
                <Button
                  variant="text"
                  color="error"
                  //   onClick={() => deletMessag(i.id)}
                  onClick={handleOpen}
                  startIcon={isEditMessage ? " " : <DeleteIcon />}
                >
                  {isEditMessage ? " " : "Delet"}
                </Button>

                <Button
                  variant="text"
                  onClick={() => editMessag(i.id)}
                  color={isEditMessage ? "error" : "info"}
                  startIcon={isEditMessage ? <CloseIcon /> : <EditIcon />}
                >
                  {isEditMessage ? "Cancel" : "Edit"}
                </Button>
              </Grid>
              <Grid item sx={6}>
                {i.userMessage}

                <div>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                      <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h2"
                      >
                        <strong sx={styleDeletComent}>{"Delete comment"} </strong>
                      </Typography>
                      <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {
                          "Are you sure you want to delete this comment? This will remove the comment and can’t be undone."
                        }
                      </Typography>
                      <Typography padding={0}>
                        <item>
                          <Button sx={styleBtnCancel}
                            variant="contained"
                            color="success" 
                            size="medium"
                            onClick={handleClose} 
                            style={{ margin: "10px 0 0 0" }}
                          >
                            {"No,Cancel"}
                          </Button>

                          <Button sx={styleBtnDelet}
                            variant="contained"
                            color="error"
                            size="medium"
                            onClick={() => deletMessag(i.id)} 
                            style={{ margin: "10px 0 0 15px" }}
                          >
                            {"Yes, Delete"}
                          </Button>
                        </item>
                      </Typography>
                    </Box>
                  </Modal>
                </div>
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
                    <Button
                      type="submit"
                      style={{ marginTop: "10px" }}
                      variant="contained"
                    >
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
            <img src={userImg} alt="img" width="40px" height="auto" />
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
