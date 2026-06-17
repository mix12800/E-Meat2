<template>
    <section
        class="page-title"
        style="background-image: url(assets/images/background/page-title.jpg)"
    >
        <div class="auto-container">
            <div class="content-box">
                <div class="title-box">
                    <h1>Стандартный блог</h1>
                </div>
                <ul class="bread-crumb clearfix">
                    <li><a href="index.html" @click.prevent="ChangePage('HomePage')">Главная</a></li>
                    <li>Стандартный блог</li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "PageTitleBlogComponent",
    props: ["ChangePage"],
};
</script>
