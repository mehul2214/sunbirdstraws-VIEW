import React from "react";
import "./News.css";

import forbesImg from "../assets/MediaNews/ForbesIndia.jpeg";
import toiImg from "../assets/MediaNews/TimesofIndia.png";
import dwImg from "../assets/MediaNews/DWtravels.jpeg";
import hinduImg from "../assets/MediaNews/TheHinduLogo.png";
import sbsImg from "../assets/MediaNews/SBSMalayalam.webp";
import betterIndiaImg from "../assets/MediaNews/betterIndia.png";
import nsrcelHinduImg from "../assets/MediaNews/TheHinduLogo.png";
import HumansofbombayImg from "../assets/MediaNews/humansofbombay.png";

const newsItems = [
  {
    source: "Forbes India",
    date: "Jul 11, 2022",
    title:
      "Bengaluru English prof whose innovation is replacing single-use plastic straws",
    image: forbesImg,
    link: "https://www.forbesindia.com/audio/forbes-india-daily-tech-conver-sation/meet-the-bengaluru-english-prof-whose-innovation-is-replacing-singleuse-plastic-straws/77991",
  },
  {
    source: "The Times of India",
    date: "Sep 22, 2022",
    title:
      "English professor in Bengaluru innovates straws from coconut leaf, exports to 25 countries",
    image: toiImg,
    link: "https://timesofindia.indiatimes.com/city/bengaluru/english-prof-innovates-straw-from-coconut-leaf-exports-to-25-countries/articleshow/78223719.cms",
  },
  {
    source: "DW",
    title: "English professor makes straws made from waste coconut leaves",
    image: dwImg,
    link: "https://www.youtube.com/watch?v=q551KrZxu9Y",
  },
  {
    source: "The Hindu",
    date: "Oct 30, 2020",
    title: "Now, take a sip using straws made of fallen coconut leaves",
    image: hinduImg,
    link: "https://www.thehindu.com/sci-tech/energy-and-environment/now-take-a-sip-using-straws-made-of-fallen-coconut-leaves/article32971496.ece",
  },
  {
    source: "SBS Malayalam",
    title:
      "Sip coconut water with coconut palm straw: Malayalee man makes eco-friendly straws from coconut leaves to export to Australia",
    image: sbsImg,
    link: "https://www.sbs.com.au/language/malayalam/en/podcast-episode/sip-coconut-water-with-coconut-palm-straw-malayalee-makes-straws-from-coconut-palm-plans-to-export-to-australia/zms5qzrb8",
  },
  {
    source: "The Better India",
    date: "June 14, 2023",
    title:
      "Professor Makes 100% Biodegradable Straws Using Coconut Leaves, Has Sold 20 Million",
    image: betterIndiaImg,
    link: "https://thebetterindia.com/320826/bengaluru-professor-saji-varghese-makes-sunbird-straws-from-coconut-leaves-watch-video/",
  },
  {
    source: "The Hindu",
    date: "Feb 09, 2024",
    title:
      "NSRCEL at IIM-Bengaluru is incubating over 100 social impact ventures from eco-friendly innovations to education initiatives",
    image: nsrcelHinduImg,
    link: "https://www.thehindu.com/news/national/karnataka/nsrcel-at-iim-bengaluru-is-incubating-over-100-social-impact-ventures-from-eco-friendly-innovations-to-education-initiatives/article67830020.ece",
  },

  {
    source: "Humans of Bombay",
    title: "I’d always come to campus a little before my morning lecture...",
    image: HumansofbombayImg,
    link: "https://www.linkedin.com/posts/humans-of-bombay_nature-environment-ecofriendly-activity-6959379496319741952-1AJ0/?trk=public_profile",
  },
];

function News() {
  return (
    <section className="news-section">
      <h2 className="news-heading">Latest News & Highlights</h2>
      <p className="news-subtitle">
        Explore how Sunbird is making headlines across the globe.
      </p>

      <div className="news-grid">
        {newsItems.map((item, index) => (
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="news-card"
            key={index}
          >
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-info">
              <span className="news-meta">
                {item.source} {item.date && `• ${item.date}`}
              </span>
              <h3 className="news-title">{item.title}</h3>
              <span className="news-read">Read More →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default News;
