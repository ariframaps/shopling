$(document).ready(function () {
    getJSON('All')

    $('.btn-light').click(function (e) {
        e.preventDefault();
        const category = $(this).text()
        $('.btn-light').removeClass('active');
        $(this).addClass('active')
        $('h1').text(category);
        getJSON(category)
    });
})

function getJSON(category) {
    $.getJSON("../data/data.json",
        function (data) {
            const products = data.products

            let htmlString = ''
            $.each(products, function (index, product) {
                if (category === 'All') {
                    htmlString += `
                            <div class="card shadow" style="width: 18rem;">
                                <img src="${product.thumbnail}" class="card-img-top" width='161px'>
                                <div class="card-body">
                                    <h5 class="card-title">${product.title}</h5>
                                    <p class="card-text">${product.description}</p>
                                    <h5 class="card-title">$${product.price}</h5>
                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>`;
                    return;
                }

                if (product.category === category.toLowerCase()) {
                    htmlString += `
                            <div class="card shadow" style="width: 18rem;">
                                <img src="${product.thumbnail}" class="card-img-top" width='161px'>
                                <div class="card-body">
                                    <h5 class="card-title">${product.title}</h5>
                                    <p class="card-text">${product.description}</p>
                                    <h5 class="card-title">$${product.price}</h5>
                                    <a href="#" class="btn btn-primary">Add to cart</a>
                                </div>
                            </div>`;
                }
            });
            $('.product-container').html(htmlString);
        }
    );
}