<template>
    <div class="p-3 sidebar-side">
        <div class="sidebar blog-sidebar">
            <div class="sidebar-widget post-widget">
                <div class="widget-title">
                    <h3>Мои Заказы</h3>
                </div>
                <div class="post-inner">
                    <!-- заказ -->
                    <div class="post">
                        <figure class="image-box">
                            <img src="@/img/orig.jpg" alt="" />
                        </figure>
                        <h6>
                            <span class="text-sp">Товар: Выреска</span>
                            <span class="text-sp">Катеория: Мясо</span>
                        </h6>
                        <span class="post-date"
                            ><i class="far fa-calendar-alt"></i>дата заказа:
                            01.01.2026</span
                        >
                        <div class="widget-content">
                            <ul class="tags-list clearfix">
                                <li>
                                    Статус:
                                    <span class="text-sp">В обработке</span>
                                    <button class="btn-stop">
                                        <i class="bi bi-x-lg"></i> Отменить
                                        заказ
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "UserOrder",
};
</script>
