import axios from "axios";
import dayjs from 'dayjs';
import { ArticleRes } from "../types/article";
import { MEDIUM_NAME } from "../../secret";

const shortenDescription = (description: string) => {
  const defaultContinue = " Continue reading on Medium »";

  description = description
    ?.replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, "")
    .substring(0, 100);
  if (description.length <= 100 - defaultContinue.length) {
    description += defaultContinue;
  }
  description += "...";

  return description;
};

const getMediumArticles = async (username: string) => {
  try {
    const { data } = await axios.get<ArticleRes>(
      `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_NAME}`
    );

    let { items } = data || {};

    const article = items.map(
      ({ title, thumbnail, guid, pubDate, description, categories }) => {
        return {
          title: title,
          thumbnail: description
            ?.toString()
            .match(/<img[^>]+src="([^">]+)"/)![1],
          url: guid,
          date: dayjs(pubDate).format("YYYY - MMM DD"),
          description: shortenDescription(description),
          categories: categories,
        };
      }
    );

    return article;
  } catch (err) {
    console.log(err);
  }
};

export default getMediumArticles;
