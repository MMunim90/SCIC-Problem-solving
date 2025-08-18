function capitalizeWord(str) {
  let AfterCapitalize = str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

    return AfterCapitalize;
}

console.log(capitalizeWord("hello munim"));
