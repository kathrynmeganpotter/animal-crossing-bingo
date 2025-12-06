import { Box, Typography } from "@mui/material";

type SquareProps = {
  name: string;
  photoImage: string;
  selected: boolean;
  size: number;
  onBingoSquareClick: () => void;
};

enum SquareSize {
  Size3 = 90,
  Size4 = 70,
  Size5 = 60,
  Size6 = 50,
}

export default function Square({
  name,
  photoImage,
  onBingoSquareClick,
  selected,
  size,
}: SquareProps) {
  const squareSize = SquareSize[`Size${size}`];

  return (
    <Box
      role="button"
      aria-pressed={selected}
      onClick={onBingoSquareClick}
      sx={{
        padding: "2px",
        position: "relative",
        display: "flex",
        border: "0.5px solid black",
        width: {
          xs: squareSize,
          sm: 100
        },
        height: {
          xs: squareSize,
          sm: 100
        },
        cursor: "pointer",
      }}
    >
      {photoImage && (
        <Box
          component="img"
          src={photoImage}
          alt={name}
          sx={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      )}
      {selected && (
        <Typography
          component="span"
          sx={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#FF0000B2",
            fontSize: {
              xs: "2rem",
              sm: "5rem"
            },
            zIndex: 2,
          }}
        >
          ✖
        </Typography>
      )}
      <Typography
        component="span"
        sx={(theme) => ({
          position: "absolute",
          bottom: 2,
          backgroundColor:
            theme.palette.mode === "dark"
              ? "#222222B2"
              : "#FFFFFFB2",
          padding: "0 4px",
          borderRadius: "4px",
          fontSize: "0.75rem",
        })}
      >
        {name}
      </Typography>
    </Box>
  );
}
