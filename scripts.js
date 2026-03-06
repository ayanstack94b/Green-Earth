const categoriesContainer = document.getElementById("categories-container");
const treesContainer = document.getElementById("trees-container");

async function loadCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/categories",
  );
  const data = await res.json();
  // console.log(data);

  data.categories.forEach((category) => {
    // console.log(category);
    const btn = document.createElement("button");
    btn.className = "btn btn-outline w-full";
    btn.textContent = category.category_name;
    categoriesContainer.appendChild(btn);
  });
}

async function loadTrees() {
  const res = await fetch("https://openapi.programming-hero.com/api/plants");
  const data = await res.json();
  displayTrees(data.plants);
}

function displayTrees(trees) {
  // console.log(trees);

  trees.forEach((tree) => {
    // console.log(tree);

    const card = document.createElement("div");
    card.className = "card bg-white shadow-sm";

    card.innerHTML = `
    
     <figure>
            <img class="h-48 w-full object-cover" src="${tree.image}
                                title="${tree.name}" />
                        </figure>
                        <div class="card-body">

                            <h2 class="card-title">${tree.name}</h2>

                            <p class="truncate">A card component has a figure, a body part, and inside body there are
                                title and actions
                                parts</p>

                            <!-- badge -->

                            <div class="badge badge-success justify-start badge-soft">${tree.category}</div>

                            <!-- btn flex div -->

                            <div class="flex justify-between items-center">
                                <h2 class="text-xl text-red-700 font-bold">$${tree.price}</h2>
                                <button class="btn bg-[#4ade80]">Buy Now</button>
                            </div>
                        </div>

    `;

    treesContainer.appendChild(card);
  });
}
loadTrees();
loadCategories();
