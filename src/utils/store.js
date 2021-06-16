const state = {
  currPage: "home",
};

const setCurrPage = (page) => {
  return (state = { ...state, currPage: page });
};

export { state, setCurrPage };
