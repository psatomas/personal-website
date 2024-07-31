import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Portfolio.css';
import calculatorImage from "../images/calculator.png";
import amazonBestSellerImage from "../images/amazon_best_sellers.png";
import cssProjectImage from "../images/css_project.png";
import drumMachineImage from "../images/drum_machine.png";
import htlmProjectImage from "../images/html_project.png";
import markdownPreviewerImage from "../images/markdown_previewer.png";
import pomodoroClockImage from "../images/pomodoro_clock.png";
import productLandPageImage from "../images/product_landing_page.png";
import randomQuoteMachineImage from "../images/random_quote_machine.png";
import surveyFormImage from "../images/survey_form.png";
import tacoShopCssImage from "../images/taco_shop_css_project.png";
import technicalDocumentationImage from "../images/technical_documentation_page.png";
import tomasAraujoPortfolioImage from "../images/tomas_araujo_portfolio.png";
import tributePageImage from "../images/tribute_page.png";
import weatherAppImage from "../images/weather_app.png";

const Portfolio = () => {
  const slides = [
    {
      image: calculatorImage,
      link: "https://calculator-application-tomas.netlify.app/",
      alt: "Calculator",
    },
    {
      image: amazonBestSellerImage,
      link: "https://react-project-amazon-best-sellers.netlify.app/",
      alt: "Amazon Best Seller",
    },
    {
      image: cssProjectImage,
      link: "https://psatomas.github.io/css-project/",
      alt: "CSS Project",
    },
    {
      image: drumMachineImage,
      link: "https://drum-machine-tomas.netlify.app/",
      alt: "Drum Machine",
    },
    {
      image: htlmProjectImage,
      link: "https://psatomas.github.io/html-project/",
      alt: "HTML Project",
    },
    {
      image: markdownPreviewerImage,
      link: "https://psatomas.github.io/markdown-previewer/",
      alt: "Markdown Previewer",
    },
    {
      image: pomodoroClockImage,
      link: "https://pomodoro-clock-tomas.netlify.app/",
      alt: "Pomoro Clock",
    },
    {
      image: productLandPageImage,
      link: "https://psatomas.github.io/product-landing-page/",
      alt: "Product Land Page",
    },
    {
      image: randomQuoteMachineImage,
      link: "https://psatomas.github.io/random-quote-machine/",
      alt: "Random Quote Machine",
    },
    {
      image: surveyFormImage,
      link: "https://psatomas.github.io/survey-form/",
      alt: "Survey Form",
    },
    {
      image: tacoShopCssImage,
      link: "https://psatomas.github.io/taco-shop-css-project/",
      alt: "Taco Shop CSS",
    },
    {
      image: technicalDocumentationImage,
      link: "https://psatomas.github.io/Technical-Documentation-Page/",
      alt: "Technical Documentation",
    },
    {
      image: tomasAraujoPortfolioImage,
      link: "https://psatomas.github.io/tomas-araujo-portfolio/",
      alt: "Tomás Araújo Portfolio",
    },
    {
      image: tributePageImage,
      link: "https://psatomas.github.io/bruce-lee-tribute-page/",
      alt: "Bruce Lee Tribute Page",
    },
    {
      image: weatherAppImage,
      link: "https://psatomas.github.io/wheater-app/",
      alt: "Weather App",
    },

  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear"
  };

  return (
    <div className='portfolio' id='portfolio'>
      <h1>portfolio</h1>
      <Slider className="slider" {...settings}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <a href={slide.link} target="_blank" rel="noopener noreferrer">
              <img className="portfolio-image" src={slide.image} alt={slide.alt} />
            </a>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Portfolio;