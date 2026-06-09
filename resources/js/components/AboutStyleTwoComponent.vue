<template>
    <section class="about-style-two">
        <div class="auto-container">
            <div class="row align-items-center clearfix">
                <div class="col-lg-6 col-md-12 col-sm-12 content-column">
                    <div id="content_block_2">
                        <div class="content-box">
                            <div class="sec-title style-two">
                                <span>О нас</span>
                                <h2>О нашей компании</h2>
                            </div>
                            <div class="text">
                                <p>
                                    Морковь Lorem ipsum, увеличенные скидки, но
                                    с возможностью просмотра в связи с работой и
                                    ожирением. Для получения дополнительной
                                    информации, пожалуйста, свяжитесь с нами и
                                    расскажите о физических упражнениях
                                </p>
                            </div>
                            <ul class="list clearfix">
                                <li>
                                    <i class="flaticon-call-center-agent"></i>
                                    Эксперты подержки
                                </li>
                                <li>
                                    <i class="flaticon-free-delivery"></i>
                                    Бесплатная доставка
                                </li>
                                <li>
                                    <i
                                        class="flaticon-return-of-investment"
                                    ></i>
                                    Бесплатный возврат
                                </li>
                                <li>
                                    <i class="flaticon-winner"></i>
                                    Отличное предложене
                                </li>
                            </ul>
                            <div class="link-box">
                                <a href="about.html" @click.prevent="ChangePage('AboutPage')"
                                    >Узнайте больше о наших преимуществах<i
                                        class="flaticon-right"
                                    ></i
                                ></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 col-sm-12 image-column">
                    <div id="image_block_1">
                        <div class="image-box">
                            <figure class="image image-1">
                                <img
                                    src="@/img/05444a223de9cfbd3a7d18909dceb3fb.jpg"
                                    alt=""
                                />
                            </figure>
                            <figure class="image image-2">
                                <img src="@/img/orig.jpg" alt="" />
                            </figure>
                            <figure class="image image-3">
                                <img src="@/img/boneless.png" alt="" />
                            </figure>
                            <figure class="image image-4">
                                <img
                                    src="@/img/steamworkshop_webupload_previewfile_332606755_preview.png"
                                    alt=""
                                />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "AboutStyleTwoComponent",
    props: ['ChangePage'],
};
</script>
