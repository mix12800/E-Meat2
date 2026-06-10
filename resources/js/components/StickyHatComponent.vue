<template>
    <div
        class="collapse navbar-collapse show clearfix"
        id="navbarSupportedContent"
    >
        <ul class="navigation clearfix">
            <li :class="{ current: page == 'HomePage' }">
                <a href="#" @click.prevent="ChangePage('HomePage')">Главная</a>
            </li>
            <li
                :class="{
                    current: page == 'AboutPage',
                }"
            >
                <a href="#" @click.prevent="ChangePage('AboutPage')">О нас</a>
            </li>
            <li
                class="dropdown"
                :class="{
                    current: page == 'TeamPage' || page == 'TestimonialPage',
                }"
            >
                <a href="#">Магазин</a>
                <ul>
                    <li>
                        <a
                            href="team.html"
                            @click.prevent="ChangePage('TeamPage')"
                            >Наша команда</a
                        >
                    </li>
                    <li>
                        <a
                            href="testimonial.html"
                            @click.prevent="ChangePage('TestimonialPage')"
                            >Отзывы</a
                        >
                    </li>
                </ul>
            </li>

            <li
                class="dropdown"
                :class="{
                    current: page == 'BlogPage',
                }"
            >
                <a href="#" @click.prevent="ChangePage('BlogPage')">Новости</a>
                <ul>
                    <li>
                        <a
                            href="blog.html"
                            @click.prevent="ChangePage('BlogPage')"
                            >Блог</a
                        >
                    </li>
                </ul>
            </li>
            <li
                :class="{
                    current: page == 'ContactPage',
                }"
            >
                <a
                    href="contact.html"
                    @click.prevent="ChangePage('ContactPage')"
                    >Контакты</a
                >
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name: "StickyHatComponent",
    props: ['ChangePage', 'page'],
};
</script>
