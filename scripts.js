const $sections = document.querySelectorAll('.sections section');

const $about = document.querySelector('.about');
const $closeButton = document.querySelector('.about img');
$closeButton.addEventListener('click', e => {
    e.target.parentNode.style.display = "none";
    window.location.href = "#";
});

const $title = document.getElementById('title');
const $text = document.getElementById('text')
const $author = document.getElementById('author');

const titles = {
    0: "Switzerland",
    1: "Leysin American School",
    2: "Budgets and Burocracit"
}

const texts = {
    0:  `Switzerland has a great cultural diversity thanks to its geographical location between countries such as Germany, France, Italy, Austria and Liechtenstein, which makes for a unique culture! It has an extensive tradition in music, crafts and museums. Perfect for art lovers like me, as Switzerland is among the countries with the most museums by capital. Swedish architecture is mostly influenced by Romanticism, in addition to the main painters being part of the concrete art movement. It is also known for its handicrafts and, mainly, for watchmaking. The luxury watch industry in Switzerland has an excellent reputation for craftsmanship with watch brands.

    What caught my attention in the country was the cuisine, Switzerland is a gastronomic paradise, they are influenced by Italy and France. Surely what stood out the most during my time there were the cheeses and chocolates, my favorite cheese being the gruyere. In addition, the coolest thing is that brands like Nestlé, Toblerone and Frey are produced there, giving us the opportunity to buy the chocolates directly from the factory.`,
    1: `Studying at Leysin was certainly one of the best choices I made in my life, a unique and expensive experience, but worth it. There I met my friends who are even writing this blog with me. Although the official language of the city is French, everyone at the school knows English. There are several activities extracurriculars, I danced during the period and I really enjoyed it! The school maintains the form of a boarding school where they live approximately 500 students from all over the world.`,
    2: `The annoying but extremely necessary part of traveling to Switzerland is the documents. For student purposes I only needed my student visa, which I got at the Swiss Consulate here in Brazil before I even traveled.
 
    On my trip I took the economy flight which at the time was costing around R$6000.00, I only made 2 stops, I think the flight lasted around 12 to 18 hours I couldn't see it for sure because I slept through it all, it was a very smooth trip.
     
    What impressed me in Switzerland was its quality of life, so much so that in 2021 it was ranked as the country with the best quality of life in the world. Transport was very accessible and efficient, plus things were very cheap. The hospitals were all first rate and also the streets were very safe.`
}

const authors = {
    0: "Isabella",
    1: "Sofia",
    2: "Isabelly"
}

$sections.forEach((el, i) => el.addEventListener('click', () => {
    if ($about.style.display == "none") {
        $about.style.display = "block"
    }

    $title.innerText = titles[i];
    $text.innerText = texts[i];
    $author.innerText = authors[i];

    window.location.href = "#more";
}));