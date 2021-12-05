function solve(eq) {
  return eq.split("/").join(" / ")
    .split("+").join(" + ")
    .split("*").join(" * ")
    .split("-").join(" - ")
    .split(" ").reverse().join("");
}
