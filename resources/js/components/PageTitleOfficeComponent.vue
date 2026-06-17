<template>
    <section class="page-title page-title-image1">
        <div class="auto-container">
            <div class="content-box">
                <div class="title-box">
                    <h1>Личный кабинет</h1>
                </div>
                <ul class="bread-crumb clearfix">
                    <li><a href="index.html" @click.prevent="ChangePage('HomePage')">Главная</a></li>
                    <li>Личный кабинет</li>
                </ul>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "PageTitleOffice",
    props: ["ChangePage"],
};
</script>
