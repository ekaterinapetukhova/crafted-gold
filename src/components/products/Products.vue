<template>
  <section>
    <div class="custom-container flex flex-col gap-y-5 items-center">
      <MainTitle
        title="Our Beers"
        subtitle="Explore our collection of handcrafted brews, each crafted with care and passion."
      />
      <div class="w-full">
        <div class="flex gap-x-20 py-5 justify-center">
          <ProductsRadioButton
            v-for="category in productsCategories"
            :value="category"
            :label="category"
            v-model:radio="checkedRadio"
          />
        </div>
        <ProductsList :products="products[checkedRadio]" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import MainTitle from "../common/MainTitle.vue";
  import ProductsRadioButton from "./ProductsRadioButton.vue";
  import { ref } from "vue";
  import ProductsList from "./ProductsList.vue";
  import { type CategoryWithProducts, ProductsCategories } from "../../types/types.ts";

  const products: CategoryWithProducts = {
    [ProductsCategories.Ale]: [
      {
        slug: "golden-horizon-pale-ale",
        title: "Golden Horizon Pale Ale",
        content:
          "Golden Horizon Pale Ale is a perfectly balanced brew that combines a smooth malt backbone with vibrant hop character. Its radiant golden hue and frothy white head invite you in, while the aroma bursts with notes of citrus zest, pine, and a hint of tropical mango.\n" +
          "With an approachable 5.4% ABV, Golden Horizon Pale Ale is the perfect companion for any occasion, whether you're enjoying a sunny afternoon or a laid-back evening with friends.",
        price: 5,
      },
      {
        slug: "red-ember-amber-ale",
        title: "Red Ember Amber Ale",
        content:
          "Red Ember Amber Ale radiates warmth with its rich amber hue and a creamy off-white head. Its inviting aroma reveals notes of toasted caramel, baked bread, and a touch of toffee, balanced by a subtle hint of citrusy hops. The flavor is a perfect blend of sweet and savory malt character, offering layers of caramel, roasted nuts, and a whisper of dried fruit. A delicate hop bitterness rounds out the profile, adding a crisp, clean finish that lingers just long enough.",
        price: 6.5,
      },
      {
        slug: "nutwood-brown-ale",
        title: "Nutwood Brown Ale",
        content:
          "Nutwood Brown Ale is a rich, malty brew with a deep chestnut-brown hue and a creamy, off-white head. Its aroma greets you with warm notes of toasted hazelnuts, caramel, and a hint of dark cocoa.\n" +
          "The flavor profile is smooth and satisfying, blending roasted malt sweetness with subtle hints of toffee, coffee, and a touch of dried fig. Balanced by a gentle earthy hop bitterness, Nutwood Brown Ale delivers a medium-bodied mouthfeel with a soft, velvety finish.",
        price: 5.5,
      },
      {
        slug: "hoppy-haven-ipa",
        title: "Hoppy Haven IPA",
        content:
          "Hoppy Haven IPA is a bold and refreshing brew that commands attention with its golden-orange hue and a frothy white head. Bursting with aromas of juicy citrus, pine resin, and tropical mango, it invites you to explore a hop-forward adventure. Grapefruit, passionfruit, and a hint of apricot dominate the palate, supported by a crisp, biscuity malt backbone. The finish leaving a pleasant bitterness that lingers just enough to keep you coming back.",
        price: 5,
      },
    ],
    [ProductsCategories.Lager]: [
      {
        slug: "copper-ridge-ambe- lager",
        title: "Copper Ridge Amber Lager",
        content:
          "Copper Ridge Amber Lager is a well-balanced and smooth lager that captivates with its rich amber hue and light tan head. On the palate, Copper Ridge Amber Lager delivers a refined malt-forward flavor, featuring rich notes of toffee, biscuit, and a gentle nutty sweetness. The malt character is perfectly balanced with a light hop bitterness, creating a crisp and refreshing finish that makes this lager both flavorful and easy to drink.",
        price: 4.5,
      },
      {
        slug: "midnight-cascade-dark-lager",
        title: "Midnight Cascade Dark Lager",
        content:
          "Midnight Cascade Dark Lager is a smooth, full-bodied brew with a deep, dark brown color and a creamy, light tan head. The flavor profile is equally complex, with deep malt sweetness balancing perfectly with roasted flavors of coffee and cocoa. A subtle caramel undertone adds depth, while a gentle hop bitterness provides a crisp finish, ensuring the beer doesn’t feel overly heavy.",
        price: 6.5,
      },
      {
        slug: "trappist-gold-belgian-ale",
        title: "Trappist Gold Belgian Ale",
        content:
          "Trappist Gold Belgian Ale is a rich and flavorful brew that captures the essence of Belgian brewing tradition. Its bright golden color is complemented by a fluffy white head, while its aroma is a captivating mix of fruity esters, honey, and a hint of spice from the Belgian yeast. The flavor profile is complex and balanced, with notes of ripe pears, apples, and honeyed sweetness, balanced by a subtle peppery spice.",
        price: 6,
      },
    ],
    [ProductsCategories.WheatBeers]: [
      {
        slug: "snowveil-belgian-white",
        title: "Snowveil Belgian White",
        content:
          "Snowveil Belgian White is a classic, unfiltered wheat beer with a hazy golden appearance and a bright white, pillowy head. Its inviting aroma features a delicate medley of orange zest, coriander spice, and a faint floral note, courtesy of traditional Belgian brewing techniques.",
        price: 8,
      },
      {
        slug: "sunrise-wheat-ale",
        title: "Sunrise Wheat Ale",
        content:
          "Sunrise Wheat Ale is a vibrant and refreshing wheat beer with a hazy golden hue and a soft, white head. This wheat ale offers a clean and crisp profile, with bright citrus notes from the hops and a light bready character from the wheat malt. On the palate, it’s smooth and slightly tart, with a touch of sweetness that gives way to a pleasantly dry and refreshing finish. Its medium carbonation and light body make it an easy-drinking choice for any occasion.",
        price: 5,
      },
      {
        slug: "golden-harvest-wheat-ale",
        title: "Golden Harvest Wheat Ale",
        content:
          "Golden Harvest Wheat Ale is a crisp and refreshing beer that shines with a bright golden hue and a gentle, creamy white head. Crafted with a blend of wheat and pale malts, its aroma bursts with notes of fresh-baked bread, orange blossom, and a hint of honey, giving it an inviting and warm character. The flavor profile is smooth and well-rounded, featuring a soft malt sweetness balanced by light citrusy hop notes.",
        price: 4.5,
      },
    ],
    [ProductsCategories.Stouts]: [
      {
        slug: "ironclad-stout",
        title: "Ironclad Stout",
        content:
          "Ironclad Imperial Stout is a bold and indulgent brew with a jet-black appearance and a thick, mocha-colored head. Its robust aroma draws you in with rich notes of dark chocolate, roasted coffee, and a hint of molasses, accented by a whisper of vanilla and dark cherry.",
        price: 7,
      },
      {
        slug: "velvet-cream-milk-stout",
        title: "Velvet Cream Milk Stout",
        content:
          "Velvet Cream Milk Stout is a smooth and luscious beer with a deep ebony color and a creamy tan head. Its aroma is rich and inviting, offering notes of roasted coffee, milk chocolate, and a subtle sweetness reminiscent of caramelized sugar. On the palate, this stout delivers a silky texture and a balanced flavor profile. Sweet lactose sugars provide a velvety creaminess, complementing the roasted malts that bring out flavors of cocoa, espresso, and toffee.",
        price: 7,
      },
    ],
  };

  const productsCategories = Object.keys(products);

  // Ref do ustawienia wybranego radio buttonu

  const checkedRadio = ref(ProductsCategories.Ale);
</script>
