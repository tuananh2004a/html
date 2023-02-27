let blogs = [
    {
        image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x675.jpg",
        name: "Blog title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quae aliquid ullam atque delectus cupiditate libero doloribus facere tempora repellendus esse quo maiores ipsum reprehenderit impedit voluptate voluptatibus nostrum excepturi"
    },
    {
        image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x675.jpg",
        name: "Blog title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quae aliquid ullam atque delectus cupiditate libero doloribus facere tempora repellendus esse quo maiores ipsum reprehenderit impedit voluptate voluptatibus nostrum excepturi"
    },
    {
        image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x675.jpg",
        name: "Blog title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quae aliquid ullam atque delectus cupiditate libero doloribus facere tempora repellendus esse quo maiores ipsum reprehenderit impedit voluptate voluptatibus nostrum excepturi"
    },
    {
        image: "https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x675.jpg",
        name: "Blog title",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quae aliquid ullam atque delectus cupiditate libero doloribus facere tempora repellendus esse quo maiores ipsum reprehenderit impedit voluptate voluptatibus nostrum excepturi"
    }
];

let html = "";
for (let menu of blogs) {
    html += `<div class="container">
    <div class="blog__item">
        <img src="https://wiki.matbao.net/wp-content/uploads/2019/09/blog-la-gi-2-1200x675.jpg" alt="">
        <h3>Blog title</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, quae aliquid ullam atque delectus cupiditate libero doloribus facere tempora repellendus esse quo maiores ipsum reprehenderit impedit voluptate voluptatibus nostrum excepturi.</p>
    </div>
</div>`
};  

        document.getElementById("blogs").innerHTML = html;
