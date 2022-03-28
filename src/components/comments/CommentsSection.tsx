import CommentIcon from "@mui/icons-material/Comment";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

import { Comment } from "../../entities/comment";

const CommentsSection = ({ comments }: { comments: Comment[] }) => {
  const [open, setOpen] = useState(false);
  if (!open)
    return (
      <Box sx={{ margin: "0 5%" }}>
        <IconButton
          aria-label="Comment"
          size="large"
          onClick={() => setOpen(true)}
        >
          <CommentIcon />
        </IconButton>
      </Box>
    );
  return (
    <Box sx={{ width: "100%", background: "RGBA(136,38,138,0.5)" }}>
      <IconButton
        aria-label="Comment"
        size="large"
        sx={{ float: "right" }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </IconButton>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {comments.map((comment) => (
          <Paper sx={{ width: "80%", backgroundColor: "white" }}>
            <Typography variant="h6">{comment.title}</Typography>
            <Typography variant="body2">{comment.body}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default CommentsSection;
