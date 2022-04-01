import * as React from "react";
import Button from "@mui/material/Button";
import Collapse from "@mui/material/Collapse";
import { TransitionGroup } from "react-transition-group";
import { Stack } from "@mui/material";

export default function SlideCards({
  itens,
  Card,
}: {
  itens: [];
  Card: (item: any) => JSX.Element;
}) {
  const [localValue, setLocalValue] = React.useState([]);

  React.useEffect(() => {
    if (itens) itens.slice(0, 3);
  }, [itens]);

  const handleAddFruit = () => {
    const nextHiddenItem = itens.find((i) => !localValue.includes(i));
    if (nextHiddenItem) {
      setLocalValue((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const NextItemButtons = (
    <Button
      variant="contained"
      disabled={localValue.length >= (itens?.length || 0)}
      onClick={handleAddFruit}
      sx={{ alignSelf: "center", just: "center" }}
    >
      Next Item
    </Button>
  );

  return (
    <Stack
      direction="row"
      alignItems="flex-start"
      justifyContent="center"
      sx={{ margin: "5%" }}
      spacing={4}
      flexWrap="wrap"
    >
      <TransitionGroup>
        {localValue.map((item) => (
          <Collapse key={item}>{Card(item)}</Collapse>
        ))}
      </TransitionGroup>
      {NextItemButtons}
    </Stack>
  );
}
