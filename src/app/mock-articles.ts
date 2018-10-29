import { Author } from './author.model';
import { Article} from './article.model';

export const ARTICLES: Article[] = [
  new Article("Why I No Longer Use Redux with React", "https://www.youtube.com/watch?v=pUlwhe-kmog", "youtube.com", new Author("ChefboyOG"), new Date(Date.now())),
  new Article("Share your automation stories", "https://www.indiehackers.com/forum/share-your-automation-stories-8e1ecff5d9", "indiehackers.com", new Author("gcatalfamo"), new Date(Date.now())),
  new Article("Bitcoin can push global warming above 2 C in a couple decades", "https://phys.org/news/2018-10-bitcoin-global-couple-decades.html?fbclid=IwAR38ZYJs34BVybWmia0sWSVqjse05OmObNiSW9_aKOAKk0BUKIB3WJ-vINQ", "phys.org", new Author( "castlenine"), new Date('2018-10-29T11:12:00')),
  new Article("The US Military Method to Fall Asleep in Two Minutes", "https://www.joe.co.uk/news/sleeping-tricks-197402", "joe.co.uk", new Author("knapalm"), new Date("2018-10-29T11:10:00")),
  new Article("This Northern California mountain lion is a serial killer – of horses", "http://www.latimes.com/local/lanow/la-me-modoc-county-lion-20181029-htmlstory.html", "latimes.com", new Author("ilamont"), new Date("2018-10-29T11:09:00")),
  new Article ("China Telecom using poisoned internet routes to suck up internet traffic", "https://boingboing.net/2018/10/26/bgp-pop-mitm.html", "boingboing.net", new Author("JackFaker"), new Date("2018-10-29T11:10:00")),
  new Article("12 factor apps revisited", "https://convox.com/blog/twelve-factor-revisited/", "convox.com", new Author("hnrc"), new Date("2018-10-29T11:10:00")),
  new Article("Building the Haunting of Hill House Door Knob Effect in JavaScript", "https://medium.com/@leemartin/building-the-haunting-of-hill-house-door-knob-effect-in-javascript-25f18b681e65?1", "medium.com", new Author("leemartin"), new Date("2018-10-29T11:10:00")),
  new Article("How a Sportsbook Stays in Business", "https://www.onecirclesix.com/article?post=how-a-sports-book-stays-in-business", "onecirclesix.com", new Author("isthispermanent"), new Date("2018-10-29T11:10:00")),
  new Article("Wave energy to power undersea data centers", "https://www.networkworld.com/article/3314597/data-center/wave-energy-to-power-undersea-data-centers.html", "networkworld.com", new Author("ilamont"), new Date("2018-10-29T11:10:00"))
];