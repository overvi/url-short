import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Urls from "./Urls";
import { useList } from "./zustand/list";

interface Data {
  originalUrl: string;
  shortUrl: string;
}

const InputField = () => {
  const schema = z.object({
    url: z
      .string({ invalid_type_error: "The Url is invalid" })
      .url({ message: "Please add a link" }),
  });

  type valid = z.infer<typeof schema>;

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<valid>({
    resolver: zodResolver(schema),
  });

  const [originalUrl, setOriginalurl] = useState("");
  const [newUrl, setNewUrl] = useState("");

  const FetchShortUrl = async () => {
    try {
      const res = await fetch(
        `https://tinyurl.com/api-create.php?url=${originalUrl}`
      );

      const data = await res.text();
      setNewUrl(data);
    } catch (e) {
      console.log(e);
    }
  };

  const { setCopy } = useList();
  return (
    <>
      <form
        className="link__box"
        onClick={handleSubmit((data) => {
          reset();
          setOriginalurl(data.url);
          FetchShortUrl();
          setCopy(false);
        })}
      >
        <div>
          <input
            {...register("url")}
            placeholder="Shorten a link here..."
            type="text"
          />
          {errors.url && <p className="error-text">{errors.url.message}</p>}
        </div>
        <button>shorten it!</button>
      </form>
      <Urls originalUrl={originalUrl} newUrl={newUrl} />
    </>
  );
};

export default InputField;
