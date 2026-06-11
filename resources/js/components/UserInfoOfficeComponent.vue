<template>
    <div
        class="news-block-one wow fadeInUp animated animated"
        data-wow-delay="00ms"
        data-wow-duration="1500m"
    >
        <div class="inner-box">
            <div class="lower-content">
                <ul class="post-info-2 clearfix">
                    <li>
                        <h6>имя:</h6>
                        {{ user.name }}
                    </li>
                    <li>
                        <h6>Почта:</h6>
                        {{ user.email }}
                    </li>
                    <li>
                        <h6>Логин:</h6>
                        {{ user.login }}
                    </li>
                    <li>
                        <h6>Роль:</h6>
                        {{ user.role == "user" ? "пользователь" : (user.role == 'admin')?'Администратор':'Менеджер' }}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "UserInfoOffice",
    props: ["user"],
};
</script>
