<template>
    <section class="contact-section centred">
        <div class="auto-container">
            <div class="sec-title">
                <span>Контакты</span>
                <h2>Связаться с нами</h2>
            </div>
            <div class="form-inner">
                <div id="contact-form" class="default-form">
                    <div class="row clearfix">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <i class="far fa-user"></i>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Имя"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <i class="far fa-envelope"></i>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Э. Почта"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <i class="fas fa-phone-volume"></i>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Номер телефона"
                                />
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="form-group">
                                <i class="far fa-file-alt"></i>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Предмет"
                                />
                            </div>
                        </div>
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="form-group">
                                <i class="far fa-comment-alt"></i>
                                <textarea
                                    name="message"
                                    placeholder="Сообщение..."
                                ></textarea>
                            </div>
                        </div>
                        <div
                            class="col-lg-12 col-md-12 col-sm-12 form-group message-btn centred"
                        >
                            <button
                                class="theme-btn"
                                type="button"
                                name="submit-form"
                            >
                                ОТПРАВИТЬ СООБЩЕНИЕ
                            </button>
                        </div>
                    </div>
                </div>
                <!-- </form> -->
            </div>
        </div>
    </section>
</template>
<script>
export default {
    name: "ContactSectionPageComponent",
};
</script>
