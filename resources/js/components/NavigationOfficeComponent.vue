<template>
    <nav class="main-menu navbar-expand-md navbar-light ml-3 w-100">
        <div
            class="collapse navbar-collapse show clearfix"
            id="navbarSupportedContent"
        >
            <ul class="navigation clearfix">
                <li :class="{ current: pageOffice == 'ControlUserComponent' }">
                    <a href="#" @click.prevent="ChangePageOffice('ControlUserComponent')">Пользователи</a>
                </li>
                <li :class="{ current: pageOffice == 'СategorieControlComponent' }">
                    <a href="#" @click.prevent="ChangePageOffice('СategorieControlComponent')">категории</a>
                </li>
                <li>
                    <a href="#">Товары</a>
                </li>
                <li>
                    <a href="#">Заказы</a>
                </li>
                <li>
                    <a href="#">Блог</a>
                </li>
            </ul>
        </div>
    </nav>
</template>
<script>
export default {
    name: "NavigationOfficeComponent",
    props: ["ChangePageOffice", "pageOffice"],
};
</script>
