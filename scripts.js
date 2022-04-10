const $sections = document.querySelectorAll('.sections section');

const $about = document.querySelector('.about');
const $closeButton = document.querySelector('.about img');
$closeButton.addEventListener('click', e => e.target.parentNode.style.display = "none");

const $title = document.getElementById('title');
const $text = document.getElementById('text')
const $author = document.getElementById('author');

const titles = {
    0: "Switzerland",
    1: "Leysin American School",
    2: "Budgets and Burocracit"
}

const texts = {
    0:  `
    Switzerland has a great cultural diversity thanks to its geographical location between countries such as Germany, France, Italy, Austria and Liechtenstein, which makes for a unique culture! It has an extensive tradition in music, crafts and museums. Perfect for art lovers like me, as Switzerland is among the countries with the most museums by capital. Swedish architecture is mostly influenced by Romanticism, in addition to the main painters being part of the concrete art movement. It is also known for its handicrafts and, mainly, for watchmaking. The luxury watch industry in Switzerland has an excellent reputation for craftsmanship with watch brands.

    What caught my attention in the country was the cuisine, Switzerland is a gastronomic paradise, they are influenced by Italy and France. Surely what stood out the most during my time there were the cheeses and chocolates, my favorite cheese being the gruyere. In addition, the coolest thing is that brands like Nestlé, Toblerone and Frey are produced there, giving us the opportunity to buy the chocolates directly from the factory.
    `,
    1: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla metus, lobortis in sollicitudin lobortis, interdum eu orci. Sed eget sollicitudin tellus, quis bibendum mauris. Integer sed est scelerisque, faucibus est sed, molestie neque. Vivamus id pharetra ipsum. In nec risus quis libero pharetra aliquam ut a elit. Praesent ut massa eros. Phasellus ac lorem nec arcu ornare lacinia. Integer rhoncus aliquam dui, sit amet porttitor ipsum ornare eu. Phasellus feugiat tortor turpis. Donec pulvinar, nisi a auctor sagittis, enim felis maximus elit, in congue nisl leo vel massa. Quisque vitae iaculis elit, eu varius nibh. Sed turpis velit, ullamcorper id mauris eget, faucibus eleifend dolor. Sed molestie orci quis fermentum interdum. Duis auctor bibendum odio. Mauris ut bibendum ex. Suspendisse placerat, ex non fermentum tincidunt, sapien odio blandit erat, vitae euismod tellus ex dignissim ante.

    Etiam in diam lectus. Donec sagittis tortor et faucibus dapibus. Vestibulum suscipit ornare metus, non imperdiet neque sagittis ac. Cras pretium nisl eget convallis imperdiet. Sed id ex malesuada lacus dapibus tristique ac eget urna. Duis id mauris dui. Maecenas in volutpat libero. Pellentesque ultricies a metus ac varius. Donec massa mauris, fermentum id dui eu, blandit congue ex. Nam interdum dignissim viverra. Mauris iaculis a lorem ac hendrerit. Aenean tincidunt rhoncus velit sit amet consequat. Ut at turpis congue, commodo dolor nec, interdum dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus dui, ac ultricies augue.
    
    Morbi interdum a dolor non ullamcorper. Donec ac sem eros. Curabitur feugiat est fringilla sem maximus, vel fermentum felis mollis. Etiam pellentesque ultricies auctor. Mauris ligula lectus, commodo nec iaculis at, vestibulum nec massa. Donec enim diam, blandit ut metus quis, efficitur ultricies lectus. Nam sed laoreet tortor. Aenean fermentum sed sem eget facilisis. Donec eleifend rhoncus ante, vitae consequat lectus porta quis.
    
    Nulla non aliquam purus. Nam iaculis consectetur mauris, euismod tempus risus lobortis sit amet. In libero libero, semper vitae magna a, suscipit pretium tortor. Vestibulum massa ante, venenatis quis nunc bibendum, lacinia dictum sapien. Ut in varius nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pharetra sapien vitae tellus pharetra pulvinar. Donec et posuere risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pharetra sed sem nec tempus. Curabitur eleifend semper diam at lacinia. Sed magna diam, eleifend sit amet dui non, aliquet lobortis tortor. Maecenas aliquam posuere est sed lobortis.
    
    Donec eget urna at neque iaculis imperdiet at aliquam urna. In leo neque, blandit sed metus ac, gravida dapibus nisl. Vestibulum interdum volutpat ante, pulvinar sagittis lectus aliquet id. Aliquam consequat dui eget enim lobortis, sit amet maximus enim gravida. In eu semper leo. Nullam a euismod dolor. Aliquam interdum erat justo, sit amet ultricies enim sagittis sed.`,
    2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nulla metus, lobortis in sollicitudin lobortis, interdum eu orci. Sed eget sollicitudin tellus, quis bibendum mauris. Integer sed est scelerisque, faucibus est sed, molestie neque. Vivamus id pharetra ipsum. In nec risus quis libero pharetra aliquam ut a elit. Praesent ut massa eros. Phasellus ac lorem nec arcu ornare lacinia. Integer rhoncus aliquam dui, sit amet porttitor ipsum ornare eu. Phasellus feugiat tortor turpis. Donec pulvinar, nisi a auctor sagittis, enim felis maximus elit, in congue nisl leo vel massa. Quisque vitae iaculis elit, eu varius nibh. Sed turpis velit, ullamcorper id mauris eget, faucibus eleifend dolor. Sed molestie orci quis fermentum interdum. Duis auctor bibendum odio. Mauris ut bibendum ex. Suspendisse placerat, ex non fermentum tincidunt, sapien odio blandit erat, vitae euismod tellus ex dignissim ante.

    Etiam in diam lectus. Donec sagittis tortor et faucibus dapibus. Vestibulum suscipit ornare metus, non imperdiet neque sagittis ac. Cras pretium nisl eget convallis imperdiet. Sed id ex malesuada lacus dapibus tristique ac eget urna. Duis id mauris dui. Maecenas in volutpat libero. Pellentesque ultricies a metus ac varius. Donec massa mauris, fermentum id dui eu, blandit congue ex. Nam interdum dignissim viverra. Mauris iaculis a lorem ac hendrerit. Aenean tincidunt rhoncus velit sit amet consequat. Ut at turpis congue, commodo dolor nec, interdum dui. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed maximus dui, ac ultricies augue.
    
    Morbi interdum a dolor non ullamcorper. Donec ac sem eros. Curabitur feugiat est fringilla sem maximus, vel fermentum felis mollis. Etiam pellentesque ultricies auctor. Mauris ligula lectus, commodo nec iaculis at, vestibulum nec massa. Donec enim diam, blandit ut metus quis, efficitur ultricies lectus. Nam sed laoreet tortor. Aenean fermentum sed sem eget facilisis. Donec eleifend rhoncus ante, vitae consequat lectus porta quis.
    
    Nulla non aliquam purus. Nam iaculis consectetur mauris, euismod tempus risus lobortis sit amet. In libero libero, semper vitae magna a, suscipit pretium tortor. Vestibulum massa ante, venenatis quis nunc bibendum, lacinia dictum sapien. Ut in varius nisl. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus pharetra sapien vitae tellus pharetra pulvinar. Donec et posuere risus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque pharetra sed sem nec tempus. Curabitur eleifend semper diam at lacinia. Sed magna diam, eleifend sit amet dui non, aliquet lobortis tortor. Maecenas aliquam posuere est sed lobortis.
    
    Donec eget urna at neque iaculis imperdiet at aliquam urna. In leo neque, blandit sed metus ac, gravida dapibus nisl. Vestibulum interdum volutpat ante, pulvinar sagittis lectus aliquet id. Aliquam consequat dui eget enim lobortis, sit amet maximus enim gravida. In eu semper leo. Nullam a euismod dolor. Aliquam interdum erat justo, sit amet ultricies enim sagittis sed.`
}

const authors = {
    0: "Isabella",
    1: "Isabelly",
    2: "Sofia"
}

$sections.forEach((el, i) => el.addEventListener('click', () => {
    if ($about.style.display == "none") {
        $about.style.display = "block"
    }

    window.location.href = "#more";

    $title.innerText = titles[i];
    $text.innerText = texts[i];
    $author.innerText = authors[i];
}));