  const labels: { [index: string]: string } = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  function getLabelText(value) {
    return `${value} Star${value !== 1 ? "s" : ""}, ${labels[value]}`;
  }

  <Rating
  sx={{ alignItems: "end"}}
  name="hover-feedback"
  value={ranking}
  precision={0.5}
  getLabelText={getLabelText}
  onChange={(event, newValue) => {
    setRanking(newValue);
  }}
  onChangeActive={(event, newHover) => {
    setHover(newHover);
  }}
  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
/>
{ranking !== null && (
  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : ranking]}</Box>
)}