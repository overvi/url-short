import { useList } from "./zustand/list";

interface Props {
  originalUrl: string;
  newUrl: string;
}

const Urls = ({ originalUrl, newUrl }: Props) => {
  const handleCopy = () => {
    navigator.clipboard.writeText(newUrl);
  };

  const { copy, setCopy } = useList();

  return (
    <div style={{ display: originalUrl ? "" : "none" }} className="convertlink">
      <a href={originalUrl} target="_blank" className="convertlink__previous">
        {originalUrl}
      </a>
      <div className="divider"></div>
      <div className="flex-container">
        <a href={newUrl} target="_blank" className="convertlink__short">
          {newUrl}
        </a>
        <button
          onClick={() => {
            handleCopy();
            setCopy(true);
          }}
          className={["convert__button", copy && "copy-button"].join(" ")}
        >
          {copy ? "Copied!" : "Copy"}
        </button>
      </div>
    </div>
  );
};

export default Urls;
