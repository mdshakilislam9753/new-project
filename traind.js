// Product Data
const products = [
  {
    id: 1,
    title: "Fjallraven Backpack",
    price: 109.95,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
    rating: { rate: 3.9 }
  },
  {
    id: 2,
    title: "Mens Casual Premium T-Shirts",
    price: 22.3,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
    rating: { rate: 4.1 }
  },
  {
    id: 3,
    title: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
    rating: { rate: 4.7 }
  }
];

const container = document.getElementById("trending-container");

products.forEach(product => {

  const card = `
    <div class="card bg-base-100 shadow-md hover:shadow-xl transition duration-300">
      
      <figure class="px-6 pt-6">
        <img src="${product.image}"
             alt="${product.title}"
             class="rounded-xl h-52 object-contain w-full"/>
      </figure>

      <div class="card-body text-base">

        <div class="flex justify-between items-center">
          <p class="text-gray-500 capitalize">${product.category}</p>
          <div class="text-orange-400">
            ⭐ ${product.rating.rate}
          </div>
        </div>

        <h2 class="card-title line-clamp-1">
          ${product.title}
        </h2>

        <p class="font-semibold">$${product.price}</p>

        <div class="card-actions justify-between mt-4">
          <button class="btn btn-outline btn-sm">
            Details
          </button>

          <button 
            onclick="addToCartHome('${product.title}', ${product.price})"
            class="btn btn-primary btn-sm">
            Buy Now
          </button>
        </div>

      </div>
    </div>
  `;

  container.innerHTML += card;
});
