import CommentIcon from "@mui/icons-material/Comment";
import { Box, IconButton, Paper, Stack, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react";

import { Comment } from "../../entities/comment";
import Loading from "../helpers/Loading";

const CommentsSection = ({ comments }: { comments: Comment[] }) => {
  const [open, setOpen] = useState(false);

  if (!open)
    return (
      <Stack sx={{ margin: "0 5%" }} direction="row" justifyContent="flex-end">
        <IconButton
          aria-label="Comment"
          size="large"
          onClick={() => setOpen(true)}
        >
          <CommentIcon />
        </IconButton>
      </Stack>
    );

  if (!comments && open)
    return (
      <Box
        sx={{
          width: "100%",
          height: "32.5vh",
          background: "rgba(136,38,138,0.5)",
        }}
      >
        <Loading />
      </Box>
    );

  return (
    <Box
      sx={{
        width: "100%",
        height: "32.5vh",
        backgroundColor: "rgba(136,38,138,0.5)",
      }}
    >
      <IconButton
        aria-label="Comment"
        size="large"
        sx={{ float: "right" }}
        onClick={() => setOpen(false)}
      >
        <CloseIcon />
      </IconButton>
      <Stack direction="column" justifyContent="center" alignItems="center">
        {comments.length <= 0 && (
          <Typography variant="h6">Anyone comment found</Typography>
        )}
        {comments.map((comment) => (
          <Paper
            sx={{
              width: "80%",
              backgroundColor: "white",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6">{comment.title}</Typography>
            <Typography variant="body2">{comment.body}</Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
};

export default CommentsSection;
