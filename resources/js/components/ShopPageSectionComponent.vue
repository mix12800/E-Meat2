<template>
    <section class="shop-page-section sec-pad">
        <div class="auto-container">
            <div class="row clearfix">
                <div class="col-lg-3 col-md-12 col-sm-12 sidebar-side">
                    <div class="sidebar shop-sidebar">
                        <div class="sidebar-widget category-widget">
                            <div class="widget-title">
                                <h3>Categories</h3>
                            </div>
                            <div class="widget-content">
                                <ul class="category-list clearfix">
                                    <li>
                                        <i class="flaticon-right"></i
                                        ><a
                                            href="shop-details.html"
                                            class="active"
                                            >Flank steak</a
                                        >
                                    </li>
                                    <li>
                                        <i class="flaticon-right"></i
                                        ><a href="shop-details.html"
                                            >Top round roast</a
                                        >
                                    </li>
                                    <li>
                                        <i class="flaticon-right"></i
                                        ><a href="shop-details.html"
                                            >Chuck steak</a
                                        >
                                    </li>
                                    <li>
                                        <i class="flaticon-right"></i
                                        ><a href="shop-details.html"
                                            >Rib steak</a
                                        >
                                    </li>
                                    <li>
                                        <i class="flaticon-right"></i
                                        ><a href="shop-details.html"
                                            >Beef steak</a
                                        >
                                    </li>
                                    <li>
                                        <i class="flaticon-right"></i
                                        ><a href="shop-details.html"
                                            >Life Basics Cacay Oil</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="sidebar-widget filter-widget">
                            <div class="widget-title">
                                <h3>Filter</h3>
                            </div>
                            <div class="range-slider clearfix">
                                <div class="price-range-slider"></div>
                                <div class="clearfix">
                                    <div class="title"></div>
                                    <div class="input">
                                        <input
                                            type="text"
                                            class="property-amount"
                                            name="field-name"
                                            readonly
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="sidebar-widget sidebar-tags">
                            <div class="widget-title">
                                <h3>Product tags</h3>
                            </div>
                            <div class="widget-content">
                                <ul class="tags-list clearfix">
                                    <li><a href="shop-1.html">Beef</a></li>
                                    <li><a href="shop-1.html">Pork</a></li>
                                    <li>
                                        <a href="shop-1.html">Chicken</a>
                                    </li>
                                    <li>
                                        <a href="shop-1.html">Sausage</a>
                                    </li>
                                    <li><a href="shop-1.html">Lamb</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-9 col-md-12 col-sm-12 content-side">
                    <div class="our-shop">
                        <div class="row clearfix">
                            <template v-for="product in products.data">
                                <!--Карточка товара -->
                                <div
                                    class="col-lg-4 col-md-6 col-sm-12 shop-block"
                                >
                                    <div class="shop-block-one">
                                        <div class="inner-box">
                                            <figure class="image-box">
                                                <img
                                                    :src="
                                                        'storage/' +
                                                        product.photo
                                                    "
                                                    alt=""
                                                />
                                                <ul class="list clearfix">
                                                    <li>
                                                        <a
                                                            @click.prevent="
                                                                ChangePage('ShopDetailsPage')
                                                            "
                                                            href="#"
                                                            ><i
                                                                class="bi bi-info-square"
                                                            ></i
                                                        ></a>
                                                    </li>
                                                    <li>
                                                        <a
                                                            @click.prevent="
                                                                ChangePage('ShopDetailsPage')
                                                            "
                                                            href="#"
                                                            >Подробнее</a
                                                        >
                                                    </li>
                                                </ul>
                                            </figure>
                                            <div class="lower-content">
                                                <h6>
                                                    <a href="#"
                                                        >{{ product.title }}
                                                    </a>
                                                </h6>
                                                <span>
                                                    {{
                                                        product.category.name
                                                    }}</span
                                                >

                                                <span class="price"
                                                    >$ {{ product.price }}</span
                                                >
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- Конец карточки товара -->
                            </template>
                        </div>
                        <div class="pagination-wrapper centred">
                            <ul class="pagination clearfix">
                                <template v-for="PageBtn in products.links">
                                    <li v-if="!isNaN(parseInt(PageBtn.label))">
                                        <a
                                            href="#"
                                            @click.prevent="
                                                GetProducts(PageBtn.label)
                                            "
                                            :class="{ active: PageBtn.active }"
                                            >{{ PageBtn.label }}</a
                                        >
                                    </li>
                                </template>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "ShopPageSectionComponent",
    props: ["server", "ChangePage"],
    data() {
        return {
            products: [],
        };
    },

    mounted() {
        this.GetProducts();
    },

    methods: {
        GetProducts(page = 1) {
            this.server("/products/shop?page=" + page)
                .then((result) => {
                    this.products = result.products;
                })
                .catch((error) => console.error(error));
        },
    },
};
</script>
