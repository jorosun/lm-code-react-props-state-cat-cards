import cat1 from "../assets/images/cat1.jpg";
import cat2 from "../assets/images/cat2.jpg";
import cat3 from "../assets/images/cat3.jpg";
import cat4 from "../assets/images/cat4.jpg";
import cat5 from "../assets/images/cat5.jpg";
import cat6 from "../assets/images/cat6.jpg";
import cat7 from "../assets/images/cat7.jpg";
import cat8 from "../assets/images/cat8.jpg";
import cat9 from "../assets/images/cat9.jpg";
import cat10 from "../assets/images/cat10.jpg";
import cat11 from "../assets/images/cat11.jpg";
import cat12 from "../assets/images/cat12.jpg";

export const images = [
  {
    image: cat1,
    altText: "Black cat with white chest",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "amblin",
    attributionUrl: "https://www.flickr.com/people/amblin/",
  },
  {
    image: cat2,
    altText: "Light ginger and white cat with big eyes",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "ivva",
    attributionUrl: "https://www.flickr.com/people/ivva/",
  },
  {
    image: cat3,
    altText: "Tabby cat",
    licenceType: "CC BY-ND 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-nd/2.0/",
    attributionName: "Rachele Pettarelli Ph",
    attributionUrl: "https://www.flickr.com/people/rachephotos/",
  },
  {
    image: cat4,
    altText: "upside down pucture of just cats face and blue background",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "renarl",
    attributionUrl: "https://www.flickr.com/people/renarl/",
  },
  {
    image: cat5,
    altText: "ginger tabby cat",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "x-oph",
    attributionUrl: "https://www.flickr.com/people/x-oph/",
  },
  {
    image: cat6,
    altText: "picture of a grey cat with shocked look on face ",
    licenceType: "CC BY-ND 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-nd/2.0/",
    attributionName: "arrathoonlaa@att.net",
    attributionUrl: "https://www.flickr.com/people/21851382@N04/",
  },
  {
    image: cat7,
    altText: "Fluffy gey cat with blue background",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "pavlovskyy",
    attributionUrl: "https://www.flickr.com/people/pavlovskyy/",
  },
  {
    image: cat8,
    altText: "White and ginger cat",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "AleGranholm",
    attributionUrl: "https://www.flickr.com/people/darthale/",
  },
  {
    image: cat9,
    altText: "White cat that looks like its wearing makeup",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "Sardonic G",
    attributionUrl: "https://www.flickr.com/people/24039825@N06/",
  },
  {
    image: cat10,
    altText: "Grey tabby cat that is stretching",
    licenceType: "CC BY 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by/2.0/",
    attributionName: "www.metaphoricalplatypus.com",
    attributionUrl: "https://www.flickr.com/people/29638108@N06/",
  },
  {
    image: cat11,
    altText: "Fluffy ginger cat asleep",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "abraham.williams",
    attributionUrl: "https://www.flickr.com/people/4braham/",
  },
  {
    image: cat12,
    altText: "face of white fluffy cat looking angry",
    licenceType: "CC BY-SA 2.0",
    licenceUrl: "https://creativecommons.org/licenses/by-sa/2.0/",
    attributionName: "x-oph",
    attributionUrl: "https://www.flickr.com/people/x-oph/",
  },
];

interface CatImageProps {
  image: string;
  altText: string;
  licenceType: string;
  licenceUrl: string;
  attributionName?: string;
  attributionUrl?: string;
}

const CatImage: React.FC<CatImageProps> = ({
  image,
  altText,
  licenceType,
  licenceUrl,
  attributionName,
  attributionUrl,
}) => (
  <>
    <img className="card__image" src={image} alt={altText} />
    <p className="card__text__small">
      Image licenced under <a href={licenceUrl}>{licenceType}</a>
      {attributionName && (
        <>
          &nbsp;by <a href={attributionUrl}>{attributionName}</a>
        </>
      )}
    </p>
  </>
);

export default CatImage;
