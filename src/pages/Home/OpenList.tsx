import { bar } from "./images";
import { useList } from "./zustand/list";

const OpenList = () => {
  const { openList, setOpenList } = useList();
  const navList = document.querySelector(".nav__items--mobile");

  return (
    <img
      onClick={() => {
        setOpenList(openList ? false : true);

        openList
          ? navList?.classList.add("open")
          : navList?.classList.remove("open");
      }}
      className="open-list"
      src={bar}
      alt=""
    />
  );
};

export default OpenList;
