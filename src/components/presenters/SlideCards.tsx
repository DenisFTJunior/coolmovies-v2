import * as React from "react";
import Button from "@mui/material/Button";
import { Stack } from "@mui/material";

type LocalState = {
  id?: string;
  [key: string]: any;
};

export default function SlideCards({
  itens,
  Card,
}: {
  itens: [];
  Card: (item: any) => JSX.Element;
}) {
  const [localValue, setLocalValue] = React.useState<LocalState[]>([]);

  React.useEffect(() => {
    if (itens) setLocalValue(itens.slice(0, 3));
  }, [itens]);

  const handleNextItem = () => {
    const nextHiddenItem = itens.find((i) => !localValue.includes(i));
    if (nextHiddenItem) {
      setLocalValue((prev) => [nextHiddenItem, ...prev]);
    }
  };

  const NextItemButtons = (
    <Button
      variant="contained"
      disabled={localValue.length >= (itens?.length || 0)}
      onClick={handleNextItem}
      sx={{ alignSelf: "center", just: "center" }}
    >
      Next Item
    </Button>
  );

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="flex-start"
      sx={{ margin: "5%", width: "100%" }}
      flexWrap="wrap"
    >
      {localValue.map((item) => Card(item))}
      {NextItemButtons}
    </Stack>
  );
}
